import CardList from "../components/cardList/Card";

const ListPage = () => {
  return (
    <div className="list-page-container">
      <div className="label">인기 롤링 페이퍼</div>
      <CardList />
    </div>
  );
};

export default ListPage;
