import React from 'react';

class Pixel extends React.Component {
    render() {
      return (
      <div className="col-auto my-contents" style={{backgroundColor: this.props.pixelColor }}></div>
      )
	}
}

export default Pixel;
