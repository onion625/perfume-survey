// 1. 설문 질문 데이터
const questions = [
    {
        text: "당신이 가장 좋아하는 계절은?",
        options: [
          { text: "봄 – 따뜻하고 꽃향기가 나는 분위기를 좋아해요.", type: "calm" },
          { text: "여름 – 상쾌하고 시원한 느낌을 선호해요.", type: "energetic" },
          { text: "가을 – 따뜻하고 풍성한 향을 좋아해요.", type: "free" },
          { text: "겨울 – 고요하고 깊이 있는 향을 좋아해요.", type: "focused" }
        ]
      },
      {
        text: "가장 끌리는 여행지는?",
        options: [
          { text: "고요한 바닷가", type: "calm" },
          { text: "도시의 야경", type: "focused" },
          { text: "열대 정글", type: "energetic" },
          { text: "유럽의 고성", type: "free" }
        ]
      },
      {
        text: "평소 좋아하는 향의 스타일은?",
        options: [
          { text: "상쾌하고 가벼운 향", type: "free" },
          { text: "깊고 진한 우디 향", type: "focused" },
          { text: "달콤한 꽃 향기", type: "calm" },
          { text: "과일향이나 시트러스", type: "energetic" }
        ]
      },
      {
        text: "하루 중 가장 활발한 시간대는?",
        options: [
          { text: "아침 일찍", type: "focused" },
          { text: "오후 시간", type: "calm" },
          { text: "저녁 무렵", type: "free" },
          { text: "밤 늦게", type: "energetic" }
        ]
      },
      {
        text: "파티에 가면 당신은?",
        options: [
          { text: "구석에서 조용히 관찰", type: "calm" },
          { text: "사람들과 어울려 리드", type: "energetic" },
          { text: "편하게 이야기 나눔", type: "free" },
          { text: "누가 오나 파악하며 주도권", type: "focused" }
        ]
      },
      {
        text: "가장 좋아하는 음식은 무엇인가요?",
        options: [
          { text: "달콤한 디저트나 과일", type: "calm" },
          { text: "신선한 샐러드나 시트러스 음식", type: "energetic" },
          { text: "따뜻한 스프나 구운 고기", type: "free" },
          { text: "고급스러운 레스토랑의 요리", type: "focused" }
        ]
      },
      {
        text: "좋아하는 옷 스타일은?",
        options: [
          { text: "캐주얼하고 편안한", type: "free" },
          { text: "세련된 정장 스타일", type: "focused" },
          { text: "사랑스러운 파스텔", type: "calm" },
          { text: "트렌디하고 눈에 띄는", type: "energetic" }
        ]
      },
      {
        text: "당신의 성격을 가장 잘 설명하는 단어는?",
        options: [
          { text: "감성적이고 섬세한", type: "calm" },
          { text: "활기차고 도전적인", type: "energetic" },
          { text: "자유롭고 자연적인", type: "free" },
          { text: "진지하고 차분한", type: "focused" }
        ]
      },
      {
        text: "자주 가는 장소는?",
        options: [
          { text: "책방이나 카페", type: "calm" },
          { text: "헬스장이나 클럽", type: "energetic" },
          { text: "공원이나 여행지", type: "free" },
          { text: "사무실이나 조용한 서재", type: "focused" }
        ]
      },
      {
        text: "하루를 마무리할 때 가장 좋은 건?",
        options: [
          { text: "잔잔한 음악과 휴식", type: "calm" },
          { text: "하이라이트 영화나 운동", type: "energetic" },
          { text: "산책이나 생각 정리", type: "free" },
          { text: "내일 계획 정리", type: "focused" }
        ]
      }
    // → 계속 추가 예정 (최종적으로 10문제)
  ];
  const perfumeRecommendations = {
    calm: {
      name: "Jo Malone – Peony & Blush Suede",
      description: "부드럽고 고급스러운 플로럴 향기로 감성적인 당신에게 어울려요.",
      image: "https://rustans-thebeautysource.com/en/wp-content/uploads/2018/05/Jo-Malone-Peony-Blush-Suede-Cologne-100ml.jpg"
    },
    energetic: {
      name: "Chanel – Chance Eau Fraîche",
      description: "상쾌하고 에너지 넘치는 시트러스 향으로 활기찬 당신에게 딱이에요.",
      image: "https://n.nordstrommedia.com/id/sr3/de3c8cbd-c508-4054-a1d6-ae00fc708f83.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
    },
    free: {
      name: "Diptyque – Philosykos",
      description: "자연을 닮은 무화과 향으로 자유로운 감성을 표현해요.",
      image: "https://n.nordstrommedia.com/id/sr3/b8faed84-d81d-4478-b53c-b6bdc5f18367.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=4"
    },
    focused: {
      name: "Tom Ford – Oud Wood",
      description: "우디하고 진중한 향기로 시크하고 집중력 있는 당신을 표현해요.",
      image: "https://www.sephora.com/productimages/sku/s1565902-main-zoom.jpg"
    }
  };
  
  // 2. 상태 변수
  let currentQuestion = 0;
  let answers = [];
  
  // 3. HTML 요소 가져오기
  const quizContainer = document.getElementById("quiz");
  const nextBtn = document.getElementById("nextBtn");
  
  // 4. 설문 표시 함수
  function showQuestion() {
    const q = questions[currentQuestion];
    quizContainer.innerHTML = `
      <h2>${q.text}</h2>
      ${q.options
        .map(
          (opt, idx) =>
            `<button class="optionBtn" data-type="${opt.type}">${opt.text}</button>`
        )
        .join("")}
    `;
    nextBtn.style.display = "none";
  
    // 선택지 클릭 이벤트 등록
    document.querySelectorAll(".optionBtn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const selectedType = e.target.getAttribute("data-type");
        answers.push(selectedType);
        nextBtn.style.display = "inline-block";
      });
    });
  }
  
  // 5. 다음 버튼 클릭 시 다음 문항
  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  
  // 6. 결과 계산
  function showResult() {
    const result = answers.reduce((acc, type) => {
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {});
    
      const finalType = Object.entries(result).sort((a, b) => b[1] - a[1])[0][0];
      const recommendation = perfumeRecommendations[finalType];
    
      quizContainer.innerHTML = `
        <h2>당신의 향수 유형은: <span style="color:#ff7f83">${finalType}</span></h2>
        <h3>${recommendation.name}</h3>
        <p>${recommendation.description}</p>
        <img src="${recommendation.image}" alt="${recommendation.name}" style="max-width:200px; margin-top:20px;" />
      `;
    
      nextBtn.style.display = "none";
  }
  
  // 7. 첫 질문 보여주기
  showQuestion();
  