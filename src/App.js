import React from 'react';
import SideBar from './components/SideBar';
import SideBarItem from './components/SideBarItem'
import SearchWindow from './views/SearchWindow';

import {ReactComponent as SearchIcon} from './images/google_search.svg'
import {ReactComponent as EngineIcon} from './images/engine.svg'
import {ReactComponent as ResultsIcon} from './images/google_results.svg'
import {ReactComponent as PreferencesIcon} from './images/google_settings.svg'

export default function App(){

	return(
		<div>
		<SideBar>
		<SideBarItem title="Search" icon={<SearchIcon/>}/>
		<SideBarItem title="Engines" icon={<EngineIcon/>}/>
		<SideBarItem title="Results" icon={<ResultsIcon/>}/>
		<SideBarItem title="Preferences" icon={<PreferencesIcon/>}/>
		</SideBar>

		<SearchWindow />
		</div>
	)
}
