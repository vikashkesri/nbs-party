const About = () => {
  return (
    <div
      id="about"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 px-5"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">

          <h1 className="text-4xl md:text-7xl font-extrabold text-red-500">
            About Naujawan Bihar Sabha
          </h1>

          <p className="text-lg md:text-3xl text-yellow-400 mt-6 font-semibold">
            युवाओं की आवाज • समाज की ताकत • बदलाव की शुरुआत
          </p>

          <div className="w-40 h-1 bg-red-500 mx-auto mt-6 rounded-full"></div>

        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mt-20">

          {/* Left Side Image */}
          <div className="relative">

            <div className="absolute inset-0 bg-red-500 blur-3xl opacity-20 rounded-full"></div>

            <div className="relative bg-gray-900 border-4 border-red-500 rounded-3xl shadow-2xl shadow-red-500/30 p-4 hover:scale-105 transition duration-500">

              <img
                src="/hero.png"
                alt="About"
                className="w-full h-[350px] md:h-[550px] object-contain rounded-2xl"
              />

            </div>

          </div>

          {/* Right Side Content */}
          <div>

            <h2 className="text-3xl md:text-5xl font-bold text-red-500 leading-tight">
              जनता मालिक • सरकार सेवक
            </h2>

            <p className="text-gray-300 text-lg leading-9 mt-8">

              नौजवान बिहार सभा (NBS) का विश्वास है कि लोकतंत्र में सबसे बड़ी शक्ति जनता होती है।

              <br /><br />

              हमारा उद्देश्य बिहार में एक ऐसी व्यवस्था बनाना है जहाँ:
              <span className="text-yellow-400 font-semibold">
                {" "}एक कानून • एक व्यवस्था • एक सम्मान
              </span>

              <br /><br />

              मुख्यमंत्री से लेकर आम नागरिक तक सभी एक समान व्यवस्था के अंतर्गत आएंगे।
              वीआईपी संस्कृति, भ्रष्टाचार, अन्याय और शोषण के खिलाफ हमारी लड़ाई जारी रहेगी।

              <br /><br />

              शिक्षा, स्वास्थ्य, रोजगार, पारदर्शिता और युवाओं के अधिकारों के लिए
              बिहार नौजवान सभा निरंतर कार्य करेगी।

            </p>

            {/* Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">

              {/* Card */}
              <div className="bg-gray-900 border border-red-500/20 p-6 rounded-3xl hover:scale-105 transition duration-500 shadow-xl">

                <h3 className="text-red-500 text-2xl font-bold">
                  📚 Education
                </h3>

                <p className="text-gray-300 mt-4">
                  आधुनिक और समान शिक्षा व्यवस्था हर युवा तक पहुँचाना।
                </p>

              </div>

              {/* Card */}
              <div className="bg-gray-900 border border-red-500/20 p-6 rounded-3xl hover:scale-105 transition duration-500 shadow-xl">

                <h3 className="text-red-500 text-2xl font-bold">
                  💼 Employment
                </h3>

                <p className="text-gray-300 mt-4">
                  रोजगार, स्किल डेवलपमेंट और युवा सशक्तिकरण।
                </p>

              </div>

              {/* Card */}
              <div className="bg-gray-900 border border-red-500/20 p-6 rounded-3xl hover:scale-105 transition duration-500 shadow-xl">

                <h3 className="text-red-500 text-2xl font-bold">
                  ⚖ Equality
                </h3>

                <p className="text-gray-300 mt-4">
                  हर नागरिक के लिए समान अधिकार और न्याय।
                </p>

              </div>

              {/* Card */}
              <div className="bg-gray-900 border border-red-500/20 p-6 rounded-3xl hover:scale-105 transition duration-500 shadow-xl">

                <h3 className="text-red-500 text-2xl font-bold">
                  🏥 Health
                </h3>

                <p className="text-gray-300 mt-4">
                  मजबूत स्वास्थ्य व्यवस्था और बेहतर सरकारी अस्पताल।
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Mission Section */}
        <div className="mt-28">

          <div className="bg-gray-900 border border-red-500/20 rounded-3xl p-10 md:p-16 shadow-2xl">

            <h2 className="text-4xl md:text-5xl font-bold text-center text-red-500">
              Our Mission
            </h2>

            <p className="text-gray-300 text-lg md:text-xl leading-10 mt-10 text-center max-w-5xl mx-auto">

              नौजवान बिहार सभा का मिशन बिहार के युवाओं को एकजुट करना,
              भ्रष्टाचार के खिलाफ आवाज उठाना, शिक्षा और रोजगार के अवसर बढ़ाना,
              और समाज में समानता एवं न्याय स्थापित करना है।

              <br /><br />

              हमारा लक्ष्य एक ऐसा बिहार बनाना है जहाँ हर युवा को सम्मान,
              अवसर और सुरक्षित भविष्य मिल सके।

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default About;