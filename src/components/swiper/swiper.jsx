import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import s from './swiper.module.css';

export const SwiperComponent = ({ cast }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
    >
      {cast?.map((character, id, original_name, profile_path) => (
        <div className={s.listbox}>
          <div key={id} className={s.listCastItem}>
            {profile_path && (
              <img
                width="120"
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={original_name}
                className={s.image}
              />
            )}
            <p className={s.name}>{original_name}</p>
            <p className={s.name}>{character}</p>
          </div>
        </div>
      ))}
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};
