import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsgreen1, makeGreen1, makeBlue } from "./Redux/green1";
import { getInp1Val,changeInp1Val } from "./Redux/inp1value";
import { getContinent, choosContinent } from "./Redux/continent";
import { getCursor, arrowDown,arrowTop, enter} from "./Redux/cursor";
import { fillNames } from "./Redux/FullName";
export function Inp1(){
    const isGreen = useSelector(getIsgreen1)
    const dispatch = useDispatch()
    const inp1val = useSelector(getInp1Val)
    const continent = useSelector(getContinent)
    const cursor = useSelector(getCursor)
     useEffect(()=>{
      if(inp1val!=='' && isGreen === false){
        let dataforstate;
        let arrForNameState = [];
          fetch(`https://restcountries.com/v3.1/region/${inp1val}`)
          .then((response)=>{
            return response.json()
          })
          .then((data)=>{
            console.log(data)
            dataforstate = data
            for(let val of dataforstate){
              arrForNameState.push(val.name.common)
              dispatch(fillNames(arrForNameState))
            }
          })
     }
     },[inp1val])
    useEffect(()=>{
     const element = document.getElementById(searchbar[cursor].props.id)
     if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    },[cursor])
    const search = (inp1val,continent)=>{
        function copy(arr){
            let res = []
            for(let i = 0;i<arr.length;i++){
                res.push(arr[i])
            }
            return res 
        }
        let continents = copy(continent);
       let searchString =inp1val.trim().toLowerCase();
    if (inp1val.length > 0) {
      continents= continents.filter(function(continent) {
        return continent.toLowerCase().match( searchString );
      });
      return continents
    }
    else if(searchString.length===0){
        return continent
    }
    }
     const searchbar =search(inp1val,continent).map((el,i)=>{
       if(cursor===i){
        return <li className="searcbar-item active" 
         onMouseDown={(e)=>{
            dispatch(changeInp1Val(e.target.innerText))
            dispatch(makeBlue())
          }} key={Math.random()}
          id={Math.random()}>{el}</li>
       }
       else{
        return <li className="searcbar-item "
        onMouseDown={(e)=>{
           dispatch(changeInp1Val(e.target.innerText))
           dispatch(makeBlue())
         }} key={Math.random()}
         id={Math.random()}>{el}</li>
       }
    })
    return(
    <div className="inp-wrapper">        
        <div className="inp-container">
        <input type='text' className="inp inp1" placeholder="Continent" value={inp1val}
        onKeyDown={(e)=>{
            if (e.keyCode === 38) {
                dispatch(arrowTop(searchbar.length))
              } else if (e.keyCode === 40 ) {
                 dispatch(arrowDown(searchbar.length))
              }
              else if(e.keyCode===13){
                dispatch(enter(searchbar.length))
                dispatch(changeInp1Val(searchbar[cursor].props.children))
                dispatch(dispatch(makeBlue()))
                e.target.blur()
              }
        }}
        onChange={(e)=>{
            dispatch(changeInp1Val(e.target.value))
        }} 
        style={{
            border:isGreen?'2px solid #84d030':'2px solid #66b8e7',
            outline:isGreen?'#84d030 solid 1px':'none',
        }}
        onFocus={()=>{
          dispatch(makeGreen1())
        }}
        onBlur = {(e)=>{
            dispatch(makeBlue())
        }}
        />
        <div className="border"
          style={{
            borderColor:isGreen?'#84d030':'#66b8e7',
            outline:isGreen?'#84d030 solid 1px':'none'
        }}>
        <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        </div>
       {isGreen?   <ul className="my-ul" >
        {searchbar}
        </ul>:[]}
    </div>
    )
}