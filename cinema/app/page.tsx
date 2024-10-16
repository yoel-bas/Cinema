'use client'
import Image from "next/image";
import axios from 'axios';
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]); // Initialize state as an empty array

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2FhMTgyNDIwMDQ2M2Q4MjU0YTc1YzEwODE2NWQyOSIsIm5iZiI6MTcyOTA5ODAzNC45MDkxOTcsInN1YiI6IjY2NGRlYzQwNjE4NmRlZGQ3YzA2MTIyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.62Q5_lVkC1VkmzBaK1_HG4_tiGlCTdPnwvli7Pbo3yo'
      }
    };

    axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => {
        setData(response.data.results);
        console.log(response.data.results) // Set data state with the results array
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div className="w-full h-screen flex flex-col items-center border">
      <div className="w-[70%] h-[70%] border">
      <img 
  className="w-full h-full" 
  src={`https://image.tmdb.org/t/p/original${data[0].backdrop_path}`} 
  alt="Movie Backdrop" 
/>
      </div>
      <div className="w-full h-auto border"></div>
      {/* Safely access data[0] */}
      <h1>{data.length > 0 ? data[0].id : 'Loading...'}</h1>
    </div>
  );
}
