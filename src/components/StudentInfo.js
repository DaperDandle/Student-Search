import React from "react";

const StudentInfo = ({
  firstName,
  lastName,
  email,
  company,
  skill,
  averageGrade,
  grades,
  expanded,
}) => {
  return (
    <article className="student-info">
      <h1>{`${firstName} ${lastName}`}</h1>
      <p>{`Email: ${email}`}</p>
      <p>{`Company: ${company}`}</p>
      <p>{`Skill: ${skill}`}</p>
      <p>{`Average: ${averageGrade}%`}</p>
      {/* if the info is expanded display the grades */}
      <div className={expanded ? "grades-expand" : "grades-none"}>
        <ul>
          {grades.map((grade, index) => {
            return (
              <li key={index + 1}>
                <span className="test">{`Test ${index + 1}:`}</span>
                {`${grade}%`}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default StudentInfo;
