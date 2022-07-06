import React from "react";
import styles from "../styles/Pagination.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className={styles["container-pagination"]}>
      {prev ? (
        <button className={styles["button-arrow"]} onClick={handlePrevious}>
          <ChevronLeftIcon className="arrow" />
        </button>
      ) : null}
      {next ? (
        <button className={styles["button-arrow"]} onClick={handleNext}>
          <ChevronRightIcon />
        </button>
      ) : null}
    </div>
  );
};

export default Pagination;
