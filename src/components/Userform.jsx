import React, { useRef } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Userform() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userIdElement = useRef(null);
    const passwordElement = useRef(null);
    const callLoginApi = async (e) => {
        e.preventDefault();
        console.log("We are in call Login API");
        console.log(userIdElement.current.value);
        console.log(passwordElement.current.value);
        const api = 'https://dummyjson.com/auth/login';
        const requestBody = {
            username: "emilys",
            password: "emilyspass"
          }
        try {
            const response = await axios.post(api, requestBody);
            console.log(response);
            if (response.status === 200) {
                dispatch({ type: 'SET_DATA', payload: response.data })
                navigate("/profile")

            } else {
                console.log("user data is missing")
            }

        }
        catch (err) {
            console.log("Error =: " + err)
        }


    }
    return (
        <>
            <form>
                <div>
                    <span> UserId: </span>
                    <input
                        type='text'
                        placeholder='userid'
                        ref={userIdElement}
                    ></input>
                </div>
                <div>
                    <span>Password</span>
                    <input type="password"
                        placeholder='password'
                        ref={passwordElement}
                    />
                </div>
                <button type='submit' onClick={callLoginApi}>Login</button>
            </form>
        </>
    )
}

export default Userform