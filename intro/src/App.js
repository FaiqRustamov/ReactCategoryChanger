import React, { Component } from 'react'
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from 'reactstrap';
import alertify from "alertifyjs";
import { Routes, Route } from 'react-router-dom'
import NotFound from './NotFound';
import CartList from './CartList';
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';


export default class App extends Component {

  state = {
    currentCategory: '',
    products: [],
    cart: []
  }
  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id)
  };
  componentDidMount() {
    this.getProducts();
  }
  getProducts = (categoryId) => {
    let url = "http://localhost:4000/products"
    if (categoryId) {
      url += '?categoryId=' + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    }
    else {
      newCart.push({ product: product, quantity: 1 });

    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + "added to cart!", 2);

  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newCart })
    alertify.error(product.productName + "removed from cart!", 2);

  }


  render() {
    let productInfo = { title: "ProductList" }
    let categoryInfo = { title: "CategoryList" }
    return (


      <div className="App">
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo} />
            </Col>
            <Col xs="9">
              <Routes>
                <Route exact path="/" element={<ProductList
                    products={this.state.products}
                    addToCart={this.addToCart}
                    currentCategory={this.state.currentCategory}
                    info={productInfo} />
                } />
                <Route exact path="/cart"  element={<CartList
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart}
                   />}/>
                <Route path="*" element={<NotFound />} />
                <Route path="/form1" element={<FormDemo1></FormDemo1>}/>
                <Route path="/form2" element={<FormDemo2></FormDemo2>}/>

              </Routes>









            </Col>
          </Row>
        </Container>


      </div>

    );

  }
}

