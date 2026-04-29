export const middleAgeAccessoryDiagnosticData = {
  id: "middle-age-accessory-audit",
  title: "중년의 한 끗 진단: 당신의 소품은 '품격'인가 '노화'인가?",
  relatedPostUrl: "https://ranklamp.com/essential-fashion-accessories-for-middle-age/",
  subTitle: "안경, 벨트, 양말... 당신이 놓친 작은 디테일이 당신의 아우라를 결정합니다.",
  isReady: true,
  mainImg: "/images/accessoryMain.jpg",
  questions: [
    {
      q: "거울 속 당신의 얼굴, 가장 먼저 시선이 가는 '안경'의 상태는?",
      img: "/images/accQuestion1.jpg", // 안경 쓴 중년의 클로즈업 이미지
      a: [
        { text: "10년 전 유행하던 얇은 금속 테나 낡은 테를 그대로 쓰고 있다", type: "STAGNANT" },
        { text: "렌즈가 흐릿하거나 안경다리가 휘어 대충 걸치고 있다", type: "DANGER" },
        { text: "얼굴형을 보완하는 세련된 뿔테나 하금테를 착용하고 항상 깨끗하다", type: "ELITE" },
        { text: "누가 봐도 알 법한 명품 로고가 크게 박힌 화려한 테를 선호한다", type: "TRYHARD" }
      ]
    },
    {
      q: "오늘 당신이 선택한 '벨트'와 '구두'의 조화는 어떤가요?",
      img: "/images/accQuestion2.jpg", // 벨트와 구두를 매칭하는 하반신 이미지
      a: [
        { text: "검정 구두에 갈색 벨트, 혹은 운동화에 정장 벨트를 맸다", type: "DANGER" },
        { text: "색상은 맞췄으나 가죽이 낡아 광택이 죽고 버클이 투박하다", type: "STAGNANT" },
        { text: "구두와 벨트의 색상/재질이 통일되어 있고 버클이 정갈하다", type: "ELITE" },
        { text: "커다란 명품 로고 버클로 허리에 강한 포인트를 주었다", type: "TRYHARD" }
      ]
    },
    {
      q: "자리에 앉아 다리를 꼬았을 때, 바지 밑단 아래로 보이는 것은?",
      img: "/images/accQuestion3.jpg", // 앉아서 다리를 꼰 상태의 양말 노출 이미지
      a: [
        { text: "바지 밑단 위로 맨살이나 다리털이 훤히 보인다", type: "DANGER" },
        { text: "흰색 면 양말이나 발목까지 오는 짧은 양말을 신고 있다", type: "STAGNANT" },
        { text: "바지색과 연결되는 긴 양말(롱 호즈)을 신어 살이 전혀 안 보인다", type: "ELITE" },
        { text: "화려한 원색이나 캐릭터가 그려진 튀는 양말을 신었다", type: "TRYHARD" }
      ]
    },
    {
      q: "지금 당신의 하의 주머니에는 무엇이 들어있나요?",
      img: "/images/accQuestion4.jpg", // 소지품으로 인해 불룩해진 바지 주머니 이미지
      a: [
        { text: "두꺼운 지갑, 차 키, 스마트폰으로 주머니가 툭 튀어나와 있다", type: "DANGER" },
        { text: "가급적 비우려 하지만 가끔 영수증과 동전이 섞여 있다", type: "STAGNANT" },
        { text: "주머니는 비워두고 소지품은 별도의 클러치나 가방에 넣는다", type: "ELITE" },
        { text: "명품 카드 홀더를 목에 걸거나 옷 바깥에 노출해 다닌다", type: "TRYHARD" }
      ]
    },
    {
      q: "손목 위 '시계'를 보았을 때 느껴지는 인상은?",
      img: "/images/accQuestion5.jpg", // 손목 시계 클로즈업 이미지
      a: [
        { text: "가죽 줄이 변색되거나 땀 냄새가 날 정도로 오래되었다", type: "DANGER" },
        { text: "고가의 시계지만 틈새에 먼지가 끼어 있고 관리가 안 된 느낌이다", type: "STAGNANT" },
        { text: "브랜드와 상관없이 스트랩이 청결하고 시계 본연의 광택이 살아있다", type: "ELITE" },
        { text: "성공의 상징을 위해 무리하게 화려한 금장 시계를 착용한다", type: "TRYHARD" }
      ]
    },
    {
      q: "주변 사람들에게 소품이나 스타일에 대해 어떤 말을 듣나요?",
      img: "/images/accQuestion6.jpg", // 주변 사람과 대화하는 여유로운 분위기 이미지
      a: [
        { text: "인상은 좋으신데 가끔 패션이 '아저씨' 같다는 소리를 듣는다", type: "DANGER" },
        { text: "늘 변함없으시네요, 예전이랑 똑같으세요", type: "STAGNANT" },
        { text: "안경 어디 건가요? 분위기가 정말 세련되어 보이세요", type: "ELITE" },
        { text: "오늘 힘 좀 주셨네요! 어디 특별한 데 가시나 봐요?", type: "TRYHARD" }
      ]
    }
  ],
  results: {
    ELITE: {
      name: "완벽한 디테일러, '아우라 마스터'",
      img: "/images/resStagnantAcc.jpg",
      desc: "당신은 작은 차이가 명품을 만든다는 것을 아는 분입니다. 절제된 소품 활용이 당신의 신뢰감을 완성합니다.\n\n*처방: 현재의 정갈함을 유지하되, 주머니를 완벽히 비워주는 슬림 카드 지갑으로 실루엣의 정점을 찍으세요.",
      affiliateLink: "https://link.coupang.com/a/eyDDdL", // 벨로이 슬림 지갑류 제휴 링크
      ctaText: "리더의 실루엣을 완성하는 슬림 지갑 보기"
    },
    STAGNANT: {
      name: "정체된 실속파, '박제된 신사'",
      img: "/images/resStagnantAcc001.jpg",
      desc: "기본은 갖췄으나 마무리가 아쉽습니다. 낡은 안경 테 하나가 당신의 활기찬 에너지를 억누르고 있을 수 있습니다.\n\n*처방: 지금 바로 안경 테를 지적인 하금테나 뿔테로 바꿔보세요. 5년은 젊어 보이는 효과를 얻게 됩니다.",
      affiliateLink: "https://link.coupang.com/a/eyCzyB", // 안경테/하금테 스타일 제휴 링크
      ctaText: "인상을 바꾸는 지적인 안경 큐레이션 보기"
    },
    DANGER: {
      name: "디테일의 사각지대, '불안한 이미지'",
      img: "/images/resDangerAcc.jpg",
      desc: "현재 당신의 소품들은 당신의 인격과 격을 가리고 있습니다. 특히 노출된 맨살이나 불룩한 주머니는 시급한 교정이 필요합니다.\n\n*처방: 롱 호즈(긴 양말)와 깔끔한 벨트 매칭부터 시작하세요. 보이지 않는 곳이 당신의 급을 결정합니다.",
      affiliateLink: "https://link.coupang.com/a/eyDslx", // 롱 호즈/양말 세트 제휴 링크
      ctaText: "워스트 탈출! 격식 있는 신사 양말 세트 보기"
    },
    TRYHARD: {
      name: "시선 강박의 소유자, '로고 과잉형'",
      img: "/images/resTryhardAcc.jpg",
      desc: "브랜드의 힘을 빌려 자신을 증명하려 하지 마세요. 과한 로고는 오히려 당신의 여유 없음을 드러낼 뿐입니다.\n\n*처방: 로고를 숨기고 소재의 질감에 투자하세요. '조용한 럭셔리'가 진정한 리더의 옷차림입니다.",
      affiliateLink: "https://link.coupang.com/a/eyCUsL", // 로고리스 가죽 벨트/액세서리 제휴 링크
      ctaText: "로고 없이 빛나는 '조용한 럭셔리' 아이템 보기"
    }
  }
};