import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import styled, { createGlobalStyle, keyframes } from "styled-components";

// 데이터 임포트
import { flowerData } from "./data/tests/flowerData";
import { supplementData } from "./data/tests/supplementData";
import { deskData } from "./data/tests/deskData";
import { interiorData } from "./data/tests/interiorData";
import { officeData } from "./data/tests/officeData";
import { spendingData } from "./data/tests/spendingData";
import { blacklistData } from "./data/tests/blacklistData";
import { sleepData } from "./data/tests/sleepData";
import { survivalData } from "./data/tests/survivalData";
import { soulFoodData } from "./data/tests/soulFoodData";
import { villainData } from "./data/tests/villainData";
import { pastLifeData } from "./data/tests/pastLifeData";
import { interiorSoulmateData } from "./data/tests/interiorSoulmateData";
import { dopamineData } from "./data/tests/dopamineData";
import { moneyAnimalData } from "./data/tests/moneyAnimalData";
import { myCafeData } from "./data/tests/myCafeData";
import { salaryLupinData } from "./data/tests/salaryLupinData";
import { outerInnerData } from "./data/tests/outerInnerData";
import { fantasyJobData } from "./data/tests/fantasyJobData";
import { letterFromFutureData } from "./data/tests/letterFromFutureData";
import { bucketListData } from "./data/tests/bucketListData";
import { recoveryCodeData } from "./data/tests/recoveryCodeData";
import { myNorthStarData } from "./data/tests/myNorthStarData";
import { blessingDayData } from "./data/tests/blessingDayData";
import { seasonOfLoveData } from "./data/tests/seasonOfLoveData";
import { weirdSuperpowerData } from "./data/tests/weirdSuperpowerData";
import { reincarnatedFoodData } from "./data/tests/reincarnatedFoodData";
import { cafeFaceData } from "./data/tests/cafeFaceData";

// 1. 전역 스타일 및 애니메이션
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0; padding: 0;
    background-color: #fcfcfd;
    font-family: 'Pretendard', -apple-system, sans-serif;
    color: #333;
    overflow-x: hidden;
  }
  * { box-sizing: border-box; }
