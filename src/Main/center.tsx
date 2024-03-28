import React from "react";
import styled from "styled-components";
import Header from "./header";
import Sidebar from "./Side";
import Tagname from "./Tag";
import PlayList from "./playList/PlayList";
import ShortList from "./shorts/ShortList";
import Shorthead from "./shorts/Shortheader";

const StyledHeadcover = styled.div`
  z-index: 1;
  position: fixed;
  position: relative;
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
  text-align: center;
  top: 195px;
  left: 40%;
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
      </StyledHeadcover>

      <Styledtag>
        <Tagname></Tagname>
      </Styledtag>
      <Sidebar></Sidebar>
      <PlayList></PlayList>
      <Shortcover>
        <Shorthead></Shorthead>
        <ShortList></ShortList>
      </Shortcover>
      <Styledfunc>더보기</Styledfunc>
    </div>
  );
}
