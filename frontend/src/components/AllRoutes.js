import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import RouteDG from './mat-ui/RouteDG';
import { Chart } from 'react-google-charts';
import { Button } from 'react-bootstrap';

function AllRoutes() {
    const [rows, setRows] = useState([]);
    const [selectRow, setSelectRow] = useState([]);
    const [display, setDisplay] = useState(false);
    // const [plot, setPlot] = useState([])
    let temp = []
    let plot =[['Grades (Bar)', 'Attempts']]
    

    console.log("Selected Rows: ",selectRow)
    console.log("All Rows Available: ",rows)
 
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

    let handleClick = async () => {
        let selected = Object.values(selectRow)
        if (selected.length > 1){
            plot.push(selected)
        } else {
            rows.forEach(obj=>{
                let miniTemp = []
                miniTemp.push(String(Object.values(obj)[2]))
                miniTemp.push(Object.values(obj)[3])
                plot.push(miniTemp)
                console.log(miniTemp)
            })
            console.log(plot)
        }
        setDisplay(true)
    }

    return (
        <div>
            <div className="container" style={{"width": "100%"}}>
                <RouteDG rows={rows} setRow={setSelectRow} />
            </div>

            <div className="container">
                <Link className="btn btn-dark nav-link" to='/routes/add'>Add Attempted Route</Link>
            </div>
            <div className="container">
                <Button className="btn btn-dark nav-link" onClick={handleClick}>Plot data</Button>
            </div>
            {display ? 
                <Fragment>
                    <div className="container mt-5 flex justify-content-center align-items-center">
                    <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="Bar"
                    loader={<div>Getting Performance Chart</div>}
                    data={[
                        ['Grades (Bar)', 'Attempts'],
                        ['4', 5],
                        ['5', 12],
                        ['6', 20],
                        ['7', 29],
                    ]}
                    options={{
                        // Material design options
                        chart: {
                            title: 'Climbing Performance',
                            subtitle: 'Attempts on various grades in March to June',
                        },
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '2' }}
                    />
                    
                    </div>
                </Fragment>
                : <Fragment></Fragment>}
        </div>
    );
};

export default AllRoutes

