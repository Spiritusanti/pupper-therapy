import React from 'react';

const Position = async function() {
    const data = await fetch("http://api.open-notify.org/iss-now.json");
    const response = data.json();
    console.log(response);
}



export default Position