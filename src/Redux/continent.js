export const continent = [
    'Africa',
    'Americas', 
    'Asia', 
    'Europe', 
    'Oceania'
]
export function continentReducer(state={},action){
    if(action.type=== 'chooseContinent'){
        return state
    }
    return state
}
export function getContinent(state){
    return state.continent
}
export function choosContinent(letter){
    return {
        type:'chooseContinent',
        payload:{
         searchitem:letter
        }
    }
}