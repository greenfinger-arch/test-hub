export const coffeeMachineDiagnosticData = {
  id: "personal-coffee-audit",
  title: "당신의 '성공 농도'를 위한 커피머신 처방전",
  relatedPostUrl: "https://ranklamp.com/9bar-coffee-machine-guide/",
  subTitle: "오늘 하루 당신이 발휘할 에너지의 밀도, 어떤 머신으로 시작하시겠습니까?",
  isReady: true,
  mainImg: "/images/coffeeMain.jpg",
  questions: [
    {
      q: "아침에 일어나서 첫 잔의 커피를 마시기까지, 당신에게 허용된 시간은?",
      img: "/images/coffeeQuestion1.jpg",
      a: [
        { text: "1분 1초가 아깝다. 버튼 한 번으로 즉시 각성이 필요함", type: "EFFICIENCY" },
        { text: "커피를 내리는 과정 자체를 아침 명상처럼 즐기고 싶음", type: "RITUAL" },
        { text: "약간의 준비는 괜찮지만, 뒤처리가 번거로운 것은 질색", type: "BALANCE" },
        { text: "시간보다는 오직 '최고의 맛'이 보장되어야 움직임", type: "PERFECTION" }
      ]
    },
    {
      q: "당신이 추구하는 업무 스타일은 어느 쪽에 가깝나요?",
      img: "/images/coffeeQuestion2.jpg",
      a: [
        { text: "빠른 의사결정과 즉각적인 실행을 중시하는 전략가", type: "EFFICIENCY" },
        { text: "디테일한 과정을 설계하고 완성도를 높이는 크리에이터", type: "RITUAL" },
        { text: "시스템을 구축하고 효율적인 관리를 지향하는 운영자", type: "BALANCE" },
        { text: "타협 없는 퀄리티로 압도적인 결과물을 만드는 완벽주의자", type: "PERFECTION" }
      ]
    },
    {
      q: "평소 선호하는 커피의 종류와 취향은?",
      img: "/images/coffeeQuestion3.jpg",
      a: [
        { text: "깔끔하고 일관된 맛의 에스프레소나 아메리카노", type: "EFFICIENCY" },
        { text: "원두의 산미와 풍미를 섬세하게 느끼는 싱글 오리진", type: "RITUAL" },
        { text: "부드러운 우유 거품이 가미된 라떼나 카푸치노", type: "BALANCE" },
        { text: "진한 크레마와 묵직한 바디감이 살아있는 정통 에스프레소", type: "PERFECTION" }
      ]
    },
    {
      q: "공간 인테리어에서 커피머신이 차지하는 비중은?",
      img: "/images/coffeeQuestion4.jpg",
      a: [
        { text: "공간을 차지하지 않는 슬림하고 미니멀한 디자인", type: "EFFICIENCY" },
        { text: "나의 전문성과 취향이 드러나는 클래식한 도구적 미학", type: "RITUAL" },
        { text: "첨단 기능이 돋보이는 모던하고 스마트한 느낌", type: "BALANCE" },
        { text: "존재감만으로 공간의 격을 높이는 하이엔드 오브제", type: "PERFECTION" }
      ]
    },
    {
      q: "머신 관리(세척 및 유지보수)에 대한 당신의 생각은?",
      img: "/images/coffeeQuestion5.jpg",
      a: [
        { text: "관리할 시간이 없다. 가장 손이 덜 가는 방식이 최고", type: "EFFICIENCY" },
        { text: "도구를 직접 닦고 관리하는 과정도 소유의 즐거움", type: "RITUAL" },
        { text: "기계가 알아서 세척해주고 알림을 주는 스마트함이 필수", type: "BALANCE" },
        { text: "번거롭더라도 최상의 맛을 위해 부품 하나하나 신경 씀", type: "PERFECTION" }
      ]
    }
  ],
  results: {
    EFFICIENCY: {
      name: "초효율 전략가, '미니멀 엑셀러레이터'",
      img: "/images/resEfficiency (2).jpg", // 일리 Y3.3 또는 캡슐 머신 이미지
      desc: "당신에게 커피는 빠른 각성과 실행력을 위한 '스마트 연료'입니다. 군더더기 없는 루틴이 당신의 집중력을 배가시킵니다.\n\n*추천: 일리 Y3.3 (미니멀리즘의 정수) / 네스프레소 시티즈",
      ctaText: "가장 빠른 각성 도구 보기",
      affiliateLink: "https://link.coupang.com/a/exBRf6"
    },
    RITUAL: {
      name: "창의적 장인, '감성 크리에이터'",
      img: "/images/resRitual.jpg", // 가지아 클래식 또는 수동 머신 이미지
      desc: "당신은 커피를 내리는 '과정'에서 영감을 얻습니다. 직접 원두를 다루는 아침의 의식은 당신의 창의적 감각을 깨워줍니다.\n\n*추천: 가지아 클래식 프로 (정통의 손맛) / 레버형 수동 머신",
      ctaText: "나만의 아침 의식 시작하기",
      affiliateLink: "https://link.coupang.com/a/exrsx9"
    },
    BALANCE: {
      name: "합리적 운영자, '스마트 매니저'",
      img: "/images/resBalance (2).jpg", // 필립스 라떼고 또는 전자동 이미지
      desc: "품질과 편의성의 완벽한 균형을 중시합니다. 시스템화된 머신은 당신이 더 중요한 의사결정에 집중할 수 있도록 돕습니다.\n\n*추천: 필립스 5400 라떼고 (스마트한 관리) / 드롱기 프리마돈나",
      ctaText: "균형 잡힌 솔루션 확인하기",
      affiliateLink: "https://link.coupang.com/a/exrCY9"
    },
    PERFECTION: {
      name: "압도적 완벽주의자, '프로페셔널 마스터'",
      img: "/images/resPerfection.jpg", // 브레빌 밤비노 또는 하이엔드 이미지
      desc: "작은 디테일의 차이가 거대한 결과의 차이를 만든다는 것을 알고 있습니다. 타협 없는 9바의 압력이 당신의 자부심을 완성합니다.\n\n*추천: 브레빌 밤비노 플러스 (보급형의 한계 돌파) / 라마르조코 GS3",
      ctaText: "타협 없는 퀄리티 만나기",
      affiliateLink: "https://link.coupang.com/a/exqXv1"
    }
  }
};