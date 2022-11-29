import React from 'react'


/*
SideBarItem is a child container of SideBar.
props:
- title: the text content of the item.
- icon: the icon of the item. (i.e svg component)
*/
export default function SideBarItem(props){
    return(
        <div className="sidebar-item">
            <div className="sidebar-item-icon">{props.icon}</div>
            <h1>{props.title}</h1>
        </div>
    )
}