import Head from "next/head";
import Header from "./../components/Header";
import SubHeader from "./../components/SubHeader.js";
import TextInputbar from "./../components/TextInputbar.js";
import styled from "styled-components";

const WarrenBuffettImage = styled.img`
  width: 200px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const TitleWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>I will be a Warren Buffett</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitleWrapper>
        <WarrenBuffettImage src="/warren-buffett.jpg" alt="warren buffett" />
        <Header>💵 I will be a Warren Buffet 💵</Header>
        <SubHeader>@plantstoen</SubHeader>
      </TitleWrapper>

      <div>
        <TextInputbar />
      </div>

      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
