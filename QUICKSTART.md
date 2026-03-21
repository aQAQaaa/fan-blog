# 🚀 快速启动指南

Hey FanYiyang！你的赛博朋克博客已经准备好了！

## ✅ 已完成的工作

- [x] Next.js 项目创建
- [x] 赛博黄黑配色主题
- [x] 鼠标滑动光效
- [x] 扫描线特效
- [x] 霓虹文字效果
- [x] 故障艺术效果
- [x] 首页、文章列表、文章详情页、关于我页面
- [x] Markdown 文章系统
- [x] Giscus 评论组件（待配置）
- [x] 响应式设计（手机/电脑都好看）
- [x] 性能优化

---

## 📋 接下来你需要做的事

### 1️⃣ 上传到 GitHub（5 分钟）

打开终端，运行：

```bash
cd /home/admin/openclaw/workspace/fan-blog

# 初始化 Git
git init

# 添加文件
git add .

# 提交
git commit -m "Initial commit: FanYiyang's cyberpunk blog"

# 创建 main 分支
git branch -M main
```

然后在 GitHub 上：
1. 访问 https://github.com/new
2. 仓库名：`fan-blog`（或其他你喜欢的名字）
3. 设为公开（Public）
4. 点击 "Create repository"
5. 复制仓库地址，运行：

```bash
git remote add origin https://github.com/fyyfyyFYY/你的仓库名.git
git push -u origin main
```

### 2️⃣ 部署到 Vercel（3 分钟）

1. 访问 https://vercel.com
2. 用 GitHub 账号登录（aQAQaaa）
3. 点击 "Add New Project"
4. 选择你的 `fan-blog` 仓库
5. 点击 "Deploy"
6. 等待 1-2 分钟

完成！你会获得一个免费域名：`fan-blog-xxx.vercel.app`

### 3️⃣ 发布你的第一篇文章（2 分钟）

**方法 A：在 GitHub 上直接写**

1. 访问你的 GitHub 仓库
2. 进入 `content/posts/` 目录
3. 点击 "Add file" → "Create new file"
4. 命名：`my-first-post.md`
5. 填写内容：

```markdown
---
title: "我的第一篇文章"
date: "2026-03-21"
description: "这是我的第一篇博客文章！"
tags: ["博客", "生活"]
---

# 你好，世界！

这是我的第一篇博客文章...
```

6. 点击 "Commit changes"
7. Vercel 会自动更新，1 分钟后访问你的网站就能看到新文章！

**方法 B：本地写好后推送**

在 `content/posts/` 目录创建 `.md` 文件，然后：

```bash
git add .
git commit -m "Add new post"
git push
```

### 4️⃣ 配置评论区（可选，10 分钟）

如果想要评论功能：

1. 创建一个新 GitHub 仓库（如 `blog-comments`）
2. 访问 https://github.com/apps/giscus 安装 Giscus
3. 访问 https://giscus.app/zh-CN 配置
4. 复制配置到 `src/components/GiscusComponent.tsx`
5. 将 `enabled={false}` 改为 `enabled={true}`
6. 推送代码到 GitHub

---

## 🎨 自定义你的博客

### 修改个人信息

- **关于我页面**: 编辑 `src/app/about/page.tsx`
- **网站标题**: 编辑 `src/app/layout.tsx` 中的 `metadata`
- **首页文字**: 编辑 `src/app/page.tsx`

### 修改配色

编辑 `src/app/globals.css`，找到 `:root` 部分：

```css
:root {
  --cyber-yellow: #fce300;  /* 改成你喜欢的颜色 */
}
```

---

## 📱 访问你的博客

部署完成后，你可以通过以下方式访问：

- **Vercel 免费域名**: `https://fan-blog-xxx.vercel.app`
- **本地开发**: `npm run dev` 后访问 `http://localhost:3000`

---

## 🆘 需要帮助？

### 常见问题

**Q: 推送代码后网站没更新？**
A: 访问 Vercel 项目页面，查看部署状态，等待部署完成。

**Q: 文章格式乱了？**
A: 检查 Markdown 格式，确保 frontmatter（--- 之间的内容）正确。

**Q: 如何绑定自己的域名？**
A: 在 Vercel 项目设置 → Domains 中添加。

**Q: 如何删除或修改文章？**
A: 在 GitHub 上编辑或删除 `content/posts/` 中的 `.md` 文件，然后推送。

---

## 🎯 项目文件说明

```
fan-blog/
├── content/posts/          # 📝 在这里写文章
│   └── welcome.md          # 示例文章
├── src/
│   ├── app/                # 📄 页面文件
│   │   ├── page.tsx        # 首页
│   │   ├── about/          # 关于我页面
│   │   └── blog/           # 博客页面
│   ├── components/         # 🧩 组件
│   │   ├── Navbar.tsx      # 导航栏
│   │   ├── Footer.tsx      # 页脚
│   │   ├── CursorGlow.tsx  # 鼠标特效
│   │   └── GiscusComponent.tsx  # 评论组件
│   └── lib/                # 🛠️ 工具函数
│       └── posts.ts        # 文章读取工具
├── src/app/globals.css     # 🎨 全局样式（配色、特效）
├── deploy.sh               # 🚀 部署脚本
└── README.md               # 📖 详细文档
```

---

## 🎉 恭喜！

你已经拥有了一个：
- ✨ 赛博朋克风格的个人博客
- 🌐 可在公网访问
- 📝 支持 Markdown 写文章
- 💬 支持评论功能
- 📱 手机电脑都好看
- ⚡ 性能优秀，加载快速

**开始写作吧！** 🖋️

---

*如有任何问题，随时问我！*
