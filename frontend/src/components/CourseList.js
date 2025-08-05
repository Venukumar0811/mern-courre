import React from "react";

function CourseList({ courses, onEdit, onDelete }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Credits</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {courses.map(course => (
          <tr key={course.code}>
            <td>{course.code}</td>
            <td>{course.name}</td>
            <td>{course.credits}</td>
            <td>
              <button onClick={() => onEdit(course._id)}>Edit</button>
              <button onClick={() => onDelete(course._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CourseList;
