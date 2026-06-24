/* =========================================================================
   포트폴리오 콘텐츠 데이터
   -------------------------------------------------------------------------
   여기만 수정하면 사이트 내용이 전부 바뀝니다. (HTML/CSS 건드릴 필요 없음)

   ※ 현재 cover/media는 예시용 PNG입니다. assets/works/ 의 같은 이름 PNG를
     본인 스크린샷으로 덮어쓰면 자동으로 갈아끼워집니다. (권장 1600×1000)
     영상은 media에 추가:
       - 유튜브(권장): { type:"youtube", id:"영상ID 또는 링크" }   ← 일부공개 영상 OK
       - 파일:         { type:"video",   src:"assets/works/xxx.mp4" }
   ========================================================================= */

/* 히어로(메인) 배경 영상 --------------------------------------------------
   우선순위: assets/img/hero.mp4(동영상 파일) > youtube(링크) > assets/img/hero.png(이미지)
   - 동영상 파일을 assets/img/hero.mp4 (또는 hero.webm) 에 넣으면 그 파일이 1순위로 재생됨.
   - 파일이 없을 때만 아래 youtube 링크를 사용. (둘 다 없으면 hero.png 이미지)
   - youtube: 유튜브 링크 또는 영상 ID. 예) "https://youtu.be/abcd1234XYZ" 또는 "abcd1234XYZ"
   - 모션 최소화(prefers-reduced-motion) 사용자에겐 자동으로 정지 이미지 노출. */
const HERO = {
  youtube: "https://www.youtube.com/watch?v=Ug0tOwWOcdg",
};

/* 본인 기본 정보 ---------------------------------------------------------- */
const PROFILE = {
  name: "Lim Dongha",
  stats: [
    { value: "2+", label: "Years" },
    { value: "13", label: "Projects" },
    { value: "4",  label: "Tools" },
  ],
};

/* 연락처 (없으면 줄을 지우세요) ------------------------------------------- */
const CONTACTS = [
  { label: "Email",   value: "leesukyi9@gmail.com",     href: "mailto:leesukyi9@gmail.com" },
  { label: "YouTube", value: "youtube.com/@임동하-i2n",  href: "https://www.youtube.com/@%EC%9E%84%EB%8F%99%ED%95%98-i2n" },
  { label: "Blog",    value: "blog.naver.com/ridas_",   href: "https://blog.naver.com/ridas_" },
];

/* 어프로치 — 상단 3컬럼 소개 밴드 (icon: shader|vfx|tool 중 택1) ---------- */
const APPROACH = [
  {
    icon: "shader",
    title: "셰이더 & 룩 개발",
    text: "물, 머리카락, 환경처럼 룩이 중요한 곳의 셰이더를 만듭니다. 아티스트가 코드를 몰라도 직접 조절할 수 있게 합니다.",
  },
  {
    icon: "vfx",
    title: "최적화 & VFX",
    text: "Niagara · HLSL로 게임 이펙트를 제작하고 퍼포먼스 예산 안에서 동작하도록 드로우콜·셰이더 비용을 줄입니다.",
  },
  {
    icon: "tool",
    title: "파이프라인 & 툴",
    text: "손이 많이 가는 반복 작업을 자동화하는 툴을 만듭니다. 내보내기나 검수처럼 매번 반복되는 과정을 한 번에 처리합니다.",
  },
];

/* 스킬 / 도구 ------------------------------------------------------------- */
const SKILLS = [
  { group: "Real-time / Engine", items: ["Unreal Engine 5", "Unity (URP/HDRP)", "HLSL / GLSL", "Shader Graph", "Niagara / VFX Graph"] },
  { group: "DCC / Look-dev",     items: ["3ds Max", "Maya", "Blender", "Substance Designer", "Substance Painter"] },
  { group: "Tools / Pipeline",   items: ["Python", "PySide / Qt", "C# / C++", "Git", "ImGui"] },
];

