import { Container } from 'postcss';
import React from 'react';
import { Link } from 'react-router-dom';
import racingCar from '../../../public/spor.png'

const HomeCarousel = () => {
    return (
        <div className='mt-4'>
            <div className='text-center font-bold text-3xl p-3' > Find  <span className='italic text-red-500 text-4xl' >Your Car...</span></div>
            <div className=" flex justify-center flex-wrap rounded-box  container mx-auto">
                <div className="carousel-item mx-2 hover:scale-105">
                    <div data-aos="fade-right">
                        <Link to={`/catagory/1`}> <img src="https://m.media-amazon.com/images/I/81Bx9T8G65L.jpg" alt="Drink" style={{ width: '300px', height: '300px' }} /></Link>

                    </div>


                </div>
                <div className="carousel-item mx-2 hover:scale-105" data-aos="flip-left">
                    <Link to={`/catagory/2`}> <img src={racingCar} alt="Drink" style={{ width: '300px', height: '300px' }} /></Link>

                </div>
                <div className="carousel-item mx-2 hover:scale-105" data-aos="fade-left">
                    <Link to={`/catagory/3`}>        <img src="https://5.imimg.com/data5/UL/GK/MY-42366547/plastic-truck-toy-500x500.jpg" alt="Drink" style={{ width: '300px', height: '300px' }} /></Link>

                </div>
            </div>
        </div>
    );
};

export default HomeCarousel;
