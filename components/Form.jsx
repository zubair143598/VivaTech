import { userSchema } from "@/src/schemas";
import { useFormik } from "formik";
import { FaPlus } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Form = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userSchema,
      onSubmit: async (values, action) => {
        try {
          // const response = await fetch(process.env.NEXT_PUBLIC_API_URL,
          const response = await fetch('https://viva-tech-backend.vercel.app/', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          const data = await response.json();
          if (response.ok) {
            toast("Message delivered");
            console.log(data.message);
            action.resetForm();
          } else {
            toast.error( data.error)
            console.error(data.errors);
          }
        } catch (error) {
          toast.error("Error: Message not delivered",error)
          console.error("Error:", error);
        }
      },
    });

  return (
    <div>
       <ToastContainer />
      <form onSubmit={handleSubmit} className=" mt-4" action="">
        <div className="flex flex-col lg:flex-row gap-x-5">
          <div>
            <label className=" text-[18px]" htmlFor="Name">
              Full name*
            </label>
            <br />
            <input
              placeholder="Name"
              type="text"
              className="p-[6px] w-full mt-2 focus:outline-red px-5 bg-[#eceeef] border-[1px] rounded  hover:border-red"
              name="name"
              id="Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name ? (
              <p className=" text-[14px]  text-red ">*{errors.name}</p>
            ) : null}
          </div>
          <div className=" lg:mt-0 mt-4">
            <label htmlFor="email">Mail address*</label>
            <br />
            <input
              placeholder="example@gmail.com"
              type="email"
              className="p-[6px] w-full mt-3 focus:outline-red px-5 bg-[#eceeef] border-[1px] rounded  hover:border-red"
              name="email"
              id="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email ? (
              <p className="text-[14px]  text-red ">*{errors.email}</p>
            ) : null}
          </div>
        </div>
        <div className=" mt-3">
          <label className=" text-[18px]" htmlFor="text">
            Type your message*
          </label>
          <br />
          <textarea
            rows="5"
            className="p-[6px] w-full mt-3 focus:outline-red px-5 bg-[#eceeef] border-[1px] rounded  hover:border-red lg:w-[77%]"
            name="message"
            id="text"
            placeholder="Type your message*"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
          {errors.message && touched.message ? (
            <p className="text-[14px]  text-red ">*{errors.message}</p>
          ) : null}
        </div>
        <br />
        <div className=" group items-center ">
          <button
            className=" flex w-[77%]"
            type="submit"
          >
            <p className="uppercase  font-bold w-full bg-black transition-colors duration-1000  group-hover:bg-red  text-white my-2 py-3">Send Your message</p><FaPlus className=" py-4 mt-2 hover:transition-colors duration-1000 group-hover:bg-black text-white bg-red  w-11 h-12 " />
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default Form;
