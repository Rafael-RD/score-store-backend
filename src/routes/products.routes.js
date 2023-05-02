import { Router } from "express";
import { getProducts } from "../controllers/products.controllers.js";
import { postOrder } from "../controllers/order.controllers.js";

const productsRouter=Router();

productsRouter.get('/products', getProducts);
products.post('/cart', postOrder);

export default productsRouter;