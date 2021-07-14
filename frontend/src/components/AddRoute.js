import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';


function AddRoute() {
    const [routesAll, setRoutesAll] = useState({
        route_desc: "",
        grade: 0,
        attempts: 0,
        timing: 0,
        climb_type: "BD"
    });

    const whenChange = async (e) =>{
        setRoutesAll(prevState =>({
             ...prevState, 
                [e.target.name] : e.target.value
            
        }));
    };

    let postRoute = async (e) =>{
        e.preventDefault()
        console.log("I'm going to post")
        await axios.post(`http://localhost:8000/api/route/`, routesAll).then(res=>{
            console.log("success",res)
        }).catch(err=>{
            console.log(err.response)
        });
        document.getElementById("routeForm").reset();
    };
    
    console.log("this is 2nd all", routesAll)

    return (
        <div className="container">
            <form id="routeForm" className="container" method="post" onSubmit={postRoute} >
                <input className="row mx-1 my-1" type="text" placeholder="name/colour" name="route_desc" onChange={whenChange} />
                <input className="row mx-1 my-1" type="text" placeholder="grade(bars)" name="grade" onChange={whenChange} />
                <input className="row mx-1 my-1" type="number" placeholder="attempt(s)" name="attempts" onChange={whenChange} />
                <input className="row mx-1 my-1" type="float" placeholder="timing" name="timing" onChange={whenChange} />
                <select name="climb_type" onChange={whenChange}>
                    <option value="BD">Boulder</option>
                    <option value="TR">Top Rope</option>
                    <option value="LD">Lead</option>
                    <option value="SP">Speed</option>
                </select>
                <Button type="submit" className="row mx-1 my-1 btn btn-dark">Submit</Button>
            </form>
        </div>
    )
}

export default AddRoute
