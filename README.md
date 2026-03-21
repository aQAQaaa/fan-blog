# FanYiyang 的赛博朋克博客 - 部署与使用指南

🎉 恭喜！你的赛博朋克风格博客已经创建完成！

## 📁 项目结构

```
fan-blog/
├── content/posts/          # 文章目录（Markdown 文件）
│   └── welcome.md          # 示例文章
├── src/
│   ├── app/                # 页面文件
│   │   ├── page.tsx        # 首页
│   │   ├── about/page.tsx  # 关于我页面
│   │   └── blog/           # 博客页面
│   ├── components/         # 组件
│   └── lib/                # 工具函数
└── ...
```

---

## 🚀 部署到 Vercel（免费）

### 步骤 1: 上传代码到 GitHub

```bash
cd /home/admin/openclaw/workspace/fan-blog

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 创建提交
git commit -m "Initial commit: Cyberpunk blog"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/fyyfyyFYY/your-blog-repo.git

# 推送代码
git branch -M main
git push -u origin main
```

### 步骤 2: 在 Vercel 部署

1. 访问 [vercel.com](https://vercel.com)
2. 用 GitHub 账号登录（你的账号：aQAQaaa）
3. 点击 "Add New Project"
4. 选择你的博客仓库
5. 点击 "Deploy"
6. 等待部署完成（约 1-2 分钟）

### 步骤 3: 获取免费域名

部署完成后，你会获得一个免费域名：
- 格式：`your-blog-repo.vercel.app`
- 自动 HTTPS
- 全球 CDN 加速

---

## ✍️ 如何发布新文章

### 方法 1: 直接在 GitHub 上编辑（推荐）

1. 访问你的 GitHub 仓库
2. 进入 `content/posts/` 目录
3. 点击 "Add file" → "Create new file"
4. 命名文件：`文章标题.md`（英文或拼音）
5. 填写以下内容：

```markdown
---
title: "文章标题"
date: "2026-03-21"
description: "文章简介，会显示在列表页"
tags: ["标签 1", "标签 2", "标签 3"]
---

# 文章正文

在这里写你的内容...

## 小标题

更多内容...
```

6. 点击 "Commit changes"
7. Vercel 会自动重新部署，几分钟后文章就会上线！

### 方法 2: 本地编辑后推送

```bash
# 在 content/posts/ 目录创建新的 .md 文件
# 编辑完成后：

git add .
git commit -m "Add new post: 文章标题"
git push
```

---

## 💬 配置 Giscus 评论区

### 步骤 1: 创建评论仓库

1. 在 GitHub 创建一个新仓库（如 `blog-comments`）
2. 仓库设为公开（Public）

### 步骤 2: 安装 Giscus App

1. 访问 [GitHub Apps](https://github.com/apps/giscus)
2. 点击 "Install"
3. 选择你的仓库

### 步骤 3: 获取配置

1. 访问 [giscus.app/zh-CN](https://giscus.app/zh-CN)
2. 填写仓库信息
3. 选择主题：Dark
4. 复制生成的配置

### 步骤 4: 更新组件

编辑 `src/components/GiscusComponent.tsx`，将配置填入：

```typescript
<Giscus
  repo="fyyfyyFYY/blog-comments"
  repoId="YOUR_REPO_ID"
  category="Announcements"
  categoryId="YOUR_CATEGORY_ID"
  // ... 其他配置
/>
```

然后将 `enabled={false}` 改为 `enabled={true}`

---

## 🎨 自定义样式

### 修改配色

编辑 `src/app/globals.css`，找到 `:root` 部分：

```css
:root {
  --cyber-yellow: #fce300;  /* 修改主色调 */
  --cyber-black: #0a0a0a;   /* 修改背景色 */
}
```

### 修改个人信息

- **首页标题**: 编辑 `src/app/page.tsx`
- **关于我页面**: 编辑 `src/app/about/page.tsx`
- **网站标题**: 编辑 `src/app/layout.tsx` 中的 metadata

---

## 📝 文章 Markdown 语法

```markdown
---
title: "标题"
date: "2026-03-21"
description: "简介"
tags: ["标签"]
---

# 一级标题

## 二级标题

**粗体文字**

*斜体文字*

- 列表项 1
- 列表项 2

[链接文字](https://example.com)

![图片描述](图片 URL)

`行内代码`

```javascript
// 代码块
const hello = "world";
```
```

---

## 🔧 本地开发

```bash
cd /home/admin/openclaw/workspace/fan-blog

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

---

## ⚡ 性能优化建议

1. **图片优化**: 使用 WebP 格式，压缩图片
2. **减少特效**: 如果加载慢，可以简化鼠标特效
3. **CDN**: Vercel 已自动配置全球 CDN
4. **懒加载**: 图片和组件已自动懒加载

---

## 🆘 常见问题

### Q: 如何绑定自定义域名？
A: 在 Vercel 项目设置中添加域名，然后配置 DNS 记录。

### Q: 文章更新后没有显示？
A: 等待 Vercel 重新部署（约 1 分钟），或检查 Markdown 格式是否正确。

### Q: 如何添加更多页面？
A: 在 `src/app/` 目录创建新文件夹和 `page.tsx` 文件。

### Q: 如何修改导航栏？
A: 编辑 `src/components/Navbar.tsx`。

---

## 🎯 下一步

1. ✅ 上传代码到 GitHub
2. ✅ 部署到 Vercel
3. ✅ 配置 Giscus 评论（可选）
4. ✅ 写你的第一篇文章！
5. ✅ 分享给朋友们！

---

**祝你博客运营愉快！** 🚀

*如有问题，随时联系我！*
