import React, { useEffect, useState } from "react";
import styles from "./Modal.module.scss";
import { ReactComponent as CloseModal } from "../../Assets/closeModal.svg";
import { ReactComponent as Files } from "../../Assets/career/files.svg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { sendCareerResponse } from "../../business/axios";

function ResponseModal({ setShowModal, careerId }) {
  const [cvFile, setCvFile] = useState();

  const [isSended, setIsSended] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const formSubmit = async (values) => {
    console.log(cvFile);

    let formData = new FormData();
    formData.append("cv_file", cvFile);
    formData.append("name", "Muhammad");
    formData.append("surname", "dzhanov");
    formData.append("phone_number", "+996773773360");
    formData.append("email", "mdzhanov@gmail.com");
    formData.append("career", "1");

    const response = await sendCareerResponse(formData);
    const status = await response.status
    if (status > 199 && status < 301) {
      setIsSended(true);
    }else{
      console.log(status)
      alert('Ошибка отправки')
    }
  };

  const handleFile = async (e) => {
    setCvFile(e.target.files[0]);
  };

  return (
    <div className={styles.modalWindow}>
      <div className={styles.modalWrapper}>
        {isSended ? (
          <div className={styles.thanksModal}>
            <p className={styles.thanksTitle}>Cпасибо за Вашу заявку</p>
            <p className={styles.thanksDesc}>
              Мы обязательно свяжемся с вами! Ожидайте!
            </p>
            <button onClick={() => setShowModal(false)}>Oк</button>
          </div>
        ) : (
          <div className={styles.modalForm}>
            <CloseModal onClick={() => setShowModal(false)} />
            <h4>Отликнуться на вакансию</h4>
            <p>
              Оставьте вашу заявку мы рассмотрим ее и обязательно уведомим вас о
              результате
            </p>
            <Formik
              initialValues={{
                name: "",
                surname: "",
                phone_number: "",
                email: "",
                cv_file: "",
                career: Number(careerId),
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("*Invalid email address")
                  .required("*Обьязательно"),

                surname: Yup.string().required("*Обьязательно"),

                name: Yup.string().required("*Обьязательно"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
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
                <Field
                  name="phone_number"
                  type="text"
                  placeholder="+996 XXX XXX XXX"
                />
                <ErrorMessage name="phone_number" />

                <label htmlFor="email"></label>
                <Field
                  name="email"
                  type="text"
                  placeholder="Ваша электронная почта "
                />
                <ErrorMessage name="email" className={styles.cv_file} />

                <input
                  type="file"
                  name="cv_file"
                  id="cv_file"
                  onChange={handleFile}
                  multiple={true}
                  accept="image/jpeg,image/png,image/gif, .pdf"
                />
                <label htmlFor="cv_file" >
                  {cvFile ? (
                    <div className={styles.uploaded}>{cvFile.name}</div>
                  ) : (
                    <div className={styles.cv_file}>
                      <p>Загрузите ваш файл</p>
                      <Files />
                    </div>
                  )}
                </label>
                <ErrorMessage name="cv_file" />
                <button type="submit">Send</button>
              </Form>
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResponseModal;
