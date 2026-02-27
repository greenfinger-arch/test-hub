import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useParams, Navigate } from "react-router-dom";
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

// [설정] 베이스네임 자동 추출
const pathSegments = window.location.pathname.split('/');
const baseName = "";

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
const fadeIn = keyframes` from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } `;

// 테스트 레지스트리 (여기에 등록하면 메인에 자동 노출됩니다)
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
};

// 2. 메인 페이지 컴포넌트 (플랫폼 홈)
const MainGallery = () => {
  return (
    <MainContainer>
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <Badge>Interactive Test Lab</Badge>
        <MainTitle>랭크램프 심리 연구소</MainTitle>
        <SubTitle>나도 몰랐던 내 안의 '부캐'를 찾아보세요.</SubTitle>
      </header>

      <Grid>
        {Object.keys(testRegistry).map((key) => (
          <TestCard key={key} onClick={() => window.location.href = `/${key}`}>
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
  const currentId = baseName.replace('/', '');
  
  // 메인 페이지인 경우
  if (!currentId) return <MainGallery />;

  // 개별 테스트 페이지인 경우
  const data = testRegistry[currentId];
  if (!data) return <Wrapper><Card>데이터를 찾을 수 없습니다.<br/>(ID: {currentId})</Card></Wrapper>;
  
  return <TestManager data={data} />;
};

// 4. 테스트 엔진 (기존 로직 유지 + 공유 기능)
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
    const winner = Object.keys(score).reduce((a, b) => (score[a] > score[b] ? a : b));
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
        <BrandLogo src="/logo.png" alt="Logo" onClick={() => window.location.href='/'} style={{cursor:'pointer'}} />
        {step === 0 && (
          <FadeContainer>
            <Badge>Personal Curation</Badge>
            <Title>{data.title}</Title>
            <SubTitle>{data.subTitle}</SubTitle>
            {data.mainImg && <MainBanner src={data.mainImg} alt="main" />}
            <MainButton onClick={() => setStep(1)}>테스트 시작하기</MainButton>
          </FadeContainer>
        )}
        {step === 1 && (
          <FadeContainer key={currentIdx}>
            <ProgressOuter><ProgressInner $width={(currentIdx / data.questions.length) * 100} /></ProgressOuter>
            <QuestionNum>Q {currentIdx + 1}</QuestionNum>
            {data.questions[currentIdx].img && <ContentImage src={data.questions[currentIdx].img} alt="q" />}
            <QuestionText>{data.questions[currentIdx].q}</QuestionText>
            <ButtonGroup>
              {data.questions[currentIdx].a.map((ans, i) => (
                <AnswerButton key={i} onClick={() => handleAnswer(ans.type)}>{ans.text}</AnswerButton>
              ))}
            </ButtonGroup>
          </FadeContainer>
        )}
        {step === 2 && (
          <LoadingWrapper><Spinner /><LoadingText>결과 분석 중...</LoadingText></LoadingWrapper>
        )}
        {step === 3 && result && (
          <FadeContainer>
            <Badge>나의 맞춤 결과</Badge>
            <ResultName>{result.name}</ResultName>
            <ContentImage src={result.img} alt="res" />
            <ResultDesc>{result.desc}</ResultDesc>
            <AffiliateButton onClick={() => window.open(result.affiliateLink, "_blank")}>{result.ctaText}</AffiliateButton>
            <ShareButton onClick={handleShare}>결과 공유하기</ShareButton>
            <RetryButton onClick={() => window.location.reload()}>다시하기</RetryButton>
          </FadeContainer>
        )}
      </Card>
    </Wrapper>
  );
};

// --- 스타일 컴포넌트 (플랫폼 레이아웃) ---
const MainContainer = styled.div` width: 100%; max-width: 1200px; margin: 0 auto; padding: 80px 20px; animation: ${fadeIn} 0.8s ease-out; `;
const MainTitle = styled.h1` font-size: 2.8rem; font-weight: 900; margin: 10px 0; color: #111; `;
const Grid = styled.div` display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 30px; `;
const TestCard = styled.div` background: white; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: 0.3s; cursor: pointer; border: 1px solid #eee; &:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(34,139,230,0.12); border-color: #228be6; } `;
const CardImg = styled.div` width: 100%; height: 200px; background: #f1f3f5 url(${props => props.$src}) no-repeat center; background-size: cover; `;
const CardBody = styled.div` padding: 25px; text-align: left; `;
const CardTag = styled.div` color: #228be6; font-size: 0.7rem; font-weight: 800; margin-bottom: 8px; letter-spacing: 1px; `;
const CardHead = styled.h3` margin: 0 0 10px; font-size: 1.3rem; color: #111; `;
const CardDesc = styled.p` margin: 0; color: #777; font-size: 0.9rem; line-height: 1.5; `;
const Footer = styled.footer` margin-top: 100px; text-align: center; color: #adb5bd; font-size: 0.9rem; `;

// --- 스타일 컴포넌트 (공통 & 엔진) ---
const Wrapper = styled.div` display: flex; justify-content: center; align-items: center; width: 100vw; min-height: 100vh; padding: 20px; `;
const Card = styled.div` background: white; width: 100%; max-width: 440px; padding: 30px 25px 40px; border-radius: 28px; box-shadow: 0 15px 45px rgba(0,0,0,0.07); text-align: center; border: 1px solid #eee; `;
const BrandLogo = styled.img` width: 60px; margin-bottom: 15px; `;
const MainBanner = styled.img` width: 100%; height: 210px; object-fit: cover; border-radius: 20px; margin-bottom: 25px; `;
const FadeContainer = styled.div` width: 100%; animation: ${fadeIn} 0.5s ease-out; display: flex; flex-direction: column; align-items: center; `;
const Badge = styled.div` background: #e7f5ff; color: #228be6; padding: 6px 14px; border-radius: 50px; font-size: 0.75rem; font-weight: 800; display: inline-block; `;
const Title = styled.h1` font-size: 1.7rem; margin: 15px 0 10px; `;
const SubTitle = styled.p` color: #666; font-size: 0.95rem; margin-bottom: 30px; `;
const ContentImage = styled.img` width: 100%; height: 230px; object-fit: cover; border-radius: 18px; margin-bottom: 25px; `;
const QuestionNum = styled.div` color: #228be6; font-weight: 800; margin-bottom: 10px; `;
const QuestionText = styled.h2` font-size: 1.35rem; margin-bottom: 25px; line-height: 1.4; `;
const ButtonGroup = styled.div` width: 100%; display: flex; flex-direction: column; gap: 10px; `;
const AnswerButton = styled.button` width: 100%; padding: 18px; border: 1px solid #e9ecef; border-radius: 16px; background: white; cursor: pointer; transition: 0.2s; &:hover { border-color: #228be6; color: #228be6; background: #f8fbff; } `;
const MainButton = styled.button` width: 100%; padding: 18px; border: none; border-radius: 16px; background: #228be6; color: white; font-weight: 800; cursor: pointer; box-shadow: 0 4px 12px rgba(34,139,230,0.2); `;
const AffiliateButton = styled(MainButton)` background: #37b24d; margin-bottom: 10px; box-shadow: 0 4px 12px rgba(55,178,77,0.2); `;
const ShareButton = styled(MainButton)` background: white; color: #228be6; border: 1px solid #228be6; margin-bottom: 10px; box-shadow: none; `;
const RetryButton = styled.button` background: none; border: none; color: #adb5bd; text-decoration: underline; cursor: pointer; margin-top: 15px; `;
const ProgressOuter = styled.div` width: 100%; height: 6px; background: #f1f3f5; border-radius: 10px; margin-bottom: 30px; overflow: hidden; `;
const ProgressInner = styled.div` width: ${props => props.$width}%; height: 100%; background: #228be6; transition: width 0.4s; `;
const LoadingWrapper = styled.div` padding: 50px 0; `;
const Spinner = styled.div` width: 40px; height: 40px; border: 4px solid #f1f3f5; border-top: 4px solid #228be6; border-radius: 50%; animation: ${spin} 1s linear infinite; margin: 0 auto 20px; `;
const LoadingText = styled.p` color: #666; font-size: 1rem; `;
const ResultName = styled.h2` font-size: 1.8rem; color: #228be6; margin: 10px 0 20px; `;
const ResultDesc = styled.div` background: #f8f9fa; padding: 22px; border-radius: 20px; font-size: 0.95rem; text-align: left; line-height: 1.7; border-left: 5px solid #228be6; margin-bottom: 30px; `;

function App() {
  return (
    <BrowserRouter basename={baseName}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<AutoTestLoader />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;