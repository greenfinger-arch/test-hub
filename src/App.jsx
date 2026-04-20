import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
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
import { blessingDayData } from "./data/tests/blessingDayData";
import { seasonOfLoveData } from "./data/tests/seasonOfLoveData";
import { weirdSuperpowerData } from "./data/tests/weirdSuperpowerData";
import { reincarnatedFoodData } from "./data/tests/reincarnatedFoodData";
import { cafeFaceData } from "./data/tests/cafeFaceData";
import { cafeAndDessertFullSet } from "./data/tests/cafeAndDessertFullSet";
import { personalPastelData } from "./data/tests/personalPastelData";
import { guardianPlantData } from "./data/tests/guardianPlantData";
import { atticRomanceData } from "./data/tests/atticRomanceData";
import { romanceFantasyData } from "./data/tests/romanceFantasyData";
import { loveVillainData } from "./data/tests/loveVillainData";
import { loveTemperatureData } from "./data/tests/loveTemperatureData";
import { zombieSurvivalData } from "./data/tests/zombieSurvivalData";
import { pastLifeKarmaData } from "./data/tests/pastLifeKarmaData";
import { loveMoodLightData } from "./data/tests/loveMoodLightData";
import { desertIslandSurvivalData } from "./data/tests/desertIslandSurvivalData";
import { loveJinSangData } from "./data/tests/loveJinSangData";
import { marriedCouplesNightData } from "./data/tests/marriedCouplesNightData";
import { coupleReincarnationData } from "./data/tests/coupleReincarnationData";
import { homeHierarchyData } from "./data/tests/homeHierarchyData";
import { firstPageMemoryData } from "./data/tests/firstPageMemoryData";
import { futureSeasonsData } from "./data/tests/futureSeasonsData";
import { tomorrowSeasonsData } from "./data/tests/tomorrowSeasonsData";
import { joseonIDTest } from "./data/tests/joseonIDTest";
import { lottoFriendshipData } from "./data/tests/lottoFriendshipData";
import { friendVillainTest } from "./data/tests/friendVillainTest";
import { secretHideoutData } from "./data/tests/secretHideoutData";
import { mentalWeatherData } from "./data/tests/mentalWeatherData";
import { dailyVitaminData } from "./data/tests/dailyVitaminData";
import { officesurvivalData } from "./data/tests/officesurvivalData";
import { workerDateData } from "./data/tests/workerDateData";
import { plantMatchData } from "./data/tests/plantMatchData";
import { deskHealthData } from "./data/tests/deskHealthData";
import { officePlantData } from "./data/tests/officePlantData";
import { studyDeskData } from "./data/tests/studyDeskData";
import { studyBalanceData } from "./data/tests/studyBalanceData";
import { spineHealthData } from "./data/tests/spineHealthData";
import { fengShuiWealthData } from "./data/tests/fengShuiWealthData";
import { fengShuiWarningData } from "./data/tests/fengShuiWarningData";
import { fengShuiBlessingData } from "./data/tests/fengShuiBlessingData";
import { krPlantMiracleData } from "./data/tests/krPlantMiracleData.JS";
import { KitchenScentData } from "./data/tests/KitchenScentData.js";
import { BedUnderworldData } from "./data/tests/BedUnderworldData.js";
import { ClosetFortuneData } from "./data/tests/ClosetFortuneData.js";
import { FengShuiMasterData } from "./data/tests/FengShuiMasterData.js";
import { StudentRoomData } from "./data/tests/StudentRoomData.js";
import { HealingRoomData } from "./data/tests/HealingRoomData.js";
import { SingleRoomData } from "./data/tests/SingleRoomData.js";
import { PetTeriorData } from "./data/tests/PetTeriorData.js";
import { BabyRoomData } from "./data/tests/BabyRoomData.js";
import { koreaApartmentFortuneData } from "./data/tests/koreaApartmentFortuneData.js";
import { resumePassFortuneData } from "./data/tests/resumePassFortuneData.js";
import { storeSuccessFortuneData } from "./data/tests/storeSuccessFortuneData.js";
import { smartphoneWealthFortuneData } from "./data/tests/smartphoneWealthFortuneData.js";
import { relationshipWealthFortuneData } from "./data/tests/relationshipWealthFortuneData.js";
import { nobleConnectionFortuneData } from "./data/tests/nobleConnectionFortuneData.js";
import { firstImpressionScientificData } from "./data/tests/firstImpressionScientificData.js";
import { gossipDefenseRiskData } from "./data/tests/gossipDefenseRiskData.js";
import { spaceEnergyAuditData } from "./data/tests/spaceEnergyAuditData.js";

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
  blessingDay: blessingDayData,
  seasonOfLove: seasonOfLoveData,
  weirdSuperpower: weirdSuperpowerData,
  reincarnatedFood: reincarnatedFoodData,
  cafeFace: cafeFaceData,
  cafeAndDessertFullSet: cafeAndDessertFullSet,
  personalPastel: personalPastelData,
  guardianPlant: guardianPlantData,
  atticRomance: atticRomanceData,
  romanceFantasy: romanceFantasyData,
  loveVillain: loveVillainData,
  loveTemperature: loveTemperatureData,
  zombieSurvival: zombieSurvivalData,
  pastLifeKarma: pastLifeKarmaData,
  loveMoodLight: loveMoodLightData,
  desertIslandSurvival: desertIslandSurvivalData,
  loveJinSang: loveJinSangData,
  marriedCouplesNight: marriedCouplesNightData,
  coupleReincarnation: coupleReincarnationData,
  homeHierarchy: homeHierarchyData,
  firstPageMemory: firstPageMemoryData,
  futureSeasons: futureSeasonsData,
  tomorrowSeasons: tomorrowSeasonsData,
  joseonIDTest: joseonIDTest,
  lottoFriendship: lottoFriendshipData,
  friendVillainTest: friendVillainTest,
  secretHideout: secretHideoutData,
  mentalWeather: mentalWeatherData,
  dailyVitamin: dailyVitaminData,
  officesurvival: officesurvivalData,
  workerDate: workerDateData,
  plantMatch: plantMatchData,
  deskHealth: deskHealthData,
  officePlant: officePlantData,
  studyDesk: studyDeskData,
  studyBalance: studyBalanceData,
  spineHealth: spineHealthData,
  fengShuiWealth: fengShuiWealthData,
  fengShuiWarning: fengShuiWarningData,
  fengShuiBlessing: fengShuiBlessingData,
  krPlantMiracle: krPlantMiracleData,
  KitchenScent: KitchenScentData,
  BedUnderworld: BedUnderworldData,
  ClosetFortune: ClosetFortuneData,
  FengShuiMaster: FengShuiMasterData,
  StudentRoom: StudentRoomData,
  HealingRoom: HealingRoomData,
  SingleRoom: SingleRoomData,
  PetTerior: PetTeriorData,
  BabyRoomData: BabyRoomData,
  koreaApartmentFortune: koreaApartmentFortuneData,
  resumePassFortune: resumePassFortuneData,
  storeSuccessFortune: storeSuccessFortuneData,
  smartphoneWealthFortune: smartphoneWealthFortuneData,
  relationshipWealthFortune: relationshipWealthFortuneData,
  nobleConnectionFortune: nobleConnectionFortuneData,
  firstImpressionScientific: firstImpressionScientificData,
  gossipDefenseRisk: gossipDefenseRiskData,
  spaceEnergyAudit: spaceEnergyAuditData,
};

