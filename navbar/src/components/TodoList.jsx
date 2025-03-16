import React, { useState, useEffect } from "react";

function TodoList({ theme }) {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    // Load todos from localStorage when the component mounts
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(savedTodos);
    }, []);

    // Save todos to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (task.trim() === "") return;
        const newTodos = [...todos, { text: task, completed: false }];
        setTodos(newTodos);
        setTask("");
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const styles = {
        container: {
            width: "100vw",
            backgroundColor: theme === "light" ? "#fff" : "#333",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
        },
        content: {
            width: "400px",
            padding: "20px",
            backgroundColor: theme === "light" ? "#fff" : "#444",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            color: theme === "light" ? "#333" : "#fff",
        },
        heading: { fontSize: "24px", marginBottom: "15px" },
        inputContainer: {
            display: "flex",
            gap: "6px",
            marginBottom: "15px",
            width: "100%",
        },
        input: {
            flex: 1,
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
            backgroundColor: theme === "light" ? "#fff" : "#666",
            color: theme === "light" ? "#333" : "#fff",
        },
        addButton: {
            padding: "10px 15px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: theme === "light" ? "#333" : "#f0f0f0",
            color: theme === "light" ? "#fff" : "#333",
            fontSize: "16px",
            cursor: "pointer",
        },
        list: { listStyle: "none", padding: 0, width: "100%" },
        todoItem: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "10px",
            backgroundColor: theme === "light" ? "#f0f0f0" : "#555",
            color: theme === "light" ? "#333" : "#fff",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            border: "1px solid #ccc",
        },
        todoText: {
            cursor: "pointer",
            fontSize: "16px",
            textDecoration: "none",
        },
        removeButton: {
            background: "none",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            color: "#dc3545",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.heading}>Todo List</h1>

                <div style={styles.inputContainer}>
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Enter a new task..."
                        style={styles.input}
                    />
                    <button onClick={addTodo} style={styles.addButton}>
                        Add
                    </button>
                </div>

                <ul style={styles.list}>
                    {todos.map((todo, index) => (
                        <li key={index} style={styles.todoItem}>
                            <span
                                onClick={() => toggleTodo(index)}
                                style={{
                                    ...styles.todoText,
                                    textDecoration: todo.completed ? "line-through" : "none",
                                }}
                            >
                                {todo.text}
                            </span>
                            <button onClick={() => removeTodo(index)} style={styles.removeButton}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;
