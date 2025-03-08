import React from 'react';
import Link from 'next/link';

// 团队成员类型
type TeamMember = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  description: string;
  expertise: string[];
};

// 合作伙伴类型
type Partner = {
  id: number;
  name: string;
  logo: string;
  description: string;
};

export default function AboutPage() {
  // 团队成员数据
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: '',
      role: '',
      avatar: '/team1.jpg',
      description: '',
      expertise: ['作物栽培学', '农业信息化', '热带农业']
    },
    {
      id: 2,
      name: '李博士',
      role: '',
      avatar: '/team2.jpg',
      description: '计算机科学博士，人工智能与农业大数据专家。将先进的AI技术应用于农业生产全过程，开发了多项农业智能决策支持系统，为农民提供科学化、精准化的种植建议。',
      expertise: ['农业大数据', '人工智能', '决策系统']
    },
    {
      id: 3,
      name: '张',
      role: '无人机技术主管',
      avatar: '/team3.jpg',
      description: '航空航天工程硕士，专注于农业无人机技术研发与应用。拥有丰富的无人机操作和改装经验，为平台提供高精度航拍和农药喷洒等技术支持。',
      expertise: ['无人机技术', '遥感监测', '精准喷洒']
    },
    {
      id: 4,
      name: '刘老师',
      role: '植保专家',
      avatar: '/team4.jpg',
      description: '植物保护学专家，长期致力于热带农作物病虫害防治研究。开发了多种环保高效的农作物病虫害综合防治方案，对海南地区常见作物病虫害有丰富的防治经验。',
      expertise: ['病虫害防治', '生物防治', '农药使用']
    },
    {
      id: 5,
      name: '陈',
      role: '运营总监',
      avatar: '/team5.jpg',
      description: '农业经济管理专业，拥有丰富的农业服务平台运营经验。致力于搭建农户与专家之间的桥梁，让专业知识和技术能够真正服务于农业生产一线。',
      expertise: ['平台运营', '农业服务', '团队管理']
    },
    {
      id: 6,
      name: '黄',
      role: '大棚技术专家',
      avatar: '/team6.jpg',
      description: '农业工程硕士，专注于智能温室和大棚技术研究与应用。设计了多种适合热带地区的节能环保大棚系统，帮助农户应对气候变化，提高种植效益。',
      expertise: ['温室技术', '灌溉系统', '环境控制']
    }
  ];

  // 合作伙伴数据
  const partners: Partner[] = [
    {
      id: 1,
      name: '海南省农业农村厅',
      logo: '/partner1.png',
      description: '为平台提供政策支持和资源对接，共同推进农业现代化发展。'
    },
    {
      id: 2,
      name: '中国热带农业科学院',
      logo: '/partner2.png',
      description: '在科研技术方面深度合作，共同研发适合热带地区的农业技术。'
    },
    {
      id: 3,
      name: '海南农垦集团',
      logo: '/partner3.png',
      description: '在大型农场管理和技术应用方面开展合作，共同探索现代农业发展模式。'
    },
    {
      id: 4,
      name: '海南省农业科技创新联盟',
      logo: '/partner4.png',
      description: '整合多方资源，推动农业科技成果转化和应用。'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* 页面标题 */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">关于我们</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              海南大学智慧助农平台致力于为农民提供专业、高效、便捷的农业技术服务，
              促进农业生产效率提升和农民增收。
            </p>
          </div>

          {/* 平台介绍 */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <img 
                  src="/about-banner.jpg" 
                  alt="平台介绍" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">我们的使命</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  海南大学智慧助农平台成立于2019年，是海南大学农学院与信息科学学院合作创建的农业服务平台。
                  我们的使命是将高校的科研成果和专业知识转化为实用的农业技术服务，助力乡村振兴和农业现代化。
                </p>
                <p className="text-gray-600 mb-6 text-lg">
                  平台整合了海南大学农学、信息科学等多个学科的专家资源，配备了先进的农业技术设备，
                  为农户提供从种植规划、技术指导到病虫害防治的全方位服务。
                </p>
                <p className="text-gray-600 mb-6 text-lg">
                  我们致力于用科技赋能农业，通过AI技术、无人机应用等现代化手段，提高农业生产效率，
                  解决农民在生产中遇到的实际问题，促进农业可持续发展。
                </p>
                <p className="text-gray-600 text-lg font-medium">
                  本平台由海南大学通信工程专业的优秀大学生团队精心设计与开发，将创新思维与专业技能相结合，
                  为农业现代化发展贡献青春力量。
                </p>
              </div>
            </div>
          </div>

          {/* 核心价值观 */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">核心价值观</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="h-20 w-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">科技创新</h3>
                <p className="text-gray-600">
                  我们不断探索和应用新技术，将人工智能、大数据、无人机等现代科技与传统农业相结合，
                  为农业生产注入新的活力和可能性。
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="h-20 w-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">专业服务</h3>
                <p className="text-gray-600">
                  我们拥有一支专业的农业技术团队，结合实际经验和科学理论，为农户提供精准、有效的服务，
                  解决实际生产中的各类问题。
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="h-20 w-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">诚信可靠</h3>
                <p className="text-gray-600">
                  我们恪守诚信原则，尊重每一位农户的需求，提供透明公正的服务，
                  建立长期稳定的合作关系，共同促进农业发展。
                </p>
              </div>
            </div>
          </div>

          {/* 团队介绍 */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">我们的团队</h2>
            <p className="text-center text-gray-600 text-lg mb-10 max-w-4xl mx-auto">
              我们的平台由海南大学通信工程专业的学生团队开发，在专业教师的指导下，
              将课堂所学知识与实际应用相结合，打造了这个服务于农业现代化的智慧平台。
              同时，我们也有来自各个领域的专业人士提供技术支持与指导。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map(member => (
                <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-green-600 mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 合作伙伴 */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">合作伙伴</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partners.map(partner => (
                <div key={partner.id} className="bg-white p-6 rounded-xl shadow-md flex items-center">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-6">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-w-[80%] max-h-[80%]"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{partner.name}</h3>
                    <p className="text-gray-600">{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 联系我们 */}
          <div className="bg-green-50 rounded-xl p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">联系我们</h2>
                <p className="text-gray-600 mb-6">
                  如果您有任何问题、建议或合作意向，欢迎随时与我们联系。我们期待与您携手共同推动农业发展！
                </p>
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
                      <p className="text-gray-600">contact@hnuagritech.com</p>
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
                
                <div className="mt-8">
                  <Link
                    href="/pages/contract"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 inline-block"
                  >
                    联系我们
                  </Link>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-xl overflow-hidden shadow-md h-full">
                  <img 
                    src="/map.jpg" 
                    alt="地图" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 