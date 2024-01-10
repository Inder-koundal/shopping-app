import React, { useEffect, useState } from "react";
import { IProduct } from "../../Common/types";
import {
  Box,
  CardContent,
  CircularProgress,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const ViewProduct: React.FC = () => {
  let location = useLocation();

  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    if (location && location.search) {
      const params = new URLSearchParams(location.search);
      const id = params.get("id");
      if (id) {
        getviewProduct(id);
      }
    }
  });

  const getviewProduct = async (id: string) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();
    setProduct(product);
  };

  if (!product) {
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
      <Grid item xs={4}>
        <img src={product.image} height={350} width={350} alt="product" />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h3" sx={{ mb: 1.5 }} color="text.secondary">
          {product.title}
        </Typography>
        <Typography variant="body1" display={"flex"}>
          {product.rating.rate}
          <Stack spacing={1}>
            <Rating
              name="half-rating"
              defaultValue={1}
              value={product.rating.rate}
              precision={0.1}
              readOnly
            />
          </Stack>
          {product.rating.count}
        </Typography>
        <hr></hr>
        <h3>Price</h3>
        <Typography variant="h2">
          <CurrencyRupeeIcon />
          {product.price}
        </Typography>
        <hr></hr>
        <Typography>
          <h2>Description</h2>
          {product.description}
        </Typography>
        <CardContent />
      </Grid>
    </Grid>
  );
};

export default ViewProduct;
