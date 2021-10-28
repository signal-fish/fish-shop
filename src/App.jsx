import styled from "styled-components"
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/product" component={Product} />
          <Route path="/productlist" component={ProductList} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route component={NotFound} status={404} />
        </Switch>
      </Container>
    </Router>
  );
}

const Container = styled.div``
export default App
