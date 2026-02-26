import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useParams, Navigate, Link } from "react-router-dom";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { flowerData } from "./data/tests/flowerData";
import { supplementData } from "./data/tests/supplementData";
import { deskData } from "./data/tests/deskData";
import { interiorData } from "./data/tests/interiorData";
import { officeData } from "./data/tests/officeData";
import { spendingData } from "./data/tests/spendingData";
import { blacklistData } from "./data/tests/blacklistData";
import { sleepData } from "./data/tests/sleepData";
import { survivalData } from "./data/tests/survivalData";

const pathSegments = window.location.pathname.split('/');
const baseName = pathSegments[1] && !pathSegments[1].includes('.') ? `/${pathSegments[1]}` : '';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0; padding: 0;
    background-color: #f8f9fa;
    font-family: 'Pretendard', -apple-system, sans-serif;
    color: #333;
    overflow-x: hidden;
  }
  * { box-sizing: border-box; }
`;

const spin = keyframes` 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } `;
const fadeIn = keyframes` from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } `;

const testRegistry = {
  flower: flowerData,
  supplement: supplementData,
  desk: deskData,
  interior: interiorData,
  office: officeData,
  spending: spendingData,
  sleep: sleepData,
  survival: survivalData,
};

const AutoTestLoader = () => {
  const currentId = baseName.replace('/', '');
  const data = testRegistry[currentId];
  if (!data) return <Wrapper><Card>테스트 데이터를 찾을 수 없습니다.<br/>(ID: {currentId})</Card></Wrapper>;
  return <TestManager data={data} />;
};

const TestEngine = () => {
  const { testId } = useParams();
  const data = testRegistry[testId];
  if (!data) return <Wrapper><Card>존재하지 않는 테스트입니다.</Card></Wrapper>;
  return <TestManager data={data} />;
};

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

  // [추가] 공유하기 함수
  const handleShare = async () => {
    const shareData = {
      title: data.title,
      text: `나의 결과는 [${getResult().name}]! 당신의 결과도 확인해보세요.`,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("링크가 복사되었습니다!");
      }
    } catch (err) {
      console.log("공유 실패:", err);
    }
  };

  const result = step === 3 ? getResult() : null;

  return (
    <Wrapper>
      <Card>
        <BrandLogo src="/logo.png" alt="Brand Logo" onError={(e) => e.target.style.display='none'} />

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
          <LoadingWrapper>
            <Spinner /><LoadingText>결과 분석 중...</LoadingText>
          </LoadingWrapper>
        )}

        {step === 3 && result && (
          <FadeContainer>
            <Badge>나의 맞춤 결과</Badge>
            <ResultName>{result.name}</ResultName>
            <ContentImage src={result.img} alt="res" />
            <ResultDesc>{result.desc}</ResultDesc>
            <AffiliateButton onClick={() => window.open(result.affiliateLink, "_blank")}>{result.ctaText}</AffiliateButton>
            
            {/* [수정] 공유 버튼 추가 */}
            <ShareButton onClick={handleShare}>결과 공유하기</ShareButton>
            
            <RetryButton onClick={() => window.location.reload()}>테스트 다시하기</RetryButton>
          </FadeContainer>
        )}
      </Card>
    </Wrapper>
  );
};

// --- 스타일 컴포넌트 ---
const Wrapper = styled.div` display: flex; justify-content: center; align-items: center; width: 100vw; min-height: 100vh; padding: 20px; background-color: #f8f9fa; `;
const Card = styled.div` background: white; width: 100%; max-width: 440px; padding: 30px 25px 40px; border-radius: 28px; box-shadow: 0 15px 45px rgba(0,0,0,0.07); text-align: center; border: 1px solid #eee; display: flex; flex-direction: column; align-items: center; `;
const BrandLogo = styled.img` width: 70px; margin-bottom: 15px; `;
const MainBanner = styled.img` width: 100%; height: 210px; object-fit: cover; border-radius: 20px; margin-bottom: 25px; `;
const FadeContainer = styled.div` width: 100%; animation: ${fadeIn} 0.5s ease-out forwards; display: flex; flex-direction: column; align-items: center; `;
const Badge = styled.div` background: #e7f5ff; color: #228be6; padding: 6px 14px; border-radius: 50px; font-size: 0.8rem; font-weight: 800; margin-bottom: 15px; `;
const Title = styled.h1` font-size: 1.7rem; margin: 5px 0 10px; `;
const SubTitle = styled.p` color: #666; font-size: 0.95rem; margin-bottom: 25px; `;
const ContentImage = styled.img` width: 100%; height: 230px; object-fit: cover; border-radius: 18px; margin-bottom: 25px; `;
const QuestionNum = styled.div` color: #228be6; font-weight: 800; `;
const QuestionText = styled.h2` font-size: 1.35rem; margin-bottom: 25px; `;
const ButtonGroup = styled.div` width: 100%; display: flex; flex-direction: column; gap: 10px; `;
const AnswerButton = styled.button` width: 100%; padding: 16px; border: 1px solid #e9ecef; border-radius: 15px; background: white; cursor: pointer; `;
const MainButton = styled.button` width: 100%; padding: 18px; border: none; border-radius: 16px; background: #228be6; color: white; font-weight: 800; cursor: pointer; `;
const AffiliateButton = styled(MainButton)` background: #37b24d; margin-bottom: 10px; `;

// [추가] 공유 버튼 스타일
const ShareButton = styled(MainButton)`
  background: white;
  color: #228be6;
  border: 1px solid #228be6;
  margin-bottom: 10px;
  box-shadow: none;
  &:hover { background: #f1f3f5; }
`;

const RetryButton = styled.button` background: none; border: none; color: #adb5bd; text-decoration: underline; cursor: pointer; margin-top: 12px; `;
const ProgressOuter = styled.div` width: 100%; height: 7px; background: #f1f3f5; border-radius: 10px; margin-bottom: 35px; overflow: hidden; `;
const ProgressInner = styled.div` width: ${props => props.$width}%; height: 100%; background: #228be6; transition: width 0.4s; `;
const LoadingWrapper = styled.div` padding: 50px 0; `;
const Spinner = styled.div` width: 45px; height: 45px; border: 5px solid #f1f3f5; border-top: 5px solid #228be6; border-radius: 50%; animation: ${spin} 1s linear infinite; margin-bottom: 20px; `;
const LoadingText = styled.p` color: #666; `;
const ResultName = styled.h2` font-size: 1.8rem; color: #228be6; `;
const ResultDesc = styled.div` background: #f8f9fa; padding: 22px; border-radius: 18px; font-size: 0.95rem; text-align: left; border-left: 5px solid #228be6; margin-bottom: 25px; `;

function App() {
  return (
    <BrowserRouter basename={baseName}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<AutoTestLoader />} />
        <Route path="/test/:testId" element={<TestEngine />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;