/* =========================================================================
   프로젝트 (보여주고 싶은 작업 — 맥락 칸)
   -------------------------------------------------------------------------
   개인·팀·게임잼·외주·학습 등 "내가 만들거나 참여한 프로젝트 전반"을 솔직하게 올립니다.
   (상용 출시작이 아니어도 됨 — 출시작처럼 보이게 꾸미지 말 것.)
   아래 '기술 쇼케이스(WORKS)'와 역할이 다릅니다:
     - PROJECTS = 어떤 프로젝트를 했고 거기서 무엇을 맡았나 (맥락)
     - WORKS    = 셰이더/VFX/툴 같은 기술 분해 (실력 증명)
   - platform: 카드 상단 라벨. 프로젝트 성격+엔진을 솔직하게. 예) "개인 프로젝트 · Unreal 5",
               "팀 프로젝트(4인) · Unity", "게임잼 48h", "외주".
   - role:   거기서 내가 맡은 역할.
   - studio: 팀/소속이 있을 때만. 개인작이면 "" 로 두면 모달에서 자동으로 숨겨짐.
   - cover:  이미지(png/jpg/gif) 또는 영상(mp4/webm). 영상이면 무음 루프 자동재생. 없으면 그라데이션.
   - link:   영상/플레이 빌드/깃허브/블로그 등 보여줄 링크 (비우면 버튼 숨김).
   - related: 이 프로젝트에 쓴 기술 쇼케이스(WORKS) 인덱스 배열 → 모달에서 크로스링크.
   - media:  모달 갤러리. 유튜브 { type:"youtube", id:"링크" } / 파일 { type:"video", src }.
   ========================================================================= */
