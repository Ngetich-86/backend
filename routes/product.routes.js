
import {getProducts, getProduct, createProduct, updateProduct, deleteProduct} from '../controllers/product.controller.js';

const productRoutes = (app) => {
    app.get('/products', getProducts);
    app.get("/products/:id", getProduct);
    app.post("/products", createProduct);
    app.put("/products/:id", updateProduct);
    app.delete("/products/:id", deleteProduct);
};
export default productRoutes;



