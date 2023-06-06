import * as React from 'react';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
export default function Footer() {return(<Paper sx={{
bottom: 0,
width: '100%',
backgroundColor:'black', position:'absolute'}} component="footer" square variant="outlined">
<Container maxWidth="lg">
  <Box
    sx={{
      flexGrow: 1,
      justifyContent: "center",
      display: "flex",
      my:1,
    }}
  >
    <Link href="/">
      <img src="/images/logo.svg" width={75} height={30} alt="Logo" />
    </Link>
  </Box>

  <Box
    sx={{
      flexGrow: 1,
      justifyContent: "center",
      display: "flex",
      mb: 2,
    }}
  >
    <Typography variant="caption" color="white">
      Copyright ©2022. [] Limited
    </Typography>
  </Box>
</Container>
</Paper>);}