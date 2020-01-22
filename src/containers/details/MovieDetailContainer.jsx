import React from 'react';

import {
  getInfo
} from '../search/searchActions';

import { Link } from 'react-router-dom';


class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getInfo(this.props.match.params.id));
  }


  render() {
    const { movieInfo } = this.props;
    console.log(this.props);
    return (
       <div className="container">
       <div id="title">
         <div className="row well border-bottom border-dark rounded-top">
           <span className="col-lg-12 d-flex justify-content-center">
             <header><h1 className="h1">{movieInfo.Title}</h1></header>
           </span>
         </div>
       </div>
       <div className="row">
         <div className="col-md-4">
           <p></p>
         <img src={`${movieInfo.Poster}`} className='img-fluid' />
         </div>
         <div className="col-md-1">
         <p></p>
         </div>
         <div className="col-md-7">
           <span className="text-success border border-success float-left">{movieInfo.Year}</span>
           <span style={{ margin: "10em"}} className="text-success border border-success">{movieInfo.Runtime}</span>
           <span className="text-success border border-success float-right">{movieInfo.Production}</span>
           <h3 style={{ textAlign: "center" }} className="font-weight-bold">Movie Details</h3>
           <span className="font-weight-bold">Synopsis: </span>
            <span>{movieInfo.Plot}</span>
            <p></p>
            <div>{movieInfo.Awards}</div>
            <p></p>
            <br></br>
            <br></br>
            <div> <span className="font-weight-bold">Metascore: </span>{movieInfo.Metascore}</div>
            <div> <span className="font-weight-bold">imdbRating: </span>{movieInfo.imdbRating}</div>
         </div>
       </div>
       <div>
         <hr></hr>
       </div>
       <div className="col-lg-12">
        <Link to={`/`} className='btn btn-primary float-right' id='link'>Go Back To Search</Link>
       </div>
     </div>
    )
  }
}

export default MovieDetailContainer;
