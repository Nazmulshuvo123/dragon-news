import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';

const HomeLayout = () => {
    return (
        <div>
           <header>
                <Header></Header>
                <section className='w-10/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
           </header>

           <nav></nav>
           <main></main>
        </div>
    );
};

export default HomeLayout;