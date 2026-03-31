'use client';

import { useState } from 'react';

export default function PostCard({ avatar, name, time, content, images }) {
  const [isLiked, setIsLiked] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentValue, setCommentValue] = useState('');
  const [comments, setComments] = useState([]);

  // Hàm xử lý gửi bình luận
  const handleCommentSubmit = (e) => {
    if (e.key === 'Enter' && commentValue.trim() !== '') {
      setComments([...comments, commentValue]);
      setCommentValue('');
    }
  };

  // HÀM MỚI: Xóa bình luận dựa trên index
  const deleteComment = (indexToDelete) => {
    // Tạo mảng mới lọc bỏ phần tử có index trùng với index cần xóa
    const updatedComments = comments.filter((_, index) => index !== indexToDelete);
    setComments(updatedComments);
  };

  return (
    <div className="bg-white shadow-sm rounded-sm p-4 text-gray-700 mb-4">
      {/* ... (Giữ nguyên phần Header và Content bài viết như cũ) ... */}
      <div className="flex items-center mb-4">
        <img src={avatar} alt="Avatar" className="w-[60px] h-[60px] rounded-full mr-4" />
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
      </div>
      <hr className="mb-4" />
      <p className="mb-4">{content}</p>
      
      {/* ... (Phần hiển thị ảnh) ... */}
      {images && images.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          {images.map((imgUrl, index) => (
            <img key={index} src={imgUrl} alt="Post image" className="w-full h-auto rounded-sm" />
          ))}
        </div>
      )}

      {/* Khu vực nút Like/Comment */}
      <div className="mb-4">
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className={`px-4 py-2 rounded-sm transition-colors mr-2 ${
            isLiked ? 'bg-blue-600 text-white' : 'bg-[#4d636f] text-white'
          }`}
        >
          <i className="fa fa-thumbs-up"></i> &nbsp;Like
        </button>

        <button 
          onClick={() => setShowCommentInput(!showCommentInput)}
          className="bg-[#4d636f] text-white px-4 py-2 rounded-sm hover:bg-gray-300 hover:text-black transition-colors"
        >
          <i className="fa fa-comment"></i> &nbsp;Comment
        </button>
      </div>

      {/* Khu vực bình luận */}
      {showCommentInput && (
        <div className="mt-4 border-t pt-4">
          
          {/* Danh sách bình luận */}
          {comments.length > 0 && (
            <div className="space-y-3 mb-4">
              {comments.map((cmt, idx) => (
                <div key={idx} className="group flex items-center gap-2">
                  <div className="bg-gray-100 p-2 px-3 rounded-2xl w-fit text-sm relative">
                    <span className="font-semibold mr-2 text-xs block">Tôi</span>
                    <span>{cmt}</span>
                  </div>
                  
                  {/* Nút Xóa - chỉ hiện rõ khi di chuột vào vùng bình luận (group-hover) */}
                  <button 
                    onClick={() => deleteComment(idx)}
                    className="text-xs text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                    title="Xóa bình luận"
                  >
                    Xóa
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Ô nhập bình luận */}
          <div className="flex items-center gap-2">
            <img src="https://www.w3schools.com/w3images/avatar2.png" alt="My Avatar" className="w-8 h-8 rounded-full" />
            <input 
              type="text" 
              placeholder="Viết bình luận..." 
              className="w-full border rounded-full px-4 py-2 text-sm focus:outline-none focus:border-gray-400 bg-gray-50"
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
              onKeyDown={handleCommentSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
}