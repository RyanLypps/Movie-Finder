import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store) {
  return {
    movieValue: store.search.movieValue,
    movieData: store.search.movieData,
  };
}

export default connect(mapStoreToProps)(MovieSearchContainer);
