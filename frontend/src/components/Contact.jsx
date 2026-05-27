const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-black text-white py-24 px-5"
    >

      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-4xl md:text-6xl font-extrabold text-red-500">
          Contact Us
        </h1>

        <p className="text-gray-300 text-lg mt-6">
          Naujawan Bihar Sabha • Bihar, India
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

          <div className="bg-black border border-red-500/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-red-500">
              📞 Phone
            </h2>

            <p className="text-gray-300 mt-4">
              +91 9835981683
            </p>
          </div>

          <div className="bg-black border border-red-500/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-red-500">
              📧 Email
            </h2>

            <p className="text-gray-300 mt-4">
              collegecircle47@gmail.com
            </p>
          </div>

          <div className="bg-black border border-red-500/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-red-500">
              📍 Address
            </h2>

            <p className="text-gray-300 mt-4">
              Siwan, Bihar, India
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;