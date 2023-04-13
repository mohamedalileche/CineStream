import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import GF from "../Assets/GF.jpg"
import GFB from "../Assets/GFbreaking.jpg"



export default function SliderComponent() {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-90"
                        src={GF}
                        alt="image slide 1"
                    />
                    
                    <h1 className="py-[20px] justify-center logo text-[30px] w-full text-3xl font-bold text-white text-center items-center">Les plus pertinent</h1>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-90"
                        src={GFB}
                        alt="image slide 2"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
