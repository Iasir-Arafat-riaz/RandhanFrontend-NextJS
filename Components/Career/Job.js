import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/Job.module.css"

const Job = ({ title, post_date, id }) => {
  const router = useRouter();
  const handleApply = () => {
    router.push(`career/${id}`);
  };

  return (
    <div>
      <div className={`${styles.jobItem}`}>
        <div className={`row ${styles.jobDiv} jobPAdding`}>
          <div className="col-md-2 careerSerial">
            <span className={`${styles.serialText}`}>{id}</span>
          </div>
          <div className={`col-md-8 ${styles.jobDesc} `}>
            <p className="careerSerial">Post Date : {post_date}</p>
            <p className="careerSerial">{title}</p>
          </div>
          <div className="col-md-2 d-flex justify-content-center align-items-center">
            <button className={`${styles.jobApplyBtn}`} onClick={handleApply}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
