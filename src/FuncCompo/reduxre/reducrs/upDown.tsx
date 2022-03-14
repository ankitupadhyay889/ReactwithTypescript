let Intir = 0

const changeThe = (state = Intir , action: any) => {
    switch(action.type){
        case "Increment":
            return state + action.ankit
        case "Deccrement":
            return state - 1
        default:
            return state
    }
}

export default changeThe;