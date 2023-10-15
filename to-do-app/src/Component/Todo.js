import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Todo() {
  const [cdate, setCdate] = useState(new Date())
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [task1, setTask1] = useState("");
  const [task2, setTask2] = useState("");
  const [task3, setTask3] = useState("");
  const [task4, setTask4] = useState("");
  const [task5, setTask5] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setCdate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  }, [])
  const saveData = async () => {
    let result = await fetch("http://localhost:5000/post", {
      method: "Post",
      body: JSON.stringify({ title, date, task1, task2, task3, task4, task5 }),
      headers: {
        "content-type": "application/json"
      }
    })
    result = await result.json()
    console.log(result);
  }
  return (
    <div>
      <div >
        <h2>My To-do-list</h2>
        <h5>Make Your List</h5>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="title"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Task-1</Form.Label>
          <Form.Control
            type="text"
            name="mar"
            value={task1}
            onChange={(e) => setTask1(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Task-2</Form.Label>
          <Form.Control
            type="text"
            name="sch"
            value={task2}
            onChange={(e) => setTask2(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Task-3</Form.Label>
          <Form.Control
            type="text"
            value={task3}
            onChange={(e) => setTask3(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Task-4</Form.Label>
          <Form.Control
            type="text"
            value={task4}
            onChange={(e) => setTask4(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Task-5</Form.Label>
          <Form.Control
            type="text"
            value={task5}
            onChange={(e) => setTask5(e.target.value)}
          />
        </Form.Group>

        <Button onClick={saveData}>
          <Link to={'/gettodo'} className="link">Get to do</Link>

        </Button>
      </Form>
      <div className="time">
        <h6>Time : {cdate.toLocaleTimeString()}</h6>
        <p>Date : {cdate.toLocaleDateString()}</p>
      </div>
    </div>
  );
}
