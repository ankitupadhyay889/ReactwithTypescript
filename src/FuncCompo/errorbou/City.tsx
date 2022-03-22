type Fgo = {
    name?: string;
}
const City = (props: Fgo) => {
    return(
        <div>
            {new Error("Hello, visit {props?.name?.toUpperCase()}")}
        </div>
    )
}

export default City;