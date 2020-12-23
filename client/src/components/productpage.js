import React from 'react';
import './productpage.css';
import ProductDetailPage from './productdetail';

import cclogo from '../img/cclogo.png';
import inoutlogo from '../img/inoutlogo.png';
import stlogo from '../img/stlogo.png';
import stationaryLogo from '../img/stationary.png';
import homeDecorLogo from '../img/home-decor.png';
import gardenDecorLogo from '../img/garden-decor.png';
import lightSolLogo from '../img/light-sol.png';
import notebookLogo from '../img/notebook.png';
import pencilLogo from '../img/pencil.png';
import penstandLogo from '../img/pen-stand.png';
import penweightLogo from '../img/paper-weight.png';
import laptopstandLogo from '../img/laptop-stand.png';
import aeLogo from '../img/long-main.svg';

class ProductPage extends React.Component {
  constructor() {
    super();
    this.state = {
      catagory: {
        stationary: {
          productTypes: [
            {
              name:'notebook',
              img: notebookLogo,
              products: ['p1', 'p2', 'p3', 'p4', 'p5']
            },
            {
              name:'pen stands',
              img: pencilLogo,
              products: ['*p1', 'p2', 'p3', 'p4', 'p5']
            },
            {
              name:'paper weight',
              img: penstandLogo,
              products: ['**p1', 'p2', 'p3', 'p4', 'p5']
            },
            {
              name:'pen weight',
              img: penweightLogo,
              products: ['****p1', 'p2', 'p3', 'p4', 'p5']
            },
            {
              name:'laptop stands',
              img: laptopstandLogo,
              products: ['***p1', 'p2', 'p3', 'p4', 'p5']
            }
          ]
        },
        homedecor: {
          productTypes: [
            {
              name:'*notebook',
              img: notebookLogo,
              products: ['p1', 'p2', 'p3', 'p4', 'p5']
            },
            {
              name:'pen stands',
              img: pencilLogo,
              products: ['p1', '*p2', 'p3', 'p4', 'p5']
            },
            {
              name:'paper weight',
              img: penweightLogo,
              products: ['p1', '**p2', 'p3', 'p4', 'p5']
            },
            {
              name:'laptop stands',
              img: laptopstandLogo,
              products: ['p1', '***p2', 'p3', 'p4', 'p5']
            }
          ]
        },
        gardendecor: {
          productTypes: [
            {
              name:'**notebook',
              img: notebookLogo,
              products: ['p1', 'p2', 'p3', 'p4', 'p5']
            },
            {
              name:'pen stands',
              img: pencilLogo,
              products: ['p1', 'p2', '**p3', 'p4', 'p5']
            },
            {
              name:'paper weight',
              img: penweightLogo,
              products: ['p1', 'p2', '***p3', 'p4', 'p5']
            },
            {
              name:'laptop stands',
              img: laptopstandLogo,
              products: ['p1', 'p2', '****p3', 'p4', 'p5']
            }
          ]
        },
        lightingsol: {
          productTypes: [
            {
              name:'***notebook',
              img: notebookLogo,
              products: ['p1', 'p2', 'p3', 'p4', 'p5']
            },
            {
              name:'pen stands',
              img: pencilLogo,
              products: ['p1', 'p2', 'p3', '*p4', 'p5']
            },
            {
              name:'paper weight',
              img: penweightLogo,
              products: ['p1', 'p2', 'p3', '**p4', 'p5']
            },
            {
              name:'laptop stands',
              img: laptopstandLogo,
              products: ['p1', 'p2', 'p3', '***p4', 'p5']
            }
          ]
        }
      },
      active: {
        catagory: 'stationary',
        subcatagory: 0,
        product: ''
      },
      show: false
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
    elems.forEach(e => {
      e.className = "catagory";
    })
    elems = document.querySelectorAll('.product-type');
    console.log(elems);
    elems.forEach(e => {
      e.className = "product-type";
    })

    document.getElementById(e.target.id).className += " do-bold";
    document.getElementById("0").className += " do-bold";
  }

  changeSubcatagory(e) {
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
    var productTypesData = this.state.catagory[this.state.active.catagory].productTypes;
    var productTypes = productTypesData.map((product, key) => {
      if (this.state.active.subcatagory === key) {
        return (
          <div class="product-type do-bold" onClick={this.changeSubcatagory}>
            <img id={key} src={product.img} class="button-logo" alt="logo"></img>
          </div>
        );
      }
      return (
        <>
          <div class="product-type" onClick={this.changeSubcatagory}>
            <img id={key} src={product.img} class="button-logo" alt="logo"></img>
          </div>
        </>
      );
    });
    var products = this.state.catagory[this.state.active.catagory].productTypes[this.state.active.subcatagory].products.map(product => {
      return (<div class="product" onClick={(e) => { this.setState({active: {...this.state.active, product}}); this.setState({show: true})}}>{product}</div>);
    });
    return (
      <div class="product-page-wrapper">
        { this.state.show ? <ProductDetailPage 
          location={{state: { name: this.state.active.product }}} 
          close={() => { this.setState({show: false}); this.setState({active: {...this.state.active, product: ''}})}}
        /> : ""}
        <div class="side-menu">
          <img src={aeLogo} className="side-menu-logo" alt="logo"></img>
          <img src={stlogo} className="side-menu-logo" alt="logo"></img>
          <img src={inoutlogo} className="side-menu-logo" alt="logo"></img>
        </div>
        <div class="product-view">
          <div class="product-logo-space">
            <img src={cclogo} class="product-page-logo" alt="logo"></img>
          </div>
          
          <div class="productpage">
            <div class="product-catagories">
              <div id="stationary" class="catagory do-bold" onClick={this.changeCatagory}>
                <img src={stationaryLogo} class="button-logo" alt="logo"></img>
                Stationary
              </div>
              <div id="homedecor" class="catagory" onClick={this.changeCatagory}>
                <img src={homeDecorLogo} class="button-logo" alt="logo"></img>
                Home Decor
              </div>
              <div id="gardendecor" class="catagory" onClick={this.changeCatagory}>
                <img src={gardenDecorLogo} class="button-logo" alt="logo"></img>
                Garden Decor
              </div>
              <div id="lightingsol" class="catagory" onClick={this.changeCatagory}>
                <img src={lightSolLogo} class="button-logo" alt="logo"></img>
                Lighting Solution
              </div>
            </div>
            { visualViewport.width > 900 &&
              <div class="drop-downs">
              {
                Object.entries(this.state.catagory).map((catagory) => {
                  return(
                    <div class="drop-down">
                    {
                      catagory[1].productTypes.map((product) => {
                        return (<p>{product.name}</p>);
                      })
                    }
                    </div>    
                  )
                })
              }
            </div>}
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
        </div>
      </div>
    );
  }
}
export default ProductPage;
