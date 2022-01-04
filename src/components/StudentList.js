import React, { useState, useRef } from "react";
import SingleStudent from "./SingleStudent";

const StudentList = ({ students }) => {
  // state variables for the name search and tag search terms
  const [searchName, setSearchName] = useState("");
  const [searchTag, setSearchTag] = useState("");

  // refs to get the value of name and tag inputs
  const searchNameValue = useRef("");
  const searchTagValue = useRef("");

  // check each tag in the tags array for a match to the search term
  const checkTags = (tags) => {
    // look through each tag and if it inlcudes the search term increment the number of tags it matches
    let tagsMatched = 0;
    tags.forEach((tag) => {
      if (tag.includes(searchTag)) {
        tagsMatched++;
      }
    });
    // as long as at least one tag matches the search term return true otherwise return false
    if (tagsMatched === 0) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <section className="student-list">
      <div className="search-bar-group">
        <input
          className="search-bar"
          type="text"
          ref={searchNameValue}
          onChange={() => setSearchName(searchNameValue.current.value)}
          placeholder="Search by name"
        />
        <input
          className="search-bar"
          type="text"
          ref={searchTagValue}
          onChange={() => setSearchTag(searchTagValue.current.value)}
          placeholder="Search by tag"
        />
      </div>

      {
        // filter students by the name search term and then by the tag search term
        students
          .filter((student) => {
            if (searchName === "") {
              return student;
            } else {
              return (
                student.firstName.toLowerCase().includes(searchName) ||
                student.lastName.toLowerCase().includes(searchName)
              );
            }
          })
          .filter((student) => {
            // check if both inputs are empty
            if (searchTag === "" && searchName === "") {
              return student;
            }
            // check if just the tag input is empty
            else if (searchTag === "") {
              return student;
            }
            return checkTags(student.tags);
          })
          .map((student, index) => {
            const {
              firstName,
              lastName,
              company,
              email,
              pic,
              skill,
              grades,
              tags,
            } = student;
            // calulate average grade
            const averageGrade =
              grades.reduce((a, b) => parseInt(a) + parseInt(b)) /
              grades.length;

            return (
              <SingleStudent
                key={index}
                firstName={firstName}
                lastName={lastName}
                company={company}
                email={email}
                pic={pic}
                skill={skill}
                averageGrade={averageGrade}
                grades={grades}
                tags={tags}
              ></SingleStudent>
            );
          })
      }
    </section>
  );
};

export default StudentList;
