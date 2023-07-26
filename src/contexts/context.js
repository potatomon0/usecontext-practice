import {createContext,useState} from 'react';
import axios from 'axios'

//useContext create global state management
export const AppContext= createContext()

const AppContextProvider = (props)=>{
    const [data,setData]=useState(null)

    const getData = async()=>{
        let res = await axios.get('http://api.tvmaze.com/shows')
        console.log(res)
        // let info = res.data
        setData(res.data)
      }

    return (
        <AppContext.Provider value={{data,setData,getData}}>
            {props.children}{/* === <App /> */}
        </AppContext.Provider>
    )
}

export default AppContextProvider