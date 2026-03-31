'use client';

import { useState } from 'react';

export default function RightSidebarSocial() {
  // State quản lý Friend Request
  const [showFriendRequest, setShowFriendRequest] = useState(true);
  const [isAccepted, setIsAccepted] = useState(false);
  
  // Thêm State mới để quản lý việc hiển thị phần ADS
  const [showAds, setShowAds] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="space-y-4 hidden md:block text-center text-gray-700">
      {/* Upcoming Events */}
      <div className="bg-white shadow-sm rounded-sm p-4">
        <p className="mb-4 text-sm">Upcoming Events:</p>
        <img src="https://www.w3schools.com/w3images/forest.jpg" alt="Forest" className="w-full h-auto mb-4 rounded-sm" />
        <p className="font-semibold text-sm">Holiday</p>
        <p className="text-gray-500 text-xs mb-4">Friday 15:00</p>
        
        {/* Phần hiển thị thêm khi ấn nút Info */}
        {showInfo && (
          <div className="text-sm mb-4">
            <p>ONEPAGE</p>
            <p>Trung Văn, Trung Thư</p>
          </div>
        )}

        <button 
          className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-sm hover:bg-gray-300 transition-colors text-sm"
          onClick={() => setShowInfo(!showInfo)} // Đổi trạng thái khi click (ẩn/hiện)
        >
          Info
        </button>
      </div>

      {/* Friend Request */}
      {showFriendRequest && (
        <div className="bg-white shadow-sm rounded-sm p-4 text-center">
          <p className="mb-4 text-sm">Friend Request</p>
          <img src="https://www.w3schools.com/w3images/avatar6.png" alt="Avatar" className="w-1/2 mx-auto rounded-full mb-4" />
          
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-sm">Jane Doe</span>
            {isAccepted && (
              <span className="bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-sm">Accepted</span>
            )}
          </div>
          
          {!isAccepted && (
            <div className="flex gap-2 justify-center">
              <button 
                className="bg-green-500 text-white w-8 h-8 rounded hover:bg-green-400 transition-colors" 
                title="Accept"
                onClick={() => setIsAccepted(true)}
              >
                <i className="fa fa-check"></i>
              </button>
              <button 
                className="bg-red-500 text-white w-8 h-8 rounded hover:bg-red-400 transition-colors" 
                title="Decline"
                onClick={() => setShowFriendRequest(false)}
              >
                <i className="fa fa-remove"></i>
              </button>
            </div>
          )}
        </div>
      )}

      {/* ADS - Bọc trong điều kiện showAds */}
      {showAds && (
        <div className="bg-white shadow-sm rounded-sm p-4 py-8 relative">
          {/* Nút X nằm ở góc trên bên phải */}
          <button 
            className="absolute top-2 right-2 text-gray-400 hover:text-black transition-colors"
            onClick={() => setShowAds(false)}
            title="Close"
          >
            <i className="fa fa-remove">✖</i>
          </button>
          <p className="text-sm">ADS</p>
        </div>
      )}
      
      {/* Bug */}
      <div className="bg-white shadow-sm rounded-sm p-4 py-8 text-3xl hover:bg-gray-200 transition-colors cursor-pointer">
        <i className="fa fa-bug"></i>
      </div>
    </div>
  );
}