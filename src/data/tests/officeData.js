export const officeData = {
  id: "office",
  title: "직장인 부캐 찾기: 오피스 빌런 & 히어로",
  subTitle: "사무실 안에서의 당신은 평화를 지키는 히어로인가요, 아니면 공포의 빌런인가요? 당신의 숨겨진 업무 캐릭터를 진단해 드립니다.",
  mainImg: "/images/office-main.jpg",

  questions: [
    {
      id: 1,
      q: "출근 직후, 당신이 가장 먼저 확인하는 것은?",
      img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600",
      a: [
        { text: "오늘 마감해야 할 업무 리스트와 일정", type: "HERO" }, // 히어로 성향
        { text: "오늘 점심 메뉴와 퇴근까지 남은 시간", type: "VILLAIN" } // 빌런 성향
      ]
    },
    {
      id: 2,
      q: "메신저로 '잠깐 대화 가능할까요?'라는 메시지를 받았다면?",
      img: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600",
      a: [
        { text: "무슨 일인지 파악하고 바로 답장을 보낸다", type: "SPEED" }, // 속도/열정
        { text: "일단 읽씹 후, 10분 뒤에 화장실 다녀왔다고 한다", type: "GHOST" } // 회피/은둔
      ]
    },
    {
      id: 3,
      q: "회의 중, 누군가 말도 안 되는 아이디어를 냈을 때 당신은?",
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600",
      a: [
        { text: "최대한 장점을 찾아보며 긍정적으로 피드백한다", type: "HERO" },
        { text: "침묵으로 일관하거나 팩트로 조용히 뼈를 때린다", type: "VILLAIN" }
      ]
    },
    {
      id: 4,
      q: "업무 마감 직전! 갑자기 상사가 추가 업무를 지시한다면?",
      img: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=600",
      a: [
        { text: "심호흡 한 번 하고, 우선순위를 조정해본다", type: "SPEED" },
        { text: "영혼 없는 눈으로 '넵'이라고 치고 속으로 욕한다", type: "GHOST" }
      ]
    },
    {
      id: 5,
      q: "당신이 가장 선호하는 협업 스타일은?",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
      a: [
        { text: "모두가 으쌰으쌰 하며 함께 성과를 내는 팀플레이", type: "HERO" },
        { text: "제발 각자 할 일만 완벽히 하고 서로 안 건드리기", type: "GHOST" }
      ]
    }
  ],

  results: {
    HERO: {
      name: "사무실의 수호신 '캡틴 에이스'",
      desc: "당신은 존재만으로 팀의 사기를 높이는 진정한 히어로! 꼼꼼한 업무 처리와 뛰어난 공감 능력으로 모두가 함께 일하고 싶어 하는 1순위 동료입니다. 하지만 너무 타인을 챙기다 당신의 배터리가 방전될 수 있으니 주의하세요!",
      img: "https://images.unsplash.com/photo-1521791136364-798a7bc0d262?w=400",
      ctaText: "🛡️ 에이스의 품격! 거북목 방지 아이템 보기",
      affiliateLink: "https://play.ranklamp.com/office-hero"
    },
    VILLAIN: {
      name: "조용한 파괴자 '팩트 폭격기'",
      desc: "불필요한 감정 소모는 사치! 날카로운 논리와 이성으로 무장한 당신은 효율성을 극대화하는 빌런(혹은 다크히어로)입니다. 때로는 차가워 보이지만, 당신만큼 일을 확실하게 끝내는 사람도 없죠. 조금만 부드러워진다면 무적의 리더가 될 거예요.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400",
      ctaText: "💣 팩폭 주의! 스트레스 해소용 장난감 보기",
      affiliateLink: "https://play.ranklamp.com/office-villain"
    },
    SPEED: {
      name: "불타는 열정의 '워커홀릭 플래시'",
      desc: "지연되는 일은 못 참는다! 빛보다 빠른 속도로 메신저 답장을 보내고 업무를 쳐내는 당신은 사무실의 플래시입니다. 당신의 속도를 따라오지 못하는 동료들을 보며 답답해하지 마세요. 가끔은 커피 한 잔의 여유가 필요합니다.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400",
      ctaText: "☕ 번아웃 방지! 고카페인 캡슐 커피 추천",
      affiliateLink: "https://play.ranklamp.com/office-speed"
    },
    GHOST: {
      name: "월급 루팡 꿈나무 '투명인간 로그아웃'",
      desc: "최소한의 에너지로 최대의 월급을! 당신은 업무의 바다에서 완벽하게 몸을 숨기는 은신술의 달인입니다. 시킨 일은 딱 맞게 해내지만, 그 이상은 절대 금물인 당신. 효율적인 에너지 관리 능력만큼은 세계 최고 수준이네요!",
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400",
      ctaText: "👻 들키지 않게! 사무실 몰컴 필수템 보기",
      affiliateLink: "https://play.ranklamp.com/office-ghost"
    }
  }
};