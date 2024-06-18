import Joi from "joi";

export const userRegisterValidator = (user) {
    const userValidationSchema = Joi.object({
        fullName: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        userName: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(4).required(),
    });
    return userValidationSchema.validate(user, { abortEarly: false });
}