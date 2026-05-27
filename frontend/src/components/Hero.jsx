const Hero = () => {
  return (
    <div
      id="home"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen px-4 py-10"
    >
      {/* ================= TOP HERO IMAGES ================= */}

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full max-w-7xl mx-auto">

        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/3 bg-black rounded-3xl border-4 border-red-500 shadow-2xl shadow-red-500/30 p-2 hover:scale-105 transition duration-500">

          <img
            src="/left.png"
            alt="Left"
            className="w-full h-[350px] md:h-[500px] object-contain rounded-2xl"
          />

        </div>

        {/* CENTER IMAGE */}
        <div className="w-full lg:w-1/3 bg-black rounded-3xl border-4 border-red-500 shadow-2xl shadow-red-500/40 p-2 hover:scale-105 transition duration-500">

          <img
            src="/hero.png"
            alt="Naujawan Bihar Sabha"
            className="w-full h-[350px] md:h-[500px] object-contain rounded-2xl"
          />

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/3 bg-black rounded-3xl border-4 border-red-500 shadow-2xl shadow-red-500/30 p-2 hover:scale-105 transition duration-500">

          <img
            src="/right.png"
            alt="Right"
            className="w-full h-[350px] md:h-[500px] object-contain rounded-2xl"
          />

        </div>

      </div>

      {/* ================= MAIN HEADING ================= */}

      <div className="text-center mt-14">

        <h1 className="text-4xl md:text-7xl font-extrabold text-red-500 leading-tight">
          Naujawan Bihar Sabha
        </h1>

        {/* HINDI SLOGAN */}
        <p className="text-lg md:text-3xl mt-6 text-yellow-400 font-semibold">
          परिवर्तन • युवा शक्ति • राष्ट्र शक्ति
        </p>

        {/* ENGLISH SLOGAN */}
        <p className="text-lg md:text-2xl mt-4 text-gray-300 max-w-4xl mx-auto">
          Voice of Bihar Youth • Justice • Equality • Revolution
        </p>

      </div>

      {/* ================= ACTION BUTTONS ================= */}

      <div className="flex flex-wrap items-center justify-center gap-5 mt-12">

        {/* JOIN BUTTON */}
        <a
          href="#join"
          className="bg-red-500 hover:bg-red-600 transition duration-300 px-10 py-4 rounded-full text-white font-bold shadow-lg shadow-red-500/30 hover:scale-105"
        >
          Join The Movement
        </a>

        {/* PUBLIC ISSUES BUTTON */}
        <a
          href="#problems"
          className="border-2 border-white hover:bg-white hover:text-black transition duration-300 px-10 py-4 rounded-full font-bold hover:scale-105"
        >
          Raise Public Issues
        </a>

        {/* INSTAGRAM BUTTON */}
        <a
          href="https://www.instagram.com/naujawan_bihar.sabha?igsh=NjJ2cHJ1OTh1Znk0"
          target="_blank"
          rel="noreferrer"
          className="bg-pink-600 hover:bg-pink-700 transition duration-300 px-10 py-4 rounded-full text-white font-bold shadow-lg hover:scale-105"
        >
          Instagram
        </a>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/919835981683"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 hover:bg-green-600 transition duration-300 px-10 py-4 rounded-full text-white font-bold shadow-lg hover:scale-105"
        >
          WhatsApp
        </a>

      </div>

      {/* ================= STATS SECTION ================= */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-20">

        {/* CARD 1 */}
        <div className="bg-gray-900 border border-red-500/20 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-500">

          <h2 className="text-5xl font-extrabold text-red-500">
            7876+
          </h2>

          <p className="text-xl mt-4 text-gray-300">
            Youth Members
          </p>

        </div>

        {/* CARD 2 */}
        <div className="bg-gray-900 border border-red-500/20 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-500">

          <h2 className="text-5xl font-extrabold text-red-500">
            544+
          </h2>

          <p className="text-xl mt-4 text-gray-300">
            Public Issues Raised
          </p>

        </div>

        {/* CARD 3 */}
        <div className="bg-gray-900 border border-red-500/20 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-500">

          <h2 className="text-5xl font-extrabold text-red-500">
            38
          </h2>

          <p className="text-xl mt-4 text-gray-300">
            Bihar District Reach
          </p>

        </div>

      </div>

      {/* ================= ABOUT SECTION ================= */}

      <div className="max-w-5xl mx-auto mt-24 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-red-500">
          About Naujawan Bihar Sabha
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mt-8 leading-9">

          Naujawan Bihar Sabha is a youth-driven social and political movement
          dedicated to justice, equality, education reform, youth empowerment,
          and raising the voice of common people.

        </p>

      </div>

    </div>
  );
};

export default Hero;