import React from 'react';
import { Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import Logo from '../components/Logo';
export default function Dashboard(){

    return(
        <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"column"}}>
			<Logo></Logo>
			<Input 
			styles={(theme) => ({
        		input: {
          			'&:focus-within': {
            		borderColor: theme.colors.dark[3],
          			},
					width:"50vw",
					borderColor: theme.colors.dark[5],
					color: theme.colors.yellow[3],
					
        		}
      		})}
			placeholder="What Would you like me to find?"
			rightSection={
				<div>
					<IconSearch color="yellow" size={18} style={{display: 'block', opacity: 0.7 }} />
				</div>
			}
			/>
        </div>
    )

}