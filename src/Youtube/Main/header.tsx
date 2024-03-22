import React from "react";
import styled from "styled-components";
const StyledFirst = styled.div`
  
  position: absolute;
  display: flex;
  left: 0%;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;

  gap: 20px;
`;

const StyledSecond = styled.div`
  position: absolute;
  left: 20%;
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  width: 731px;
  padding: 16px;
`;
const StyledThird = styled.div`
  position: absolute;
  display: flex;
  right: 0%;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  gap: 20px;
`;
const StyledHeader = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  padding: 0px 16px;
  justify-content: space-between;
  align-items: center;
  //gap: 30px;
  width: 100%;
  height: 56px;
  background-color: #ffffff;
`;
const StyledInput = styled.input`

  border-top-left-radius: 35px;
  border-bottom-left-radius: 35px;
  max-width: 600px;
  width: 100%;
  height: 40px;
  &::placeholder {
    position: relative;
    left: 10%;
  }

  border: 1px solid #ccc;
`;
const StyledButton = styled.button`
  
  height: 40px;
  border-top-right-radius: 35px;
  border-bottom-right-radius: 35px;
  width: 63.99px;
  background-color: rgb(244, 244, 244);

  border: 1px solid #ccc;
  //padding: 16px;
`;

const StyledProfile = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background-image: url("/img/myprofile.png");
  background-size: cover;
`;
const StyledMike = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: rgb(244, 244, 244);
  border: 1px solid #ccc;

  text-align: center;
  padding-top: 7px;
`;

const Styledlogo = styled.div`
  width: 121px;
  height: 56px;
  background-image: url("/img/youtube.png");
  background-size: cover;
`;

const Styledmenu = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  padding: 1px 6px;
  border-radius: 50px;
  background-color: rgb(255, 255, 255);
`;
const Styledform = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 590px;
`;
export default function Header() {
  return (
    <StyledHeader>
      <StyledFirst>
        <Styledmenu>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            style={{ width: "24px", height: "24px" }}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </Styledmenu>
        <Styledlogo></Styledlogo>
      </StyledFirst>
      <StyledSecond>
        <StyledMike>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            style={{ width: "24px", height: "24px" }}
          >
            <path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" />
          </svg>
        </StyledMike>
        <Styledform>
          <StyledInput type="text" placeholder="검색"></StyledInput>

          <StyledButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ width: "24px", height: "24px" }}
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </StyledButton>
        </Styledform>
      </StyledSecond>
      <StyledThird>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          style={{ width: "24px", height: "24px" }}
        >
          <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          style={{ width: "24px", height: "24px" }}
        >
          <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
        </svg>
        <StyledProfile></StyledProfile>
      </StyledThird>
    </StyledHeader>
  );
}
