import React from 'react';
import LogoImg from '../images/tsuboibakery_logo.png';

export const Header: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between md:justify-start h-16">
        <div className="flex-shrink-0 flex items-center">
          <img
            src={LogoImg}
            className="block h-14 w-auto fill-current text-gray-600"
          />
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            つぼいベーカリー
          </h2>
        </div>
        {/* Navigation Links */}
        <div className="hidden space-x-4 md:-my-px md:ml-10 md:flex">
          <div className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500">
            新着情報
          </div>
          <div className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500">
            パンへのこだわり
          </div>
          <div className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500">
            店舗情報
          </div>
          <div className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900">
            お取り置き予約
          </div>
        </div>
        {/* Hamburger */}
        <div className="-mr-2 flex items-center md:hidden">
          <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                className="inline-flex"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
