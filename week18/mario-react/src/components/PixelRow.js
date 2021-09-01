import React from 'react';
import Pixel from './Pixel';

class PixelRow extends React.Component {
    render() {

      return (
        <div className="row">
        {
          this.props.rowPixels.map(aPixelColor => <Pixel pixelColor={aPixelColor} />)
        }
        </div>
      )
  	}
}

export default PixelRow;
