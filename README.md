# Anh Duong Security Website

Website công ty bao ve duoc xay dung bang `Next.js`.

## Chay local

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
npm start
```

## Test

```bash
npm run test:e2e
npm run test:quality
npm run test:visual
npm run test:lighthouse
```

## Deploy len Vercel bang CLI

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

## Dua len GitHub roi noi voi Vercel

```bash
git init
git add .
git commit -m "Initial website setup"
```

Sau do tao mot repository moi tren GitHub va chay:

```bash
git remote add origin <github-repo-url>
git branch -M main
git push -u origin main
```

Khi repository da len GitHub:

1. Dang nhap `vercel.com`
2. Chon `Add New Project`
3. Import repository tu GitHub
4. Vercel se tu nhan dien `Next.js`
5. Bam `Deploy`
