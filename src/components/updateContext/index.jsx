import { createContext, useState } from "react";
export const CountContext = createContext()

const UpdateContext = (prosp) => {
    const [count,setCount] = useState(0)
    return (
        <CountContext.Provider value={{count,setCount}}>
        { prosp.children }
        </CountContext.Provider>
    )
}

export default UpdateContext