export const indoorBikeDiagnosticData = {
  id: "indoor-bike-audit-2026", // 대시보드 내 고유 ID 세팅
  title: "역대급 폭염 생존 키트! 나에게 맞는 '인생 자전거' 처방전", // 기존 포맷 싱크 유지
  relatedPostUrl: "https://ranklamp.com/indoor-cycling-buying-guide/",
  subTitle: "옷차림은 가벼워지는데 밖은 미세먼지와 불볕더위 가득! 5가지 질문으로 내 주거 환경, 운동 목적, 관절 상태를 정밀 분석해 방구석 옷걸이가 되지 않을 진짜 인생 실내 바이크를 처방해 드립니다.",
  isReady: true,
  mainImg: "/images/bikeMain.jpg",
  questions: [
    {
      q: "내가 실내 자전거를 주로 타게 될 '시간대와 주거 환경'은?",
      img: "/images/bikeQ1.jpg",
      a: [
        { text: "아파트나 빌라 거주 중! 주로 퇴근 후 늦은 밤이나 새벽에 조용히 타야 한다", type: "SILENT_MAGNETIC" },
        { text: "층간소음은 비교적 자유롭지만, 거실 한복판을 크게 차지하는 꼴은 못 본다 (무조건 폴딩)", type: "MINIMAL_FOLDING" },
        { text: "소음 걱정 없는 단독주택이거나 낮 시간에 강하게 타며 칼로리를 폭발시키고 싶다", type: "SPIN_IRONMAN" },
        { text: "나이가 있으신 부모님과 함께 타거나, 요통이 있어 척추에 무리가 없어야 한다", type: "COMFORT_RECUMBENT" }
      ]
    },
    {
      q: "홈트 기구를 살 때 내가 '가장 중요하게 생각하는 포인트'는?",
      img: "/images/bikeQ2.jpg",
      a: [
        { text: "페달을 아무리 세게 굴려도 삐걱거리지 않는 묵직한 프레임의 안정감", type: "SPIN_IRONMAN" },
        { text: "의자처럼 편안한 등받이와 일주일 내내 타도 엉덩이가 아프지 않은 안장의 안락함", type: "COMFORT_RECUMBENT" },
        { text: "굴리는지 마는지 모를 정도로 고요한 밤샘 스피드 라이딩 (소음 제로)", type: "SILENT_MAGNETIC" },
        { text: "운동 끝나면 반으로 딱 접어서 문 뒤나 베란다 틈새에 숨길 수 있는 극강의 공간 활용", type: "MINIMAL_FOLDING" }
      ]
    },
    {
      q: "내 자전거를 타다가 '가장 쉽게 지루함을 느끼는 순간'은?",
      img: "/images/bikeQ3.jpg",
      a: [
        { text: "계기판 숫자만 멍하니 보면서 타는 게 고문이다. 즈위프트 같은 가상 레이싱 게임이 필수!", type: "SILENT_MAGNETIC" },
        { text: "엉덩이가 너무 배기고 아파서 10분만 앉아 있어도 내려오고 싶을 때", type: "COMFORT_RECUMBENT" },
        { text: "상체를 숙이고 페달을 미친 듯이 밟으며 땀이 바닥에 뚝뚝 흐를 때 쾌감을 느낀다", type: "SPIN_IRONMAN" },
        { text: "인테리어를 해치는 거대한 쇳덩어리가 거실 시야를 가로막고 있을 때 짜증이 난다", type: "MINIMAL_FOLDING" }
      ]
    },
    {
      q: "나의 무릎 관절 및 허리 '건강 상태'는 어떤가요?",
      img: "/images/bikeQ4.jpg",
      a: [
        { text: "평소 요통이 있거나 과체중이라 서서 타는 자세는 관절에 무리가 온다", type: "COMFORT_RECUMBENT" },
        { text: "관절은 튼튼! 하체 근육을 찢는 듯한 강한 저항과 업힐 훈련을 버틸 수 있다", type: "SPIN_IRONMAN" },
        { text: "아픈 곳은 없지만 무릎에 무리가 가지 않도록 '올바른 안장 높이(15도)'를 맞춰 가볍게 타고 싶다", type: "SILENT_MAGNETIC" },
        { text: "보관성이 제일 중요하다. 가벼운 강도로 TV 보며 설살 굴리는 수준이면 충분하다", type: "MINIMAL_FOLDING" }
      ]
    },
    {
      q: "이번 체중 조절 시즌을 대하는 나의 비장한 각오 한마디!",
      img: "/images/bikeQ5.jpg",
      a: [
        { text: "화면 속 전 세계 라이더들과 경쟁하며 지루할 틈 없이 스마트하게 지방을 커팅하겠다", type: "SILENT_MAGNETIC" },
        { text: "헬스장 스피닝 텐션 그대로! 집구석을 땀 범벅으로 만들 하드코어 라이딩을 하겠다", type: "SPIN_IRONMAN" },
        { text: "넷플릭스 한 편 보면서 회장님 의자처럼 편안하게 장거리 칼로리를 태우겠다", type: "COMFORT_RECUMBENT" },
        { text: "집 인테리어를 해치지 않는 선에서 미니멀하고 깔끔하게 홈트를 실천하겠다", type: "MINIMAL_FOLDING" }
      ]
    }
  ],
  results: {
    SILENT_MAGNETIC: {
      name: "하이테크 스마트 라이더 '저소음 마그네틱 스마트 바이크'",
      img: "/images/resMagnetic001.jpg",
      desc: "늦은 밤 아파트 층간소음 눈치 보지 않고 고요하게 칼로리를 태우고 싶은 당신! 물리적 마찰이 없어 소음이 제로에 가까운 '마그네틱 저항 방식'의 입식 바이크가 최고의 선택입니다. 스마트폰이나 태블릿을 연동해 가상 라이딩 앱 '즈위프트(Zwift)'를 켜고 전 세계 라이더들과 게임하듯 달리다 보면, 지루할 틈 없이 올여름 목표 체중을 가뿐히 달성할 수 있습니다.",
      affiliateLink: "https://link.coupang.com/a/d6XGmBTBMy",
      ctaText: "소음 제로! 즈위프트 연동 스마트 바이크 확인",
      tip: "💡 무릎 지킴 꿀팁: 자전거 타고 무릎이 아프다면 안장이 너무 낮은 것입니다! 페달을 가장 아래로 내렸을 때 무릎이 15~20도 각도로 아주 살짝만 굽혀지는 높이로 안장을 꼭 세팅해 주세요."
    },
    MINIMAL_FOLDING: {
      name: "미니멀 룸인테리어 러버 '2축 콤팩트 접이식 유산소 바이크'",
      img: "/images/resFolding.jpg",
      desc: "거실 한복판을 거대한 운동기구가 차지하는 것을 참을 수 없는 미니멀리스트 당신! 운동 후 반으로 슥 접어 틈새 공간에 쏙 숨길 수 있는 'X자형 접이식 바이크'가 딱입니다. 공간 활용성이 극대화된 폼팩터로, 가벼운 강도로 TV 예능이나 유튜브를 보며 설살 굴리는 유산소 운동 및 체지방 연소에 가장 최적화된 가성비 홈트 아이템입니다.",
      affiliateLink: "https://link.coupang.com/a/d6XYPkXkdM",
      ctaText: "공간 활용 1등! 콤팩트 접이식 바이크 보기",
      tip: "💡 프레임 꿀팁: 접이식 자전거는 격렬한 전력 질주 시 좌우 흔들림이 있을 수 있으니, 페달을 굴릴 때 상체를 과도하게 흔들지 말고 코어에 힘을 준 바른 자세로 타는 것이 안전합니다."
    },
    SPIN_IRONMAN: {
      name: "심폐 폭발 지옥의 훈련관 '고중량 플라이휠 하드코어 스핀바이크'",
      img: "/images/resSpin.jpg",
      desc: "단시간에 땀을 비 오듯 쏟아내며 하체 근력을 찢고 체지방을 박살 내고 싶은 하드코어 홈트러 당신! 헬스장 스피닝 수업에서 쓰는 묵직한 고중량 플라이휠의 '스핀바이크'가 정답입니다. 상체를 완전히 숙이고 사이클 선수처럼 폭풍 페달링을 해도 끄떡없는 고강도 일체형 프레임 구조로, 홈트레이닝의 한계를 뛰어넘는 폭발적인 인터벌 트레이닝이 가능합니다.",
      affiliateLink: "https://link.coupang.com/a/d6Ygw90Sn6",
      ctaText: "헬스장 텐션 그대로! 고강도 스핀바이크 확인",
      tip: "💡 소음/바닥 꿀팁: 스핀바이크는 강력한 댄싱 페달링 시 체중 이동으로 진동이 발생하므로, 확실한 층간소음 차단과 밀림 방지를 위해 바닥에 두께 6mm 이상의 고밀도 PVC 홈트 매트를 무조건 까는 것이 매너입니다."
    },
    COMFORT_RECUMBENT: {
      name: "안락함 충만 허리 지킴이 '인체공학 등받이 좌식 리컴번트 바이크'",
      img: "/images/resRecumbent.jpg",
      desc: "평소 요통이 있거나 무릎 관절이 약해 서서 타는 자전거가 부담스러운 분, 혹은 엉덩이 통증 때문에 매번 홈트를 포기했던 당신! 의자처럼 푹신하게 엉덩이를 감싸주는 와이드 안장과 '안전 등받이'가 장착된 좌식 리컴번트 바이크가 정답입니다. 체중 하중을 척추와 엉덩이로 골고루 분산시켜 주어, 장시간 편안하게 넷플릭스를 시청하며 무리 없이 유산소 운동을 지속할 수 있습니다.",
      affiliateLink: "https://link.coupang.com/a/d6Yy5vdmWy",
      ctaText: "허리/무릎 편안한 등받이 좌식 바이크 보기",
      tip: "💡 가성비 꿀팁: 구형 아날로그 자전거를 가지고 계신가요? 인터넷에서 만 원대 '케이던스 센서'만 사서 페달에 붙이면, 비싼 스마트 자전거 없이도 태블릿 화면과 연동되는 하이테크 가상 라이딩을 즐길 수 있습니다!"
    }
  }
};