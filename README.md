
# egg-cloud-doc

## 介绍

- 效果： markdown 文档应用程序
- 技术栈：
  - 壳子：
    - electron
  - 前端：
    - react
    - typescript

## 项目启动

```json
  "scripts": {
    "start": "react-scripts start",
    "electron": "electron .",
    "dev": "concurrently \"cross-env BROWSER=none npm start\" \"wait-on http://localhost:3000 && npm run electron\""
  },
```

```bash
npm run dev
```

### concurrently

- 解释：同时运行多个命令

### cross-env

- 解释：跨平台设置环境变量

### BROWSER=none

- 解释：默认情况下，cra 会自动打开浏览器，但是 electron 会自动打开浏览器，所以需要关闭

### wait-on

- 解释：等待文件或者 url 出现



