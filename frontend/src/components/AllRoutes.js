import React, { useState, useEffect } from 'react';
import axios from "axios";
import {useForm} from 'react-hook-form';
import { Table} from '@material-ui/core'
import RouteDG from './mat-ui/RouteDG';
import {Modal, Button} from 'react-bootstrap';
import AddRoute from './AddRoute';



function AllRoutes() {
    const [rows, setRows] = useState([])
    const [show, setShow] = useState(false)

    const toggleform = () => setShow(!show)
    
    

    useEffect(() => {
        let getRoutes = async () =>{
            await axios.get("/api/route/").then(res=>{
                setRows(res.data)
                
            }).catch(err=>{
                console.log("error for getting Routes", err)
            })
        }
        getRoutes()
    }, [])


    return (
        <div>
            <div className="container" style={{"width": "100%"}}>
                <RouteDG rows={rows} />
            </div>

            <div className="container">
                <Button className="btn btn-dark" onClick={toggleform}>Add Route</Button>
                {show?
                    <>
                      <AddRoute />  
                    </>
                    : <></>
                }
            </div>

        </div>
    )
}

export default AllRoutes