`;

const spin = keyframes` 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } `;
const fadeIn = keyframes` from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } `;

// 테스트 레지스트리
const testRegistry = {
  office: officeData,
  blacklist: blacklistData,
  spending: spendingData,
  survival: survivalData,
  sleep: sleepData,
  soulfood: soulFoodData,
  interior: interiorData,
  desk: deskData,
  flower: flowerData,
  supplement: supplementData,
  villain: villainData,
  pastLife: pastLifeData,
  interiorSoulmate: interiorSoulmateData,
  dopamine: dopamineData,
  moneyAnimal: moneyAnimalData,
  myCafe: myCafeData,
  salaryLupin: salaryLupinData,
  outerInner: outerInnerData,
  fantasyJob: fantasyJobData,
  letterFromFuture: letterFromFutureData,
  bucketList: bucketListData,
  recoveryCode: recoveryCodeData,
  myNorthStarmy: NorthStarData,
  blessingDay: blessingDayData,
  seasonOfLove: seasonOfLoveData,
  weirdSuperpower: weirdSuperpowerData,
  reincarnatedFood: reincarnatedFoodData,
  cafeFace: cafeFaceData,
};

// 2. 메인 페이지 컴포넌트
const MainGallery = () => {
  return (
    <MainContainer>
      <header style={{ textAlign: "center", marginBottom: "50px" }}>
        <Badge>Interactive Test Lab</Badge>
        <MainTitle>랭크램프 심리 연구소</MainTitle>
        <SubTitle>나도 몰랐던 내 안의 '부캐'를 찾아보세요.</SubTitle>
      </header>

      <Grid>
        {Object.keys(testRegistry).map((key) => (
          <TestCard key={key} onClick={() => (window.location.href = `/${key}`)}>
            <CardImg $src={testRegistry[key].mainImg || "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600"} />
            <CardBody>
              <CardTag>Premium</CardTag>
              <CardHead>{testRegistry[key].title}</CardHead>
              <CardDesc>{testRegistry[key].subTitle}</CardDesc>
            </CardBody>
          </TestCard>
        ))}
      </Grid>
      <Footer>© 2026 Ranklamp Play. All rights reserved.</Footer>
    </MainContainer>
  );
};

// 3. 페이지 로더 로직
const AutoTestLoader = () => {
  const path = window.location.pathname.replace(/^\/|\/$/g, "");
  if (!path) return <MainGallery />;
  const data = testRegistry[path];
  if (!data) return <MainGallery />;
  return <TestManager data={data} />;
};

// 4. 테스트 엔진
const TestManager = ({ data }) => {
  const [step, setStep] = useState(0);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState({});

  const handleAnswer = (type) => {
    setScore((prev) => ({ ...prev, [type]: (prev[type] || 0) + 1 }));
    if (currentIdx + 1 < data.questions.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setStep(2);
      setTimeout(() => setStep(3), 1500);
    }
  };

  const getResult = () => {
    const winner = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
    return data.results[winner];
  };

  const handleShare = async () => {
    const shareData = {
      title: data.title,
      text: `나의 결과는 [${getResult().name}]!`,
      url: window.location.href,
    };
    try {
      if (navigator.share) await navigator.share(shareData);
      else {
        await navigator.clipboard.writeText(window.location.href);
        alert("링크가 복사되었습니다!");
      }
    } catch (err) { console.log(err); }
  };

  const result = step === 3 ? getResult() : null;

  return (
    <Wrapper>
      <Card>
        {step === 0 && (
          <FadeContainer>
            <Badge>Personal Curation</Badge>
            <Title>{data.title}</Title>
            <SubTitle style={{ marginBottom: "20px" }}>{data.subTitle}</SubTitle>
            {data.mainImg && <MainBanner src={data.mainImg} alt="main" />}
            <MainButton onClick={() => setStep(1)}>테스트 시작하기</MainButton>
          </FadeContainer>
        )}
        
        {step === 1 && (
          <FadeContainer key={currentIdx}>
            <ProgressOuter>
              <ProgressInner $width={(currentIdx / data.questions.length) * 100} />
            </ProgressOuter>
            <QuestionNum>Q {currentIdx + 1}</QuestionNum>
            {data.questions[currentIdx].img && (
              <ContentImage src={data.questions[currentIdx].img} alt="q" />
            )}
            <QuestionText>{data.questions[currentIdx].q}</QuestionText>
            <ButtonGroup>
              {data.questions[currentIdx].a.map((ans, i) => (
                <AnswerButton key={i} onClick={() => handleAnswer(ans.type)}>
                  {ans.text}
                </AnswerButton>
              ))}
            </ButtonGroup>
          </FadeContainer>
        )}

        {step === 2 && (
          <LoadingWrapper>
            <Spinner />
            <LoadingText>결과 분석 중...</LoadingText>
          </LoadingWrapper>
        )}

        {step === 3 && result && (
          <FadeContainer>
            <Badge>나의 맞춤 결과</Badge>
            <ResultName>{result.name}</ResultName>
            <ContentImage src={result.img} alt="res" style={{ height: "180px" }} />
            <ResultDesc>{result.desc}</ResultDesc>
            
            <AffiliateButton onClick={() => window.open(result.affiliateLink, "_blank")}>
              {result.ctaText}
            </AffiliateButton>
            
            <ShareButton onClick={handleShare}>결과 공유하기</ShareButton>
            
            <ActionGroup>
              <TextActionButton onClick={() => window.location.reload()}>
                다시하기
              </TextActionButton>
              <Divider>|</Divider>
              <TextActionButton onClick={() => (window.location.href = "/")}>
                다른 테스트 보기 →
              </TextActionButton>
            </ActionGroup>
          </FadeContainer>
        )}
      </Card>
    </Wrapper>
  );
};

// --- 스타일 컴포넌트 ---
const MainContainer = styled.div` width: 100%; max-width: 1200px; margin: 0 auto; padding: 60px 20px; animation: ${fadeIn} 0.8s ease-out; `;
const MainTitle = styled.h1` font-size: 2.5rem; font-weight: 900; margin: 10px 0; color: #111; `;
const Grid = styled.div` display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 25px; `;
const TestCard = styled.div` background: white; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: 0.3s; cursor: pointer; border: 1px solid #eee; &:hover { transform: translateY(-8px); border-color: #228be6; } `;
const CardImg = styled.div` width: 100%; height: 180px; background: #f1f3f5 url(${(props) => props.$src}) no-repeat center; background-size: cover; `;
const CardBody = styled.div` padding: 20px; text-align: left; `;
const CardTag = styled.div` color: #228be6; font-size: 0.7rem; font-weight: 800; margin-bottom: 6px; `;
const CardHead = styled.h3` margin: 0 0 8px; font-size: 1.2rem; color: #111; `;
const CardDesc = styled.p` margin: 0; color: #777; font-size: 0.85rem; line-height: 1.5; `;
const Footer = styled.footer` margin-top: 80px; text-align: center; color: #adb5bd; font-size: 0.85rem; `;

