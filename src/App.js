import React from 'react'
import User from './container/User'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleUser from './container/SingleUser'
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<User />} />
                    <Route path='/user/:userId' element={<SingleUser />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App