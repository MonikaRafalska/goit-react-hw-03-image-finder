import React from "react";
import PropTypes from "prop-types";
import SearchBar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import { BallTriangle } from "react-loader-spinner";

const API_KEY = "25046418-504824fa9a0ce8e27b2b9010d";

class App extends React.Component {
  state = {
    images: [],
    searchKey: "",
    page: 1,
    isLoading: false,
    largeImg: "",
    isModalOpen: false,
  };

  fetchImages = (searching, page) => {
    try {
      fetch(
        `https://pixabay.com/api/?&q=${searching}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((data) => data.json())
        .then((data) => {
          this.state.page === 1
            ? this.setState({
                images: data.hits,
                page: page + 1,
                isLoading: true,
              })
            : this.setState({
                images: [...this.state.images, ...data.hits],
                page: page + 1,
                isLoading: true,
              });
        })
        .finally(() => this.setState({ isLoading: true }));
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (evt) => {
    this.setState({ page: 1 });
    const value = evt.target.value;
    this.setState({ searchKey: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.fetchImages(this.state.searchKey, this.state.page);
  };

  loadMore = (evt) => {
    evt.preventDefault();
    this.fetchImages(this.state.searchKey, this.state.page);
  };

  openModalWindow = (evt) => {
    if (evt.target.nodeName !== "IMG") {
      return;
    }
    this.setState({
      largeImg: evt.target.dataset.img,
      isModalOpen: true,
    });
  };
  closeModalWithEsc = (evt) => {
    if (evt.code === "Escape") {
      this.setState({ isModalOpen: false });
    }
  };

  closeModal = (evt) => {
    if (evt.target.nodeName === "IMG") {
      return;
    }
    this.setState({ isModalOpen: false });
  };

  componentDidMount() {
    this.fetchImages(this.state.searchKey, this.state.page);
  }

  render() {
    window.addEventListener("keydown", this.closeModalWithEsc);

    return (
      <>
        <SearchBar
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        {this.state.isLoading === true ? (
          <ImageGallery
            items={this.state.images}
            openModal={this.openModalWindow}
          />
        ) : (
          <BallTriangle color="#00BFFF" height={80} width={80} />
        )}
        <Button loadMore={this.loadMore} />
        {this.state.isModalOpen === true ? (
          <Modal closeModal={this.closeModal} largeImg={this.state.largeImg} />
        ) : (
          <></>
        )}
      </>
    );
  }
}
App.propTypes = {
  images: PropTypes.array,
  searchKey: PropTypes.string,
  page: PropTypes.number,
  isLoading: PropTypes.bool,
  largeImg: PropTypes.string,
  isModalOpen: PropTypes.bool,
};
export default App;
