import { useCallback, useState, useEffect } from "react";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import TodoList from "./components/TodoList";
import Edit from "./components/Pop/Edit";
import { nanoid } from "nanoid";

function App() {
  // State
  const [todoList, setTodoList] = useState([
    {
      token: nanoid(),
      time: new Date().getTime(),
      content: "Welcome to the Tick List !",
      status: false,
    },
  ]);
  const [isInputBox, setIsInputBox] = useState(false);
  const [isPop, setIsPop] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  // ---------------------------------------------------------------------------------

  // localStorage -> State
  useEffect(() => {
    if (localStorage.getItem("todoListFromlocalStorage") === "[]") {
      localStorage.setItem(
        "todoListFromlocalStorage",
        JSON.stringify(todoList)
      );
    }
    const todoListFromlocalStorage = JSON.parse(
      localStorage.getItem("todoListFromlocalStorage")
    );
    setTodoList(todoListFromlocalStorage);
  }, []);

  // State - > localStorage
  useEffect(() => {
    localStorage.setItem("todoListFromlocalStorage", JSON.stringify(todoList));
  }, [todoList]);

  // ---------------------------------------------------------------------------------

  // Header functions
  const showInputBox = () => {
    if (isInputBox === false) {
      setIsInputBox(true);
    } else {
      setIsInputBox(false);
    }
  };

  const addItem = useCallback(
    (input) => {
      const content = input.current.value.trim();
      if (content.length === 0) {
        alert("Please write something...");
      } else {
        const newItem = {
          token: nanoid(),
          time: new Date().getTime(),
          content,
          status: false,
        };
        setTodoList([...todoList, newItem]);
      }
      input.current.value = "";
    },
    [todoList]
  );
  // ---------------------------------------------------------------------------------

  // Items functions
  const showPop = useCallback(
    (token) => {
      setCurrentItem(
        () => todoList.filter((todoItem) => todoItem.token === token)[0]
      );
      setIsPop(true);
    },
    [todoList]
  );

  const killPop = useCallback((token, newItem) => {
    setTodoList((todoList) =>
      todoList.map((item) => {
        if (item.token === token) {
          item = newItem;
        }
        return item;
      })
    );
    setIsPop(false);
  }, []);

  const checkItem = useCallback((token, status) => {
    setTodoList((todoList) =>
      todoList.map((item) => {
        if (item.token === token) {
          item.status = status;
        }
        return item;
      })
    );
  }, []);
  // ---------------------------------------------------------------------------------

  // Delete function
  const deleteItem = (token) => {
    const newTodoList = todoList.filter((item) => {
      return item.token !== token;
    });
    if (window.confirm("Are you sure ?")) {
      setTodoList(newTodoList);
    }
  };
  // ---------------------------------------------------------------------------------

  // render
  return (
    <div className="App">
      <Header showInputBox={showInputBox} />
      <InputBox isInputBox={isInputBox} addItem={addItem} />
      <TodoList
        todoList={todoList}
        showPop={showPop}
        deleteItem={deleteItem}
        checkItem={checkItem}
      />
      <Edit isPop={isPop} currentItem={currentItem} killPop={killPop} />
    </div>
  );
}

export default App;
