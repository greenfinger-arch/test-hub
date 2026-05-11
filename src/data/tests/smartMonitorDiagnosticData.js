export const smartMonitorDiagnosticData = {
  id: "smart-monitor-tv-expert-audit",
  title: "당신의 공간과 눈을 위한 '인생 스크린' 진단",
  relatedPostUrl: "https://ranklamp.com/best-smart-monitor-tv-combo-guide-2026/",
  subTitle: "고가의 가전인 만큼, 5가지 정밀 질문을 통해 당신에게 가장 신중한 선택지를 제안합니다.",
  isReady: true,
  mainImg: "/images/smartMonitorMain.jpg",
  questions: [
    {
      q: "1. 기기를 주로 사용하게 될 '공간의 성격'은 어떤가요?",
      img: "/images/q1_space.jpg",
      a: [
        { text: "집중력이 필요한 독립된 서재나 공부방", type: "BALANCE_WORKER" },
        { text: "휴식과 취침이 공존하는 침실이나 원룸", type: "IMMERSIVE_SCREEN" },
        { text: "업무와 취미를 병행하는 거실 한쪽 데스크", type: "SPACE_EFFICIENCY" },
        { text: "정해진 곳 없이 상황에 따라 이동하며 사용", type: "MOVEABLE_LIFE" }
      ]
    },
    {
      q: "2. 하루 중 '가장 많이 보게 될 콘텐츠'의 비율은?",
      img: "/images/q2_content.jpg",
      a: [
        { text: "텍스트 위주의 문서 작업이나 코딩 (60% 이상)", type: "BALANCE_WORKER" },
        { text: "넷플릭스, 유튜브 등 고화질 영상 시청 (70% 이상)", type: "PREMIUM_VISUAL" },
        { text: "콘솔이나 PC를 활용한 고사양 게임 (50% 이상)", type: "PREMIUM_VISUAL" },
        { text: "업무, 웹서핑, 영상 시청이 고르게 섞임", type: "SPACE_EFFICIENCY" }
      ]
    },
    {
      q: "3. 평소 시청 환경의 '조명 상태'는 어떠신가요?",
      img: "/images/q3_lighting.jpg",
      a: [
        { text: "채광이 좋고 밝은 형광등 아래", type: "BALANCE_WORKER" },
        { text: "은은한 간접 조명을 켜둔 아늑한 분위기", type: "PREMIUM_VISUAL" },
        { text: "불을 모두 끄고 어두운 상태에서 시청", type: "PREMIUM_VISUAL" },
        { text: "조명에 구애받지 않고 언제든 선명해야 함", type: "IMMERSIVE_SCREEN" }
      ]
    },
    {
      q: "4. 사용 중 '눈의 피로도'에 얼마나 민감하신가요?",
      img: "/images/q4_health.jpg",
      a: [
        { text: "조금만 화면이 떨려도 눈이 쉽게 피로해짐", type: "BALANCE_WORKER" },
        { text: "피로도보다는 화질의 선명함이 훨씬 중요함", type: "PREMIUM_VISUAL" },
        { text: "장시간 시청 시 자동으로 밝기가 조절되길 원함", type: "SPACE_EFFICIENCY" },
        { text: "크게 민감하지 않으며 몰입감이 더 우선임", type: "IMMERSIVE_SCREEN" }
      ]
    },
    {
      q: "5. 기기를 조작할 때 '가장 선호하는 방식'은?",
      img: "/images/q5_control.jpg",
      a: [
        { text: "마우스와 키보드로 모든 것을 제어", type: "BALANCE_WORKER" },
        { text: "리모컨으로 침대에 누워 편하게 조작", type: "IMMERSIVE_SCREEN" },
        { text: "스마트폰 미러링과 음성 인식 기능 활용", type: "MOVEABLE_LIFE" },
        { text: "터치스크린이나 직관적인 버튼 조작 선호", type: "MOVEABLE_LIFE" }
      ]
    }
  ],
  results: {
    PREMIUM_VISUAL: {
      name: "감동을 소유하는, '시네마틱 OLED 마스터'",
      img: "/images/resOled.jpg",
      desc: "어두운 환경에서도 완벽한 블랙을 감상하고 싶은 당신을 위해, OLED 패널의 압도적 화질을 제안합니다. 당신의 눈은 가장 높은 가치를 알아봅니다.",
      affiliateLink: "https://link.coupang.com/a/eG9g4v",
      ctaText: "최상급 OLED 스마트 모니터 확인"
    },
    IMMERSIVE_SCREEN: {
      name: "공간을 압도하는, '대화면 스마트 스테이션'",
      img: "/images/resBigScreen.jpg",
      desc: "작은 화면에 답답함을 느끼는 당신에게는 43인치 이상의 광활한 시야가 필요합니다. 리모컨 하나로 완성되는 나만의 프라이빗 시네마를 경험하세요.",
      affiliateLink: "https://link.coupang.com/a/eG9pLu",
      ctaText: "압도적 몰입감 43인치 모델 보기"
    },
    BALANCE_WORKER: {
      name: "효율의 극대화, '프로페셔널 데스크 32인치'",
      img: "/images/resBalance002.jpg",
      desc: "업무의 정밀함과 휴식의 편안함 사이에서 최고의 밸런스를 찾는 당신! 가독성과 시야 확보에 최적인 32인치 4K 모델이 당신의 파트너가 될 것입니다.",
      affiliateLink: "https://link.coupang.com/a/eHaaq2",
      ctaText: "황금 밸런스 32인치 모델 확인"
    },
    SPACE_EFFICIENCY: {
      name: "지능적인 올인원, '스마트 데스크테리어'",
      img: "/images/resSmart.jpg",
      desc: "복잡한 연결 없이 깔끔한 데스크를 원하는 당신에겐 스마트 OS가 내장된 가성비 최고의 올인원 모니터를 추천합니다. 공간은 넓어지고 일상은 편리해집니다.",
      affiliateLink: "https://link.coupang.com/a/eHahMw",
      ctaText: "가장 스마트한 가성비 모델 보기"
    },
    MOVEABLE_LIFE: {
      name: "자유로운 시청의 혁명, '라이프스타일 무버'",
      img: "/images/resMovable.jpg",
      desc: "장소에 구애받지 않고 당신이 머무는 곳이 곧 극장이 됩니다. 이동식 거치대와 최상의 궁합을 자랑하는 다목적 스마트 스크린을 만나보세요.",
      affiliateLink: "https://link.coupang.com/a/eHaqnN",
      ctaText: "자유로운 무빙 스크린 확인하기"
    }
  }
};