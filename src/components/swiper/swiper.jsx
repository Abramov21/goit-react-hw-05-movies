import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import s from './swiper.module.css';
import { FreeMode, Pagination } from 'swiper/modules';

export const SwiperComponent = ({ cast }) => {
  return (
    <Swiper
      //   spaceBetween={10}
      //   slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
      modules={[FreeMode, Pagination]}
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      className="mySwiper"
    >
      {cast?.map(({ character, id, original_name, profile_path }) => (
        <SwiperSlide>
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
