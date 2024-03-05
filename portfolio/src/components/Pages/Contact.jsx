// This page will house all of my contact information.
import { useState } from 'react';
 import '../../styles/Contact.css';
 import 'bootstrap/dist/css/bootstrap.min.css'

function Contact() {
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!email) {
      setEmailError('Email is required');
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields");
    } else {
    console.log(name, email, message);
    
  }
  }

  return (
    <div className="contact-section">
      <h1>Contact</h1>
      <p>Email:</p>
      <form onSubmit={handleSubmit} action= "https://formspree.io/CRNaro@gmail.com" method="POST">
        <label className="name-field" >
            <input type="text" 
                    name="name" 
                    className={`form-control ${nameTouched && name === "" ? "is-invalid" : ""}`} 
                    placeholder={nameTouched && name === "" ? "Field required" : "Your Name"} 
                    onChange={e => setName(e.target.value)}
                    onBlur={() => setNameTouched(true)}
                    />
        </label>
        <label className="email-field" >
            <input  type="email" 
                    name="_replyto" 
                    className={`form-control ${emailTouched && email === "" ? "is-invalid" : ""}`} 
                    placeholder={emailTouched && email === "" ? "Field required" : "Your Email"} 
                    onChange={handleEmailChange}  //e => setEmail(e.target.value)
                    onBlur={() => setEmailTouched(true)}
                    />
        </label>
        <label className="message-field" >
            <textarea name="message" 
           className={`form-control ${messageTouched && message === "" ? "is-invalid" : ""}`} 
           placeholder={messageTouched && message === "" ? "Field required" : "Your Message"} 
           onChange={e => setMessage(e.target.value)}
            onBlur={() => setMessageTouched(true)}
            ></textarea>
        </label>
        <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default Contact;
