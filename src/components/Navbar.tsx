'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="neon-text text-2xl font-bold glitch" data-text="FANYIYANG">
          FANYIYANG
        </Link>
        
        <div className="flex gap-6">
          <Link 
            href="/" 
            className={`nav-link ${pathname === '/' ? 'text-[#fce300]' : ''}`}
          >
            首页
          </Link>
          <Link 
            href="/blog" 
            className={`nav-link ${pathname === '/blog' ? 'text-[#fce300]' : ''}`}
          >
            文章
          </Link>
          <Link 
            href="/about" 
            className={`nav-link ${pathname === '/about' ? 'text-[#fce300]' : ''}`}
          >
            关于我
          </Link>
        </div>
      </div>
    </nav>
  );
}
