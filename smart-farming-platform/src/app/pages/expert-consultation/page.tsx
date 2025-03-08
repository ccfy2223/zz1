'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// 专家信息类型
type Expert = {
  id: number;
  name: string;
  title: string;
  specialty: string[];
  avatar: string;
  rating: number;
  consultationCount: number;
  price: number;
  availability: string;
  description: string;
};

export default function ExpertConsultation() {
  // 专家数据
  const experts: Expert[] = [
    {
      id: 1,
      name: '张教授',
      title: '海南大学农学院教授',
      specialty: ['水稻种植', '热带果树栽培', '农业病虫害防治'],
      avatar: '/expert1.jpg',
      rating: 4.9,
      consultationCount: 328,
      price: 50,
      availability: '周一至周五 9:00-17:00',
      description: '张教授拥有30年农业研究经验，专注于热带农业领域，在水稻种植和热带果树栽培方面成就卓著。曾主持多项国家级农业研究项目，发表论文数十篇。'
    },
    {
      id: 2,
      name: '李博士',
      title: '农业技术推广研究员',
      specialty: ['蔬菜种植', '大棚技术', '有机农业'],
      avatar: '/expert2.jpg',
      rating: 4.8,
      consultationCount: 254,
      price: 40,
      availability: '周一至周日 8:00-20:00',
      description: '李博士是蔬菜种植与大棚技术专家，在有机农业领域有丰富的实践经验。长期从事农业技术推广工作，帮助众多农户解决种植难题，提高产量和质量。'
    },
    {
      id: 3,
      name: '王工程师',
      title: '农业自动化工程师',
      specialty: ['智能灌溉', '农业机械', '无人机应用'],
      avatar: '/expert3.jpg',
      rating: 4.7,
      consultationCount: 186,
      price: 45,
      availability: '周二至周六 10:00-18:00',
      description: '王工程师专注于农业自动化和智能化领域，擅长智能灌溉系统设计、农业机械应用和无人机技术。致力于帮助农民通过现代技术提高生产效率。'
    },
    {
      id: 4,
      name: '陈教授',
      title: '土壤学专家',
      specialty: ['土壤改良', '肥料配方', '水土保持'],
      avatar: '/expert4.jpg',
      rating: 4.9,
      consultationCount: 275,
      price: 55,
      availability: '周一、三、五 9:00-16:00',
      description: '陈教授是著名土壤学专家，对海南岛不同地区的土壤特性有深入研究。擅长针对不同土壤条件提供科学的改良方案和肥料配方，帮助农民提高土地利用率。'
    },
    {
      id: 5,
      name: '刘研究员',
      title: '植物保护专家',
      specialty: ['病虫害防治', '生物防治', '农药使用'],
      avatar: '/expert5.jpg',
      rating: 4.8,
      consultationCount: 231,
      price: 45,
      availability: '周一至周五 8:30-17:30',
      description: '刘研究员长期从事植物保护研究，对热带作物常见病虫害有丰富的防治经验。倡导综合防治和生物防治，能够为农民提供环保、高效的病虫害解决方案。'
    },
    {
      id: 6,
      name: '黄技术员',
      title: '果树栽培技术员',
      specialty: ['芒果种植', '荔枝种植', '水果保鲜'],
      avatar: '/expert6.jpg',
      rating: 4.6,
      consultationCount: 198,
      price: 35,
      availability: '周一至周日 全天',
      description: '黄技术员有20年热带水果种植经验，尤其擅长芒果和荔枝的栽培管理。熟悉各种水果的生长习性和采后处理技术，能提供从种植到保鲜的全程技术指导。'
    }
  ];

  // 筛选条件
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');

  // 获取所有专业领域
  const allSpecialties = Array.from(
    new Set(experts.flatMap(expert => expert.specialty))
  );

  // 筛选专家
  const filteredExperts = experts.filter(expert => {
    const matchesSearch = 
      expert.name.includes(searchTerm) || 
      expert.title.includes(searchTerm) || 
      expert.description.includes(searchTerm) ||
      expert.specialty.some(s => s.includes(searchTerm));
    
    const matchesSpecialty = 
      selectedSpecialty === 'all' || 
      expert.specialty.includes(selectedSpecialty);
    
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">专家咨询</h1>
            <p className="text-gray-600">
              我们汇聚了一批农业领域的专家，涵盖种植技术、病虫害防治、土壤改良等多个专业方向。
              您可以根据自己的需求选择合适的专家进行在线咨询或预约线下指导。
            </p>
          </div>

          {/* 搜索和筛选 */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">搜索专家</label>
                <input
                  type="text"
                  id="search"
                  placeholder="输入专家姓名或专业领域"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">专业领域</label>
                <select
                  id="specialty"
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="all">全部领域</option>
                  {allSpecialties.map((specialty, index) => (
                    <option key={index} value={specialty}>{specialty}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedSpecialty('all');
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300"
                >
                  重置筛选
                </button>
              </div>
            </div>
          </div>

          {/* 专家列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperts.map(expert => (
              <div key={expert.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 mr-4 flex-shrink-0">
                      <img src={expert.avatar} alt={expert.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{expert.name}</h3>
                      <p className="text-gray-600 text-sm">{expert.title}</p>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`h-4 w-4 ${i < Math.floor(expert.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-gray-700 ml-1 text-sm">{expert.rating}</span>
                        </div>
                        <span className="text-gray-500 mx-2 text-sm">|</span>
                        <span className="text-gray-500 text-sm">{expert.consultationCount}次咨询</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-1">专业领域</h4>
                    <div className="flex flex-wrap gap-2">
                      {expert.specialty.map((specialty, index) => (
                        <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm line-clamp-3">{expert.description}</p>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="font-medium text-gray-700">¥{expert.price}</span>
                      <span className="text-gray-500">/次</span>
                    </div>
                    <div className="text-gray-500">{expert.availability}</div>
                  </div>
                  
                  <div className="mt-6 flex space-x-3">
                    <Link 
                      href={`/pages/expert-consultation/${expert.id}`}
                      className="flex-1 bg-white border border-green-600 text-green-600 hover:bg-green-50 text-center py-2 rounded-lg transition duration-300"
                    >
                      查看详情
                    </Link>
                    <Link 
                      href={`/pages/chat?expert=${expert.id}`}
                      className="flex-1 bg-green-600 text-white hover:bg-green-700 text-center py-2 rounded-lg transition duration-300"
                    >
                      立即咨询
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredExperts.length === 0 && (
            <div className="text-center py-10">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">未找到符合条件的专家</h3>
              <p className="mt-1 text-sm text-gray-500">请尝试调整搜索条件或清除筛选。</p>
            </div>
          )}

          {/* 咨询须知 */}
          <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">咨询须知</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">咨询方式</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>在线文字咨询：通过平台内置的即时通讯功能与专家进行文字交流</li>
                  <li>语音咨询：可预约专家进行语音咨询，更高效地沟通</li>
                  <li>视频咨询：通过视频方式与专家面对面交流，便于展示问题</li>
                  <li>线下指导：可预约专家到您的农场或基地进行现场指导（需额外付费）</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">收费标准</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>在线咨询：按次收费，费用由专家自行设定</li>
                  <li>线下指导：根据距离和时间另行计费</li>
                  <li>长期顾问：可与专家签订长期顾问合同，享受优惠价格</li>
                  <li>满意度保证：如咨询效果不满意，可申请部分退款</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 平台优势 */}
          <div className="mt-8 bg-green-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">为什么选择我们的专家咨询服务</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-800 mb-1">专业可靠</h3>
                <p className="text-gray-600 text-sm">所有专家均经过严格筛选和资质认证，确保专业水平和服务质量</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-800 mb-1">快速响应</h3>
                <p className="text-gray-600 text-sm">专家会在24小时内回复您的咨询请求，紧急问题可获得优先处理</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-800 mb-1">多领域覆盖</h3>
                <p className="text-gray-600 text-sm">我们的专家团队覆盖农业各个领域，能够解决各类专业问题</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 