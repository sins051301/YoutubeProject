import React from "react";
import styled from "styled-components";
import Shorts from "./Short";

interface Short {
  id: number;
  name: string;
  view: string;
  playlink: string;
}

const shortlist: Short[] = [
  {
    id: 0,
    name: "[Playlist] 찌질찌질 사랑 노래 | 감성힙합/ R&B 플레이리스트",

    view: "조회수 44만회 2개월 전",
    playlink: "https://www.youtube.com/embed/H8tdpfFbdcM?si=Rn-NABNSw1Xlp_gT",
  },
  {
    id: 1,
    name: "이타도리가 어떤 사람이냐고 묻는다면 이 노래를 들려줄래,ONE OK ROCK(원오...",

    view: "조회수 9.6만회 2주전",
    playlink: "https://www.youtube.com/embed/9zs76Ck5jPQ?si=G30hZE9S-e1k1raV",
  },
  {
    id: 2,
    name: "Top 50 songs of TheFatRat 2023- TheFatRat Mega Mix",
    view: "조회수 23만회 4개월 전",
    playlink: "https://www.youtube.com/embed/M1uJi7A31T4?si=jeHMWwMcwLGcKzjo",
  },
  {
    id: 3,
    name: "[Playlist] 찌질찌질 사랑 노래 | 감성힙합/ R&B 플레이리스트",

    view: "조회수 44만회 2개월 전",
    playlink: "https://www.youtube.com/embed/H8tdpfFbdcM?si=Rn-NABNSw1Xlp_gT",
  },
  {
    id: 4,
    name: "이타도리가 어떤 사람이냐고 묻는다면 이 노래를 들려줄래,ONE OK ROCK(원오...",

    view: "조회수 9.6만회 2주전",
    playlink: "https://www.youtube.com/embed/9zs76Ck5jPQ?si=G30hZE9S-e1k1raV",
  },
  {
    id: 5,
    name: "Top 50 songs of TheFatRat 2023- TheFatRat Mega Mix",
    view: "조회수 23만회 4개월 전",
    playlink: "https://www.youtube.com/embed/M1uJi7A31T4?si=jeHMWwMcwLGcKzjo",
  },
  {
    id: 6,
    name: "Top 50 songs of TheFatRat 2023- TheFatRat Mega Mix",
    view: "조회수 23만회 4개월 전",
    playlink: "https://www.youtube.com/embed/M1uJi7A31T4?si=jeHMWwMcwLGcKzjo",
  },
];


const StyledUpcover = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 20px;
  width: 1400px;
`;

export default function ShortList() {
  return (
    <StyledUpcover>
      {shortlist.map((lst) => (
        <Shorts
          id={lst.id}
          name={lst.name}
          view={lst.view}
          playlink={lst.playlink}
        ></Shorts>
      ))}
    </StyledUpcover>
  );
}
