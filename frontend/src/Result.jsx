import React , { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Result.css';
//icdmport {Card, CardBody, CardTitle,CardText} from 'reactstrap';



const Result = ({result, addFav})=>{
   // const result =props.result;
    const {artistName, trackName, kind, trackPrice, currency, artworkUrl100,primaryGenreName} = result;

    return (

       
        //A division to hold everything together
    <div className="div" > 
        <div className="row">
            <div className="column">
                <div className="card">
                    <img src={artworkUrl100} alt="song art work " className="card_image" /> <br/>
                    <h6>Artist name: {artistName}</h6>
                    <h6>Track name: {trackName}</h6>
                    <h6>Kind: {kind}</h6>
                    <h6>Genre: {primaryGenreName}</h6>
                    <h6>Price: {currency} {trackPrice}</h6>
                </div>
            </div>  
       </div>
    </div>


    )
}
export default Result




