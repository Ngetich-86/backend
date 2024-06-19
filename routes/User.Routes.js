import {
    loginUser,
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    resetUserLoginCredentials,
  } from "../controllers/User.Controller.js";
  import { getProduct } from "../controllers/product.controller.js";
  import {
    bothAdminsLoginRequired,
    userLoginRequired,
    AnyLoginRequired,
  } from "../middlewares/Middlewares.js";
  import { ingestUserData } from "../dataWareHouse/User.DataWareHouse.js";
  
  const userRoutes = (app) => {
    app.get("/users", bothAdminsLoginRequired, getUsers);
    app.get("/users/:id", bothAdminsLoginRequired, getUser);
    app.post("/users", createUser);
    app.patch("/users/:id", AnyLoginRequired, updateUser);
    app.delete("/users/:id", AnyLoginRequired, deleteUser);
    app.get("/ingest", ingestUserData);
    app.get("/products", getProduct)
  
    //auth routes
    app.post("/users/auth/login", loginUser);
    app.post("/users/auth/reset", resetUserLoginCredentials);
  };
  
  export default userRoutes;
  