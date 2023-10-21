import React from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import FloatingNavBar from '../../components/FloatingNavbar';

const AddToCart: React.FC = () => {
  return (
    <Container maxWidth="xs">
      <Paper elevation={3} className="p-4 rounded-md shadow-md">
        <Typography variant="h5" align="center" gutterBottom>
          Zomato Cart
        </Typography>
        <Grid container spacing={2}>
          {/* Food item list */}
          <Grid item xs={12}>
            {/* Replace with your food item list */}
            <div className="flex justify-between items-center mb-2">
              <div>
                <Typography variant="body1">Food Item 1</Typography>
                <Typography variant="body2" color="textSecondary">
                  $10.00
                </Typography>
              </div>
              <div>
                {/* Add to cart button */}
                <Button variant="outlined" size="small">
                  Add
                </Button>
              </div>
            </div>
            {/* Repeat this section for each food item */}
          </Grid>
        </Grid>

        {/* Cart summary */}
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
