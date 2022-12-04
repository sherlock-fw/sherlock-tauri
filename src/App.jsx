import {React} from 'react';
import {Route,Routes} from 'react-router-dom';
import {
	AppShell,
	Navbar,
	useMantineTheme,
} from '@mantine/core';
import NavbarItems from './components/NavbarItems';
import Dashboard from './views/Dashboard';
import EnginesView from './views/EnginesView';
import TargetView from './views/TargetView';
import SettingsView from './views/SettingsView';
export default function App() {

	const theme = useMantineTheme();


	return (
		<AppShell
		styles={{
			main: {
			background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
			},
		}}
		navbarOffsetBreakpoint="sm"
		asideOffsetBreakpoint="sm"
		navbar={
			<Navbar p="md" width={{ sm: 300, lg: 300 }}>
			<NavbarItems/>
			</Navbar>
		}>
			<Routes>
			<Route path="/" element={<Dashboard/>}/> 
				<Route path="/dashboard" element={<Dashboard/>}/> 
				<Route path="/engines" element={<EnginesView/>}/> 
				<Route path="/target" element={<TargetView/>}/> 
				<Route path="/settings" element={<SettingsView/>}/> 
			</Routes>
		</AppShell>
	);
}
