// This page will house all of my contact information.
 import '../../styles/Contact.css';

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>Email:</p>
      <form action= "https://formspree.io/CRNaro@gmail.com" method="POST">
        <label class="name-field" >
            <input type="text" name="name" placeholder="Your Name" />
        </label>
        <label class="email-field" >
            <input  type="email" name="_replyto" placeholder="Your Email" />
        </label>
        <label class="message-field" >
            <textarea name="message" placeholder="Message Me"></textarea>
        </label>
        <button type="submit">Send</button>
        </form>
    </div>
  );
}

export default Contact;
