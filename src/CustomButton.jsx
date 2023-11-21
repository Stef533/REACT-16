import React from 'react';

class CustomButton extends React.Component {
  handleClickButton = (event) => {
    if (event.target.tagName !== 'IMG') {
      console.log('Button clicked:', event.target.name);
    }
  }

  handleClickImage = () => {
    console.log('Image clicked');
  }

  render() {
    return (
      <div className="custom-button">
        <img
          ref={(img) => { this.image = img; }}
          src="https://example.com/your_image_source.jpg"
          alt="Button Image"
          onClick={this.handleClickImage} 
        />
        <button name="custom-button" onClick={this.handleClickButton}>Click me</button>
      </div>
    );
  }
}

export default CustomButton;
