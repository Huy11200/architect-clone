'use client';

import { useState } from 'react';

export default function PostCard({ avatar, name, time, content, images }) {
  // State cho nút Like
  const [isLiked, setIsLiked] = useState(false);

  // States cho chức năng Comment
  const [showCommentInput, setShowCommentInput] = useState(false); // Ẩn/hiện ô comment
  const [commentValue, setCommentValue] = useState(''); // Lưu text đang gõ
  const [comments, setComments] = useState([]); // Lưu danh sách các comment đã gửi

  // Hàm xử lý khi ấn phím trong ô input
  const handleCommentSubmit = (e) => {
    // Nếu phím ấn là Enter và nội dung không bị rỗng
    if (e.key === 'Enter' && commentValue.trim() !== '') {
      // Thêm bình luận mới vào cuối mảng danh sách
      setComments([...comments, commentValue]);
      // Reset lại ô input cho trống
      setCommentValue('');
    }
  };

  return (
    <div className="bg-white shadow-sm rounded-sm p-4 text-gray-700 mb-4">
      {/* Header bài viết */}
      <div className="flex items-center mb-4">
        <img src={avatar} alt="Avatar" className="w-[60px] h-[60px] rounded-full mr-4" />
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
      </div>
      <hr className="mb-4" />
      
      {/* Nội dung bài viết */}
      <p className="mb-4">{content}</p>
      
      {/* Hiển thị ảnh nếu có truyền vào prop images */}
      {images && images.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          {images.map((imgUrl, index) => (
            <img key={index} src={imgUrl} alt="Post image" className="w-full h-auto rounded-sm" />
          ))}
        </div>
      )}

      {/* Khu vực nút bấm */}
      <div className="mb-4">
        {/* Nút Like */}
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className={`px-4 py-2 rounded-sm transition-colors mr-2 ${
            isLiked 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-[#4d636f] text-white hover:bg-gray-300 hover:text-black' 
          }`}
        >
          <i className="fa fa-thumbs-up"></i> &nbsp;Like
        </button>

        {/* Nút Comment */}
        <button 
          onClick={() => setShowCommentInput(!showCommentInput)} // Tắt/bật khu vực bình luận
          className="bg-[#4d636f] text-white px-4 py-2 rounded-sm hover:bg-gray-300 hover:text-black transition-colors"
        >
          <i className="fa fa-comment"></i> &nbsp;Comment
        </button>
      </div>

      {/* Khu vực bình luận (chỉ hiện khi showCommentInput là true) */}
      {showCommentInput && (
        <div className="mt-4 border-t pt-4">
          
          {/* Danh sách các bình luận đã đăng */}
          {comments.length > 0 && (
            <div className="space-y-2 mb-4">
              {comments.map((cmt, idx) => (
                <div key={idx} className="bg-gray-100 p-2 px-3 rounded-2xl w-fit text-sm">
                  <span className="font-semibold mr-2">Tôi:</span>
                  <span>{cmt}</span>
                </div>
              ))}
            </div>
          )}

          {/* Ô input để nhập bình luận mới */}
          <div className="flex items-center gap-2">
            <img src="https://www.w3schools.com/w3images/avatar2.png" alt="My Avatar" className="w-8 h-8 rounded-full" />
            <input 
              type="text" 
              placeholder="Viết bình luận..." 
              className="w-full border rounded-full px-4 py-2 text-sm focus:outline-none focus:border-gray-400 bg-gray-50"
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)} // Cập nhật text liên tục khi gõ
              onKeyDown={handleCommentSubmit} // Lắng nghe sự kiện gõ phím Enter
            />
          </div>
        </div>
      )}
    </div>
  );
}