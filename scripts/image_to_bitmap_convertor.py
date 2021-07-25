from PIL import Image
import numpy as np
import os

def main():
    img = Image(os.path.join('..', 'img', 'paras_prf_pic.jpeg'))
    aray = np.array(img)
    r, g, b = np.split(aray, 3, axis = 2)
    r = r.reshape(-1)
    g = g.reshape(-1)
    b = b.reshape(-1)
    bitmap = list(map(lambda x: 0.299*x[0]+0.587*x[1]+0.114*x[2], zip(r,g,b)))
    bitmap = np.array(bitmap).reshape([aray.shape[0], aray.shape[1]])
    bitmap = np.dot((bitmap > 128).astype(float),255)
    im = Image.fromarray(bitmap.astype(np.uint8))
    


if __init__ == "__main__":
    main()
