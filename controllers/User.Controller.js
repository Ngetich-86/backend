import bcrypt from "bcrypt";
// import cryptoRandomString from "crypto-random-string";
// import jwt from "jsonwebtoken";

import UserModel from "../models/User.Model";
import userRegisterValidator from "../validators/User.Validator.js"

//===============================================================================================================
export const createUser = async (req, res) => {
    const handler = async (req, res) => {
        const {error} = userRegisterValidator(req.body)
        if(error){
            handleValidationError(error, res);
      return;
        }
        const{fullName,email,userName,password} = req.body;
        const existingUser = await UserModel.findOne({
            $or: [{ userName: userName }, { email: email }],
        });
        if (existingUser) {
            handleUserExists(res);
            return;
            let hashedPassword = bcrypt.hashSync(password,bcrypt.genSaltSync(10));
            if(
                await UserModel.create({
                    fullName,
                    email,
                    password: hashedPassword,
                    userName,
                })
            ) {
                res.status(201).json(req.body); 
            }
    };
    tryCatchWrapper(handler, req, res);     
};
//=================================================================================================================

export const getUsers = async (req, res) => {};

export const getUser = async (req, res) => {};

export const updateUser = async (req, res) => {};

export const deleteUser = async (req, res) => {};

export const loginUser = async (req, res) => {};

export const logoutUser = async (req, res) => {};

export const forgotPassword = async (req, res) => {};

export const resetPassword = async (req, res) => {};

