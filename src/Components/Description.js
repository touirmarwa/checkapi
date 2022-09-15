import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
const Description=()=>{
    const {id}=useParams()
    const [user,setUser]= useState({})
    const [loading,setLoading]= useState(true)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then ((res)=>setUser(res.data))
        .then (()=>setLoading(false))
        .catch((error)=> console.log(error))
    },[])
    return(
        <div>
        {
            loading ? 
            <h1>Loading</h1> 
            :
            <>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <h3>{user.address.city}</h3>
            </> 
        }   
        </div>

    )
}

export default Description