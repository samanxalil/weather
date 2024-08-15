import React, { useContext } from "react";
import Day from "./Day";
import { Context } from "../context/Context";
import Loader from "./Loader";

function Week() {
  
  const { weather, loading } = useContext(Context);
  if (loading) return <Loader />;
  return (
    <div className="week container">
      {
        weather.daily.filter((day, index)=>index != 0).map((day,index)=>{
          return <Day key={index} day={day}/>
        })
      }
    </div>
  );
}

export default Week;
