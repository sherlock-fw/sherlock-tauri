import { Title } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";


/*
Logo: 
Sherlock logo component
*/
export default function Logo(){
    const theme = useMantineTheme()
    return(
        <Title style={
            {
                color:theme.colors.yellow[4],
                opacity:0.6,
                letterSpacing:"16px", 
                fontSize:102,
                fontFamily:"SixCaps", 
                marginTop:"30vh",
                cursor:"default", 
                WebkitUserSelect:"none",
            }}> Sherlock </Title>
    );
}