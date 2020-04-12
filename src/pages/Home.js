import React from "react";
import {Link} from 'react-router-dom';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRoom from "../components/FeaturedRoom";

//Function component which can be imported by others have export default keyword used in front of them.
export default function Home() {
return(
    //<>....</> is used to ressolve the "adjacent jsx element must be wrapped... " Error 
    <>
    <Hero hero="defaultHero">
        <Banner title="Luxurious Rooms" subtitle="Deluxe rooms starting at $299">
        <Link to="/rooms" className="btn-primary">Our Rooms</Link>
    </Banner>
    </Hero>
    
    <Services />
    <FeaturedRoom />
    </>
);
}