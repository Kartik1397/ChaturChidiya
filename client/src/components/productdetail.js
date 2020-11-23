import React from 'react';
import './productdetail.css';

class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <>
        <div class="product-detail-container">
          <div class="product-display">
            <div class="product-name">{this.props.location.state.name}</div>
            <div class="product-img"></div>
            <div class="product-display-buttons">
              <div class="product-price">$500</div>
              <div class="addtocart-button">Add To Cart</div>
            </div>
          </div>
          <div class="product-info">
            <div class="product-desc">few liners for how it os generally usedfew liners for how it os generally used few liners for how it os generally used</div>
            <div class="product-opts">
              <div class="product-opt">Cover Page Motif</div>
              <div class="product-opt">Cover Page Colour</div>
              <div class="product-opt">extra page</div>
              <div class="product-opt">personal message</div>
              <div class="product-opt">gift pack</div>
              <div class="product-opt">custom cover page</div>
            </div>
          </div>
        </div>
        <div class="product-extrainfo"></div>
      </>
    );
  }
}
export default ProductDetailPage;
