import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import styles from "./Modal.module.scss";
import { ReactComponent as CloseModal } from '../../Assets/closeModal.svg'
import * as Yup from "yup";
import { sendContacts } from "../../axios";

function ContactUs(props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const formSubmit = (values) => {
    sendContacts(JSON.stringify(values))
  };

  return (
    <div className={styles.modalWindow}>
      <div className={styles.modalWrapper}>
      <div className={styles.modalForm}>
        <CloseModal onClick={() => props.setIsModalOpen(false)}/>
        <h4>Свяжитесь с нами </h4>
        <p>
          Мы дадим вам обратную связь в течении 5 минут после отправки контакной
          информации
        </p>
        <Formik
          initialValues={{ name: "", phone: "", email: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("*Invalid email address")
              .required("*Required"),
            phone: Yup.string()
          })}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false)
            formSubmit(values);
          }}
        >
          <Form className={styles.form}> 
            <label htmlFor="name"></label>
            <Field name="name" type="text" placeholder="What’s your Name?" />
            <ErrorMessage name="name" />

            <label htmlFor="phone"></label>
            <Field name="phone" type="text" placeholder="+996 555 XXX XXX" />
            <ErrorMessage name="phone" />

            <label htmlFor="email"></label>
            <Field name="email" type="text" placeholder="Your email " />
            <ErrorMessage name="email"/>

            <button type="submit">Send</button>
          </Form>
        </Formik>
      </div>
      </div>
    </div>
  );
}

export default ContactUs;
