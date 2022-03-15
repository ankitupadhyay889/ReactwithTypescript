export const addTo = (data: string) => {
    return{
        type: "AddTo",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const delTo = (id: number) => {
    return{
        type: "DelTo",
        id
    }
}

export const remvTo = () => {
    return{
        type: "RemoveTo"
    }
}