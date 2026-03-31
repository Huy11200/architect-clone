export default function PostCard({ avatar, name, time, content, images }) {
  return (
    <div className="bg-white shadow-sm rounded-sm p-4 text-gray-700">
      <div className="flex items-center mb-4">
        <img src={avatar} alt="Avatar" className="w-[60px] h-[60px] rounded-full mr-4" />
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
      </div>
      <hr className="mb-4" />
      <p className="mb-4">{content}</p>
      
      {/* Hiển thị ảnh nếu có truyền vào prop images */}
      {images && images.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          {images.map((imgUrl, index) => (
            <img key={index} src={imgUrl} alt="Post image" className="w-full h-auto rounded-sm" />
          ))}
        </div>
      )}

      <button className="bg-[#4d636f] text-white px-4 py-2 rounded-sm hover:bg-gray-300 hover:text-black transition-colors mr-2">
        <i className="fa fa-thumbs-up"></i> &nbsp;Like
      </button>
      <button className="bg-[#4d636f] text-white px-4 py-2 rounded-sm hover:bg-gray-300 hover:text-black transition-colors">
        <i className="fa fa-comment"></i> &nbsp;Comment
      </button>
    </div>
  );
}