import React from 'react';
import CategorySection from '../components/CategorySection';
import ExpertTeamSection from '../components/ExpertTeamSection';
import LatestArticlesSection from '../components/LatestArticlesSection';
import SearchBox from '../components/SearchBox';
import { Link } from 'react-router-dom';

function HomePage() {
   return (
     <div className="home">
       <CategorySection />
       <ExpertTeamSection />
       <LatestArticlesSection />
       <SearchBox />
       <Link to="/faq">View FAQ</Link> {/* Jump to FAQ page */}
       <Link to="/about">About Us</Link> {/* Jump to About Us page */}
     </div>
   );
}

export default HomePage;