import { Swiper, SwiperSlide } from "swiper/react";
import CardList from "../components/cardList/Card";

const ListPage = () => {
  return (
    <div className="list-page-container">
      <div className="list-cardlist-content">
        <div className="list-cardlist">
          <div className="label">인기 롤링 페이퍼 🔥</div>
          <CardList />
        </div>
        <div className="list-cardlist">
          <div className="label">최근에 만든 롤링 페이퍼⭐️</div>
          <Swiper
            className="mySwiper"
            pagination={true}
            pagination-type="progressbar"
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
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
