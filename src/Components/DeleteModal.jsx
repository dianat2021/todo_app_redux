// import React, { Fragment } from "react";
// import styles from "../Styles/deleteModal.module.css";
// import { FaRegWindowClose } from "@react-icons/all-files/fa/FaRegWindowClose";
// import { useDispatch } from "react-redux";
// import { deleteTask } from "../Reducers/UserSlice";

// const DeleteModal = ({setDeleteModalStatus, id}) => {
//     const dispatch = useDispatch();


//   return (
//     <Fragment>
//       <section className={styles["modals-backdrop"]}>
//         <div className={styles["delete-modal"]}>
//           <div className={styles["close-delete-modal"]}>
//             <FaRegWindowClose
//               size={"1.7rem"}
//               className={styles["close-button"]}
//               onClick={() => setDeleteModalStatus(false)}
//             />
//           </div>
//           <div className={styles["delete-modal-message"]}>
//             <h3>Are you sure you want to delete the task? </h3>
//           </div>
//           <div className={styles["delete-modal-buttons"]}>
//             <button onClick={deleteTaskHandler }>
//               Confirm
//             </button>
//             <button onClick={() => setDeleteModalStatus(false)}>Cancel</button>
//           </div>
//         </div>
//       </section>
//     </Fragment>
//   );
// };

// export default DeleteModal;
