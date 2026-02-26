import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { flowerData } from "./data/tests/flowerData";
import { supplementData } from "./data/tests/supplementData";
import { deskData } from "./data/tests/deskData";
// import { supplementData } from "./data/supplementData"; // 새로운 데이터 추가 예시

// 1. 전역 스타일 설정
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #f8f9fa;
    font-family: 'Pretendard', -apple-system, sans-serif;
    color: #333;
    overflow-x: hidden;
  }
  * { box-sizing: border-box; }
`;

// 애니메이션 정의
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const testRegistry = {
  flower: flowerData,
  supplement: supplementData,
  desk: deskData,
  // supplement: supplementData, 
};

const TestEngine = () => {
  const { testId } = useParams();
  const data = testRegistry[testId];

  if (!data) return <Wrapper><Card>존재하지 않는 테스트입니다.</Card></Wrapper>;

  return <TestManager data={data} />;
};

const TestManager = ({ data }) => {
  const [step, setStep] = useState(0); // 0: 시작, 1: 질문, 2: 로딩, 3: 결과
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

  const result = step === 3 ? getResult() : null;

   // 1. 현재 주소창에서 첫 번째 경로(예: flower)를 자동으로 추출합니다.
  // play.com/flower/ -> "flower" 추출
  const baseName = window.location.pathname.split('/')[1];

  return (
    <Wrapper>
      <Card>
        {/* 공통 브랜드 로고 (public/logo.png 참조) */}
        <BrandLogo src="/logo.png" alt="Brand Logo" onError={(e) => e.target.style.display='none'} />

        {/* --- 0. 시작 화면 --- */}
        {step === 0 && (
          <FadeContainer>
            <Badge>Personal Curation</Badge>
            <Title>{data.title}</Title>
            <SubTitle>{data.subTitle}</SubTitle>
            
            {/* 시작 화면 전용 메인 이미지 */}
            {data.mainImg && (
              <MainBanner src={data.mainImg} alt="main banner" />
            )}
            
            <MainButton onClick={() => setStep(1)}>테스트 시작하기</MainButton>
          </FadeContainer>
        )}

        {/* --- 1. 질문 화면 --- */}
        {step === 1 && (
          <FadeContainer key={currentIdx}>
            <ProgressOuter>
              <ProgressInner $width={(currentIdx / data.questions.length) * 100} />
            </ProgressOuter>
            <QuestionNum>Q {currentIdx + 1}</QuestionNum>
            
            {data.questions[currentIdx].img && (
              <ContentImage src={data.questions[currentIdx].img} alt="question" />
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

        {/* --- 2. 로딩 화면 --- */}
        {step === 2 && (
          <LoadingWrapper>
            <Spinner />
            <LoadingText>당신에게 가장 어울리는<br/>결과를 분석하고 있습니다...</LoadingText>
          </LoadingWrapper>
        )}

        {/* --- 3. 결과 화면 --- */}
        {step === 3 && result && (
          <FadeContainer>
            <Badge>나의 맞춤 결과</Badge>
            <ResultName>{result.name}</ResultName>
            
            <ContentImage src={result.img} alt="result" />
            
            <ResultDesc>{result.desc}</ResultDesc>

            <AffiliateButton onClick={() => window.open(result.affiliateLink, "_blank")}>
              {result.ctaText}
            </AffiliateButton>

            <RetryButton onClick={() => window.location.reload()}>
              테스트 다시하기
            </RetryButton>
          </FadeContainer>
        )}
      </Card>
    </Wrapper>
  );
};

// --- 스타일 컴포넌트 ---

const Wrapper = styled.div`
  display: flex; justify-content: center; align-items: center;
  width: 100vw; min-height: 100vh; padding: 20px;
  background-color: #f8f9fa;
`;

const Card = styled.div`
  background: white; width: 100%; max-width: 440px;
  padding: 30px 25px 40px; border-radius: 28px;
  box-shadow: 0 15px 45px rgba(0,0,0,0.07);
  text-align: center; border: 1px solid #eee;
  display: flex; flex-direction: column; align-items: center;
`;

const BrandLogo = styled.img`
  width: 70px; height: auto; margin-bottom: 15px;
