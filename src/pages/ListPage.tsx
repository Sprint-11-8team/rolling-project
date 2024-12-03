import { Swiper, SwiperSlide } from "swiper/react";
import CardList from "../components/cardList/Card";

const ListPage = () => {
  return (
    <div className="list-page-container">
      <div className="list-cardlist-content">
        <div className="list-cardlist">
          <div className="label">인기 롤링 페이퍼 🔥</div>
          <Swiper
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 140,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 140,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 140,
              },
            }}
            loop={true}
            navigation={true}
          >
            <SwiperSlide>
              <CardList />
            </SwiperSlide>
            <SwiperSlide>
              <CardList />
            </SwiperSlide>
            <SwiperSlide>
              <CardList />
            </SwiperSlide>
            <SwiperSlide>
              <CardList />
            </SwiperSlide>
            <SwiperSlide>
              <CardList />
            </SwiperSlide>
            <SwiperSlide>
              <CardList />
            </SwiperSlide>
            <SwiperSlide>
              <CardList />
            </SwiperSlide>
            <SwiperSlide>
              <CardList />
            </SwiperSlide>
            <SwiperSlide>
              <CardList />
            </SwiperSlide>
            <SwiperSlide>
              <CardList />
            </SwiperSlide>
            <SwiperSlide>
              <CardList />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="list-cardlist">
          <div className="label">최근에 만든 롤링 페이퍼⭐️</div>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
