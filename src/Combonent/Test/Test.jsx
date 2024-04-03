import  axios  from 'axios'
import React from 'react'
import { useEffect } from 'react';

export default function () {
    async function getMove() {
        let date = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=52bbcddeda849047525b51d6f8a12361')
        console.log(date);
    }

    useEffect(() => {
        getMove()
    },[])
    return (
        <>
        <h1>test</h1>
        </>
    )
}
