import axios from 'axios';

const API_KEY = '23963114-6d0d5d874ae460d9125bacd21';
const BASE_URL = 'https://pixabay.com/api/';

export default class PixabayApi {
  constructor() {
    this.query = '';
    this.page = 1;
  }

  async fetchPhoto() {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=12`
    );
    return response.data;
  }

  reset() {
    this.page = 1;
  }
}