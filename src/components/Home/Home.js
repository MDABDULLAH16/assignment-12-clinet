import React from 'react';
import Cards from '../Cards/Cards';
import Banner from '../Banner/Banner';
import Summary from '../Summary/Summary';
import MyReviewMap from '../MyReviewMap/MyrevirewMap';

const Home = () => {
    return (
        <div>
            <h1>this is home</h1>
            <Banner></Banner>
            <Cards></Cards>
            <MyReviewMap></MyReviewMap>
            <Summary></Summary>
        </div>
    );
};

export default Home;