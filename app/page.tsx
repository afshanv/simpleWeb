import Head from 'next/head';
import React from 'react'; 

const HomePage = () => {
  return (
    <>
      {/*  HTML head section */}
      <Head>
        <title>Coding Website - Home</title>
      </Head>

      {/* Main container */}
      <div className="container">
        <h1>Welcome to the Coding Website</h1>
        <p>This is a platform for learning to code through tutorials, blogs, and community.</p>

        <div className="intro-section">
           <div className="text-box">
             <h2>Why Learn to Code?</h2>
           <p>
               Coding is an essential skill in today's digital world. Whether you're looking to build websites,
               develop applications, or analyze data, coding provides the foundation for numerous career opportunities.
             </p>
         </div>
         <img src="https://www.hubspot.com/hubfs/how-to-start-coding-1.jpg" alt="Coding" width={400} height={300} />
          </div> 

           <div className="image-gallery">
              <h2>Featured Tutorials</h2>
              <div className="image-box">
                 <img src="https://i.ytimg.com/vi/__izua1kKeI/maxresdefault.jpg" alt="" width={400} height={250} />
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVWPcVB00pQqkjDJPR6P2rhZ5eOOpxc8jlw&s" alt="" width={400} height={250} />
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbEIablBM3Z18-SMDnx4rSXTpUUBZFV-lbHg&s" alt="" width={400} height={250} />
            </div>
          </div>
     
      </div>
   
        </>
  );
};

export default HomePage;     

