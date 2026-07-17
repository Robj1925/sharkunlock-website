from PIL import Image, ImageDraw

def remove_white_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    
    # Target color: pure white (with some tolerance if needed)
    # We will do a flood fill starting from the top-left corner
    # ImageDraw.floodfill can do this
    ImageDraw.floodfill(img, xy=(0, 0), value=(255, 255, 255, 0), thresh=20)
    ImageDraw.floodfill(img, xy=(img.width - 1, 0), value=(255, 255, 255, 0), thresh=20)
    ImageDraw.floodfill(img, xy=(0, img.height - 1), value=(255, 255, 255, 0), thresh=20)
    ImageDraw.floodfill(img, xy=(img.width - 1, img.height - 1), value=(255, 255, 255, 0), thresh=20)

    # Note: floodfill with RGBA might behave weirdly depending on Pillow version.
    # An alternative is to convert the image to RGBA, get data, and replace colors. 
    # Let's see if this works first.
    img.save(output_path, "PNG")
    print("Background removed.")

remove_white_bg('public/wr3_product_handset.png', 'public/wr3_product_handset_nobg.png')
