import React, { Fragment } from "react";
import styled from "styled-components";

const Bold = styled.span`
  font-weight: 800;
  margin-right: 3px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 0;
`;

const Logo = styled.img`
  width: 20;
  height: 20;
  margin: 0 3px 0 2px;
`;

const RepoInfo = ({ repo }) => {
  const { name, owner, html_url, full_name, stargazers_count } = repo;

  return (
    <Fragment>
      <h1>{name}</h1>

      <div>
        <FlexContainer>
          <Bold>Stars:</Bold> {stargazers_count}
        </FlexContainer>
        <FlexContainer>
          <Bold>Owner:</Bold>
          <Logo
            src={owner.avatar_url}
            width="20"
            height="20"
            alt="Owner Logo"
          />
          {owner.login}
        </FlexContainer>
        <FlexContainer>
          <Bold>Repo:</Bold>{" "}
          <a target="_blank" href={html_url}>
            {full_name}
          </a>
        </FlexContainer>
      </div>
    </Fragment>
  );
};

export default RepoInfo;
