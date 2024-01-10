import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { IProduct } from "../../Common/types";
import {  useNavigate } from "react-router-dom";

const ProductList: React.FC = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState<IProduct[]>([]);

  const getProductsDetail = (id: number) =>{
    navigate(`/view-product?id=${id}`);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const products = await fetch("https://fakestoreapi.com/products");
    const productList = await products.json();
    if (productList.length) {
      setProducts(productList);
    }
  };

  if (!products.length) {
    return (
      <Grid container spacing={2}>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </Grid>
    );
  }
  
  return (
    <Grid container spacing={2}>
      {products.length &&
        products.map((product: IProduct) => {
          return (
            <Grid item xs={3} key={product.id}>
              <Card sx={{ minWidth: 175 }}>
                <CardContent style={{ textAlign: "center" }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={product.image}
                    alt="Paella dish"
                    style={{ objectFit: "contain" }}
                  />
                  <Typography sx={{ mt: 2 }} color="text.secondary">
                    <strong>{product.title}</strong>
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                  >
                    <strong>{product.price}</strong>
                  </Typography>
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating"
                      defaultValue={1}
                      value={product.rating.rate}
                      precision={0.1}
                    />
                  </Stack>
                </CardContent>
                <CardActions>
                  <button onClick={() => getProductsDetail(product.id)}>View Product Details</button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default ProductList;
