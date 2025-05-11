# **SVGRast** 🌟

⚡ **Blazing-Fast SVG to Raster Image Conversion!** 🖼️

SVGRast is a **lightweight** 🪶 Node.js tool that **renders SVG files into high-quality raster images** (PNG, JPEG, WebP) using **Puppeteer** 🚀. Perfect for automation, CI/CD pipelines, and dynamic image generation!

## **✨ Features**

✔️ **Multiple Formats** – Supports `PNG`, `JPEG`, and `WebP`  
✔️ **Flexible Input** – Works with **local files** (`./image.svg`) or **remote URLs** (`https://example.com/image.svg`)  
✔️ **Customizable Output** – Set `width`, `height`, `background color`, and `quality` 🎨  
✔️ **CLI & API** – Use via **command line** or **programmatically** in Node.js  
✔️ **Fast & Lightweight** – No heavy dependencies; just Puppeteer ⚡

## ☕ Support

If you find this project helpful, consider supporting me:

[![☕ ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B01E8SY7)

## **🚀 Installation**

### **Globally (CLI Tool)**

```bash
npm install -g svgrast
```

### **Locally (Node.js Module)**

```bash
npm install svgrast
```

---

## **💻 Usage**

### **1. Command Line (CLI) 🛠️**

```bash
svgrast input.svg output.png [options]
```

#### **🔧 Options**

| Option      | Description                        | Example                   |
| ----------- | ---------------------------------- | ------------------------- |
| `--width`   | Output width (pixels) 📏           | `--width 800`             |
| `--height`  | Output height (pixels) 📐          | `--height 600`            |
| `--type`    | Image type (`png`, `jpeg`, `webp`) | `--type webp`             |
| `--quality` | Quality (0-100, JPEG/WebP only) 🔍 | `--quality 90`            |
| `--bgcolor` | Background color (e.g., `#FFF`) 🎨 | `--bgcolor "transparent"` |
| `--par`     | SVG `preserveAspectRatio` ⚖️       | `--par "xMidYMid meet"`   |

#### **📌 Examples**

```bash
# Convert local SVG to PNG 🖼️
svgrast input.svg output.png --width 800 --bgcolor white

# Convert remote SVG to WebP 🌐
svgrast "https://example.com/logo.svg" output.webp --type webp

# Pipe PNG to stdout (for scripts) 📤
svgrast input.svg - --type png > output.png
```

### **2. Node.js API 💡**

```js
import { render_svg } from "svgrast";

await render_svg({
	path: "input.svg", // or uri: 'https://example.com/image.svg'
	output: "output.png",
	width: 800,
	height: 600,
	type: "png",
	bgcolor: "white",
});
```

---

## **🔧 How It Works**

1. **Launch Puppeteer** (headless Chrome) 🌐
2. **Load SVG** (file or URL) 📂
3. **Adjust Dimensions** (if `width`/`height` specified) 📏
4. **Take Screenshot** (rasterize SVG) 📸
5. **Save/Return Image** (file or binary buffer) 💾

---

## **🤝 Contributing**

PRs welcome! To set up:

```bash
git clone https://github.com/your/svgrast.git
cd svgrast
npm install
npm test
```

### **🚧 Roadmap**

- [ ] **PDF export support** 📄
- [ ] **AVIF/TIFF format support** 🖼️
- [ ] **Better error handling** for malformed SVGs ❌

---

### **💡 Why SVGRast?**

- ✅ **No heavy libraries** (like ImageMagick) 🏋️‍♂️
- ✅ **Accurate rendering** (Puppeteer = real browser engine) 🎯
- ✅ **Works anywhere** (Node.js, Docker, GitHub Actions) 🌍

**Try it now!** ⚡

```bash
npx svgrast input.svg output.png
```

🎉 **Happy Converting!** 🎉
