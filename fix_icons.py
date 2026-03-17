from PIL import Image
from pathlib import Path
import os

p = Path('/Users/gokay/Desktop/StylesUpS_website')
src = p / 'app' / 'styleupsnewlogo.png'

# Load image
img = Image.open(src).convert('RGBA')
data = img.getdata()
new_data = []

# Aggressively remove white/near-white backgrounds (fringe)
for r, g, b, a in data:
    if r > 180 and g > 180 and b > 180:
        new_data.append((255, 255, 255, 0))
    elif a < 40:
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append((r, g, b, a))

img.putdata(new_data)

# Crop to exact bounding box
bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)

# Function to generate max-size icon
def make_icon(size, out_path):
    # scale up to 100% of the size
    resized = img.resize((size, size), Image.Resampling.LANCZOS)
    resized.save(out_path)

make_icon(32, p / 'public' / 'icon.png')
make_icon(180, p / 'public' / 'apple-icon.png')
make_icon(32, p / 'app' / 'icon.png')

# Create true ICO file 
favicon_img = img.resize((32, 32), Image.Resampling.LANCZOS)
favicon_img.save(p / 'app' / 'favicon.ico', format='ICO', sizes=[(32, 32)])
favicon_img.save(p / 'public' / 'favicon.ico', format='ICO', sizes=[(32, 32)])

print('Icons successfully cropped and maximized in size.')