# Nextjs Web Template

## Version

- node: 16.13.2
- next: 12.2.5

## Build

```bash
npm run dev
# or
yarn dev
```

## Directory

```bash
├── components
│   ├── Common
│   │   Header etc...
│   │   :   ├── assets
│   │       ├── index.tsx
│   │       └── style.module.scss     
│   │
│   ├── About etc... 
│   :   ├── assets
│       ├── index.tsx
│       └── style.module.scss  
│
├── pages 
│   ├── about etc...
│   │   ├── parts
│   │   │   ├── detail.tsx
│   │   │   └── index.tsx
│   │   └── index.tsx
│   ├── _app.js
│   └── index.tsx
├── public
├── styles
├── next-env.d.ts
├── next-config.js
├── package.json
└── README.md
```