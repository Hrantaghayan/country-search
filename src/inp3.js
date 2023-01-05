import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsgreen3,makeGreen3, makeblue3 } from "./Redux/green3";
import { getInp3Val, changeInp3Val} from "./Redux/inp3value";
import { getCursor2, arrowDown3,arrowTop3,enter3} from "./Redux/cursor2";
import { getCountryCode } from "./Redux/CountryCode";
import { useEffect } from "react";
import { getInp1Val } from "./Redux/inp1value";
import { getInp2Val } from "./Redux/inp2value";
export function Inp3(){
    const inp1Val = useSelector(getInp1Val)
    const inp2val = useSelector(getInp2Val)
    const isGreen = useSelector(getIsgreen3)
    const dispatch = useDispatch()
    const inp3val = useSelector(getInp3Val)
    const cursor3 = useSelector(getCursor2)
    const countrycodes = useSelector(getCountryCode)
    useEffect(()=>{
        const element = document.getElementById(searchbar[cursor3].props.id)
        if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
       }
       },[cursor3])
       const search = (inp3val,countrycodes)=>{
        function copy(arr){
            let res = []
            for(let i = 0;i<arr.length;i++){
                res.push(arr[i])
            }
            return res 
        }
        let countryCodes= copy(countrycodes);
       let searchString =inp3val.trim().toLowerCase();
    if (inp3val.length > 0) {
     countryCodes= countryCodes.filter(function(code) {
        return code.toLowerCase().match( searchString );
      });
      return countryCodes
    }
    else if(searchString.length===0){
        return countrycodes
    }
    }
    const searchbar =search(inp3val,countrycodes).map((el,i)=>{
        if(cursor3===i){
         return <li className="searcbar-item active" 
          onMouseDown={(e)=>{
             dispatch(changeInp3Val(e.target.innerText))
           }} key={Math.random()}
           id={Math.random()}>{el}</li>
        }
        else{
         return <li className="searcbar-item "
         onMouseDown={(e)=>{
            dispatch(changeInp3Val(e.target.innerText))
          }} key={Math.random()}
          id={Math.random()}>{el}</li>
        }
     })
    return(
    <div className="inp-wrapper">
        <div className="inp-container">
            <input type='text' className="inp inp3" placeholder="CountryCode" value={inp3val}  disabled = {inp1Val==='' || inp2val===''?true:false}
             onKeyDown={(e)=>{
                debugger
                if (e.keyCode === 38) {
                    dispatch(arrowTop3(searchbar.length))
                  } else if (e.keyCode === 40 ) {
                     dispatch(arrowDown3(searchbar.length))
                  }
                  else if(e.keyCode===13){
                    dispatch(enter3(searchbar.length))
                    dispatch(changeInp3Val(searchbar[cursor3].props.children))
                    dispatch(dispatch(makeblue3()))
                    e.target.blur()
                    
                  }
            }}
            style={{
                border:isGreen?'2px solid #84d030':'2px solid #66b8e7',
                outline:isGreen?'#84d030 solid 1px':'none'
            }}
            onFocus={()=>{
              dispatch(makeGreen3())
            }}
            onBlur = {()=>{
                dispatch(makeblue3())
            }}
            onChange={(e)=>{
                dispatch(changeInp3Val(e.target.value))
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