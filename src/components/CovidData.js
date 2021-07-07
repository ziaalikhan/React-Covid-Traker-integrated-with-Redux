import React from 'react'
import { FcComboChart } from "react-icons/fc";
import { useSelector , useDispatch } from "react-redux";
import { getData } from "../store/action";
import { useEffect } from "react";

function CovidData() {

    let state = useSelector(state => state);

    console.log(state.reports.data)

    let dispatch = useDispatch();

    useEffect(()=>{
         dispatch(getData())
         console.log('DATA======>' ,state.reports)
    },[])

    return (
        
            <div>
    <div className='mainHeading'>
      <h2 className='heading'>Covid-19 Tracker</h2>
    </div>
    

<div className="main">

  {
    state.reports.data ? state.reports.data.map((val)=> {
      return(
        <div className="cardsDAta">
          <div className='iconDiv'>

          <FcComboChart className='icon' />
          </div>
  <h2>Country/state <span className='left'> {val.state}</span></h2>
  <h5>Total <span className='left'> {val.total}</span></h5>
  <h5>TotalTestResults <span className='left'> {val.totalTestResults}</span></h5>
  <h5>Positive <span className='left'> {val.positive}</span></h5>
  <h5>Negative <span className='left'> {val.negative}</span></h5>
  <h5>Hospitalized <span className='left'> {val.hospitalized}</span></h5>
  <h5>HospitalizedCurrently <span className='left'> {val.hospitalizedCurrently}</span></h5>
  <h5>Recovered <span className='left'> {val.recovered}</span></h5>
  <h5>Death <span className='left'> {val.death}</span></h5>
</div>
      )
    })
    :""}



    
  
</div>
      
            
        </div>
    )
}

export default CovidData;
