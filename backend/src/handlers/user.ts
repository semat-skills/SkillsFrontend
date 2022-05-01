import User from "../models/user.model";
import { Res } from "../types";

export const handleSignup = async (
  email: string,
  fullname: string,
  password: string
) => {
  try {
    const user = await User.findOne({ where: { email: email } });
    if (user) {
      const res: Res = {
        status: 403,
        msg: "User " + email + " already exists!",
      };
      return res;
    } else {
      const newUser = await User.create({
        email: email,
        fullname: fullname,
        password: password,
      });

      if (newUser) {
        const res: Res = { status: 200, msg: "Resgistration Successful!" };
        return res;
      }
    }
  } catch (err) {
    const res: Res = { status: 400, msg: "Error!" };
    return res;
  }
};

export const handleLogin = async (email: string, password: string) => {
  try {
    const user = await User.findOne({ where: { email: email } });
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
    const res: Res = { status: 400, msg: "ERROR!" };
    return res;
  }
};

export const handleUpdatePassword = async (
  userEmail: string,
  password: string
) => {
  try {
    const email = userEmail;
    const user = await User.update(
      { password: password },
      { where: { email: userEmail } }
    );

    if (user) {
      const userValue = user.at(0);
      if (userValue === 0) {
        const res: Res = {
          status: 403,
          msg: "User " + email + " does not exists!",
        };
        return res;
      } else {
        const res: Res = { status: 200, msg: "Your password is updated!" };
        return res;
      }
    }
  } catch (err) {
    const res: Res = { status: 400, msg: "ERROE!" };
    return res;
  }
};

export const handlerRmoveUser = async (userEmail: string) => {
  try {
    const email = userEmail;
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
  const res: Res = { status: 200, msg: "logout" };
  return res;
};
