import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "./info";
export function Body(){
    let arr = []
    const info = useSelector(getInfo)
    const dispatch = useDispatch()
    const dest = (arr)=>{
        let res = []
        for(let i = 0;i<arr.length;i++){
         if(typeof arr[i]==='object'){
            for(let key in arr[i]){
                if(key==='flag'){
                    let el = (
                        <div className="for-img" key={Math.random()}>
                            <img src={arr[i][key]} className="piture" alt="good-picture"/>
                        </div>
                    )
                    res.push(el)
                }
                else{
                    res.push( <h1 key={Math.random()}>{`${[key]}: ${arr[i][key]}`}</h1>)
                }
            }
         }
        }
        return res
    }
    arr = info
    arr = dest(arr)
    console.log(arr)
//      arr = arr.map((el,ind)=>{
//         debugger
//     for(let key in el){
//         debugger
//         if(key==='flag'){
//             return (
//                 <div className="for-img" key={Math.random()}>
//                     <img src={el[key]} className="piture" alt="good-picture"/>
//                 </div>
//             )
//         }
//         else{
//             return (
//                 <h1 key={Math.random()}>{`${[key]}: ${el[key]}`}</h1>
//             )
//         }
//     }
// })
    return (
        <div className="body-container">
        {arr}
        </div>
    )
}