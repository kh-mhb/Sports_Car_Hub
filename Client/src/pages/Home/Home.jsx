import React from 'react';
import LeftNav from '../LeftNav/LeftNav';
import HomeCarousel from './HomeCarousel';


const Home = () => {
    return (
        <div >

            <div className="hero h-full " style={{ backgroundImage: `url("https://i.ibb.co/xh6yx86/mohit-suthar-0u-ZMa-Y-Ho4-unsplash.jpg")` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-bold font-serif  italic"> <span className='' >Sports</span> Car Hub</h1>
                        <p className="mb-5 text-xl italic text-stone-50  font-extralight "  >Welcome to our car toys shop! We specialize in providing a wide variety of high-quality toy cars for kids of all ages. From classic cars to modern sports cars, we have something for everyone. Our goal is to provide a fun and exciting shopping experience while offering affordable prices and excellent customer service. Thank you for choosing our car toys shop for all your toy car needs!</p>

                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={`https://i.ibb.co/hgtWwBZ/sd.png`} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h2 className='text-4xl font-bold italic mb-2'>Hey  <span className='text-red-700' > !!</span> </h2>
                        <p className='text-xl font-mono p-3 '>
                            Are you looking for the perfect car toys to ignite your child's imagination and provide endless hours of fun? Look no further! In this article, we have curated a list of the top 10 must-have car toys for kids. From remote-controlled cars to track sets and construction vehicles, these toys are sure to captivate young automobile enthusiasts and transport them to a world of excitement. Let's rev up the engines and explore the world of car toys!
                        </p>
                    </div>
                </div>
            </div>

            <HomeCarousel></HomeCarousel>


        </div>
    );
};

export default Home;