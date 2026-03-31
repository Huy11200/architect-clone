export default function LeftSidebarExtras() {
  return (
    <>
      {/* Accordion Menu */}
      <div className="bg-white shadow-sm rounded-sm text-gray-700">
        <button className="w-full text-left p-4 hover:bg-gray-200 transition-colors border-b flex items-center">
          <i className="fa fa-circle-o-notch fa-fw text-[#4d636f] mr-3"></i> My Groups
        </button>
        <button className="w-full text-left p-4 hover:bg-gray-200 transition-colors border-b flex items-center">
          <i className="fa fa-calendar-check-o fa-fw text-[#4d636f] mr-3"></i> My Events
        </button>
        <button className="w-full text-left p-4 hover:bg-gray-200 transition-colors flex items-center">
          <i className="fa fa-users fa-fw text-[#4d636f] mr-3"></i> My Photos
        </button>
      </div>

      {/* Interests Box */}
      <div className="bg-white shadow-sm rounded-sm p-4 hidden md:block">
        <p className="mb-2 text-gray-700">Interests</p>
        <div className="flex flex-wrap gap-1 text-xs">
          <span className="bg-[#4d636f] text-white px-2 py-1 rounded-sm">News</span>
          <span className="bg-gray-200 px-2 py-1 rounded-sm text-gray-700">W3Schools</span>
          <span className="bg-gray-200 px-2 py-1 rounded-sm text-gray-700">Labels</span>
          <span className="bg-gray-200 px-2 py-1 rounded-sm text-gray-700">Games</span>
          <span className="bg-gray-200 px-2 py-1 rounded-sm text-gray-700">Friends</span>
          <span className="bg-gray-200 px-2 py-1 rounded-sm text-gray-700">Food</span>
          <span className="bg-gray-200 px-2 py-1 rounded-sm text-gray-700">Design</span>
        </div>
      </div>

      {/* Alert Box */}
      <div className="bg-[#dfebd0] text-[#4d636f] px-4 py-4 rounded-sm shadow-sm relative md:flex items-center justify-between hidden">
        <span><strong>Hey!</strong><br />People are looking at your profile. Find out who.</span>
        <button 
          className="hover:text-black absolute top-2 right-2"
          onClick={(e) => e.currentTarget.parentElement.style.display = 'none'}
        >
          <i className="fa fa-remove">✖</i>
        </button>
      </div>
    </>
  );
}