import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserById } from '../redux/action/user.action'

const SingleUSer = () => {
    const { selectedUser, isLoading } = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()
    console.log("SELECTED_USERS", selectedUser)
    const { userId } = useParams()

    useEffect(() => {
        dispatch(getUserById(userId))
    }, [dispatch])
    if (isLoading) return <p>Loading...</p>
    return (
        <div className='user'>
            <div className='user_box'>
                <div className='box_one'>
                    {!selectedUser ? <p>User Details Could not be found</p> :
                        <div className='name_contaner'>
                            <span>Name: {selectedUser.name}</span>
                            <span>Name: {selectedUser.username}</span>
                            <span>Name: {selectedUser.email}</span>
                            <span>Name: {selectedUser.phone}</span>
                            <span>Name: {selectedUser.address.zeepcode}</span>
                            <span>Name: {selectedUser.address.street}</span>
                            <span>Name: {selectedUser.address.city}</span>
                            <button>WOW</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default SingleUSer