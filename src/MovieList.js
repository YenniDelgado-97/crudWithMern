import axios from 'axios';
import React, { useEffect,useState } from 'react';
import Movie from './Movie';


function MovieList(){

    const[datamovies,setdatamovie]=useState([])

    useEffect(() => {
        axios.get('api/movie/getmovies').then(res => {
            console.log(res.data)
            setdatamovie(res.data)
        }).catch(err => {
            console.log(err)})

    }, [])

    // maping movielist on object movie

    const movielist = datamovies.map(movie => {
        return(
            <div>
                <Movie movie={movie}/>
            </div>
        )

    })


    return(
        <div>
            <h2>Movie list</h2>
           {movielist}
        </div>
    )
}

export default MovieList;