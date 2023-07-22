let errors = {
  errorStatus: false,
  taskError: "",
  priorityError: "",
};

export const validationHandler = (task, priority) => {
  if (!task && !priority) {
    errors = {
      errorStatus: true,
      taskError: "Task title is required!",
      priorityError: "Task priority is required!",
    };
  } else if (!task) {
    errors = {
      errorStatus: true,
      taskError: "Task title is required!",
    };
  } else if (!priority) {
    errors = {
      errorStatus: true,
      priorityError: "Task priority is required!",
    };
  }
  else{
    errors = {
        errorStatus: false
      };
  }
  return errors
};


export function formErrorStatus (){
  return errors.errorStatus
}
