import React from 'react'
import SearchBar from '../components/SearchBar'
import {ReactComponent as Logo} from '../images/detective_logo.svg'



export default function SearchWindow(){
	    return(
		            <div>
		                <div className='search-window'>
		                     <Logo className="logo"/>
		                    <SearchBar placeholder="Search"  />
		                </div>
		            </div>

		        )
}
