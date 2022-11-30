import {React,useState,Children,cloneElement} from 'react'



/*
 * SideBar is a component that is being used in every view and 
 * incharge of moving between them.
 * */
export default function SideBar(props){
	const [sidebar,setSidebar] = useState(props.selected?props.selected:"")

	//iterate the children and recreate them with props.hook
	const hook = {sidebar:sidebar,setSidebar:setSidebar}
	const RenderChildren = () => (
		Children.map(props.children, child => {
		  return cloneElement(child, {
			title: child.props.title,
			icon:child.props.icon,
			hook:hook
		 })
	   })
	 )

	return(
		<div  className="sidebar-container">{<RenderChildren/>}</div>
	)}
