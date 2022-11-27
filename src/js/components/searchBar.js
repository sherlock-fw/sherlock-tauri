import React from 'react'
//import rightArrow from '../../images/right_arrow.svg'



/*
SearchBar: is a component that is used for the search window.
Its main purpose is to recieve a query from the user and parse it.

props:
- placeholder: set the placeholder for the search bar
*/



export default function SearchBar(props){

    return(
        <div className = "search-bar-container">
            <input type="text" placeholder={props.placeholder}></input>
            <div className='submit-btn'>
            <svg xmlns="http://www.w3.org/2000/svg"><path d="m28.15 35.25-1.65-1.6 8.6-8.6H8.6V22.8h26.5l-8.65-8.65 1.65-1.55 11.35 11.3Z"/>
            </svg>
            </div>
        </div>

)}

