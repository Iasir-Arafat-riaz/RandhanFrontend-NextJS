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
        <div className="row p-4 ">
          <div className="col-md-2 ">
            <span className={`${styles.serialText}`}>{id}</span>
          </div>
          <div className={`col-md-8 ${styles.jobDesc}`}>
            <p>Post Date : {post_date}</p>
            <p>{title}</p>
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
