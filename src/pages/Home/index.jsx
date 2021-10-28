import styled from "styled-components"
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import Categories from "../../components/Categories";
import Products from "../../components/Products";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}

const Container = styled.div``
export default Home
