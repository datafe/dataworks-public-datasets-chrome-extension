<div align="center">
<img src="https://img.alicdn.com/imgextra/i4/O1CN01G7NOWT24luTsw6rjR_!!6000000007432-2-tps-128-128.png" alt="logo"/>
<h1>DataWorks Public Datasets Omnibox Chrome Extension</h1>

![](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![](https://badges.aleen42.com/src/vitejs.svg)

</div>

## Usage Documents

## Demo

### 应用安装 Extension Installation [link](https://chromewebstore.google.com/detail/%E9%98%BF%E9%87%8C%E4%BA%91-dataworks-%E5%85%AC%E5%85%B1%E6%95%B0%E6%8D%AE%E9%9B%86/dhddjlgoniabgogocminjceggkleeclk?hl=en)

- 此插件提供多种公开数据集如阿里电商数据集、淘宝广告数据集、QS 世界大学排名数据集、亚运奖牌榜等 SQL 查询语句，支持 MaxCompute、Hologres 及 EMR Spark 语言。

### 操作影片
- [YouTube](https://www.youtube.com/watch?v=qqgBn4iriM0)

### 示例
![image](https://img.alicdn.com/imgextra/i4/O1CN01dUmODt1F5HD3E6khb_!!6000000000435-0-tps-1280-800.jpg)
![image](https://img.alicdn.com/imgextra/i4/O1CN01CQYE8A1H6JKp3nOFE_!!6000000000708-0-tps-1280-800.jpg)

## Table of Contents

- [Intro](#intro)
- [Features](#features)
- [Installation](#installation)
    - [Procedures](#procedures)
        - [Chrome](#chrome)
        - [Firefox](#firefox)
- [Documents](#documents)

## Intro <a name="intro"></a>

This is a Chrome extension using data service APIs.

## Features <a name="features"></a>

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vite](https://vitejs.dev/)
- [SASS](https://sass-lang.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/getting-started.html#automatic-recommended)
- [Commitlint](https://commitlint.js.org/#/guides-local-setup?id=install-commitlint)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)
- [Chrome Extension Manifest Version 3](https://developer.chrome.com/docs/extensions/mv3/intro/)
- HRR(Hot Rebuild & Refresh/Reload)

## Installation <a name="installation"></a>

## Procedures: <a name="procedures"></a>

1. Clone this repository.
2. Change `name` and `description` in package.json => **Auto synchronize with manifest**
3. Install pnpm globally: `npm install -g pnpm` (check your node version >= 16.6, recommended >= 18)
4. Run `pnpm install`

## And next, depending on the needs:

### For Chrome: <a name="chrome"></a>

1. Run:
    - Dev: `pnpm dev` or `npm run dev`
    - Prod: `pnpm build` or `npm run build`
2. Open in browser - `chrome://extensions`
3. Check - `Developer mode`
4. Find and Click - `Load unpacked extension`
5. Select - `dist` folder

### For Firefox: <a name="firefox"></a>

1. Run:
    - Dev: `pnpm dev:firefox` or `npm run dev:firefox`
    - Prod: `pnpm build:firefox` or `npm run build:firefox`
2. Open in browser - `about:debugging#/runtime/this-firefox`
3. Find and Click - `Load Temporary Add-on...`
4. Select - `manifest.json` from `dist` folder

### <i>Remember in firefox you add plugin in temporary mode, that's mean it's disappear after close browser, you must do it again, on next launch.</i>

## Documents <a name="documents"></a>

- [Vite Plugin](https://vitejs.dev/guide/api-plugin.html)
- [ChromeExtension](https://developer.chrome.com/docs/extensions/mv3/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Rollup-plugin-chrome-extension](https://www.extend-chrome.dev/rollup-plugin)

