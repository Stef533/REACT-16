import React from 'react';

class CustomButton extends React.Component {
  handleClick = (event) => {
    if (event.target.tagName !== 'IMG') {
      console.log(event.target.name);
    }
  }

  render() {
    return (
      <div className="custom-button">
        <img
          ref={(img) => { this.image = img; }}
          src="https://example.com/your_image_source.jpg"
          alt="Button Image"
        />
        <button name="custom-button" onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default CustomButton;
