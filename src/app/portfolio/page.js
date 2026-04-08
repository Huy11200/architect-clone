'use client';

import { useState } from 'react';

export default function PortfolioPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // =====================================================================
  // 1 & 2. LOGIC: DỮ LIỆU PORTFOLIO, LỌC VÀ PHÂN TRANG
  // =====================================================================
  const initialPortfolio = [
    { id: 1, category: 'Design', title: 'Lorem Ipsum', desc: 'Praesent tincidunt sed tellus ut rutrum.', image: 'https://www.w3schools.com/w3images/mountains.jpg' },
    { id: 2, category: 'Photos', title: 'Lorem Ipsum', desc: 'Praesent tincidunt sed tellus ut rutrum.', image: 'https://www.w3schools.com/w3images/lights.jpg' },
    { id: 3, category: 'Art', title: 'Lorem Ipsum', desc: 'Praesent tincidunt sed tellus ut rutrum.', image: 'https://www.w3schools.com/w3images/nature.jpg' },
    { id: 4, category: 'Design', title: 'Lorem Ipsum 2', desc: 'Sed vitae justo condimentum.', image: 'https://www.w3schools.com/w3images/p1.jpg' },
    { id: 5, category: 'Photos', title: 'Lorem Ipsum 2', desc: 'Sed vitae justo condimentum.', image: 'https://www.w3schools.com/w3images/p2.jpg' },
    { id: 6, category: 'Art', title: 'Lorem Ipsum 2', desc: 'Sed vitae justo condimentum.', image: 'https://www.w3schools.com/w3images/p3.jpg' },
  ];

  const [activeFilter, setActiveFilter] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredItems = activeFilter === 'ALL' 
    ? initialPortfolio 
    : initialPortfolio.filter(item => item.category === activeFilter);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset về trang 1 khi lọc
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // =====================================================================
  // 3. LOGIC: TECHNICAL SKILLS RANDOMIZE
  // =====================================================================
  const [skills, setSkills] = useState([
    { id: 1, name: 'Photography', percent: 95 },
    { id: 2, name: 'Web Design', percent: 85 },
    { id: 3, name: 'Photoshop', percent: 80 },
  ]);

  const randomizeSkills = () => {
    setSkills(skills.map(skill => ({
      ...skill,
      percent: Math.floor(Math.random() * 101) // Random 0 - 100
    })));
  };

  // =====================================================================
  // 4. LOGIC: BẢNG GIÁ & MODAL SIGN UP
  // =====================================================================
  const packages = [
    { id: 'basic', name: 'Basic', price: 10, storage: '1GB', support: 'Mail Support', headerColor: 'bg-black' },
    { id: 'pro', name: 'Pro', price: 25, storage: '50GB', support: 'Endless Support', headerColor: 'bg-[#009688]' },
    { id: 'premium', name: 'Premium', price: 25, storage: 'Unlimited', support: 'Endless Support', headerColor: 'bg-[#616161]' },
  ];
  
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [signUpEmail, setSignUpEmail] = useState('');

  const handleSignUpClick = (pkg) => {
    setSelectedPackage(pkg);
    setIsSignUpModalOpen(true);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    alert('Cám ơn bạn đã đăng kí dịch vụ.');
    setIsSignUpModalOpen(false);
    setSignUpEmail('');
  };

  // =====================================================================
  // 5. LOGIC: FORM LIÊN HỆ & MODAL HIỂN THỊ
  // =====================================================================
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsContactModalOpen(true);
  };

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen relative">
      
      {/* ================= SIDEBAR GIAO DIỆN CHUẨN ================= */}
      <nav className={`fixed top-0 left-0 h-full bg-white w-[300px] z-20 flex flex-col justify-between transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-8">
          <img src="https://www.w3schools.com/w3images/avatar_g.jpg" alt="Avatar" className="w-[45%] rounded mb-4" />
          <h4 className="text-2xl font-bold mb-2">PORTFOLIO</h4>
          <p className="text-gray-500 mb-8 text-sm">Template by W3.CSS</p>
          
          <ul className="space-y-4 font-semibold text-[15px]">
            <li>
              <button onClick={() => scrollToSection('portfolio')} className="text-[#009688] hover:text-black transition-colors flex items-center w-full text-left">
                <i className="fa fa-th-large mr-4 w-4 text-center"></i> PORTFOLIO
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-black transition-colors flex items-center w-full text-left">
                <i className="fa fa-user mr-4 w-4 text-center"></i> ABOUT
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-black transition-colors flex items-center w-full text-left">
                <i className="fa fa-envelope mr-4 w-4 text-center"></i> CONTACT
              </button>
            </li>
          </ul>
        </div>
        
        <div className="p-8 flex gap-3 text-xl text-gray-600">
          <i className="fa fa-facebook-official hover:opacity-75 cursor-pointer"></i>
          <i className="fa fa-instagram hover:opacity-75 cursor-pointer"></i>
          <i className="fa fa-snapchat hover:opacity-75 cursor-pointer"></i>
          <i className="fa fa-pinterest-p hover:opacity-75 cursor-pointer"></i>
          <i className="fa fa-twitter hover:opacity-75 cursor-pointer"></i>
          <i className="fa fa-linkedin hover:opacity-75 cursor-pointer"></i>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      {/* ================= NỘI DUNG CHÍNH ================= */}
      <main className="md:ml-[300px] w-full max-w-[960px] mx-auto bg-white">
        
        {/* --- PHẦN 1: PORTFOLIO --- */}
        <section id="portfolio" className="p-4 md:p-8">
          <header className="mb-8">
            <span className="md:hidden text-2xl cursor-pointer mr-4" onClick={() => setIsMobileMenuOpen(true)}>
              <i className="fa fa-bars"></i>
            </span>
            <img src="https://www.w3schools.com/w3images/avatar_g.jpg" alt="Avatar" className="w-[65px] rounded-full md:hidden inline-block" />
            
            <h1 className="text-4xl font-bold mt-8 mb-8">My Portfolio</h1>
            
            <div className="flex flex-wrap gap-4 border-b pb-4 text-sm font-semibold text-gray-600 items-center">
              <span className="text-black bg-white mr-2">Filter:</span>
              <button onClick={() => handleFilterClick('ALL')} className={`px-4 py-1 rounded transition-colors ${activeFilter === 'ALL' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}>ALL</button>
              <button onClick={() => handleFilterClick('Design')} className={`px-4 py-1 rounded transition-colors ${activeFilter === 'Design' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}><i className="fa fa-diamond mr-2"></i>Design</button>
              <button onClick={() => handleFilterClick('Photos')} className={`px-4 py-1 rounded transition-colors ${activeFilter === 'Photos' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}><i className="fa fa-photo mr-2"></i>Photos</button>
              <button onClick={() => handleFilterClick('Art')} className={`px-4 py-1 rounded transition-colors ${activeFilter === 'Art' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}><i className="fa fa-map-pin mr-2"></i>Art</button>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {currentItems.length > 0 ? (
              currentItems.map(item => (
                <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
  
  {/* IMAGE */}
  <img 
    src={item.image} 
    alt={item.title} 
    className="w-full h-[200px] object-cover transform group-hover:scale-110 transition duration-500"
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
    
    {/* TAG */}
    <span className={`
      text-xs px-2 py-1 rounded w-fit mb-2 text-white
      ${item.category === 'Design' ? 'bg-blue-500' : ''}
      ${item.category === 'Photos' ? 'bg-green-500' : ''}
      ${item.category === 'Art' ? 'bg-pink-500' : ''}
    `}>
      {item.category}
    </span>

    {/* TITLE */}
    <h3 className="text-white font-bold text-lg leading-tight">
      {item.title}
    </h3>

    {/* DESC */}
    <p className="text-gray-200 text-sm mt-1 line-clamp-2">
      {item.desc}
    </p>
  </div>
</div>
              ))
            ) : (
              <p className="text-gray-500 italic col-span-3">Không có dự án nào.</p>
            )}
          </div>

          <div className="flex justify-center mb-16">
            <div className="flex text-gray-700 gap-1">
              <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} className="px-4 py-2 hover:bg-black hover:text-white transition-colors">«</button>
              {Array.from({ length: totalPages }).map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 transition-colors ${currentPage === index + 1 ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
                >
                  {index + 1}
                </button>
              ))}
              <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} className="px-4 py-2 hover:bg-black hover:text-white transition-colors">»</button>
            </div>
          </div>
        </section>

        {/* --- PHẦN 2: ABOUT --- */}
        <section id="about" className="p-4 md:p-8">
          <h4 className="text-2xl font-bold mb-4">About Me</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <img src="https://www.w3schools.com/w3images/avatar_g.jpg" alt="Me" className="w-full" />
            <img src="https://www.w3schools.com/w3images/me2.jpg" alt="Me" className="w-full" />
          </div>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
          </p>

          <h4 className="text-xl font-bold mb-4">Technical Skills</h4>
          
          {skills.map(skill => (
            <div key={skill.id} className="mb-4">
              <p className="mb-1 text-gray-600 tracking-wide uppercase text-sm">{skill.name}</p>
              <div className="bg-gray-200 h-8 rounded-sm">
                <div 
                  className="bg-gray-600 h-8 text-center text-white text-sm flex items-center justify-center transition-all duration-500 ease-in-out" 
                  style={{ width: `${skill.percent}%` }}
                >
                  {skill.percent}%
                </div>
              </div>
            </div>
          ))}
          
          <button 
            onClick={randomizeSkills} 
            className="bg-gray-800 text-white px-6 py-3 hover:bg-gray-300 hover:text-black transition-colors mb-12 flex items-center gap-2 mt-8"
          >
            <i className="fa fa-download"></i> Download Resume
          </button>

          <h4 className="text-xl font-bold mb-6">How much I charge</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {packages.map(pkg => (
              <ul 
                key={pkg.id} 
                className={`text-center bg-white border hover:shadow-lg transition-all ${selectedPackage?.id === pkg.id ? 'bg-green-50 border-green-500 transform scale-105 shadow-md' : ''}`}
              >
                <li className={`${pkg.headerColor} text-white text-xl py-6`}>{pkg.name}</li>
                <li className="py-4 border-b text-gray-600">Web Design</li>
                <li className="py-4 border-b text-gray-600">Photography</li>
                <li className="py-4 border-b text-gray-600">{pkg.storage} Storage</li>
                <li className="py-4 border-b text-gray-600">{pkg.support}</li>
                <li className="py-6 border-b">
                  <h2 className="text-3xl text-black mb-1">$ {pkg.price}</h2>
                  <span className="text-gray-500 text-sm">per month</span>
                </li>
                <li className="py-6 bg-gray-100">
                  <button 
                    onClick={() => handleSignUpClick(pkg)}
                    className="bg-[#009688] text-white px-6 py-3 hover:bg-black transition-colors"
                  >
                    Sign Up
                  </button>
                </li>
              </ul>
            ))}
          </div>
        </section>

        {/* --- PHẦN 3: CONTACT & FOOTER --- */}
        <section id="contact" className="bg-[#9e9e9e] text-black">
          <div className="p-4 md:p-8">
            <h4 className="text-2xl font-bold mb-4 text-white">Contact Me</h4>
            <div className="bg-white p-6 md:p-8 shadow-sm">
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input type="text" name="name" value={contactForm.name} onChange={handleContactChange} required className="w-full border border-gray-300 p-3 focus:outline-none focus:border-gray-500" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input type="email" name="email" value={contactForm.email} onChange={handleContactChange} required className="w-full border border-gray-300 p-3 focus:outline-none focus:border-gray-500" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <input type="text" name="message" value={contactForm.message} onChange={handleContactChange} required className="w-full border border-gray-300 p-3 focus:outline-none focus:border-gray-500" />
                </div>
                <button type="submit" className="bg-black text-white px-6 py-3 hover:bg-gray-300 hover:text-black transition-colors flex items-center gap-2">
                  <i className="fa fa-paper-plane"></i> Send Message
                </button>
              </form>
            </div>
          </div>

          <footer className="bg-[#616161] text-white p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl mb-4 uppercase tracking-widest font-semibold">Footer</h4>
                <p className="text-sm mb-4 leading-relaxed">Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                <p className="text-sm">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" className="underline hover:text-white transition-colors">w3.css</a></p>
              </div>
              <div>
                <h4 className="text-xl mb-4 uppercase tracking-widest font-semibold">Blog Posts</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 hover:bg-[#757575] p-2 transition-colors cursor-pointer border-b border-gray-500 pb-4">
                    <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="Blog" className="w-12 h-12" />
                    <div><span className="block text-lg font-semibold">Lorem</span><span className="text-sm">Sed mattis nunc</span></div>
                  </li>
                  <li className="flex items-center gap-4 hover:bg-[#757575] p-2 transition-colors cursor-pointer">
                    <img src="https://www.w3schools.com/w3images/gondol.jpg" alt="Blog" className="w-12 h-12" />
                    <div><span className="block text-lg font-semibold">Ipsum</span><span className="text-sm">Praes tinci sed</span></div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl mb-4 uppercase tracking-widest font-semibold">Popular Tags</h4>
                <div className="flex flex-wrap gap-2 text-[13px]">
                  <span className="bg-black text-white px-3 py-1">Travel</span>
                  <span className="bg-[#757575] hover:bg-gray-300 hover:text-black transition-colors cursor-pointer px-3 py-1">New York</span>
                  <span className="bg-[#757575] hover:bg-gray-300 hover:text-black transition-colors cursor-pointer px-3 py-1">London</span>
                  <span className="bg-[#757575] hover:bg-gray-300 hover:text-black transition-colors cursor-pointer px-3 py-1">IKEA</span>
                  <span className="bg-[#757575] hover:bg-gray-300 hover:text-black transition-colors cursor-pointer px-3 py-1">NORWAY</span>
                  <span className="bg-[#757575] hover:bg-gray-300 hover:text-black transition-colors cursor-pointer px-3 py-1">DIY</span>
                  <span className="bg-[#757575] hover:bg-gray-300 hover:text-black transition-colors cursor-pointer px-3 py-1">Ideas</span>
                  <span className="bg-[#757575] hover:bg-gray-300 hover:text-black transition-colors cursor-pointer px-3 py-1">Baby</span>
                  <span className="bg-[#757575] hover:bg-gray-300 hover:text-black transition-colors cursor-pointer px-3 py-1">Family</span>
                </div>
              </div>
            </div>
          </footer>

          <div className="bg-black text-white text-center py-6 text-sm">
            Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" className="underline hover:text-gray-300 transition-colors">w3.css</a>
          </div>
        </section>

      </main>

      {/* ================= MODAL ĐĂNG KÝ GÓI CƯỚC ================= */}
      {isSignUpModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-2xl">
            <h2 className="text-2xl font-bold mb-2">Đăng ký gói dịch vụ</h2>
            <p className="text-gray-600 mb-6">Bạn đang chọn gói: <strong className="text-black uppercase">{selectedPackage?.name}</strong></p>
            <form onSubmit={handleSignUpSubmit}>
              <label className="block text-sm font-semibold mb-2">Vui lòng để lại email của bạn:</label>
              <input 
                type="email" 
                required 
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
                className="w-full border border-gray-300 p-3 mb-6 focus:outline-none focus:border-black" 
                placeholder="Ví dụ: email@gmail.com"
              />
              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setIsSignUpModalOpen(false)} className="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 transition-colors rounded">Hủy</button>
                <button type="submit" className="px-5 py-2.5 bg-[#009688] text-white hover:bg-black transition-colors rounded">Xác nhận</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL THÔNG BÁO LIÊN HỆ ================= */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-2xl">
            <div className="text-center mb-6">
              <i className="fa fa-check-circle text-5xl text-green-500 mb-4"></i>
              <h2 className="text-2xl font-bold text-gray-800">Đã gửi tin nhắn!</h2>
              <p className="text-gray-500 mt-2">Thông tin bạn vừa nhập:</p>
            </div>
            <div className="bg-gray-50 p-4 rounded mb-6 text-sm">
              <p className="mb-2 border-b pb-2"><strong className="w-20 inline-block text-gray-600">Tên:</strong> {contactForm.name}</p>
              <p className="mb-2 border-b pb-2"><strong className="w-20 inline-block text-gray-600">Email:</strong> {contactForm.email}</p>
              <p className="pt-1"><strong className="w-20 inline-block text-gray-600">Nội dung:</strong> {contactForm.message}</p>
            </div>
            <button 
              onClick={() => {
                setIsContactModalOpen(false);
                setContactForm({ name: '', email: '', message: '' }); // Reset form sau khi đóng modal
              }} 
              className="w-full py-3 bg-black text-white hover:bg-gray-800 transition-colors rounded font-semibold"
            >
              Đóng cửa sổ
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
