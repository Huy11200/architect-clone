import React from 'react';
import NavbarSocial from '@/components/NavbarSocial';
import ProfileCardSocial from '@/components/ProfileCardSocial';
import LeftSidebarExtras from '@/components/LeftSidebarExtras';
import PostInput from '@/components/PostInput';
import PostCardSocial from '@/components/PostCardSocial'  ;
import RightSidebarSocial from '@/components/RightSidebarSocial';
import FooterSocial from '@/components/FooterSocial';

export default function AboutSocialPage() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 font-sans">
      <NavbarSocial />

      <div className="max-w-6xl mx-auto pt-[60px] pb-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* CỘT TRÁI */}
          <div className="md:col-span-3 space-y-4">
            <ProfileCardSocial />
            <LeftSidebarExtras />
          </div>

          {/* CỘT GIỮA */}
          <div className="md:col-span-7 space-y-4">
            <PostInput />
            
            {/* Dùng props để truyền dữ liệu cho PostCard */}
            <PostCardSocial
              avatar="https://www.w3schools.com/w3images/avatar2.png"
              name="John Doe"
              time="1 min"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              images={[
                "https://www.w3schools.com/w3images/lights.jpg", 
                "https://www.w3schools.com/w3images/nature.jpg"
              ]}
            />

            <PostCardSocial
              avatar="https://www.w3schools.com/w3images/avatar5.png"
              name="Jane Doe"
              time="16 min"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              images={[]} // Không có ảnh
            />
          </div>

          {/* CỘT PHẢI */}
          <div className="md:col-span-2">
            <RightSidebarSocial />
          </div>

        </div>
      </div>
      
      <FooterSocial />
    </div>
  );
}