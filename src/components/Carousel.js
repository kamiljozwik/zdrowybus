import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';

class Carousel extends React.Component {
  parseImages = (images) => {
    const parsed = images.map((item) => {
      const img = {
        original: `${item}-/resize/1200x675/`,
        thumbnail: `${item}-/resize/250x140/`
      };
      return img;
    });

    return parsed;
  }

  render() {
    const images = this.parseImages(this.props.images);
    return (
      <ImageGallery thumbnailPosition="bottom" additionalClass="image-carousel" items={images} />
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired
};

export default Carousel;
