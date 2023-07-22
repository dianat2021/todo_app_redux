import { Provider } from "react-redux";
import "./App.css";
import TodosForm from "./Components/TodosForm";
import { store } from "./Store";
import TasksList from "./Components/TasksList";

function App() {
  return (
    <div className="main-container">
      <Provider store={store}>
        <TodosForm />
        <TasksList/>
      </Provider>
    </div>
  );
}

export default App;
