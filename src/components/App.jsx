import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [info, setInfo] = useState({ title: "", content: "" });
  const [Items, setItems] = useState([]);

  function changeHandler(event) {
    const { name, value } = event.target;
    setInfo((prevVal) => {
      return {
        ...prevVal,
        [name]: value
      };
    });
  }

  function addItem() {
    setItems((prevValue) => {
      return [...prevValue, info];
    });
    setInfo({ title: "", content: "" });
  }

  function deleteItem(id) {
    setItems((prevValue) => {
      return prevValue.filter((data, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea info={info} changeHandler={changeHandler} addItem={addItem} />
      {Items.map((data, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={data.title}
            content={data.content}
            deleteItem={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
