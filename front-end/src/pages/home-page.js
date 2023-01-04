import React, { useEffect } from 'react';
import { PostComponent } from '../component/post-component';
import{ useNavigate, usseNavigate } from "react-router-dom";

export const HomePage = () => {
const navigate = useNavigate();

useEffect(() => {
    const id = localStorage.getItem('uid')
    if (!id) navigate('/sign-in')
}, []);

    return (
        <div>
            Home
            <PostComponent />
        </div>
    )
}