const PROJECTS = [
  {
    title: "Maze",
    platform: "팀 프로젝트 · PC · Mobile",
    year: "2026년 3 – 7월 (마일스톤 참여)",
    role: "Technical Artist",
    studio: "콩스튜디오",
    cover: "assets/projects/maze.png",   // TODO: 그리드 썸네일 PNG를 assets/projects/maze.png 로 넣기
    summary: "콩스튜디오에서 팀으로 개발한 서브컬처 스테이지형 RPG. PC·모바일 빌드.",
    description:
      "콩스튜디오에서 팀 프로젝트로 개발한 서브컬처 스테이지형 RPG입니다. PC와 모바일 빌드를 " +
      "모두 진행했습니다(정식 출시 전). 저는 테크니컬 아티스트로 마일스톤 기간(2026년 3~7월)에 참여해, " +
      "셰이더 제작과 아티스트용 제작·배치 툴, 그리고 최적화를 맡았습니다.",
    contribution: [
      "캐릭터 셰이더 제작",
      "맵 에셋 배치 툴 개발",
      "캐릭터 아웃라인 구현",
      "프로시저럴 모델링 툴 개발",
      "성능 최적화 모니터링 툴 개발",
    ],
    link: "",                 // 외부 링크 버튼용(선택). 플레이 영상은 아래 media에 유튜브로 넣음
    linkLabel: "영상 보기",
    related: [],              // 각 기술별 쇼케이스(WORKS)를 만든 뒤 그 인덱스를 넣어 연결
    media: [
      { type: "image", src: "assets/projects/maze.png" },
      // TODO: 플레이 영상 유튜브 링크 받으면 아래 주석 풀고 넣기
      // { type: "youtube", id: "https://youtu.be/영상ID" },
    ],
  },
  {
    title: "Maze: 모바일 스핀오프",   // 정식 이름 없음. 원하면 이름 바꾸세요.
    platform: "개인 프로젝트 · Mobile",
    year: "2026년 7월 (약 1개월)",
    role: "1인 개발 (전 과정)",
    studio: "콩스튜디오",
    cover: "assets/projects/maze-mobile.png",   // TODO: 썸네일 PNG를 assets/projects/maze-mobile.png 로
    summary: "Maze 중단 후 기존 리소스로 1개월간 혼자 만든 모바일 프로젝트. 전 과정에 AI 활용.",
    description:
      "Maze 개발 중단이 확정된 뒤, 콩스튜디오에서 기존 Maze 리소스를 활용해 약 1개월간 진행한 " +
      "모바일 프로젝트입니다. 빈 프로젝트에서 시작해 기획·구현·아트를 1인으로 전부 담당했고, " +
      "개발 전 과정에 AI를 적극 활용했습니다. 모바일 전용으로 설계했습니다. (정식 출시 전)",
    contribution: [
      "빈 프로젝트부터 모바일 빌드까지 1인 개발",
      "Maze 리소스를 모바일에 맞게 재구성",
      "모바일 전용으로 설계 및 최적화",
      "개발 전 과정에 AI 활용",
    ],
    link: "",                 // 외부 링크 버튼용(선택). 플레이 영상은 아래 media에 유튜브로 넣음
    linkLabel: "영상 보기",
    related: [],              // 관련 기술 쇼케이스(WORKS) 만들면 인덱스 연결
    media: [
      { type: "image", src: "assets/projects/maze-mobile.png" },
      // TODO: 플레이 영상 유튜브 링크 받으면 주석 풀고 넣기
      // { type: "youtube", id: "https://youtu.be/영상ID" },
    ],
  },
  {
    title: "오디션 — AI 아트 파이프라인",
    platform: "실무 · AI 파이프라인",
    year: "2025년 12월 – 2026년 3월 (약 3개월)",
    role: "Technical Artist (단독)",
    studio: "T3엔터테인먼트 (오디션)",
    cover: "assets/projects/audition.png",   // TODO: 썸네일 PNG를 assets/projects/audition.png 로
    summary: "오디션 팀에서 생성형 AI 기반 아트 리소스 파이프라인을 단독 구축. 제작 기간 3일→1일 단축.",
    description:
      "T3엔터테인먼트의 온라인 댄스 게임 「오디션」 팀에서, 생성형 AI를 활용한 아트 리소스 제작 " +
      "파이프라인을 단독으로 개발한 실무 작업입니다. Tripo·Hunyuan·MeshAI 등 3D 생성 AI와 " +
      "3ds Max의 MAXScript를 연동해, 기존 3일 걸리던 아트 리소스 제작을 1일로 단축했습니다. " +
      "팀 내 유일한 TA로서 약 3개월간 진행했습니다.",
    contribution: [
      "생성형 AI(Tripo·Hunyuan·MeshAI) 기반 아트 리소스 파이프라인 단독 구축",
      "MAXScript로 AI 결과물 → 제작 워크플로우 연동·자동화",
      "아트 리소스 제작 기간 3일 → 1일로 단축",
    ],
    link: "",
    linkLabel: "데모 보기",
    related: [],
    media: [
      { type: "image", src: "assets/projects/audition.png" },
      // { type: "youtube", id: "https://youtu.be/영상ID" },
    ],
  },
  {
    title: "P의 거짓 모작",
    platform: "팀 프로젝트 · PC",
    year: "2025년 7 – 9월 (약 2개월)",
    role: "팀장 · Technical Artist",
    studio: "",
    cover: "assets/projects/lies-of-p.png",   // TODO: 썸네일 PNG를 assets/projects/lies-of-p.png 로
    summary: "「P의 거짓」을 모작한 포트폴리오용 팀 프로젝트. 팀장으로 셰이더·플레이어·최적화 담당.",
    description:
      "「P의 거짓」의 비주얼과 플레이를 모작한 포트폴리오용 팀 프로젝트입니다. PC 기준으로 약 2개월간 " +
      "개발했고, 팀장을 맡아 일정과 작업 분배를 이끌면서 셰이더, 플레이어 컨트롤러, 성능 최적화를 " +
      "직접 담당했습니다. (정식 출시 없이 포트폴리오 목적으로 제작)",
    contribution: [
      "팀장 — 일정·작업 분배 및 팀 리딩",
      "셰이더 제작",
      "플레이어 컨트롤러·조작 시스템 구현",
      "성능 최적화",
    ],
    link: "",                 // 외부 링크 버튼용(선택). 플레이 영상은 아래 media에 유튜브로
    linkLabel: "영상 보기",
    related: [],              // 관련 기술 쇼케이스(WORKS) 만들면 인덱스 연결
    media: [
      { type: "youtube", id: "https://youtu.be/Ug0tOwWOcdg" },
      { type: "image", src: "assets/projects/lies-of-p.png" },
    ],
  },
  {
    title: "원신 모작",
    platform: "개인 프로젝트 · PC",
    year: "2025년 5월 (약 1개월)",
    role: "1인 개발 (셰이더·룩데브)",
    studio: "",
    cover: "assets/projects/genshin.png",   // TODO: 썸네일 PNG를 assets/projects/genshin.png 로
    summary: "「원신」의 툰 렌더링을 모작한 1인 개발 프로젝트. 셀 셰이딩·아웃라인 중심.",
    description:
      "「원신」 특유의 스타일라이즈드 툰 렌더링을 모작한 1인 개발 프로젝트입니다. PC 기준 약 1개월간 " +
      "작업했고, 캐릭터 셀 셰이딩과 아웃라인 등 NPR 룩을 재현하는 데 집중했습니다. " +
      "(정식 출시 없이 포트폴리오 목적으로 제작)",
    contribution: [
      // ※ 아래는 "툰 셰이딩 중심"으로 추정한 초안 — 실제 한 작업으로 수정/추가해 주세요
      "캐릭터 셀 셰이딩(램프·하이라이트) 재현",
      "아웃라인 구현",
      "스타일라이즈드 룩데브",
    ],
    link: "",
    linkLabel: "영상 보기",
    related: [],              // 툰 셰이더 쇼케이스를 만들면 그 인덱스로 연결하면 좋음
    media: [
      { type: "youtube", id: "https://youtu.be/GOxVFVGjr_s" },
      { type: "image", src: "assets/projects/genshin.png" },
    ],
  },
  {
    title: "스컬 모작",
    platform: "개인 프로젝트 · PC · 2D",
    year: "2024년 12월 – 2025년 1월 (약 2개월)",
    role: "1인 개발 (전 과정)",
    studio: "",
    cover: "assets/projects/skul.png",   // TODO: 썸네일 PNG를 assets/projects/skul.png 로
    summary: "「스컬」을 모작한 2D 게임 1인 개발 프로젝트. 2D 렌더링·연출 역량.",
    description:
      "「스컬」을 모작한 1인 개발 프로젝트입니다. 3D 위주 작업과 달리 2D 게임으로 진행했고, " +
      "PC 기준 약 2개월간 빈 프로젝트에서 시작해 혼자 구현했습니다. (정식 출시 없이 포트폴리오 목적으로 제작)",
    contribution: [
      // ※ 2D 중심으로 추정한 초안 — 실제 한 작업으로 수정/추가해 주세요
      "2D 게임 전 과정 1인 개발",
      "2D 캐릭터·이펙트 연출",
      "2D 렌더링/셰이더 작업",
    ],
    link: "",
    linkLabel: "영상 보기",
    related: [],
    media: [
      { type: "youtube", id: "https://youtu.be/9vZXUiEQZFo" },
      { type: "image", src: "assets/projects/skul.png" },
    ],
  },
  {
    title: "칼리버스 — 인게임 콘서트",
    platform: "팀 프로젝트 · 메타버스 (출시)",
    year: "2023년 9월 – 2024년 9월 (약 1년)",
    role: "Unreal Generalist (모델링~렌더링)",
    studio: "칼리버스",
    cover: "assets/projects/kalliverse.png",   // TODO: 썸네일 PNG를 assets/projects/kalliverse.png 로
    summary: "메타버스 게임 「칼리버스」의 인게임 콘서트장을 Unreal로 제작·연출. 엔믹스·드미트리 베가스 등 실제 공연. (실제 출시)",
    description:
      "메타버스 게임 「칼리버스」 안의 인게임 콘서트장을 제작하고 공연 전반을 연출한 팀 프로젝트입니다. " +
      "엔믹스(NMIXX), 드미트리 베가스(Dimitri Vegas) 등 실제 아티스트의 공연을 언리얼 엔진으로 구현했습니다. " +
      "언리얼 제너럴리스트로 참여해 모델링부터 렌더링까지 전 과정을 담당했고, 약 1년간(2023.9~2024.9) 작업했습니다. " +
      "실제 서비스에 출시되었습니다.",
    contribution: [
      "콘서트장 환경 제작 — 모델링부터 렌더링까지 전 과정 참여",
      "엔믹스·드미트리 베가스 등 아티스트 공연 연출",
      "Unreal 엔진 기반 무대 연출·렌더링 구현",
    ],
    link: "",                 // 공식 영상/소개 페이지 있으면 (있으면 버튼 노출)
    linkLabel: "공연 영상 보기",
    related: [],
    media: [
      { type: "image", src: "assets/projects/kalliverse.png" },
      // { type: "youtube", id: "https://youtu.be/영상ID" },
    ],
  },
  {
    title: "의림지 역사박물관 — 미디어아트",
    platform: "팀 프로젝트 · 미디어아트 (전시)",
    year: "2022년 8월 – 2023년 8월 (약 1년)",
    role: "Unreal Generalist (모델링~렌더링·현장 상영)",
    studio: "비츠메이커스",
    cover: "assets/projects/uirimji.png",   // TODO: 썸네일 PNG를 assets/projects/uirimji.png 로
    summary: "의림지 역사박물관에 실제 전시된 미디어아트를 Unreal로 제작. 모델링~렌더링 및 현장 상영 점검까지. (전시)",
    description:
      "의림지 역사박물관에 실제 전시된 미디어아트를 언리얼 엔진으로 제작한 팀 프로젝트입니다. " +
      "언리얼 제너럴리스트로 참여해 모델링부터 렌더링까지 전 과정을 담당했고, 전시 현장에서 " +
      "상영물이 이상 없이 재생되는지 점검하고 대응하는 것까지 함께했습니다.",
    contribution: [
      "전시 미디어아트 제작 — 모델링부터 렌더링까지 전 과정 참여",
      "Unreal 엔진 기반 실시간 렌더링·연출",
      "전시 현장 상영 점검 및 대응",
    ],
    link: "",
    linkLabel: "전시 영상 보기",
    related: [],
    media: [
      { type: "image", src: "assets/projects/uirimji.png" },
      // { type: "youtube", id: "https://youtu.be/영상ID" },
    ],
  },
];

