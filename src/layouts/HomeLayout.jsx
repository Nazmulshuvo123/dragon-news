import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            {/* Header */}
           <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
           </header>

            {/* Navbar */}
           <nav className='w-11/12 mx-auto py-2'>
                 <Navbar></Navbar>
           </nav>

           {/* Main  */}
           
           <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-2'>
               <aside className='left col-span-3'>Left side content</aside>
               <section className='col-span-6'>Main content</section>
               <aside className='col-span-3'>Right side</aside>
           </main>
        </div>
    );
};

export default HomeLayout;