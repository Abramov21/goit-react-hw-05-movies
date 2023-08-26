// // import { Swiper, SwiperSlide } from 'swiper/react';

// // // Import Swiper styles
// // import 'swiper/css';
// // import 'swiper/css/scrollbar';

// // import s from './swiper.module.css';
// import { Navigation, Pagination } from 'swiper/modules';
// // import 'swiper/css/navigation';

// import React from 'react';
// // import SwiperCore, { Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/swiper-bundle.min.css';

// // SwiperCore.use([Navigation, Pagination]);
// export const SwiperComponent = ({ cast }) => {
//   const items = [
//     {
//       id: 1,
//       imageUrl: 'url_to_image_1',
//       title: 'Item 1',
//       description: 'Description for Item 1',
//     },
//     {
//       id: 2,
//       imageUrl: 'url_to_image_2',
//       title: 'Item 2',
//       description: 'Description for Item 2',
//     },
//     // інші елементи
//   ];

//   return (
//     <Swiper
//       loop={false}
//       spaceBetween={10}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={swiper => console.log(swiper)}
//       //   scrollbar={{
//       //     hide: true,
//       //   }}
//       //   rewind={true}
//       navigation={true}
//       modules={[Navigation]}
//     >
//       {/* {cast.map(({ character, id, original_name, profile_path }) => (
//         <SwiperSlide className={s.swiper__slide} key={id}>
//           <div className={s.listbox}>
//             <div key={id} className={s.listCastItem}>
//               {profile_path && (
//                 <img
//                   width="120"
//                   src={`https://image.tmdb.org/t/p/w500${profile_path}`}
//                   alt={original_name}
//                   className={s.image}
//                 />
//               )}
//               <p className={s.name}>{original_name}</p>
//               <p className={s.name}>{character}</p>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))} */}
//       {items.map(item => (
//         <SwiperSlide key={item.id}>
//           <div>
//             <img src={item.imageUrl} alt={item.title} />
//             <h3>{item.title}</h3>
//             <p>{item.description}</p>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.module.css';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

export const SwiperComponent = ({ cast }) => {
  const array = [
    { name: 1 },
    { name: 2 },
    { name: 3 },
    { name: 4 },
    { name: 5 },
    { name: 6 },
  ];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {cast.map(cast => (
          <div>
            <SwiperSlide>
              <h1>{cast.id}</h1>
            </SwiperSlide>
          </div>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
};
