import React from "react";
import styled from "styled-components";

const Styledicon = styled.div<{ bgImage: string }>`
  width: 43px;
  height: 24px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
`;

const Styledexplain = styled.div`
  width: 132px;
  height: 20px;
  font-size: 20px;
  font-weight: 700px;
  color: "#0F0F0F";
  font-family: Roboto, Arial, sans-serif;
`;

const Styledfunc = styled.div`
  position: absolute;
  left: 0px;
  width: 95px;
  height: 28px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;
const Styledbutton = styled.button`
  width: 40px;
  height: 40px;
  background-color: none;
  position: absolute;
  right: 0px;
  border: none;
  background-color: rgb(255, 255, 255);
`;
const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 16px;
  justify-content: space-between;
  gap: 30px;
  width: 1000px;
  height: 56px;
`;

export default function Shorthead() {
  return (
    <StyledHeader>
      <Styledfunc>
        <Styledicon bgImage="/img/shorts2.png"></Styledicon>
        <Styledexplain>Shorts</Styledexplain>
      </Styledfunc>
      <Styledbutton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          style={{ height: "24px", width: "24px" }}
        >
          <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
        </svg>
      </Styledbutton>
    </StyledHeader>
  );
}
