import Image from 'next/image';
import { Twitter, Send, Globe, MessageCircle } from "lucide-react";

export default function Home() {
  const leaderboardData = [
    { address: "(E)xj. GKJSP", purchased: "1,589,469" },
    { address: "(E)xj. GKJSP", purchased: "1,589,469" },
    { address: "(E)xj. GKJSP", purchased: "1,589,469" },
    { address: "(E)xj. GKJSP", purchased: "1,589,469" },
    { address: "(E)xj. GKJSP", purchased: "1,589,469" },
    { address: "(E)xj. GKJSP", purchased: "1,589,469" },
  ];

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
  <Image 
    src="/tittle.png" 
    alt="Logo" 
    width={900} 
    height={900} 
    className="mx-auto"
  />
  <div className="bg-[#1790C4] p-10 mt-5">
    <p className="mt-4 text-lg max-w-2xl mx-auto">
      $CLOUT is a revolutionary cryptocurrency designed to empower a community-driven ecosystem where every action earns rewards.
    </p>
    <button className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-full font-bold">
      Explore $CLOUT
    </button>
  </div>
</section>


      {/* Vision & Mission */}
      <section className="py-16 px-10 flex justify-center mx-auto gap-8 text-center">
      <Image src="/vissiontittle.png" alt="Logo" width={500} height={500} />

        <p className=" max-w-3xl text-xl text-center mt-10">
          $CLOUT empowers communities by rewarding engagement and <br /> fostering meaningful interactions.
        </p>
      </section>

      <section 
  className="text-center py-16 h-[800px] bg-contain bg-no-repeat bg-center" 
  style={{ backgroundImage: "url('/vision.png')" }}
>
  <div className="max-w-4xl mx-auto text-black p-8 rounded-lg">
    <div className="grid grid-cols-1 mt-20 md:grid-cols-2 gap-20">
      <div className='p-10'>
        <h2 className="text-sm md:text-2xl font-bold ">VISION</h2>
        <p className="mt-2 text-lg">
          To create a vibrant and thriving ecosystem where influence translates into tangible rewards and opportunities.
        </p>
      </div>
      <div className='p-10'>
        <h2 className="text-2xl font-bold">MISSION</h2>
        <p className="mt-2 text-lg">
          To redefine engagement and community interactions by rewarding active participation and promoting value creation for all holders.
        </p>
      </div>
    </div>
  </div>
</section>


   {/* Problem & Solution */}
<section className="bg-sky-500 py-16 px-8 flex flex-col lg:flex-row items-center justify-center ">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Problem Section */}
    <div className="flex items-center gap-4">
      {/* Rotated Label */}
      <h2 className="text-sky-300 text-5xl font-extrabold -rotate-90 whitespace-nowrap">
        PROBLEM
      </h2>

      {/* Problem Box */}
      <div 
        className="p-8 rounded-lg shadow-lg h-[400px] w-[400px] contain bg-cover bg-center"
        style={{ backgroundImage: "url('/problem.png')" }}
      >
        <h2 className="text-2xl font-bold text-black">THE PROBLEM</h2>
        <p className="mt-4 text-xs text-black">
          The traditional crypto space is saturated with tokens that lack
          utility and meaningful community interaction. Most projects fail to
          incentivize their holders beyond speculative trading, leaving gaps in
          value creation and user engagement.
        </p>
      </div>
    </div>

    {/* Solution Section */}
    <div className="flex items-center gap-4">
      {/* Solution Box */}
      <div 
        className="p-8 rounded-lg shadow-lg h-[400px] contain  bg-cover bg-center w-full"
        style={{ backgroundImage: "url('/solution.png')" }}
      >
        <h2 className="text-2xl font-bold text-black">THE SOLUTION</h2>
        <p className="mt-4 text-xs text-black">
          $CLOUT introduces a unique reward and engagement model powered by
          innovative tokenomics & community-centric features.
        </p>
        <ul className="mt-4 text-xs text-black text-left list-disc pl-6">
          <li><strong>Burn Mechanism:</strong> A % of every transaction is burned, creating scarcity.</li>
          <li><strong>Leaderboards:</strong> Active participants are ranked, incentivizing economic activity.</li>
          <li><strong>Community Governance:</strong> Voting mechanisms allow holders to shape the future of $CLOUT.</li>
          <li><strong>Games & Competitions:</strong> Holders can engage in contests and earn rewards.</li>
        </ul>
      </div>

      {/* Rotated Label */}
      <h2 className="text-sky-300 text-5xl font-extrabold rotate-90 whitespace-nowrap">
        SOLUTION
      </h2>
    </div>

  </div>
</section>


