import React, { useContext} from 'react';
import SearchBar from '../components/SearchBar';
import { ThemesContext,tokens } from '../theme';
import {Box, useTheme} from "@mui/material";
import {ReactComponent as Logo} from '../images/detective_logo.svg';

export default function SearchView(){
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ThemesContext);

	return(
		                <div  onClick={colorMode.toggleColorMode}  style={{backgroundColor:colors.primary[400]}} className='search-window'>
							 <Logo className="logo"/>
		                    <SearchBar placeholder="Search" />
		                </div>
		        )
}
