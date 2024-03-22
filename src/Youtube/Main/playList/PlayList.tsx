import React from "react";
import styled from "styled-components";
import Plays from "./Play";

interface Play {
  id: number;
  name: string;
  myself: string;
  view: string;
  link: string;
  playlink: string;
}

const youtubelist: Play[] = [
  {
    id: 0,
    name: "[Playlist] 찌질찌질 사랑 노래 | 감성힙합/ R&B 플레이리스트",
    myself: "릴숭어 lil mullet",
    view: "조회수 44만회 2개월 전",
    playlink: "https://www.youtube.com/embed/H8tdpfFbdcM?si=Rn-NABNSw1Xlp_gT",
    link: "/youtube/profile1.png",
  },
  {
    id: 1,
    name: "이타도리가 어떤 사람이냐고 묻는다면 이 노래를 들려줄래,ONE OK ROCK(원오...",
    myself: "최GO",
    view: "조회수 9.6만회 2주전",
    playlink: "https://www.youtube.com/embed/9zs76Ck5jPQ?si=G30hZE9S-e1k1raV",
    link: "/youtube/profile2.png",
  },
  {
    id: 2,
    name: "Top 50 songs of TheFatRat 2023- TheFatRat Mega Mix",
    myself: "Aria",
    view: "조회수 23만회 4개월 전",
    playlink: "https://www.youtube.com/embed/M1uJi7A31T4?si=jeHMWwMcwLGcKzjo",
    link: "/youtube/profile3.png",
  },
  {
    id: 3,
    name: "[Playlist] 찌질찌질 사랑 노래 | 감성힙합/ R&B 플레이리스트",
    myself: "릴숭어 lil mullet",
    view: "조회수 44만회 2개월 전",
    playlink: "https://www.youtube.com/embed/H8tdpfFbdcM?si=Rn-NABNSw1Xlp_gT",
    link: "/youtube/profile1.png",
  },
];
const youtubelist2: Play[] = [
  {
    id: 0,
    name: "서운하게 우리끼리 무슨 돈이야?-[힙합 다큐: 언더그라운드]",
    myself: "뷰티풀너드",
    view: "조회수 128만회 1개월 전",
    playlink: "https://www.youtube.com/embed/pxdy_-i6__A?si=PRwbO3LiTa2BFFaH",
    link: "/youtube/profile4.png",
  },
  {
    id: 1,
    name: "DAY6(데이식스) - 나만 슬픈 엔딩 / Lyrics / 가사",
    myself: "파인클래프",
    view: "조회수 595회 2일 전",
    playlink: "https://www.youtube.com/embed/WaF13mmp40Q?si=0-CqrS5mXwBeHfnD",
    link: "/youtube/profile5.png",
  },
  {
    id: 2,
    name: "믹스 - [AMV]'이 사랑이 마치 저주처럼...'",
    myself: "킹누",
    view: "조회수 100만회 2개월 전",
    playlink: "https://www.youtube.com/embed/2FopDbgrJJw?si=s6uPDIY7K9q1qeRa",
    link: "/youtube/profile6.png",
  },
  {
    id: 3,
    name: "서운하게 우리끼리 무슨 돈이야?-[힙합 다큐: 언더그라운드]",
    myself: "뷰티풀너드",
    view: "조회수 128만회 1개월 전",
    playlink: "https://www.youtube.com/embed/pxdy_-i6__A?si=PRwbO3LiTa2BFFaH",
    link: "/youtube/profile4.png",
  },
];

const Styledrowcover = styled.div`
  z-index: -1;
  display: flex;
  flex-direction: row;
  width: 1255px;
  height: 354px;
  justify-content: space-between;
  gap:10px;
`;
const StyledUpcover = styled.div`
  z-index: -1;
  position: relative;
  top: 150px;
  left: 270px;
  display: flex;
  flex-direction: column;
  width: 1255px;
  justify-content: space-between;
`;

export default function PlayList() {
  return (
    <StyledUpcover>
      <Styledrowcover>
        {youtubelist.map((lst) => (
          <Plays
            id={lst.id}
            name={lst.name}
            myself={lst.myself}
            view={lst.view}
            link={lst.link}
            playlink={lst.playlink}
          ></Plays>
        ))}
      </Styledrowcover>
      <Styledrowcover>
        {youtubelist2.map((lst) => (
          <Plays
            id={lst.id}
            name={lst.name}
            myself={lst.myself}
            view={lst.view}
            link={lst.link}
            playlink={lst.playlink}
          ></Plays>
        ))}
      </Styledrowcover>
    </StyledUpcover>
  );
}
