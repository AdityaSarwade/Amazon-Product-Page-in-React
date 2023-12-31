import React, { Component } from 'react';
import classes from './App.module.css';

import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import ProductData from './Utils/ProductData';

class App extends Component {

  state = {
    ProductData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0,
  }

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos: pos});
  };

  onFeatureItemClick = (pos) => {
    this.setState({currentSelectedFeature: pos});
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Change Detected -> Inside Should Component Update")
    if(nextState.currentPreviewImagePos === this.state.currentPreviewImagePos &&
      nextState.currentSelectedFeature === this.state.currentSelectedFeature) {
      return false;
    }
    return true;
  }
  
  render() {
    console.log('Rendering AppJS');
    return (
      <div className="App">
        <Topbar />
  
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.ProductData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
            currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>
  
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.ProductData} onColorOptionClick={this.onColorOptionClick}
            currentPreviewImagePos = {this.state.currentPreviewImagePos} onFeatureItemClick={this.onFeatureItemClick}
            currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
