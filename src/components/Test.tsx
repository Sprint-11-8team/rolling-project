import Button from './common/button';

const Test = () => {
  return (
    <>
      <div className="test">
        테스트!!
        <Button name="test-button" disabled>
          확인
        </Button>
      </div>
    </>
  );
};

export default Test;
