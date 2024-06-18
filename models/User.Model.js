import mongoose from "mongoose";

const userShema = new mongoose.Schema(
    {
        //fullName, email, userName, password
        fullName: {
            type: String,
            required: true,
            trim: true,
          },
          email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
          },
          userName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
          },
          password: {
            type: String,
            required: true,
            trim: true,
          }

}
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;