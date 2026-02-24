from rembg import remove
from PIL import Image
import os

garment_dir = "/Users/gokay/Desktop/outfit-ai-web/public/garments"
# Only sweater and coat this time
files = ["sweater.png", "coat.png"]

for fname in files:
    backup = os.path.join(garment_dir, fname.replace(".png", "_backup.png"))
    path = os.path.join(garment_dir, fname)

    # Use original backup as source
    if os.path.exists(backup):
        src = backup
    else:
        src = path

    print(f"Processing {fname} from {os.path.basename(src)}...")
    inp = Image.open(src).convert("RGBA")
    
    # Run rembg with higher alpha matting for cleaner edges
    out = remove(
        inp,
        alpha_matting=True,
        alpha_matting_foreground_threshold=270,
        alpha_matting_background_threshold=20,
        alpha_matting_erode_size=12,
    )
    out.save(path)
    print(f"OK: {fname} - background removed with alpha matting")

print("Done!")
