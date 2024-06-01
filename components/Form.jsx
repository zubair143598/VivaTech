import { userSchema } from "@/src/schemas";
import { useFormik } from "formik";
import { FaPlus } from "react-icons/fa";


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
      onSubmit: (values, action) => {
  console.log(values);
  action.resetForm()
      },
    });

  return (
    <div><form onSubmit={handleSubmit} className=" mt-4" action="">
    <div className="flex flex-col lg:flex-row gap-x-5">
      <div>
        <label className=" text-[18px]" htmlFor="Name">Full name*</label>
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
          id="email"onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email ? (
          <p className="text-[14px]  text-red ">
            *{errors.email}
          </p>
        ) : null}
      </div>
    </div>
    <div className=" mt-3">

    <label className=" text-[18px]" htmlFor="text">Type your message*</label>
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
      <p className="text-[14px]  text-red ">
        *{errors.message}
      </p>
    ) : null}
      </div>
    <br />
    <div className=" group items-center flex">
      <button
        className="uppercase font-bold w-full lg:w-[70%] bg-black transition-colors duration-1000  group-hover:bg-red  text-white my-2 py-3"
        type="submit"
      >
        Send Your message
      </button>
      <FaPlus className=" py-4 hover:transition-colors duration-1000 group-hover:bg-black text-white bg-red  w-11 h-12 " />
    </div>
  </form></div>
  )
}

export default Form