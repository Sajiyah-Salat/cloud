import Image from 'next/image';
import { Twitter, Send, Globe, MessageCircle } from "lucide-react";

export default function Home() {

  return (
    <div className="bg-[#4FB6E6] text-white font-sans min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-center items-center px-10 py-4 bg-[#5EBCE7] mt-10 rounded-full container mx-auto w-fit">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg ml-6">
          <li className="cursor-pointer border-b-2 border-white  hover:text-gray-200">Home</li>
          <li className="cursor-pointer hover:text-gray-200">Vision & Mission</li>
          <li className="cursor-pointer hover:text-gray-200">WhitePaper</li>
          <li className="cursor-pointer hover:text-gray-200">Tokenomics</li>
          <li className="cursor-pointer hover:text-gray-200">Roadmap</li>
        </ul>
      </nav>





      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-6xl font-bold drop-shadow-lg">WHAT IS <br /> $CLOUT?</h1>
        <div className='bg-[#1790C4] p-10 mt-5'>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            $CLOUT is a revolutionary cryptocurrency designed to empower a community-driven ecosystem where every action earns rewards.
          </p>
          <button className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-full font-bold">Explore $CLOUT</button>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-10 flex justify-center mx-auto gap-8 text-center">
        <h2 className="text-4xl font-bold">VISION <br /> & MISSION</h2>
        <p className="mt-4 max-w-3xl ">
          $CLOUT empowers communities by rewarding engagement and <br /> fostering meaningful interactions.
        </p>
      </section>

      {/* vission*/}
      <section className="py-16 px-10 flex justify-center">
        <h2></h2>
        <div className='flex'>

          <Image src="/vission.png" alt="Logo" width={500} height={500} />

        </div>
      </section>

      {/* Problem & Solution */}
      <section className="bg-sky-500 py-16 px-8">
        <div className="max-w-6xl mx-auto flex  ">
          {/* Problem Section */}
          <div className="flex items-center">
            <h2 className="text-sky-300 text-5xl font-extrabold -rotate-90 transform origin-center whitespace-nowrap h-0">
              PROBLEM
            </h2>
            <Image src="/Problem.png" alt="Logo" width={500} height={500} />


          </div>

          {/* Solution Section */}
          <div className="flex items-center">
            <Image src="/Desktop43.png" alt="Logo" width={500} height={500} />


            <h2 className="text-sky-300 text-5xl font-extrabold rotate-90 transform origin-center whitespace-nowrap h-0">
              SOLUTION
            </h2>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold mb-10">TOKENOMICS</h2>
        <div className='flex justify-center'>
          <Image src="/eco1.png" alt="Logo" width={400} height={400} />
          <Image src="/eco2.png" alt="Logo" width={400} height={400} />

        </div>

      </section>

      {/* Roadmap */}
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold">ROADMAP</h2>
        <div className="flex justify-center space-x-4 mt-6">
          <div className="bg-yellow-400 p-4 rounded-xl">Phase 1: Token Launch</div>
          <div className="bg-red-400 p-4 rounded-xl">Phase 2: Community Expansion</div>
          <div className="bg-green-400 p-4 rounded-xl">Phase 3: Utility & Staking</div>
          <div className="bg-blue-400 p-4 rounded-xl">Phase 4: Community Governance</div>
        </div>
      </section>

      <div className="w-full  p-6">
        {/* Main container with blue background */}
        <div className=" p-8 rounded-lg relative">
          {/* Black textured banner with text */}
          <div className="bg-black rounded-lg p-4 mb-8 relative">
            <div className="border-2 border-gray-800 rounded-lg p-3">
              {/* Title with orange text shadow */}
              <h2 className="text-orange-500 text-center text-2xl font-bold 
              [text-shadow:2px_2px_0px_#000,2px_-2px_0px_#000,-2px_2px_0px_#000,-2px_-2px_0px_#000]">
                JOIN OUR COMMUNITY
              </h2>

              {/* Telegram join text */}
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="transform -rotate-45">✋</span>
                </div>
                <p className="text-white text-sm">Join Telegram</p>
              </div>
            </div>
          </div>

          {/* Bottom yellow banner with buttons */}
          <div className="bg-yellow-400 rounded-full p-3 flex items-center justify-between">
            {/* Social icons */}
            <div className="flex gap-2">
              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Twitter className="w-5 h-5 text-black" />
              </button>
              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Send className="w-5 h-5 text-black" />
              </button>
              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <MessageCircle className="w-5 h-5 text-black" />
              </button>
              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Globe className="w-5 h-5 text-black" />
              </button>

            </div>

            {/* Join Now button */}
            <button className="bg-white px-4 py-1 rounded-full hover:bg-gray-100 
            transition-colors text-sm font-medium text-black">
              Join Now
            </button>
          </div>

          {/* Water splash effect */}
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2">
            <div className="relative w-8 h-8">
              <span className="absolute inset-0 animate-ping">💧</span>
              <span className="absolute inset-0">💧</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
