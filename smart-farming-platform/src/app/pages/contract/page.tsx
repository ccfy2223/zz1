'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';

type ServiceItem = {
  id: number;
  name: string;
  description: string;
  priceUnit: string;
  basePrice: number;
  image: string;
};

type FormData = {
  customerName: string;
  phone: string;
  email: string;
  address: string;
  serviceDate: string;
  serviceItems: number[];
  area: string;
  duration: string;
  additionalRequirements: string;
  signatureUrl: string | null;
};

export default function ContractPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    serviceDate: '',
    serviceItems: [],
    area: '',
    duration: '',
    additionalRequirements: '',
    signatureUrl: null,
  });
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // 服务项目列表
  const serviceItems: ServiceItem[] = [
    {
      id: 1,
      name: '无人机航拍服务',
      description: '使用高清无人机对农田进行全方位航拍，生成正射影像图，便于农田规划和监测',
      priceUnit: '亩',
      basePrice: 15,
      image: '/service1.jpg',
    },
    {
      id: 2,
      name: '无人机撒药服务',
      description: '使用农用无人机进行精准农药喷洒，提高农药利用率，降低人工成本',
      priceUnit: '亩',
      basePrice: 25,
      image: '/service2.jpg',
    },
    {
      id: 3,
      name: '大棚建设服务',
      description: '提供大棚设计、建设和智能系统安装服务，包括温控系统、灌溉系统等',
      priceUnit: '平方米',
      basePrice: 180,
      image: '/service3.jpg',
    },
    {
      id: 4,
      name: '种植技术指导',
      description: '由农业专家提供的种植技术现场指导服务，包括土壤改良、品种选择等',
      priceUnit: '天',
      basePrice: 800,
      image: '/service4.jpg',
    },
    {
      id: 5,
      name: '病虫害诊断与防治',
      description: '专业技术人员进行现场病虫害诊断，并提供针对性防治方案和实施',
      priceUnit: '次',
      basePrice: 500,
      image: '/service5.jpg',
    },
    {
      id: 6,
      name: '农产品营销咨询',
      description: '提供农产品营销策划、品牌建设和销售渠道拓展等咨询服务',
      priceUnit: '次',
      basePrice: 1200,
      image: '/service6.jpg',
    }
  ];

  // 表单输入处理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // 清除错误提示
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  // 复选框处理
  const handleCheckboxChange = (serviceId: number) => {
    const newServiceItems = formData.serviceItems.includes(serviceId)
      ? formData.serviceItems.filter(id => id !== serviceId)
      : [...formData.serviceItems, serviceId];
    
    setFormData({
      ...formData,
      serviceItems: newServiceItems,
    });
    
    // 清除错误提示
    if (errors.serviceItems) {
      setErrors({
        ...errors,
        serviceItems: '',
      });
    }
  };

  // 表单验证
  const validateForm = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (currentStep === 1) {
      if (!formData.customerName.trim()) {
        newErrors.customerName = '请输入您的姓名';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = '请输入您的联系电话';
      } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
        newErrors.phone = '请输入有效的手机号码';
      }
      if (!formData.email.trim()) {
        newErrors.email = '请输入您的电子邮箱';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = '请输入有效的电子邮箱';
      }
      if (!formData.address.trim()) {
        newErrors.address = '请输入您的详细地址';
      }
    } else if (currentStep === 2) {
      if (formData.serviceItems.length === 0) {
        newErrors.serviceItems = '请至少选择一项服务';
      }
      if (!formData.serviceDate) {
        newErrors.serviceDate = '请选择服务日期';
      }
      if (!formData.area.trim() && (formData.serviceItems.includes(1) || formData.serviceItems.includes(2) || formData.serviceItems.includes(3))) {
        newErrors.area = '请输入服务面积';
      }
      if (!formData.duration.trim() && (formData.serviceItems.includes(4) || formData.serviceItems.includes(5) || formData.serviceItems.includes(6))) {
        newErrors.duration = '请输入服务时长';
      }
    } else if (currentStep === 3) {
      if (!formData.signatureUrl) {
        newErrors.signature = '请在合同上签名';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 下一步
  const handleNextStep = () => {
    if (validateForm(step)) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  // 上一步
  const handlePreviousStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  // 签名相关功能
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let clientX, clientY;
    if ('touches' in e) {
      // 触摸事件
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      // 鼠标事件
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let clientX, clientY;
    if ('touches' in e) {
      // 触摸事件
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
      e.preventDefault(); // 防止触摸设备上的滚动
    } else {
      // 鼠标事件
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    const rect = canvas.getBoundingClientRect();
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';
    
    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const endDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    setFormData({
      ...formData,
      signatureUrl: canvas.toDataURL('image/png'),
    });
    
    // 清除签名错误
    if (errors.signature) {
      setErrors({
        ...errors,
        signature: '',
      });
    }
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setFormData({
      ...formData,
      signatureUrl: null,
    });
  };

  // 合同提交
  const handleSubmit = async () => {
    if (validateForm(step)) {
      setSubmitting(true);
      
      // 模拟API请求
      try {
        // 实际项目中这里应该是一个API请求
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setSubmitted(true);
        setStep(4);
      } catch (error) {
        console.error('提交合同失败:', error);
        alert('提交合同失败，请稍后重试');
      } finally {
        setSubmitting(false);
      }
    }
  };

  // 计算总价
  const calculateTotalPrice = () => {
    let total = 0;
    
    formData.serviceItems.forEach(itemId => {
      const service = serviceItems.find(item => item.id === itemId);
      if (service) {
        if (service.id <= 3 && formData.area) {
          // 按面积计费的服务
          total += service.basePrice * parseFloat(formData.area);
        } else if (service.id >= 4 && formData.duration) {
          // 按时长计费的服务
          total += service.basePrice * parseFloat(formData.duration);
        }
      }
    });
    
    return total.toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">服务合同签订</h1>
            <p className="text-gray-600">
              通过在线合同签订，您可以便捷地预约我们的各项农业技术服务。
              我们将根据您的需求提供专业的服务方案和明确的价格。
            </p>
          </div>

          {/* 步骤指示器 */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className={`relative flex flex-col items-center ${
                    item < 4 ? 'flex-1' : ''
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${
                      step >= item ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  >
                    {item < 4 ? item : '✓'}
                  </div>
                  <div className="text-sm mt-2 text-center">
                    {item === 1 && '客户信息'}
                    {item === 2 && '服务选择'}
                    {item === 3 && '合同确认'}
                    {item === 4 && '完成'}
                  </div>
                  {item < 4 && (
                    <div
                      className={`absolute top-5 w-full h-1 left-1/2 ${
                        step > item ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 表单步骤 */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            {step === 1 && (
              <div>
                <h2 className="text-xl font-semibold mb-6">填写客户信息</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-1">
                      姓名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="customerName"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        errors.customerName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.customerName && (
                      <p className="mt-1 text-sm text-red-500">{errors.customerName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      联系电话 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      电子邮箱 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      服务地址 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="请输入详细地址"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        errors.address ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-500">{errors.address}</p>
                    )}
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleNextStep}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                  >
                    下一步
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-semibold mb-6">选择服务内容</h2>
                
                {/* 服务选择 */}
                <div className="mb-6">
                  <p className="block text-sm font-medium text-gray-700 mb-3">
                    服务项目 <span className="text-red-500">*</span>
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceItems.map(service => (
                      <div
                        key={service.id}
                        className={`border rounded-lg p-4 cursor-pointer transition duration-300 ${
                          formData.serviceItems.includes(service.id)
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                        onClick={() => handleCheckboxChange(service.id)}
                      >
                        <div className="flex items-start">
                          <input
                            type="checkbox"
                            id={`service-${service.id}`}
                            checked={formData.serviceItems.includes(service.id)}
                            onChange={() => handleCheckboxChange(service.id)}
                            className="mt-1 h-4 w-4 text-green-600 rounded"
                          />
                          <label
                            htmlFor={`service-${service.id}`}
                            className="ml-2 block"
                          >
                            <span className="font-medium block">{service.name}</span>
                            <span className="text-sm text-gray-600 block mt-1">
                              {service.description}
                            </span>
                            <span className="text-sm text-green-700 font-medium block mt-2">
                              ¥{service.basePrice}/{service.priceUnit}
                            </span>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.serviceItems && (
                    <p className="mt-1 text-sm text-red-500">{errors.serviceItems}</p>
                  )}
                </div>

                {/* 服务日期 */}
                <div className="mb-6">
                  <label htmlFor="serviceDate" className="block text-sm font-medium text-gray-700 mb-1">
                    服务日期 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="serviceDate"
                    name="serviceDate"
                    value={formData.serviceDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                      errors.serviceDate ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.serviceDate && (
                    <p className="mt-1 text-sm text-red-500">{errors.serviceDate}</p>
                  )}
                </div>

                {/* 面积和时长 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {formData.serviceItems.some(id => [1, 2, 3].includes(id)) && (
                    <div>
                      <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
                        服务面积（亩/平方米） <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="area"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.area ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.area && (
                        <p className="mt-1 text-sm text-red-500">{errors.area}</p>
                      )}
                    </div>
                  )}

                  {formData.serviceItems.some(id => [4, 5, 6].includes(id)) && (
                    <div>
                      <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                        服务时长（天/次） <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        min="1"
                        step="1"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.duration ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.duration && (
                        <p className="mt-1 text-sm text-red-500">{errors.duration}</p>
                      )}
                    </div>
                  )}
                </div>

                {/* 附加需求 */}
                <div className="mb-6">
                  <label htmlFor="additionalRequirements" className="block text-sm font-medium text-gray-700 mb-1">
                    附加需求或说明（选填）
                  </label>
                  <textarea
                    id="additionalRequirements"
                    name="additionalRequirements"
                    value={formData.additionalRequirements}
                    onChange={handleChange}
                    rows={4}
                    placeholder="请描述您的特殊需求或其他说明"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    onClick={handlePreviousStep}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-300"
                  >
                    上一步
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                  >
                    下一步
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-xl font-semibold mb-6">合同确认与签署</h2>

                {/* 合同内容 */}
                <div className="border border-gray-300 rounded-lg p-6 mb-6 bg-gray-50">
                  <h3 className="text-center font-bold text-lg mb-4">海南大学智慧助农平台服务合同</h3>
                  
                  <div className="mb-4">
                    <p className="font-medium">甲方（服务方）：海南大学智慧助农平台</p>
                    <p className="font-medium">乙方（客户）：{formData.customerName}</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-medium">一、服务内容</p>
                    <ul className="list-disc pl-5 mt-1">
                      {formData.serviceItems.map(itemId => {
                        const service = serviceItems.find(s => s.id === itemId);
                        return service ? (
                          <li key={service.id}>
                            {service.name}
                            {service.id <= 3 && formData.area ? 
                              `（面积：${formData.area}${service.priceUnit}）` : 
                              service.id >= 4 && formData.duration ? 
                              `（时长：${formData.duration}${service.priceUnit}）` : ''}
                          </li>
                        ) : null;
                      })}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-medium">二、服务地点</p>
                    <p>{formData.address}</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-medium">三、服务时间</p>
                    <p>{formData.serviceDate}</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-medium">四、服务费用</p>
                    <p>总计：¥{calculateTotalPrice()} 元</p>
                    <p className="text-sm text-gray-600 mt-1">（详细费用计算将在合同确认后提供）</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-medium">五、双方责任</p>
                    <p>甲方责任：</p>
                    <ul className="list-disc pl-5 mt-1">
                      <li>按照约定时间提供专业的服务</li>
                      <li>保护乙方的个人信息和隐私</li>
                      <li>对服务过程中的问题及时响应和解决</li>
                    </ul>
                    <p className="mt-2">乙方责任：</p>
                    <ul className="list-disc pl-5 mt-1">
                      <li>提供准确的地址和联系方式</li>
                      <li>配合甲方完成服务</li>
                      <li>按照约定支付服务费用</li>
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-medium">六、其他约定</p>
                    <p>{formData.additionalRequirements || '无'}</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-medium">七、合同生效</p>
                    <p>本合同经双方签字后生效。</p>
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <div>
                      <p>甲方（盖章）：</p>
                      <p className="mt-8">日期：{new Date().toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p>乙方（签字）：</p>
                      <div className="mt-2">
                        {formData.signatureUrl && (
                          <img
                            src={formData.signatureUrl}
                            alt="客户签名"
                            className="max-h-16"
                          />
                        )}
                      </div>
                      <p className="mt-2">日期：{new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>

                {/* 签名区域 */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    请在下方签名 <span className="text-red-500">*</span>
                  </label>
                  <div className="border border-gray-300 rounded-lg overflow-hidden">
                    <canvas
                      ref={canvasRef}
                      width={500}
                      height={150}
                      className="bg-white w-full touch-none"
                      onMouseDown={startDrawing}
                      onMouseMove={draw}
                      onMouseUp={endDrawing}
                      onMouseLeave={endDrawing}
                      onTouchStart={startDrawing}
                      onTouchMove={draw}
                      onTouchEnd={endDrawing}
                    ></canvas>
                  </div>
                  {errors.signature && (
                    <p className="mt-1 text-sm text-red-500">{errors.signature}</p>
                  )}
                  <button
                    onClick={clearSignature}
                    className="mt-2 text-sm text-gray-600 hover:text-gray-800"
                  >
                    清除重写
                  </button>
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    onClick={handlePreviousStep}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-300"
                  >
                    上一步
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className={`px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 flex items-center ${
                      submitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {submitting && (
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                    提交合同
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">合同提交成功！</h2>
                <p className="text-gray-600 mb-6">
                  感谢您选择海南大学智慧助农平台的服务。我们已收到您的服务需求，工作人员将在24小时内与您联系确认详情。
                </p>
                <div className="bg-gray-50 p-4 rounded-lg inline-block mb-6">
                  <p className="font-medium">合同编号：HN{Date.now().toString().slice(-8)}</p>
                  <p>客户：{formData.customerName}</p>
                  <p>联系电话：{formData.phone}</p>
                  <p>服务日期：{formData.serviceDate}</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    href="/pages/services"
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-300"
                  >
                    查看更多服务
                  </Link>
                  <Link
                    href="/"
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                  >
                    返回首页
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 服务说明 */}
          {step < 4 && (
            <div className="mt-8 bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">服务须知</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>所有服务需提前3天预约，特殊情况可联系客服协商</li>
                <li>服务价格为基础价格，可能根据实际情况有所调整</li>
                <li>如遇恶劣天气等不可抗力因素，服务时间可能会推迟</li>
                <li>合同签订后，我们将在24小时内与您联系确认具体细节</li>
                <li>如需取消服务，请提前48小时通知，否则可能会产生违约金</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                如有任何疑问，请联系我们的客服：0898-12345678
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 