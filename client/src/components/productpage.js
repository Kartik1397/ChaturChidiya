import React from 'react';
import { Link } from 'react-router-dom';
import './productpage.css';

class ProductPage extends React.Component {
  constructor() {
    super();
    this.state = {
      catagory: {
        stationary: {
          productTypes: [
            {
              name:'notebook',
              products: ['p1', 'p2', 'p3', 'p4', 'p5']
            },
            {
              name:'pen stands',
              products: ['*p1', 'p2', 'p3', 'p4', 'p5']
            },
            {
              name:'paper weight',
              products: ['**p1', 'p2', 'p3', 'p4', 'p5']
            },
            {
              name:'laptop stands',
              products: ['***p1', 'p2', 'p3', 'p4', 'p5']
            }
          ]
        },
        homedecor: {
          productTypes: [
            {
              name:'*notebook',
              products: ['p1', 'p2', 'p3', 'p4', 'p5']
            },
            {
              name:'pen stands',
              products: ['p1', '*p2', 'p3', 'p4', 'p5']
            },
            {
              name:'paper weight',
              products: ['p1', '**p2', 'p3', 'p4', 'p5']
            },
            {
              name:'laptop stands',
              products: ['p1', '***p2', 'p3', 'p4', 'p5']
            }
          ]
        },
        gardendecor: {
          productTypes: [
            {
              name:'**notebook',
              products: ['p1', 'p2', 'p3', 'p4', 'p5']
            },
            {
              name:'pen stands',
              products: ['p1', 'p2', '**p3', 'p4', 'p5']
            },
            {
              name:'paper weight',
              products: ['p1', 'p2', '***p3', 'p4', 'p5']
            },
            {
              name:'laptop stands',
              products: ['p1', 'p2', '****p3', 'p4', 'p5']
            }
          ]
        },
        lightingsol: {
          productTypes: [
            {
              name:'***notebook',
              products: ['p1', 'p2', 'p3', 'p4', 'p5']
            },
            {
              name:'pen stands',
              products: ['p1', 'p2', 'p3', '*p4', 'p5']
            },
            {
              name:'paper weight',
              products: ['p1', 'p2', 'p3', '**p4', 'p5']
            },
            {
              name:'laptop stands',
              products: ['p1', 'p2', 'p3', '***p4', 'p5']
            }
          ]
        }
      },
      active: {
        catagory: 'stationary',
        subcatagory: 0,
      }
    }

    this.changeCatagory = this.changeCatagory.bind(this);
    this.changeSubcatagory = this.changeSubcatagory.bind(this);
  }

  changeCatagory(e) {
    console.log(e);
    this.setState({ 
      active: {
        catagory: e.target.id,
        subcatagory: 0
      }
    })

    var elems = document.querySelectorAll('.catagory');
    console.log(elems);
    elems.forEach(e => {
      e.className = "catagory";
    })
    var elems = document.querySelectorAll('.product-type');
    console.log(elems);
    elems.forEach(e => {
      e.className = "product-type";
    })

    document.getElementById(e.target.id).className += " do-bold";
    document.getElementById("0").className += " do-bold";
  }

  changeSubcatagory(e) {
    console.log(e);
    this.setState({ 
      active: {
        ...this.state.active,
        subcatagory: e.target.id
      }
    })
    var elems = document.querySelectorAll('.product-type');
    console.log(elems);
    elems.forEach(e => {
      e.className = "product-type";
    })
    document.getElementById(e.target.id).className += " do-bold";
  }
  
  render() {
    var productTypes = this.state.catagory[this.state.active.catagory].productTypes.map((product, key) => {
      if (this.state.active.subcatagory === key) {
        return (<div id={key} class="product-type do-bold" onClick={this.changeSubcatagory}>{product.name}</div>);
      }
      return (<div id={key} class="product-type" onClick={this.changeSubcatagory}>{product.name}</div>);
    });
    console.log('hi');
    console.log(this.state.catagory[this.state.active.catagory].productTypes[this.state.active.subcatagory]);
    var products = this.state.catagory[this.state.active.catagory].productTypes[this.state.active.subcatagory].products.map(product => {
      return (<div class="product"><Link to={{
        pathname:'/product/detail',
        state: { name: product }
      }} style={{ textDecoration: 'none', color: 'black' }}>{product}</Link></div>);
    });
    return (
      <>
        <div class="side-menu"></div>
        <div class="product-logo-space"></div>
        <div class="productpage">
          <div class="product-catagories">
            <div id="stationary" class="catagory do-bold" onClick={this.changeCatagory}>Stationary</div>
            <div id="homedecor" class="catagory" onClick={this.changeCatagory}>Home Decor</div>
            <div id="gardendecor" class="catagory" onClick={this.changeCatagory}>Garden Decor</div>
            <div id="lightingsol" class="catagory" onClick={this.changeCatagory}>Lighting Solution</div>
          </div>
          <div class="product-line">
            { productTypes }
            {/* <div class="product-type">notebooks</div>
            <div class="product-type">pen stands</div>
            <div class="product-type">paper weight</div>
            <div class="product-type">laptop stands</div> */}
          </div>
          <div class="products-container">
            { products }
            {/* <div class="product">sketch book</div>
            <div class="product">sketch book</div>
            <div class="product">sketch book</div>
            <div class="product">sketch book</div>
            <div class="product">sketch book</div>
            <div class="product">sketch book</div>
            <div class="product">sketch book</div>
            <div class="product">sketch book</div>
            <div class="product">sketch book</div>
            <div class="product">sketch book</div>
            <div class="product">sketch book</div> */}
          </div>
        </div>
      </>
    );
  }
}
export default ProductPage;
