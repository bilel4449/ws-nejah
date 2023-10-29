import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { getAllUsers } from '../redux/action';
import UserCard from './UserCard';
export const UserList = () => {
    const {users,loading}=useSelector(state=>state)
    const dispatch=useDispatch();
    useEffect(() => {
   dispatch(getAllUsers())
    }, [])
    
    console.log(users)
  return (
    <div>
        {
        loading?<h1>Loading ...</h1>:
        React.Children.toArray(users.map(el=><UserCard user={el} />))}
        </div>
  )
}
