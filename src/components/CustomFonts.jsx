import { Global } from '@mantine/core';
import logoFont from '../assets/fonts/SixCapsRegular.ttf'

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'SixCaps',
            src: `url('${logoFont}')`,
            fontWeight: 400,
            fontStyle: 'regular',
          },
        },
        
      ]}
    />
  );
}