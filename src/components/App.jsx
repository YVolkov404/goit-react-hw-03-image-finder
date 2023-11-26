// import toaster, { Toaster } from 'react-hot-toast';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Component } from 'react';
import { Searchbar, Logotype } from './Searchbar/Searchbar';
import { Container, Header } from './App.styled';
import { LoadMoreButton } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { FetchImages } from './Api';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    total: 0,
  };

  async componentDidMount() {
    const { query } = this.state;

    try {
      this.setState({ isLoading: true });
      const response = await FetchImages(query);
      const images = response.hits;

      this.setState({
        images: images,
      });
    } catch (error) {
    } finally {
      this.setState({ isLoading: false });
    }
  }

  searchQueryHandler = searchQuery => {
    const query = searchQuery.text;

    this.setState({
      query: query,
      images: [],
      page: 1,
      isLoading: true,
    });
  };

  loadMoreBtnHandler = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
        isLoading: true,
      };
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    try {
      if (prevState.query !== query || prevState.page !== page) {
        // this.setState({ isLoading: true });
        const response = await FetchImages(query, page);

        const images = response.hits;
        const totalHits = response.totalHits;

        const total = Math.ceil(totalHits / 12);

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...images],
            total: total,
          };
        });
      }
    } catch (error) {
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { images, isLoading, total, page } = this.state;
    return (
      <Container>
        <Header>
          <Logotype title="ImagineSearch" />
          {isLoading && <Loader />}
          <Searchbar onSubmit={this.searchQueryHandler} />
        </Header>
        {images.length !== 0 && <ImageGallery images={images} />}
        {images.length > 0 && page < total && (
          <LoadMoreButton title="Load more" onClick={this.loadMoreBtnHandler} />
        )}
      </Container>
    );
  }
}
