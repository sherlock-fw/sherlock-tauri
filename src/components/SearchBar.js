import React from 'react'
import {ReactComponent as RightArrow} from '../images/right_arrow.svg'


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
	    <RightArrow/>
            </div>
        </div>

)}

