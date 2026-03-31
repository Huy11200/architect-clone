'use client';

import { useState } from 'react';

export default function PostInput() {
  // State lưu nội dung đang gõ trong ô input
  const [inputValue, setInputValue] = useState('');
  
  // State lưu danh sách các bài đã post (mảng các chuỗi)
  const [posts, setPosts] = useState([]);

  // Hàm xử lý khi ấn nút Post
  const handlePost = () => {
    if (inputValue.trim() !== '') {
      // Thêm bài viết mới vào ĐẦU mảng (để hiện lên trên cùng)
      setPosts([inputValue, ...posts]);
      // Xóa trắng ô input sau khi post thành công
      setInputValue('');
    }
  };

  return (
    <div className="bg-white shadow-sm rounded-sm p-4 text-gray-500 mb-4">
      <h6 className="mb-4 text-sm font-medium">Social Media template by w3.css</h6>
      
      {/* KHU VỰC HIỂN THỊ BÀI VIẾT (Phía trên phần nhập liệu) */}
      {posts.length > 0 && (
        <div className="mb-4 space-y-3">
          {posts.map((postContent, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded-sm text-gray-800 border-l-4 border-[#4d636f]">
              {postContent}
            </div>
          ))}
        </div>
      )}

      {/* KHU VỰC NHẬP LIỆU */}
      <input 
        type="text" 
        placeholder="Status: Feeling Blue" 
        className="w-full border p-2 mb-4 focus:outline-none focus:border-gray-400" 
        value={inputValue} // Gắn giá trị của input với state
        onChange={(e) => setInputValue(e.target.value)} // Cập nhật state khi gõ
        onKeyDown={(e) => e.key === 'Enter' && handlePost()} // Hỗ trợ ấn Enter để post
      />
      
      <button 
        onClick={handlePost} // Gọi hàm handlePost khi click
        className="bg-[#4d636f] text-white px-4 py-2 rounded-sm hover:bg-gray-300 hover:text-black transition-colors"
      >
        <i className="fa fa-pencil"></i> &nbsp;Post
      </button>
    </div>
  );
}