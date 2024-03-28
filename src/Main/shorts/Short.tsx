import React from "react";
import styled from "styled-components";

interface Short {
  id: number;
  name: string;
  view: string;
  playlink: string;
}
const StyledCont = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledPlay = styled.iframe`
  width: 225px;
  height: 394px;
  border-radius: 10px; /* border-radius에 단위를 지정해주세요 */
  margin-bottom: 10px;
`;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 20px 20px;
`;

const StyledInfo = styled.div`
  height: 100px;
  width: 222px;
  display: flex;
  flex-direction: row;
  flex: auto auto;
`;

export default function Shorts(props: Short) {
  return (
    <StyledCont>
      <StyledPlay
      src={props.playlink}
        title="YouTube video player"
        
      >
      </StyledPlay>
      <StyledInfo>
        
        <StyledList>
          <div>{props.name}</div>
          <div style={{ fontSize: "14px" }}>{props.view}</div>
        </StyledList>
      </StyledInfo>
    </StyledCont>
  );
}
