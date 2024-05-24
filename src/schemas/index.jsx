import * as Yup from "yup"

export const userSchema=Yup.object({
    name: Yup.string().min(3).required("Please enter Your Name"),
    email: Yup.string().email().required("Please enter your email"),
    message: Yup.string().min(3).required("Please Type Your Message"),
})