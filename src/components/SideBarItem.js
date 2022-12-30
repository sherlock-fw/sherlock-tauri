import React from 'react'


/*
SideBarItem is a child container of SideBar.
props:
- title: the text content of the item.
- icon: the icon of the item. (i.e svg component)
*/
export default function SideBarItem(props){
  
    const showSidebar = () => props.hook.setSidebar(props.title)
    return(
        <div className={props.hook.sidebar === props.title ? "sidebar-item selected" : "sidebar-item"} onClick={showSidebar}>
           <div className="sidebar-item-notch"/>
            <div className="sidebar-item-icon">{props.icon}</div>
            <div className="sidebar-item-title"><h1>{props.title}</h1></div>
        </div>
    )
}