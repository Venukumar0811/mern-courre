import React, { useState, useEffect } from "react";
import axios from 'axios';
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";


function App(){
  const [courses , setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);

  const fetchCourses=async()=>{
    const res=await
    axios.get('http://localhost:5000/api/courses');
    setCourses(res.data);
  };

    useEffect(()=>{
    fetchCourses();
    },[]);

    const handleSave=async(course)=>{
    if(course._id){
      await
      axios.put(`http://localhost:5000/api/courses/${course._id}`, course);
    }
    else{
      await axios.post('http://localhost:5000/api/courses', course);
    }
    fetchCourses();
    setEditingCourse(null);
    };

    const handleDelete=async(id)=>{
      await
      axios.delete(`http://localhost:5000/api/courses/${id}`);
      fetchCourses();

    };

    const handleEdit = (id) => {
      const courseToEdit = courses.find(c => c._id === id);
      setEditingCourse(courseToEdit);
  }

  return(
    <div className="App">
      <h1>Course Registration</h1>
      <CourseForm course={editingCourse} onSave={handleSave} />
      <CourseList courses={courses} onEdit={handleEdit} onDelete={handleDelete}/>
    </div>
  );



};
export default App;
