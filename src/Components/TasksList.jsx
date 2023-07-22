import React, { Fragment, useState } from "react";
import styles from "../Styles/tasksList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, crossTask } from "../Reducers/UserSlice";
import { MdDeleteForever } from "@react-icons/all-files/md/MdDeleteForever";
import { AiOutlineCheckSquare } from "@react-icons/all-files/ai/AiOutlineCheckSquare";
import { BiMessageSquareEdit } from "@react-icons/all-files/bi/BiMessageSquareEdit";
import { FaRegWindowClose } from "@react-icons/all-files/fa/FaRegWindowClose";
import Tooltip from "@mui/material/Tooltip";
import DeleteModal from "./DeleteModal";
const TasksList = () => {
  const userData = useSelector((state) => state.user);
  const [deleteModalStatus, setDeleteModalStatus] = useState(false);
  const { completed } = userData;
  const dispatch = useDispatch();

  const deleteTaskHandler = (id) => {
    dispatch(deleteTask({ id }));
    setDeleteModalStatus(false);
    console.log(id)
  };

  return (
    <Fragment>
      <section className={styles["main-container"]}>
        <header className={styles["table-header"]}>
          <label className={styles["task-cell-header"]}>Task</label>
          <label className={styles["date-cell-header"]}>Date</label>
          <label className={styles["time-cell-header"]}>Time</label>
          <label className={styles["priority-cell-header"]}>Priority</label>
          <label className={styles["controls-cell-header"]}>Controls</label>
        </header>

        <ul>
          {userData.map((item, index) => (
            <li
              key={item.id}
              className={`${styles["task-row"]} ${
                item.completed ? styles.completed : ""
              }`}
            >
              <span className={styles["task-cell"]}>{`${index + 1}. ${
                item.task
              }`}</span>
              <span className={styles["date-cell"]}>
                {item.date ? item.date : <code>&#8212;</code>}
              </span>
              <span className={styles["time-cell"]}>
                {item.time ? item.time : <code>&#8212;</code>}
              </span>
              <span className={styles["priority-cell"]}>{item.priority}</span>
              <span className={styles["controls-cell"]}>
                <button onClick={() => setDeleteModalStatus((prev) => !prev)}>
                  <MdDeleteForever size={"2.3rem"} />
                </button>
                {/* --------------------------------------------------------------------------- */}

                {deleteModalStatus && (
                  <section className={styles["modals-backdrop"]}>
                    <div className={styles["delete-modal"]}>
                      <div className={styles["close-delete-modal"]}>
                        <FaRegWindowClose
                          size={"1.7rem"}
                          className={styles["close-button"]}
                          onClick={() => setDeleteModalStatus(false)}
                        />
                      </div>
                      <div className={styles["delete-modal-message"]}>
                        <h3>Are you sure you want to delete the task? </h3>
                      </div>
                      <div className={styles["delete-modal-buttons"]}>
                        <button onClick={() => deleteTaskHandler(item.id)}>
                          Confirm
                        </button>
                        <button onClick={() => setDeleteModalStatus(false)}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </section>
                )}

                <button
                  onClick={() =>
                    dispatch(
                      crossTask({ id: item.id, completed: !item.completed })
                    )
                  }
                >
                  <AiOutlineCheckSquare size={"2.3rem"} />
                </button>
                <button>
                  <BiMessageSquareEdit size={"2.3rem"} />
                </button>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </Fragment>
  );
};

export default TasksList;
