"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold flex items-center">
              <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
              <span>海南大学智慧助农平台</span>
            </Link>
          </div>

          {/* 桌面导航菜单 */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="hover:text-green-200 transition duration-300">首页</Link>
            <Link href="/pages/ai-consultation" className="hover:text-green-200 transition duration-300">AI咨询</Link>
            <Link href="/pages/expert-consultation" className="hover:text-green-200 transition duration-300">专家咨询</Link>
            <Link href="/pages/services" className="hover:text-green-200 transition duration-300">服务内容</Link>
            <Link href="/pages/contract" className="hover:text-green-200 transition duration-300">合同签订</Link>
            <Link href="/pages/about" className="hover:text-green-200 transition duration-300">关于我们</Link>
            <Link href="/pages/user" className="bg-white text-green-700 px-4 py-2 rounded-full font-medium hover:bg-green-100 transition duration-300">
              个人中心
            </Link>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link href="/" className="block hover:bg-green-600 px-3 py-2 rounded transition duration-300">首页</Link>
            <Link href="/pages/ai-consultation" className="block hover:bg-green-600 px-3 py-2 rounded transition duration-300">AI咨询</Link>
            <Link href="/pages/expert-consultation" className="block hover:bg-green-600 px-3 py-2 rounded transition duration-300">专家咨询</Link>
            <Link href="/pages/services" className="block hover:bg-green-600 px-3 py-2 rounded transition duration-300">服务内容</Link>
            <Link href="/pages/contract" className="block hover:bg-green-600 px-3 py-2 rounded transition duration-300">合同签订</Link>
            <Link href="/pages/about" className="block hover:bg-green-600 px-3 py-2 rounded transition duration-300">关于我们</Link>
            <Link href="/pages/user" className="block bg-white text-green-700 px-3 py-2 rounded transition duration-300">个人中心</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 