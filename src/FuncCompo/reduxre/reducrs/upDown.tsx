let Intir = 0

type Action = {
    type: string;
    ankit: number;
}

const changeThe = (state: number = Intir , action: Action) => {
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