// [삽입 코드 1] 공개 가능한 테스트 키값만 추출 (isReady가 true인 것만)
const activeTestKeys = Object.keys(testRegistry).filter(
  (key) => testRegistry[key].isReady === true,
);

// 2. 메인 페이지 컴포넌트
const MainGallery = () => {
  // [추가] 리액트 라우터의 내비게이션 기능을 가져옵니다.
  const navigate = useNavigate();

  return (
    <MainContainer>
      <header style={{ textAlign: "center", marginBottom: "50px" }}>
        <Badge>Interactive Test Lab</Badge>
        <MainTitle>스마트 풍수 연구소</MainTitle>
        <SubTitle>나도 몰랐던 내 안의 '부캐'를 찾아보세요.</SubTitle>
      </header>

      <Grid>
        {/* activeTestKeys만 순회하며 공개된 테스트만 노출합니다. */}
        {activeTestKeys.map((key) => (
          <TestCard
            key={key}
            // [수정] window.location.href 대신 navigate 함수를 사용합니다.
            onClick={() => navigate(`/${key}`)}
          >
            <CardImg
              $src={
                testRegistry[key].mainImg ||
                "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600"
              }
            />
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
  // 1. 현재 접속한 경로(Path)에서 공백이나 슬래시를 제거하고 순수한 키값만 추출합니다.
  const path = window.location.pathname.replace(/^\/|\/$/g, "");

  // 2. 경로가 없으면(메인 페이지면) 갤러리를 보여줍니다.
  if (!path) return <MainGallery />;

  // 3. 레지스트리에서 해당 경로에 맞는 데이터를 가져옵니다.
  const data = testRegistry[path];

  // 4. [핵심 수정] 데이터가 아예 없거나(존재하지 않는 주소),
  //    데이터는 있지만 isReady가 true가 아니라면(작업 중) 메인으로 리다이렉트합니다.
  if (!data || data.isReady !== true) {
    return <Navigate to="/" replace />;
  }

  // 5. 모든 검문을 통과했다면(데이터가 있고 준비됨) 테스트 화면을 보여줍니다.
  return <TestManager data={data} />;
};

// 4. 테스트 엔진
const TestManager = ({ data }) => {
  const navigate = useNavigate(); // [추가] 이 줄을 추가합니다.
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
    const winner = Object.keys(score).reduce((a, b) =>
      score[a] > score[b] ? a : b,
    );
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
    } catch (err) {
      console.log(err);
    }
  };

  const result = step === 3 ? getResult() : null;

  return (
    <Wrapper>
      <Card>
        {step === 0 && (
          <FadeContainer>
            <Badge>Personal Curation</Badge>
            <Title>{data.title}</Title>
            <SubTitle style={{ marginBottom: "20px" }}>
              {data.subTitle}
            </SubTitle>
            {data.mainImg && <MainBanner src={data.mainImg} alt="main" />}
            <MainButton onClick={() => setStep(1)}>테스트 시작하기</MainButton>
          </FadeContainer>
        )}

        {step === 1 && (
          <FadeContainer key={currentIdx}>
            <ProgressOuter>
              <ProgressInner
                $width={(currentIdx / data.questions.length) * 100}
              />
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
            <ContentImage
              src={result.img}
              alt="res"
              style={{ height: "180px" }}
            />
            <ResultDesc>{result.desc}</ResultDesc>

            {/* 제휴 버튼 */}
            <AffiliateButton
              onClick={() => window.open(result.affiliateLink, "_blank")}
            >
              {result.ctaText}
            </AffiliateButton>

            {/* 면책 문구 */}
            <p
              style={{
                fontSize: "11px",
                color: "#999",
                marginTop: "10px",
                marginBottom: "10px",
                textAlign: "center",
                lineHeight: "1.4",
                wordBreak: "keep-all",
              }}
            >
              본 서비스는 파트너스 활동을 통해, 일정액의 수수료를 제공받을 수
              있습니다.
            </p>

            <ShareButton onClick={handleShare}>결과 공유하기</ShareButton>

            {/* [신규 추가] 메인 블로그 기사 연결 버튼 */}
            {data.relatedPostUrl && (
              <div style={{ marginTop: "12px", textAlign: "center" }}>
                <button
                  onClick={() => window.open(data.relatedPostUrl, "_blank")}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#4a90e2",
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    textDecoration: "underline",
                    padding: "5px 10px",
                  }}
                >
                  📖 전문 가이드 기사 읽어보기 →
                </button>
              </div>
            )}

            <ActionGroup>
              <TextActionButton
                onClick={() => {
                  setStep(0);
                  setCurrentIdx(0);
                  setScore({});
                }}
              >
                다시하기
              </TextActionButton>

              <Divider>|</Divider>

              <TextActionButton onClick={() => navigate("/")}>
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
const MainContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  animation: ${fadeIn} 0.8s ease-out;
`;
const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  margin: 10px 0;
  color: #111;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
`;
const TestCard = styled.div`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
  cursor: pointer;
  border: 1px solid #eee;
  &:hover {
    transform: translateY(-8px);
    border-color: #228be6;
  }
`;
const CardImg = styled.div`
  width: 100%;
  height: 180px;
  background: #f1f3f5 url(${(props) => props.$src}) no-repeat center;
  background-size: cover;
`;
const CardBody = styled.div`
  padding: 20px;
  text-align: left;
`;
const CardTag = styled.div`
  color: #228be6;
  font-size: 0.7rem;
  font-weight: 800;
  margin-bottom: 6px;
`;
const CardHead = styled.h3`
  margin: 0 0 8px;
  font-size: 1.2rem;
  color: #111;
`;
const CardDesc = styled.p`
  margin: 0;
  color: #777;
  font-size: 0.85rem;
  line-height: 1.5;
`;
const Footer = styled.footer`
  margin-top: 80px;
  text-align: center;
  color: #adb5bd;
  font-size: 0.85rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  min-height: 100vh;
  padding: 20px;
  background: #fcfcfd;
`;
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

const FadeContainer = styled.div`
  width: 100%;
  animation: ${fadeIn} 0.5s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Badge = styled.div`
  background: #e7f5ff;
  color: #228be6;
  padding: 5px 12px;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 800;
`;
const Title = styled.h1`
  font-size: 1.5rem;
  margin: 12px 0 8px;
`;
const SubTitle = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 20px;
`;
const MainBanner = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 18px;
  margin-bottom: 20px;
`;
const ContentImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 15px;
`;
const QuestionNum = styled.div`
  color: #228be6;
  font-weight: 800;
  font-size: 0.9rem;
  margin-bottom: 8px;
`;
const QuestionText = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 20px;
  line-height: 1.4;
  padding: 0 10px;
`;
const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const AnswerButton = styled.button`
  width: 100%;
  padding: 16px; /* 살짝 더 여유 있게 */
  border: 1px solid #f1f3f5;
  border-radius: 16px; /* 좀 더 둥글고 세련되게 */

  /* [핵심] 기존의 투명하고 고급스러운 화이트 톤 유지 */
  background: #ffffff;

  /* [중요] 단순 블랙이 아닌 기존 데스크톱의 깊이 있는 컬러 사용 */
  color: #495057;

  cursor: pointer;
  transition: all 0.25s ease;
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.5;

  /* [모바일 치트키] 시스템이 글자색을 마음대로 반전시키지 못하게 고정 */
  -webkit-text-fill-color: #495057;

  &:hover {
    /* 기존 데스크톱의 블루 포인트 스타일 복구 */
    border-color: #228be6;
    background: #f8fbff;
    color: #228be6;
    -webkit-text-fill-color: #228be6; /* 호버 시에도 색상 고정 */
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(34, 139, 230, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  /* 모바일 기기에서만 적용되는 미세 조정 */
  @media (max-width: 768px) {
    padding: 14px;
    font-size: 0.9rem;
  }
`;
const MainButton = styled.button`
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 14px;
  background: #228be6;
  color: white;
  font-weight: 800;
  cursor: pointer;
`;
const AffiliateButton = styled(MainButton)`
  background: #37b24d;
  margin-bottom: 8px;
`;
const ShareButton = styled(MainButton)`
  background: white;
  color: #228be6;
  border: 1px solid #228be6;
  margin-bottom: 8px;
`;

const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px dashed #eee;
  width: 100%;
`;
const TextActionButton = styled.button`
  background: none;
  border: none;
  color: #adb5bd;
  font-size: 0.85rem;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #228be6;
  }
`;
const Divider = styled.span`
  color: #eee;
  font-size: 0.8rem;
`;

const ProgressOuter = styled.div`
  width: 100%;
  height: 5px;
  background: #f1f3f5;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const ProgressInner = styled.div`
  width: ${(props) => props.$width}%;
  height: 100%;
  background: #228be6;
  transition: width 0.4s;
`;
const LoadingWrapper = styled.div`
  padding: 40px 0;
`;
const Spinner = styled.div`
  width: 35px;
  height: 35px;
  border: 3px solid #f1f3f5;
  border-top: 3px solid #228be6;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto 15px;
`;
const LoadingText = styled.p`
  color: #666;
  font-size: 0.9rem;
`;
const ResultName = styled.h2`
  font-size: 1.6rem;
  color: #228be6;
  margin: 8px 0 15px;
`;
const ResultDesc = styled.div`
  background: #f8f9fa;
  padding: 16px 18px;
  border-radius: 18px;
  font-size: 0.9rem;
  text-align: left;
  line-height: 1.6;
  border-left: 4px solid #228be6;
  margin-bottom: 20px;
`;

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
