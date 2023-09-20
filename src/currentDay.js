// import React from "react";

const Buildate = (currentDate)=> {

    // const currentDate = new Date();
     
    // defined an array
    const dayName = ["sunday","Monday","Tuesday","wednesday","thursday","Firday","saturday"];
  
    const monthName = ["january","February","March","April","May","june","July","August","September","October","November","December"];
  
  
  const getday = dayName[currentDate.getDay()];
  const date = currentDate.getDate();
  const month =monthName[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  
  return(
    // <div>
    // <p> Day: {getday}  </p>
    // <p>Date:{date}</p>
    // <p>Month: {month}</p>
    // <p>Year:{year}</p>
    // </div>
    `${getday} ${date} ${month}  ${year}`
  )
  }

  export default Buildate;