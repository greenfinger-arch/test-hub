export const smartwatchDiagnosticData = {
  id: "smartwatch-lifestyle-audit",
  title: "나의 '손목 위 비서' 찾기: 당신의 라이프스타일에 딱 맞는 워치는?",
  relatedPostUrl: "https://ranklamp.com/comprehensive-smartwatch-buying-guide-health-lifestyle/",
  subTitle: "건강 관리부터 완벽한 비즈니스 파트너까지, 당신의 하루를 바꿀 인생 워치를 추천해 드립니다.",
  isReady: true,
  mainImg: "/images/smartwatchMain.jpg",
  questions: [
    {
      q: "현재 사용 중인 스마트폰 기종은 무엇인가요?",
      img: "/images/watchQuestion1.jpg",
      a: [
        { text: "아이폰 (iOS)", type: "APPLE_USER" },
        { text: "갤럭시 (Android)", type: "GALAXY_USER" },
        { text: "기타 안드로이드 폰", type: "OPEN_USER" },
        { text: "폰 기종에 상관없이 배터리 성능이 중요하다", type: "BATTERY_FIRST" }
      ]
    },
    {
      q: "스마트 워치를 사용하려는 가장 큰 목적은 무엇인가요?",
      img: "/images/watchQuestion2.jpg",
      a: [
        { text: "심전도, 체성분, 수면 무호흡 등 정밀한 건강 관리", type: "HEALTH_TRACKER" },
        { text: "러닝, 수영, 등산 등 역동적인 스포츠 기록", type: "ATHLETE" },
        { text: "전화, 문자 알림 확인 및 세련된 패션 아이템", type: "STYLE_ICON" },
        { text: "알림 확인보다는 며칠 동안 잊고 지낼 배터리 수명", type: "BATTERY_FIRST" }
      ]
    },
    {
      q: "평소 선호하는 디자인과 착용감은 어떤 스타일인가요?",
      img: "/images/watchQuestion3.jpg",
      a: [
        { text: "어떤 옷에도 잘 어울리는 세련되고 클래식한 원형/사각 디자인", type: "STYLE_ICON" },
        { text: "험한 활동에도 끄떡없는 견고하고 터프한 디자인", type: "ATHLETE" },
        { text: "착용했는지도 모를 정도로 가볍고 슬림한 무게", type: "HEALTH_TRACKER" },
        { text: "시계 본연의 느낌이 강한 아날로그 감성의 베젤", type: "GALAXY_USER" }
      ]
    },
    {
      q: "충전에 대해 얼마나 민감하신가요?",
      img: "/images/watchQuestion4.jpg",
      a: [
        { text: "스마트폰처럼 매일 밤 충전하는 것은 익숙하다", type: "APPLE_USER" },
        { text: "최소 3~4일 이상은 충전 없이 버텨야 한다", type: "GALAXY_USER" },
        { text: "한 번 충전으로 일주일 이상 가는 것이 필수다", type: "BATTERY_FIRST" },
        { text: "빠른 급속 충전 기능만 있다면 상관없다", type: "STYLE_ICON" }
      ]
    }
  ],
  results: {
    APPLE_USER: {
      name: "생태계의 끝판왕, '애플 오너'",
      img: "/images/resApple.jpg",
      desc: "당신에게는 아이폰과의 완벽한 동기화가 가장 중요합니다. 애플워치는 단순한 워치를 넘어 아이폰의 기능을 손목으로 완벽히 확장해줍니다.\n\n*처방: 부드러운 애니메이션과 다양한 앱 생태계를 누리세요. 매일 밤 충전은 몰입을 위한 작은 배려입니다.",
      affiliateLink: "https://link.coupang.com/a/eDFvS5",
      ctaText: "아이폰 유저의 완성, 애플워치 확인하기"
    },
    GALAXY_USER: {
      name: "스마트 가이드, '갤럭시 마스터'",
      img: "/images/resGalaxy.jpg",
      desc: "삼성 헬스 생태계와 갤럭시 폰의 연동성을 최우선으로 생각하시네요. 체성분 분석과 혈압 측정 등 안드로이드 최강의 건강 기능을 경험해보세요.\n\n*처방: 물리 베젤의 손맛과 구글 OS의 편리함을 동시에 잡으세요. 갤럭시 유저라면 선택지는 이미 정해져 있습니다.",
      affiliateLink: "https://link.coupang.com/a/eDFw2S",
      ctaText: "갤럭시 유저 전용 스마트 워치 보기"
    },
    HEALTH_TRACKER: {
      name: "손목 위의 주치의, '라이프 가디언'",
      img: "/images/resHealth.jpg",
      desc: "당신의 관심사는 오직 정밀한 데이터입니다. 수면의 질, 심박 변이도, 스트레스 지수를 24시간 모니터링하는 정교한 센서가 필수입니다.\n\n*처방: 의료기기 수준의 센서 정밀도를 가진 모델을 선택하세요. 가벼운 무게로 수면 중 착용감까지 고려해야 합니다.",
      affiliateLink: "https://link.coupang.com/a/eDFGB5",
      ctaText: "나를 위한 건강 관리 특화 워치 보기"
    },
    ATHLETE: {
      name: "한계를 넘는, '아웃도어 프로'",
      img: "/images/resAthlete.jpg",
      desc: "거친 환경과 강력한 운동 성능이 당신의 가슴을 뛰게 하네요. 듀얼 GPS와 강력한 방수, 사파이어 글래스의 내구성이 뒷받침되어야 합니다.\n\n*처방: 극한의 환경에서도 배터리가 오래 지속되는 울트라급 모델이나 스포츠 전문 브랜드를 추천합니다.",
      affiliateLink: "https://link.coupang.com/a/eDFOIn",
      ctaText: "강력한 성능의 아웃도어 워치 확인"
    },
    BATTERY_FIRST: {
      name: "효율의 극대화, '롱런 워커'",
      img: "/images/resBattery.jpg",
      desc: "충전의 번거로움을 가장 싫어하시나요? 고성능 기능보다는 본질에 충실하면서도 한 달 가까이 지속되는 배터리 효율이 당신의 정답입니다.\n\n*처방: 화려한 디스플레이 대신 전력 소모가 적은 패널을 사용한 피트니스 밴드나 하이브리드 워치를 고려해보세요.",
      affiliateLink: "https://link.coupang.com/a/eDF6gb",
      ctaText: "충전 걱정 끝! 장수명 스마트 워치 보기"
    }
  }
};