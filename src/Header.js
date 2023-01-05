import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Inp1 } from "./inp1";
import { Inp2 } from "./Inp2";
import { Inp3 } from "./inp3";
import { getNames } from "./Redux/FullName";
import {getInp2Val} from "./Redux/inp2value";
import {getInfo,changeInfo} from "./Redux/info";
import { Body } from "./Redux/body";
import { getError,steError } from "./Redux/eror";
export function Head(){
  const dispatch = useDispatch()
  const countryNames = useSelector(getNames)
  const inp2val = useSelector(getInp2Val)
  const info = useSelector(getInfo)
  const err = useSelector(getError)
    return (
     <>
    <div className="head-container">
      <div className="inps-container">
       <Inp1/>
       {countryNames.length===0?<div className="loader"></div>: (<><Inp2/>
       <button className="btn-All" onClick={()=>{
        debugger
         if(inp2val!== ''){
          if(countryNames.indexOf(inp2val)!==-1){
            fetch(`https://restcountries.com/v3.1/name/${inp2val}`)
            .then((response)=>{
              return response.json()
            })
            .then((country)=>{
              let somedata = country
              let arr = []
              for(let val of somedata){
                let obj = {}
                  obj['Name'] = val.name.official
                  obj['flag']=val.flags.png
                  obj['capital'] = val.capital[0]
                  if(typeof val.languages==='object'){
                    for(let key in val.languages){
                      obj['language'] = val.languages[key]
                    }
                  }
                  obj['region'] = val.region
                  obj['code'] = val.tld[0] 
                  arr.push(obj)               
              }
              dispatch(changeInfo(arr))
            })
          }
          else{
            dispatch(steError('you need choose counutrys or continents which was recomended by us'))
            setTimeout(()=>{
              dispatch(steError(''))
            },3000)
          }
         }
         else{
          dispatch(steError('you need choose counutrys or continents which was recomended by us'))
          setTimeout(()=>{
            dispatch(steError(''))
          },3000)
         }
      }}>Search</button>
       </>)}
    </div>
  </div>
  {err===''?<Body/>:<h1 className="err">{err}</h1>}
      </>
    )
}