// 'use client'
// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   // State to store screen width
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     // Handler to update width state on window resize
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//     };

//     // Add resize event listener
//     window.addEventListener('resize', handleResize);

//     // Clean up event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []); // Empty dependency array means it runs once on mount

//   // Log the current width whenever it changes
//   useEffect(() => {
//     console.log(width);
//   }, [width]);

//   return (
//     <div>
//       <h1>Current screen width: {width}</h1>
//     </div>
//   );
// }

// export default MyComponent;
import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
