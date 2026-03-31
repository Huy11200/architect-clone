export default function PostInput() {
  return (
    <div className="bg-white shadow-sm rounded-sm p-4 text-gray-500">
      <h6 className="mb-4 text-sm font-medium">Social Media template by w3.css</h6>
      <input type="text" placeholder="Status: Feeling Blue" className="w-full border p-2 mb-4 focus:outline-none focus:border-gray-400" />
      <button className="bg-[#4d636f] text-white px-4 py-2 rounded-sm hover:bg-gray-300 hover:text-black transition-colors">
        <i className="fa fa-pencil"></i> &nbsp;Post
      </button>
    </div>
  );
}