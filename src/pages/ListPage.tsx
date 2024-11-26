import { Swiper, SwiperSlide } from "swiper/react";
import CardList from "../components/cardList/Card";

const ListPage = () => {
  return (
    <div className="list-page-container">
      <div className="label">인기 롤링 페이퍼</div>
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
        <SwiperSlide>
          <CardList />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ListPage;
