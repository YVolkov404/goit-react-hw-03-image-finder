import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar.';
// import { Axios } from 'axios';

// Axios.defaults.baseURL =
//   '<https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12/>';

export class App extends Component {
  state = {
    text: '',
  };

  render() {
    return (
      <>
        <Searchbar className="searchbar" />
        <ul className="image-gallery" />
        <button className="load-more" />
        <div className="loader" />
      </>
    );
  }
}
