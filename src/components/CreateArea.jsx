import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          onChange={props.changeHandler}
          value={props.info.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={props.changeHandler}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.info.content}
        />
        <button
          onClick={(event) => {
            props.addItem();
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
