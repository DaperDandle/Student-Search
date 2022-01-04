import React, { useState } from "react";
import StudentInfo from "./StudentInfo";
import ExpandButton from "./ExpandButton";
import Tags from "./Tags";

const SingleStudent = ({
  firstName,
  lastName,
  email,
  company,
  pic,
  averageGrade,
  skill,
  grades,
  tags,
}) => {
  // state variable for  checking whether the student info is expanded or not
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="single-student">
      <div className="img-wrapper">
        <img
          className="student-pic"
          src={pic}
          alt={`${firstName} ${lastName}`}
        />
      </div>
      {/* container holds both student info and the tags component */}
      <div className="info-tags-container">
        <StudentInfo
          firstName={firstName}
          lastName={lastName}
          email={email}
          company={company}
          averageGrade={averageGrade}
          skill={skill}
          grades={grades}
          expanded={expanded}
        />
        <div>
          <Tags tags={tags} />
        </div>
      </div>
      <ExpandButton expanded={expanded} setExpanded={setExpanded} />
    </section>
  );
};

export default SingleStudent;
