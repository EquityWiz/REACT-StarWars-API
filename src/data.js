import React from "react";
import { useNavigate } from "react-router-dom";


export function NavBack()
{
    let navigate = useNavigate();
    return navigate(-1);
}

export function NavFilter (filter)
{
    let navigate = useNavigate();
    return navigate(`/${filter}`);
}

