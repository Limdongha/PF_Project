# -*- coding: utf-8 -*-
"""예시 아트(PNG) 생성기. 실제 작업물로 교체하기 전까지 자리를 채워줍니다."""
import math, os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

OUT_WORKS = os.path.join(os.path.dirname(__file__), "..", "assets", "works")
OUT_IMG   = os.path.join(os.path.dirname(__file__), "..", "assets", "img")
os.makedirs(OUT_WORKS, exist_ok=True)
os.makedirs(OUT_IMG, exist_ok=True)

def vgrad(h, w, stops):
    ys = np.linspace(0, 1, h)
    pos = [s[0] for s in stops]
    out = np.zeros((h, w, 3), float)
    for c in range(3):
        col = [s[1][c] / 255 for s in stops]
        out[:, :, c] = np.interp(ys, pos, col)[:, None]
    return out

def radial(h, w, cx, cy, rx, ry):
    yy, xx = np.mgrid[0:h, 0:w]
    return np.sqrt(((xx - cx) / rx) ** 2 + ((yy - cy) / ry) ** 2)

def noise(h, w, scale, seed):
    rng = np.random.default_rng(seed)
    sm = rng.random((max(2, h // scale), max(2, w // scale)))
    im = Image.fromarray((sm * 255).astype("uint8")).resize((w, h), Image.BICUBIC)
    return np.asarray(im).astype(float) / 255

def to_img(arr):
    return Image.fromarray((np.clip(arr, 0, 1) * 255).astype("uint8"))

def glow(size, draw_fn, blur):
    lay = Image.new("RGBA", size, (0, 0, 0, 0))
    draw_fn(ImageDraw.Draw(lay))
    return lay.filter(ImageFilter.GaussianBlur(blur))

def bez(p0, p1, p2, p3, n=60):
    pts = []
    for i in range(n + 1):
        t = i / n; u = 1 - t
        x = u*u*u*p0[0] + 3*u*u*t*p1[0] + 3*u*t*t*p2[0] + t*t*t*p3[0]
        y = u*u*u*p0[1] + 3*u*u*t*p1[1] + 3*u*t*t*p2[1] + t*t*t*p3[1]
        pts.append((x, y))
    return pts

W, H = 1600, 1000

# ---------- 1. water ----------
def water():
    base = vgrad(H, W, [(0, (10, 42, 68)), (0.5, (14, 111, 140)), (1, (26, 214, 192))])
    n = noise(H, W, 26, 7)
    caustic = np.clip((n - 0.55) * 3, 0, 1)
    base += caustic[:, :, None] * np.array([0.25, 0.55, 0.5])
    img = to_img(base).convert("RGBA")
    g = glow((W, H), lambda d: [
        d.line([(x, 320 + 40*math.sin(x/180)) for x in range(0, W, 6)], fill=(180, 247, 238, 160), width=3),
        d.line([(x, 470 + 50*math.sin(x/150+1)) for x in range(0, W, 6)], fill=(180, 247, 238, 120), width=3),
        d.line([(x, 640 + 45*math.sin(x/170+2)) for x in range(0, W, 6)], fill=(180, 247, 238, 90), width=3),
    ], 2)
    img.alpha_composite(g)
    d = ImageDraw.Draw(img)
    for (x, y, r) in [(430,520,4),(690,430,3),(980,560,4),(1180,470,3),(250,650,3),(1320,610,4)]:
        d.ellipse([x-r, y-r, x+r, y+r], fill=(255, 255, 255, 150))
    return img.convert("RGB")

# ---------- 2. vfx ----------
def vfx():
    d2 = radial(H, W, 800, 540, 430, 430)
    ramp = np.clip(1 - d2, 0, 1)
    col = np.zeros((H, W, 3))
    stops = [(0, (10,4,8)), (0.45, (122,16,32)), (0.7, (255,77,46)), (0.88, (255,176,31)), (1, (255,243,196))]
    pos = [s[0] for s in stops]
    for c in range(3):
        col[:, :, c] = np.interp(ramp, pos, [s[1][c]/255 for s in stops])
    n = noise(H, W, 18, 11) * 0.5 + 0.6
    mask = np.clip(ramp * n + np.clip(0.5 - d2, 0, 1), 0, 1)
    base = col * (0.25 + 0.95 * mask[:, :, None])
    img = to_img(base).convert("RGBA")
    g = glow((W, H), lambda d: d.ellipse([800-260, 540-200, 800+260, 540+200], fill=(255, 210, 122, 120)), 80)
    img.alpha_composite(g)
    d = ImageDraw.Draw(img)
    rng = np.random.default_rng(3)
    for _ in range(40):
        a = rng.uniform(0, 2*math.pi); rr = rng.uniform(260, 560)
        x, y = 800 + rr*math.cos(a), 540 + rr*math.sin(a)*0.8
        s = rng.uniform(2, 6)
        d.ellipse([x-s, y-s, x+s, y+s], fill=(255, 210, 122, 220))
    return img.convert("RGB")

# ---------- 3. tool ----------
def tool():
    base = vgrad(H, W, [(0, (20, 24, 33)), (1, (10, 12, 18))])
    img = to_img(base).convert("RGBA")
    d = ImageDraw.Draw(img)
    for x in range(0, W, 100): d.line([(x, 0), (x, H)], fill=(30, 37, 51, 255), width=1)
    for y in range(0, H, 100): d.line([(0, y), (W, y)], fill=(30, 37, 51, 255), width=1)
    curves = [((362,300),(490,300),(512,460),(640,460)),
              ((362,620),(490,620),(512,460),(640,460)),
              ((900,460),(1030,460),(1052,320),(1180,320)),
              ((900,460),(1030,460),(1052,620),(1180,620))]
    for c in curves:
        d.line(bez(*c), fill=(70, 90, 130, 255), width=3, joint="curve")
    boxes = [(200,250,360,350,(45,212,191)),(200,570,360,670,(124,92,255)),
             (640,400,900,520,(226,232,240)),(1180,270,1360,370,(245,158,11)),
             (1180,570,1360,670,(45,212,191))]
    labels = ["RIG IN","MESH IN","VALIDATE","EXPORT","IMPORT"]
    for (x0,y0,x1,y1,col), lab in zip(boxes, labels):
        d.rounded_rectangle([x0,y0,x1,y1], radius=10, fill=(27,34,51,255), outline=col+(255,), width=2)
        d.text((x0+18, (y0+y1)//2-8), lab, fill=(200,207,215,255))
    return img.convert("RGB")

# ---------- 4. light ----------
def light():
    base = vgrad(H, W, [(0,(26,17,64)),(0.45,(123,58,140)),(0.7,(232,111,62)),(0.85,(255,193,77)),(1,(58,28,26))])
    img = to_img(base).convert("RGBA")
    g = glow((W, H), lambda d: d.ellipse([800-360, 720-200, 800+360, 720+200], fill=(255, 246, 216, 150)), 70)
    img.alpha_composite(g)
    rays = Image.new("RGBA", (W, H), (0,0,0,0)); rd = ImageDraw.Draw(rays)
    for bx in [-260,-120,90,220,420]:
        rd.polygon([(800,720),(800+bx-40,0),(800+bx+40,0)], fill=(255,233,176,40))
    img.alpha_composite(rays.filter(ImageFilter.GaussianBlur(8)))
    d = ImageDraw.Draw(img)
    d.polygon([(0,760),(220,600),(420,720),(640,560),(860,740),(1080,600),(1320,760),(1600,640),(1600,H),(0,H)], fill=(42,21,48,220))
    d.polygon([(0,860),(260,740),(520,840),(820,700),(1120,850),(1380,760),(1600,860),(1600,H),(0,H)], fill=(22,10,24,255))
    return img.convert("RGB")

# ---------- 5. rnd (dissolve) ----------
def rnd():
    arr = vgrad(H, W, [(0,(6,7,15)),(1,(6,7,15))])
    sph_d = radial(H, W, 800, 500, 320, 320)
    ramp = np.clip(1 - sph_d, 0, 1)
    scol = np.zeros((H, W, 3))
    stops=[(0,(27,31,77)),(0.5,(91,108,255)),(1,(205,214,255))]; pos=[s[0] for s in stops]
    for c in range(3): scol[:,:,c]=np.interp(ramp,pos,[s[1][c]/255 for s in stops])
    n = noise(H, W, 20, 5)
    inside = sph_d < 1
    keep = (n > 0.46) & inside
    edge = (n > 0.40) & (n <= 0.46) & inside
    arr[keep] = scol[keep]
    arr[edge] = np.array([39, 240, 216]) / 255
    img = to_img(arr).convert("RGBA")
    eg = Image.new("RGBA",(W,H),(0,0,0,0)); ea=np.asarray(eg).copy()
    ea[edge]=[39,240,216,255]; eg=Image.fromarray(ea)
    img.alpha_composite(eg.filter(ImageFilter.GaussianBlur(6)))
    return img.convert("RGB")

# ---------- 6. hair ----------
def hair():
    base = vgrad(H, W, [(0,(22,10,24)),(1,(8,5,16))])
    img = to_img(base).convert("RGBA")
    strands = [(120,-40,240,300,60,600,320,1040),(340,-40,460,320,280,620,540,1040),
               (560,-40,680,300,500,640,760,1040),(780,-40,900,320,720,620,980,1040),
               (1000,-40,1120,300,940,640,1200,1040),(1220,-40,1340,320,1160,620,1420,1040)]
    body = Image.new("RGBA",(W,H),(0,0,0,0)); bd=ImageDraw.Draw(body)
    for i,(a,b,c,e,f,g2,h2,k) in enumerate(strands):
        pts=bez((a,b),(c,e),(f,g2),(h2,k))
        bd.line(pts, fill=(150,70,180,235), width=26, joint="curve")
    img.alpha_composite(body)
    spec = Image.new("RGBA",(W,H),(0,0,0,0)); sd=ImageDraw.Draw(spec)
    for idx in (0,2,4):
        a,b,c,e,f,g2,h2,k=strands[idx]
        sd.line(bez((a,b),(c,e),(f,g2),(h2,k)), fill=(155,255,242,230), width=5, joint="curve")
    img.alpha_composite(spec.filter(ImageFilter.GaussianBlur(2)))
    return img.convert("RGB")

# ---------- hero background ----------
def hero():
    w, h = 1920, 1080
    d2 = radial(h, w, 1350, 360, 1100, 900)
    ramp = np.clip(1 - d2, 0, 1)
    base = vgrad(h, w, [(0,(8,8,14)),(1,(4,4,8))])
    col = np.zeros((h, w, 3))
    stops=[(0,(4,4,8)),(0.6,(40,30,90)),(0.85,(30,120,150)),(1,(40,200,190))]; pos=[s[0] for s in stops]
    for c in range(3): col[:,:,c]=np.interp(ramp,pos,[s[1][c]/255 for s in stops])
    base = base*0.4 + col*0.85
    n = noise(h, w, 30, 9)
    base += np.clip((n-0.6),0,1)[:,:,None]*np.array([0.15,0.35,0.35])
    img = to_img(base).convert("RGBA")
    g = glow((w,h), lambda dr: dr.ellipse([1350-420,360-360,1350+420,360+360], fill=(40,200,190,90)), 120)
    img.alpha_composite(g)
    return img.convert("RGB")

jobs = [("water",water),("vfx",vfx),("tool",tool),("light",light),("rnd",rnd),("hair",hair)]
for name, fn in jobs:
    fn().save(os.path.join(OUT_WORKS, name + ".png"), optimize=True)
    print("works/" + name + ".png")
hero().save(os.path.join(OUT_IMG, "hero.png"), optimize=True)
print("img/hero.png")
print("done")
