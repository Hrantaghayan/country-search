export const countryCode = []
export function countryCodeReducer(state={},action){
    if(action.type === 'fill-countryCode'){
        return action.payload.arr
    }     
return state
}
export function getCountryCode(state){
    return state.countryCode
}
export function pushCountryCodes(array){
     return {
        type:'fill-countryCode',
        payload:{
            arr:array
        }
     }
}