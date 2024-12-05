import Button from "../common/Button";
interface CreateButtonProps {
  inputValue: string;
}
const CreateButton = ({ inputValue }: CreateButtonProps) => {
  return (
    <section className="post-create-button-container">
      <Button
        addClassName="post-create-button"
        type="submit"
        disabled={inputValue.length >= 2 ? false : true}
      >
        생성하기
      </Button>
    </section>
  );
};

export default CreateButton;
