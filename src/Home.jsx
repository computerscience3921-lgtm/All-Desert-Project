import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import slider1 from './assets/slide 1.png'
import slider2 from './assets/slide 2.png'
import slider3 from './assets/slide 3.png'
import slider4 from './assets/slide 4.png'
import slider5 from './assets/slide 5.png'
import image1 from './assets/image 1.png'
import image2 from './assets/image 2.png'
import image3 from './assets/image 3.png'


function Home() {
  return (
    <>
    {/* Hero Section */}
      <section className="hero-section w-full h-full flex">
        <div className="content w-full h-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            APPLIANCE
            <span className="text-[#F7CF21]"> REPAIR <br /> SALES </span>,
            & <span className="text-[#F7CF21]"> PARTS !</span>
          </h1>

          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-300 mb-8">
            All Brands & Models Fast & Reliable Service
          </h3>
          <div className="btns flex justify-center items-center gap-3">
              <button className='py-2 px-6  bg-[#F7CF21] border border-[#F7CF21] rounded'>Call Us <i class="ri-arrow-right-long-fill"></i></button>
              <button className='py-2 px-6  bg-[#F7CF21] border border-[#F7CF21] rounded'>Book An Appointement <i class="ri-arrow-right-long-fill"></i></button>
          </div>
        </div>
      </section>

      {/* Sliders Section */}
      <section className="sliders-section *:w-full h-full flex justify-center  items-center py-8 px-4 md:px-16 lg:px-32">
        <Swiper
          spaceBetween={0}
          slidesPerView={5}
        >
          <SwiperSlide>
            <div className="slide-content">
              <img src={slider5} className="block h-40 w-full object-contain" alt="Slide 1" />
              <h2 className="text-lg text-center font-bold">Refrigerators</h2>  
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={slider2} className="block h-40 w-full object-contain" alt="Slide 2" /> 
              <h2 className="text-lg text-center font-bold">Washers</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={slider3} className="block h-40 w-full object-contain" alt="Slide 3" />
              <h2 className="text-lg text-center font-bold">Dryers</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={slider4} className="block h-40 w-full object-contain"  alt="Slide 4" />
              <h2 className="text-lg text-center font-bold">Microwaves</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="slide-content">
              <img src={slider1} className="block h-40 w-full object-contain" alt="Slide 5" />
              <h2 className="text-lg text-center font-bold">Refrigerators</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={slider2} className="block h-40 w-full object-contain" alt="Slide 6" />
              <h2 className="text-lg text-center font-bold">Washers</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={slider3} className="block h-40 w-full object-contain" alt="Slide 7" />
              <h2 className="text-lg text-center font-bold">Dryers</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={slider4} className="block h-40 w-full object-contain"  alt="Slide 8" />
              <h2 className="text-lg text-center font-bold">Microwaves</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>


      {/* Featured Products */}
      <section className="featured-products-section w-full bg-gray-50 py-12 px-4 sm:px-6 md:px-16 lg:px-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <article className="group relative min-h-[280px] overflow-hidden rounded bg-gray-900 shadow-md md:row-span-2 md:min-h-[420px]">
              <img
                src={image1}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Technician repairing a refrigerator"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
                <h3 className="text-xl font-bold sm:text-2xl">Expert Appliance Repair</h3>
                <button className='py-2 px-6 mt-4 text-black bg-[#F7CF21] border border-[#F7CF21] rounded'>Book An Appointement <i class="ri-arrow-right-long-fill"></i></button>
              </div>
            </article>

            <article className="group relative min-h-[210px] overflow-hidden rounded bg-gray-900 shadow-md">
              <img
                src={image2}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Washing machine"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent" />
              <div className="absolute inset-y-0 right-0 top-14 items-end p-5 text-white sm:p-7">
                <h3 className="text-xl font-bold sm:text-2xl">Washer Services</h3>
                <button className='py-2 px-6 mt-4 text-black bg-[#F7CF21] border border-[#F7CF21] rounded'>View All <i class="ri-arrow-right-long-fill"></i></button>
              </div>
            </article>

            <article className="group relative min-h-[210px] overflow-hidden rounded bg-gray-900 shadow-md">
              <img
                src={image3}
                className="absolute inset-0 h-full w-full object-cover object-[70%_center] transition-transform duration-500 group-hover:scale-105"
                alt="Refrigerator"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent" />
              <div className="absolute inset-y-0 left-0 top-14 items-end p-5 text-white sm:p-7">
                <h3 className="text-xl font-bold sm:text-2xl">Refrigerator Services</h3>
                <button className='py-2 px-6 mt-4 text-black bg-[#F7CF21] border border-[#F7CF21] rounded'>View All <i class="ri-arrow-right-long-fill"></i></button>
              </div>
            </article>
          </div>
        </div>
      </section>



      {/* Products Section */}
      <section className="products-section w-full py-12 px-4 sm:px-6 md:px-16 lg:px-32">
        <div className="w-full max-w-7xl">
          <h2 className="text-2xl font-bold text-center text-gray-900 sm:text-3xl">Our Products</h2>
          <div className="cards grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
             <div className="card1 bg-gray-100 p-4 rounded shadow-md">
               
            </div> 
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Home