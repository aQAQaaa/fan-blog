#!/bin/bash

# 赛博朋克博客快速部署脚本
# 使用方法：./deploy.sh

echo "🌃 赛博朋克博客部署脚本"
echo "========================"
echo ""

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
  echo "❌ 错误：请在博客项目根目录运行此脚本"
  exit 1
fi

echo "📦 步骤 1: 初始化 Git 仓库..."
if [ ! -d ".git" ]; then
  git init
  echo "✅ Git 仓库已初始化"
else
  echo "✅ Git 仓库已存在"
fi

echo ""
echo "📝 步骤 2: 添加所有文件..."
git add .
echo "✅ 文件已添加"

echo ""
echo "💾 步骤 3: 创建提交..."
git commit -m "Deploy cyberpunk blog"
echo "✅ 提交完成"

echo ""
echo "🔗 步骤 4: 配置远程仓库"
echo "请在 GitHub 创建一个新仓库，然后输入仓库地址："
echo "格式：https://github.com/fyyfyyFYY/仓库名.git"
read -p "仓库地址：" REPO_URL

if [ -n "$REPO_URL" ]; then
  git remote add origin $REPO_URL 2>/dev/null || git remote set-url origin $REPO_URL
  echo "✅ 远程仓库已配置"
else
  echo "⚠️  跳过远程仓库配置"
fi

echo ""
echo "📤 步骤 5: 推送代码..."
git branch -M main
git push -u origin main
echo "✅ 代码已推送"

echo ""
echo "🎉 部署准备完成！"
echo ""
echo "下一步："
echo "1. 访问 https://vercel.com"
echo "2. 用 GitHub 账号登录（aQAQaaa）"
echo "3. 导入你的仓库"
echo "4. 点击 Deploy"
echo ""
echo "祝你使用愉快！🚀"