`;

const MainBanner = styled.img`
  width: 100%; height: 210px; object-fit: cover;
  border-radius: 20px; margin-bottom: 25px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.05);
`;

const FadeContainer = styled.div`
  width: 100%; animation: ${fadeIn} 0.5s ease-out forwards;
  display: flex; flex-direction: column; align-items: center;
`;

const Badge = styled.div`
  background: #e7f5ff; color: #228be6; padding: 6px 14px;
  border-radius: 50px; font-size: 0.8rem; font-weight: 800;
  margin-bottom: 15px; letter-spacing: 0.5px;
`;

const Title = styled.h1` font-size: 1.7rem; margin: 5px 0 10px; color: #111; word-break: keep-all; `;
const SubTitle = styled.p` color: #666; font-size: 0.95rem; margin-bottom: 25px; line-height: 1.5; `;

const ContentImage = styled.img`
  width: 100%; height: 230px; object-fit: cover;
  border-radius: 18px; margin-bottom: 25px;
  background-color: #f1f3f5; box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

const QuestionNum = styled.div` color: #228be6; font-weight: 800; font-size: 1.1rem; margin-bottom: 10px; `;
const QuestionText = styled.h2` font-size: 1.35rem; margin-bottom: 25px; word-break: keep-all; line-height: 1.4; color: #212529; `;

const ButtonGroup = styled.div` width: 100%; display: flex; flex-direction: column; gap: 10px; `;

const AnswerButton = styled.button`
  width: 100%; padding: 16px 20px; border: 1px solid #e9ecef;
  border-radius: 15px; background: white; cursor: pointer;
  transition: all 0.2s ease; font-size: 0.95rem; color: #495057;
  &:hover { background: #f8f9fa; border-color: #228be6; color: #228be6; transform: translateY(-2px); }
`;

const MainButton = styled.button`
  width: 100%; padding: 18px; border: none; border-radius: 16px;
  background: #228be6; color: white; font-size: 1.1rem; font-weight: 800;
  cursor: pointer; transition: 0.2s; box-shadow: 0 5px 15px rgba(34, 139, 230, 0.3);
  &:hover { background: #1c7ed6; transform: translateY(-2px); }
`;

const AffiliateButton = styled(MainButton)`
  background: #37b24d; margin-bottom: 10px;
  box-shadow: 0 5px 15px rgba(55, 178, 77, 0.3);
  &:hover { background: #2f9e44; }
`;

const RetryButton = styled.button`
  width: 100%; background: none; border: none; color: #adb5bd;
  text-decoration: underline; cursor: pointer; font-size: 0.85rem; margin-top: 12px;
`;

const ProgressOuter = styled.div` width: 100%; height: 7px; background: #f1f3f5; border-radius: 10px; margin-bottom: 35px; overflow: hidden; `;
const ProgressInner = styled.div` width: ${props => props.$width}%; height: 100%; background: #228be6; border-radius: 10px; transition: width 0.4s; `;

const LoadingWrapper = styled.div` display: flex; flex-direction: column; align-items: center; padding: 50px 0; `;
const Spinner = styled.div` width: 45px; height: 45px; border: 5px solid #f1f3f5; border-top: 5px solid #228be6; border-radius: 50%; animation: ${spin} 1s linear infinite; margin-bottom: 20px; `;
const LoadingText = styled.p` font-size: 1.05rem; color: #666; line-height: 1.6; `;

const ResultName = styled.h2` font-size: 1.8rem; color: #228be6; margin: 10px 0 15px; `;
const ResultDesc = styled.div`
  background: #f8f9fa; padding: 22px; border-radius: 18px;
  color: #444; line-height: 1.7; font-size: 0.95rem; margin-bottom: 25px;
  text-align: left; border-left: 5px solid #228be6;
`;

function App() {
return (
    // basename을 추가하고, 기존 BrowserRouter를 유지합니다.
    <BrowserRouter basename={baseName ? `/${baseName}` : '/'}>
      <GlobalStyle />
      <Routes>
        {/* 이제 /flower/test/123 주소로 접속하면 이 라우트가 잡힙니다 */}
        <Route path="/test/:testId" element={<TestEngine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
