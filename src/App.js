import React from 'react';
import './App.css';
import { Head } from './Header';
import { getNames,fillNames } from "./Redux/FullName";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getCountryCode, pushCountryCodes} from './Redux/CountryCode';
function App() {
//   const countryNames = useSelector(getNames)
//   const dispatch = useDispatch()
//   const countrycodes = useSelector(getCountryCode)
//   useEffect(()=>{
//     let dataforstate;
//     let arrForNameState = [];
//     let arrforcountrycode = []
//     fetch('https://restcountries.com/v3.1/all')
//     .then((responce)=>{
//       return  responce.json()
//     })
//     .then((data)=>{
//       dataforstate = data
//       console.log(data)
//       for(let val of dataforstate){
//         arrForNameState.push(val.name.common)
//         arrforcountrycode.push(val.cca2)
//     }
//       dispatch(pushCountryCodes(arrforcountrycode))
//       dispatch(fillNames(arrForNameState))
//     })
// },[])
  return (
  <div className='general-container'>
      <h3 className='title'>Explore Country</h3>
      <Head/>
    </div>
  );
}

export default App;
