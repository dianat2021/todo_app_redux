import React, { Fragment, useState } from "react";
import { addUser } from "../Reducers/UserSlice";
import styles from "../Styles/todosForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { validationHandler, formErrorStatus } from "../Validation/validation";

const TodosForm = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [priority, setPriority] = useState("");
  const [errorMessage, setErrorMessage] = useState({});

  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const taskInputHandler = (e)=>{
    setErrorMessage({})
    setTask(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setErrorMessage(validationHandler(task, priority));
    if (formErrorStatus()) {
      return;
    } else {
      dispatch(
        addUser({ id: uuid(), task, date, time, priority, completed: false })
      );
      setTask("");
      setDate("");
      setTime("");
      setPriority("");
    }
  };

  console.log(errorMessage);
  return (
    <Fragment>
      <form className={styles["form-main-container"]}>
        <div className={styles["form-input-container"]}>
          <label>Task</label>
          <input
            type="text"
            className={styles["input-field"]}
            placeholder="Enter task title"
            onChange={taskInputHandler}
            value={task}
          />
          <label className={styles["input-error"]}>
            {errorMessage.errorStatus ? errorMessage.taskError : ""}
          </label>

          <label>Date</label>
          <input
            type="date"
            className={styles["input-field"]}
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />

          <label>Time</label>
          <input
            type="time"
            className={styles["input-field"]}
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />

          <label>Priority</label>
          <select
            onChange={(e) => setPriority(e.target.value)}
            className={styles["input-field"]}
            value={priority}
          >
            <option></option>
            <option>High</option>
            <option>Meduim</option>
            <option>Low</option>
          </select>
          <label className={styles["input-error"]}>
            {errorMessage.errorStatus ? errorMessage.priorityError : ""}
          </label>

          <label>Filter</label>
          <select
            // onChange={(e) => setStatus(e.target.value)}
            className={styles["input-field"]}
          >
            <option>All</option>
            <option>Completed</option>
            <option>Incomplete</option>
          </select>

          <button onClick={submitHandler} className={styles["submit-task-btn"]}>
            Add Task
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default TodosForm;
