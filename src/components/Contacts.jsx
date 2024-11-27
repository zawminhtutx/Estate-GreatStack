import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
const Contacts = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending.....");
    const formData = new FormData(e.target);
    formData.append("access_key", "c1729bfd-3a96-4538-8114-b91985d355e1");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("");
      toast.success("From Submitted Successfully", {
        position: "top-center",
        autoClose: 5000,
      });
      e.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message, {
        position: "top-center",
      });
      setResult("");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'
      id='Contacts'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Contacts{" "}
        <span className='underline underline-offset-4 decoration-1 under font-light'>
          With Us
        </span>
      </h1>
      <p className='text-gray-500 mb-8 text-center max-w-80 mx-auto '>
        {"Ready to Make a Move? Let's Build Your Future Together"}
      </p>
      <form
        onSubmit={onSubmit}
        className='max-w-2xl mx-auto text-green-600 pt-8'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 text-left'>
            Your Name
            <input
              className='w-full border border-gray-300 rounded px-4 py-3 mt-2'
              name='Name'
              type='text'
              placeholder='Your Name'
              required
            />
          </div>
          <div className='w-full md:w-1/2 text-left md:pl-4'>
            Your Email
            <input
              className='w-full border border-gray-300 rounded px-4 py-3 mt-2'
              name='Name'
              type='email'
              placeholder='Your Email'
              required
            />
          </div>
        </div>
        <div className='my-6 text-left'>
          Message
          <textarea className='w-full border border-gray-300 rounded px-4 py-3 mt-2 h-48 resize-none' />
        </div>
        <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contacts;
