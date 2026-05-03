export const chargerDiagnosticData = {
  id: "smart-charger-audit",
  title: "나의 '충전 지수' 진단: 당신의 충전기는 기기의 속도를 따라가고 있나요?",
  relatedPostUrl: "https://ranklamp.com/ultimate-guide-to-choosing-the-right-fast-charger-for-your-devices/",
  subTitle: "방치된 구형 충전기가 당신의 최신 스마트폰 수명을 갉아먹고 있을지 모릅니다.",
  isReady: true,
  mainImg: "/images/chargerMain.jpg",
  questions: [
    {
      q: "현재 당신이 주력으로 사용하는 모바일 기기 조합은?",
      img: "/images/chargerQuestion1.jpg", // 다양한 기기가 놓인 데스크 이미지
      a: [
        { text: "스마트폰 하나만 사용하거나 가끔 태블릿을 충전한다", type: "BASIC" },
        { text: "스마트폰, 태블릿, 무선 이어폰 등 3개 이상의 기기를 매일 충전한다", type: "MULTITASKER" },
        { text: "스마트폰은 물론 고성능 노트북까지 충전기로 해결하고 싶다", type: "POWERUSER" },
        { text: "기기보다는 이동성이 중요해 작고 가벼운 것이 최우선이다", type: "MINIMALIST" }
      ]
    },
    {
      q: "충전 중 스마트폰을 만졌을 때 느껴지는 발열 정도는 어떤가요?",
      img: "/images/chargerQuestion2.jpg", // 충전 중인 폰을 잡은 손 이미지
      a: [
        { text: "가끔 손이 뜨거울 정도로 열이 발생해 걱정될 때가 있다", type: "SAFETY_CHECK" },
        { text: "약간 미지근하지만 충전 속도가 워낙 빨라 만족한다", type: "POWERUSER" },
        { text: "거의 열이 느껴지지 않지만 충전 속도가 너무 느리다", type: "BASIC" },
        { text: "충전기 자체가 뜨거워져서 불안한 적이 있다", type: "SAFETY_CHECK" }
      ]
    },
    {
      q: "당신이 사용하는 '충전 케이블'은 어떤 경로로 얻으셨나요?",
      img: "/images/chargerQuestion3.jpg", // 엉켜있는 케이블 뭉치 이미지
      a: [
        { text: "기기 살 때 들어있던 정품 케이블만 고집한다", type: "BASIC" },
        { text: "다이소나 길거리에서 산 저렴한 케이블을 여러 개 쓴다", type: "SAFETY_CHECK" },
        { text: "100W 지원, E-Marker 칩 내장 등 스펙을 보고 직접 구매했다", type: "POWERUSER" },
        { text: "충전기 살 때 세트로 들어있던 것을 그냥 쓴다", type: "MULTITASKER" }
      ]
    },
    {
      q: "멀티 포트 충전기에 여러 기기를 꽂았을 때, 충전 속도가 갑자기 느려진다면?",
      img: "/images/chargerQuestion4.jpg", // 여러 포트가 꽂힌 멀티 충전기 이미지
      a: [
        { text: "동시 충전이니까 당연히 느려지는 게 정상이라고 생각한다", type: "BASIC" },
        { text: "포트별 출력 분배(Wattage Share)를 확인해 효율적으로 배분한다", type: "POWERUSER" },
        { text: "어떤 포트에 꽂아야 가장 빠른지 몰라 매번 바꿔 꽂아본다", type: "MULTITASKER" },
        { text: "느려지는 게 싫어서 충전기 여러 개를 따로 쓴다", type: "MINIMALIST" }
      ]
    },
    {
      q: "최신 충전 기술인 'GaN(질화갈륨)'이나 'PPS'에 대해 들어보셨나요?",
      img: "/images/chargerQuestion5.jpg", // 기술 용어가 적힌 상세페이지 이미지
      a: [
        { text: "처음 듣지만, 내 기기가 더 빨리 충전된다면 관심이 있다", type: "MULTITASKER" },
        { text: "잘 알고 있으며, 이미 GaN 충전기를 사용 중이다", type: "POWERUSER" },
        { text: "어렵다. 그냥 충전만 잘 되면 브랜드는 상관없다", type: "BASIC" },
        { text: "안전이 제일이다. 신기술보다는 검증된 대기업 제품이 좋다", type: "SAFETY_CHECK" }
      ]
    }
  ],
  results: {
    POWERUSER: {
      name: "충전의 마스터, '초고속 얼리어답터'",
      img: "/images/resPowerUser.jpg",
      desc: "당신은 기기의 성능을 100% 끌어낼 줄 아는 분입니다. PD 3.1과 PPS 규격을 꿰뚫고 있는 당신에게는 고출력 GaN 솔루션이 어울립니다.\n\n*처방: 100W 이상의 GaN 멀티 충전기와 E-Marker 칩이 내장된 5A 케이블의 조합으로 데스크 환경을 완성하세요.",
      affiliateLink: "https://link.coupang.com/a/eBPnNu", // 100W 이상 GaN 충전기 큐레이션
      ctaText: "전문가를 위한 고출력 GaN 충전기 세트 보기"
    },
    MULTITASKER: {
      name: "효율의 마술사, '멀티 디바이스 유저'",
      img: "/images/resMultitasker.jpg",
      desc: "다양한 기기를 동시에 사용하는 당신에게는 똑똑한 '출력 분배' 기능이 핵심입니다. 포트 개수보다 포트당 실질 와트수를 체크해야 합니다.\n\n*처방: 단독 65W, 동시 사용 시에도 노트북 충전이 가능한 출력 분배형 멀티 충전기를 선택하세요.",
      affiliateLink: "https://link.coupang.com/a/eBPuhn", // 65W급 3포트 멀티 충전기 링크
      ctaText: "끊김 없는 동시 충전! 스마트 멀티 충전기 보기"
    },
    MINIMALIST: {
      name: "가벼운 발걸음, '콤팩트 미니멀리스트'",
      img: "/images/resMinimalist.jpg",
      desc: "무거운 어댑터는 질색! 작지만 강력한 한 방이 필요합니다. 당신의 가방을 가볍게 해줄 초소형 GaN 충전기가 정답입니다.\n\n*처방: 플러그 일체형 초소형 45W~65W 모델을 선택하세요. 스마트폰과 노트북을 하나로 해결할 수 있습니다.",
      affiliateLink: "https://link.coupang.com/a/eBPAGf", // 초소형 65W GaN 충전기 링크
      ctaText: "주머니에 쏙! 초소형 고성능 충전기 보기"
    },
    BASIC: {
      name: "정석의 길, '표준 충전 가이드'",
      img: "/images/resBasic.jpg",
      desc: "기본에 충실하지만, 최신 기기의 초고속 충전 기능을 활용하지 못하고 계실 가능성이 큽니다. 충전기 하나로 일상의 속도가 바뀔 수 있습니다.\n\n*처방: 구형 충전기는 과감히 버리고, PPS를 지원하는 25W~45W급 정품급 충전기로 교체해보세요.",
      affiliateLink: "https://link.coupang.com/a/eBPHyd", // 25W/45W 초고속 충전기 링크
      ctaText: "내 폰에 딱 맞는 초고속 충전기 확인하기"
    },
    SAFETY_CHECK: {
      name: "안전 우선주의, '리스크 매니저'",
      img: "/images/resSafety.jpg",
      desc: "충전 중 발열이나 소음은 기기 손상의 전조 증상일 수 있습니다. 검증되지 않은 저가형 제품은 소중한 기기를 파괴할 수 있습니다.\n\n*처방: KC 인증은 물론 5중 안전 보호 회로가 탑재된 브랜드 제품과 정격 사양의 케이블로 즉시 교체하세요.",
      affiliateLink: "https://link.coupang.com/a/eBPPSH", // 안전 인증 강화 브랜드 제품 링크
      ctaText: "안심하고 쓰는 브랜드 인증 충전기 보기"
    }
  }
};