{/* Tokenomics Overview */}
<h2 className="text-center text-white text-6xl font-bold mb-4 mt-10">TOKENOMICS br OVERVIEW</h2>
<section className="flex flex-col lg:flex-row items-center justify-center py-16 px-8 gap-8">
<div className="py-16 px-8 bg-cover bg-center h-[500px] w-[600px] contain" style={{ backgroundImage: "url('/overview.png')" }}>
  <div className="max-w-2xl mx-auto  p-6 rounded-lg shadow-lg ">
    <h2 className="text-center text-white text-2xl font-bold mb-4">TOKENOMICS OVERVIEW</h2>
    
    <table className="w-full text-white border-collapse">
      <thead>
        <tr>
          <th className="bg-yellow-500 text-black p-3 text-left">Metric</th>
          <th className="bg-red-500 text-black p-3 text-left">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-600">
          <td className="p-3">Token Name</td>
          <td className="p-3">$CLOUT</td>
        </tr>
        <tr className="border-b border-gray-600">
          <td className="p-3">Symbol</td>
          <td className="p-3">CLOUT</td>
        </tr>
        <tr className="border-b border-gray-600">
          <td className="p-3">Total Supply</td>
          <td className="p-3">10,000,000,000</td>
        </tr>
        <tr>
          <td className="p-3">Burn Mechanism</td>
          <td className="p-3">1% Per Transaction</td>
        </tr>
      </tbody>
    </table>
  </div>


</div>
<div>
  <Image src="/tokenomics.png" alt="Roadmap" width={700} height={700} className="mx-auto mt-4" />

  </div>
</section>


{/* Leaderboard */}
<h2 className="text-center text-white text-6xl font-bold mb-4">PRESALE <br/> LEADERBOARD</h2>
<section className="flex justify-center items-center py-16 px-8">
  <div 
    className="w-[900px] p-20 rounded-lg  bg-cover contain bg-center"
    style={{ backgroundImage: "url('/overview.png')" }} // Placeholder for BG
  >


    <table className="w-full text-white border-collapse">
      <thead>
        <tr>
          <th className="bg-yellow-500 text-black p-3 text-left">Ranking</th>
          <th className="bg-red-500 text-black p-3 text-left">Address</th>
          <th className="bg-orange-500 text-black p-3 text-left">Purchased</th>
        </tr>
      </thead>
      <tbody>
        {leaderboardData.map((item, index) => (
          <tr key={index} className="border-b border-gray-600">
            <td className="p-3">
              <Image 
                src="/badge1.png" // Placeholder for ranking badge
                alt="Ranking Badge" 
                width={24} 
                height={24} 
                className="inline-block"
              />
            </td>
            <td className="p-3">{item.address}</td>
            <td className="p-3">{item.purchased}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Pagination & Connect Wallet Message */}
    <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
      <p>Connect wallet to see your position</p>
      <div className="flex gap-2">
        <button className="px-2 py-1 bg-gray-700 rounded">1</button>
        <button className="px-2 py-1 bg-gray-700 rounded">2</button>
        <span>...</span>
        <button className="px-2 py-1 bg-gray-700 rounded">25</button>
      </div>
    </div>
  </div>
</section>

{/* Roadmap */}
<section className="text-center py-16 flex flex-col items-center">
  <Image src="/tittleRoad.png" alt="Roadmap Title" width={900} height={900} className="mx-auto" />
  <Image src="/roadmap.png" alt="Roadmap" width={900} height={900} className="mx-auto mt-4" />
</section>




      <div className="w-full  p-6">
        {/* Main container with blue background */}
        <div className=" p-8 rounded-lg relative">
          {/* Black textured banner with text */}
          <div   style={{ backgroundImage: "url('/join.png')" }} className=" bg-no-repeat bg-center h-96 rounded-lg p-4 mb-8 relative">
            <div className="  rounded-lg p-3">
              {/* Title with orange text shadow */}
              <h2 className="mt-52 text-orange-500 text-center text-2xl font-bold 
              [text-shadow:2px_2px_0px_#000,2px_-2px_0px_#000,-2px_2px_0px_#000,-2px_-2px_0px_#000]">
                JOIN THe $CLOUT Community
              </h2>

              {/* Telegram join text */}
              <div className="flex items-center   justify-center gap-2 mt-2">
                <div className="w-6 h-6  rounded-full flex items-center justify-center">
                  <span className="transform -rotate-45">✋</span>
                </div>
                <p className="text-white text-sm">Join Telegram</p>
              </div>
            </div>
          </div>

          {/* Bottom yellow banner with buttons */}
          <div 
  style={{ backgroundImage: "url('/footer.png')" }}  
  className=" bottom-0 left-0  bg-no-repeat bg-cover h-32 rounded-full p-3 flex items-center justify-between"
>
            {/* Social icons */}
            <div className="flex gap-2 pl-4">
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Twitter className="w-5 h-5 text-black" />
              </button>
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Send className="w-5 h-5 text-black" />
              </button>
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <MessageCircle className="w-5 h-5 text-black" />
              </button>
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Globe className="w-5 h-5 text-black" />
              </button>

            </div>

            {/* Join Now button */}
            <button className="bg-white mr-10 px-4 py-1 rounded-full hover:bg-gray-100 
            transition-colors text-lg font-medium text-black">
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
