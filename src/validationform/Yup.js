import * as Yup from 'yup';

export const reviewform = Yup.object({
    name: Yup.string().min(4).max(25).required("Please Enter Your Name"),
    email: Yup.string().nullable().email().required("Please Enter Your Email"),
    comment: Yup.string().required("Please write your comment")
  });


export const leavecomment = Yup.object({
  name: Yup.string().min(4).max(25).required("Please Enter Your Name"),
  email: Yup.string().nullable().email().required("Please Enter Your Email"),
  comment: Yup.string().required("Please write your comment")
});

export const buyerInfo = Yup.object({
  fname: Yup.string().min(4).max(25).required("Please Enter Your First Name"),
  lname: Yup.string().min(4).max(25).required("Please Enter Your Last Name"),
  address: Yup.string().required("Please Enter Your Address"),
  contactno: Yup.string().nullable().required("Please Enter Your Contact No."),
  country: Yup.string().required("Please Enter Your Country"),
  city: Yup.string().required("Please Enter Your City"),
  city: Yup.string().required("Please Enter Your City"),
  state: Yup.string().required("Please Enter Your State"),
  zipcode: Yup.string().required("Please Enter Your Zip Code"),
  comment: Yup.string().required("Please write your comment")
});

export const contactSubject = Yup.object({
  name: Yup.string().min(4).max(25).required("Please Enter Your Name"),
  email: Yup.string().nullable().email().required("Please Enter Your Email"),
  subject: Yup.string().required("Please write your Subject")
});

export const registration = Yup.object({
  fName: Yup.string().min(4).max(10).required("Please Enter Your Name"),
  lName: Yup.string().min(4).max(10).required("Please Enter Your Name"),
  email: Yup.string().nullable().email().required("Please Enter Your Email"),
  password: Yup.string().min(8).max(16).required("Please Enter Your Password"),
  confirmPassword: Yup.string().min(8).max(16).required("Please Enter Your Confirm Password")
})

export const my_accounts = Yup.object({
  fName: Yup.string().min(4).max(10).required("Please Enter Your Name"),
  lName: Yup.string().min(4).max(10).required("Please Enter Your Name"),
  email: Yup.string().nullable().email().required("Please Enter Your Email"),
  phone: Yup.string().required("Please Enter Your Name")
})