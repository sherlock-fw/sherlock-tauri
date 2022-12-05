import React from 'react';
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { CustomFonts } from './components/CustomFonts';

import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<MantineProvider 
				theme={{colorScheme: 'dark',
					}} withGlobalStyles withNormalizeCSS>
				<CustomFonts/>
				<App />
			</MantineProvider>
		</BrowserRouter>
	</React.StrictMode>
);
