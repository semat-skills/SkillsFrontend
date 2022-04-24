import * as Yup from "yup";

export const signupValidationSchema = Yup.object({
    fullname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(6, "Password must be 6 characters at minimum"),
    confirmPassword: Yup.string()
      .required("Required")
      .min(6, "Password must be 6 characters at minimum")
      .oneOf([Yup.ref("password"), null], "Passwords must Match"),
    acceptTerms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });


  export const loginValidationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(6, "Password must be 6 characters at minimum"),
  });

  export const newCardValidationSchema = Yup.object({
    cardName: Yup.string().required("Required"),
    cardImg: Yup.mixed().required("File is required"),
  });

  export const contactValidationSchema = Yup.object({
    fullname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    title:  Yup.string().required("Required"),
    text:  Yup.string().required("Required"),
    img:  Yup.string().required("Required"),
   
  });