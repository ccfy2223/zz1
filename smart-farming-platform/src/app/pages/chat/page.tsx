'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'expert';
  timestamp: Date;
  isRead?: boolean;
  file?: {
    name: string;
    url: string;
    type: string;
  };
};

type Expert = {
  id: number;
  name: string;
  title: string;
  avatar: string;
  specialty: string[];
  isOnline: boolean;
  lastActive?: string;
};

export default function ChatPage() {
  const searchParams = useSearchParams();
  const expertId = searchParams.get('expert');
  
  // 模拟专家数据
  const experts: Expert[] = [
    {
      id: 1,
      name: '张教授',
      title: '海南大学农学院教授',
      avatar: '/expert1.jpg',
      specialty: ['水稻种植', '热带果树栽培', '农业病虫害防治'],
      isOnline: true,
    },
    {
      id: 2,
      name: '李博士',
      title: '农业技术推广研究员',
      avatar: '/expert2.jpg',
      specialty: ['蔬菜种植', '大棚技术', '有机农业'],
      isOnline: false,
      lastActive: '30分钟前',
    },
    {
      id: 3,
      name: '王工程师',
      title: '农业自动化工程师',
      avatar: '/expert3.jpg',
      specialty: ['智能灌溉', '农业机械', '无人机应用'],
      isOnline: true,
    },
    {
      id: 4,
      name: '陈教授',
      title: '土壤学专家',
      avatar: '/expert4.jpg',
      specialty: ['土壤改良', '肥料配方', '水土保持'],
      isOnline: false,
      lastActive: '2小时前',
    },
    {
      id: 5,
      name: '刘研究员',
      title: '植物保护专家',
      avatar: '/expert5.jpg',
      specialty: ['病虫害防治', '生物防治', '农药使用'],
      isOnline: true,
    },
    {
      id: 6,
      name: '黄技术员',
      title: '果树栽培技术员',
      avatar: '/expert6.jpg',
      specialty: ['芒果种植', '荔枝种植', '水果保鲜'],
      isOnline: false,
      lastActive: '1天前',
    }
  ];

  // 查找当前选中的专家
  const selectedExpert = experts.find(expert => expert.id === Number(expertId)) || experts[0];
  
  // 模拟消息历史
  const initialMessages: Record<number, Message[]> = {
    1: [
      {
        id: 1,
        text: '您好！我是张教授，海南大学农学院水稻种植和热带果树栽培专家。很高兴为您提供咨询服务，请问您有什么农业问题需要解决？',
        sender: 'expert',
        timestamp: new Date(Date.now() - 3600000),
        isRead: true,
      },
    ],
    2: [
      {
        id: 1,
        text: '您好！我是李博士，专注于蔬菜种植与大棚技术研究。请问您需要什么帮助？',
        sender: 'expert',
        timestamp: new Date(Date.now() - 86400000),
        isRead: true,
      },
    ],
    3: [
      {
        id: 1,
        text: '您好！我是王工程师，农业自动化和智能化专家。很高兴能够为您提供技术支持。',
        sender: 'expert',
        timestamp: new Date(Date.now() - 7200000),
        isRead: true,
      },
    ],
    4: [
      {
        id: 1,
        text: '您好！我是陈教授，土壤学专家。如果您有关于土壤改良、肥料使用或水土保持的问题，我很乐意为您解答。',
        sender: 'expert',
        timestamp: new Date(Date.now() - 180000),
        isRead: true,
      },
    ],
    5: [
      {
        id: 1,
        text: '您好！我是刘研究员，植物保护专家。如果您的农作物出现了病虫害问题，请告诉我详细症状，我会为您提供防治方案。',
        sender: 'expert',
        timestamp: new Date(Date.now() - 259200000),
        isRead: true,
      },
    ],
    6: [
      {
        id: 1,
        text: '您好！我是黄技术员，有20年热带水果种植经验。如果您有关于芒果、荔枝等热带水果的种植问题，欢迎随时咨询。',
        sender: 'expert',
        timestamp: new Date(Date.now() - 432000000),
        isRead: true,
      },
    ],
  };

  const [activeChat, setActiveChat] = useState<number>(Number(expertId) || 1);
  const [messages, setMessages] = useState<Record<number, Message[]>>(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 自动滚动到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, activeChat]);

  // 模拟专家正在输入
  useEffect(() => {
    if (inputText.length > 0 && Math.random() > 0.7) {
      setIsTyping(true);
      const timeout = setTimeout(() => {
        setIsTyping(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [inputText]);

  // 获取专家回复（模拟）
  const getExpertResponse = (expertId: number, question: string): Promise<string> => {
    return new Promise((resolve) => {
      // 延迟模拟网络请求
      setTimeout(() => {
        const responses: Record<number, Record<string, string>> = {
          1: {
            '水稻': '水稻种植需要注意水分管理和肥料施用。在海南地区，由于气候炎热，需要确保水稻有足够的水分。建议您定期检查田间水位，一般保持3-5厘米的水层。关于肥料使用，我建议在分蘖期追施氮肥，在抽穗期适当增加钾肥。如果您发现水稻叶片发黄，可能是缺铁或缺锌，可以适当喷施叶面肥。',
            '果树': '热带果树栽培需要注意修剪和水肥管理。对于芒果树，建议在采收后及时进行修剪，控制树冠高度。施肥方面，开花前应减少氮肥，增加磷钾肥，以促进花芽分化。如果您的果树生长不良，可以拍照发给我看看具体情况。',
            '防治': '农作物病虫害防治应遵循"预防为主，综合防治"的原则。发现病虫害初期，可以采用物理防治或生物防治方法。如需使用化学农药，请选择低毒、低残留的品种，并严格按照使用说明施用。'
          },
          2: {
            '蔬菜': '蔬菜种植需要注意品种选择和种植时间。在海南气候条件下，夏季适合种植耐热蔬菜如空心菜、茄子等，冬季则可以种植各类叶菜和根茎类蔬菜。如果您在大棚种植，建议配备遮阳网和降温设备，控制棚内温度。',
            '大棚': '大棚建设需要考虑通风、降温和光照条件。在海南高温季节，建议选用遮阳率为30%-40%的遮阳网，并在大棚两侧设置足够的通风口。如果条件允许，可以安装自动化控温系统，提高管理效率。',
            '有机': '有机农业需要从土壤改良开始。建议使用农家肥、绿肥等有机肥料改良土壤，增加土壤有机质含量。在病虫害防治方面，可以采用生物防治、物理防治等方法，避免使用化学农药。'
          },
          3: {
            '灌溉': '智能灌溉系统可以大大提高水资源利用率。根据您的种植规模和作物类型，我可以为您设计适合的灌溉系统。一般而言，果园和蔬菜基地适合使用滴灌或微喷灌技术，大田作物则可以考虑管道灌溉。',
            '机械': '农业机械的选择要根据您的地形条件和作物特点。如果是平原地区大面积种植，可以考虑使用较大型的机械；如果是山地或小块土地，则推荐使用小型多功能机械。',
            '无人机': '无人机在农业中的应用越来越广泛。除了常见的航拍和喷洒农药外，还可以用于监测作物生长状况、分析土壤养分等。如果您需要无人机服务，我们平台可以提供专业的作业团队。'
          },
          4: {
            '土壤': '土壤改良是提高农业产量的基础。首先需要了解您当地的土壤特性，例如酸碱度、有机质含量、质地等。针对海南地区常见的酸性土壤，可以适当施用石灰进行调节。对于缺少有机质的土壤，建议增施有机肥料。',
            '肥料': '科学使用肥料需要遵循"测土配方"原则。建议您在种植前进行土壤测试，了解土壤养分状况，再根据不同作物的需肥特点制定施肥方案。一般而言，氮肥促进生长，磷肥促进开花结果，钾肥增强抗性。',
            '水土': '水土保持工作在海南尤为重要。针对坡地可以采用等高种植、梯田建设等措施；平原地区则需要注意排水系统的建设，防止涝灾。建议在非种植期种植绿肥，既能改良土壤，又能防止水土流失。'
          },
          5: {
            '病虫害': '发现病虫害后，首先要准确识别病虫害类型。您可以拍照发给我，我会帮您诊断并提供针对性的防治方案。一般原则是早发现、早防治，使用药剂时要遵循"低毒、高效、低残留"的原则。',
            '生物防治': '生物防治是一种环保有效的方法。例如，可以释放天敌如瓢虫防治蚜虫，使用苏云金杆菌防治鳞翅目害虫等。另外，也可以使用性诱剂和色板等物理方法进行监测和防治。',
            '农药': '合理使用农药需要注意以下几点：选择适合的药剂、掌握适宜的浓度、选择合适的施药时间和方法。使用时要做好防护，避免污染环境和农产品。我们平台提供专业的无人机喷洒服务，精准高效。'
          },
          6: {
            '芒果': '芒果种植技术包括整形修剪、水肥管理、病虫害防治等多个方面。在开花前减少氮肥增加磷钾肥，有助于提高坐果率。修剪时注意保持树冠通风透光。如果遇到炭疽病等常见病害，需要及时喷药防治。',
            '荔枝': '荔枝种植关键在于花期管理和果实膨大期管理。花期要控制好水分，不宜过多；果实膨大期则需要保证充足的水分和养分。采收前15天左右减少浇水，有助于提高果实品质。',
            '保鲜': '热带水果采后保鲜技术对延长销售期很重要。芒果采收后可以用40℃热水浸泡5分钟进行杀菌处理，然后在常温下催熟或直接冷藏。荔枝则需要保持低温和适当湿度，可以使用保鲜袋或保鲜膜包装。'
          }
        };
        
        // 检查问题中是否包含关键词
        const expertResponses = responses[expertId];
        const keyword = Object.keys(expertResponses).find(key => question.includes(key));
        
        if (keyword) {
          resolve(expertResponses[keyword]);
        } else {
          resolve('感谢您的咨询。您的问题我需要进一步了解一些细节才能给出准确的建议。能否提供更多具体信息，例如您种植的具体作物品种、生长阶段、当地气候条件等？这样我可以针对您的实际情况提供更有价值的建议。');
        }
      }, 2000 + Math.random() * 2000); // 随机延迟2-4秒
    });
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const newUserMessage: Message = {
      id: messages[activeChat] ? messages[activeChat].length + 1 : 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    // 更新消息列表
    setMessages(prev => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), newUserMessage],
    }));
    setInputText('');

    // 获取专家回复
    try {
      setIsTyping(true);
      const response = await getExpertResponse(activeChat, inputText);
      setIsTyping(false);
      
      const expertMessage: Message = {
        id: messages[activeChat] ? messages[activeChat].length + 2 : 2,
        text: response,
        sender: 'expert',
        timestamp: new Date(),
      };
      
      setMessages(prev => ({
        ...prev,
        [activeChat]: [...(prev[activeChat] || []), expertMessage],
      }));
    } catch (error) {
      console.error('获取专家回复失败:', error);
      setIsTyping(false);
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

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 模拟文件上传
    const fileMessage: Message = {
      id: messages[activeChat] ? messages[activeChat].length + 1 : 1,
      text: '我发送了一个文件',
      sender: 'user',
      timestamp: new Date(),
      file: {
        name: file.name,
        url: URL.createObjectURL(file),
        type: file.type,
      },
    };

    setMessages(prev => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), fileMessage],
    }));

    // 重置文件输入
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">实时咨询</h1>
            <p className="text-gray-600">与我们的农业专家进行实时对话，获取专业指导和建议。</p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
            {/* 专家列表 */}
            <div className="w-full md:w-1/4 border-r border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold text-gray-800">我的咨询</h2>
              </div>
              <div className="overflow-y-auto" style={{ maxHeight: '70vh' }}>
                {experts.map(expert => (
                  <div
                    key={expert.id}
                    className={`p-4 border-b border-gray-200 flex items-center cursor-pointer hover:bg-gray-50 transition duration-300 ${
                      activeChat === expert.id ? 'bg-green-50' : ''
                    }`}
                    onClick={() => setActiveChat(expert.id)}
                  >
                    <div className="relative">
                      <img
                        src={expert.avatar}
                        alt={expert.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <span
                        className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${
                          expert.isOnline ? 'bg-green-500' : 'bg-gray-400'
                        }`}
                      ></span>
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-gray-800">{expert.name}</h3>
                        {messages[expert.id] && messages[expert.id].length > 0 && (
                          <span className="text-xs text-gray-500">
                            {formatTime(messages[expert.id][messages[expert.id].length - 1].timestamp)}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm truncate">
                        {expert.isOnline ? '在线' : `${expert.lastActive}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 聊天窗口 */}
            <div className="flex-1 flex flex-col">
              {/* 聊天头部 */}
              <div className="p-4 border-b border-gray-200 flex items-center">
                <img
                  src={selectedExpert.avatar}
                  alt={selectedExpert.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h3 className="font-medium text-gray-800">{selectedExpert.name}</h3>
                  <p className="text-gray-500 text-sm">{selectedExpert.title}</p>
                </div>
                <div className="ml-auto flex items-center space-x-3">
                  <button className="text-gray-500 hover:text-gray-700">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* 聊天内容 */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50" style={{ maxHeight: '60vh' }}>
                {messages[activeChat] && messages[activeChat].map((message) => (
                  <div
                    key={message.id}
                    className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender === 'expert' && (
                      <img
                        src={selectedExpert.avatar}
                        alt={selectedExpert.name}
                        className="w-8 h-8 rounded-full object-cover mr-2 mt-1"
                      />
                    )}
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-green-600 text-white'
                          : 'bg-white border border-gray-200 text-gray-800'
                      }`}
                    >
                      {message.file ? (
                        <div className="file-attachment">
                          <div className="flex items-center p-2 bg-gray-100 rounded">
                            <svg className="h-6 w-6 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <a 
                              href={message.file.url} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="text-blue-600 hover:underline"
                            >
                              {message.file.name}
                            </a>
                          </div>
                        </div>
                      ) : (
                        <div className="whitespace-pre-wrap">{message.text}</div>
                      )}
                      <div className="text-xs mt-1 text-right opacity-70">
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start mb-4">
                    <img
                      src={selectedExpert.avatar}
                      alt={selectedExpert.name}
                      className="w-8 h-8 rounded-full object-cover mr-2 mt-1"
                    />
                    <div className="bg-white border border-gray-200 rounded-lg p-3 text-gray-800">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* 输入区域 */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-end">
                  <button
                    onClick={handleFileUpload}
                    className="text-gray-500 hover:text-gray-700 mr-2"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="输入您的问题..."
                    className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                    rows={2}
                  ></textarea>
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim()}
                    className={`ml-2 px-4 py-3 rounded-lg font-medium ${
                      !inputText.trim()
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    } transition duration-300`}
                  >
                    发送
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 咨询提示 */}
          <div className="mt-8 bg-green-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">咨询提示</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">提供详细信息</h3>
                <p className="text-gray-600 text-sm">
                  在咨询时，尽量提供详细的信息，如作物种类、生长阶段、环境条件等，这样专家能够更准确地分析问题。
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">上传照片</h3>
                <p className="text-gray-600 text-sm">
                  如果遇到病虫害问题，建议上传清晰的照片，包括全株照片和病虫害部位的特写，有助于专家准确诊断。
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">保存重要信息</h3>
                <p className="text-gray-600 text-sm">
                  咨询结束后，可以将重要的建议和方案保存下来，以便日后查阅和执行。您可以在"我的咨询"中查看历史记录。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 