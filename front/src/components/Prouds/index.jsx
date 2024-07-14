import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'

import { useGetProudsQuery } from '../../redux/proudsSlice';
const Prouds = () => {
    const [excellents, setExcellents] = useState([]);
    const { data: prouds } = useGetProudsQuery();

    useEffect(() => {
        prouds && setExcellents(prouds)
    }, [prouds]);

    return (
        <>
            <div className={styles.prouds}>
                <div className="container">
                    <h1>Fəxrlərimiz</h1>
                    <div className={styles.dd}> <span className={styles.cspan}>
                        <span></span>
                    </span></div>
                    <div className={styles.cards}>
                        {
                            excellents.map((student, idx) => {
                                return (

                                    <div className="col-lg-6 col-md-12 col-sm-12 " key={idx}>
                                        <div className={`${styles.card} `}>
                                            <div className='d-flex align-items-center'><div className={styles.imgdiv}>   <img src={student.studentPhoto} alt="" /></div>
                                                <div className={styles.name}><h5>{student.studentName}</h5>
                                                    <span> {student.studentDesc}</span></div></div>
                                            <div className={styles.bal}>
                                                <h1><div className={styles.ball}>{student.studentScore} <span>bal</span></div><span className='d-block'>{student.studentExam}</span></h1>
                                            </div>

                                        </div></div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Prouds
