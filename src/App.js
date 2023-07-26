import logo from './logo.svg';
import './App.css';
import axios from 'axios'//axios is a library
import React,{useState,useEffect,useContext} from 'react'
import {AppContext} from './contexts/context'
import List from './components/List'

function App() {
  // const [data,setData]=useState(null)
  //post- send data to api
  //delete
  //put
  // const getData = async()=>{
  //   let res = await axios.get('http://api.tvmaze.com/shows')
  //   console.log(res)
  //   // let info = res.data
  //   setData(res.data)
  // }
  let {getData} = useContext(AppContext)
  useEffect(()=>{
    getData();
  },[])
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        <div className='left'>
          <List />
        </div>
        <div className='right'>

        </div>
      </div>
    </div>
  );
}

export default App;
