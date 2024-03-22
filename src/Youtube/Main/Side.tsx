import React from "react";
import styled from "styled-components";

interface Link {
  id: number;
  link: string;
  explain: string;
}
const UpList: Link[] = [
  { id: 0, link: "/img/Shorts.png", explain: "Shorts" },
  { id: 1, link: "/img/Subscribe.png", explain: "구독" },
];

const DownList: Link[] = [
  { id: 0, link: "/img/Basicprofile.png", explain: "내 채널" },
  { id: 1, link: "/img/History.png", explain: "시청 기록" },
  { id: 2, link: "/img/Play.png", explain: "내 동영상" },
  { id: 3, link: "/img/Time.png", explain: "나중에  볼 동영상" },
  { id: 4, link: "/img/More.png", explain: "더보기" },
];
const ProfileList: Link[] = [
  { id: 0, link: "/profile/profile1.png", explain: "가재맨" },
  { id: 1, link: "/profile/profile2.png", explain: "PAKA" },
  { id: 2, link: "/profile/profile3.png", explain: "괴물지 유튜브" },
  { id: 3, link: "/profile/profile4.png", explain: "코딩애플" },
  { id: 4, link: "/profile/profile5.png", explain: "동수칸TV" },
  { id: 5, link: "/profile/profile6.png", explain: "카라미 학원" },
  { id: 6, link: "/profile/profile7.png", explain: "프제짱" },
];
const StyledCover = styled.div`
  display: block;
  position: fixed;
  top: 70px;
  width: 240px;
  height: 100%;
  //padding: 12px;
`;
const StyledProfileCover = styled.div`
  display: block;
  position: fixed;
  top: 490px;
  width: 240px;
  height: 376px;
  padding: 12px;
  margin: 12px;
  border-bottom: 1px solid #ccc;
`;
const StyledCoverdown = styled.div`
  display: block;
  flex-direction: column;
  width: 216px;
  height: 252px;
  padding: 12px;
  margin: 12px;
   border-bottom: 1px solid #ccc; 
`;
const StyledCoverUp = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin: 12px;
  border-bottom: 1px solid #ccc;
`;
const StyledHome = styled.div`
  width: 204px;
  height: 40px;
  border-radius: 10px;
  background-color: rgb(244, 244, 244);
  padding: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;
const Styledfunc = styled.div`
  width: 204px;
  height: 40px;
  border-radius: 10px;
  //padding: 6px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

const Styledexplain = styled.div`
  width: 132px;
  height: 20px;
  font-size: 14px;
  color: "#0F0F0F";
`;

const Styledicon = styled.div<{ bgImage: string }>`
  width: 24px;
  height: 24px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
`;

const StyledProfile = styled.div<{ bgImage: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
`;

export default function Sidebar() {
  return (
    <div>
      <StyledCover>
        <StyledCoverUp>
          <StyledHome>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              style={{ width: "24px", height: "24px" }}
            >
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
            <Styledexplain>홈</Styledexplain>
          </StyledHome>
          {UpList.map((lst) => (
            <Styledfunc>
              <Styledicon key={lst.id} bgImage={lst.link}></Styledicon>
              <Styledexplain>{lst.explain}</Styledexplain>
            </Styledfunc>
          ))}
        </StyledCoverUp>
        <StyledCoverdown>
          <Styledfunc>
            <div style={{ font: "16px" }}>나</div>
            <Styledexplain>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                style={{ width: "16px", height: "16px" }}
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </Styledexplain>
          </Styledfunc>
          {DownList.map((lst) => (
            <Styledfunc>
              <Styledicon key={lst.id} bgImage={lst.link}></Styledicon>
              <Styledexplain>{lst.explain}</Styledexplain>
            </Styledfunc>
          ))}
        </StyledCoverdown>
      </StyledCover>
      <StyledProfileCover>
        <Styledfunc>구독</Styledfunc>
        {ProfileList.map((lst) => (
          <Styledfunc>
            <StyledProfile key={lst.id} bgImage={lst.link}></StyledProfile>
            <Styledexplain>{lst.explain}</Styledexplain>
          </Styledfunc>
        ))}
        <Styledfunc>
          <Styledicon bgImage="/img/More.png"></Styledicon>
          <Styledexplain>21개 더보기</Styledexplain>
        </Styledfunc>
      </StyledProfileCover>
    </div>
  );
}
