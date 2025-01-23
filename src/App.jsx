import React from "react";
import { useFormik } from "formik";

const App = () => {
  // useFormik: formik'in bütün özelliklerini kullanamamozo sağlayan hook
  const formik = useFormik({
    initialValues: {
      // state'i tutulacak olan form verilerinin ilk değeri
      email: "",
      age: "",
    },

    // form gönderildiğinde (hata yoksa) çalışıcak olan fonksiyon
    onSubmit: (values) => {
      alert("Form gönderildi:" + JSON.stringify(values));
    },
  });
  return (
    <div className="ch-200 vw-100 ">
      <div className="container py-5">
        <h2 className="text-center">Formik</h2>

        <form className="d-flex flex-column gap-4 mt-5">
          <div className="">
            <label className="form-label">İsim</label>
            <input type="text" className="form-control" />
          </div>

          <div className="">
            <label className="form-label">Yaş</label>
            <input type="number" className="form-control" />
          </div>

          <button className="my-5">Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default App;
