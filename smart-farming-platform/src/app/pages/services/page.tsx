import React from 'react';
import Link from 'next/link';

// 服务类型定义
type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  details: string;
  price: string;
  image: string;
  icon: string;
};

export default function ServicesDetailPage() {
  // 服务数据
  const services: Service[] = [
    {
      id: 'drone-photography',
      title: '无人机航拍服务',
      description: '利用高精度无人机对农田进行航拍，生成高清影像图和三维模型，帮助农户更好地了解农田情况，规划种植，监测生长状况。',
      features: [
        '高清4K航拍成像，精度可达厘米级',
        '专业的正射影像图制作，方便农田规划和面积测量',
        '农作物生长状况监测，及时发现问题区域',
        '地形测绘和三维建模，帮助农田水利规划',
        '农作物产量预估，辅助收获决策'
      ],
      details: '我们的无人机航拍服务采用最新的DJI Phantom 4 RTK专业测绘无人机，配备1英寸CMOS传感器，可拍摄2000万像素的高清图像，航测精度可达厘米级。通过专业的图像处理软件，可以快速生成正射影像图、数字表面模型(DSM)和三维模型等成果。\n\n这些精确的数据可以帮助您了解农田的实际情况，进行精准的农田规划和管理。例如，您可以清晰地了解土地面积、地形状况，检测作物生长情况，发现病虫害和生长不良区域，为科学种植提供数据支持。\n\n服务流程包括：需求沟通、航线规划、现场飞行、数据采集、图像处理和成果交付。一般来说，100亩以内的农田可在一天内完成数据采集，3个工作日内交付成果。',
      price: '15元/亩起，具体价格根据面积、地形复杂度和数据处理需求而定。',
      image: '/drone-photography.jpg',
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    },
    {
      id: 'drone-spraying',
      title: '无人机撒药服务',
      description: '采用农业专用无人机进行农药和肥料喷洒，实现精准施药、均匀覆盖，大幅提高农药利用率，减少人工成本，保护农民健康。',
      features: [
        '大容量药箱，一次作业覆盖面积大',
        '精准定位系统，确保无重喷、漏喷',
        '智能避障技术，适应复杂地形',
        '雾化喷洒技术，提高药效，减少药量',
        '远程监控系统，实时查看作业情况',
        '专业团队操作，服务更安全高效'
      ],
      details: '我们的无人机撒药服务采用农业专用多旋翼植保无人机，药箱容量10-20L，单次作业可覆盖15-30亩。配备精密的喷洒系统，可产生50-100微米的雾化颗粒，大幅提高药剂利用率，减少飘移和浪费，环保且高效。\n\n相比人工喷洒，无人机撒药具有速度快、覆盖均匀、用药量少、药效好、不踩踏农作物等优势。尤其适合水稻、小麦等大田作物和果园的病虫害防治和施肥。\n\n服务由专业的团队提供，包括经验丰富的操作员和技术人员，确保作业安全高效。服务流程包括：需求了解、药剂准备、现场勘察、作业规划、无人机喷洒和质量确认。\n\n为保证作业效果，请尽量在无风或微风天气下进行作业，避免雨天或大风天气。',
      price: '25元/亩起，根据地形复杂度、作业难度和药剂种类调整。',
      image: '/drone-spraying.jpg',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
      id: 'greenhouse',
      title: '大棚建设服务',
      description: '提供现代化农业大棚的设计、建设和智能化系统安装服务，帮助农户建立高效、环保、智能的生产基地，应对气候变化，提高产量。',
      features: [
        '专业设计团队，根据作物需求和地理条件定制方案',
        '高质量建材，坚固耐用，抗风抗雨',
        '智能温控系统，自动调节温度、湿度',
        '水肥一体化系统，精准灌溉施肥',
        '自动通风除湿系统，创造最佳生长环境',
        '远程监控系统，手机实时查看大棚情况'
      ],
      details: '我们的大棚建设服务提供从规划设计到建设施工再到智能系统安装的一站式解决方案。根据海南气候特点和不同作物的生长需求，设计符合本地条件的温室大棚。\n\n大棚类型包括：单体拱棚、连栋温室、智能温室等多种类型，可满足不同作物和不同规模的种植需求。大棚结构采用热镀锌钢管或铝合金材料，抗风、抗压、耐腐蚀，使用寿命长；覆盖材料可选择PE膜、EVA膜、PC板等，根据作物需求和预算进行选择。\n\n智能系统可实现温湿度自动控制、水肥一体化管理、环境参数监测、远程控制等功能，减少人工管理，提高生产效率。专业技术团队提供后期维护和技术指导，保障大棚的正常运行和作物的健康生长。\n\n建设周期根据大棚规模和复杂度而定，一般小型大棚（约1亩）可在2周内完成，大型智能温室可能需要1-3个月。',
      price: '180元/平方米起，根据大棚类型、材料和智能化程度调整。',
      image: '/greenhouse.jpg',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    },
    {
      id: 'planting-advice',
      title: '种植技术指导',
      description: '由海南大学农学院专家团队提供的种植技术指导服务，包括土壤改良、品种选择、种植技术、病虫害防治等全方位的技术支持。',
      features: [
        '土壤检测与改良方案制定',
        '适合当地气候条件的品种推荐',
        '科学的种植方法和管理技术指导',
        '病虫害识别与综合防治方案',
        '定期现场指导和问题解决',
        '技术培训和知识讲座'
      ],
      details: '我们的种植技术指导服务由海南大学农学院的教授和研究人员提供，他们拥有丰富的理论知识和实践经验，尤其对热带农业有深入研究。\n\n服务内容包括：农田土壤检测与分析，根据检测结果提供土壤改良方案；根据您的种植目标和当地气候条件，推荐适合的作物品种；提供科学的种植管理方案，包括播种/育苗、移栽、水肥管理、整枝修剪等关键环节的技术指导；作物生长过程中的病虫害识别和防治指导；收获技术和储存方法指导等。\n\n服务方式灵活多样，可以选择现场指导、远程咨询或定期访问。我们还提供团体培训和专题讲座，帮助农户系统地学习先进的种植技术。\n\n对于长期合作的客户，我们提供全生育期的跟踪服务，确保从播种到收获各个环节的技术支持，解决实际问题，提高产量和品质。',
      price: '800元/天（现场指导），其他服务形式价格请咨询。',
      image: '/planting-advice.jpg',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    },
    {
      id: 'pest-control',
      title: '病虫害防治服务',
      description: '提供专业的农作物病虫害诊断和防治服务，结合物理防治、生物防治和化学防治等多种手段，有效控制病虫害，减少损失。',
      features: [
        '专业的病虫害诊断，精准识别病害类型',
        '综合防治方案制定，减少农药使用',
        '生物防治技术应用，保护生态环境',
        '专业喷药团队，提高防治效果',
        '病虫害监测预警，及时发现问题',
        '有机农业病虫害防治技术支持'
      ],
      details: '我们的病虫害防治服务由植物保护专家和专业技术人员组成的团队提供，针对海南地区常见的农作物病虫害，如水稻稻瘟病、玉米螟虫、蔬菜根腐病、果树炭疽病等，提供科学有效的防治方案。\n\n服务流程包括：现场调查和样本采集，专业诊断和病害鉴定，制定综合防治方案，实施防治措施，效果评估和回访。我们倡导"预防为主，综合防治"的理念，优先采用生物防治和物理防治等环保方法，在必要时合理使用化学农药。\n\n我们特别重视预防和监测工作，可以通过定期巡查、性诱剂诱捕、粘虫板等手段，帮助您早期发现病虫害风险，采取及时措施，将损失降到最低。\n\n针对有机农业生产，我们提供不使用化学农药的病虫害防治解决方案，包括天敌释放、生物农药应用、农业防治措施等，帮助您生产安全、健康的农产品。',
      price: '500元/次起，根据面积和病虫害类型调整。',
      image: '/pest-control.jpg',
      icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12',
    },
    {
      id: 'harvest-aid',
      title: '收获与保鲜服务',
      description: '提供农产品采收、分拣、包装和保鲜等服务，帮助农户提高收获效率，延长农产品保质期，增加农产品价值。',
      features: [
        '专业采收团队，减少采收损伤',
        '机械化采收设备租赁，提高效率',
        '农产品分级分拣，提高产品价值',
        '专业包装服务，提升产品形象',
        '冷链保鲜技术，延长保质期',
        '采后处理技术指导，减少损耗'
      ],
      details: '我们的收获与保鲜服务旨在解决农户在农产品采收和销售过程中面临的技术和设备不足问题，帮助提高农产品质量和价值。\n\n采收服务：提供专业的采收团队，按照作物的最佳采收期和标准进行采收，减少损伤和浪费；提供采收机械设备租赁，如水果采摘器、蔬菜收获机等，提高采收效率。\n\n分级包装服务：根据农产品的品质、大小等标准进行专业分级，增加产品附加值；提供标准化包装服务，包括包装材料选择、包装设计和执行，提升产品形象和保护效果。\n\n保鲜服务：根据不同农产品的特性，提供适合的保鲜处理，如预冷、清洗、打蜡、气调储存等；提供小型冷库租赁服务，帮助农户解决产品短期储存问题；提供产地冷链物流对接服务，确保产品从田间到市场的全程保鲜。\n\n采后技术指导：针对不同农产品，提供科学的采后处理建议，包括储存方法、温湿度控制、保鲜技术等，减少采后损失，延长保质期。',
      price: '根据服务内容和规模定制价格，请咨询详情。',
      image: '/harvest-aid.jpg',
      icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* 页面标题 */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">服务详情</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我们提供全方位的农业技术服务，帮助农户解决生产中的各类问题，提高生产效率和产品品质。
            </p>
          </div>

          {/* 服务导航 */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {services.map(service => (
              <a 
                key={service.id}
                href={`#${service.id}`}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-green-50 hover:border-green-300 hover:text-green-700 transition duration-300"
              >
                {service.title}
              </a>
            ))}
          </div>

          {/* 服务详情 */}
          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-12 items-center mb-8`}>
                  <div className="w-full md:w-1/2">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2">
                    <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h2>
                    <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-700 mb-4">服务特点</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">服务详情</h3>
                  <div className="text-gray-700 space-y-4">
                    {service.details.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">服务价格</h3>
                    <p className="text-gray-700">{service.price}</p>
                  </div>
                  <Link
                    href="/pages/contract"
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 whitespace-nowrap"
                  >
                    预约此服务
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 服务流程 */}
          <div className="mt-20 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">服务流程</h2>
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-green-200 -translate-y-1/2 z-0"></div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                <div className="text-center">
                  <div className="h-16 w-16 bg-green-600 rounded-full mx-auto flex items-center justify-center mb-4 relative z-20">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">需求咨询</h3>
                  <p className="text-gray-600">了解您的具体需求和目标</p>
                </div>
                
                <div className="text-center">
                  <div className="h-16 w-16 bg-green-600 rounded-full mx-auto flex items-center justify-center mb-4 relative z-20">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">方案制定</h3>
                  <p className="text-gray-600">制定专业的服务方案</p>
                </div>
                
                <div className="text-center">
                  <div className="h-16 w-16 bg-green-600 rounded-full mx-auto flex items-center justify-center mb-4 relative z-20">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">确认签约</h3>
                  <p className="text-gray-600">确认方案并签订服务合同</p>
                </div>
                
                <div className="text-center">
                  <div className="h-16 w-16 bg-green-600 rounded-full mx-auto flex items-center justify-center mb-4 relative z-20">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">服务实施</h3>
                  <p className="text-gray-600">专业团队按计划实施服务</p>
                </div>
                
                <div className="text-center">
                  <div className="h-16 w-16 bg-green-600 rounded-full mx-auto flex items-center justify-center mb-4 relative z-20">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">效果评估</h3>
                  <p className="text-gray-600">评估服务效果，提供改进建议</p>
                </div>
              </div>
            </div>
          </div>

          {/* 服务承诺 */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">我们的服务承诺</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">专业可靠</h3>
                <p className="text-gray-600">
                  我们的团队由农业领域专家和经验丰富的技术人员组成，
                  确保提供专业、可靠的服务。
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">准时高效</h3>
                <p className="text-gray-600">
                  我们严格按照约定时间提供服务，高效完成工作，
                  尊重您的时间和安排。
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">售后保障</h3>
                <p className="text-gray-600">
                  对服务质量不满意可申请重新服务或部分退款，
                  提供7天的售后技术支持。
                </p>
              </div>
            </div>
          </div>

          {/* 咨询指引 */}
          <div className="bg-green-600 text-white rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">需要更多信息？</h2>
                <p className="text-xl mb-6">
                  如果您对我们的服务有任何疑问，或者需要了解更多详情，
                  欢迎随时咨询我们的专业团队。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/pages/ai-consultation"
                    className="bg-white text-green-700 px-6 py-3 rounded-lg hover:bg-green-100 transition duration-300 text-center"
                  >
                    AI智能咨询
                  </Link>
                  <Link
                    href="/pages/expert-consultation"
                    className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 text-center"
                  >
                    专家咨询
                  </Link>
                  <Link
                    href="/pages/contract"
                    className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-900 transition duration-300 text-center"
                  >
                    立即预约
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/3 md:pl-8">
                <div className="bg-white text-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">联系我们</h3>
                  <div className="space-y-3">
                    <p className="flex items-center">
                      <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>0898-12345678</span>
                    </p>
                    <p className="flex items-center">
                      <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>service@hnuagritech.com</span>
                    </p>
                    <p className="flex items-center">
                      <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>工作时间: 8:00-18:00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 