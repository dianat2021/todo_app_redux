import React, { Fragment } from "react";
import styles from '../Styles/Task.module.css'
const Task = () => {

  
  return (
    <Fragment>
      <tr>
        <td className={styles["task-cell"]}>Task</td>
        <td className={styles["date-cell"]}>Date</td>
        <td className={styles["time-cell"]}>Time</td>
        <td className={styles["priority-cell"]}>Priority</td>
        <td className={styles["controls-cell"]}>controls</td>
      </tr>
    </Fragment>
  );
};

export default Task;
