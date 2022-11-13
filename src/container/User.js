import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllUser } from '../redux/action/user.action'

const User = () => {

    const { users, isLoading } = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()
    // console.log(users)

    useEffect(() => {
        dispatch(getAllUser())
    }, [])

    return (
        <div className='user'>
            <div className='user_box'>
                {
                    isLoading ? <p>Please wait Loading...</p> :
                        users.map((items) => {
                            const { id, name, username, email, phone, address } = items
                            return (
                                <div className='box_one' key={id}>
                                    <div className='name_contaner'>
                                        <span>Name: {name}</span>
                                        <span>username: {username}</span>
                                        <span>Email : {email}</span>
                                        <span>Phone : {phone}</span>
                                        <span>Street : {address.street}</span>
                                        <span>zipcode : {address.zipcode}</span>
                                        <span>City : {address.city}</span>
                                    </div>
                                    <Link to={`/user/${id}`}>
                                        <button>Single User</button>
                                    </Link>
                                </div>
                            )
                        })}
            </div>
        </div>
    )
}

export default User