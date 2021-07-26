import React, { useEffect, useState } from 'react';
import axios from 'axios';


const People = props => { 
    const [person, setPerson] = useState(null);
    const [id, setId] = useState(1);
    const [category, setCategory] = useState("people");
    const [resetChar, setResetChar] = useState (false);
    

    useEffect(() => {
        axios.get (`https://swapi.dev/api/${category}/${id}`)
        .then (res => setPerson(res.data))
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
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <input type ="text" name = "id" onChange = {e => setId(e.target.value)}/>
                <input type ="submit" value ="Submit"/>
            </form>
            {
            person ? 
            <div>
                <h2>{person.name}</h2>
                <h3>Height: {person.height}</h3>
                <h3>Mass: {person.mass}</h3>
                <h3>Hair Color: {person.hair_color}</h3>
                <h3>Skin Color: {person.skin_color}</h3>
            </div> : ""
            }
        </div>
    );
}

export default People;