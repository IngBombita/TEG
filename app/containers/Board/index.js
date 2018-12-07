/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import map from './src/map.png';
//import './src/style.css'; 
//comente este estilo ya que ahora tenemos que mapear las provincias en nuestra escala que es el tamaño por default de la imagen 

let WidthAbsoluteScale = 1064;
let HeightAbsoluteScale = 2160;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relativeScaleWidth: 0,
      relativeScaleHeight: 0,
      xScreen: 0,
      yScreen:0,
      xMap:0,
      yMap:0
    };
    this.imgRef = React.createRef();
  }

  onMapClick = elem => {
    const x = elem.pageX;
    const y = elem.pageY;
    console.log('Mouse pos: (', x, ',', y, ')');
    this.setState({
      xScreen: x,
      yScreen: y
    })
    this.calculatePositionOnMap(x,y);
  };

  calculatePositionOnMap = (xScreen,yScreen) =>{

    let wClient = this.state.relativeScaleWidth;
    let hClient = this.state.relativeScaleHeight;

    let xMapScale = (WidthAbsoluteScale/wClient) * xScreen;

    let yMapScale = (HeightAbsoluteScale/hClient) * yScreen;

    console.log('xMap: '+xMapScale+' yMap: '+yMapScale)

    this.setState({
      xMap: xMapScale,
      yMap: yMapScale
    })
  }

  updateDimensions = () => {
    this.setState({
      relativeScaleWidth: this.imgRef.current.clientWidth,
      relativeScaleHeight: this.imgRef.current.clientHeight,
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  onLoad = () => {
    this.setState({
      relativeScaleWidth: this.imgRef.current.clientWidth,
      relativeScaleHeight: this.imgRef.current.clientHeight,
    });
  };

//----------------------funcion exclusiva para crear poligonos en el mapa-------------------------------------------------------------------











  render() {
    return (
      <div
        onClick={this.onMapClick}
        onKeyDown={() => {}}
        role="button"
        tabIndex="0"
        id="mapId"
      >
        <img
          src={map}
          ref={this.imgRef}
          onLoad={this.onLoad}
          alt="board"
          className="map"
        />
      </div>
    );
  }
}
