import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import useTitleHook from '../../../hooks/useTitleHook';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    useTitleHook('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;