from PIL import Image
import os

garment_dir = "/Users/gokay/Desktop/outfit-ai-web/public/garments"
files = ["sweater.png", "coat.png", "pants.png", "shoes.png"]

for fname in files:
    path = os.path.join(garment_dir, fname)
    if not os.path.exists(path):
        print(f"SKIP: {fname} not found")
        continue

    # Use backup as source if exists (original untouched file)
    backup = os.path.join(garment_dir, fname.replace(".png", "_backup.png"))
    if os.path.exists(backup):
        img = Image.open(backup).convert("RGBA")
    else:
        img = Image.open(path).convert("RGBA")
        # Save backup of original
        img.save(backup)

    data = img.getdata()
    new_data = []

    for pixel in data:
        r, g, b, a = pixel
        # If pixel is close to white, make transparent
        whiteness = min(r, g, b)
        if r > 225 and g > 225 and b > 225:
            if whiteness > 248:
                new_data.append((r, g, b, 0))
            elif whiteness > 240:
                alpha = int((248 - whiteness) * 32)
                new_data.append((r, g, b, max(0, min(255, alpha))))
            elif whiteness > 225:
                alpha = int(180 + (240 - whiteness) * 5)
                new_data.append((r, g, b, max(0, min(255, alpha))))
            else:
                new_data.append(pixel)
        else:
            new_data.append(pixel)

    img.putdata(new_data)
    img.save(path)
    print(f"OK: {fname} - transparent background applied")

print("All done!")
