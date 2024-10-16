import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Coding Website - Contact</title>
      </Head>
      <div className="container">
        <h1>Contact Us</h1>
        <p>Feel free to reach out if you have any questions or suggestions.</p>

        <main className="contact-form-section">
          <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"  required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </main>

      </div>
    </>
  );
}
