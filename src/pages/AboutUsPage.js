import React from 'react';
import Header from '../components/Header';
import SecurityPrivacySection from '../components/SecurityPrivacySection';
import UserFeedbackSection from '../components/UserFeedbackSection';
import { Link } from 'react-router-dom';

function AboutUsPage() {
   return (
     <div className="about-us">
       <Header />
       <h1>About us</h1>
       {/* About us page content */}
       <SecurityPrivacySection />
       <UserFeedbackSection />
       <Link to="/">Return to Home Page</Link> {/* Return to HomePage */}
     </div>
   );
}

export default AboutUsPage;