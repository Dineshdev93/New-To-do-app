import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function GetTodo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getapi();
  }, []);

  const getapi = async () => {
    let result = await fetch("http://localhost:5000");
    result = await result.json();
    setData(result);
  };

  const handledelete = async (id) => {
    let result = await fetch(`http://localhost:5000/del/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getapi();
      alert("record has been deleted");
    }
    console.log(result);
  };

  return (
    <div>
      <h2> Today's Task</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Task 1</th>
            <th>Task 2</th>
            <th>Task 3</th>
            <th>Task 4</th>
            <th>Task 5</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.title}</td>
              <td>{item.date}</td>
              <td>{item.task1}</td>
              <td>{item.task2}</td>
              <td>{item.task3}</td>
              <td>{item.task4}</td>
              <td>{item.task5}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handledelete(item._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
