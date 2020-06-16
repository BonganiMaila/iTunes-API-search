import React, { useEffect, useState } from 'react';
import './App.css';
import './Result.css';
import './footer.css';
import axios from 'axios';
import Result from './Result';


const App = () => {
    const [value, setValue] = useState({
        query: '',
        type: '',
        hits: [],
        favorites: []
    })
    const { query, type, hits, favorites } = value;

    const onSubmit = (e) => {
        e.preventDefault();
        axios.get(`/api/search/${query}/${type}`)
            .then(response => setValue({...value, hits: response.data }))
            .catch(err => console.log(err))
    }

    
        const favorite = ({result, addFav})=>{
            // const result =props.result;
             const {artistName, trackName} = result;
    }


    console.log(value)

    return ( < div className = "app" >

        { /*Header for the home page*/ } 
        <div className = "home_page"> 
        <h2> iTunes Search </h2> 
        <h3> This is a website where you can look
        for your favorite Artists, songs, and videos to enjoy on your device </h3>  


        { /*Form where you can enter the song you are searching for*/ } 
        <form onSubmit = { onSubmit }
        className = "form">

        { /*Input box to enter the name*/ } 
        <input name = "query"
        value = { query }
        onChange = { e => setValue({...value, query: e.target.value }) }
        placeholder = "Enter name"
        className = "inputs" />


        { /*Selection box to enter the type of media*/ } 
        <select id = "select"
        className = "inputs"
        name = "type"
        value = { type }
        onChange = { e => setValue({...value, type: e.target.value }) }
        placeholder = "Select media type" > Select media type 
        <option value = "musicTrack" > Music Track </option> 
        <option value = "musicVideo" > Music Video </option> 
        <option value = "movie" > Movie </option> <option value = "podcast" > Podcast </option> 
        <option value = "tvEpisode" > tv Episode </option> 
        <option value = "ebook" > ebook </option> 
        </select>

        { /*Button to submit the field entries*/ } 
        <input type = "button"
        onClick = { onSubmit }
        value = "Submit" />
        </form>

        <div> { /*The mapping of results*/ } {
            hits && hits.map((result) => < Result result = { result }
            addFav = {
                (fav) => setValue({...value, favorites: [favorites, fav] }) }
                />
            )
        }


        </div>
        </div>


        { /*Footer of the page*/ } 
        <div className = "footer">
        <footer>

        This iTunes project was done by  <a href = "https://github.com/BonganiMaila"> Bongani Maila </a>.    
        </footer> 
        </div>  


        </div>

    );
}

export default App;


/*
<pre className="size">
        {
            JSON.stringify(hits,null,2)
        }
    </pre>

    <pre className="size">
        {
            JSON.stringify(favorites,null,2)
        }
    </pre>

*/

