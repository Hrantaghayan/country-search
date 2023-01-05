import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getIsgreen2,makeGreen2,makeblue2 } from "./Redux/green2";
import { getInp2Val,changeInp2Val } from "./Redux/inp2value";
import { fillNames, getNames} from "./Redux/FullName";
import { arrowDown2, arrowTop2, enter2, getCursor1 } from "./Redux/cursor1";
import { getInp1Val } from "./Redux/inp1value";
export function Inp2(){
  const inp1val = useSelector(getInp1Val)
    const isGreen = useSelector(getIsgreen2)
    const dispatch = useDispatch()
    const inp2val = useSelector(getInp2Val)
    const fullNames = useSelector(getNames)
    const cursor1 = useSelector(getCursor1)
    useEffect(()=>{
      const element = document.getElementById(searchbar[cursor1].props.id)
      if (element) {
       element.scrollIntoView({ behavior: 'smooth' });
     }
     },[cursor1])
     const search = (inp2val,fullNames)=>{
         function copy(arr){
             let res = []
             for(let i = 0;i<arr.length;i++){
                 res.push(arr[i])
             }
             return res 
         }
         let fullnames= copy(fullNames);
        let searchString =inp2val.trim().toLowerCase();
     if (inp2val.length > 0) {
      fullnames= fullnames.filter(function(name) {
         return name.toLowerCase().match( searchString );
       });
       return fullnames
     }
     else if(searchString.length===0){
         return fullNames
     }
     }
      const searchbar =search(inp2val,fullNames).map((el,i)=>{
        if(cursor1===i){
         return <li className="searcbar-item active" 
          onMouseDown={(e)=>{
             dispatch(changeInp2Val(e.target.innerText))
           }} key={Math.random()}
           id={Math.random()}>{el}</li>
        }
        else{
         return <li className="searcbar-item "
         onMouseDown={(e)=>{
            dispatch(changeInp2Val(e.target.innerText))
          }} key={Math.random()}
          id={Math.random()}>{el}</li>
        }
     })
    return(
    <div className="inp-wrapper">
        <div className="inp-container">
            <input type='text' className="inp inp2" placeholder="FullName" value={inp2val} disabled = {inp1val===''?true:false}
             style={{
                border:isGreen?'2px solid #84d030':'2px solid #66b8e7',
                outline:isGreen?'#84d030 solid 1px':'none'
            }}
            onKeyDown={(e)=>{
              if (e.keyCode === 38) {
                  dispatch(arrowTop2(searchbar.length))
                } else if (e.keyCode === 40 ) {
                   dispatch(arrowDown2(searchbar.length))
                }
                else if(e.keyCode===13){
                  dispatch(enter2(searchbar.length))
                  dispatch(changeInp2Val(searchbar[cursor1].props.children))
                  dispatch(dispatch(makeblue2()))
                  e.target.blur()
                  
                }
          }}
            onFocus={(e)=>{
              dispatch(makeGreen2())
            }}
            onBlur = {(e)=>{
                dispatch(makeblue2())
            }}
            onChange={(e)=>{
              dispatch(changeInp2Val(e.target.value))
            }}
            />
            <div className="border"
            style={{
                borderColor:isGreen?'#84d030':'#66b8e7',
                outline:isGreen?'#84d030 solid 1px':'none'
            }}
            >
            <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        {isGreen?   <ul className="my-ul" >
        {searchbar}
        </ul>:[]}
    </div>
    )
}