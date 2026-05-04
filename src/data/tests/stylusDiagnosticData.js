export const stylusDiagnosticData = {
  id: "stylus-lifestyle-audit",
  title: "나의 '펜슬' 지수 진단: 당신의 손끝에는 어떤 펜이 어울릴까요?",
  relatedPostUrl: "https://ranklamp.com/comprehensive-guide-to-choosing-the-best-compatible-stylus-pen/",
  subTitle: "비싼 정품이 정답은 아닙니다. 당신의 사용 패턴에 꼭 맞는 실속형 파트너를 찾아보세요.",
  isReady: true,
  mainImg: "/images/stylusMain.jpg",
  questions: [
    {
      q: "태블릿을 주로 어떤 용도로 가장 많이 사용하시나요?",
      img: "/images/stylusQuestion1.jpg", // 공부하는 학생 또는 드로잉 중인 작가 이미지
      a: [
        { text: "강의 필기, PDF 주석 달기, 다이어리 꾸미기가 주된 목적이다", type: "WRITER" },
        { text: "취미로 그림을 그리거나 전문적인 일러스트 작업을 한다", type: "ARTIST" },
        { text: "간단한 웹 서핑, 문서 확인, 게임 등 손가락 대신 사용한다", type: "CASUAL" },
        { text: "영상 편집이나 정교한 디자인 설계 작업을 수행한다", type: "ARTIST" }
      ]
    },
    {
      q: "필기할 때 손바닥을 화면에 대고 쓰는 편인가요?",
      img: "/images/stylusQuestion2.jpg", // 화면에 손을 대고 있는 클로즈업 이미지
      a: [
        { text: "종이에 쓰듯 손바닥을 화면에 편하게 붙이고 쓴다", type: "PALM_REQ" },
        { text: "손바닥을 떼고 쓰거나 장갑을 끼고 사용하는 편이다", type: "CASUAL" },
        { text: "손바닥 인식 때문에 글씨가 튀는 현상을 매우 싫어한다", type: "PALM_REQ" },
        { text: "크게 신경 쓰지 않지만 편의성이 높으면 좋겠다", type: "WRITER" }
      ]
    },
    {
      q: "드로잉이나 채색 시 선의 굵기 변화(기울기/필압)가 중요한가요?",
      img: "/images/stylusQuestion3.jpg", // 펜 각도에 따른 선 굵기 변화 예시 이미지
      a: [
        { text: "펜을 눕혔을 때 면적 채우기(기울기)가 되면 충분하다", type: "WRITER" },
        { text: "누르는 힘에 따른 정교한 선 굵기(필압) 표현이 필수다", type: "ARTIST" },
        { text: "선 굵기보다는 끊김 없는 안정적인 입력이 중요하다", type: "CASUAL" },
        { text: "복잡한 기능보다는 직관적인 사용감이 좋다", type: "WRITER" }
      ]
    },
    {
      q: "충전 방식 중 본인이 가장 선호하거나 편리하다고 느끼는 것은?",
      img: "/images/stylusQuestion4.jpg", // C타입 충전 vs 측면 무선 충전 비교 이미지
      a: [
        { text: "태블릿 옆면에 붙여서 깔끔하게 무선으로 충전하고 싶다", type: "WIRELESS" },
        { text: "범용성이 좋은 C타입 케이블로 직접 꽂아 충전하는 게 편하다", type: "CASUAL" },
        { text: "충전 속도가 가장 빠른 방식을 선호한다", type: "WRITER" },
        { text: "배터리 잔량을 태블릿 위젯으로 실시간 확인하고 싶다", type: "WIRELESS" }
      ]
    },
    {
      q: "펜촉 마모에 따른 유지비나 교체 편의성을 고려하시나요?",
      img: "/images/stylusQuestion5.jpg", // 마모된 펜촉과 새 펜촉 비교 이미지
      a: [
        { text: "정품 펜촉과 호환되어 다양한 액세서리를 쓰고 싶다", type: "WRITER" },
        { text: "펜촉 교체보다는 제품 자체의 내구성이 좋으면 된다", type: "CASUAL" },
        { text: "메탈 펜촉 등 특수 펜촉을 사용해 종이 질감을 느끼고 싶다", type: "ARTIST" },
        { text: "소모품 구매가 쉽고 저렴한 것이 최고다", type: "WRITER" }
      ]
    }
  ],
  results: {
    ARTIST: {
      name: "섬세한 크리에이터, '드로잉 마스터'",
      img: "/images/resArtist001.jpg",
      desc: "당신에게는 단순한 입력을 넘어 예술적 표현이 가능한 도구가 필요합니다. 기울기 감지는 물론 필압 지원 여부를 꼭 확인하세요.\n\n*처방: 필압 지원 모델과 함께 종이질감 필름을 사용해 보세요. 정교한 컨트롤이 가능해집니다.",
      affiliateLink: "https://link.coupang.com/a/eCiSg9", // 필압 지원 호환펜 큐레이션
      ctaText: "전문 드로잉용 필압 지원 호환펜 보기"
    },
    WRITER: {
      name: "프로 기록가, '스마트 노트테이커'",
      img: "/images/resWriter002.jpg",
      desc: "방대한 강의와 미팅 내용을 기록하는 당신에게는 팜 리젝션과 배터리 효율이 가장 중요합니다.\n\n*처방: 펜촉 호환성이 높은 모델을 선택해 금속 펜촉으로 교체해 보세요. 필기 피로도가 확연히 줄어듭니다.",
      affiliateLink: "https://link.coupang.com/a/eCjdo8", // 팜 리젝션 최적화 모델 링크
      ctaText: "필기 효율 극대화! 팜 리젝션 호환펜 보기"
    },
    WIRELESS: {
      name: "테크 얼리어답터, '스마트 무선 유저'",
      img: "/images/resWireless003.jpg",
      desc: "케이블 없는 자유로움을 추구하는 분이군요. 태블릿 측면 부착 무선 충전 기능이 당신의 생산성을 완성합니다.\n\n*처방: 본인의 태블릿 기종이 마그네틱 무선 충전을 지원하는지 반드시 확인 후 구매하세요.",
      affiliateLink: "https://link.coupang.com/a/eCjgOQ", // 무선 충전 지원 호환펜 링크
      ctaText: "붙이기만 하면 충전! 무선 충전 호환펜 보기"
    },
    CASUAL: {
      name: "실속파 유저, '가성비 에센셜'",
      img: "/images/resCasual004.jpg",
      desc: "복잡한 기능보다는 기본에 충실하고 어디에나 잘 붙는 범용성이 핵심입니다. 합리적인 가격의 정전식 또는 기본 모델을 추천합니다.\n\n*처방: 별도의 페어링 없이 터치 한 번으로 바로 켜지는 직관적인 모델을 선택하세요.",
      affiliateLink: "https://link.coupang.com/a/eCjoeY", // 가성비 범용 터치펜 링크
      ctaText: "부담 없는 가격! 가성비 최고 호환펜 보기"
    },
    PALM_REQ: {
      name: "디테일 추구형, '클린 라이팅 유저'",
      img: "/images/resPalm005.jpg",
      desc: "화면에 튀는 현상을 참을 수 없는 당신! 강력한 팜 리젝션 칩셋이 탑재된 모델이 필수입니다.\n\n*처방: '팜 리젝션(Palm Rejection)' 문구를 반드시 확인하고, 반응 속도가 검증된 전용 칩셋 모델을 고르세요.",
      affiliateLink: "https://link.coupang.com/a/eCjJyv", // 팜 리젝션 특화 브랜드 링크
      ctaText: "끊김 없이 매끄럽게! 팜 리젝션 특화 모델 보기"
    }
  }
};