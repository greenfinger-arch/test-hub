export const portableFanDiagnosticData = {
  id: "summer-fan-lifestyle-audit",
  title: "나의 '여름 생존 가젯' 찾기: 폭염을 이길 당신의 선택은?",
  relatedPostUrl: "https://ranklamp.com/best-portable-fan-buying-guide-2026-cooling-tech/",
  subTitle: "0dB의 정숙함부터 영하의 냉각판까지, 당신의 라이프스타일에 딱 맞는 선풍기를 제안합니다.",
  isReady: true,
  mainImg: "/images/portableFanMain.jpg",
  questions: [
    {
      q: "주로 어떤 장소에서 선풍기를 사용하실 예정인가요?",
      img: "/images/fanQuestion1.jpg",
      a: [
        { text: "조용한 사무실이나 도서관", type: "SILENT_WORKER" },
        { text: "대중교통 이용 및 등하굣길", type: "COMMUTER" },
        { text: "캠핑, 페스티벌 등 뜨거운 야외 활동", type: "OUTDOOR_ADVENTURER" },
        { text: "집 안 곳곳과 요리할 때", type: "HOME_LIFE" }
      ]
    },
    {
      q: "가장 중요하게 생각하는 '시원함'의 기준은?",
      img: "/images/fanQuestion2.jpg",
      a: [
        { text: "피부에 닿는 즉각적인 차가움", type: "OUTDOOR_ADVENTURER" },
        { text: "멀리서도 느껴지는 강력한 직진풍", type: "HOME_LIFE" },
        { text: "자연스럽고 부드러운 미풍", type: "SILENT_WORKER" },
        { text: "두 손이 자유로운 편리함", type: "COMMUTER" }
      ]
    },
    {
      q: "안전과 위생 중 더 신경 쓰이는 부분은?",
      img: "/images/fanQuestion3.jpg",
      a: [
        { text: "머리카락 끼임이나 아이의 손가락 안전", type: "COMMUTER" },
        { text: "날개를 깨끗하게 씻을 수 있는 구조", type: "HOME_LIFE" },
        { text: "배터리 폭발 걱정 없는 안전 인증", type: "SILENT_WORKER" },
        { text: "거친 환경에서도 버티는 내구성", type: "OUTDOOR_ADVENTURER" }
      ]
    },
    {
      q: "평소 가방의 크기나 소지품 스타일은 어떤가요?",
      img: "/images/fanQuestion4.jpg",
      a: [
        { text: "무조건 작고 가벼운 것 선호", type: "COMMUTER" },
        { text: "책상 위 거치까지 고려한 적당한 크기", type: "SILENT_WORKER" },
        { text: "크기는 상관없으니 성능이 우선", type: "OUTDOOR_ADVENTURER" },
        { text: "목에 걸 수 있는 형태 선호", type: "COMMUTER" }
      ]
    }
  ],
  results: {
    SILENT_WORKER: {
      name: "몰입을 방해하지 않는, '사일런트 파트너'",
      img: "/images/resSilent002.jpg",
      desc: "당신에게는 소음 없는 시원함이 가장 중요합니다. 항공기 엔진 기술이 적용된 BLDC 모터가 탑재된 탁상용 겸용 모델을 추천합니다.\n\n*처방: 0dB에 가까운 정숙함으로 사무실이나 도서관에서도 당당하게 사용하세요. 미세 풍속 조절 기능은 필수입니다.",
      affiliateLink: "https://link.coupang.com/a/eFagHd",
      ctaText: "무소음 BLDC 선풍기 확인하기"
    },
    OUTDOOR_ADVENTURER: {
      name: "폭염 브레이커, '익스트림 쿨러'",
      img: "/images/resCooler002.jpg",
      desc: "단순한 바람으로는 부족한 당신! 펠티어 소자가 탑재된 '냉각판 선풍기'가 정답입니다. 피부에 직접 닿는 얼음 같은 차가움을 경험해보세요.\n\n*처방: 야외 활동이 잦다면 냉각판 기능과 대용량 배터리는 선택이 아닌 필수입니다. 열사병 예방의 일등 공신이 될 거예요.",
      affiliateLink: "https://link.coupang.com/a/eFazKU",
      ctaText: "강력 냉각판 선풍기 보기"
    },
    COMMUTER: {
      name: "자유로운 이동가, '핸즈프리 노마드'",
      img: "/images/resHandsfree002.jpg",
      desc: "이동 중에 스마트폰도 봐야 하고 가방도 들어야 하는 당신에겐 넥밴드형이나 날개 없는 슬림 모델이 최고입니다.\n\n*처방: 머리카락 끼임 걱정 없는 Bladeless 디자인으로 안전하게 시원함을 즐기세요. 가벼운 무게가 어깨의 피로를 줄여줍니다.",
      affiliateLink: "https://link.coupang.com/a/eFaIXV",
      ctaText: "안전한 넥밴드 선풍기 확인"
    },
    HOME_LIFE: {
      name: "깔끔한 실천가, '하이브리드 리빙'",
      img: "/images/resHome002.jpg",
      desc: "집안일이나 데스크테리어에 진심인 당신에게는 세척이 용이하고 디자인이 예쁜 분리형 거치 모델을 추천합니다.\n\n*처방: 전면 망이 쉽게 분리되어 100% 위생 관리가 가능한 모델을 고르세요. 예쁜 디자인은 덤으로 당신의 공간을 완성해줍니다.",
      affiliateLink: "https://link.coupang.com/a/eFaYZp",
      ctaText: "세척 간편한 디자인 선풍기 보기"
    }
  }
};