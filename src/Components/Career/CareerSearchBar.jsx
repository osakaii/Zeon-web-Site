import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Career/CareerSearchBar.module.scss";
import { Formik } from "formik";
import { Form } from "formik";
import { Field } from "formik";
import { ReactComponent as SearchIcon } from "../../Assets/career/searchIcon.svg";
import {
  getCountryList,
  getDirectionList,
  getFilteredCareer,
} from "../../business/axios";

function CareerSearchBar({ setDeveloperList }) {
  const [countryList, setCountryList] = useState([]);
  const [directionList, setDirectionList] = useState([]);
  const [remote, setRemote] = useState(true);
  const [office, setOffice] = useState(true);
  const [relocation, setRelocation] = useState(true);

  const handleSubmit = async (params) => {
    const response = await getFilteredCareer(
      params.name,
      remote,
      office,
      relocation,
      params.direction,
      params.country
    );
    if (response?.status > 199 && response?.status < 300) {
      setDeveloperList(response.data);
    }
  };

  const setCounAndDir = async () => {
    const fetchedCountry = await getCountryList();
    setCountryList(fetchedCountry);

    const fetchedDirection = await getDirectionList();
    setDirectionList(fetchedDirection);
  };

  useEffect(() => {
    setCounAndDir();
  }, []);

  return (
    <div className={styles.searchBar}>
      <Formik
        initialValues={{
          name: "",
          country: "",
          direction: "",
          remote: true,
          office: true,
          relocation: true,
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          handleSubmit(values);
        }}
      >
        <Form className={styles.form}>
          <div className={styles.form__top}>
            <label
              htmlFor="name"
              className={styles.input__label + " " + styles.name}
              onClick = {e => e.preventDefault()}
            >
              <SearchIcon />
              <Field type="text" name="name" id="name" placeholder="Поиск" />
            </label>
              <Field
                type="text"
                as="select"
                name="country"
                id = 'country'
                className={styles.input__label + " " + styles.country}
              >
                <option value="">Все страны</option>
                {countryList?.map((item, index) => {
                  return (
                    <option value={item.name} key={item.name + index}>
                      {item.name}
                    </option>
                  );
                })}
              </Field>
            <Field
              type="text"
              as="select"
              name="direction"
              className={styles.input__label + " " + styles.direction}
            >
              <option value="">Все направления</option>
              {directionList?.map((item, index) => {
                return (
                  <option value={item.name} key={item.name + index}>
                    {item.name}
                  </option>
                );
              })}
            </Field>

            <button className={styles.submit} type="submit">
              Искать
            </button>
          </div>
          <div className={styles.form__bottom}>
            <label
              htmlFor="remote"
              className={remote ? styles.filled_check : styles.check}
            >
              Remote
            </label>
            <Field
              name="remote"
              type="checkbox"
              className={styles.input__checkbox1}
              id="remote"
              onChange={(e) => {
                setRemote(!remote);
              }}
            />

            <label
              htmlFor="office"
              className={office ? styles.filled_check : styles.check}
            >
              Office
            </label>
            <Field
              name="office"
              type="checkbox"
              className={styles.input__checkbox}
              id="office"
              onChange={(e) => {
                setOffice(!office);
              }}
            />

            <label
              htmlFor="relocation"
              className={relocation ? styles.filled_check : styles.check}
            >
              Relocation
            </label>
            <Field
              name="relocation"
              type="checkbox"
              className={styles.input__checkbox}
              id="relocation"
              onChange={(e) => {
                setRelocation(!relocation);
              }}
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default CareerSearchBar;
