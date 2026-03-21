import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export const metadata = {
  title: '文章 | FanYiyang',
  description: '浏览我的所有文章',
};

export default function Blog() {
  const posts = getSortedPostsData();

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="neon-text text-5xl font-bold mb-4 glitch" data-text="BLOG">
        BLOG
      </h1>
      <p className="text-gray-400 mb-12 text-lg">
        探索我的思考、技术和创意
      </p>

      <div className="space-y-8">
        {posts.map(post => (
          <article key={post.slug} className="article-item cyber-card">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <Link 
                href={`/blog/${post.slug}`}
                className="text-2xl font-bold text-[#fce300] hover:underline"
              >
                {post.title}
              </Link>
              <time className="text-gray-500 text-sm mt-2 md:mt-0">
                {post.date}
              </time>
            </div>
            
            <p className="text-gray-300 mb-4">
              {post.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-[#1a1a1a] border border-[#b8a600] text-[#fce300] text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <Link 
              href={`/blog/${post.slug}`}
              className="text-[#fce300] hover:underline inline-flex items-center gap-2"
            >
              阅读全文
              <span>→</span>
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">
            还没有文章，敬请期待...
          </p>
        </div>
      )}
    </div>
  );
}
