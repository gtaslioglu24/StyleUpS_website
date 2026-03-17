from pathlib import Path
from PIL import Image, ImageEnhance


ROOT = Path('/Users/gokay/Desktop/StylesUpS_website')
PUBLIC = ROOT / 'public'
SOURCE = PUBLIC / 'brand-mark.png'


def detect_content_bbox(image: Image.Image, threshold: int = 26):
    """
    Detect visual content by comparing pixels to average corner color.
    This fixes the main issue: source image may be full-canvas with large margins,
    which makes favicon look tiny.
    """
    rgb = image.convert('RGB')
    w, h = rgb.size
    px = rgb.load()

    sample = max(8, min(w, h) // 20)
    corners = []

    for y in range(sample):
        for x in range(sample):
            corners.append(px[x, y])
            corners.append(px[w - 1 - x, y])
            corners.append(px[x, h - 1 - y])
            corners.append(px[w - 1 - x, h - 1 - y])

    br = sum(c[0] for c in corners) / len(corners)
    bg = sum(c[1] for c in corners) / len(corners)
    bb = sum(c[2] for c in corners) / len(corners)

    min_x, min_y = w, h
    max_x, max_y = -1, -1

    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            diff = abs(r - br) + abs(g - bg) + abs(b - bb)
            if diff > threshold:
                if x < min_x:
                    min_x = x
                if y < min_y:
                    min_y = y
                if x > max_x:
                    max_x = x
                if y > max_y:
                    max_y = y

    if max_x == -1:
        return (0, 0, w, h)

    return (min_x, min_y, max_x + 1, max_y + 1)


def crop_and_square(image: Image.Image, with_padding: bool = True) -> Image.Image:
    # Prefer alpha bounds when available (best for logos with transparent canvas)
    alpha_bbox = image.getchannel('A').getbbox()
    if alpha_bbox:
        bbox = alpha_bbox
    else:
        bbox = detect_content_bbox(image)
    bw = bbox[2] - bbox[0]
    bh = bbox[3] - bbox[1]

    # If detection spans almost full canvas, source likely has built-in margins.
    # Apply a deterministic center zoom to make tab icon visually larger.
    if bw >= int(image.width * 0.92) and bh >= int(image.height * 0.92):
        mx = int(image.width * 0.18)
        my = int(image.height * 0.18)
        bbox = (mx, my, image.width - mx, image.height - my)

    cropped = image.crop(bbox)

    if with_padding:
        # keep a little breathing room for larger app icons
        pad_x = max(1, int(cropped.width * 0.04))
        pad_y = max(1, int(cropped.height * 0.04))

        padded = Image.new(
            'RGBA',
            (cropped.width + pad_x * 2, cropped.height + pad_y * 2),
            (0, 0, 0, 0),
        )
        padded.paste(cropped, (pad_x, pad_y), cropped)
    else:
        padded = cropped

    side = max(padded.width, padded.height)
    squared = Image.new('RGBA', (side, side), (0, 0, 0, 0))
    offset = ((side - padded.width) // 2, (side - padded.height) // 2)
    squared.paste(padded, offset, padded)
    return squared


def save_png(base: Image.Image, size: int, path: Path) -> None:
    out = base.resize((size, size), Image.Resampling.LANCZOS)
    out.save(path)


def build_tab_favicon(base: Image.Image) -> Image.Image:
    """
    Create a tab-optimized favicon:
    - solid background improves contrast
    - larger foreground mark improves perceived size at 16x16
    """
    canvas = Image.new('RGBA', (256, 256), (21, 15, 14, 255))
    # fill almost entire favicon canvas for maximum perceived size in browser tabs
    mark = base.resize((256, 256), Image.Resampling.LANCZOS)
    canvas.paste(mark, (0, 0), mark)
    return canvas


def main() -> None:
    img = Image.open(SOURCE).convert('RGBA')

    # subtle contrast/sharpness helps tiny 16x16 readability
    img = ImageEnhance.Contrast(img).enhance(1.06)
    base = crop_and_square(img, with_padding=True)
    base_for_favicon = crop_and_square(img, with_padding=False)

    save_png(base, 180, PUBLIC / 'apple-icon.png')
    save_png(base, 192, PUBLIC / 'icon-192.png')
    save_png(base, 512, PUBLIC / 'icon-512.png')

    ico_source = build_tab_favicon(base_for_favicon)
    ico_source.save(
        PUBLIC / 'favicon.ico',
        format='ICO',
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)],
    )

    print('✅ Canonical icons generated')
    print('   - public/favicon.ico')
    print('   - public/icon-192.png')
    print('   - public/icon-512.png')
    print('   - public/apple-icon.png')


if __name__ == '__main__':
    main()