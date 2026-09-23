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
    { value: "6",  label: "Tools" },
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
    title: "최적화 & 애니메이션",
    text: "퍼포먼스 예산 안에서 동작하도록 드로우콜·셰이더 비용을 줄이고 물리 기반 애니메이션 툴을 구현합니다.",
  },
  {
    icon: "tool",
    title: "파이프라인 & 툴",
    text: "손이 많이 가는 반복 작업을 자동화하는 툴을 만듭니다. 내보내기나 검수처럼 매번 반복되는 과정을 한 번에 처리합니다.",
  },
];

/* 스킬 / 도구 ------------------------------------------------------------- */
const SKILLS = [
  { group: "Real-time / Engine", items: ["Unreal Engine 5", "Unity (URP)", "HLSL / GLSL", "Shader Graph", "Niagara / VFX Graph"] },
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
    title: "HERO",
    platform: "팀 프로젝트 · Mobile",
    year: "2026년 7월 – 현재",
    role: "Technical Artist",
    studio: "콩스튜디오",
    cover: "assets/projects/Hero.jpg",
    summary: "드래곤 퀘스트 IP 기반 모바일 신작. 테크니컬 아티스트로 참여 중입니다.",
    notice: "※ 위 이미지는 같은 IP로 이미 공개된 타이틀의 키비주얼입니다.",
    description:
      "콩스튜디오에서 테크니컬 아티스트로 참여 중인 드래곤 퀘스트 IP 기반 모바일 신작입니다. " +
      "캐릭터 툰 셰이딩의 램프 파이프라인과 카드 비주얼 파이프라인을 맡았습니다. 아트 컨펌이 3ds Max에서 나고 " +
      "런타임은 유니티라 두 쪽을 잇는 작업이 많았습니다. (개발 중)",
    contribution: [
      "인덱스 램프 파이프라인 제작",
      "카드 비주얼 파이프라인 구축",
      "캐릭터 툰 셰이더 램프 이식",
      "아티스트 요청 대응 및 파이프라인 문서화",
    ],
    results: [
      "램프 색을 3ds Max 안에서 정하게 만들어 유니티 왕복 제거",
      "아틀라스 한 장과 JSON으로 Max·유니티 연결, 분해·임포트 설정·배열 조립 자동화",
      "등급 다섯 종을 데이터로만 가르는 카드 셰이더와 제너레이터 구축",
    ],
    tools: ["Unity", "URP", "HLSL", "3ds Max", "MAXScript", "C#"],
    link: "",
    linkLabel: "영상 보기",
    related: [1, 2],   // 인덱스 램프 툴 · 카드 비주얼 파이프라인
    media: [
      { type: "image", src: "assets/projects/Hero.jpg" },
    ],
  },
  {
    title: "Maze",
    platform: "팀 프로젝트 · PC · Mobile",
    year: "2026년 3월 – 현재",
    role: "Technical Artist",
    studio: "콩스튜디오",
    cover: "assets/projects/maze2.png",
    summary: "콩스튜디오에서 팀으로 개발한 서브컬처 스테이지형 RPG. PC·모바일 빌드.",
    notice: "※ AI로 생성한 대체 이미지입니다.",
    description:
      "콩스튜디오에서 팀 프로젝트로 개발한 서브컬처 스테이지형 RPG입니다. PC와 모바일 빌드를 " +
      "모두 진행했습니다. 저는 테크니컬 아티스트로 2026년 3월부터 참여해 " +
      "셰이더 제작과 아티스트용 제작·배치 툴 그리고 최적화를 맡고 있습니다.",
    contribution: [
      "캐릭터 셰이더 제작",
      "맵 에셋 배치 툴 개발",
      "프로시저럴 모델링 툴 개발",
      "성능 최적화 모니터링 툴 개발",
    ],
    results: [
      "셰이더 제작을 통한 비주얼 디벨럽 기여",
      "아트 파이프라인 자동화로 제작 기간 단축",
      "최적화 툴 개발로 성능 기준 정립",
    ],
    tools: ["Unity", "C#"],
    link: "",                 // 외부 링크 버튼용(선택). 플레이 영상은 아래 media에 유튜브로 넣음
    linkLabel: "영상 보기",
    related: [3, 6, 8, 13],  // Water 셰이더·맵 배치 툴·프로시저럴 던전 배치 툴·Unity 최적화 툴킷
    media: [
      { type: "image", src: "assets/projects/maze2.png" },
      // TODO: 플레이 영상 유튜브 링크 받으면 아래 주석 풀고 넣기
      // { type: "youtube", id: "https://youtu.be/영상ID" },
    ],
  },
  {
    title: "Maze — 모바일 미니게임",   // 정식 이름 없음. 원하면 이름 바꾸세요.
    platform: "개인 프로젝트 · Mobile",
    year: "2026년 6월 (약 1개월)",
    role: "1인 개발 (전 과정)",
    studio: "콩스튜디오",
    cover: "assets/projects/maze-mobile.jpg",   // TODO: 썸네일 PNG를 assets/projects/maze-mobile.jpg 로
    summary: "팀장 요청으로 상부 제시용으로 만든 모바일 미니게임. 기존 Maze 리소스를 써서 1인으로 개발했습니다.",
    notice: "※ AI로 생성한 대체 이미지입니다.",
    description:
      "Maze를 진행하던 중에 팀장 요청으로 상부에 보여줄 제시용 빌드를 만든 것입니다. 기존 Maze 리소스를 " +
      "그대로 활용해 약 1개월간 진행했고 빈 프로젝트에서 시작해 기획·구현·아트를 1인으로 전부 담당했습니다. " +
      "개발 전 과정에 AI를 적극 활용했고 모바일 전용으로 설계했습니다. 제시와 확인이 목적이라 실제 제품에는 들어가지 않았습니다.",
    contribution: [
      "빈 프로젝트부터 모바일 빌드까지 1인 개발",
      "Maze 리소스를 미니게임에 맞게 재구성",
      "모바일 전용으로 설계 및 최적화",
      "개발 전 과정에 AI 활용",
    ],
    results: [
      "상부 제시용 모바일 빌드를 1개월 만에 1인으로 완성",
      "PC 리소스를 모바일 사양에 맞게 경량화",
      "AI 활용 워크플로우로 제작 속도 향상",
    ],
    tools: ["Unity", "C#"],
    link: "",                 // 외부 링크 버튼용(선택). 플레이 영상은 아래 media에 유튜브로 넣음
    linkLabel: "영상 보기",
    related: [7, 9, 10, 12],  // URP 툰 셰이딩·물리 애니메이션 툴·모션 트레일·SDF 공격 장판
    media: [
      { type: "image", src: "assets/projects/maze-mobile.jpg" },
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
      "T3엔터테인먼트의 온라인 댄스 게임 「오디션」 팀에서 생성형 AI를 활용한 아트 리소스 제작 " +
      "파이프라인을 단독으로 개발한 실무 작업입니다. Tripo·Hunyuan·MeshAI 등 3D 생성 AI와 " +
      "3ds Max의 MAXScript를 연동해 기존 3일 걸리던 아트 리소스 제작을 1일로 단축했습니다. " +
      "팀 내 유일한 TA로서 약 3개월간 진행했습니다.",
    contribution: [
      "생성형 AI(Tripo·Hunyuan·MeshAI) 기반 아트 리소스 파이프라인 단독 구축",
      "MAXScript로 AI 결과물 → 제작 워크플로우 연동·자동화",
      "아트 리소스 제작 기간 3일 → 1일로 단축",
    ],
    results: [
      "아트 리소스 제작 3일 → 1일 (약 66% 단축)",
      "팀 최초의 생성형 AI 아트 파이프라인 정립",
      "단독(1인 TA)으로 파이프라인 설계·구축·도입",
    ],
    tools: ["3ds Max", "MAXScript", "Tripo", "Hunyuan 3D", "MeshAI"],
    link: "",
    linkLabel: "데모 보기",
    related: [0],             // 생성형 AI 아트 파이프라인
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
    summary: "「P의 거짓」을 모작한 팀 프로젝트. 팀장 + 플레이어·PBR 셰이더·라이팅·최적화 담당.",
    description:
      "「P의 거짓」의 비주얼과 플레이를 모작한 포트폴리오용 팀 프로젝트입니다(PC, 약 2개월). 팀장을 맡아 " +
      "일정·작업 분배를 이끌었고 직접 담당한 영역은 플레이어·셰이더·라이팅·최적화입니다. 플레이어는 모든 " +
      "시스템이 맞물리는 허브라 판단해 제가 맡았습니다. 아트 출신인 만큼 원본 룩을 최대한 재현하기 위해 " +
      "DirectX 환경에서 PBR 셰이더를 구현하고 빛 디자인이 핵심이라 보고 라이팅 아티스트 역할을 겸했습니다. " +
      "최적화는 옥트리·LOD·프러스텀 컬링으로 처리했습니다. (포트폴리오 목적으로 제작)",
    contribution: [
      "팀장 — 일정·작업 분배 및 팀 리딩",
      "플레이어 시스템 구현",
      "DirectX 환경에서 PBR 셰이더 구현 — 원본 룩 재현",
      "라이팅 디자인 (라이팅 아티스트 역할 겸임)",
      "최적화 — 옥트리 · LOD · 프러스텀 컬링",
    ],
    results: [
      "PBR + 라이팅으로 원작에 근접한 비주얼 재현",
      "원작에 가까운 플레이어 조작감 구현",
      "옥트리·LOD·컬링으로 렌더링 부하 절감",
    ],
    tools: ["DirectX 11", "HLSL", "C++"],
    link: "",                 // 외부 링크 버튼용(선택). 플레이 영상은 아래 media에 유튜브로
    linkLabel: "영상 보기",
    related: [14],            // PBR 셰이더 & 라이팅
    media: [
      { type: "youtube", id: "https://youtu.be/Ug0tOwWOcdg" },
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
      "「원신」 특유의 NPR 캐릭터 및 파티클 시스템을 DirectX의 디퍼드 렌더링 방식을 이용하여 " +
      "약 한 달간 1인으로 재현한 프로젝트입니다. 핵심 과제는 원신 특유의 전투 시스템과 셰이더, " +
      "캐릭터를 또렷하게 잡아주는 아웃라인을 실시간에서 양립시키는 것이었습니다. " +
      "램프 텍스처로 음영 단계를 제어하고 얼굴은 노멀을 따로 베이크해 그림자가 깨지는 문제를 해결했습니다. " +
      "원작에 근접한 룩을 디퍼드 렌더링 파이프라인으로 구현했습니다. (포트폴리오 목적으로 제작)",
    contribution: [
      // 설명에서 언급한 작업만 정리 — 세부 기법/수치 있으면 자유롭게 보강하세요
      "DirectX 디퍼드 렌더링 파이프라인 직접 구현",
      "램프 텍스처 기반 셀 셰이딩 — 음영 단계 제어",
      "페이스 노멀 베이크로 얼굴 그림자 문제 해결",
      "캐릭터 아웃라인 구현 (배면법)",
      "파티클 시스템 구현",
      "전투 시스템 구현",
    ],
    results: [
      "DirectX 디퍼드 렌더링 파이프라인을 직접 구현",
      "셀 셰이딩·아웃라인·그림자를 실시간에서 양립",
      "렌더러부터 전투까지 구현",
    ],
    tools: ["DirectX 11", "HLSL", "C++"],
    link: "",
    linkLabel: "영상 보기",
    related: [5, 11, 15, 16],   // 디퍼드 렌더러 쇼케이스 4개(파티클·커스텀셰이딩·디퍼드·그림자&SSAO) 연결
    media: [
      { type: "youtube", id: "https://youtu.be/GOxVFVGjr_s" },
    ],
  },
  {
    title: "스컬 모작",
    platform: "개인 프로젝트 · PC · 2D",
    year: "2024년 12월 – 2025년 1월 (약 2개월)",
    role: "1인 개발 (전 과정)",
    studio: "",
    cover: "assets/projects/skul.png",   // TODO: 썸네일 PNG를 assets/projects/skul.png 로
    summary: "엔진 없이 Windows API(GDI+)로 「스컬」을 모작한 2D 게임. 충돌·중력·전투·인벤토리 등 핵심 시스템을 직접 구현.",
    description:
      "게임 엔진 없이 Windows API(GDI+) 기반으로 「스컬」을 모작한 1인 프로젝트입니다. 박스 충돌, 중력, " +
      "이펙트 생명주기, 전투, 인벤토리 등 보통 엔진이 대신 처리해 주는 핵심 시스템들을 직접 구현하며 게임이 " +
      "돌아가는 원리를 밑바닥부터 다뤘습니다. (포트폴리오 목적으로 제작)",
    contribution: [
      "Windows API(GDI+) 기반 2D 게임 1인 개발",
      "박스 충돌 처리 구현",
      "중력·점프 등 기본 물리 구현",
      "이펙트 생명주기 관리",
      "전투 시스템 구현",
      "인벤토리 시스템 구현",
    ],
    results: [
      "엔진 없이 게임의 핵심 시스템을 처음부터 직접 구현",
      "충돌·물리·전투·인벤토리 등 게임 전반 구조를 경험",
    ],
    tools: ["C++", "WinAPI", "GDI+"],
    link: "",
    linkLabel: "영상 보기",
    related: [],
    media: [
      { type: "youtube", id: "https://youtu.be/9vZXUiEQZFo" },
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
      "언리얼 제너럴리스트로 참여해 모델링부터 렌더링까지 전 과정을 담당했고 약 1년간(2023.9~2024.9) 작업했습니다. " +
      "실제 서비스에 출시되었습니다.",
    contribution: [
      "콘서트장 환경 제작 — 모델링부터 렌더링까지 전 과정 참여",
      "엔믹스·드미트리 베가스 등 아티스트 공연 연출",
      "Unreal 엔진 기반 무대 연출·렌더링 구현",
      "머티리얼 스캐터 툴 개발 — 머티리얼 인스턴스·텍스처 셋업 자동화",
    ],
    results: [
      "실제 서비스 출시 — 라이브 메타버스 콘서트 구현",
      "엔믹스·드미트리 베가스 등 실제 아티스트 공연을 인게임으로 재현",
      "약 1년간 콘서트장 제작·연출 전 과정 참여",
    ],
    tools: ["Unreal Engine", "Blueprint"],
    link: "",                 // 공식 영상/소개 페이지 있으면 (있으면 버튼 노출)
    linkLabel: "공연 영상 보기",
    related: [4],             // 언리얼 머티리얼 스캐터
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
      "언리얼 제너럴리스트로 참여해 모델링부터 렌더링까지 전 과정을 담당했고 전시 현장에서 " +
      "상영물이 이상 없이 재생되는지 점검하고 대응하는 것까지 함께했습니다.",
    contribution: [
      "전시 미디어아트 제작 — 모델링부터 렌더링까지 전 과정 참여",
      "Unreal 엔진 기반 실시간 렌더링·연출",
      "전시 현장 상영 점검 및 대응",
    ],
    results: [
      "의림지 역사박물관에 실제 전시·상영",
      "약 1년간 모델링~렌더링 전 과정 참여",
      "전시 현장 상영 안정성 점검·대응",
    ],
    tools: ["Unreal Engine", "Sequencer"],
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
const CATEGORIES = ["All", "Rendering", "Shader", "Tool", "VFX"];

/* =========================================================================
   기술 쇼케이스 (셰이더 / VFX / 툴 분해 — 실력 증명 칸)
   개별 "기술 단위" 결과물입니다. 위 PROJECTS(타이틀 단위)와 구분됩니다.
   ========================================================================= */
const WORKS = [
  /* 정렬 기준: TA 채용 우선순위
     위 → 실무 차별점(AI 파이프라인)·엔진 내 프로덕션 셰이더/툴·비주얼 그랩력 큰 작업
     아래 → DX11 "밑바닥부터 렌더러" 학습작(탄탄한 기초 증명용)
     ※ 카드는 이 배열 순서대로 렌더됩니다. 내용 채우는 순서도 위에서부터 권장. */
  {
    title: "생성형 AI 아트 파이프라인",
    category: "Tool",
    year: "2026",
    role: "Technical Artist",
    tools: ["Gemini", "ComfyUI", "Blender", "ZBrush", "3ds Max"],
    cover: "assets/works/audition-aipipe.png",   // TODO: 실제 결과 컷으로 교체 권장(예: 품질 그리드/파이프라인 다이어그램)
    credit: "1인 TA · 실무",
    studyMd: "content/works/01-ai-pipeline.md",   // ← 케이스 스터디 본문은 이 마크다운 파일에서 작성
    summary: "ComfyUI 멀티뷰 생성으로 만든 3D 에셋을 ZBrush 리토폴·3ds Max 자동화로 이은 의상 제작 파이프라인.",
    description:
      "온라인 댄스 게임 「오디션」의 의상 에셋 제작을 가속하기 위해 단독 구축한 파이프라인입니다. " +
      "ComfyUI로 일관된 멀티뷰 이미지를 만들고 이를 3D 생성 AI로 변환한 뒤 블렌더·ZBrush로 토폴로지를 " +
      "정리하고 3ds Max 자동화 스크립트로 반복 작업을 묶어 기존 3일 걸리던 제작을 1일로 단축했습니다.",
    bullets: [
      "ComfyUI 노드로 일관된 멀티뷰 이미지 생성 (제미나이 일관성 문제 해결)",
      "멀티뷰 → 3D 생성 AI 변환, 블렌더·ZBrush로 리토폴로지 정리",
      "3ds Max 자동화 스크립트로 정리·스냅샷 등 반복 작업 자동화",
      "에셋 제작 3일 → 1일 단축 (월 3.5~5세트 → 24세트)",
    ],
    media: [{ type: "image", src: "assets/works/audition-aipipe.png" }],
  },

  {
    title: "인덱스 램프 툴",
    category: "Tool",
    year: "2026",
    role: "Technical Artist",
    tools: ["3ds Max", "MAXScript", "Unity", "C#", "HLSL"],
    cover: "assets/works/ramp-tool.png",   // TODO: 램프 툴 창 캡처
    credit: "1인 TA · 실무",
    creditNote: "3ds Max 편집 툴과 유니티 임포터 그리고 fx 셰이더 파일을 만들었습니다.",
    studyMd: "content/works/20-ramp-tool.md",
    summary: "캐릭터 툰 셰이더의 램프를 3ds Max 안에서 보면서 만들 수 있습니다.",
    description:
      "아트 컨펌은 3ds Max에서 나는데 Max의 fx는 텍스처 배열을 못 읽어 인덱스별 램프를 미리 볼 수 없었습니다. " +
      "램프 236장을 실측 분석해 포토샵 대신 마커 그라디언트로 만들도록 바꾸고 아틀라스 한 장과 JSON 배선도로 " +
      "Max 편집과 유니티 조립을 이었습니다. 인덱스마다 구분색을 자동으로 넣어 안 보이던 부위 번호를 눈에 보이게 했습니다.",
    bullets: [
      "램프 236장을 실측 분석해 제작 방식 결정 — 126종은 바이트까지 동일했습니다",
      "인덱스 자동 구분색 — 부위 번호를 눈으로 확인하고 검증 도구로도 사용",
      "아틀라스 1장 + JSON 배선도로 Max와 유니티를 연결. MAXScript JSON 파서는 직접 구현",
      "드래그 중 실시간 미리보기 26ms → 4.95ms — 색 계산이 89%인 것을 재고 바뀐 줄만 굽기",
      "HeroToon.fx 램프 이식 — 기존 코드는 두 군데 3줄만 변경",
      "유니티 임포터 — 분해·임포트 설정·배열 조립 + 픽셀 1,536개 전수 대조",
    ],
    media: [{ type: "image", src: "assets/works/ramp-tool.png" }],
    links: [
      { label: "OKLab 색공간 정리", href: "https://blog.naver.com/ridas_/224391843068" },
    ],
  },

  {
    title: "카드 비주얼 파이프라인",
    category: "Shader",
    year: "2026",
    role: "Technical Artist",
    tools: ["Unity", "URP", "HLSL", "C#", "Editor Scripting"],
    cover: "assets/works/card-pipeline.png",   // 데모 영상에서 잘라낸 스틸. 움직이는 썸네일을 원하면 content/works/img/21-card-pipeline/fig01-demo.mp4 로 바꾸면 됩니다
    credit: "1인 TA · 실무",
    studyMd: "content/works/21-card-pipeline.md",
    summary: "판 한 장에 11겹을 합성하는 등급별 카드 셰이더와 데이터만 바꾸면 카드가 찍혀 나오는 제너레이터.",
    description:
      "트레이딩 카드 게임의 등급별 카드 비주얼을 만드는 파이프라인입니다. 겹을 오브젝트로 쌓지 않고 한 장의 판에 " +
      "셰이더가 11겹을 덮어써 드로우콜을 하나로 유지했습니다. 등급은 값으로만 갈리므로 등급을 추가해도 셰이더는 " +
      "고치지 않습니다. 카드를 UI로 만들지 3D로 만들지는 두 벌을 실제로 만들고 프로젝트를 전수 조사해 보고했습니다.",
    bullets: [
      "앞면 11겹 합성 셰이더 — 홀로그램·시차·금색 아웃라인·반짝이",
      "등급은 데이터로만 갈린다 — 셰이더는 등급을 모름",
      "메시·위상 텍스처·SDF 생성 툴과 겹 단위 머티리얼 인스펙터",
      "제너레이터 — 프리셋에서 값을 복사하고 머티리얼은 메모리에서 굽기. 파일은 하나도 안 생깁니다",
      "캔버스 vs 3D 비교 보고 — 두 방식을 다 만들고 프로젝트 전수 조사",
      "검은 얼룩 디버깅 — Depth Priming·다이나믹 배칭·MaterialPropertyBlock 세 조건",
    ],
    media: [{ type: "video", src: "content/works/img/21-card-pipeline/fig01-demo.mp4" }],
  },

  {
    title: "Water 셰이더",
    category: "Shader",
    year: "2026",
    role: "Technical Artist",
    tools: ["Unity", "HLSL", "Shader Graph"],
    cover: "assets/works/maze-water.png",   // TODO: 중립 씬에서 재현한 스크린샷
    credit: "팀 프로젝트 · 본인 제작",
    creditNote: "Maze 팀 프로젝트입니다. 물 셰이더는 제가 제작했고, 셰이더가 참조하는 커스텀 디퍼드 렌더러는 팀 그래픽 프로그래머가 구축했습니다. 텍스처·렌더타겟 예산은 그래픽 프로그래머와 함께 정했습니다.",
    studyMd: "content/works/02-water.md",   // ← 케이스 스터디 본문
    summary: "깊이·굴절·거품을 결합한 모바일용 스타일라이즈드 물 셰이더. 기존 텍스처·렌더타겟을 재활용해 가볍게 구현.",
    description:
      "모바일 타깃 프로젝트 Maze의 여러 스테이지에 사용한 스타일라이즈드 물 셰이더입니다. 깊이에 따른 색 블렌딩, 굴절, " +
      "가장자리 거품, 노말 스크롤 반사를 파라미터로 노출해 아티스트가 코드 없이 다양한 수역을 연출할 수 있게 했고 " +
      "기존 3D 노이즈 텍스처와 커스텀 디퍼드의 렌더타겟을 재활용해 모바일에서도 가볍게 동작하도록 만들었습니다.",
    bullets: [
      "깊이 기반 얕은물/깊은물 색 블렌딩",
      "깊이 비례 굴절 + 가장자리 포말",
      "노말 스크롤 기반 흐름·반사(TBN)",
      "기존 텍스처·렌더타겟 재활용 + 필요한 픽셀만 재샘플링",
      "아티스트용 파라미터(색·굴절·포말·흐름) 노출",
    ],
    media: [{ type: "image", src: "assets/works/maze-water.png" }],
  },

  {
    title: "언리얼 머티리얼 스캐터",
    category: "Tool",
    year: "2024",
    role: "Technical Artist",
    tools: ["Unreal Engine", "Blueprint", "Python"],
    cover: "assets/works/kalli-scatter.jpg",   // TODO: 툴 UI/결과 스크린샷
    credit: "팀 프로젝트 · 본인 제작",
    creditNote: "칼리버스 팀 프로젝트입니다. 머티리얼 스캐터 툴은 제가 개발했습니다.",
    studyMd: "content/works/03-material-scatter.md",   // ← 상단 시연영상만 미리보기. PDF 오면 본문 채움
    summary: "모델 임포트 시 머티리얼 인스턴스 생성·슬롯 할당·텍스처 연결을 자동으로 처리하는 언리얼 툴.",
    description:
      "모델을 가져올 때마다 반복되던 머티리얼 세팅을 자동화한 툴입니다. 머티리얼 인스턴스를 자동으로 만들어 " +
      "맞는 슬롯에 넣고 대응하는 텍스처(알베도·노멀·러프니스 등)까지 자동으로 연결합니다. 인스턴스를 하나씩 " +
      "만들고 슬롯에 끼우고 텍스처를 링크하던 작업을 한 번에 끝내 셋업 시간과 실수를 줄였습니다.",
    bullets: [
      "머티리얼 인스턴스 자동 생성·매칭",
      "알맞은 머티리얼 슬롯에 자동 할당",
      "대응 텍스처(알베도·노멀·러프니스 등) 자동 연결",
      "반복 셋업 시간·실수 감소",
    ],
    media: [{ type: "image", src: "assets/works/kalli-scatter.jpg" }],
  },

  {
    title: "GPU 파티클 시스템",
    category: "VFX",
    year: "2025",
    role: "Graphics · Tech Art",
    tools: ["DirectX 11", "HLSL", "C++"],
    cover: "assets/works/thumb-particle.jpg",   // 전용 썸네일(4:3). 없으면 제목 플레이스홀더로 대체
    credit: "1인 개발",
    summary: "GPU 인스턴싱 기반 파티클 시스템. 바리센트릭 기법으로 메쉬 표면에 균등 분포 스폰을 구현.",
    description:
      "수천 개의 파티클을 단일 드로우콜로 그리기 위해 정점·인덱스 버퍼에 인스턴스 버퍼를 더한 구조를 설계했습니다. " +
      "파티클의 위치·크기·라이프타임·텍스처 인덱스를 인스턴스 버퍼로 GPU에 한 번에 넘기고 업데이트 로직은 " +
      "순수가상함수로 추상화해 파티클 종류별 움직임을 분리했습니다. 무기 메쉬 표면에 파티클을 뿌릴 때는 " +
      "면적이 큰 삼각형일수록 더 자주 선택되도록 면적 누적합과 이진탐색으로 균등 분포를 구현했습니다.",
    bullets: [
      "정점·인덱스 + 인스턴스 버퍼 구조로 N개 파티클을 드로우콜 1회에 렌더링",
      "순수가상 UpdateParticles로 파티클 종류별 움직임 추상화",
      "인스턴스 버퍼로 파티클별 텍스처 인덱스 전달 — 한 컴포넌트에서 다중 텍스처",
      "메쉬 표면 균등 스폰: 삼각형 면적 누적합 + lower_bound 이진탐색 + 바리센트릭 랜덤",
      "루프/단발 파티클 분리, AliveCount로 소멸 통지",
    ],
    media: [
      { type: "image", src: "content/works/img/04-gpu-particle/07.png" },
    ],
    study: [
      { p: "DirectX 11로 직접 구현한 렌더러 위에, 1인 개발로 모작한 게임에 넣기 위해 만든 파티클 시스템입니다. 타격감과 분위기를 좌우하는 이펙트를 성능을 해치지 않으면서 자유롭게 연출하는 것이 목표였습니다. 과거에 계획 없이 기능을 덧붙이다 구조가 무너진 경험이 있어 이번에는 '무엇을 그릴까'보다 '어떻게 그릴까'라는 성능 구조부터 잡고 시작했습니다." },
      { p: "그렇게 먼저 그리는 뼈대를 세우고 그 위에 파티클의 움직임 → 겉모습 → 수명 → 태어나는 위치를 하나씩 얹어 갔습니다. 아래는 그 순서대로 정리한 과정입니다." },

      { h: "1. 드로우콜을 줄이는 인스턴싱 구조" },
      { p: "파티클의 가장 큰 적은 드로우콜입니다. 물체 하나를 그릴 때마다 CPU가 GPU에게 '이걸 그려라'라는 명령을 보내는데 파티클을 하나씩 그리면 1,000개를 그리는 데 명령이 1,000번 나갑니다. 이 호출 비용이 쌓이면 GPU가 놀고 있어도 CPU 쪽에서 병목이 생깁니다." },
      { p: "그래서 인스턴싱을 택했습니다. 모양을 정의하는 정점·인덱스 버퍼는 하나만 두고 파티클마다 달라지는 값(위치·크기·라이프타임 등)은 별도의 인스턴스 버퍼에 모아 함께 넘깁니다. 그러면 1,000개라도 정점 버퍼 1개와 인스턴스 데이터 1,000개를 한 번에 전달해 드로우콜 단 한 번으로 전부 그릴 수 있습니다." },
      { img: "content/works/img/04-gpu-particle/02.png", cap: "정점·인덱스 버퍼에 인스턴스 버퍼를 더한 구조. 개별 파티클 데이터를 인스턴스 버퍼에 실어 GPU로 한 번에 전달합니다." },
      { p: "이 인스턴스 버퍼를 여러 종류의 파티클이 공유할 수 있도록 인스턴스 버퍼의 부모 클래스를 두고 그 아래로 확장하는 3단계 계층으로 설계했습니다. 공통 동작은 부모가, 종류별 고유 동작은 자식이 맡는 구조입니다." },
      { img: "content/works/img/04-gpu-particle/03.png", cap: "VI_Buffer → VI_Buffer_Instance → VI_Buffer_Point_Particle 계층. 이후 모든 확장이 이 골격 위에서 이뤄집니다." },

      { h: "2. 움직임을 인터페이스로 추상화" },
      { p: "그리는 뼈대를 세웠으니, 다음은 그 뼈대 안에서 파티클을 '어떻게 움직일까'였습니다. 처음에는 파티클의 움직임을 종류별 함수로 따로 제어했는데 종류가 늘수록 함수가 흩어져 흐름을 따라가기 어려워졌습니다." },
      { img: "content/works/img/04-gpu-particle/04.png", cap: "초기 구조 — 움직임을 함수별로 분리하다 보니 어떤 파티클이 어떻게 움직이는지 한눈에 들어오지 않았습니다." },
      { p: "그래서 UpdateParticles를 순수가상함수로 만들어 인터페이스화했습니다. 부모는 '업데이트해라'라고 한 번만 호출하고 Drop·Spread 같은 실제 움직임은 각 자식 클래스가 자기 방식대로 정의합니다. 진입점이 하나로 모이니 새 파티클을 추가할 때 부모를 건드리지 않고 자식만 구현하면 됩니다." },
      { img: "content/works/img/04-gpu-particle/05.png", cap: "모든 움직임을 업데이트 함수 하나로 통합한 결과. 종류별 동작의 책임이 자식으로 내려갑니다." },
      { p: "역할도 명확히 나눴습니다. 부모는 생성·소멸 같은 공통 기능만 갖고 속도·무게·회전처럼 파티클마다 다른 변수는 자식이 들고 있게 했습니다. 이를 위해 SetupExtraData() 순수가상함수를 두어 자식마다 필요한 데이터를 따로 초기화하도록 했고 덕분에 부모가 쓰지도 않을 변수로 비대해지는 것을 막았습니다." },
      { img: "content/works/img/04-gpu-particle/06.png", cap: "SetupExtraData()로 자식별 데이터를 분배. 크기·라이프타임처럼 셰이더로 넘기는 값만 인스턴스 버퍼에 남겨 부모를 가볍게 유지했습니다." },

      { h: "3. 파티클마다 다른 텍스처 입히기" },
      { p: "움직임을 자식 클래스로 내려보내고 나니, 이번엔 겉모습 차례였습니다. 불꽃·연기·꼬리처럼 같은 시스템 안에서도 파티클마다 다른 텍스처를 써야 자연스럽습니다. 그런데 텍스처는 보통 객체 단위로 한 번 바인딩되기 때문에 정점 하나하나에 다른 텍스처를 지정하는 것은 원리가 다릅니다." },
      { p: "해법은 라이프타임을 넘기던 방식과 같았습니다. 텍스처 자체가 아니라 '몇 번 텍스처를 쓸지'를 가리키는 인덱스를 인스턴스 버퍼에 실어 셰이더로 넘기고 픽셀 셰이더에서 텍스처 배열을 받아 그 인덱스로 골라 씁니다. 버퍼 값을 Unmap()으로 갱신하면 파티클마다 다른 인덱스를 줄 수 있습니다." },
      { img: "content/works/img/04-gpu-particle/07.png", cap: "파티클마다 다른 텍스처 인덱스를 부여한 결과 — 하나의 시스템 안에서 여러 종류의 입자가 섞여 흩날립니다." },

      { h: "4. 루프 파티클과 단발 파티클" },
      { p: "생성·움직임·겉모습까지 갖추자 남은 것은 '언제까지 사느냐', 곧 수명 관리였습니다. 파티클은 계속 반복되는 루프형과 한 번 터지고 사라지는 단발형으로 나뉩니다. 루프형은 라이프타임이 끝나면 위치와 시간을 초기화하면 그만이지만 단발형은 '언제 전부 사라졌는가'를 알아야 객체를 정리할 수 있습니다." },
      { img: "content/works/img/04-gpu-particle/08.png", cap: "루프형과 단발형의 분리. 단발형은 모든 파티클이 소멸하는 시점을 스스로 감지해야 합니다." },
      { p: "그래서 매 프레임 살아있는 파티클 수(AliveCount)를 셉니다. 하나라도 살아있으면 0이 아니므로 유지하고 전부 소멸하면 스위치를 켭니다. 컴포넌트를 들고 있는 객체는 이 신호를 읽어 자신을 정리합니다." },
      { img: "content/works/img/04-gpu-particle/09.png", cap: "AliveCount로 생존 파티클 수를 집계합니다." },
      { img: "content/works/img/04-gpu-particle/10.png", cap: "전부 소멸하면 객체에 통지. 포인트 파티클은 인스턴스 버퍼의 크기가 곧 파티클 개수여서 버퍼만 늘리고 줄이면 개수를 동적으로 제어할 수 있습니다." },

      { h: "5. 메쉬 표면에 고르게 뿌리기" },
      { p: "여기까지가 '어떻게 그리고 움직이고 사라지는가'였다면, 마지막 질문은 '어디서 태어나는가'였습니다. 무기에서 빛 입자가 피어오르는 연출을 위해 파티클을 무기 메쉬의 표면에서 스폰하려 했습니다. 메쉬의 정점·인덱스 배열을 가져오되 무기는 이미 플레이어·소켓 행렬까지 곱해진 상태이므로 그 결합 행렬을 기준으로 스폰 위치를 잡았습니다." },
      { p: "문제는 삼각형을 무작위로 고르니 면이 작고 조밀한 곳에 파티클이 몰린 것이었습니다. 큰 면이든 작은 면이든 같은 확률로 뽑히기 때문입니다. 그래서 면적에 비례해 뽑히도록 각 삼각형의 면적을 누적합으로 저장하고 전체 면적 중 임의의 값을 lower_bound 이진탐색으로 찾아 해당 삼각형을 선택했습니다. 넓은 면일수록 더 자주 당첨되는 구조입니다." },
      { img: "content/works/img/04-gpu-particle/11.png", cap: "면적 가중치 선택으로 표면에 고르게 분포된 파티클 — 큰 면도 작은 면도 자연스럽게 채워집니다." },
      { p: "마지막으로 삼각형 '안에서의' 위치도 다듬어야 했습니다. 그냥 두면 넓은 삼각형은 가운데로 쏠리기 쉬워 바리센트릭 좌표로 면 위의 무작위 점을 구했습니다. 한 꼭짓점에서 나머지 두 꼭짓점으로 가는 비율(U, V)을 무작위로 정하되 U+V가 1을 넘지 않게 하면 삼각형 내부 어디에나 균일하게 분포시킬 수 있습니다." },
    ],
    links: [
      { label: "구조 설계 (1편)", href: "https://blog.naver.com/ridas_/223910255258" },
      { label: "표면 스폰 (2편)", href: "https://blog.naver.com/ridas_/223913107113" },
    ],
  },

  {
    title: "맵 에셋 배치 툴",
    category: "Tool",
    year: "2026",
    role: "Technical Artist",
    tools: ["Unity", "C#", "Editor Scripting"],
    cover: "assets/works/maze-place.png",   // TODO: 툴 UI 스크린샷(게임 에셋 안 보이게)
    credit: "팀 프로젝트 · 본인 제작",
    creditNote: "Maze 팀 프로젝트입니다. 팀의 요청을 받아 툴 설계와 구현을 제가 맡았습니다.",
    studyMd: "content/works/05-asset-placer.md",
    summary: "어느 씬에서든 스테이지를 꾸미고 결과는 Graphic 프리팹에만 저장하는 Unity 에디터 툴.",
    description:
      "Maze 스테이지 배치를 위해 만든 에디터 툴입니다. 프리팹을 열지 않고 캐릭터와 조명이 있는 씬에서 배치하되 " +
      "저장은 스테이지의 Graphic 프리팹에만 반영되도록 배치 화면과 저장 결과를 분리했습니다.",
    bullets: [
      "썸네일 브라우저 + 배치 컨트롤, 두 창 구성",
      "단축키 선택·스냅 정렬·복사/붙여넣기/Undo",
      "배치 결과는 Graphic 프리팹에만 저장",
      "MVP 패턴으로 기능 확장이 쉬운 구조",
    ],
    media: [{ type: "image", src: "assets/works/maze-place.png" }],
  },

  {
    title: "URP 툰 셰이딩",
    category: "Shader",
    year: "2026",
    role: "Technical Artist",
    tools: ["Unity", "URP", "Shader Graph", "HLSL"],
    cover: "assets/works/mob-toon.png",   // TODO: 중립 메쉬 적용 스크린샷
    credit: "팀 프로젝트 · 본인 제작",
    studyMd: "content/works/06-urp-toon.md",   // ← 셰이딩 파트 초안. 외곽선 파트는 자료 오면 추가
    summary: "Unity URP 환경에서 모바일 성능을 고려해 구현한 툰 셰이딩 — 셀 명암 + 외곽선.",
    description:
      "모바일(URP)에 맞춘 툰 셰이더입니다. 램프/계단 명암으로 셀 셰이딩을 구현하고 외곽선은 모바일 부하를 " +
      "고려해 노멀 압출 방식으로 처리했습니다. 모바일 GPU 예산 안에서 동작하도록 인스트럭션을 줄여 경량화했습니다.",
    bullets: [
      "램프 기반 셀 명암 (단계 음영)",
      "노멀 압출 외곽선 — 모바일 경량 방식",
      "URP Shader Graph·HLSL로 구현",
      "모바일 GPU 예산 내 최적화",
    ],
    media: [{ type: "image", src: "assets/works/mob-toon.png" }],
  },

  {
    title: "프로시저럴 던전 배치 툴",
    category: "Tool",
    year: "2026",
    role: "Technical Artist",
    tools: ["Unity", "C#"],
    cover: "assets/works/maze-proc.png",   // TODO: 배치 결과 스크린샷(중립)
    credit: "팀 프로젝트 · 본인 제작",
    creditNote: "바닥 가이드 메시가 제공되었고 벽·기둥 조각 키트는 아트팀에서 만들었습니다. 매번 반복되던 벽과 프랍들을 프로시저럴 배치 툴을 개발하여 자동화했습니다.",
    studyMd: "content/works/07-procedural.md",
    description:
      "던전 배경을 만들 때 조각을 손으로 하나하나 세우던 배치 작업을 반자동화한 Unity 툴입니다. 격자가 아닌 불규칙 " +
      "바닥에서 '한 면에만 속한 엣지'로 외곽 테두리를 뽑아 루프로 잇고 그 위를 줄자 커서 방식으로 밀며 조각을 세웁니다. " +
      "모든 랜덤을 시드와 좌표 해시에 묶어 재생성해도 사람이 보정한 결과가 유지되도록 했습니다.",
    bullets: [
      "격자 없는 불규칙 바닥에서 경계 엣지 추출 → 루프 (다층·섬 분리)",
      "줄자 커서로 벽·코너·기둥 배치 + 조각 피벗 자동 보정",
      "시드·좌표 해시로 재생성 결정성 / 구간·공간 존으로 지역 특색",
      "다트 던지기·클러스터 기반 바닥·벽면 장식 산포",
    ],
    media: [{ type: "image", src: "assets/works/maze-proc.png" }],
  },

  {
    title: "스프링 본 물리 툴",
    category: "Tool",
    year: "2026",
    role: "Technical Artist",
    tools: ["Unity", "C#"],
    cover: "assets/works/mob-physanim.png",   // TODO: 툴 UI/결과 스크린샷
    credit: "개인 R&D · 1인",
    studyMd: "content/works/08-physics.md",
    summary: "머리카락·치마의 흔들림을 Verlet 적분으로 직접 구현한 모바일용 스프링 본 툴.",
    description:
      "머리카락·치마 같은 2차 모션을 손 애니메이션 대신 물리로 처리하는 스프링 본 툴입니다. 상용 솔루션(MagicaCloth2)이 " +
      "있었지만 내부를 이해하려고 개인 프로젝트로 처음부터 구현했습니다. 본 체인을 위치만 가진 입자로 보고 속도를 저장하지 " +
      "않는 Verlet 적분을 써서 위치를 강제로 옮겨도 터지지 않게 만들었고 에디터에서 플레이 없이 바로 확인할 수 있게 했습니다.",
    bullets: [
      "본 체인을 입자로 보는 위치 기반 시뮬 (강체 대신 모바일 경량)",
      "속도를 저장 안 하는 Verlet 적분 → 위치 강제 이동에도 안 터짐",
      "뼈 길이 강제 고정 + 구·캡슐 충돌 밀어내기",
      "ExecuteAlways로 에디터에서 바로 프리뷰 + Physics Rig 셋업 창",
    ],
    media: [{ type: "image", src: "assets/works/mob-physanim.png" }],
  },

  {
    title: "모션 트레일",
    category: "VFX",
    year: "2026",
    role: "Technical Artist",
    tools: ["Unity", "URP", "C#", "HLSL"],
    cover: "assets/works/mob-trail.jpg",   // TODO: 중립 씬 잔상 스크린샷
    credit: "본인 제작",   // TODO: Maze 팀 작업인지 모바일 스핀오프(1인) 작업인지 확인 후 구체화
    studyMd: "content/works/09-motion-trail.md",
    summary: "회피 순간의 캐릭터 포즈를 BakeMesh로 정적 메시로 만들어 잔상으로 남깁니다. 고스트 슬롯을 미리 만들어 두는 풀링으로 런타임 할당을 없앴습니다.",
    description:
      "회피할 때 캐릭터 뒤에 남는 잔상(모션 트레일)입니다. 파티클로 모양을 흉내내는 대신 SkinnedMeshRenderer.BakeMesh로 " +
      "그 순간의 포즈를 정적 메시로 박제해 진짜 실루엣을 남겼고, 라이팅·그림자를 끈 Additive 단색으로 그렸습니다. " +
      "고스트 슬롯을 미리 만들어 놓는 풀링으로 런타임 할당과 첫 발동 " +
      "히치를 제거하고, 회피를 안 쓰는 동안에는 비용이 0이 되게 했습니다.",
    bullets: [
      "BakeMesh로 그 순간 포즈를 박제 → 진짜 캐릭터 실루엣",
      "라이팅·그림자를 끈 Additive 단색으로 그립니다.",
      "풀링 + 사전 생성 → 런타임 할당·첫 발동 히치 제거",
      "LateUpdate 두 박자(방출·페이드), 안 쓸 땐 0 비용",
    ],
    media: [{ type: "image", src: "assets/works/mob-trail.jpg" }],
  },

  {
    title: "언리얼 커스텀 셰이딩 모델",
    category: "Shader",
    year: "2025",
    role: "Technical Artist · Graphics",
    tools: ["Unreal Engine 5", "C++", "HLSL", "USF"],
    cover: "content/works/img/18-unreal-shadingmodel/41.png",   // 보스 몬스터 툰 적용 결과
    credit: "개인 R&D · 1인",
    creditNote: "엔진 파이프라인 연결은 직접 구현했고, 셰이딩 공식(ToonBxDF)은 공개 구현을 바탕으로 정리했습니다. 출처는 본문 끝 참고 자료에 적었습니다.",
    studyMd: "content/works/18-unreal-shadingmodel.md",
    summary: "언리얼 엔진 소스를 직접 수정해 추가한 커스텀 툰 셰이딩 모델. 머티리얼 값이 GBuffer를 거쳐 HLSL까지 도달하는 파이프라인을 직접 구현.",
    description:
      "언리얼 엔진 소스코드를 직접 고쳐 나만의 셰이딩 모델(MSM_Dongha)을 추가한 작업입니다. EMaterialShadingModel enum " +
      "등록부터 커스텀 데이터 핀 노출, GBuffer 렌더타겟 발송, HLSL의 ToonBxDF 분기까지 CPU에서 GPU로 이어지는 전체 " +
      "경로를 구현했습니다. CPU→GPU로 매 프레임 오가는 데이터라 사용 플래그를 1비트까지 압축했고, 툰 공식을 .usf로 " +
      "외부화해 엔진 재빌드 없이 룩을 조정할 수 있게 구조를 잡았습니다. 마지막으로 셀 셰이딩 외곽선 포스트프로세스를 " +
      "합쳐 보스 몬스터에 적용했습니다.",
    bullets: [
      "EMaterialShadingModel enum에 커스텀 모델 등록 (사용 플래그 1비트 압축)",
      "CustomData 핀(DonghaSpecular·DonghaOffset)을 float4로 GPU 전달",
      "GBuffer 렌더타겟 발송 + HLSL switch → ToonBxDF 셰이딩",
      "툰 공식 .usf 외부화로 엔진 재빌드 없이 룩 조정",
      "셀 셰이딩 외곽선 포스트프로세스 합성",
    ],
    media: [
      { type: "image", src: "content/works/img/18-unreal-shadingmodel/44.png" },
    ],
    links: [
      { label: "전체 글 보기", href: "https://blog.naver.com/ridas_/224075960293" },
    ],
  },

  {
    title: "공격 예고장판 시스템",
    category: "VFX",
    year: "2026",
    role: "Technical Artist",
    tools: ["Unity", "URP", "HLSL", "C#"],
    cover: "assets/works/mob-sdf.jpg",   // TODO: 장판 효과 스크린샷
    credit: "본인 제작",   // TODO: Maze 팀 작업인지 모바일 스핀오프(1인) 작업인지 확인 후 구체화
    studyMd: "content/works/11-sdf-aoe.md",
    summary: "보스와 몹의 공격 범위를 바닥에 미리 보여 주는 예고 장판입니다.",
    description:
      "보스·몹 공격을 바닥에 미리 알려 주는 예고장판 시스템입니다. 원·부채꼴·사각을 담은 하나의 모양 데이터를 " +
      "셰이더 렌더와 데미지 판정이 함께 써서 보이는 범위와 맞는 범위가 어긋나지 않게 했고, 타격 순간 채움을 100%로 " +
      "강제 스냅해 타격 타이밍을 코드로 보장했습니다. 쿼드를 미리 만들어 두고 돌려써서 " +
      "여러 장판이 동시에 떠도 런타임에 새로 만들지 않습니다.",
    bullets: [
      "장판을 그리는 셰이더와 데미지 판정이 같은 모양 데이터를 씁니다. 보이는 범위와 맞는 범위가 어긋나지 않습니다.",
      "장판이 다 차오르는 순간에 타격이 들어가도록 맞췄습니다.",
      "장판을 그리는 쪽은 데미지를 주지 않고 공격하는 쪽이 판정합니다. 몹은 애니메이션 이벤트만 꽂으면 되고 보스는 코드로 직접 제어합니다.",
      "장판 오브젝트를 미리 만들어 두고 돌려씁니다. 여러 장이 동시에 떠도 런타임에 새로 만들지 않습니다.",
    ],
    media: [{ type: "image", src: "assets/works/mob-sdf.jpg" }],
  },

  {
    title: "Unity 최적화 툴킷",
    category: "Tool",
    year: "2026",
    role: "Technical Artist",
    tools: ["Unity", "C#", "Editor Scripting"],
    cover: "assets/works/maze-texcheck.png",   // TODO: 툴 UI 스크린샷
    credit: "팀 프로젝트 · 본인 제작",
    studyMd: "content/works/19-unity-toolkit.md",
    // 본문(영상+설명)은 studyMd에서 렌더. media 갤러리는 study가 있으면 표시되지 않음.
  },

  {
    title: "PBR 셰이더 & 라이팅",
    category: "Shader",
    year: "2025",
    role: "Technical Artist · Lighting",
    tools: ["DirectX 11", "HLSL", "C++"],
    cover: "assets/works/lop-pbr.jpg",   // TODO: 중립 씬 재질·라이팅 스크린샷
    credit: "팀 프로젝트 · 본인 담당",
    creditNote: "「P의 거짓」 모작 팀 프로젝트입니다. PBR 셰이더와 라이팅을 담당했습니다.",
    summary: "DirectX 환경에서 직접 구현한 PBR 셰이더.",
    description:
      "「P의 거짓」의 어둡고 무거운 룩을 재현하기 위해 DirectX 환경에서 직접 구현한 PBR 셰이더입니다. " +
      "메탈릭·러프니스 기반 물리 셰이딩으로 재질감을 살리고 원작의 분위기를 좌우하는 빛 디자인을 핵심으로 " +
      "보고 라이팅까지 직접 설계했습니다.",
    bullets: [
      "Cook-Torrance BRDF(D·G·F) 직접 구현 — 마이크로패싯 기반 스펙큘러",
      "메탈릭 워크플로: F0 보간 + kS/kD 에너지 보존 분배",
      "노말맵 범위 변환 + TBN으로 탄젠트→월드 공간 조명 계산",
      "암부 전용 fill light·스카이라이트로 원작 무드 재현",
      "ACES 톤매핑 → 감마 보정 → LUT 색보정 파이프라인",
    ],
    studyMd: "content/works/14-pbr-lighting.md",
    media: [
      { type: "youtube", id: "umvKZkgY9RQ" },   // 약 40분 분량 상세 영상
      { type: "image", src: "assets/works/lop-pbr.jpg" },
    ],
    links: [
      { label: "PBR 셰이더 연구", href: "https://blog.naver.com/ridas_/223907888187" },
      { label: "PBR 셰이더 심화", href: "https://blog.naver.com/ridas_/224066690277" },
    ],
  },

  {
    title: "디퍼드 렌더링 · 라이팅",
    category: "Rendering",
    year: "2025",
    role: "Graphics · Tech Art",
    tools: ["DirectX 11", "HLSL", "C++"],
    cover: "assets/works/thumb-deferred.jpg",   // 전용 썸네일(4:3). 없으면 제목 플레이스홀더로 대체
    credit: "1인 개발",
    summary: "DirectX 11에서 디퍼드 렌더링을 직접 구현했습니다.",
    description:
      "화면을 한 번에 칠하는 대신 렌더 타겟을 가로채 디퓨즈·노말·라이트를 멀티 렌더 타겟(MRT)에 나눠 그린 뒤 " +
      "마지막에 합성하는 디퍼드 렌더링을 직접 구현했습니다. 노말맵은 TBN 행렬로 탄젠트→월드 공간으로 변환해 넘기고 " +
      "N·L 디퓨즈에 앰비언트를 더해 암부가 죽지 않게 했으며 반사벡터(R = 2(N·L)N − L)로 스페큘러를 계산했습니다. " +
      "스페큘러에 필요한 픽셀의 월드 좌표는 뎁스 버퍼에서 NDC→뷰→월드로 역변환해 복원했습니다.",
    bullets: [
      "렌더 타겟 가로채기 → MRT(디퓨즈·노말·라이트) 분리 후 합성",
      "TBN 행렬로 노말맵을 탄젠트→월드 공간 변환",
      "N·L 디퓨즈 + 앰비언트 + 스페큘러(반사벡터) 라이팅",
      "뎁스 버퍼에서 NDC→뷰→월드 역변환으로 픽셀 월드 좌표 복원",
      "하늘·파티클 등 라이팅 제외 그룹을 별도 분리 처리",
    ],
    studyMd: "content/works/15-deferred.md",
    media: [
      { type: "image", src: "content/works/img/15-deferred/05.png" },
    ],
    links: [
      { label: "후처리 개념 (1편)", href: "https://blog.naver.com/ridas_/223912874757" },
      { label: "MRT 구성 (2편)", href: "https://blog.naver.com/ridas_/223918326412" },
      { label: "라이팅·뎁스 복원 (3편)", href: "https://blog.naver.com/ridas_/223919726523" },
    ],
  },

  {
    title: "그림자 매핑 & SSAO",
    category: "Rendering",
    year: "2025",
    role: "Graphics · Tech Art",
    tools: ["DirectX 11", "HLSL", "C++"],
    cover: "assets/works/thumb-shadowssao.jpg",   // 전용 썸네일(4:3). 없으면 제목 플레이스홀더로 대체
    credit: "1인 개발",
    summary: "빛에서 본 깊이로 그림자를 만들고 SSAO로 구석과 틈새를 자연스럽게 어둡게 한 음영 표현.",
    description:
      "그림자는 빛의 방향에서 장면을 찍은 뎁스 버퍼를 만들고 기존 화면의 픽셀을 같은 빛 공간으로 변환해 깊이를 " +
      "비교하는 섀도우 매핑으로 구현했습니다. 가려진 픽셀은 곱셈 블렌딩으로 어둡게 처리합니다. 여기에 더해 직접광만으로는 " +
      "표현되지 않는 구석·틈의 간접광 차단을 위해 SSAO를 구현했습니다. 뷰 공간 노말·포지션을 렌더 타겟에 저장한 뒤 " +
      "픽셀마다 반구 형태로 16방향을 샘플링해 더 앞에 면이 있으면 폐색값을 누적하는 방식입니다.",
    bullets: [
      "빛 시점 뎁스 렌더 타겟 → 빛 공간 깊이 비교로 섀도우 매핑",
      "가려진 픽셀 곱셈 블렌딩으로 그림자 합성",
      "뷰 공간 노말·포지션 기반 SSAO (원근 왜곡 회피)",
      "TBN으로 정렬한 반구 16방향 샘플링 + 깊이 비교 폐색 누적",
      "[unroll] 루프 전개로 픽셀 셰이더 샘플링 최적화",
    ],
    studyMd: "content/works/16-shadow-ssao.md",
    media: [
      { type: "image", src: "content/works/img/16-shadow-ssao/09.png" },
    ],
    links: [
      { label: "그림자 매핑", href: "https://blog.naver.com/ridas_/223930081038" },
      { label: "SSAO", href: "https://blog.naver.com/ridas_/223934613803" },
    ],
  },
];
