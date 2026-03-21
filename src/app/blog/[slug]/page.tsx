import { getAllPostSlugs, getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import GiscusComponent from '@/components/GiscusComponent';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  try {
    const post = await getPostData(slug);
    return {
      title: `${post.title} | FanYiyang`,
      description: post.description,
    };
  } catch {
    return {
      title: '文章未找到 | FanYiyang',
    };
  }
}

export default async function Post({ params }: PageProps) {
  const { slug } = await params;
  
  try {
    const post = await getPostData(slug);

    return (
      <div className="max-w-4xl mx-auto px-4 py-20">
        <Link href="/blog" className="text-[#fce300] hover:underline mb-8 inline-block">
          ← 返回文章列表
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="neon-text text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
              <time>{post.date}</time>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-[#1a1a1a] border border-[#b8a600] text-[#fce300] text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-[#fce300]
              prose-a:text-[#fce300]
              prose-code:text-[#fce300]
              prose-pre:bg-[#121212]
              prose-pre:border prose-pre:border-[#b8a600]
            "
            dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
          />
        </article>

        {/* 评论区 */}
        <div className="mt-16 pt-8 border-t border-[#b8a600]">
          <h2 className="neon-text text-2xl font-bold mb-6">评论</h2>
          <GiscusComponent enabled={false} />
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
