import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import '../../styles/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function ContactForm() {
  const [state, handleSubmit] = useForm("mqkrlavd");
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (state.succeeded) {
      return <p>Thank you for contacting me.  I will respond as soon as possible.</p>;
  }
  return (
    <div className="contact-section">
      <h1>Please Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <label className="name-field" >
            <input type="text" 
                    name="name" 
                    className={`form-control ${nameTouched && name === "" ? "is-invalid" : ""}`} 
                    placeholder={nameTouched && name === "" ? "Field required" : "Your Name"} 
                    onChange={e => setName(e.target.value)}
                    onBlur={() => setNameTouched(true)}
                    />
        </label>
        <label htmlFor="email" className="email-field">
         
          <input
            id="email"
            type="email" 
            name="email"
            className={`form-control ${emailTouched && email === "" ? "is-invalid" : ""}`} 
            placeholder={emailTouched && email === "" ? "Field required" : "Your Email"} 
            onChange={e => setEmail(e.target.value)}
            onBlur={() => setEmailTouched(true)}
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </label>
        <label className="message-field" >
            <textarea name="message" 
           className={`form-control ${messageTouched && message === "" ? "is-invalid" : ""}`} 
           placeholder={messageTouched && message === "" ? "Field required" : "Your Message"} 
           onChange={e => setMessage(e.target.value)}
            onBlur={() => setMessageTouched(true)}
            ></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
        </label>
        <button type="submit" className="button" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;