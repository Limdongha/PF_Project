/* =========================================================================
   포트폴리오 콘텐츠 데이터
   -------------------------------------------------------------------------
   여기만 수정하면 사이트 내용이 전부 바뀝니다. (HTML/CSS 건드릴 필요 없음)

   ※ 현재 cover/media는 예시용 PNG입니다. assets/works/ 의 같은 이름 PNG를
     본인 스크린샷으로 덮어쓰면 자동으로 갈아끼워집니다. (권장 1600×1000)
     영상은 media에 { type:"video", src:"assets/works/xxx.mp4" } 로 추가.
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
  { label: "Email",      value: "you@example.com",          href: "mailto:you@example.com" },
  { label: "ArtStation", value: "artstation.com/yourname",  href: "https://artstation.com/yourname" },
  { label: "GitHub",     value: "github.com/yourname",      href: "https://github.com/yourname" },
  { label: "LinkedIn",   value: "linkedin.com/in/yourname", href: "https://linkedin.com/in/yourname" },
];

/* 어프로치 — 상단 3컬럼 소개 밴드 (icon: shader|vfx|tool 중 택1) ---------- */
const APPROACH = [
  {
    icon: "shader",
    title: "셰이더 & 룩 개발",
    text: "물·헤어·환경 등 일관된 룩을 단일 머티리얼로 통합하고, 아티스트가 코드 없이 연출하도록 파라미터로 노출합니다.",
  },
  {
    icon: "vfx",
    title: "VFX & 시뮬레이션",
    text: "Houdini 시뮬을 엔진에서 대량 재생하는 워크플로우를 설계해, 전투·마법 이펙트를 빠르게 양산합니다.",
  },
  {
    icon: "tool",
    title: "파이프라인 & 툴",
    text: "반복 작업을 자동화하고 흔한 에러를 사전에 차단하는 인하우스 툴로, 팀 전체의 셋업 시간을 줄입니다.",
  },
];

/* 스킬 / 도구 ------------------------------------------------------------- */
const SKILLS = [
  { group: "Real-time / Engine", items: ["Unreal Engine 5", "Unity (URP/HDRP)", "HLSL / GLSL", "Shader Graph", "Niagara / VFX Graph"] },
  { group: "DCC / Look-dev",     items: ["Houdini", "Substance Designer", "Substance Painter", "Maya / Blender", "Marmoset Toolbag"] },
  { group: "Tools / Pipeline",   items: ["Python", "PySide / Qt", "C# / C++", "Git", "Perforce"] },
];

/* 카테고리 필터 (works의 category와 일치해야 함) -------------------------- */
const CATEGORIES = ["All", "Shader", "VFX", "Tool", "Lighting", "R&D"];

/* 프로젝트 목록 ---------------------------------------------------------- */
const WORKS = [
  {
    title: "스타일라이즈드 워터 셰이더",
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
