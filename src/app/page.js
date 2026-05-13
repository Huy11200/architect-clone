'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', comment: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu gửi đi:", formData);
    alert(`Chào ${formData.name}! Tin nhắn của bạn đã được gửi thành công.`);
    setFormData({ name: '', email: '', subject: '', comment: '' });
  };

  return (
    <div className="min-h-screen bg-[#222222] text-white font-sans">
      <Navbar />

      {/* Header Image Section */}
      <header className="relative w-full mt-[60px]">
        <img 
          src="https://www.w3schools.com/w3images/architect.jpg" 
          alt="Architect" 
          className="w-full h-[500px] object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-5xl md:text-6xl tracking-[8px] text-white font-light">
            <span className="bg-black/70 px-8 py-3 font-normal">BR</span> 
            <span className="ml-6">ARCHITECTS</span>
          </h1>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 py-12">
        
        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-4xl font-light tracking-wide mb-2">PROJECTS</h2>
          <div className="h-1 w-16 bg-[#555555] mb-8"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { title: 'Summer House', img: 'https://www.w3schools.com/w3images/house5.jpg' },
              { title: 'Brick House', img: 'https://www.w3schools.com/w3images/house2.jpg' },
              { title: 'Renovated', img: 'https://www.w3schools.com/w3images/house3.jpg' },
              { title: 'Barn House', img: 'https://www.w3schools.com/w3images/house4.jpg' }
            ].map((project, index) => (
              <div 
                key={index} 
                className="w3-card shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden h-[250px]">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-4 bg-[#333333]">
                  <h4 className="text-lg font-normal tracking-wide">{project.title}</h4>
                  <p className="text-sm text-[#aaaaaa] mt-2">Residential Building</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-4xl font-light tracking-wide mb-2">ABOUT</h2>
          <div className="h-1 w-16 bg-[#555555] mb-8"></div>
          
          <p className="text-base leading-relaxed text-[#cccccc] mb-12 max-w-3xl">
            Chúng tôi là công ty kiến trúc hàng đầu, chuyên cung cấp những giải pháp thiết kế hiện đại, tinh tế và tối giản. Với đội ngũ giàu kinh nghiệm, BR Architects cam kết mang lại không gian sống đẳng cấp nhất cho mỗi dự án.
          </p>

          <h3 className="text-2xl font-light tracking-wide mb-6">OUR TEAM</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'John Doe', role: 'CEO & Founder', img: 'avatar2.png' },
              { name: 'Jane Doe', role: 'Architect', img: 'avatar5.png' },
              { name: 'Mike Ross', role: 'Architect', img: 'avatar3.png' },
              { name: 'Dan Star', role: 'Architect', img: 'avatar6.png' }
            ].map((member, index) => (
              <div key={index} className="w3-card shadow-lg">
                <img 
                  src={`https://www.w3schools.com/w3images/${member.img}`} 
                  alt={member.name}
                  className="w-full h-[250px] object-cover grayscale hover:grayscale-0 transition duration-500"
                />
                <div className="p-4 bg-[#333333]">
                  <h4 className="text-lg font-normal">{member.name}</h4>
                  <p className="text-sm text-[#aaaaaa] mt-1">{member.role}</p>
                  <p className="text-xs text-[#999999] mt-3 leading-relaxed">Phasellus eget enim eu lectus faucibus vestibulum.</p>
                  <button className="w-full mt-4 bg-[#404040] text-white py-2 px-3 hover:bg-[#555555] transition text-sm font-normal tracking-wide">
                    Contact
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <h2 className="text-4xl font-light tracking-wide mb-2">CONTACT</h2>
          <div className="h-1 w-16 bg-[#555555] mb-8"></div>
          
          <p className="text-base text-[#cccccc] mb-8">
            Hãy liên hệ với chúng tôi để bắt đầu dự án của bạn.
          </p>
          
          <form onSubmit={handleSubmit} className="w-full max-w-2xl">
            <input 
              className="w-full bg-[#404040] border border-[#555555] text-white p-4 mb-4 focus:border-[#888888] focus:outline-none transition" 
              type="text" 
              name="name" 
              placeholder="Name" 
              required 
              value={formData.name} 
              onChange={handleChange} 
            />
            <input 
              className="w-full bg-[#404040] border border-[#555555] text-white p-4 mb-4 focus:border-[#888888] focus:outline-none transition" 
              type="email" 
              name="email" 
              placeholder="Email" 
              required 
              value={formData.email} 
              onChange={handleChange} 
            />
            <input 
              className="w-full bg-[#404040] border border-[#555555] text-white p-4 mb-4 focus:border-[#888888] focus:outline-none transition" 
              type="text" 
              name="subject" 
              placeholder="Subject" 
              value={formData.subject} 
              onChange={handleChange} 
            />
            <textarea 
              className="w-full bg-[#404040] border border-[#555555] text-white p-4 mb-6 h-40 focus:border-[#888888] focus:outline-none transition resize-none" 
              name="comment" 
              placeholder="Message" 
              value={formData.comment} 
              onChange={handleChange}
            ></textarea>
            <button 
              type="submit" 
              className="bg-[#404040] text-white py-3 px-8 hover:bg-[#555555] transition border border-[#555555] font-normal tracking-wide text-sm"
            >
              SEND MESSAGE
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#000000] text-white text-center py-8 mt-16 border-t border-[#555555]">
        <p className="text-sm text-[#aaaaaa]">Powered by <a href="#" className="text-[#b3d9ff] hover:text-white">w3.css</a></p>
        <p className="text-xs text-[#999999] mt-2">© 2026 BR Architects. All rights reserved.</p>
      </footer>
    </div>
  );
}