import React, { useState } from 'react';
import uniquid from 'uniqid'
import axios from 'axios'

function AddMovie() {

    //Hooks
    const[title,setTitle]=useState('')
    const[year,setYear]=useState('')
    const[time,setTime]=useState('')
    const[lang,setLang]=useState('')
    const[date,setDate]=useState('')
    const[country,setCountry]=useState('')




    function addMovie(){
        var movie = {
            id:uniquid(),
            title:title,
            year:year,
            time:time,
            lang:lang,
            date:date,
            country:country

        }
        console.log(movie)

        axios.post('/api/movie/addmovie', movie)
        .then(res =>{
            alert(res.data)
        })
        .then(err => {console.log(err)})

    }


    return (
        <div className="container">
            <div className="row">
                <h2 className='mt-4'>Create a new Movie</h2>
            </div>
            <div className="row">
                <div className='col-sm-6 offset-3'>
                    <div className='mb3'>
                        <label htmlFor='mov_title' className='form-label'>Title</label>
                        <input type="text" className='form-control' value={title} onChange={(e) => {setTitle(e.target.value)}}></input>
                    </div>
                    <div className='mb3'>
                        <label htmlFor='mov_year' className='form-label'>Year</label>
                        <input type="number" className='form-control' value={year} onChange={(e) => {setYear(e.target.value)}}></input>
                    </div>
                    <div className='mb3'>
                        <label htmlFor='mov_time' className='form-label'>Time</label>
                        <input type="number" className='form-control' value={time} onChange={(e) => {setTime(e.target.value)}}></input>
                    </div>
                    <div className='mb3'>
                        <label htmlFor='mov_lang' className='form-label'>Lang</label>
                        <input type="text" className='form-control' value={lang} onChange={(e) => {setLang(e.target.value)}}></input>
                    </div>
                    <div className='mb3'>
                        <label htmlFor='mov_dt_rel' className='form-label'>data</label>
                        <input type="number" className='form-control' value={date} onChange={(e) => {setDate(e.target.value)}}></input>
                    </div>
                    <div className='mb3'>
                        <label htmlFor='mov_rel_country' className='form-label'>country</label>
                        <input type="text" className='form-control' value={country} onChange={(e) => {setCountry(e.target.value)}}></input>
                    </div>

                    { /* button that save the information */ }

                    <button onClick={addMovie} className='btn btn-success'>Save Movie</button>
                </div>
            </div>

        </div>
    )
}

export default AddMovie;