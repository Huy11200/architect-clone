'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';

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
    <div className="min-h-screen bg-white text-black font-sans">
      <Navbar />

      {/* Header Image Section */}
      <header className="relative w-full mt-12">
        <img 
          src="https://www.w3schools.com/w3images/architect.jpg" 
          alt="Architect" 
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl tracking-[6px] text-white">
            <span className="bg-black/80 px-6 py-2 font-bold">BR</span> 
            <span className="ml-4 drop-shadow-lg hidden sm:inline-block">Architects</span>
          </h1>
        </div>
      </header>

      <main className="max-w-[1564px] mx-auto px-4">
        
        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h3 className="text-2xl font-semibold border-b border-gray-200 pb-4 mb-8">Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <ProjectCard title="Summer House" imgSrc="https://www.w3schools.com/w3images/house5.jpg" />
            <ProjectCard title="Brick House" imgSrc="https://www.w3schools.com/w3images/house2.jpg" />
            <ProjectCard title="Renovated" imgSrc="https://www.w3schools.com/w3images/house3.jpg" />
            <ProjectCard title="Barn House" imgSrc="https://www.w3schools.com/w3images/house4.jpg" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <h3 className="text-2xl font-semibold border-b border-gray-200 pb-4 mb-6">About</h3>
          <p className="mb-8 text-gray-700 leading-relaxed">
            Chúng tôi là công ty kiến trúc hàng đầu, chuyên cung cấp những giải pháp thiết kế hiện đại, tinh tế và tối giản. Với đội ngũ giàu kinh nghiệm, BR Architects cam kết mang lại không gian sống đẳng cấp nhất.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'John Doe', role: 'CEO & Founder', img: 'team2.jpg' },
              { name: 'Jane Doe', role: 'Architect', img: 'team1.jpg' },
              { name: 'Mike Ross', role: 'Architect', img: 'team3.jpg' },
              { name: 'Dan Star', role: 'Architect', img: 'team4.jpg' }
            ].map((member, index) => (
              <div key={index} className="flex flex-col">
                <img src={`https://www.w3schools.com/w3images/${member.img}`} alt={member.name} className="w-full grayscale hover:grayscale-0 transition duration-500" />
                <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                <p className="text-gray-500 mb-4">{member.role}</p>
                <p className="text-sm mb-4">Phasellus eget enim eu lectus faucibus vestibulum.</p>
                <button className="w-full bg-gray-100 py-2 hover:bg-gray-300 transition-colors">Contact</button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section - INTERACTION PART */}
        <section id="contact" className="py-16">
          <h3 className="text-2xl font-semibold border-b border-gray-200 pb-4 mb-6">Contact</h3>
          <p className="mb-6 text-gray-600">Hãy liên hệ với chúng tôi để bắt đầu dự án của bạn.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input 
              className="w-full border border-gray-300 p-3 outline-none focus:border-black transition" 
              type="text" name="name" placeholder="Name" required 
              value={formData.name} onChange={handleChange} 
            />
            <input 
              className="w-full border border-gray-300 p-3 outline-none focus:border-black transition" 
              type="email" name="email" placeholder="Email" required 
              value={formData.email} onChange={handleChange} 
            />
            <input 
              className="w-full border border-gray-300 p-3 outline-none focus:border-black transition" 
              type="text" name="subject" placeholder="Subject" 
              value={formData.subject} onChange={handleChange} 
            />
            <textarea 
              className="w-full border border-gray-300 p-3 outline-none focus:border-black transition h-32" 
              name="comment" placeholder="Comment" 
              value={formData.comment} onChange={handleChange}
            ></textarea>
            <button 
              type="submit" 
              className="w-full md:w-40 bg-black text-white py-3 px-6 hover:bg-gray-800 transition-all uppercase tracking-widest text-sm"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-10 mt-16">
        <p className="text-sm opacity-70">© 2026 BR Architects. Powered by Next.js & Tailwind</p>
      </footer>
    </div>
  );
}