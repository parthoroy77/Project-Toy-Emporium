import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import useTitleHook from '../../../hooks/useTitleHook';
import Testimonial from '../Testimonial/Testimonial';
import DiscountPanel from '../DiscountPanel/DiscountPanel';

const Home = () => {
    useTitleHook('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <DiscountPanel></DiscountPanel>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;