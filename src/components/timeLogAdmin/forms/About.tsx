import { Box, Grid } from '@mui/material';
import React from 'react';
import { MainWrapperComponent } from 'techsbcn-storybook';
import { _VALUES } from '../../../resources/_constants/values';
import TechsbcnPoweredComponent from '../../shared/TechsbcnPoweredComponent';
import { TextSimpleComponent } from 'techsbcn-storybook';

interface AboutProps {
  version: string;
}

const About: React.FC<AboutProps> = (props) => {
  return (
    <Box sx={{ alignSelf: 'flex-start', width: '100%' }}>
      <MainWrapperComponent
        headerProps={{
          title: _VALUES.ABOUT_TIMELOG_FOR_AZURE_DEVOPS,
        }}
      >
        <Grid container flexDirection="column" spacing={3}>
        <Grid item>
          <TextSimpleComponent
            fullWidth
            label={
              <Box fontSize={'1.1rem'} fontWeight="bold" className="main-color">
                {_VALUES.VERSION}
              </Box>
            }
            value={<Box>{props.version}</Box>}
          />
        </Grid>
        <Grid item>
          <TextSimpleComponent
            fullWidth
            label={
              <Box fontSize={'1.1rem'} fontWeight="bold" className="main-color">
                {_VALUES.CONTACT}
              </Box>
            }
            value={
              <a className="hover-underline" href={`mailto:suporte@onefactory.com.br`}>
                suporte@onefactory.com.br
              </a>
            }
          />
        </Grid>
        <Grid item>
          <TechsbcnPoweredComponent />
        </Grid>
        <Grid item>
          <Box component="p" sx={{ fontSize: '0.75rem', color: 'text.secondary', margin: 0 }}>
            Este sistema é baseado no Time Log para Azure DevOps, extensão original da TechsBCN, adaptada e customizada para este ambiente.
          </Box>
        </Grid>
      </Grid>
    </MainWrapperComponent>
    </Box>
  );
};

export default About;
