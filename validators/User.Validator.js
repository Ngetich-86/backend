import Joi from "joi";

export const userRegisterValidator = (user) =>{
    const userValidationSchema = Joi.object({
        fullName: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        userName: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(4).required(),
    });
    return userValidationSchema.validate(user, { abortEarly: false });
};

export const userLoginValidator = (user) => {
    const userLoginValidationSchema = Joi.object({
      userName: Joi.string().required(),
      password: Joi.string().min(4).required(),
    });
    return userLoginValidationSchema.validate(user);
  };

  export const userResetValidator = (user) => {
    const userResetValidationSchema = Joi.object({
      email: Joi.string().email().required().trim(),
      phoneNo: Joi.string().required().trim(),
    });
    return userResetValidationSchema.validate(user);
  };  