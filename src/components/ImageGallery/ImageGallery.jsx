import React from "react";
import styles from "./ImageGallery.module.css"
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

class ImageGallery extends React.Component {
  render() {
    const { items, openModal } = this.props;
    return (
      <ul className={styles.imageGallery} onClick={openModal}>
          {items.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
          ))}
      </ul>
    );
  }
}

export default ImageGallery;
