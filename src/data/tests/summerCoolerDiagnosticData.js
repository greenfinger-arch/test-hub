export const summerCoolerDiagnosticData = {
  id: "summer-cooler-audit-2026", // 기존 id와의 충돌을 원천 차단하기 위해 유니크하게 변경
  title: "역대급 폭염 생존 키트! 나에게 맞는 '인생 선풍기' 처방전",
  relatedPostUrl: "https://ranklamp.com/portable-fans-buying-guide/",
  subTitle: "미지근한 바람은 이제 그만! 5가지 질문으로 내 활동 패턴과 소음 민감도를 정밀 분석해, 올여름 폭염을 통쾌하게 깨부술 하이테크 맞춤 선풍기를 처방해 드립니다. ☀️🍃🥶",
  isReady: true,
  mainImg: "/images/fanMain.jpg",
  questions: [
    {
      q: "1. 여름철 선풍기를 주로 사용하는 '나의 핵심 장소'는?",
      img: "/images/fanQ1.jpg",
      a: [
        { text: "만원 버스, 지하철 등 출퇴근길 대중교통 안에서 손에 쥐고 콤팩트하게 쓰겠다", type: "HANDY_MINIMAL" },
        { text: "야외 러닝, 반려견 산책, 캠핑 등 양손이 자유로워야 하는 야외 활동이 메인이다", type: "OUTDOOR_NECKFAN" },
        { text: "조용한 사무실, 스터디 카페, 도서관 등 실내에서 주로 켜두고 눈치 안 보며 쓰겠다", type: "SILENT_DESK" },
        { text: "동남아 여행, 불볕더위 야외 현장 등 땀이 비 오듯 쏟아지는 극한 환경에서 생존해야 한다", type: "PELTIER_ICEMAN" }
      ]
    },
    {
      q: "2. 내가 선풍기 소리를 들었을 때 '참을 수 있는 소음 수준'은?",
      img: "/images/fanQ2.jpg",
      a: [
        { text: "주변 눈치가 보이기 때문에 시계 초침 소리 수준으로 무조건 조용해야 한다", type: "SILENT_DESK" },
        { text: "야외에서 주로 쓰기 때문에 소음보다는 바람이 무조건 멀리, 강하게 가야 장땡이다", type: "OUTDOOR_NECKFAN" },
        { text: "적당한 생활 소음은 괜찮지만, 모터가 과열되거나 굉음이 나는 건 참을 수 없다", type: "HANDY_MINIMAL" },
        { text: "얼음처럼 차가울 수만 있다면 비행기 엔진 소리 수준이라도 다 용서할 수 있다", type: "PELTIER_ICEMAN" }
      ]
    },
    {
      q: "3. 선풍기를 고를 때 내가 '절대 포기할 수 없는 기능'은?",
      img: "/images/fanQ3.jpg",
      a: [
        { text: "바람만 불면 미지근하다! 피부에 닿자마자 얼음찜질이 되는 급속 초냉각 패드", type: "PELTIER_ICEMAN" },
        { text: "밖에서는 들고 쓰다가 책상에 앉으면 슥 접어서 탁상용으로 쓸 수 있는 트랜스포머 구조", type: "SILENT_DESK" },
        { text: "내 소중한 머리카락이 날개에 걸려 뽑히는 대참사를 원천 차단하는 안전함", type: "OUTDOOR_NECKFAN" },
        { text: "가방 주머니에 쏙 들어가는 가벼운 무게와 슬림하고 모던한 디자인", type: "HANDY_MINIMAL" }
      ]
    },
    {
      q: "4. 휴대용 선풍기를 쓰면서 '가장 짜증 났던 기억'은 어떤 건가요?",
      img: "/images/fanQ4.jpg",
      a: [
        { text: "몇 시간 쓰지도 않았는데 픽픽 꺼져버리는 조기 방전과 구형 5핀 충전 포트의 번거로움", type: "HANDY_MINIMAL" },
        { text: "목에 걸고 다녔더니 승모근이 뻐근하고 무거워서 오히려 피로가 쌓였던 기억", type: "OUTDOOR_NECKFAN" },
        { text: "바람을 쐬어도 주변 공기가 뜨거우니까 그냥 미지근한 드라이기 바람이 불어올 때", type: "PELTIER_ICEMAN" },
        { text: "촘촘한 안전망 사이에 시커멓게 먼지가 꼈는데 분리가 안 돼서 청소를 못 할 때", type: "SILENT_DESK" }
      ]
    },
    {
      q: "5. 올여름 무더위를 대하는 나의 비장한 태도는?",
      img: "/images/fanQ5.jpg",
      a: [
        { text: "트렌디한 하이테크 신기술로 폭염 속에서도 땀 한 방울 흘리지 않는 얼음 인간이 되겠다", type: "PELTIER_ICEMAN" },
        { text: "두 손에 아메리카노와 스마트폰을 쥐고 여유롭게 도심을 거니는 자유 서퍼가 되겠다", type: "OUTDOOR_NECKFAN" },
        { text: "실내외 어디서든 미니멀한 감성을 유지하며 쾌적하게 열을 식히겠다", type: "SILENT_DESK" },
        { text: "안전이 제일! KC 인증과 든든한 배터리로 기본에 충실한 가성비 생존을 하겠다", type: "HANDY_MINIMAL" }
      ]
    }
  ],
  results: {
    HANDY_MINIMAL: {
      name: "기본 충실 가성비 생존러 '고효율 C타입 핸디형 손선풍기'",
      img: "/images/resMinimal.jpg",
      desc: "출퇴근길 대중교통 안에서 직관적으로 열을 식히고 가방 속 보관이 용이한 미니멀리즘을 추구하는 당신! 복잡한 기능 없이 가볍고, 3,000mAh급 배터리로 온종일 버티는 표준형 손선풍기가 딱입니다. 가방 속 오작동을 막아주는 장눌림 방지 기능과 C타입 고속 충전 스펙만 챙기면 올여름 출퇴근길은 문제없습니다.",
      affiliateLink: "https://link.coupang.com/a/d5G8zyUhPg",
      ctaText: "가성비 탑! C타입 든든한 손선풍기 확인",
      tip: "💡 위생 꿀팁: 안전망 커버가 시계 반대 방향으로 돌아가는 '원터치 분리형 구조'를 선택하세요! 여름이 끝날 때 커버는 물세척하고 날개는 면봉으로 싹 닦아야 내년에도 먼지 없는 청정 바람을 맞을 수 있습니다."
    },
    OUTDOOR_NECKFAN: {
      name: "두 손의 자유를 찾은 어반 서퍼 '날개 없는 블레이드리스 제트 넥팬'",
      img: "/images/resNeckfan.jpg",
      desc: "야외 산책, 스포츠, 캠핑을 즐기거나 양손에 항상 스마트폰과 소지품이 들려있는 활동파 당신에게는 목걸이형 넥팬이 신세계입니다. 특히 머리카락 끼임 사고를 완벽 차단하는 '블레이드리스 제트 터빈 구조'는 필수! 목에 걸치는 만큼 승모근에 무리가 가지 않도록 200g대 중후반의 경량 인체공학 설계를 반드시 확인하세요.",
      affiliateLink: "https://link.coupang.com/a/d5Hr73ddnw",
      ctaText: "머리카락 안 끼는 제트 터빈 넥팬 보기",
      tip: "💡 사용 에티켓: 제트 터빈 구조는 직진 풍량이 강력한 대신, 최고 단계 구동 시 귀 옆에서 소음이 다소 발생할 수 있습니다. 지하철이나 조용한 실내에 진입할 때는 매너 있게 풍량을 1단으로 낮춰주는 센스!"
    },
    SILENT_DESK: {
      name: "오피스 빌런 퇴치관 '트랜스포머형 2축 폴딩 저소음 BLDC 선풍기'",
      img: "/images/resSilent004.jpg",
      desc: "조용한 사무실, 독서실, 스터디 카페가 주 생활 반경인 당신에게 가장 중요한 건 소음 억제력입니다. 자석의 힘으로 구동되어 미세한 소찰음과 마모가 없는 프리미엄 'BLDC 모터' 탑재 모델은 필수입니다. 밖에서는 들고 쓰다가 책상 위에서는 헤드를 90도로 슥 꺾어 올려놓을 수 있는 폴딩형 구조로 데스크테리어 감성까지 챙겨보세요.",
      affiliateLink: "https://link.coupang.com/a/d5HUOhfo3U",
      ctaText: "독서실 가능! 초저소음 폴딩 선풍기 확인",
      tip: "💡 스펙 꿀팁: 실내에서 빌런 소리를 듣지 않으려면 1단 약풍 기준 소음 수치가 25dB~30dB(데시벨) 이하로 정밀 마감된 브랜드 제품을 고르는 것이 안전합니다."
    },
    PELTIER_ICEMAN: {
      name: "걸어 다니는 인간 에어컨 '3초 초냉각 펠티어 소자 웨어러블 쿨러'",
      img: "/images/resPeltier.jpg",
      desc: "주변 공기가 뜨거우면 미지근한 바람만 불어내는 일반 선풍기로는 폭염을 버틸 수 없는 초고열 헤이터 당신! 우주선 냉각 장치 원리인 '펠티어 소자'가 결합된 최신 초냉각 선풍기가 심폐소생술을 해줄 것입니다. 헤드 중앙의 알루미늄 패드가 3초 만에 얼음처럼 차가워져 목덜미 대동맥을 직접 리프레시해 주는 혁명적인 아이템입니다.",
      affiliateLink: "https://link.coupang.com/a/d5H8zAnGuq",
      ctaText: "폭염 브레이커! 얼음 초냉각 선풍기 보기",
      tip: "💡 관리 꿀팁: 에어컨 냉각판 원리상 안팎의 온도 차 때문에 표면에 이슬이 맺히는 '결로 현상'이 발생합니다. 정상적인 결로이니 안심하시되, 가방에 넣기 전 마른 티슈로 가볍게 닦아주면 수명이 2배는 늘어낭니다!"
    }
  }
};