import React from 'react'
import { Box } from '@mui/material';

const Information = () => (
  <Box
    sx={{
      width: '60%',
      height: '50%',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      padding: '10px 20px',
      backgroundColor: 'success.light',
    }}
  >
    <p>Данное приложение предназначено для создания заметок</p>
    <p>React version: 17.0.1</p>
  </Box>
)

export default Information
