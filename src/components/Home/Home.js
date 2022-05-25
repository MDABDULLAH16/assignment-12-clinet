import React from 'react';
import Cards from '../Cards/Cards';
import Banner from '../Banner/Banner';
import Summary from '../Summary/Summary';
import MyRevirewMap from '../MyrevirewMap/MyrevirewMap';



const Home = () => {
    return (
        <div>
            <h1>this is home</h1>
            <Banner></Banner>
            <Cards></Cards>
            <MyRevirewMap></MyRevirewMap>
            <Summary></Summary>
        </div>
    );
};

export default Home;