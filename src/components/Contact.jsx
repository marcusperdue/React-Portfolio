  // Contact.jsx

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-xl text-sm md:text-2xl lg:text-2xl">Lets Talk!</h2>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10">Contact Me</h1>

      <div className="w-full md:w-3/4 lg:w-1/2 px-4 mb-20 mx-auto">
        <div className="shadow-2xl rounded-xl p-8">
          <form action="" method="post">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full rounded border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full rounded border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none px-3 py-2"
              ></textarea>
            </div>
            <button type="submit" className="custom-button w-full font-bold py-2 px-4 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
