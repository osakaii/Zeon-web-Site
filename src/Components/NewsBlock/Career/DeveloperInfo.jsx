import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { URL } from '../../../constants';
import styles from '../../../styles/Career/DeveloperInfo.module.scss'

function DeveloperInfo(props) {
    const { name, short_description, office, relocation, remote, country, direction, id} = props.developerInfo

    const [ workType, setWorkType ] = useState([])

    useEffect(()=>{
        if( office === true ){
            setWorkType(prev => [...prev, 'Office'])
        }
        if( relocation === true ){
            setWorkType(prev => [...prev, 'Relocation'])
        }
        if( remote === true ){
            setWorkType(prev => [...prev, 'Remote'])
        }
    },[])

    return (
        <div className={styles.developer}>
            <div className={styles.workTypeWrapper}>
                {
                    workType?.map((type, index)=>{
                        return (
                            <div key = {type + index} className = {styles.workType}>{type}</div>
                        )
                    })
                }
            </div>
            <h3 className={styles.title}>{name}</h3>
            <div className={styles.info}>
                <div className={styles.country}>
                    <img src={URL + country.flag} alt="flag" />
                    <p>{country.name}</p>
                </div>
                <span></span>
                <div className={styles.direction}>{direction.name}</div>
            </div>
            <p className={styles.shortDesc}>{short_description}</p>
            <Link to = {id + ""} className={styles.button}>Узнать подробней</Link>
        </div>
    );
}

export default DeveloperInfo;