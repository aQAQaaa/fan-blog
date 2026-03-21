import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="neon-text text-6xl md:text-8xl font-bold mb-6 glitch" data-text="FANYIYANG">
          FANYIYANG
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          欢迎来到我的赛博空间
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/blog" className="cyber-button">
            浏览文章
          </Link>
          <Link href="/about" className="cyber-button">
            关于我
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20">
        <h2 className="neon-text text-4xl font-bold mb-8 text-center">最新文章</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 示例卡片 */}
          <div className="cyber-card">
            <h3 className="text-xl font-bold mb-2 text-[#fce300]">欢迎来到我的博客</h3>
            <p className="text-gray-400 mb-4">这是我的第一篇赛博朋克风格博客文章...</p>
            <Link href="/blog/welcome" className="text-[#fce300] hover:underline">
              阅读全文 →
            </Link>
          </div>
          
          <div className="cyber-card">
            <h3 className="text-xl font-bold mb-2 text-[#fce300]">赛博朋克美学</h3>
            <p className="text-gray-400 mb-4">探索赛博朋克风格的视觉设计...</p>
            <Link href="/blog" className="text-[#fce300] hover:underline">
              浏览更多 →
            </Link>
          </div>
          
          <div className="cyber-card">
            <h3 className="text-xl font-bold mb-2 text-[#fce300]">技术分享</h3>
            <p className="text-gray-400 mb-4">编程、开发、技术思考...</p>
            <Link href="/blog" className="text-[#fce300] hover:underline">
              浏览更多 →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="cyber-card inline-block p-8">
          <h2 className="neon-text text-3xl font-bold mb-4">准备好探索了吗？</h2>
          <p className="text-gray-300 mb-6">
            在这里，我会分享我的思考、技术和创意
          </p>
          <Link href="/blog" className="cyber-button">
            开始阅读
          </Link>
        </div>
      </section>
    </div>
  );
}
