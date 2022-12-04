import { useState } from 'react';
import { IconGauge, IconFingerprint, IconSettings,IconEngine} from '@tabler/icons';
import { Box, NavLink} from '@mantine/core';
import { NavLink as RouterLink}  from 'react-router-dom';

const data = [
  { icon: IconGauge, label: 'Dashboard'},
  { icon: IconEngine, label: 'Engines'},
  { icon: IconFingerprint, label: 'Target'},
  { icon: IconSettings, label: 'Settings' },
];


export default function NavbarItems() {
  const [active, setActive] = useState('Dashboard');

  const items = data.map((item) => (
    <RouterLink to={'/'+item.label.toLowerCase()}>
      <NavLink
        color="cyan"
        key={item.label}
        active={item.label === active}
        label={item.label}
        description={item.description}
        rightSection={item.rightSection}
        icon={<item.icon size={32} stroke={1.5} />}
        onClick={() => setActive(item.label)}
      />
    </RouterLink>
  ));

  return <Box sx={{ width: "100%" }}>{items}</Box>;


}