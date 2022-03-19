let initiDa = {
    list: []
}

type Action = {
    type: string;
    payload: any;
    id: number;
}

const toDo = (state: any = initiDa , action: Action) => {
    switch(action.type){
        case "AddTo" :
            const{id, data} = action.payload
            return{
                ...state, list:[...state.list, {id: id , data: data}]
            }
        case "DelTo" :
            const newLis = state.list.filter((elem: any) => elem.id !== action.id)

            return{
                ...state, list: newLis
            }
        case "RemoveTo" :
            return{
                ...state, list: []
            }

        default: return state;
    }
}

export default toDo;