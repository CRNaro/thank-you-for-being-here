// This page will house all of my contact information.

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>Email:</p>
      <form action= "https://formspree.io/CRNaro@gmail.com" method="POST">
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <label>
            Email:
            <input type="email" name="_replyto" />
        </label>
        <label>
            Message:
            <textarea name="message"></textarea>
        </label>
        <button type="submit">Send</button>
        </form>
    </div>
  );
}

export default Contact;
