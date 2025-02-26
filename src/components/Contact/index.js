import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Confetti from "react-confetti";

// Import sound effect
import clickSound from "../../assets/sounds/click.mp3"; 

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 0;
  background: linear-gradient(135deg, #2b1055, #7597de);
  position: relative;
`;

const Heading = styled.h2`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #d1d1d1;  
  font-size: 16px;
  margin-bottom: 40px;
`;

const FormContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  width: 450px;
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.3);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;
  transition: 0.3s ease-in-out;

  &:focus {
    border-color: #854CE6;
    box-shadow: 0px 0px 8px rgba(133, 76, 230, 0.5);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;
  transition: 0.3s ease-in-out;

  &:focus {
    border-color: #854CE6;
    box-shadow: 0px 0px 8px rgba(133, 76, 230, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #854CE6;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-size: 16px;

  &:hover {
    background: #6c3cc7;
    transform: translateY(-2px);
    box-shadow: 0px 4px 12px rgba(133, 76, 230, 0.5);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    user_email: "",
    user_name: "",
    subject: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [confetti, setConfetti] = useState(false);

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    playClickSound(); // 🔊 Play sound on submit
    try {
      const response = await axios.post("http://localhost:5000/send-email", formData);
      if (response.data.success) {
        setMessage("🎉 Message sent successfully! 🎉");
        setConfetti(true);
        setTimeout(() => setConfetti(false), 4000);
        setFormData({ user_email: "", user_name: "", subject: "", message: "" });
      }
    } catch (error) {
      setMessage("Failed to send email. Try again!");
    }
  };

  return (
    <ContactContainer id="contact">
      {confetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <Heading>Contact</Heading>
      <Description>Feel free to reach out to me for any questions or opportunities!</Description>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Input type="email" name="user_email" placeholder="Your Email" required value={formData.user_email} onChange={handleChange} />
          <Input type="text" name="user_name" placeholder="Your Name" required value={formData.user_name} onChange={handleChange} />
          <Input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
          <TextArea name="message" rows="4" placeholder="Message" required value={formData.message} onChange={handleChange}></TextArea>
          <Button type="submit">Send</Button>
        </form>
        {message && <p className="mt-3 text-success">{message}</p>}
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
