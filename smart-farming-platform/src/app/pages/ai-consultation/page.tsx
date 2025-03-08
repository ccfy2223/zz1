'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

export default function AIConsultation() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: '您好！我是智慧助农AI助手，有什么农业问题需要咨询吗？',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 自动滚动到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // AI响应的模拟函数
  const getAIResponse = (question: string): Promise<string> => {
    return new Promise((resolve) => {
      // 模拟不同问题的回答
      const responses: Record<string, string> = {
        '水稻': '水稻种植需要保持田间的适当水位，一般在插秧后保持3-5厘米的水层。水稻生长期需要充足的阳光，建议您控制好田间杂草。目前海南地区适合种植的水稻品种有：海水稻、海南优占、特优占等。您可以根据您所在的具体区域选择适合的品种。',
        '肥料': '选择合适的肥料对农作物生长至关重要。根据不同作物的需求，您可以选择氮、磷、钾含量不同的复合肥料。建议您在使用肥料前进行土壤检测，了解土壤的营养状况，以便更精准地施肥。对于热带水果种植，可以选择含钾量较高的肥料以增加果实的甜度。',
        '病虫害': '发现病虫害后，首先要准确识别病虫害类型，再采取针对性措施。可以考虑使用生物防治或化学防治方法。在使用农药时，请注意遵循安全使用规范，避免过量使用导致农药残留问题。我们平台提供无人机喷洒服务，可以帮助您高效精准地施药。',
        '灌溉': '科学灌溉可以提高水资源利用率。对于不同作物，灌溉方式和水量要求不同。海南地区可以考虑使用滴灌或微喷灌技术，尤其适合果园和蔬菜基地。我们可以为您提供智能灌溉系统的设计和安装服务。',
        '大棚': '大棚种植可以有效调节作物生长环境，延长生产季节。在海南地区，可以考虑使用遮阳网和防虫网相结合的大棚结构，既能降温又能防虫。我们团队可以为您提供大棚设计和建设服务，包括智能温控系统的安装。',
      };

      // 延迟模拟网络请求
      setTimeout(() => {
        // 检查问题中是否包含关键词
        const keyword = Object.keys(responses).find(key => question.includes(key));
        if (keyword) {
          resolve(responses[keyword]);
        } else {
          resolve('很抱歉，我目前无法回答这个问题。您可以尝试咨询其他农业相关的问题，或者联系我们的专家获取更专业的指导。');
        }
      }, 1000);
    });
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    // 添加用户消息
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // 获取AI响应
    try {
      const response = await getAIResponse(inputText);
      const aiMessage: Message = {
        id: messages.length + 2,
        text: response,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('获取AI响应失败:', error);
      const errorMessage: Message = {
        id: messages.length + 2,
        text: '抱歉，系统出现了问题，请稍后再试。',
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">AI智能咨询</h1>
            <p className="text-gray-600">
              欢迎使用海南大学智慧助农平台的AI咨询服务。您可以向我们的AI助手咨询各类农业问题，
              获取即时的专业建议。如果AI无法解决您的问题，可以选择
              <Link href="/pages/expert-consultation" className="text-green-600 hover:underline">
                联系专家
              </Link>
              获取更深入的指导。
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4 bg-green-700 text-white">
              <h2 className="font-semibold text-lg">AI农业助手</h2>
              <p className="text-sm text-green-100">基于先进的人工智能技术，为您提供农业问题解答</p>
            </div>

            {/* 消息区域 */}
            <div className="h-[60vh] overflow-y-auto p-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-green-600 text-white'
                        : 'bg-white border border-gray-200 text-gray-800'
                    }`}
                  >
                    <div className="text-sm mb-1">
                      {message.sender === 'user' ? '您' : 'AI助手'}
                      <span className="text-xs opacity-70 ml-2">{formatTime(message.timestamp)}</span>
                    </div>
                    <div className="whitespace-pre-wrap">{message.text}</div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-gray-800 max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* 输入区域 */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="输入您的农业问题，例如：如何防治水稻病虫害？"
                  className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  rows={2}
                ></textarea>
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputText.trim()}
                  className={`px-4 rounded-r-lg font-medium ${
                    isLoading || !inputText.trim()
                      ? 'bg-gray-300 text-gray-500'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  } transition duration-300`}
                >
                  发送
                </button>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                <p>提示：您可以询问关于种植技术、病虫害防治、肥料使用等农业问题</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">热门问题</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setInputText('水稻种植需要注意什么？')}
                className="text-left p-3 border border-gray-200 rounded-lg hover:bg-green-50 transition duration-300"
              >
                水稻种植需要注意什么？
              </button>
              <button
                onClick={() => setInputText('如何选择合适的肥料？')}
                className="text-left p-3 border border-gray-200 rounded-lg hover:bg-green-50 transition duration-300"
              >
                如何选择合适的肥料？
              </button>
              <button
                onClick={() => setInputText('常见的农作物病虫害防治方法有哪些？')}
                className="text-left p-3 border border-gray-200 rounded-lg hover:bg-green-50 transition duration-300"
              >
                常见的农作物病虫害防治方法有哪些？
              </button>
              <button
                onClick={() => setInputText('科学灌溉的方法有哪些？')}
                className="text-left p-3 border border-gray-200 rounded-lg hover:bg-green-50 transition duration-300"
              >
                科学灌溉的方法有哪些？
              </button>
              <button
                onClick={() => setInputText('大棚种植有什么优势？')}
                className="text-left p-3 border border-gray-200 rounded-lg hover:bg-green-50 transition duration-300"
              >
                大棚种植有什么优势？
              </button>
            </div>
          </div>

          <div className="mt-8 bg-green-50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">需要更专业的帮助？</h2>
            <p className="text-gray-600 mb-4">
              如果您的问题需要更专业的解答，或者需要针对您的具体情况提供建议，我们的农业专家团队随时准备为您服务。
            </p>
            <Link
              href="/pages/expert-consultation"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
            >
              咨询专家
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 