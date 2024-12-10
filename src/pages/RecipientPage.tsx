import { useLocation } from "react-router-dom";

import SubHeader from "../components/common/SubHeader";
import Header from "../components/common/Header";
const RecipientPage = () => {
  const location = useLocation();
  const data = location.state; // 전달된 데이터
  const backgroundStyle = data?.backgroundImageURL
    ? {
        backgroundImage: `url(${data.backgroundImageURL})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }
    : { backgroundColor: data?.backgroundColor };
  console.log(data); // { id: 1234, name: "John Doe", backgroundColor: "blue", ... }
  return (
    <>
      <Header />
      <SubHeader />
      <div style={{ ...backgroundStyle, height: "100vh", width: "100%" }}></div>
    </>
  );
};

export default RecipientPage;
