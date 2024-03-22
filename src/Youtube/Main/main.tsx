import { useState } from "react";
import styled from "styled-components";
import Header from "./header";
import Sidebar from "./Side";
import Tag from "./Tag";
import PlayList from "./playList/PlayList";
import ShortList from "./shorts/ShortList";
import Shorthead from "./shorts/Shortheader";
import React from "react";

const StyledHeadcover = styled.div`
  z-index: 1;
  position: fixed;
  position: absolute;
`;
const Shortcover = styled.div`
  z-index: 0;
  position: relative;
  left: 270px;
  top: 210px;
  display: flex;
  flex-direction: column;
  width: 1700px;
  border-bottom: 1px solid #ccc;
  height: 591px;
`;
const Styledfunc = styled.div`
  z-index: 2;
  width: 358px;
  height: 34px;
  border-radius: 10px;
  position: relative;
  display: flex;
  text-align: center;
  top: 195px;
  left: 50%;
  background-color: #ffffff;
  border: 1px solid #ccc;
`;

const Styledtag = styled.div`
  z-index: 1;
  position: fixed;
  left: 270px;
  width: 100%;
  height: 56px;
  top: 55px;
  background-color: #ffffff;
`;
export default function MainPage() {
  return (
    <div>
      <StyledHeadcover>
        <Header></Header>

        <Sidebar></Sidebar>
      </StyledHeadcover>
      <Styledtag>
        <Tag></Tag>
      </Styledtag>

      <PlayList></PlayList>
      <Shortcover>
        <Shorthead></Shorthead>
        <ShortList></ShortList>
      </Shortcover>
      <Styledfunc>더보기</Styledfunc>
    </div>
  );
}
