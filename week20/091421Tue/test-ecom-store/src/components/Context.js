import React, { Component } from 'react';
import { storeProducts, detailProduct } from '../data';
const ProductContext = React.createContext();

class ProductProvider extends Component {

  state = {
    products: [],
    detailProduct:detailProduct,
    cart:[],
    modalOpen: false,
    modalProduct: detailProduct, 
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    });

    this.setState(() => {
      return {products: tempProducts}
    })
  }

  componentDidMount() {
    this.setProducts();
  }

  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  }

  handleDetail = (id) => {
    console.log("hello from detail");
    const product = this.getItem(id);
    this.setState(() => {
      return {
        ...this.state,
        detailProduct: product
      };
    })
  }

  increment = (id) => {
    console.log("increment ", id);
  }

  decrement = (id) => {
    console.log("decrement ", id);
  }

  removeItem = (id) => {
    console.log("remove item ", id);
  }

  clearCart = () => {
    console.log("clear cart");
  }

  addToCart = (id) => {
    console.log("hello from add to cart!!!!", id);
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    product.total = product.price;
    console.log("PPPPPP", product);
    this.setState(() => {
      return {
        // ...this.state,
        products: tempProducts,
        cart:[...this.state.cart, product]
      }
    }, () => console.log("STATE", this.state));
  }

  openModal = id => {
    console.log("OPEN MODAL");
    const product = this.getItem(id);
    this.setState(() => {
      return {
        ...this.state,
        modalProduct: product,
        modalOpen: true
      }
    })
  }

  closeModal = () => {

    this.setState(() => {
      return {
        ...this.state,
        modalOpen: false
      }
    })
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state, 
        handleDetail: this.handleDetail, 
        addToCart:this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
     
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer}