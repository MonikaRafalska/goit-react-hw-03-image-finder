import React from "react";
import styles from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends React.Component {
  render() {
    const { id, webformatURL, largeImageURL } = this.props;
    return (
      <li id={id} className={styles.imageGaleryItem}>
        <img
          className={styles.imageGalleryItem_image}
          src={webformatURL}
          alt="opis obrazka"
          data-img={largeImageURL}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
