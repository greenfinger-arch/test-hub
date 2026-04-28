export const middleAgeFashionDiagnosticData = {
  id: "middle-age-fashion-audit",
  title: "중년 품격 진단: 당신은 '리더'의 아우라를 입고 있습니까?",
  relatedPostUrl: "https://ranklamp.com/middle-age-fashion-taboos-guide/",
  subTitle: "현재 당신의 스타일링 습관이 운을 부르는지, 아니면 품격을 깎아먹는지 진단해 드립니다.",
  isReady: true,
  mainImg: "/images/fashionMain.jpg",
  questions: [
    {
      q: "외출 전, 바지 기장과 어깨선의 '핏(Fit)'을 확인했을 때 당신의 상태는?",
      img: "/images/fashionQuestion1.jpg",
      a: [
        { text: "편안함이 최고! 체형을 가리기 위해 넉넉하고 큰 사이즈를 선호한다", type: "DANGER" },
        { text: "적당히 맞긴 하지만, 5년 전 구매한 스타일 그대로 유지 중이다", type: "STAGNANT" },
        { text: "조금 불편하더라도 어깨선과 바지 끝단이 딱 떨어지는지 체크한다", type: "ELITE" },
        { text: "유행하는 오버핏을 시도하지만 가끔 '남의 옷' 같다는 소리를 듣는다", type: "TRYHARD" }
      ]
    },
    {
      q: "당신의 옷장에서 가장 큰 비중을 차지하는 디자인이나 패턴은?",
      img: "/images/fashionQuestion2.jpg",
      a: [
        { text: "브랜드 로고가 크게 박혀 있거나 화려한 원색/무늬가 많다", type: "DANGER" },
        { text: "무난한 등산복이나 기능성 의류가 일상복의 대부분이다", type: "STAGNANT" },
        { text: "로고가 없거나 작고, 네이비/베이지/그레이 등 무채색 위주다", type: "ELITE" },
        { text: "유명 연예인이 입었던 독특한 디자인의 옷들을 수집한다", type: "TRYHARD" }
      ]
    },
    {
      q: "신발장을 열었을 때, 당신이 가장 자주 신는 외출화는?",
      img: "/images/fashionQuestion3.jpg",
      a: [
        { text: "어디든 잘 어울리는 화려한 색상의 기능성 등산화/운동화", type: "DANGER" },
        { text: "굽이 닳거나 모양이 조금 변형되었지만 발에 익은 편한 구두", type: "STAGNANT" },
        { text: "관리가 잘 된 깔끔한 가죽 로퍼나 드레스 슈즈", type: "ELITE" },
        { text: "밑창이 아주 높은 키높이 운동화나 화려한 명품 스니커즈", type: "TRYHARD" }
      ]
    },
    {
      q: "중요한 모임에 나갈 때, 당신이 가장 신경 쓰는 포인트는?",
      img: "/images/fashionQuestion4.jpg",
      a: [
        { text: "최대한 비싸 보이는 명품 벨트나 가방으로 시선을 끈다", type: "DANGER" },
        { text: "튀지 않고 평범해 보이는 것에 집중한다", type: "STAGNANT" },
        { text: "옷의 구김 상태, 안경의 청결, 은은한 향기에 신경 쓴다", type: "ELITE" },
        { text: "요즘 유행하는 액세서리나 헤어 스타일을 과감하게 시도한다", type: "TRYHARD" }
      ]
    },
    {
      q: "자신의 외모나 스타일 변화에 대해 주변에서 주로 듣는 말은?",
      img: "/images/fashionQuestion5.jpg",
      a: [
        { text: "서글서글하니 인상 좋으시네요 (하지만 옷 얘긴 없음)", type: "DANGER" },
        { text: "한결같으시네요, 예전이랑 똑같아요", type: "STAGNANT" },
        { text: "요즘 인색이 좋아지셨어요, 옷 정보 좀 알려주세요", type: "ELITE" },
        { text: "오늘 어디 가세요? 힘 좀 주셨네요!", type: "TRYHARD" }
      ]
    }
  ],
  results: {
    ELITE: {
      name: "품격 있는 리더, '조용한 럭셔리 마스터'",
      img: "/images/resElite.jpg", // 깔끔한 정장이나 세련된 캐주얼 리더 이미지
      desc: "당신은 이미 옷을 통해 자신의 가치를 증명할 줄 아는 분입니다. 디테일한 관리와 절제된 미학이 당신의 아우라를 완성합니다.\n\n*처방: 현재의 핏을 유지하되, 계절별 소재(린넨, 캐시미어)의 질감을 더 강화해 보세요.",
      affiliateLink: "https://link.coupang.com/a/ex1rlb",
      ctaText: "리더의 아이템 큐레이션 보기"
    },
    STAGNANT: {
      name: "정체된 실속파, '박제된 중년'",
      img: "/images/resStagnant.jpg", // 평범하지만 조금 낡은 느낌의 중년 패션
      desc: "과거의 성공 방정식에 갇혀 계시군요. 나쁜 취향은 아니지만 '낡은 이미지'가 당신의 새로운 운을 막고 있을 수 있습니다.\n\n*처방: 낡은 안경 테와 구두부터 교체하세요. 작은 변화가 당신을 '현역'으로 보이게 합니다.",
      affiliateLink: "https://www.coupang.com/vp/products/9031897920?itemId=26493469265&vendorItemId=93468303243&q=%EB%9D%BD%ED%8F%AC%ED%8A%B8%28Rockport%29+%ED%86%A0%ED%83%88%EB%AA%A8%EC%85%98+%EB%93%9C%EB%A0%88%EC%8A%A4+%EC%8A%88%EC%A6%88&searchId=254468bf840287&sourceType=search&itemsCount=36&searchRank=11&rank=11&traceId=moi7rliz",
      ctaText: "5년 젊어지는 안경/슈즈 추천"
    },
    DANGER: {
      name: "위험한 과유불급, '로고 가득 패션 빌런'",
      img: "/images/resDanger.jpg", // 화려한 패턴이나 큰 로고가 강조된 이미지
      desc: "화려함 뒤에 자신을 숨기려 하지 마세요. 과한 로고와 패턴은 오히려 인품을 가리고 저렴한 인상을 줄 수 있습니다.\n\n*처방: 오늘 당장 로고가 큰 벨트와 화려한 무늬 옷을 정리하세요. '덜어내는 것'이 품격의 시작입니다.",
      affiliateLink: "https://link.coupang.com/a/ex2g0h",
      ctaText: "품격을 되찾는 마이너스 코디법"
    },
    TRYHARD: {
      name: "불안한 트렌드 세터, '회춘 갈망형'",
      img: "/images/resTryhard.jpg", // 너무 젊게 입으려다 어색해진 스타일
      desc: "젊어 보이려는 노력이 가상하지만, 자칫 나잇값 못 한다는 오해를 살 수 있습니다. 트렌드는 '한 가지' 포인트로만 충분합니다.\n\n*처방: 트렌디한 아이템은 20%만 섞으세요. 클래식한 바탕이 있어야 당신의 감각이 돋보입니다.",
      affiliateLink: "https://link.coupang.com/a/ex1Y6O",
      ctaText: "어색하지 않은 영(Young)한 코디 팁"
    }
  }
};