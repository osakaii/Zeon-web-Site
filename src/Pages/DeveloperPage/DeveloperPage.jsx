import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDeveloperById } from "../../axios";
import parse from 'html-react-parser';
import styles from "./DeveloperPage.module.scss";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import ResponseModal from "../../Components/Modals/ResponseModal";
import { URL } from "../../constants";

function DeveloperPage(props) {
  const developerId = useParams().id;

  const [developerInfo, setDeveloperInfo] = useState();
  const [workType, setWorkType] = useState([]);
  const [ showModal, setShowModal ] = useState(false)

  const getDevInfo = async () => {
    const response = await getDeveloperById(developerId);
    console.log(response);
    setDeveloperInfo(response);
  };

  useEffect(() => {
    getDevInfo();
  }, []);

  useEffect(() => {
    if (developerInfo) {
        console.log(developerInfo);
      if (developerInfo.office === true) {
        setWorkType((prev) => [...prev, "Office"]);
      }
      if (developerInfo.relocation === true) {
        setWorkType((prev) => [...prev, "Relocation"]);
      }
      if (developerInfo.remote === true) {
        setWorkType((prev) => [...prev, "Remote"]);
      }
    }
  }, [developerInfo]);

  return (
    <div className={styles.developerPage}>
      <Header filled={true} />
      <div className="container">
        <div className={styles.devInfo}>
          <div className={styles.workTypeWrapper}>
            {workType?.map((type, index) => {
              return (
                <div key={type + index} className={styles.workType}>
                  {type}
                </div>
              );
            })}
          </div>
          <h3 className={styles.title}>{developerInfo?.name}</h3>
            <div className={styles.info}>
                <div className={styles.country}>
                    <img src={URL + developerInfo?.country.flag} alt="flag" />
                    <p>{developerInfo?.country.name}</p>
                </div>
                <span></span>
                <div className={styles.direction}>{developerInfo?.direction.name}</div>
            </div>
            <p className={styles.shortDesc}>{developerInfo?.short_description}</p>
            <button className={styles.response}  onClick = { () => setShowModal(true)}>Откликнуться</button>
            <div className={styles.description}>
                {
                    developerInfo? parse( developerInfo.description ) : null
                }
            </div>
            <button className={styles.response} onClick = { () => setShowModal(true)}>Откликнуться</button>
        </div>
      </div>
      <Footer />
      { 
        showModal && <ResponseModal setShowModal = {setShowModal} careerId = {developerId}/>
      }
    </div>
  );
}

export default DeveloperPage;
