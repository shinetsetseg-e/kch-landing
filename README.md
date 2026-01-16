
# KCH Solution - Premium Corporate Website

Энэхүү төсөл нь KCH Solution LLC-ийн корпорацийн вэбсайт бөгөөд Vite, React 19 болон TypeScript ашиглан бүтээгдсэн.

## Локал орчинд суулгах заавар (Local Setup)

1.  **Төслийг татаж авах:** Төслийн файлуудыг нэг фолдерт бэлдэнэ.
2.  **Node.js шалгах:** Таны компьютерт Node.js (v18+) суусан байх шаардлагатай.
3.  **Сангуудыг суулгах:**
    ```bash
    npm install
    ```
4.  **Хөгжүүлэлтийн горимд асаах:**
    ```bash
    npm run dev
    ```
    Вэб хөтөч дээр `http://localhost:3000` хаягаар нээгдэнэ.

## Продакшн хувилбар бэлдэх (Build)

Вэбсайтыг deploy хийхэд бэлэн болгож хөрвүүлэх:
```bash
npm run build
```
Хөрвүүлсэн файлууд `dist/` фолдерт хадгалагдана.

## Deploy хийх заавар

### 1. Vercel (Хамгийн хялбар)
- [Vercel](https://vercel.com/) руу нэвтэрч ороод "New Project" дарна.
- GitHub репозиторио холбоно.
- Framework Preset: `Vite` сонгогдсон байна.
- "Deploy" товчийг дарна.

### 2. Netlify
- `dist` фолдерыг Netlify-ийн "Drag and Drop" хэсэгт чирч оруулах эсвэл GitHub-тай холбон deploy хийнэ.

### 3. GitHub Pages
1. `gh-pages` санг суулгана: `npm install gh-pages --save-dev`
2. `package.json`-д `"homepage": "https://your-username.github.io/repo-name"` нэмнэ.
3. Scripts хэсэгт `"deploy": "gh-pages -d dist"` нэмээд `npm run deploy` ажиллуулна.

---
**KCH Solution Engineering Team**
