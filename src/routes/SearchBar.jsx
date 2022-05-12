import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { NavFilter } from "../data";
import { useNavigate } from "react-router-dom";

export default () => {
    // const [searchParams, setSearchParams] = useSearchParams();
    // const navigate = useNavigate();

    // const Router = () => {
    //     if(searchParams.get('filter') == "people" || searchParams.get('filter') == "planets" ){
    //         return navigate('/people')
    //     }}

    return(
    <div style={{ display: "flex"}}>
            {/* <label htmlFor="filter">Search for</label> */}
            {/* <input value={searchParams.get("filter")} onChange={(e) => 
                {let filter = e.target.value;
                    if(filter)
                    {
                        setSearchParams({filter});
                        console.log(searchParams.get('filter'));
                    }
                    else
                    {
                        setSearchParams({});
                    }}
                    }>
            </input> */}
    </div>
    );
}