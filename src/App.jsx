import { useState, useEffect } from "react";

function App() {

  // State for tasks
  const [tasks, setTasks] = useState([]);

  // State for form inputs
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  // useEffect Hook
  useEffect(() => {

    const sampleTasks = [
      {
        id: 1,
        title: "Learn React Hooks",
        category: "Frontend"
      },

      {
        id: 2,
        title: "Practice MongoDB",
        category: "Database"
      }
    ];

    setTasks(sampleTasks);

  }, []);

  // Add Task Function
  const addTask = (e) => {

    e.preventDefault();

    // Validation
    if(title.trim() === "" || category.trim() === ""){
      alert("Please fill all fields");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      category
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setCategory("");
  };

  // Delete Task Function
  const deleteTask = (id) => {

    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(updatedTasks);
  };

  return (

    <div
      style={{
        fontFamily:"Arial",
        background:"linear-gradient(to right, #dbeafe, #f3e8ff)",
        minHeight:"100vh",
        padding:"30px"
      }}
    >

      {/* Heading */}
      <h1
        style={{
          textAlign:"center",
          color:"#2563eb",
          marginBottom:"30px"
        }}
      >
        SkillBridge Task Manager
      </h1>

      {/* Form */}
      <form
        onSubmit={addTask}
        style={{
          display:"flex",
          justifyContent:"center",
          gap:"10px",
          marginBottom:"30px"
        }}
      >

        <input
          type="text"
          placeholder="Enter Task"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          style={{
            padding:"10px",
            width:"250px",
            borderRadius:"5px",
            border:"1px solid gray"
          }}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          style={{
            padding:"10px",
            width:"200px",
            borderRadius:"5px",
            border:"1px solid gray"
          }}
        />

        <button
          type="submit"
          style={{
            background:"#2563eb",
            color:"white",
            border:"none",
            padding:"10px 20px",
            borderRadius:"5px",
            cursor:"pointer"
          }}
        >
          Add Task
        </button>

      </form>

      {/* Task List */}
      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",
          gap:"20px"
        }}
      >

        {tasks.map((task)=>(

          <div
            key={task.id}
            style={{
              background:"white",
              color:"#111827",
              padding:"20px",
              borderRadius:"10px",
              boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
            }}
          >

            <h2
  style={{
    color:"#2563eb",
    fontWeight:"bold",
    fontSize:"24px"
  }}
>
  {task.title}
</h2>

            <p>
              <strong>Category:</strong> {task.category}
            </p>

            <button
              onClick={()=>deleteTask(task.id)}
              style={{
                marginTop:"10px",
                background:"red",
                color:"white",
                border:"none",
                padding:"8px 15px",
                borderRadius:"5px",
                cursor:"pointer",
                transition:"0.3s"
              }}
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;
