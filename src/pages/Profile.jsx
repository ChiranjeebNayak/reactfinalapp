import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
function Profile() {
    const userData = useSelector((state) => state.userData)
    console.log(userData);

    return (
        <>
            <Header />
            <h1>Welcome to Profile Page </h1>
            <h2>
                email : {userData.email}
            </h2>
            <h2>
                gender : {userData.gender}
            </h2>
            <h2>
                firstname : {userData.firstName}
            </h2>
            <h2>
                lastName : {userData.lastName}
            </h2>
             <h2>
                id : {userData.id}
            </h2>
            <Footer />
        </>
    )
}

export default Profile