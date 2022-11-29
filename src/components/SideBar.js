import React from 'react'



/*
 * SideBar is a component that is being used in every view and 
 * incharge of moving between them.
 * */
export default function SideBar(props){

	return(
		<div className="sidebar-container">{props.children}</div>
	)}
