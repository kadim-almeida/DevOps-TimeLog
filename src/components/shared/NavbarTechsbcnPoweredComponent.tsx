import { Box, Grid } from '@mui/material';
import React from 'react';
import { _VALUES } from '../../resources/_constants/values';
import techsBCNLogo from './../../../static/techsBCN.png';
import LogoBanrisul from './../../../images/logo.png';

const NavbarTechsbcnPoweredComponent: React.FC = () => {
  const techsbcnUrl = 'https://techsbcn.com/es/';
  const extensionURL = 'https://marketplace.visualstudio.com/items?itemName=TechsBCN.DevOps-TimeLog';
  return (
    <Box className="navbar-techsbcn-powered-component">
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={6}>
          <Box display="flex" alignItems="center">
            <a target="_blank" href={extensionURL} rel="noreferrer">
              <img src={LogoBanrisul} alt="Logo" className="logo-banrisul" />
            </a>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="flex-end" alignItems="center">
            <Box mr={1} fontSize={'1rem'} fontWeight="bold" className="main-color">
              {_VALUES.POWERED_BY}
            </Box>
            <a target="_blank" href={techsbcnUrl} rel="noreferrer">
              <img src={techsBCNLogo} alt="techsLogo" className="techs-bcn-logo" />
            </a>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NavbarTechsbcnPoweredComponent;
