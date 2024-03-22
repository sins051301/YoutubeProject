import React from "react";
import styled from "styled-components";

interface Play {
  id: number;
  name: string;
  myself: string;
  view: string;
  link: string;
  playlink: string;
}
const StyledCont = styled.div`
  z-index: 0;
  display: flex;
  flex-direction: column;
`;
const StyledPlay = styled.iframe`
  z-index: 0;
  width: 400px;
  height: 225px;
  border-radius: 10px; /* border-radius에 단위를 지정해주세요 */
  margin-bottom: 10px;
`;
const StyledProfile = styled.div<{ imglink: string }>`
  z-index: 0;
  width: 36px;
  height: 36px;
  border-radius: 100px;
  background-image: url(${(props) => props.imglink});
  background-size: cover;
`;
const StyledList = styled.div`
  z-index: 0;
  display: flex;
  flex-direction: column;
  flex: 20px 20px;
`;

const StyledInfo = styled.div`
  z-index: 0;
  height: 100px;
  width: 399.484px;
  display: flex;
  flex-direction: row;
  flex: auto auto;
`;

export default function Plays(props: Play) {
  return (
    <StyledCont>
      <StyledPlay
        src={props.playlink}
        z-index={0}
        title="YouTube video player"
      ></StyledPlay>
      <StyledInfo>
        <StyledProfile imglink={props.link}></StyledProfile>
        <StyledList>
          <div>{props.name}</div>
          <div style={{ fontSize: "14px" }}>{props.myself}</div>
          <div style={{ fontSize: "14px" }}>{props.view}</div>
        </StyledList>
      </StyledInfo>
    </StyledCont>
  );
}
