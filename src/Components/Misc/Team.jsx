import './Team.css'
import ReactSkinview3d from "react-skinview3d"
import React from "react";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import LoginButton from '../Auth/LoginButton';
import LogoutButton from '../Auth/LogoutButton';

export default function Team() {

    const [skinData, setSkinData] = useState([])

    const users = {
        gabe: "BustyBannana"
    }

    useEffect(() => {
        Object.values(users).map((username) => {
            fetchUserData(username, Date.now())
        })

    }, [])

    const fetchUserData = async (username, timestamp) => {
        const reqUrl = `https://api.mojang.com/users/profiles/minecraft/${username}?at=${timestamp}`;
        
        try {
            const response = await axios.get(reqUrl);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

    const fetchUserSkin = async (username) => {
        
    }

    return(

        <>
    <LoginButton />
    <LogoutButton />
        </>
    )
}