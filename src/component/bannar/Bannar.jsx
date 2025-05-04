import React from 'react';
import Slide from './slide';
import useFetch from '../../hook/useFetch';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Bannar = () => {
  const [data] = useFetch("home/banars/");

  return (
    <div className="bg-gray-100">
      <div className="relative mx-auto overflow-hidden shadow-md">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="h-64 md:h-96"
        >
          {data?.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Slide BannarImage={slide.banar_image} slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Bannar;
