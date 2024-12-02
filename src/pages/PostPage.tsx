import Button from "../components/common/Button";

const PostPage = () => {
  return (
    <form className="post-page-container">
      <div className="name-input-container">
        <h2>To.</h2>
        <input placeholder="받는 사람 이름을 입력해 주세요"></input>
      </div>
      <div className="background-color-container">
        <h2>배경화면을 선택해 주세요.</h2>
        <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
      </div>
      <div className="color-img-container">
        <button>컬러</button>
        <button>이미지</button>
      </div>
      <div className="color-grid-container">
        <div className="color-grid-item"></div>
        <div className="color-grid-item"></div>{" "}
        <div className="color-grid-item"></div>{" "}
        <div className="color-grid-item"></div>
      </div>
      <div className="post-create-button-container">
        <Button addClassName="post-create-button" disabled={false}>
          생성하기
        </Button>
      </div>
    </form>
  );
};

export default PostPage;
