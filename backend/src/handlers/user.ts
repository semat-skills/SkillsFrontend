import User from "../models/user.model";
import { Res } from "../types";

export const handleSignup = async (
  email: string,
  fullname: string,
  password: string
) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const res: Res = {
        status: 403,
        msg: "User " + email + " already exists!",
      };
      return res;
    } else {
      const newUser = await User.create({
        email,
        fullname,
        password,
      });

      if (newUser) {
        const res: Res = { status: 200, msg: "Resgistration Successful!" };
        return res;
      }
    }
  } catch (err) {
    throw new Error("ERROE!");
  }
};

export const handleLogin = async (email: string, password: string) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (user === null) {
      const res: Res = {
        status: 403,
        msg: "User " + email + " does not exists!",
      };
      return res;
    } else if (user) {
      const email = user.getDataValue("email");
      const password = user.getDataValue("password");

      if (password !== password) {
        const res: Res = { status: 403, msg: "Your password is incorrect!" };
        return res;
      } else if (email === email && password == password) {
        const res: Res = { status: 200, msg: "You are authenticated!" };
        return res;
      }
    }
  } catch (err) {
    throw new Error("ERROE!");
  }
};

export const handleUpdatePassword = async (
  userEmail: string,
  password: string
) => {
  try {
    const user = await User.update(
      { password },
      { where: { email: userEmail } }
    );

    if (user) {
      const userValue = user.at(0);
      if (userValue === 0) {
        const res: Res = {
          status: 403,
          msg: "User " + userEmail + " does not exists!",
        };
        return res;
      } else {
        const res: Res = { status: 200, msg: "Your password is updated!" };
        return res;
      }
    }
  } catch (err) {
    throw new Error("ERROE!");
  }
};

export const handlerRmoveUser = async (userEmail: string) => {
  try {
    const user = await User.destroy({ where: { email: userEmail } });
    if (user) {
      const res: Res = { status: 200, msg: "User has been deleted!" };
      return res;
    }
  } catch (err) {
    const res: Res = { status: 400, msg: "ERROE!" };
    return res;
  }
};

export const handleLogout = async () => {
  
  try{
    const res: Res = { status: 200, msg: "Loged Out!" };
    return res;
  } catch (err) {
    throw new Error("ERROR!");
  }
};
