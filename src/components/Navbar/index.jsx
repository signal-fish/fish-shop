import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              <Image src="assets/fish.png" />
            </Link>
          </Logo>
        </Center>
        <Right>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: "none", color: "#000" }}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <MenuItem>
            <Link to="/cart" style={{ textDecoration: "none", color: "#000" }}>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  ${mobile({
    marginLeft: "10px",
  })}
`;

const Input = styled.input`
  border: none;

  &:focus {
    outline: none;
  }

  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ display: "none" })}
`;

const Logo = styled.div`
  font-weight: bold;

  &:hover {
    opacity: 0.6;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({
    flex: 3,
    justifyContent: "center",
  })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  &:hover {
    opacity: 0.6;
  }

  ${mobile({
    fontSize: "12px",
    marginLeft: "10px",
  })}
`;

export default Navbar;
