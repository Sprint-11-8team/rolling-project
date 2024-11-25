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
          <CardList />
        </div>
      </div>
    </div>
  );
};

export default ListPage;
