import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const ButtonSection = () => {
  return (
    <section className="button-section">
      <Link to="/post">
        <Button addClassName="viewMoreButton" disabled={false}>
          {" "}
          구경해보기
        </Button>
      </Link>
    </section>
  );
};

export default ButtonSection;
