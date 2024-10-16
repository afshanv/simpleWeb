import Head from 'next/head';

export default function Services() {
  return (
    <>
      <Head>
        <title>Coding Website - Services</title>
      </Head>
      <div className="container">
        <h1>Our Services</h1>
        <p>We offer a variety of services to help you enhance your coding skills:</p>
        
        <div className="service-box">
          <h2>1. Online Coding Courses</h2>
          <p>Participate in our structured online courses, ranging from beginner to advanced levels.</p>
        </div>
        
        <div className="service-box">
          <h2>2. Code Review</h2>
          <p>Get feedback on your code from experienced developers to improve your coding practices.</p>
        </div>

        <div className="service-box">
          <h2>3. Community Support</h2>
          <p>Join our community forums to connect with other learners and share your experiences.</p>
        </div>
      </div>
    </>
  );
}
