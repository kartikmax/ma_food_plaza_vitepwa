import React from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import FloatingNavBar from '../../components/FloatingNavbar';

const AddToCart: React.FC = () => {
  return (
    <Container maxWidth="xs">
      <Paper elevation={3} className="p-4 rounded-md shadow-md">
        <Typography variant="h5" align="center" gutterBottom>
          Food Cart
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="flex justify-between items-center mb-2">
              <div>
                <Typography variant="body1">Food Item 1</Typography>
                <Typography variant="body2" color="textSecondary">
                  $10.00
                </Typography>
              </div>
              <div>
                <Button variant="outlined" size="small">
                  Add
                </Button>
              </div>
            </div>
            
          </Grid>
        </Grid>

        <div className="mt-4">
          <Typography variant="h6">Cart Summary</Typography>
          <Typography variant="body2" color="textSecondary">
            Total: $30.00
          </Typography>
        </div>

        {/* Checkout button */}
        <div className="mt-4">
          <Button variant="contained" color="primary" fullWidth>
            Checkout
          </Button>
        </div>
      </Paper>
      <FloatingNavBar/>
    </Container>
  );
};

export default AddToCart;