const Wrapper = styled.div` display: flex; justify-content: center; align-items: flex-start; width: 100vw; min-height: 100vh; padding: 20px; background: #fcfcfd; `;
const Card = styled.div` 
  background: white; 
  width: 100%; 
  max-width: 420px; 
  padding: 20px 20px 25px; // 상단 여백 최소화
  border-radius: 28px; 
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06); 
  text-align: center; 
  border: 1px solid #f1f3f5;
  margin-top: 10px; // 화면 최상단에 너무 붙지 않게 살짝 띄움
`;

const FadeContainer = styled.div` width: 100%; animation: ${fadeIn} 0.5s ease-out; display: flex; flex-direction: column; align-items: center; `;
const Badge = styled.div` background: #e7f5ff; color: #228be6; padding: 5px 12px; border-radius: 50px; font-size: 0.7rem; font-weight: 800; `;
const Title = styled.h1` font-size: 1.5rem; margin: 12px 0 8px; `;
const SubTitle = styled.p` color: #666; font-size: 0.9rem; margin-bottom: 20px; `;
const MainBanner = styled.img` width: 100%; height: 180px; object-fit: cover; border-radius: 18px; margin-bottom: 20px; `;
const ContentImage = styled.img` width: 100%; height: 200px; object-fit: cover; border-radius: 16px; margin-bottom: 15px; `;
const QuestionNum = styled.div` color: #228be6; font-weight: 800; font-size: 0.9rem; margin-bottom: 8px; `;
const QuestionText = styled.h2` font-size: 1.25rem; margin-bottom: 20px; line-height: 1.4; padding: 0 10px; `;
const ButtonGroup = styled.div` width: 100%; display: flex; flex-direction: column; gap: 8px; `;
const AnswerButton = styled.button` width: 100%; padding: 15px; border: 1px solid #f1f3f5; border-radius: 14px; background: white; cursor: pointer; transition: 0.2s; font-size: 0.95rem; &:hover { border-color: #228be6; background: #f8fbff; } `;
const MainButton = styled.button` width: 100%; padding: 16px; border: none; border-radius: 14px; background: #228be6; color: white; font-weight: 800; cursor: pointer; `;
const AffiliateButton = styled(MainButton)` background: #37b24d; margin-bottom: 8px; `;
const ShareButton = styled(MainButton)` background: white; color: #228be6; border: 1px solid #228be6; margin-bottom: 8px; `;

const ActionGroup = styled.div` display: flex; align-items: center; justify-content: center; gap: 12px; margin-top: 15px; padding-top: 15px; border-top: 1px dashed #eee; width: 100%; `;
const TextActionButton = styled.button` background: none; border: none; color: #adb5bd; font-size: 0.85rem; text-decoration: underline; cursor: pointer; &:hover { color: #228be6; } `;
const Divider = styled.span` color: #eee; font-size: 0.8rem; `;

const ProgressOuter = styled.div` width: 100%; height: 5px; background: #f1f3f5; border-radius: 10px; margin-bottom: 20px; `;
const ProgressInner = styled.div` width: ${(props) => props.$width}%; height: 100%; background: #228be6; transition: width 0.4s; `;
const LoadingWrapper = styled.div` padding: 40px 0; `;
const Spinner = styled.div` width: 35px; height: 35px; border: 3px solid #f1f3f5; border-top: 3px solid #228be6; border-radius: 50%; animation: ${spin} 1s linear infinite; margin: 0 auto 15px; `;
const LoadingText = styled.p` color: #666; font-size: 0.9rem; `;
const ResultName = styled.h2` font-size: 1.6rem; color: #228be6; margin: 8px 0 15px; `;
const ResultDesc = styled.div` background: #f8f9fa; padding: 16px 18px; border-radius: 18px; font-size: 0.9rem; text-align: left; line-height: 1.6; border-left: 4px solid #228be6; margin-bottom: 20px; `;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<AutoTestLoader />} />
        <Route path="/:testId" element={<AutoTestLoader />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;