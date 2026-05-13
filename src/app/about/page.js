'use client';
import React from 'react';
import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <div className="bg-[#222222] min-h-screen text-white font-sans">
      <Navbar />

      <main className="max-w-[1200px] mx-auto pt-[80px] pb-10 px-6">
        
        {/* Header Section */}
        <section className="mb-16">
          <h1 className="text-5xl font-light tracking-[8px] mb-2">ABOUT</h1>
          <div className="h-1 w-16 bg-[#555555] mb-8"></div>
          <p className="text-base text-[#cccccc] leading-relaxed max-w-3xl">
            Chúng tôi là công ty kiến trúc hàng đầu, chuyên cung cấp những giải pháp thiết kế hiện đại, tinh tế và tối giản. Với đội ngũ giàu kinh nghiệm, BR Architects cam kết mang lại không gian sống đẳng cấp nhất cho mỗi dự án.
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light tracking-wide mb-2">OUR EXPERIENCED TEAM</h2>
          <div className="h-1 w-16 bg-[#555555] mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'John Doe', role: 'CEO & Founder', img: 'avatar2.png', desc: 'Visionary leader with 20+ years in architecture' },
              { name: 'Jane Doe', role: 'Architect', img: 'avatar5.png', desc: 'Modern design specialist with award-winning portfolio' },
              { name: 'Mike Ross', role: 'Architect', img: 'avatar3.png', desc: 'Sustainable architecture expert' },
              { name: 'Dan Star', role: 'Architect', img: 'avatar6.png', desc: 'Interior design and renovation specialist' }
            ].map((member, index) => (
              <div key={index} className="w3-card shadow-lg overflow-hidden">
                <img 
                  src={`https://www.w3schools.com/w3images/${member.img}`} 
                  alt={member.name}
                  className="w-full h-[280px] object-cover grayscale hover:grayscale-0 transition duration-500"
                />
                <div className="p-4 bg-[#333333]">
                  <h4 className="text-lg font-normal">{member.name}</h4>
                  <p className="text-sm text-[#aaaaaa]">{member.role}</p>
                  <p className="text-xs text-[#999999] mt-3 leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light tracking-wide mb-2">OUR SERVICES</h2>
          <div className="h-1 w-16 bg-[#555555] mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Residential Design', desc: 'Creating beautiful and functional living spaces for families' },
              { title: 'Commercial Design', desc: 'Innovative designs for offices, retail, and hospitality' },
              { title: 'Renovation', desc: 'Transforming existing spaces with modern aesthetics' },
              { title: 'Urban Planning', desc: 'Large-scale projects for city development' },
              { title: 'Interior Design', desc: 'Complete interior solutions tailored to your needs' },
              { title: 'Consulting', desc: 'Expert advice on architectural projects and planning' }
            ].map((service, index) => (
              <div key={index} className="w3-card shadow-lg p-6 bg-[#333333]">
                <h4 className="text-lg font-normal mb-3">{service.title}</h4>
                <p className="text-sm text-[#cccccc] leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light tracking-wide mb-2">BY THE NUMBERS</h2>
          <div className="h-1 w-16 bg-[#555555] mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '50+', label: 'Team Members' },
              { number: '20+', label: 'Years Experience' },
              { number: '95%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="w3-card shadow-lg p-6 bg-[#333333] text-center">
                <p className="text-4xl font-light text-[#b3d9ff]">{stat.number}</p>
                <p className="text-sm text-[#aaaaaa] mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
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