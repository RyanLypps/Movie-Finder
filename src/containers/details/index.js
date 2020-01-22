import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store) {
  return {
  movieInfo: store.search.movieInfo
  };
}

export default connect(mapStoreToProps)(MovieDetailContainer);
