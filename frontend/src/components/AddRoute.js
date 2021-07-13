import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import { Button } from 'react-bootstrap';
import axios from 'axios';


function AddRoute() {
    const [routes, setRoutes] = useState([]);
    const [routeDesc, setRouteDesc] = useState('');
    const [grade, setGrade] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [timing, setTiming] = useState(0.0);
    const {register, handleSubmit} = useForm();

    const onSubmit = async data =>{
        await setRouteDesc(data.routeDesc);
        await setGrade(data.grade);
        await setAttempts(data.attempts);
        await setTiming(data.timing);
        document.getElementById("routeForm").reset()

        let postRoute = async () =>{
            await axios.post("/api/route/", {
                "route_desc" : routeDesc,
                "grade" : grade,
                "attempts" : attempts,
                "timing" : timing
            }).then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        }
        await postRoute()
    }

    return (
        <div>
            <form id="routeForm" className="container" method="post" onSubmit={
                handleSubmit(onSubmit)} >
                <input className="row mx-1 my-1" type="text" placeholder="name/colour" {...register("routeDesc")} />
                <input className="row mx-1 my-1" type="text" placeholder="grade(gym rating)"{...register("grade")} />
                <input className="row mx-1 my-1" type="number" placeholder="attempt(s)" {...register("attempts")} />
                <input className="row mx-1 my-1" type="float" placeholder="timing" {...register("timing")} />
                <Button className="row mx-1 my-1" type="submit" className="btn btn-dark">Submit</Button>
            </form>
        </div>
    )
}

export default AddRoute
