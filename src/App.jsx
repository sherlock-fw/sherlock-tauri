import React from 'react';
import SideBar from './components/SideBar';
import SideBarItem from './components/SideBarItem'
import SearchView from './views/SearchView';
import { ThemesContext,useMode } from './theme';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {ReactComponent as SearchIcon} from './images/google_search.svg'
import {ReactComponent as EngineIcon} from './images/engine.svg'
import {ReactComponent as ResultsIcon} from './images/google_results.svg'
import {ReactComponent as PreferencesIcon} from './images/google_settings.svg'
import EnginesView from './views/EnginesView';

export default function App(){
	const [theme, colorMode] = useMode();

	return(
		<ThemesContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline/>
					<div>
						<main className='content'>
							<SideBar selected="Search">
							<SideBarItem title="Search" icon={<SearchIcon/>}/>
							<SideBarItem title="Engines" icon={<EngineIcon/>}/>
							<SideBarItem title="Results" icon={<ResultsIcon/>}/>
							<SideBarItem title="Preferences" icon={<PreferencesIcon/>}/>
							</SideBar>
							<SearchView />
						</main>
					</div>
			</ThemeProvider>
		</ThemesContext.Provider>
	)
}
