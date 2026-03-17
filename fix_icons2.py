from PIL import Image
from pathlib import Path
import os

p = Path('/Users/gokay/Desktop/StylesUpS_website')
src = p / 'app' / 'styleupsnewlogo.png'

# Load image
img = Image.open(src).convert('RGBA')
data = img.getdata()
new_data = []

# Daha agresif beyaz/açık renk temizliği (kenar yumuşatma kısımlarını traşlıyoruz)
for r, g, b, a in data:
    avg = (r + g + b) / 3
    # Çok açık tonlu gri/beyaz veya düşük saydamlık tamamen silinir
    if avg > 170 or a < 50:
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append((r, g, b, a))

img.putdata(new_data)

# Tam olarak logoya sıfırlayarak kırpma (etrafındaki görünmez boşlukları da atar)
bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)

# Sadece public klasörüne, maksimize edilmiş ikonları koyalım
def make_icon(size, out_path):
    # Yeniden boyutlandırırken en keskin ve şeffaf tutum
    resized = img.resize((size, size), Image.Resampling.LANCZOS)
    resized.save(out_path)

make_icon(32, p / 'public' / 'icon.png')
make_icon(192, p / 'public' / 'icon-192.png')
make_icon(512, p / 'public' / 'icon-512.png')
make_icon(180, p / 'public' / 'apple-icon.png')
make_icon(180, p / 'public' / 'apple-touch-icon.png')

# Gerçek ICO dosyası için
favicon_img = img.resize((32, 32), Image.Resampling.LANCZOS)
favicon_img.save(p / 'public' / 'favicon.ico', format='ICO', sizes=[(16, 16), (32, 32)])

print('Icons fixed and output ONLY to public folder.')