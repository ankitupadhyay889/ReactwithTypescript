export const incNu = (num: number) => {
    return {
        type: "Increment",
        ankit: num
    }
}

export const deccNu = () => {
    return {
        type: "Deccrement"
    }
}