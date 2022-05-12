import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default () => {
    let params = useParams();
    let personId = parseInt(params.id,10)
    const [person, setPerson ] = useState([]);


    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${personId}`)
                .then(response => setPerson(response.data))
                .catch(err => console.log(err))
    }, [personId]);

    return(
        <div style={{textAlign: "center"}}>
            <hgroup>
                <h5>{person.name}</h5>
                <h6>Height: {person.height}</h6>
                <h6>Mass: {person.mass}</h6>
            </hgroup>
        </div>
    );
}