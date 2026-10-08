from PIL import Image, ImageDraw, ImageFont

width, height = 1424, 752
navy = (22, 39, 64)
teal = (27, 163, 162)
teal_light = (117, 216, 212)
cream = (247, 243, 233)
muted = (188, 211, 207)

image = Image.new("RGB", (width, height), navy)
draw = ImageDraw.Draw(image)

# Teal field gives the mark a clean, branded home.
draw.rounded_rectangle((0, 0, 520, height), radius=44, fill=(232, 246, 242))
draw.rectangle((44, 0, 520, height), fill=(232, 246, 242))
draw.ellipse((-150, -170, 510, 490), fill=(198, 235, 226))
draw.ellipse((40, 390, 620, 970), fill=(215, 242, 235))

mark = Image.open("public/beaming-health-hummingbird.webp").convert("RGBA")
mark.thumbnail((430, 455), Image.Resampling.LANCZOS)
mark_x = (520 - mark.width) // 2
mark_y = 82
image.paste(mark, (mark_x, mark_y), mark)

serif = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
sans = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
serif_font = ImageFont.truetype(serif, 68)
serif_small = ImageFont.truetype(serif, 38)
sans_font = ImageFont.truetype(sans, 26)
sans_small = ImageFont.truetype(sans, 22)

text_x = 620
draw.text((text_x, 115), "Beaming", font=serif_font, fill=cream)
draw.text((text_x, 190), "Health", font=serif_font, fill=cream)
draw.text((text_x + 5, 290), "Wellness, Reimagined", font=serif_small, fill=teal_light)

draw.rounded_rectangle((615, 375, 1330, 560), radius=4, outline=teal, width=3)
draw.text((665, 420), "Meet Liz, Functional", font=sans_font, fill=cream)
draw.text((665, 460), "Nutritionist. Explore", font=sans_font, fill=cream)
draw.text((665, 500), "personalized wellness", font=sans_font, fill=cream)

draw.arc((1130, 435, 1450, 760), 190, 350, fill=teal_light, width=2)
draw.arc((1080, 465, 1410, 790), 190, 350, fill=teal, width=2)

# Social platforms use the bottom strip for the page title and domain.
draw.rounded_rectangle((0, 640, width, height), radius=40, fill=teal)
draw.rectangle((0, 640, width, 690), fill=teal)
draw.text((42, 661), "Liz | Functional Nutrition, Longevity & Wellness", font=sans_font, fill=(255, 255, 255))
draw.text((42, 704), "beaminghealth.net", font=sans_small, fill=(225, 249, 246))

image.save("public/beaming-health-og-image.webp", format="WEBP", quality=94, method=6)
