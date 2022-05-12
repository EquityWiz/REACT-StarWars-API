import React from "react";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";

export default () => {
    const [swapi , setSwapi] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people`)
                .then(response => setSwapi(response.data.results))
                .catch(err => console.log(err))
    }, []);

    return(
    <div>
        <ul>
            {swapi.map((object, i) => (
                    <NavLink style={({ isActive }) => ({
                                                        display: "block",
                                                        margin: "1rem 0",
                                                        color: isActive ? "red" : "",})}
                    to={`/people/${i+1}`}
                    key={i+1}>{object.name}</NavLink>
                ) )}
        </ul>
        <Outlet />
    </div>
    );
}