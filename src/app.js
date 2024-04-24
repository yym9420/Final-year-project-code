import React from 'react';
import './App.css';

function App() {
   return (
     <div className="App">
       <header className="App-header">
         <h1>Medical Question and Answer System</h1>
         <div className="search-box">
           <input type="text" placeholder="Enter your question" />
           <button>Search</button>
         </div>
       </header>

       <section className="categories">
         <h2>Theme classification</h2>
         <ul>
           <li>Heart Health</li>
           <li>Diet and Nutrition</li>
           <li>Child Health</li>
           {/* Add more topic categories */}
         </ul>
       </section>

       <section className="latest-articles">
         <h2>Latest articles or popular questions</h2>
         <ul>
           <li><a href="#">How to prevent colds? </a></li>
           <li><a href="#">Heart disease symptoms and treatments</a></li>
           <li><a href="#">Recommended healthy drinks in your diet</a></li>
           {/* Add more latest articles or popular questions */}
         </ul>
       </section>

       <section className="user-actions">
         <h2>User operations</h2>
         <div className="user-actions-buttons">
           <button>Login</button>
           <button>Register</button>
           {/* Add other user action buttons */}
         </div>
       </section>

       <section className="expert-team">
         <h2>Introduction to the expert team</h2>
         <ul>
           <li>Dr. Zhang San - Cardiologist</li>
           <li>Dr. John Doe - Nutritionist</li>
           <li>Dr. Wang Wu - Pediatrician</li>
           {/* Add more expert introductions */}
         </ul>
       </section>

       <section className="faq">
         <h2>FAQ</h2>
         <ul>
           <li><strong>Q:</strong> How to prevent the flu? </li>
           <li><strong>Answer:</strong> Maintain good personal hygiene, get vaccinated in time, etc. </li>
           {/* Add more FAQs and answers */}
         </ul>
       </section>

       <section className="user-feedback">
         <h2>User feedback</h2>
         <p>Please leave your feedback in the form below:</p>
         <form>
           <input type="text" placeholder="your name" />
           <input type="email" placeholder="your email address" />
           <textarea placeholder="Please enter your feedback" />
           <button>Submit</button>
         </form>
       </section>

       <section className="security-privacy">
         <h2>Security and Privacy Instructions</h2>
         <p>We are committed to protecting your privacy and security. Your personal information will be strictly protected. </p>
       </section>

       <section className="social-media">
         <h2>Social media links</h2>
         <ul>
           <li><a href="#">Facebook</a></li>
           <li><a href="#">Twitter</a></li>
           <li><a href="#">Instagram</a></li>
           {/* Add more social media links */}
         </ul>
       </section>

       <footer>
         <p>&copy; 2024 Medical Question and Answer System</p>
       </footer>
     </div>
   );
}

export default App;