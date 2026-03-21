export const metadata = {
  title: '关于我 | FanYiyang',
  description: '了解 FanYiyang',
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="neon-text text-5xl font-bold mb-4 glitch" data-text="ABOUT ME">
        ABOUT ME
      </h1>
      
      <div className="cyber-card mt-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* 头像占位 */}
          <div className="md:col-span-1 flex justify-center">
            <div className="w-48 h-48 rounded-full border-4 border-[#fce300] bg-[#1a1a1a] flex items-center justify-center">
              <span className="neon-text text-4xl font-bold">FY</span>
            </div>
          </div>
          
          {/* 个人信息 */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-[#fce300] mb-4">FanYiyang</h2>
            <p className="text-gray-300 mb-6">
              你好！我是 FanYiyang，一个热爱技术和创意的开发者。
              这个博客是我的数字花园，我会在这里分享我的学习历程、项目经验和思考感悟。
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-[#fce300] font-bold mb-2">🎯 兴趣爱好</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• 编程与技术开发</li>
                  <li>• 赛博朋克美学</li>
                  <li>• 探索新技术</li>
                  <li>• 分享与创造</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-[#fce300] font-bold mb-2">🛠️ 技术栈</h3>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS'].map(tech => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-[#1a1a1a] border border-[#b8a600] text-[#fce300] text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-[#fce300] font-bold mb-2">📬 联系我</h3>
                <p className="text-gray-300">
                  欢迎通过以下方式联系我：
                </p>
                <div className="mt-2 text-[#fce300]">
                  <p>Email: your-email@example.com</p>
                  <p>GitHub: @fyyfyyFYY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 个人宣言 */}
      <div className="mt-12 cyber-card text-center p-8">
        <h2 className="neon-text text-2xl font-bold mb-4">我的信条</h2>
        <blockquote className="text-xl text-gray-300 italic">
          "在数字世界中创造，在现实世界中生活。
          <br />
          用代码构建未来，用思考连接现在。"
        </blockquote>
      </div>
    </div>
  );
}
