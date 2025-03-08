'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// 订单类型
type Order = {
  id: string;
  serviceName: string;
  date: string;
  status: 'pending' | 'confirmed' | 'processing' | 'completed' | 'cancelled';
  amount: number;
  address: string;
};

// 咨询记录类型
type Consultation = {
  id: string;
  type: 'ai' | 'expert';
  expertName?: string;
  date: string;
  topic: string;
  lastMessage: string;
};

export default function UserPage() {
  // 模拟用户数据
  const userData = {
    name: '张三',
    avatar: '/user-avatar.jpg',
    phone: '13800138000',
    email: 'zhangsan@example.com',
    address: '海南省海口市美兰区海南大学',
    registerDate: '2023-01-15',
  };

  // 模拟订单数据
  const orders: Order[] = [
    {
      id: 'SO-2023-0001',
      serviceName: '无人机航拍服务',
      date: '2023-12-05',
      status: 'completed',
      amount: 1500,
      address: '海南省海口市龙华区金盘路农业示范基地',
    },
    {
      id: 'SO-2023-0045',
      serviceName: '病虫害防治服务',
      date: '2024-01-10',
      status: 'processing',
      amount: 800,
      address: '海南省海口市琼山区红旗镇丰收村',
    },
    {
      id: 'SO-2024-0012',
      serviceName: '大棚建设服务',
      date: '2024-02-20',
      status: 'confirmed',
      amount: 18000,
      address: '海南省文昌市东郊镇椰林村',
    },
    {
      id: 'SO-2024-0028',
      serviceName: '种植技术指导',
      date: '2024-03-15',
      status: 'pending',
      amount: 1200,
      address: '海南省海口市秀英区永兴镇丰收村',
    },
  ];

  // 模拟咨询记录
  const consultations: Consultation[] = [
    {
      id: 'C-2023-0122',
      type: 'ai',
      date: '2024-03-01',
      topic: '水稻病虫害防治',
      lastMessage: '建议您采用生物防治与化学防治相结合的方法，先使用苏云金杆菌等生物农药...',
    },
    {
      id: 'C-2023-0136',
      type: 'expert',
      expertName: '李博士',
      date: '2024-02-15',
      topic: '大棚番茄种植技术',
      lastMessage: '番茄生长期需要保持土壤湿度，建议采用滴灌系统，并控制好棚内温度...',
    },
    {
      id: 'C-2024-0015',
      type: 'ai',
      date: '2024-01-20',
      topic: '芒果树施肥方法',
      lastMessage: '芒果树在花期前应减少氮肥使用，增加磷钾肥的比例，促进花芽分化...',
    },
    {
      id: 'C-2024-0043',
      type: 'expert',
      expertName: '王教授',
      date: '2024-03-05',
      topic: '香蕉种植密度问题',
      lastMessage: '根据您的土壤条件和气候特点，建议每亩种植密度控制在250-300株之间...',
    },
  ];

  // 切换标签状态
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'consultations'>('profile');

  // 获取订单状态标签样式
  const getStatusStyle = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-purple-100 text-purple-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // 获取订单状态中文名称
  const getStatusName = (status: Order['status']) => {
    const statusMap = {
      pending: '待确认',
      confirmed: '已确认',
      processing: '进行中',
      completed: '已完成',
      cancelled: '已取消',
    };
    return statusMap[status];
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">个人中心</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* 侧边栏 */}
            <div className="w-full lg:w-1/4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 bg-green-600 text-white">
                  <div className="flex items-center mb-4">
                    <img
                      src={userData.avatar}
                      alt={userData.name}
                      className="w-16 h-16 rounded-full border-2 border-white object-cover"
                    />
                    <div className="ml-4">
                      <h2 className="text-xl font-semibold">{userData.name}</h2>
                      <p className="text-green-100">普通用户</p>
                    </div>
                  </div>
                  <div className="text-sm">
                    <p>注册时间：{userData.registerDate}</p>
                  </div>
                </div>

                <div className="p-4">
                  <nav>
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={`w-full text-left px-4 py-3 rounded-lg mb-2 flex items-center ${
                        activeTab === 'profile' ? 'bg-green-50 text-green-700' : 'hover:bg-gray-50'
                      }`}
                    >
                      <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      个人资料
                    </button>

                    <button
                      onClick={() => setActiveTab('orders')}
                      className={`w-full text-left px-4 py-3 rounded-lg mb-2 flex items-center ${
                        activeTab === 'orders' ? 'bg-green-50 text-green-700' : 'hover:bg-gray-50'
                      }`}
                    >
                      <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                      服务订单
                    </button>

                    <button
                      onClick={() => setActiveTab('consultations')}
                      className={`w-full text-left px-4 py-3 rounded-lg mb-2 flex items-center ${
                        activeTab === 'consultations' ? 'bg-green-50 text-green-700' : 'hover:bg-gray-50'
                      }`}
                    >
                      <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      咨询记录
                    </button>
                  </nav>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href="/"
                      className="w-full text-center block px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300"
                    >
                      返回首页
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 主内容区域 */}
            <div className="w-full lg:w-3/4">
              <div className="bg-white rounded-xl shadow-md p-6">
                {/* 个人资料 */}
                {activeTab === 'profile' && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">个人资料</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                        <div className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-50">
                          {userData.name}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">手机号码</label>
                        <div className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-50">
                          {userData.phone}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">电子邮箱</label>
                        <div className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-50">
                          {userData.email}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">注册日期</label>
                        <div className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-50">
                          {userData.registerDate}
                        </div>
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">地址</label>
                        <div className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-50">
                          {userData.address}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 flex items-center">
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        编辑资料
                      </button>
                    </div>
                  </div>
                )}

                {/* 服务订单 */}
                {activeTab === 'orders' && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-semibold text-gray-800">服务订单</h2>
                      <Link
                        href="/pages/contract"
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 text-sm flex items-center"
                      >
                        <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        预约新服务
                      </Link>
                    </div>
                    
                    {orders.length > 0 ? (
                      <div className="space-y-4">
                        {orders.map(order => (
                          <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                              <div>
                                <h3 className="font-semibold text-lg">{order.serviceName}</h3>
                                <p className="text-gray-500 text-sm">订单号: {order.id}</p>
                              </div>
                              <div className="mt-2 md:mt-0">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(order.status)}`}>
                                  {getStatusName(order.status)}
                                </span>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                              <div>
                                <p className="text-sm text-gray-500">服务日期</p>
                                <p>{order.date}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">服务金额</p>
                                <p className="font-semibold">¥{order.amount.toFixed(2)}</p>
                              </div>
                              <div className="sm:col-span-2">
                                <p className="text-sm text-gray-500">服务地址</p>
                                <p>{order.address}</p>
                              </div>
                            </div>
                            
                            <div className="flex justify-end space-x-2">
                              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 transition duration-300">
                                查看详情
                              </button>
                              {(order.status === 'pending' || order.status === 'confirmed') && (
                                <button className="px-3 py-1 border border-red-300 text-red-600 rounded text-sm hover:bg-red-50 transition duration-300">
                                  取消订单
                                </button>
                              )}
                              {order.status === 'completed' && (
                                <button className="px-3 py-1 border border-green-300 text-green-600 rounded text-sm hover:bg-green-50 transition duration-300">
                                  评价服务
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12 bg-gray-50 rounded-lg">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">暂无订单记录</h3>
                        <p className="mt-1 text-sm text-gray-500">您可以预约我们的服务以获取专业的农业技术支持。</p>
                        <div className="mt-6">
                          <Link
                            href="/pages/contract"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                          >
                            预约服务
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* 咨询记录 */}
                {activeTab === 'consultations' && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-semibold text-gray-800">咨询记录</h2>
                      <div className="flex space-x-2">
                        <Link
                          href="/pages/ai-consultation"
                          className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 text-sm flex items-center"
                        >
                          <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          AI咨询
                        </Link>
                        <Link
                          href="/pages/expert-consultation"
                          className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-sm flex items-center"
                        >
                          <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          专家咨询
                        </Link>
                      </div>
                    </div>
                    
                    {consultations.length > 0 ? (
                      <div className="space-y-4">
                        {consultations.map(consultation => (
                          <div key={consultation.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                              <div>
                                <div className="flex items-center">
                                  <h3 className="font-semibold text-lg mr-2">{consultation.topic}</h3>
                                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                    consultation.type === 'ai' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                                  }`}>
                                    {consultation.type === 'ai' ? 'AI咨询' : '专家咨询'}
                                  </span>
                                </div>
                                <p className="text-gray-500 text-sm">
                                  {consultation.type === 'expert' && `咨询专家: ${consultation.expertName} · `}
                                  咨询时间: {consultation.date}
                                </p>
                              </div>
                              <Link
                                href={consultation.type === 'ai' ? '/pages/ai-consultation' : `/pages/chat?expert=${consultation.id}`}
                                className="mt-2 md:mt-0 text-green-600 hover:text-green-800 text-sm flex items-center"
                              >
                                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                                继续咨询
                              </Link>
                            </div>
                            
                            <div className="bg-gray-50 p-3 rounded-lg mb-3">
                              <p className="text-gray-600 text-sm">
                                <span className="font-medium">{consultation.type === 'ai' ? 'AI助手' : consultation.expertName}:</span> {consultation.lastMessage}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12 bg-gray-50 rounded-lg">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">暂无咨询记录</h3>
                        <p className="mt-1 text-sm text-gray-500">您可以选择AI咨询或专家咨询获取农业技术支持。</p>
                        <div className="mt-6 flex justify-center space-x-3">
                          <Link
                            href="/pages/ai-consultation"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                          >
                            AI咨询
                          </Link>
                          <Link
                            href="/pages/expert-consultation"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                          >
                            专家咨询
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 