import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card">
      <CardMedia component="img" image={product.image} alt={product.name} height="140" />
      <CardContent>
        <Typography>{product.name}</Typography>
        <Typography paddingY="0.5rem" fontWeight="708">
          ${product.cost}
        </Typography>
        <Rating 
        name="read-only"
        value={product.rating}
        precision={0.5}
        readOnly
        />
      </CardContent>
      <CardActions className="card-actions">
        <Button 
        className="card-button"
        fullwidth
        variant="contained"
        startIcon={<AddShoppingCartOutlined />}
        onClick={handleAddToCart}
        >
        Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
