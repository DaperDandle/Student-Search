import React, { useState, useRef } from "react";

const Tags = ({ tags }) => {
  // keep the current tag being input in state
  const [currentTag, setCurrentTag] = useState("");

  // ref for the tag input value
  const tagValue = useRef("");

  const addTag = (e) => {
    if (e.key === "Enter") {
      // add the current tag to the tag array if it is not already present
      if (!tags.includes(currentTag)) {
        tags.push(currentTag);
      }
      // reset the input and force rerender by also reseting current tag state value
      tagValue.current.value = "";
      setCurrentTag("");
    }
  };
  return (
    <>
      <section className="tags">
        {tags.map((tag, index) => {
          return (
            <div key={index} className="single-tag">
              {tag}
            </div>
          );
        })}
      </section>
      <input
        type="text"
        placeholder="Add a tag"
        className="tag-input"
        ref={tagValue}
        onChange={() => setCurrentTag(tagValue.current.value)}
        onKeyDown={(e) => addTag(e)}
      />
    </>
  );
};

export default Tags;
