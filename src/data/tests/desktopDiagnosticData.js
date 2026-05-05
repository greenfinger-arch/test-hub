export const desktopDiagnosticData = {
  id: "wireless-deskset-audit",
  title: "나의 '데스크 리듬' 진단: 당신의 손끝은 어떤 무선을 원하나요?",
  relatedPostUrl: "https://ranklamp.com/ultimate-guide-to-choosing-wireless-keyboard-and-mouse-combo/",
  subTitle: "단순한 입력 도구를 넘어, 당신의 업무 능률을 결정지을 완벽한 무선 파트너를 찾아보세요.",
  isReady: true,
  mainImg: "/images/desksetMain.jpg",
  questions: [
    {
      q: "당신의 주된 작업 환경은 어떤 모습인가요?",
      img: "/images/desksetQuestion1.jpg", 
      a: [
        { text: "한 대의 PC에 집중하며 장시간 텍스트를 입력한다", type: "FOCUS_USER" },
        { text: "데스크톱, 태블릿, 노트북을 동시에 오가며 작업한다", type: "MULTITASKER" },
        { text: "조용한 카페나 사무실에서 주변 눈치를 보며 작업한다", type: "SILENT_WORKER" },
        { text: "책상을 최대한 넓고 깔끔하게 쓰는 '데스크테리어'가 중요하다", type: "MINIMALIST" }
      ]
    },
    {
      q: "평소 손목이나 어깨에 피로감을 자주 느끼시나요?",
      img: "/images/desksetQuestion2.jpg", 
      a: [
        { text: "오후만 되면 손목이 시큰거려 보호대가 필수다", type: "ERGONOMIC" },
        { text: "가끔 피로하지만 일반적인 형태의 키보드가 익숙하다", type: "FOCUS_USER" },
        { text: "마우스를 잡을 때 손목이 바닥에 닿는 게 불편하다", type: "ERGONOMIC" },
        { text: "피로감보다는 키보드의 '반발력'과 '손맛'이 더 중요하다", type: "FOCUS_USER" }
      ]
    },
    {
      q: "무선 가젯의 배터리 관리, 어떤 방식이 더 편하신가요?",
      img: "/images/desksetQuestion3.jpg", 
      a: [
        { text: "자주 충전하기 귀찮다. 건전지 하나로 오래가는 게 최고다", type: "MINIMALIST" },
        { text: "스마트폰처럼 C타입 케이블로 그때그때 충전하고 싶다", type: "FOCUS_USER" },
        { text: "배터리 잔량을 PC 위젯으로 수시로 확인하고 싶다", type: "MULTITASKER" },
        { text: "전원 방식보다는 디자인이 예쁜 것이 우선이다", type: "MINIMALIST" }
      ]
    },
    {
      q: "작업 중 발생하는 '소음'에 대해 어떻게 생각하시나요?",
      img: "/images/desksetQuestion4.jpg", 
      a: [
        { text: "타닥타닥 들리는 경쾌한 타건음이 있어야 집중이 잘 된다", type: "FOCUS_USER" },
        { text: "독서실 수준의 무소음 클릭과 저소음 키보드가 필수다", type: "SILENT_WORKER" },
        { text: "적당한 소음은 괜찮지만, 마우스 클릭 소리는 작았으면 한다", type: "ERGONOMIC" },
        { text: "소음보다는 키보드가 차지하는 부피가 작은 게 좋다", type: "MINIMALIST" }
      ]
    },
    {
      q: "현재 사용하는 기기의 연결 단자 상황은 어떤가요?",
      img: "/images/desksetQuestion5.jpg", 
      a: [
        { text: "USB 포트가 부족해 동글 없이 블루투스로 연결해야 한다", type: "MULTITASKER" },
        { text: "포트는 넉넉하니 가장 반응 속도가 빠른 리시버 방식을 선호한다", type: "FOCUS_USER" },
        { text: "다양한 OS(Win, Mac, iOS)를 번갈아 가며 사용한다", type: "MULTITASKER" },
        { text: "복잡한 설정 없이 연결만 하면 바로 작동되는 게 좋다", type: "SILENT_WORKER" }
      ]
    }
  ],
  results: {
    FOCUS_USER: {
      name: "몰입의 끝판왕, '하이퍼 라이터'",
      img: "/images/resFocus001.jpg",
      desc: "당신에게는 명확한 피드백과 안정적인 연결이 핵심입니다. 빠른 타건을 지원하는 기계식 무선 키보드와 충전 걱정 없는 고성능 마우스 조합이 어울립니다.\n\n*처방: 2.4GHz 리시버를 활용해 지연 없는 환경을 구축하고, 타건감이 확실한 갈축/적축 모델을 고려해보세요.",
      affiliateLink: "https://link.coupang.com/a/eDc1bx",
      ctaText: "생산성 폭발! 고성능 무선 데스크셋 보기"
    },
    MULTITASKER: {
      name: "경계를 허무는, '스마트 멀티플레이어'",
      img: "/images/resMulti001.jpg",
      desc: "여러 대의 기기를 동시에 제어하는 당신! 버튼 하나로 기기를 전환하는 '멀티 페어링'은 선택이 아닌 필수입니다.\n\n*처방: 최대 3대 이상의 기기 연결을 지원하고, OS 간 커서 이동(Flow)이 가능한 프리미엄 라인업을 추천합니다.",
      affiliateLink: "https://link.coupang.com/a/eDddb4",
      ctaText: "기기 이동이 자유로운 멀티 페어링 세트 보기"
    },
    ERGONOMIC: {
      name: "손목의 수호자, '에르고 매니저'",
      img: "/images/resErgo001.jpg",
      desc: "건강한 작업 환경이 곧 실력입니다. 손목 터널 증후군 예방을 위한 인체공학적 설계가 당신의 1순위 기준이 되어야 합니다.\n\n*처방: 아치형 키보드와 57도 각도의 버티컬 마우스를 선택하세요. 처음의 어색함이 평생의 건강을 지킵니다.",
      affiliateLink: "https://link.coupang.com/a/eDdiH0",
      ctaText: "내 손목을 위한 인체공학 무선 세트 보기"
    },
    SILENT_WORKER: {
      name: "정막 속의 고수, '매너 작업자'",
      img: "/images/resSilent001.jpg",
      desc: "카페, 공유 오피스 어디서든 조용히 빛을 발하는 당신! 저소음 펜타그래프 키보드와 무소음 마우스가 당신의 품격을 높여줍니다.\n\n*처방: 얇고 가벼운 디자인에 클릭 소음을 90% 이상 제거한 저소음 전용 모델을 선택하세요.",
      affiliateLink: "https://link.coupang.com/a/eDdrIJ",
      ctaText: "에티켓의 시작, 저소음/무소음 세트 보기"
    },
    MINIMALIST: {
      name: "미니멀리즘의 정석, '데스크테리어 아티스트'",
      img: "/images/resMini001.jpg",
      desc: "선 없는 자유로움은 물론, 책상의 미적 완성을 추구하시나요? 콤팩트한 텐키리스 키보드와 슬림한 마우스가 정답입니다.\n\n*처방: 건전지 교체 주기가 길어 선 관리가 전혀 필요 없는 슬림형 무선 세트로 데스크를 완성하세요.",
      affiliateLink: "https://link.coupang.com/a/eDdIbb",
      ctaText: "책상을 아름답게! 슬림 무선 세트 보기"
    }
  }
};