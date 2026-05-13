'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const portfolioItems = [
    { id: 1, title: 'Project Alpha', category: 'DESIGN', img: 'https://www.w3schools.com/w3images/house2.jpg' },
    { id: 2, title: 'Project Beta', category: 'PHOTOGRAPHY', img: 'https://www.w3schools.com/w3images/house3.jpg' },
    { id: 3, title: 'Project Gamma', category: 'DESIGN', img: 'https://www.w3schools.com/w3images/house4.jpg' },
    { id: 4, title: 'Project Delta', category: 'PHOTOGRAPHY', img: 'https://www.w3schools.com/w3images/house5.jpg' },
    { id: 5, title: 'Project Epsilon', category: 'DESIGN', img: 'https://www.w3schools.com/w3images/house2.jpg' },
    { id: 6, title: 'Project Zeta', category: 'PRINT', img: 'https://www.w3schools.com/w3images/house3.jpg' },
  ];

  const filteredItems = activeFilter === 'ALL' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const skills = [
    { name: 'Photography', percent: 95 },
    { name: 'Web Design', percent: 85 },
    { name: 'Graphic Design', percent: 80 },
    { name: 'UI/UX', percent: 88 },
  ];

  const packages = [
    { name: 'Basic', price: 10, features: ['1GB Storage', 'Email Support', 'Basic Analytics'] },
    { name: 'Pro', price: 25, features: ['50GB Storage', 'Priority Support', 'Advanced Analytics'], highlight: true },
    { name: 'Premium', price: 50, features: ['Unlimited Storage', '24/7 Support', 'Full Analytics'] },
  ];

  return (
    <div className="bg-[#222222] min-h-screen text-white font-sans">
      <Navbar />

      <main className="max-w-[1200px] mx-auto pt-[80px] pb-10 px-6">

        {/* Portfolio Section */}
        <section id="portfolio" className="mb-20">
          <h2 className="text-4xl font-light tracking-[8px] mb-2">PORTFOLIO</h2>
          <div className="h-1 w-16 bg-[#555555] mb-10"></div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            {['ALL', 'DESIGN', 'PHOTOGRAPHY', 'PRINT'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 text-sm uppercase tracking-wide font-normal transition ${
                  activeFilter === filter
                    ? 'bg-white text-black'
                    : 'bg-[#404040] text-white hover:bg-[#555555]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="w3-card shadow-lg overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden h-[250px]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-300 flex items-center justify-center">
                    <p className="text-white text-center text-sm font-normal opacity-0 group-hover:opacity-100 transition">{item.category}</p>
                  </div>
                </div>
                <div className="p-4 bg-[#333333]">
                  <h4 className="text-lg font-normal">{item.title}</h4>
                  <p className="text-xs text-[#aaaaaa] mt-1">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-4xl font-light tracking-[8px] mb-2">ABOUT</h2>
          <div className="h-1 w-16 bg-[#555555] mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* About Text */}
            <div>
              <p className="text-base text-[#cccccc] leading-relaxed mb-6">
                I am a passionate creative professional with over 10 years of experience in design and photography. My work focuses on creating meaningful visual experiences that connect with audiences.
              </p>
              <p className="text-base text-[#cccccc] leading-relaxed">
                I specialize in modern design principles, innovative photography, and comprehensive branding solutions. Let me help bring your vision to life.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-light tracking-wide mb-6">TECHNICAL SKILLS</h3>
              {skills.map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <p className="text-sm font-normal text-[#cccccc]">{skill.name}</p>
                    <p className="text-sm text-[#aaaaaa]">{skill.percent}%</p>
                  </div>
                  <div className="w-full bg-[#404040] h-2 rounded overflow-hidden">
                    <div 
                      className="bg-[#555555] h-full transition-all"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-light tracking-[8px] mb-2">PRICING</h2>
          <div className="h-1 w-16 bg-[#555555] mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`w3-card shadow-lg overflow-hidden transition transform ${pkg.highlight ? 'md:scale-105' : ''}`}
              >
                <div className={`${pkg.highlight ? 'bg-white text-black' : 'bg-[#404040] text-white'} p-6 text-center`}>
                  <h4 className="text-2xl font-normal mb-2">{pkg.name}</h4>
                  <p className="text-3xl font-light">${pkg.price}</p>
                  <p className="text-xs mt-2 opacity-75">/month</p>
                </div>
                <div className="bg-[#333333] p-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-sm text-[#cccccc] flex items-start">
                        <span className="mr-3">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full mt-6 py-2 px-4 text-sm font-normal uppercase tracking-wide transition ${
                    pkg.highlight 
                      ? 'bg-white text-black hover:bg-[#cccccc]' 
                      : 'bg-[#404040] text-white hover:bg-[#555555]'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <h2 className="text-4xl font-light tracking-[8px] mb-2">CONTACT</h2>
          <div className="h-1 w-16 bg-[#555555] mb-10"></div>

          <div className="max-w-2xl">
            <p className="text-base text-[#cccccc] mb-8">
              I'd love to hear from you. Feel free to reach out with any inquiries or collaboration opportunities.
            </p>

            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-[#404040] border border-[#555555] text-white p-4 focus:border-[#888888] focus:outline-none transition"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-[#404040] border border-[#555555] text-white p-4 focus:border-[#888888] focus:outline-none transition"
              />
              <textarea 
                placeholder="Your Message" 
                rows="6"
                className="w-full bg-[#404040] border border-[#555555] text-white p-4 focus:border-[#888888] focus:outline-none transition resize-none"
              ></textarea>
              <button 
                type="submit"
                className="bg-white text-black py-3 px-8 font-normal uppercase tracking-wide text-sm hover:bg-[#cccccc] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-8 border-t border-[#555555]">
        <p className="text-sm text-[#aaaaaa]">Powered by <a href="#" className="text-[#b3d9ff] hover:text-white">w3.css</a></p>
        <p className="text-xs text-[#999999] mt-2">© 2026 Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
    setIsSignUpModalOpen(true);
  };

  const handleSignUpSubmit = (e) => {
  e.preventDefault();
  setIsSignUpModalOpen(false);
  setIsSignUpSuccess(true);
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
                <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
  
  {/* IMAGE + OVERLAY */}
  <div className="relative group">
    <img 
      src={item.image} 
      alt={item.title} 
      className="w-full h-[200px] object-cover transition duration-500 group-hover:scale-110"
    />

    {/* TAG góc trên */}
    <span className={`
      absolute top-3 left-3 text-xs px-2 py-1 rounded text-white shadow
      ${item.category === 'Design' ? 'bg-blue-500' : ''}
      ${item.category === 'Photos' ? 'bg-green-500' : ''}
      ${item.category === 'Art' ? 'bg-pink-500' : ''}
    `}>
      {item.category}
    </span>

    {/* OVERLAY nhẹ */}
    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
  </div>

  {/* CONTENT (LUÔN HIỂN THỊ) */}
  <div className="p-4">
    <h3 className="font-bold text-lg">{item.title}</h3>
    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
      {item.desc}
    </p>
  </div>
</div>
              ))
            ) : (
              <p className="text-gray-500 italic col-span-3">Loading...</p>
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
      {isSignUpSuccess && (
  <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
    <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-2xl">
      
      <div className="text-center mb-6">
        <i className="fa fa-check-circle text-5xl text-green-500 mb-4"></i>
        <h2 className="text-2xl font-bold text-gray-800">
          Đăng ký thành công!
        </h2>
        <p className="text-gray-500 mt-2">
          Bạn đã đăng ký gói: 
          <strong className="text-black"> {selectedPackage?.name}</strong>
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Email: {signUpEmail}
        </p>
      </div>

      <button
        onClick={() => {
          setIsSignUpSuccess(false);
          setSignUpEmail('');
        }}
        className="w-full py-3 bg-black text-white hover:bg-gray-800 transition-colors rounded font-semibold"
      >
        Đóng
      </button>

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
