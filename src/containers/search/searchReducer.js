const defaultState = {
    movieValue: '',
    movieData: [],
    movieInfo: [],
    year: '',
  };
  
  export default function searchReducer(state = defaultState, action) {
    const { type, payload } = action;
    
    switch(type) {
        case "UPDATE_MOVIE_VALUE": {
            return {
                ...state,
                movieValue: payload
            }
        }
  
      case 'GET_MOVIE_FULFILLED': {
        return {
          ...state,
          movieData: payload.data.Search,
          year: payload.data.Search.Year,

        }
      }
  
      case 'GET_INFO_FULFILLED': {
        return {
          ...state,
          movieInfo: payload.data
        }
  
      }
  
      default: return state;
    }
  }