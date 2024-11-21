import Button from './common/Button';

const Test = () => {
  return (
    <>
      <div className="test">
        테스트!!
        <Button addClassName="test-button" disabled>
          확인
        </Button>
      </div>
    </>
  );
};

export default Test;
