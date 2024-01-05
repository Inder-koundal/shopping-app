import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, CircularProgress, Grid, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  rating: IRating
}

interface IRating {
  count: number;
  rate: number;
}
const  ProductList: React.FC = () => {

  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const products = await fetch('https://fakestoreapi.com/products')
    const productList = await products.json()
    if (productList.length) {
      setProducts(productList)
    }
  }
    
  if(!products.length) {
    return (
      <Grid container spacing={2}>
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      </Grid>
    )
  }

  return (
    <Grid container spacing={2}>
      {
        products.length && products.map((product: IProduct) => {
          return (
            <Grid item xs={3}>
              <Card sx={{ minWidth: 200 }}>
                <CardContent style={{textAlign: 'center'}}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={product.image}
                    alt="Paella dish"
                    style={{objectFit: 'contain'}}
                  />
                  <Typography sx={{mt: 2 }} color="text.secondary">
                    <strong>{product.title}</strong>
                  </Typography>
                  {/* <Typography variant='caption' sx={{ mb: 1.5 }} color="text.secondary">
                    <strong>{product.description}</strong>
                  </Typography> */}
                  
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })
      }
    </Grid>

  )
}

export default ProductList
