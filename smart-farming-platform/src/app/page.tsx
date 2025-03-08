import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 主横幅 */}
      <section className="relative h-[80vh] bg-green-800 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-black opacity-40 absolute z-10"></div>
          <img
            src="/banner.jpg"
            alt="农田景观"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-4">海南大学智慧助农平台</h1>
            <p className="text-xl mb-8">智慧农业，科技赋能，共建美好乡村</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/pages/ai-consultation" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                开始AI咨询
              </Link>
              <Link href="/pages/expert-consultation" className="bg-white hover:bg-gray-100 text-green-800 px-6 py-3 rounded-lg font-medium transition duration-300">
                咨询专家
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 服务介绍 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">我们的服务</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">提供全方位的农业技术服务和支持，助力农业生产效率提升和农民增收</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI智能咨询</h3>
              <p className="text-gray-600 mb-4">利用先进的人工智能技术，为农民提供即时的农业问题解答和建议</p>
              <Link href="/pages/ai-consultation" className="text-green-600 hover:text-green-800 font-medium">
                了解更多 &rarr;
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">专家在线咨询</h3>
              <p className="text-gray-600 mb-4">连接农业专家团队，提供专业的种植、养殖技术指导和问题解决方案</p>
              <Link href="/pages/expert-consultation" className="text-green-600 hover:text-green-800 font-medium">
                了解更多 &rarr;
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">无人机服务</h3>
              <p className="text-gray-600 mb-4">提供无人机航拍、农药喷洒等现代化农业技术服务，提高工作效率</p>
              <Link href="/pages/services#drone-services" className="text-green-600 hover:text-green-800 font-medium">
                了解更多 &rarr;
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">合同签订</h3>
              <p className="text-gray-600 mb-4">在线签订服务合同，提供透明的服务内容和价格，保障双方权益</p>
              <Link href="/pages/contract" className="text-green-600 hover:text-green-800 font-medium">
                了解更多 &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 平台优势 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">平台优势</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">整合高校农业科研资源，提供专业化、精准化的农业技术服务</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-20 w-20 bg-green-600 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">科研支持</h3>
              <p className="text-gray-600">依托海南大学农业相关学科优势，整合最新科研成果，为农业生产提供科学支撑</p>
            </div>
            
            <div className="text-center">
              <div className="h-20 w-20 bg-green-600 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">技术先进</h3>
              <p className="text-gray-600">运用人工智能、大数据、无人机等现代技术，提高农业生产效率和管理水平</p>
            </div>
            
            <div className="text-center">
              <div className="h-20 w-20 bg-green-600 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">专业团队</h3>
              <p className="text-gray-600">拥有一支由农业专家、技术人员和服务人员组成的专业团队，提供高质量服务</p>
            </div>
          </div>
        </div>
      </section>

      {/* 使用流程 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">服务流程</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">简单便捷的服务流程，让您轻松获取专业农业技术支持</p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-green-200 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="text-center">
                <div className="h-16 w-16 bg-green-600 rounded-full mx-auto flex items-center justify-center mb-4 relative z-20">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">提交咨询</h3>
                <p className="text-gray-600">在平台上提交您的农业问题或需求</p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 bg-green-600 rounded-full mx-auto flex items-center justify-center mb-4 relative z-20">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">专业解答</h3>
                <p className="text-gray-600">获取AI或专家的专业解答和建议</p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 bg-green-600 rounded-full mx-auto flex items-center justify-center mb-4 relative z-20">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">确认服务</h3>
                <p className="text-gray-600">确认所需的线下服务内容并签订合同</p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 bg-green-600 rounded-full mx-auto flex items-center justify-center mb-4 relative z-20">
                  <span className="text-white text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">服务执行</h3>
                <p className="text-gray-600">我们的团队将按约定提供优质的线下服务</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/pages/ai-consultation" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 inline-block">
              立即咨询
            </Link>
          </div>
        </div>
      </section>

      {/* 成功案例 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">成功案例</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">我们已经帮助众多农户解决农业生产问题，提高生产效率</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <img src="/case1.jpg" alt="案例1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">澄迈县芒果种植基地</h3>
                <p className="text-gray-600 mb-4">通过我们的无人机技术和专家指导，成功解决了芒果病虫害问题，产量提升30%</p>
                <Link href="/pages/cases#case1" className="text-green-600 hover:text-green-800 font-medium">
                  查看详情 &rarr;
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <img src="/case2.jpg" alt="案例2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">三亚热带水果园</h3>
                <p className="text-gray-600 mb-4">引入智能大棚技术和种植建议，实现了多品种热带水果的高效种植</p>
                <Link href="/pages/cases#case2" className="text-green-600 hover:text-green-800 font-medium">
                  查看详情 &rarr;
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <img src="/case3.jpg" alt="案例3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">琼海蔬菜合作社</h3>
                <p className="text-gray-600 mb-4">通过AI咨询和专家指导，优化种植结构，提高了蔬菜产量和品质</p>
                <Link href="/pages/cases#case3" className="text-green-600 hover:text-green-800 font-medium">
                  查看详情 &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 合作伙伴 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">合作伙伴</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">与众多优质企业和机构合作，共同推动农业现代化发展</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition duration-300">
              <img src="/partner1.png" alt="合作伙伴1" className="h-16" />
            </div>
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition duration-300">
              <img src="/partner2.png" alt="合作伙伴2" className="h-16" />
            </div>
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition duration-300">
              <img src="/partner3.png" alt="合作伙伴3" className="h-16" />
            </div>
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition duration-300">
              <img src="/partner4.png" alt="合作伙伴4" className="h-16" />
            </div>
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition duration-300">
              <img src="/partner5.png" alt="合作伙伴5" className="h-16" />
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">联系我们</h2>
              <p className="text-gray-600">如果您有任何问题或需求，请随时与我们联系</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">联系方式</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium">地址</p>
                      <p className="text-gray-600">海南省海口市美兰区海南大学</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium">邮箱</p>
                      <p className="text-gray-600">info@hnuagritech.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium">电话</p>
                      <p className="text-gray-600">0898-12345678</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">在线留言</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-1">姓名</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-1">邮箱</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 mb-1">留言内容</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                    提交留言
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
