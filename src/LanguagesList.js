import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style-type: none;
  display: flex;

  li {
    margin: 0 5px;
    color: #0000ff;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LanguagesList = ({ languages, handleClick }) => (
  <Ul>
    {languages.map(lang => (
      <li
        style={{ cursor: "pointer" }}
        onClick={() => handleClick(lang)}
        key={lang}
      >
        {lang}
      </li>
    ))}
  </Ul>
);

export default LanguagesList;
