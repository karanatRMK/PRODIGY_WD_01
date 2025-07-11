import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [result, setResult] = React.useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setResult("Sending....");
    emailjs
      .sendForm("service_qjt8zf2", "template_1tp0tat", form.current, {
        publicKey: "sgK9HrA4LgX6cvPQG",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setResult("");
          toast.success("Message Sent Succesfully")
          e.target.reset();
        },
        (error) => {
          toast.error(error.text)
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          type="text"
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className=" rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
           {result ? result :"Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;