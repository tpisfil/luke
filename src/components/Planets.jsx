import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Planets = props => {
    const [planet, setPlanet] = useState(null);
    const [id, setId] = useState(1);
    const [category, setCategory] = useState("planets");
    const [resetChar, setResetChar] = useState (false);
    

    useEffect(() => {
        axios.get (`https://swapi.dev/api/${category}/${id}`)
        .then (res => setPlanet(res.data))
    },[resetChar])

    const submitHandler = e =>{
        e.preventDefault();
        setResetChar(!resetChar);
    }

    return(
        <div>
            <h1>Luke APIwalker</h1>
            <form onSubmit = {submitHandler}>
                <select name="categories" onChange = {e=> setCategory(e.target.value)}>
                    <option value="planets">Planets</option>
                    <option value="people">People</option>
                </select>
                <input type ="text" name = "id" onChange = {e => setId(e.target.value)}/>
                <input type ="submit" value ="Submit"/>
            </form>
            {
            planet ? 
            <div>
                <h2>{planet.name}</h2>
                <h3>Climate: {planet.climate}</h3>
                <h3>Terrain: {planet.terrain}</h3>
                <h3>Terrain: {planet.surface_water}</h3>
                <h3>Population: {planet.population}</h3>
            </div> : ""
            }
        </div>
    );
}

export default Planets;