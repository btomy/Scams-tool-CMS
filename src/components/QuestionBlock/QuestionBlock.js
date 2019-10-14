import React from "react";

const QuestionBlock = ({ question }) => {
  const QuestionBlock = question.map(question => question.QuestionText);
  return <h3> {QuestionBlock} </h3>;
};

export default QuestionBlock;