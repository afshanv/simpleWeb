import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>Coding Website - About Us</title>
      </Head>
      <div className="container">
        <h1>About Us</h1>
        <p>Welcome to our coding website! We are dedicated to providing high-quality resources for aspiring coders. Our mission is to make coding accessible to everyone, regardless of their background.</p>
        
        <h2>Our Vision</h2>
        <p>We envision a world where everyone has the opportunity to learn coding and leverage it for their personal and professional growth.</p>

        <h2>Our Team</h2>
        <p>We are a team of passionate developers and educators who believe in the power of coding. Together, we aim to provide the best learning experience for our users.</p>

        <h2>Get in Touch</h2>
        <p>If you have any questions or feedback, feel free to reach out to us through our contact page.</p>
      </div>
    </>
  );
}
