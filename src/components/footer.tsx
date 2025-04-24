"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Address Section */}
        <div>
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            GreenBell High School
          </h3>
          <p className="text-lg">
            134/5, Medmaranahalli, Harohalli Hobli, Kanakapura Taluk, Ramanagara
            District, Karnataka- 562112.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-2xl font-bold text-green-400 mb-4">Contact Us</h3>
          <p className="text-lg mb-2">
            <strong>Phone:</strong>
            <br />
            74110 11354
            <br />
            89715 76866
            <br />
            7411011341
          </p>
          <p className="text-lg">
            <strong>Email:</strong>
            <br />
            info@greenbellhigh.com
          </p>
        </div>

        {/* Google Maps */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            Find Us On Map
          </h3>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15568.218115962212!2d77.452532!3d12.709864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae44bc11830529%3A0xa53878c284ab78f8!2sGreenBell%20High!5e0!3m2!1sen!2sin!4v1745235222155!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-700 py-4 text-center mt-8">
        <p className="text-sm">
          Copyright © 2025 Green Bell High | Developed by{" "}
          <a
            href="https://www.linkedin.com/in/mohammed-maaz-70310b291/"
            className="text-green-400"
          >
            Mohammed Maaz
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
