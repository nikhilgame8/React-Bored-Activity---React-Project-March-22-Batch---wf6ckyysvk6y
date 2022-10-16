import React, { useEffect, useState } from "react";

import "../styles/App.css";

 

const Loader = () => <div id="loader">Loading...</div>;

 

const App = () => {

 const [activity, setActivity] = useState("");

 const [type, setType] = useState("education");

 const [loading , setLoading] = useState(false)

 

async function fetching() {

 setLoading(true)

 let res = await fetch(`https://www.boredapi.com/api/activity?type=${type}`);

 let data = await res.json();

 setLoading(false)

 setActivity(data.activity)

 }

 useEffect(() => {

 fetching();

 }, [type]);

 

return (

 <div id="main">

 {loading ? (<Loader/>) : (<div id="activity">{activity}</div>)}

 <button id="btn-recreation" onClick={() => setType("recreational")}>Recreational</button>

 <button id="btn-education" onClick={() => setType("education")}>Education</button>

 </div>

 );

};

 

export default App;