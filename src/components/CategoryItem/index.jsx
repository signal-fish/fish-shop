import styled from "styled-components";
import { mobile, tablet, tabletPro } from "../../responsive";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link
          to="/productlist"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <Button>SHOP NOW</Button>
        </Link>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "60vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 28px;

  ${mobile({
    fontSize: "26px",
  })}

  ${tablet({
    fontSize: "56px",
  })}

  ${tabletPro({
    fontSize: "20px",
  })}
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;

  ${tablet({
    fontSize: "36px",
  })}

  ${tabletPro({
    fontSize: "16px",
  })}
`;

export default CategoryItem;
