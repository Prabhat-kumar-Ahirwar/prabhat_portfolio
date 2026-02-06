import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from './emailjsConfig';

const Contact = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    setSent(false);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      formRef.current.reset();
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="mb-12 pt-12 border-t border-[#383838] mt-12 px-4 sm:px-6 md:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center md:text-left flex items-center justify-center md:justify-start">
        <span className="text-blue-400 mr-2"></span> Let's Connect
      </h2>

      <div className="bg-[#212123] p-6 sm:p-8 rounded-2xl border border-[#383838] flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        
        {/* Left Info */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">Have a project in mind?</h3>
          <p className="text-gray-400 mb-6 sm:mb-8 max-w-md mx-auto md:mx-0">
            I'm currently open to new opportunities as a Java Backend Developer.<br />
            Whether you have a question or just want to say hi, feel free to drop a message!
          </p>
          <a
            href="mailto:prabhatmmg007@gmail.com"
            className="inline-block px-6 sm:px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25"
          >
            Say Hello 👋
          </a>
        </div>

        {/* Contact Form */}
        <div className="flex-1 w-full max-w-md mx-auto md:mx-0">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-md flex flex-col gap-4"
          >
            <h4 className="text-xl sm:text-2xl font-semibold text-white mb-2 text-center md:text-left">Contact Form</h4>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:border-blue-400 outline-none w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:border-blue-400 outline-none w-full"
              required
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              className="bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:border-blue-400 outline-none w-full"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 disabled:opacity-60 w-full"
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>

            {sent && <p className="text-green-400 mt-2 text-center md:text-left">Message sent successfully!</p>}
            {error && <p className="text-red-400 mt-2 text-center md:text-left">{error}</p>}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
