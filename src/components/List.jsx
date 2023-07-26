import {useContext} from 'react'
import {AppContext} from '../contexts/context'

function List() {
    let {data} = useContext(AppContext)
    let movieList = ()=>{
    //     data.map((ele)=>{
    //     // call back function in map() is a function call within another function
    //     return (
    //         <p>{ele.name}</p>
    //     )
    // })
}
  return (
    <div>
        {data ? data.map((ele)=>{
        return (
            <p>{ele.name}</p>
        )
    }):<p>Loading...</p>}
    </div>
  )
}

export default List