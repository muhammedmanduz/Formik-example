import React from "react";

const InputField = ({ formik, label, name, type = "text" }) => {
  console.log(formik.touched);

  return (
    <div className="">
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        className={`form-control ${
          formik.errors[name] && formik.touched[name] && "is-invalid"
        }`}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <label className="feedback">{formik.errors?.[name]}</label>
    </div>
  );
};

export default InputField;
