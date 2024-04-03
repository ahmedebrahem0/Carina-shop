    import  axios  from 'axios'
    import React, { useState, useEffect } from 'react'
    import"./Product.module.css"
    export default function Product(){
        const [Movie, SetMovie] = useState([])
        const [Loading, SetLoading] = useState(true)

        async function getMove(movietype) {
            let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${movietype}/week?api_key=52bbcddeda849047525b51d6f8a12361`)
            SetMovie(data.results)
            SetLoading(false)
            // console.log(data.results);
        }
        useEffect(() => {
            getMove('movie')
        },[])
        return (
        <>
            <div className="alon">
            <div className="container ">
                <button
                className="btn text-white"
                onClick={() => {
                    getMove("movie");
                }}
                >
                movie
                </button>
                <button
                className="btn text-white"
                onClick={() => {
                    getMove("tv");
                }}
                >
                tv
                </button>
                <div className="row">
                {Loading ? (
                    <h2>Loading...</h2>
                ) : (
                    Movie.map((Movies) => {
                    return (
                      <div key={Movies.id} className="col-md-3 text-center">
                        <div className="overflow-hidden">
                          <img
                            src={
                              "https://image.tmdb.org/t/p/w500" +
                              Movies.poster_path
                            }
                            className="w-100"
                            alt=""
                          />
                        </div>
                        <h4>
                          {Movies?.title}
                          {Movies?.name}
                        </h4>
                        {/* <h4></h4> */}
                        <h4>{Movies.media_type}</h4>
                      </div>
                    );
                    })
                )}
                
                </div>
            </div>
            </div>
        </>
        );
    }
