import { useState } from "react";
import { useDispatch } from "react-redux";
import

const handleAddTodo = () => {
    if (todoText) {
        dispatchEvent(addTodo({
            id: Date.now(),
            text: todoText,
            completed: false,

        }))
        setTodoText('')

    };
    return(
        <div>
            <input
            type='text'
            value={todoText}
            onChange={(e) =>setTodoText(e.target.value)}
            />
            <button id='addBtn' onClick={handleAddTodo}>
                Add
            </button>
        </div>
    )
};

export default AddTodo