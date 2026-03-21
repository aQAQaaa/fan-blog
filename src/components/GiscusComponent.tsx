'use client';

import Giscus from '@giscus/react';

interface GiscusComponentProps {
  enabled?: boolean;
}

export default function GiscusComponent({ enabled = false }: GiscusComponentProps) {
  if (!enabled) {
    return (
      <div className="cyber-card p-6 text-center">
        <h3 className="neon-text text-xl font-bold mb-4">评论区</h3>
        <p className="text-gray-400 mb-4">
          评论功能需要配置 Giscus
        </p>
        <div className="text-left text-sm text-gray-500 space-y-2 bg-[#0a0a0a] p-4 rounded">
          <p>配置步骤：</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>创建一个 GitHub 仓库用于存储评论</li>
            <li>安装 Giscus GitHub App: <a href="https://github.com/apps/giscus" target="_blank" className="text-[#fce300] underline">https://github.com/apps/giscus</a></li>
            <li>访问 <a href="https://giscus.app/zh-CN" target="_blank" className="text-[#fce300] underline">giscus.app</a> 配置你的仓库</li>
            <li>将生成的配置填入 src/components/GiscusComponent.tsx</li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <Giscus
        id="comments"
        repo="fyyfyyFYY/your-repo-name"
        repoId="YOUR_REPO_ID"
        category="Announcements"
        categoryId="YOUR_CATEGORY_ID"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="dark"
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
}
