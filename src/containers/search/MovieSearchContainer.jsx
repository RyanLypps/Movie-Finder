import React, { Component } from 'react';

import {
  updateMovie,
  getMovie
} from './searchActions';

import { Link } from 'react-router-dom';

export default class MovieSearchContainer extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateMovie(value));
  }

  handleChange() {
    const { movieValue, dispatch } = this.props;
    dispatch(getMovie(movieValue));
  }

  render() {
    const { movieData } = this.props;
    return (
      <div className="content">
        <div className="container">
          <div>
            <h2 className="text-center font-weight-bold">Movie Snap</h2>
          </div>

          <div className="input-group mb-4">
            <input type="text" placeholder="Enter Movie or Tv Show" className="form-control" onChange={this.handleClick} />
            <div>
              <button className="btn btn-success" type="button" onClick={this.handleChange}>Search Movie and Related Titles</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div style={{ display: "flex", flexWrap: "wrap" }} className="justify-content-center">
                {
                  movieData && movieData.map((movieData, index) => {
                    return (
                      <div className="card border-bottom border-dark rounded-top" key={index}>
                        <h1 className="card-header text-center bg-success" style={{width: "13em", fontSize: "25px"}}>{`${movieData.Title} (${movieData.Year})`}</h1>
                        <div className="card-body" style={{ width: "13em" }}>
                          <img src={`${movieData.Poster}`} alt={movieData.Title} />
                        </div>
                        <div className="text-center">
                          <Link to={`/movie/${movieData.imdbID}`} className='btn btn-primary' id='link'>Detail Info</Link>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}