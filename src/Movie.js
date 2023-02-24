import React from 'react';

function Movie({movie}){
    return(
        <div className="container">
            <div className="row">
                <div className='col-sm-6 offset-3'>
                <ul className="list-group">
                    <li className="list-group-item">{movie.idmovie}</li>
                    <li className="list-group-item">{movie.title}</li>
                    <li className="list-group-item">{movie.year}</li>
                    <li className="list-group-item">{movie.time}</li>
                    <li className="list-group-item">{movie.lang}</li>
                    <li className="list-group-item">{movie.country}</li>


                </ul>

                <button className="btn btn-success">Update</button>
                &nbsp;
                <button className="btn btn-danger">Delete</button>
                <hr className='mt-4'></hr>

                </div>
                
            </div>
            
        </div>
    )
}

export default Movie;