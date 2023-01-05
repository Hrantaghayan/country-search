export const isGreen2 = false
export function isGreen2Reducer(state = {},action){
    if(action.type === 'makeGreen2'){
        return true
    }
    else if(action.type==='makeblue2'){
        return false
    }
    return state
}
export function makeGreen2(){
    return {
        type:'makeGreen2'
    }
}
export function getIsgreen2(state){
   return state.isGreen2
}

export function makeblue2(){
   return {
       type:'makeblue2'
   }
}


