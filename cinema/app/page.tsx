'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState({ results: [] }); 

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2FhMTgyNDIwMDQ2M2Q4MjU0YTc1YzEwODE2NWQyOSIsIm5iZiI6MTcyOTA5ODAzNC45MDkxOTcsInN1YiI6IjY2NGRlYzQwNjE4NmRlZGQ3YzA2MTIyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.62Q5_lVkC1VkmzBaK1_HG4_tiGlCTdPnwvli7Pbo3yo',
      },
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);
        // console.log(response)
      })
      .catch((err) => console.error('Error fetching data:', err));
    }, []);
    console.log(data.results)


  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="w-full h-[50%]  flex justify-center items-center ">
        {data.length > 0  ?
        <>
          <h1 className='absolute w-full inline text-[60px]  f_h  left-[5%]  z-10 font-semibold'>See {data[0].title.toUpperCase()} Now</h1>
          <p className='relative w-[30%] f_h font-thin top-24 left-[5%]  text-[25px]'>
              {data[0].overview}
          </p>
        </>
         : ''
        }

        <img
          className="w-[70%]  h-full mask_l relative right-[5%] "
          src={data.length > 0 ? `https://image.tmdb.org/t/p/original${data[0].backdrop_path}` : ''}
          alt="Movie Backdrop"
          />
      </div>
      <div className='absolute rounded-2xl w-[120px] h-[40px] left-[6%] top-[48%] bg-gradient-to-r from-red-600 via-red-600 to-red-700  focus:ring-4 ' >
          <button className='w-full h-full font-bold' > Get ticket</button>
      </div>
      <div className="w-full h-auto border"></div>
    </div>
  );
}
