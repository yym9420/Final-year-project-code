import React from 'react';
import FAQSection from '../components/FAQSection';
import { Link } from 'react-router-dom';

function FAQPage() {
   return (
     <div className="faq-page">
       <h1>FAQ</h1>
       <FAQSection />
       <Link to="/">Return to homepage</Link>
     </div>
   );
}

export default FAQPage;