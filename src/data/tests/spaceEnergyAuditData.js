export const spaceEnergyAuditData = {
  id: "space-energy-audit",
  title: "나의 집은 복을 부르는 명당일까? '공간 에너지' 정밀 진단",
  relatedPostUrl: "https://ranklamp.com/5-routines-for-cleansing-bad-luck-and-decluttering/",
  subTitle: "막힌 운을 뚫어주는 비움의 기술. 지금 당신의 공간이 내뿜는 주파수를 측정해 보세요.",
  isReady: true,
  mainImg: "/images/spaceAuditMain.jpg",
  questions: [
    {
      q: "당신의 집 '현관'을 떠올려 보세요. 지금 어떤 상태인가요?",
      img: "/images/spaceQ1.jpg",
      a: [
        { text: "신발들이 정돈되어 있고 바닥이 깨끗하다.", type: "LUCKY" },
        { text: "신발이 여러 켤레 나와 있고 우산 등이 섞여 있다.", type: "STAGNANT" },
        { text: "택배 상자나 쓰레기 봉투가 놓여 있을 때가 많다.", type: "BAD" },
        { text: "조명이 어둡고 왠지 들어가기 답답한 느낌이다.", type: "DARK" }
      ]
    },
    {
      q: "주방 식탁 위나 싱크대의 모습은 대개 어떤가요?",
      img: "/images/spaceQ2.jpg",
      a: [
        { text: "식기들이 바로 정리되어 있고 상판이 비어 있다.", type: "LUCKY" },
        { text: "약병, 영양제, 잡동사니가 늘 올라와 있다.", type: "STAGNANT" },
        { text: "설거지거리가 쌓여 있거나 기름때가 눈에 띈다.", type: "BAD" },
        { text: "이가 나간 그릇이나 오래된 양념통이 많다.", type: "DARK" }
      ]
    },
    {
      q: "침실이나 서재의 수납장, 옷장을 열었을 때 느낌은?",
      img: "/images/spaceQ3.jpg",
      a: [
        { text: "70~80%만 채워져 있어 공기가 순환되는 느낌이다.", type: "LUCKY" },
        { text: "물건이 꽉 차 있어서 하나를 꺼내면 다른 게 쏟아진다.", type: "STAGNANT" },
        { text: "2년 이상 입지 않은 옷들이 절반 이상이다.", type: "DARK" },
        { text: "어디에 뭐가 있는지 몰라 늘 찾는 데 시간이 걸린다.", type: "BAD" }
      ]
    },
    {
      q: "최근 1주일간 집안에서 당신의 심리 상태는 어땠나요?",
      img: "/images/spaceQ4.jpg",
      a: [
        { text: "집에 있으면 마음이 편안하고 에너지가 충전된다.", type: "LUCKY" },
        { text: "치워야 한다는 압박감에 오히려 스트레스를 받는다.", type: "STAGNANT" },
        { text: "자꾸 눕고 싶고 무기력해지는 기분이 든다.", type: "DARK" },
        { text: "사소한 일에도 가족이나 동거인과 예민하게 부딪힌다.", type: "BAD" }
      ]
    },
    {
      q: "오늘 당장 물건 3개를 버려야 한다면 당신의 반응은?",
      img: "/images/spaceQ5.jpg",
      a: [
        { text: "미련 없이 버리거나 필요한 사람에게 나눈다.", type: "LUCKY" },
        { text: "언젠가 쓸 것 같아 망설이다 결국 다시 넣어둔다.", type: "STAGNANT" },
        { text: "추억이 담긴 물건이라 버리는 게 죄책감 든다.", type: "DARK" },
        { text: "귀찮아서 다음에 한꺼번에 몰아서 하겠다고 미룬다.", type: "BAD" }
      ]
    }
  ],
  results: {
    LUCKY: {
      name: "황금 기운이 감도는 '운수대통 명당형'",
      img: "/images/spaceRes01.jpg",
      desc: "축하합니다! 당신의 공간은 에너지가 매우 원활하게 순환하고 있습니다. 비움의 미학을 아는 당신의 태도는 재물과 행운이 머물기에 최적의 조건입니다. 지금처럼 여백을 유지하세요. 비워진 자리에 곧 예상치 못한 커다란 기회가 찾아올 것입니다.",
      ctaText: "명당의 기운을 더 맑게 하는 '황동 도어벨'",
      affiliateLink: "https://link.coupang.com/a/esE9Ng"
    },
    STAGNANT: {
      name: "에너지가 멈춰버린 '교통 체증 정체형'",
      img: "/images/spaceRes02.jpg",
      desc: "공간에 물건이 너무 많아 행운이 들어오다 길을 잃고 있습니다. 최근 일이 잘 안 풀리거나 결정이 느려졌다면 그 이유는 정체된 공간 때문입니다. '주소 정하기' 수납법이 시급합니다. 물건에 자리를 찾아주는 것만으로도 막힌 운이 뚫리기 시작할 것입니다.",
      ctaText: "물건의 주소를 찾아주는 '라벨 프린터'",
      affiliateLink: "https://link.coupang.com/a/esE0H2"
    },
    BAD: {
      name: "재물이 새나가는 '에너지 블랙홀형'",
      img: "/images/spaceRes03.jpg",
      desc: "현관과 주방의 탁기가 심각합니다. 나쁜 기운이 나가지 못하고 집안에 머물며 당신의 활력을 갉아먹고 있네요. 특히 지출이 이유 없이 늘었다면 현관부터 청소하세요. 탁기만 걷어내도 불필요한 금전 누수를 막고 새로운 운의 흐름을 만들 수 있습니다.",
      ctaText: "현관 탁기를 씻어내는 '편백 정화 스프레이'",
      affiliateLink: "https://link.coupang.com/a/esEOhE"
    },
    DARK: {
      name: "과거에 갇혀버린 '시간 정지 박물관형'",
      img: "/images/spaceRes04.jpg",
      desc: "추억이라는 이름의 미련이 미래의 행운을 방해하고 있습니다. 낡은 물건과 멈춘 시계는 당신을 과거에 묶어둡니다. 물건을 버리는 것은 추억을 버리는 것이 아닙니다. 과감한 비움을 통해 현재의 당신에게 집중할 수 있는 환경을 만드세요. 운명은 그때부터 바뀝니다.",
      ctaText: "서류와 미련을 한 번에 비우는 '문서 파쇄기'",
      affiliateLink: "https://link.coupang.com/a/esGMyt"
    }
  }
};