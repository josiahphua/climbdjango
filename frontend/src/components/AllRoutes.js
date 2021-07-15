import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import RouteDG from './mat-ui/RouteDG';
import AddRoute from './AddRoute';



function AllRoutes({selectRow}) {
    const [rows, setRows] = useState([]);
    const [show, setShow] = useState(false);

    console.log(selectRow)

    useEffect(() => {
        let getRoutes = async () =>{
            await axios.get(`http://localhost:8000/api/route/`).then(res=>{
                setRows(res.data);
                
            }).catch(err=>{
                console.log(err.response)
                console.log("error for getting Routes", err);
            })
        }
        getRoutes();
    }, []);

    return (
        <div>
            <div className="container" style={{"width": "100%"}}>
                <RouteDG rows={rows} />
            </div>

            <div className="container">
                <Link className="btn btn-dark nav-link" to='/routes/add'>Add Attempted Route</Link>
            </div>

        </div>
    );
};

export default AllRoutes

