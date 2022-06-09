import React, { useEffect, useState } from "react";
import styles from "./Modal.module.scss";
import { ReactComponent as CloseModal } from '../../Assets/closeModal.svg'
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { sendCareerResponse } from "../../axios";

function ResponseModal({setShowModal, careerId}) {

  const [ cvFile, setCvFile ] = useState('')

  useEffect(()=>{
    document.body.style.overflow = "hidden"
    return () =>{
      document.body.style.overflow = "unset"
    }
  },[])

  const formSubmit = (values) => {

    console.log(cvFile, values)

    sendCareerResponse(JSON.stringify({
      name: values.name,
      surname: values.surname,
      phone_number: "123312",
      email: values.email,
      career: 1,
      cv_file: cvFile
    }))
  };

  const handleFile = (e) =>{
    setCvFile(e.currentTarget.files[0])
  }

  return (
    <div className={styles.modalWindow}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalForm}>
          <CloseModal onClick={()=> setShowModal(false)}/>
          <h4>Отликнуться на вакансию</h4>
          <p>
            Оставьте вашу заявку мы рассмотрим ее и обязательно уведомим вас о
            результате
          </p>
          <Formik
          initialValues={{ name: "",surname: "", phone_number: "", email: "", cv_file: "", career: Number(careerId) }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("*Invalid email address")
              .required("*Обьязательно"),

            surname: Yup.string()
              .required("*Обьязательно"),

            name: Yup.string()
             .required("*Обьязательно"),

            phone_number: Yup.number()
              .required("*Обьязательно")
              .positive("*phone required")
              .integer("*must be number"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false)
            formSubmit(values);
          }}
        >
          <Form className={styles.form}> 
            <label htmlFor="name"></label>
            <Field name="name" type="text" placeholder="Как вас зовут?" />
            <ErrorMessage name="name" />

            <label htmlFor="surname"></label>
            <Field name="surname" type="text" placeholder="Ваша Фамилия" />
            <ErrorMessage name="surname" />

            <label htmlFor="phone_number"></label>
            <Field name="phone_number" type="text" placeholder="+996 555 XXX XXX" />
            <ErrorMessage name="phone_number" />

            <label htmlFor="email"></label>
            <Field name="email" type="text" placeholder="Ваша электронная почта " />
            <ErrorMessage name="email"/>

            <label htmlFor="cv_file"></label>
            <input type="file" name = "file"  onChange={(e)=>handleFile(e)}/>
            <ErrorMessage name="cv_file" />

            <button type="submit">Send</button>

          </Form>
        </Formik>
        </div>
      </div>
    </div>
  );
}

export default ResponseModal;
