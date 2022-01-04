import React, { useEffect, useState, useCallback } from "react";
import StudentList from "./components/StudentList";
import "./App.css";

const URL = "https://api.hatchways.io/assessment/students";

function App() {
  // hold the student data in state
  const [students, setStudents] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const resp = await fetch(URL);
      const data = await resp.json();
      const newStudents = data.students.map((student) => {
        // create a new object out of the student data object
        let addTags = { ...student };
        // add the tags array to the student object
        addTags["tags"] = [];
        return addTags;
      });
      setStudents(newStudents);
    } catch (e) {
      alert(e);
    }
  }, []);

  // fetch the data on page load
  useEffect(() => fetchData(), [fetchData]);
  return (
    <main className="app">
      <StudentList students={students} />
    </main>
  );
}

export default App;
