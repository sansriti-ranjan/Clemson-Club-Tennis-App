import "../public/styles.css";
import React from "react";

function Date(){
    //Get current Date and Time in hours (integer between 0 and 23)
    const currentDate = new Date();
    const currentTime = currentDate.getHours();
    var header_print = "";
    var color = "";

    //if currentTime is < 12, print header as 'Good Morning'
    if (currentTime < 12) {
        header_print = "Good Morning";
        color = "red";
    }
    //if currentTime is 12 <= currentTime < 18, header as 'Good Afternoon'
    else if (currentTime >= 12 && currentTime < 18) {
        header_print = "Good Afternoon";
        color = "green";
    }
    //if currentTime is between 18 and 23, 'Good Evening'
    else {
        header_print = "Good Evening";
        color = "blue";
    }
    return(<div>
      <h1 class="heading" style={{ color: color }}>
        {header_print}
      </h1>
    </div>)
}

export default Date;