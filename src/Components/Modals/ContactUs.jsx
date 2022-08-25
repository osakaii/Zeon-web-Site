import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import styles from "./Modal.module.scss";
import { ReactComponent as CloseModal } from '../../Assets/closeModal.svg'
import * as Yup from "yup";
import { sendFeedback } from "../../axios";

function ContactUs(props) {

  const [ isSended, setIsSended ] = useState(false)
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const formSubmit = async (values) => {
    const status = await sendFeedback(JSON.stringify(values))
    if(status > 199 && status < 301){
      setIsSended(true)
    }
  };

  return (
    <div className={styles.modalWindow}>
      <div className={styles.modalWrapper}>
        {
          isSended? <div className={styles.thanksModal}>
            <p className={styles.thanksTitle}>С вами свяжутся</p>
            <p className={styles.thanksDesc}>Мы дадим обратную свзяь в ближайшее время!</p>
            <button onClick={() => props.setIsModalOpen(false)}>Oк</button>
          </div> 
          :
          <div className={styles.modalForm}>
          <CloseModal onClick={() => props.setIsModalOpen(false)}/>
          <h4>Свяжитесь с нами </h4>
          <p>
            Мы дадим вам обратную связь в течении 5 минут после отправки контакной
            информации
          </p>
          <Formik
            initialValues={{ name: "", phone_number: "", email: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("*Invalid email address")
                .required("*Required"),
              phone_number: Yup.string()
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
  
              <label htmlFor="phone_number"></label>
              <Field name="phone_number" type="text" placeholder="+996 XXX XXX XXX" />
              <ErrorMessage name="phone_number" />
  
              <label htmlFor="email"></label>
              <Field name="email" type="text" placeholder="Your email " />
              <ErrorMessage name="email"/>
  
              <button type="submit">Send</button>
            </Form>
          </Formik>
        </div>
        }
      </div>
    </div>
  );
}

export default ContactUs;
