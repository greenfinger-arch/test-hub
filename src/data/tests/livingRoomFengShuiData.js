export const livingRoomFengShuiData = {
  id: "living-room-feng-shui-audit",
  title: "우리 집 거실 운기(運氣) 심폐소생 정밀 진단",
  relatedPostUrl: "https://ranklamp.com/small-living-room-feng-shui-storage-hacks/",
  subTitle: "당신의 거실은 행운을 불러들이고 있나요, 아니면 내쫓고 있나요? 거실 상태로 보는 나의 재물운 등급 측정.",
  isReady: true,
  mainImg: "/images/livingAuditMain.jpg",
  questions: [
    {
      q: "거실 바닥의 상태를 솔직하게 점검해 보세요. 현재 바닥면의 여유는 어느 정도인가요?",
      img: "/images/livingQ1.jpg",
      a: [
        { text: "물건이 거의 없고 바닥 면적의 1/3 이상이 시원하게 비어 있다.", type: "GOLD" },
        { text: "가구와 짐이 꽉 차서 발 디딜 틈을 찾아야 할 정도다.", type: "STAGNANT" },
        { text: "바닥에 택배 상자나 전선, 잡지 등이 군데군데 흩어져 있다.", type: "NOISE" },
        { text: "소파나 가구가 너무 커서 거실 전체가 좁아 보인다.", type: "HEAVY" }
      ]
    },
    {
      q: "거실 선반이나 장식장의 물건들은 어떻게 진열되어 있나요?",
      img: "/images/livingQ2.jpg",
      a: [
        { text: "통일된 수납함에 담겨 있거나, 적절한 여백(20%)이 유지되고 있다.", type: "GOLD" },
        { text: "빈틈없이 빼곡하게 물건들이 채워져 있어 답답한 느낌이 든다.", type: "STAGNANT" },
        { text: "각양각색의 물건들이 제각각 노출되어 시선이 분산된다.", type: "NOISE" },
        { text: "오래된 기념품이나 쓰지 않는 물건들이 먼지와 함께 방치되어 있다.", type: "HEAVY" }
      ]
    },
    {
      q: "거실의 조명과 밝기는 당신의 기분을 어떻게 만드나요?",
      img: "/images/livingQ3.jpg",
      a: [
        { text: "간접 조명이나 스탠드를 적절히 활용해 구석까지 밝고 아늑하다.", type: "GOLD" },
        { text: "천장 메인 등 하나만 켜서 구석진 곳은 어둡고 음침하다.", type: "HEAVY" },
        { text: "항상 커튼을 쳐두거나 채광이 부족해 낮에도 어두운 편이다.", type: "STAGNANT" },
        { text: "조명이 너무 밝거나 차가워서 오래 머물기에 눈이 피로하다.", type: "NOISE" }
      ]
    },
    {
      q: "거실에서 키우는 식물이나 생명력이 느껴지는 요소가 있나요?",
      img: "/images/livingQ4.jpg",
      a: [
        { text: "생기 있는 둥근 잎 식물 1~2개가 적절한 위치에서 자라고 있다.", type: "GOLD" },
        { text: "식물이 너무 많아 정글 같거나, 사람보다 키가 큰 식물이 있다.", type: "HEAVY" },
        { text: "말라 죽은 식물이나 먼지 쌓인 조화가 구석에 놓여 있다.", type: "STAGNANT" },
        { text: "식물은 전혀 없으며 무생물과 가전제품으로만 가득 차 있다.", type: "NOISE" }
      ]
    },
    {
      q: "소파에 앉았을 때 당신의 시야에 들어오는 풍경은 어떠한가요?",
      img: "/images/livingQ5.jpg",
      a: [
        { text: "시야가 탁 트여 마음이 편안하고 긍정적인 생각이 든다.", type: "GOLD" },
        { text: "거대한 가전제품이나 복잡한 전선들이 시각적으로 거슬린다.", type: "NOISE" },
        { text: "베란다에 쌓인 짐들이나 어수선한 풍경이 커튼 사이로 보인다.", type: "STAGNANT" },
        { text: "벽이나 큰 가구에 가로막혀 답답하고 폐쇄적인 느낌이 든다.", type: "HEAVY" }
      ]
    }
  ],
  results: {
    GOLD: {
      name: "재물운이 샘솟는 '황금 명당' 거실",
      img: "/images/resLivingGold.jpg",
      desc: "축하합니다! 당신의 거실은 이미 행운을 부르는 완벽한 베이스캠프입니다. 적절한 여백과 기운의 선순환이 당신의 사회적 성공과 가정의 화목을 뒷받침하고 있네요. 현재의 정돈 상태를 유지하며 가끔씩 싱그러운 향기만 더해준다면, 당신이 꿈꾸는 기회들이 먼저 찾아와 문을 두드릴 것입니다.",
      ctaText: "명당의 품격을 높여주는 '프리미엄 룸 스프레이'",
      affiliateLink: "https://link.coupang.com/a/etZn3O"
    },
    STAGNANT: {
      name: "기운이 멈춰버린 '정체된 늪' 거실",
      img: "/images/resLivingStagnant.jpg",
      desc: "안타깝게도 당신의 거실은 기운이 흐르지 못하고 고여 있습니다. 베란다의 짐이나 선반의 과도한 물건들이 새로운 행운의 진입을 막고 있네요. 운을 부르는 첫걸음은 '비우기'입니다. 오늘 당장 쓰지 않는 물건 3가지만 버려보세요. 막혔던 재물운의 통로가 조금씩 열리기 시작할 것입니다.",
      ctaText: "시각적 소음을 한 번에 정리할 '미니멀 수납 벤치'",
      affiliateLink: "https://link.coupang.com/a/etZql0"
    },
    NOISE: {
      name: "에너지가 분산되는 '산만한 소음' 거실",
      img: "/images/resLivingNoise.jpg",
      desc: "당신의 거실은 잠재력은 높지만 현재 에너지가 너무 분산되어 있습니다. 통일되지 않은 수납 방식과 노출된 잡동사니들이 당신의 집중력과 결단력을 갉아먹고 있네요. 수납 박스의 색상만 통일해도 삶의 기반이 탄탄해지는 '토(土)'의 기운이 살아납니다. 시각적 평화를 얻으면 재물운도 함께 안정됩니다.",
      ctaText: "통일감을 주는 '내추럴 패브릭 수납함 세트'",
      affiliateLink: "https://link.coupang.com/a/etX8e9"
    },
    HEAVY: {
      name: "주인을 압도하는 '권위 상실' 거실",
      img: "/images/resLivingHeavy.jpg",
      desc: "거대한 가구나 어두운 조명이 당신의 기운을 누르고 있는 형국입니다. 집에 있어도 편안함보다 답답함을 느낀다면 거실의 높낮이 밸런스를 조절해야 합니다. 키 큰 스탠드를 배치해 시선을 위로 끌어올리고, 거실 바닥을 조금 더 드러내 보세요. 당신이 공간의 주인이 될 때 비로소 성공의 운기도 당신의 편이 됩니다.",
      ctaText: "기를 상승시키는 '슬림 무드 장스탠드'",
      affiliateLink: "https://link.coupang.com/a/etXHgD"
    }
  }
};