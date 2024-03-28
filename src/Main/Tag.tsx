import React from "react";
import styled from "styled-components";

interface Tag {
  id: number;
  name: string;
}
const tagList: Tag[] = [
  { id: 0, name: "전체" },
  { id: 1, name: "음악" },
  { id: 2, name: "믹스" },
  { id: 3, name: "만화 영화" },
  { id: 4, name: "랩" },
  { id: 5, name: "액션 어드벤처 게임" },
  { id: 6, name: "최근에 업로드된 동영상" },
  { id: 7, name: "감상한 동영상" },
  { id: 8, name: "게임" },
  { id: 9, name: "새로운 맞춤 동영상" },
];
const StyledTagCover = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  align-items: center;
  justify-content: space-between;
  width: 1007px;
  height: 56px;
`;
const StyledButton = styled.button`
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: rgb(244, 244, 244);
  font-size: 14px;
  //padding: 16px;
  &:hover {
    background-color: rgb(244, 244, 244);
  }
`;
export default function Tagname() {
  return (
    <StyledTagCover>
      {tagList.map((lst) => (
        <StyledButton key={lst.id}>{lst.name}</StyledButton>
      ))}
    </StyledTagCover>
  );
}
