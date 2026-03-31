export default function ProfileCardSocial() {
  return (
    <div className="bg-white shadow-sm rounded-sm">
      <div className="p-4 text-center">
        <h4 className="text-xl pb-2">My Profile</h4>
        <img src="https://www.w3schools.com/w3images/avatar3.png" className="w-[106px] h-[106px] rounded-full mx-auto mb-4" alt="Avatar" />
        <hr className="border-gray-200" />
        <div className="text-left mt-4 text-gray-600 space-y-2">
          <p><i className="fa fa-pencil text-[#4d636f] mr-4"></i> Designer, UI</p>
          <p><i className="fa fa-home text-[#4d636f] mr-4"></i> London, UK</p>
          <p><i className="fa fa-birthday-cake text-[#4d636f] mr-4"></i> April 1, 1988</p>
        </div>
      </div>
    </div>
  );
}