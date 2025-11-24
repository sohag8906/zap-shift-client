import React from 'react';
import Banner from '../Banner/Banner';
import MiniCard from './miniCard/MiniCard';

import Brands from './brands/Brands';
import Reviews from '../Reviews/Reviews';
import Card2 from '../card/Card2';
import Info from '../Info/Info';
import Priority from './Priority/Priority.JSX';


const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div className='max-w-7xl  bg-gray-100 mt-8 m-auto'>
            <Banner></Banner>
            <MiniCard></MiniCard>
            <Card2></Card2>
            <Brands></Brands>
            <Info></Info>
            <Priority></Priority>
            <Reviews reviewsPromise={reviewsPromise} ></Reviews>
        </div>
    );
};

export default Home;