/* 카테고리 필터 (works의 category와 일치해야 함) -------------------------- */
const CATEGORIES = ["All", "Shader", "VFX", "Tool", "Lighting", "R&D"];

/* =========================================================================
   기술 쇼케이스 (셰이더 / VFX / 툴 분해 — 실력 증명 칸)
   개별 "기술 단위" 결과물입니다. 위 PROJECTS(타이틀 단위)와 구분됩니다.
   ========================================================================= */
const WORKS = [
  {
    title: "스타일라이즈드 툰 셰이더",
    category: "Shader",
    year: "2025",
    role: "Shader / Look-dev",
    tools: ["Unreal 5", "HLSL", "Houdini"],
    cover: "assets/works/water.png",
    summary: "굴절·거품·깊이 기반 컬러를 결합한 모바일 친화형 스타일라이즈드 물 셰이더.",
    description:
      "오픈월드의 강·호수·바다에 일관된 룩을 입히기 위해 단일 마스터 머티리얼로 통합한 물 셰이더입니다. " +
      "깊이(depth)에 따라 얕은물/깊은물 색을 블렌딩하고, 거품·굴절·반사를 파라미터로 노출해 아티스트가 " +
      "코드 없이 다양한 수역을 연출할 수 있게 했습니다. 모바일 타깃의 빡빡한 셰이더 예산 안에서 동작하도록 최적화했습니다.",
    bullets: [
      "Depth fade 기반 얕은물/깊은물 2-color 블렌딩 + 가장자리 거품",
      "정점 변위(Gerstner) + 노멀 디테일 2-layer로 파도 표현",
      "모바일 대비 셰이더 인스트럭션 35% 절감 (브랜치 제거·LUT화)",
      "아티스트용 프리셋 12종 제공으로 수역 셋업 시간 단축",
    ],
    media: [
      { type: "image", src: "assets/works/water.png" },
    ],
  },
  {
    title: "절차적 이펙트 시스템",
    category: "VFX",
    year: "2024",
    role: "Technical VFX",
    tools: ["Niagara", "Houdini", "Python"],
    cover: "assets/works/vfx.png",
    summary: "Houdini 시뮬을 데이터로 구워 Niagara에서 대량 재생하는 폭발/마법 이펙트 워크플로우.",
    description:
      "전투 이펙트를 빠르게 양산하기 위해 Houdini에서 시뮬레이션한 결과를 텍스처/포인트 캐시로 익스포트하고, " +
      "엔진의 Niagara에서 GPU 파티클로 재생하는 파이프라인을 구축했습니다. 아티스트는 프리셋과 파라미터만으로 " +
      "수십 종의 변형을 만들 수 있습니다.",
    bullets: [
      "Houdini → Niagara 데이터 익스포트 자동화 (HDA + Python)",
      "Flipbook/Vector field 기반 GPU 파티클로 성능 확보",
      "아티스트용 파라미터 프리셋 UI 제공",
    ],
    media: [
      { type: "image", src: "assets/works/vfx.png" },
    ],
  },
  {
    title: "리깅 · 익스포트 파이프라인 툴",
    category: "Tool",
    year: "2024",
    role: "Pipeline TD",
    tools: ["Python", "PySide", "Maya"],
    cover: "assets/works/tool.png",
    summary: "원클릭으로 리그 검증 → 익스포트 → 엔진 임포트까지 처리하는 인하우스 Maya 툴.",
    description:
      "캐릭터 아티스트가 매번 수동으로 하던 익스포트 과정을 자동화한 툴입니다. 네이밍/스케일/웨이트 등 " +
      "흔한 에러를 익스포트 전에 검증해 차단하고, 통과한 에셋만 엔진 규격으로 내보냅니다.",
    bullets: [
      "수동 작업 대비 셋업 시간 약 70% 단축",
      "검증 단계에서 자주 발생하던 임포트 에러 사전 차단",
      "PySide 기반 UI + 팀 공용 설정 프리셋",
    ],
    media: [
      { type: "image", src: "assets/works/tool.png" },
    ],
  },
  {
    title: "환경 라이팅 룩 개발",
    category: "Lighting",
    year: "2023",
    role: "Lighting / Look-dev",
    tools: ["Unreal 5", "Substance", "Marmoset"],
    cover: "assets/works/light.png",
    summary: "시간대별 무드를 잡은 오픈월드 환경 라이팅 & 시네마틱 룩 스터디.",
    description:
      "오픈월드의 데이라이트 사이클에 맞춰 시간대별 라이팅 시나리오를 설계하고, 안개·볼류메트릭·컬러 그레이딩으로 " +
      "각 시간대의 무드를 차별화했습니다. 포스트 프로세스 볼륨을 시나리오별로 블렌딩해 매끄러운 전환을 구현했습니다.",
    bullets: [
      "Lighting scenario 기반 데이라이트 시스템",
      "볼류메트릭 포그 + 라이트 셰이프트로 시네마틱 무드",
      "시간대별 컬러 그레이딩 LUT 제작",
    ],
    media: [
      { type: "image", src: "assets/works/light.png" },
    ],
  },
  {
    title: "실시간 GPU 디졸브 R&D",
    category: "R&D",
    year: "2023",
    role: "Shader R&D",
    tools: ["HLSL", "Unity"],
    cover: "assets/works/rnd.png",
    summary: "노이즈 기반 디졸브와 에미시브 엣지 글로우를 결합한 트랜지션 효과 연구.",
    description:
      "캐릭터 소환·소멸, 스킬 트랜지션에 쓰일 디졸브 효과를 연구했습니다. 노이즈 텍스처로 알파를 깎아내며 " +
      "잘려나가는 경계에 에미시브 엣지를 더해 '타들어가는' 느낌을 표현했습니다.",
    bullets: [
      "커스텀 노이즈 + 임계값(clip) 기반 디졸브",
      "엣지 두께/색을 파라미터화한 에미시브 링",
      "디졸브 방향(상→하, 중심→밖) 옵션화",
    ],
    media: [
      { type: "image", src: "assets/works/rnd.png" },
    ],
  },
  {
    title: "캐릭터 헤어 셰이더",
    category: "Shader",
    year: "2022",
    role: "Shader",
    tools: ["Unreal 5", "HLSL"],
    cover: "assets/works/hair.png",
    summary: "Kajiya-Kay 기반의 애니메이션풍 이방성(anisotropic) 헤어 라이팅 모델.",
    description:
      "스타일라이즈드 캐릭터에 어울리는 헤어 셰이더입니다. 이방성 하이라이트 두 줄(primary/secondary spec)로 " +
      "머릿결 흐름을 강조하고, 시프트 맵으로 하이라이트 위치를 제어했습니다.",
    bullets: [
      "Kajiya-Kay 기반 이방성 하이라이트 2-spec",
      "Shift map으로 하이라이트 위치/지터 제어",
      "툰 셰이딩과 자연스럽게 어우러지는 림 라이트",
    ],
    media: [
      { type: "image", src: "assets/works/hair.png" },
    ],
  },
];
