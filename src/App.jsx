import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePages/HomePage'
import AuthPage from './Pages/AuthPage/AuthPage'
import PageLayouts from './Layouts/PageLayouts/PageLayouts'
import ProfilePage from './Pages/ProfilePage/ProfilePage'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase/firebase'


function App() {
    const [authUser] = useAuthState(auth)
    return (
        <PageLayouts>
            <Routes>
                <Route path='/' element={authUser ? <HomePage /> : <Navigate to="/auth" />}/>
                <Route path='/auth' element={!authUser ? <AuthPage/> : <Navigate to="/" />}/>
                <Route path='/:username' element={<ProfilePage/>}/>
            </Routes>
        </PageLayouts>
    );
}

export default App