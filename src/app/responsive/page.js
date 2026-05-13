"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function ResponsivePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [navDropdown, setNavDropdown] = useState(false);
  const [btnDropdown, setBtnDropdown] = useState(false);
  const [accordion, setAccordion] = useState({});
  const [activeTab, setActiveTab] = useState("London");
  const [progress, setProgress] = useState(5);
  const [pagination, setPagination] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "" });
  const [checkboxes, setCheckboxes] = useState({ milk: false, sugar: false });
  const [radio, setRadio] = useState("");

  const slides = [
    "https://www.w3schools.com/w3images/snow.jpg",
    "https://www.w3schools.com/w3images/lights.jpg",
    "https://www.w3schools.com/w3images/mountains.jpg",
    "https://www.w3schools.com/w3images/forest.jpg",
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isMounted]);

  const prevSlide = () =>
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () =>
    setSlideIndex((prev) => (prev + 1) % slides.length);

  const toggleAccordion = (key) =>
    setAccordion((prev) => ({ ...prev, [key]: !prev[key] }));

  const moveProgress = () =>
    setProgress((prev) => Math.min(prev + 10, 100));

  const movies = [
    { title: "Frozen", desc: "The response to the animations was ridiculous" },
    { title: "The Fault in Our Stars", desc: "Touching, gripping and genuinely well made" },
    { title: "The Avengers", desc: "A huge success for Marvel and Disney" },
  ];

  const tabs = {
    London: {
      title: "London",
      content: (
        <>
          <p className="text-sm text-[#cccccc] mb-2">London is the capital city of England.</p>
          <p className="text-sm text-[#cccccc]">It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
        </>
      ),
    },
    Paris: {
      title: "Paris",
      content: (
        <>
          <p className="text-sm text-[#cccccc] mb-2">Paris is the capital of France.</p>
          <p className="text-sm text-[#cccccc]">The Paris area is one of the largest population centers in Europe, with more than 12 million inhabitants.</p>
        </>
      ),
    },
    Tokyo: {
      title: "Tokyo",
      content: (
        <>
          <p className="text-sm text-[#cccccc] mb-2">Tokyo is the capital of Japan.</p>
          <p className="text-sm text-[#cccccc]">It is the center of the Greater Tokyo Area, and the most populous metropolitan area in the world.</p>
        </>
      ),
    },
  };

  const accordionSections = [
    {
      key: "s1",
      title: "Open Section 1",
      content: (
        <p className="text-sm text-[#cccccc]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      ),
    },
    {
      key: "s2",
      title: "Open Section 2",
      content: (
        <div className="flex gap-2">
          <a href="#" className="bg-[#404040] text-white text-xs px-3 py-2 hover:bg-[#555555] transition-colors">Link 1</a>
          <a href="#" className="bg-[#404040] text-white text-xs px-3 py-2 hover:bg-[#555555] transition-colors">Link 2</a>
          <a href="#" className="bg-[#404040] text-white text-xs px-3 py-2 hover:bg-[#555555] transition-colors">Link 3</a>
        </div>
      ),
    },
    {
      key: "s3",
      title: "Open Section 3",
      content: (
        <div>
          <p className="text-sm text-[#cccccc] mb-3">Accordion with Images:</p>
          <img src="https://www.w3schools.com/w3css/img_snowtops.jpg" alt="Snow tops" className="w-full max-h-40 object-cover" />
          <p className="text-xs text-[#999999] mt-1">French Alps</p>
        </div>
      ),
    },
  ];

  return (
    <div className="font-sans text-black bg-white min-h-screen">
      <Navbar />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-[#333333] w-full max-w-lg mx-4 shadow-2xl">
            <div className="bg-black text-white px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#aaaaaa] mb-0.5">Oh snap!</p>
                <h4 className="text-lg font-normal">We just showed you a modal..</h4>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white text-2xl leading-none hover:text-gray-300"
              >
                &times;
              </button>
            </div>
            <div className="px-6 py-5">
              <h5 className="font-normal text-base mb-2">Because we can</h5>
              <p className="text-[#cccccc] text-sm mb-4">Cool huh? Ok, enough teasing around..</p>
              <p className="text-[#cccccc] text-sm">
                Go to our{" "}
                <a href="https://www.w3schools.com/w3css/default.asp" className="text-[#b3d9ff] underline hover:text-white">
                  W3.CSS Tutorial
                </a>{" "}
                to learn more!
              </p>
            </div>
            <div className="border-t border-[#555555] px-6 py-3 bg-[#2a2a2a] flex justify-between items-center">
              <span className="text-sm text-[#aaaaaa]">Modal footer</span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#404040] text-white text-sm px-4 py-2 hover:bg-[#555555] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <header className="relative text-center py-24 px-4 mt-[60px]">
        <p className="text-xs uppercase tracking-[0.3em] text-[#aaaaaa] mb-3">
          Beautiful Responsive Web Sites
        </p>
        <h1 className="text-5xl md:text-7xl font-light uppercase tracking-tight mb-8">
          Built With W3.CSS
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3 font-normal hover:bg-[#cccccc] transition-colors"
        >
          View Demo
        </button>
      </header>

      {/* Features */}
      <section className="bg-[#2a2a2a] px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Responsive",
              items: ["Built-in responsiveness", "Mobile first fluid grid", "Fits any screen sizes", "PC Tablet and Mobile"],
            },
            {
              title: "Standard CSS",
              items: ["Standard CSS only", "Easy to learn", "No need for jQuery", "No JavaScript library"],
            },
            {
              title: "Design",
              items: ["Paper like design", "Bold colors and shadows", "Equal across platforms", "Equal across devices"],
            },
          ].map(({ title, items }) => (
            <div key={title} className="bg-[#333333] shadow-lg p-6 text-center w3-card">
              <h3 className="text-sm font-normal uppercase tracking-widest mb-4">{title}</h3>
              <ul className="space-y-1">
                {items.map((item) => (
                  <li key={item} className="text-sm text-[#aaaaaa]">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Color Classes */}
      <section className="px-4 md:px-8 py-10">
        <h2 className="text-3xl font-light uppercase tracking-wider mb-6">Color Classes</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Red", cls: "bg-red-600 text-white" },
            { label: "Blue", cls: "bg-blue-600 text-white" },
            { label: "Blue Grey", cls: "bg-slate-600 text-white" },
            { label: "Teal", cls: "bg-teal-600 text-white" },
            { label: "Yellow", cls: "bg-yellow-500 text-black" },
            { label: "Orange", cls: "bg-orange-600 text-white" },
          ].map(({ label, cls }) => (
            <span key={label} className={`${cls} px-4 py-2 text-sm font-normal uppercase tracking-wide`}>
              {label}
            </span>
          ))}
        </div>
      </section>

      <div className="border-b border-[#555555] my-8"></div>

      {/* Responsiveness */}
      <section className="bg-[#2a2a2a] px-4 md:px-8 py-10">
        <h2 className="text-3xl font-light uppercase tracking-wider mb-2">Built-In Responsiveness</h2>
        <p className="text-sm text-[#aaaaaa] mb-8">Resize the page to see the effect!</p>

        {/* Half */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {[0, 1].map((i) => (
            <div key={i} className="md:w-1/2 bg-[#333333] text-white p-6 shadow-lg w3-card">
              <h5 className="font-normal text-xs uppercase tracking-widest mb-2">w3-half</h5>
              <p className="text-xs text-[#cccccc]">
                The w3-half class uses half (50%) of the screen window. On small screens it automatically resizes to full screen width.
              </p>
            </div>
          ))}
        </div>

        {/* Third */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="md:w-1/3 bg-[#404040] text-white p-6 shadow-lg w3-card">
              <h5 className="font-normal text-xs uppercase tracking-widest mb-2">w3-third</h5>
              <p className="text-xs text-[#cccccc]">
                The w3-third class uses one third (33.33%) of the screen window.
              </p>
            </div>
          ))}
        </div>

        {/* Quarter */}
        <div className="flex flex-col md:flex-row gap-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="md:w-1/4 bg-[#4d4d4d] text-white p-6 shadow-lg w3-card">
              <h5 className="font-normal text-xs uppercase tracking-widest mb-2">w3-quarter</h5>
              <p className="text-[11px] text-[#cccccc]">The w3-quarter class uses one quarter (25%).</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-b border-[#555555] my-8"></div>

      {/* Containers */}
      <section className="px-4 md:px-8 py-10">
        <h2 className="text-3xl font-light uppercase tracking-wider mb-2">Containers</h2>
        <p className="text-sm text-[#aaaaaa] mb-6">Use containers to create headers, sections and footers.</p>

        <div className="shadow-lg overflow-hidden border border-[#555555] w3-card">
          <div className="bg-black text-white text-center py-6 px-6">
            <h2 className="text-3xl font-light uppercase tracking-tight">Header</h2>
          </div>
          <div className="relative px-8 py-8 bg-[#333333]">
            <button className="absolute top-3 right-3 text-[#aaaaaa] hover:text-white text-xl">&times;</button>
            <h3 className="text-xl font-normal uppercase mb-4">London</h3>
            <p className="text-sm text-[#cccccc] mb-3">
              London is the capital city of England. It is the most populous city in the United Kingdom,
              with a metropolitan area of over 13 million inhabitants.
            </p>
            <p className="text-sm text-[#cccccc] mb-3">
              Standing on the River Thames, London has been a major settlement for two millennia,
              its history going back to its founding by the Romans, who named it Londinium.
            </p>
            <p className="text-sm text-[#999999] italic">
              By the way, you can add a close icon to all containers if you want the ability to hide them.
            </p>
          </div>
          <div className="bg-black text-white text-center py-4 px-6">
            <h5 className="text-xs uppercase tracking-widest font-normal">Footer</h5>
            <p className="text-xs text-[#aaaaaa] mt-1">Footer information goes here</p>
          </div>
        </div>
      </section>

      <div className="border-b border-[#555555] my-8"></div>

      {/* Cards */}
      <section className="px-4 md:px-8 py-10">
        <h2 className="text-3xl font-light uppercase tracking-wider mb-6">Paper-like Cards with Shadows</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "w3-card", shadow: "shadow-lg" },
            { label: "w3-card-4", shadow: "shadow-2xl" },
            { label: "w3-card-4", shadow: "shadow-2xl" },
          ].map(({ label, shadow }, i) => (
            <div key={i} className={`bg-[#333333] ${shadow} overflow-hidden w3-card`}>
              <img src="https://www.w3schools.com/w3images/car.jpg" alt="Car" className="w-full h-40 object-cover" />
              <div className="p-4">
                <p className="text-sm font-normal text-[#aaaaaa]">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-b border-[#555555] my-8"></div>

      {/* Tables */}
      <section className="bg-[#2a2a2a] px-4 md:px-8 py-10">
        <h2 className="text-3xl font-light uppercase tracking-wider mb-2">Tables</h2>
        <p className="text-sm text-[#aaaaaa] mb-6">{"W3.CSS takes care of your tables."}</p>
        <div className="overflow-x-auto shadow-lg">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-black text-white">
                {["First Name", "Last Name", "Points"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-normal uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[["Jill", "Smith", "50"], ["Eve", "Jackson", "94"], ["Adam", "Johnson", "67"]].map(
                ([first, last, pts], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#333333]" : "bg-[#2a2a2a]"}>
                    <td className="px-4 py-3 text-[#cccccc]">{first}</td>
                    <td className="px-4 py-3 text-[#cccccc]">{last}</td>
                    <td className="px-4 py-3 text-[#cccccc]">{pts}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>

      <div className="border-b border-[#555555] my-8"></div>

      {/* Forms & Lists */}
      <section className="px-4 md:px-8 py-10">
        <h2 className="text-3xl font-light uppercase tracking-wider mb-8">Forms and Lists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <div>
            <h3 className="text-sm font-normal uppercase tracking-widest mb-5 pb-2 border-b border-[#555555]">
              Input Form
            </h3>
            <div className="space-y-4">
              {[
                { label: "Name", key: "name", type: "text" },
                { label: "Email", key: "email", type: "email" },
                { label: "Subject", key: "subject", type: "text" },
              ].map(({ label, key, type }) => (
                <div key={key}>
                  <label className="block text-xs uppercase tracking-wide text-[#aaaaaa] mb-1">{label}</label>
                  <input
                    type={type}
                    placeholder={label}
                    value={formData[key]}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    className="w-full bg-[#404040] border border-[#555555] text-white px-3 py-2 text-sm focus:outline-none focus:border-[#888888] transition-colors"
                  />
                </div>
              ))}

              <div className="space-y-2 pt-1">
                {[{ k: "milk", label: "Milk" }, { k: "sugar", label: "Sugar" }].map(({ k, label }) => (
                  <label key={k} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkboxes[k]}
                      onChange={(e) => setCheckboxes({ ...checkboxes, [k]: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span className="text-[#cccccc]">{label}</span>
                  </label>
                ))}
                <label className="flex items-center gap-2 text-sm text-[#666666] cursor-not-allowed">
                  <input type="checkbox" disabled className="w-4 h-4" />
                  Lemon (Disabled)
                </label>
              </div>

              <div className="space-y-2 pt-1">
                {["Male", "Female"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value={opt}
                      checked={radio === opt}
                      onChange={() => setRadio(opt)}
                      className="w-4 h-4"
                    />
                    <span className="text-[#cccccc]">{opt}</span>
                  </label>
                ))}
                <label className="flex items-center gap-2 text-sm text-[#666666] cursor-not-allowed">
                  <input type="radio" disabled className="w-4 h-4" />
                  {"Don't know (Disabled)"}
                </label>
              </div>
            </div>
          </div>

          {/* Lists */}
          <div>
            <h3 className="text-sm font-normal uppercase tracking-widest mb-5 pb-2 border-b border-[#555555]">
              Lists
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="border border-[#555555] divide-y divide-[#555555]">
                {["Jill", "Eve", "Adam"].map((n) => (
                  <li key={n} className="px-4 py-2 text-sm hover:bg-[#404040] transition-colors text-[#cccccc]">{n}</li>
                ))}
              </ul>
              <ul className="border border-[#555555] divide-y divide-[#555555]">
                {["Jill", "Eve", "Adam", "Steve"].map((n) => (
                  <li key={n} className="px-4 py-2 text-sm hover:bg-[#404040] transition-colors text-[#cccccc]">{n}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-[#555555] my-8"></div>

      {/* Progress Bar */}
      <section className="bg-[#2a2a2a] px-4 md:px-8 py-10">
        <h2 className="text-3xl font-light uppercase tracking-wider mb-6">Progress Bars</h2>
        <div className="w-full bg-[#404040] h-7 rounded overflow-hidden mb-4">
          <div
            className="bg-[#555555] h-full flex items-center justify-end pr-3 transition-all duration-500"
            style={{ width: `${progress}%` }}
          >
            <span className="text-white text-xs font-normal">{progress}%</span>
          </div>
        </div>
        <button
          onClick={moveProgress}
          disabled={progress >= 100}
          className="bg-[#404040] text-white text-sm px-5 py-2 hover:bg-[#555555] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {progress >= 100 ? "Full!" : "Click Me"}
        </button>
      </section>

      <div className="border-b border-[#555555] my-8"></div>

      {/* Slideshow */}
      <section className="px-4 md:px-8 py-10">
        <h2 className="text-3xl font-light uppercase tracking-wider mb-6">Slideshows</h2>
        <div className="relative overflow-hidden rounded" style={{ height: "400px" }}>
          {isMounted &&
            slides.map((src, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  i === slideIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img src={src} alt={`Slide ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 text-white px-3 py-2 text-xl hover:bg-black transition-colors z-10"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 text-white px-3 py-2 text-xl hover:bg-black transition-colors z-10"
          >
            &#10095;
          </button>
        </div>
      </section>

      <div className="border-b border-[#555555] my-8"></div>

      {/* Navigation */}
      <section className="bg-[#2a2a2a] px-4 md:px-8 py-10">
        <h2 className="text-3xl font-light uppercase tracking-wider mb-6">Navigation</h2>
        <div className="bg-black flex items-center flex-wrap">
          <a href="#" className="text-white text-sm px-4 py-3 hover:bg-[#333333] transition-colors">Home</a>
          <a href="#" className="text-white text-sm px-4 py-3 hover:bg-[#333333] transition-colors">Link 1</a>
          <div className="relative">
            <button
              onClick={() => setNavDropdown(!navDropdown)}
              className="text-white text-sm px-4 py-3 hover:bg-[#333333] transition-colors flex items-center gap-1"
            >
              Dropdown <span className="text-xs">▼</span>
            </button>
            {navDropdown && (
              <div className="absolute left-0 top-full bg-black border border-[#555555] min-w-[140px] z-20 shadow-lg">
                {["Link 1", "Link 2", "Link 3"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    onClick={() => setNavDropdown(false)}
                    className="block text-white text-sm px-4 py-2 hover:bg-[#333333] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="border-b border-[#555555] my-8"></div>

      {/* Accordions */}
      <section className="px-4 md:px-8 py-10">
        <h2 className="text-3xl font-light uppercase tracking-wider mb-6">Accordions</h2>
        <div className="border border-[#555555] w3-card">
          {accordionSections.map(({ key, title, content }) => (
            <div key={key}>
              <button
                onClick={() => toggleAccordion(key)}
                className="w-full text-left px-4 py-3 bg-black text-white text-sm font-normal uppercase tracking-wide hover:bg-[#1a1a1a] transition-colors flex justify-between items-center"
              >
                {title}
                <span className="text-[#aaaaaa] text-xs">{accordion[key] ? "▲" : "▼"}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  accordion[key] ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-4 py-4 bg-[#333333] border-t border-[#555555]">{content}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-b border-[#555555] my-8"></div>

      {/* Tabs */}
      <section className="bg-[#2a2a2a] px-4 md:px-8 py-10">
        <h2 className="text-3xl font-light uppercase tracking-wider mb-6">Tabs</h2>
        <div>
          <div className="flex border-b border-[#555555]">
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-sm font-normal uppercase tracking-wide transition-colors ${
                  activeTab === tab ? "bg-black text-white border-b-2 border-white" : "bg-[#333333] text-[#aaaaaa] hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="p-5 bg-[#333333] border border-t-0 border-[#555555]">
            <h3 className="text-lg font-normal mb-3">{tabs[activeTab].title}</h3>
            {tabs[activeTab].content}
          </div>
        </div>
      </section>

      <div className="border-b border-[#555555] my-8"></div>

      {/* Buttons */}
      <section className="px-4 md:px-8 py-10">
        <h2 className="text-3xl font-light uppercase tracking-wider mb-6">Buttons</h2>
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <button className="bg-[#404040] text-white text-sm px-5 py-2 hover:bg-[#555555] transition-colors">Button</button>
          <button className="bg-[#666666] text-white text-sm px-5 py-2 hover:bg-[#777777] transition-colors">Button</button>
          <button className="bg-[#555555] text-white text-sm px-5 py-2 hover:bg-[#666666] transition-colors">Button</button>
        </div>
        <div className="relative inline-block">
          <button
            onClick={() => setBtnDropdown(!btnDropdown)}
            className="bg-[#404040] text-white text-sm px-5 py-2 hover:bg-[#555555] transition-colors flex items-center gap-2"
          >
            Dropdown <span className="text-xs">▼</span>
          </button>
          {btnDropdown && (
            <div className="absolute left-0 top-full bg-black border border-[#555555] min-w-[140px] z-10 shadow-lg">
              {["Link 1", "Link 2", "Link 3"].map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={() => setBtnDropdown(false)}
                  className="block text-white text-sm px-4 py-2 hover:bg-[#333333] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="border-b border-[#555555] my-8"></div>

      {/* Pagination */}
      <section className="bg-[#2a2a2a] px-4 md:px-8 py-10">
        <h2 className="text-3xl font-light uppercase tracking-wider mb-6">Pagination</h2>
        <div className="flex flex-wrap gap-1">
          <button
            onClick={() => setPagination((p) => Math.max(1, p - 1))}
            className="px-3 py-2 text-sm border border-[#555555] text-white hover:bg-black transition-colors"
          >
            «
          </button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              onClick={() => setPagination(n)}
              className={`px-3 py-2 text-sm border border-[#555555] transition-colors ${
                pagination === n ? "bg-black text-white" : "text-white hover:bg-black"
              }`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => setPagination((p) => Math.min(5, p + 1))}
            className="px-3 py-2 text-sm border border-[#555555] text-white hover:bg-black transition-colors"
          >
            »
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-10 px-4 mt-16 border-t border-[#555555]">
        <h3 className="text-sm font-normal uppercase tracking-widest mb-2">Built with W3.CSS</h3>
        <p className="text-xs text-[#aaaaaa] mb-4">
          Powered by{" "}
          <a href="https://www.w3schools.com/w3css/default.asp" className="underline hover:text-white text-[#b3d9ff]">
            w3.css
          </a>
        </p>
        <a
          href="#"
          className="inline-block border border-[#666666] text-[#aaaaaa] text-xs uppercase tracking-widest px-4 py-2 hover:bg-[#333333] hover:text-white transition-colors"
        >
          ↑ Go To Top
        </a>
      </footer>
    </div>
  );
}
