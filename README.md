# Technical Artist 포트폴리오

순수 HTML / CSS / JS 로 만든 게임 테크니컬 아티스트 포트폴리오. 빌드 도구 없이 바로 열립니다.

## 미리보기

`index.html` 을 더블클릭하면 브라우저에서 바로 열립니다.
(영상/이미지가 잘 안 보이면 로컬 서버로 여는 걸 권장 — 아래 참고)

```bash
# 폴더에서 로컬 서버 띄우기 (둘 중 하나)
python -m http.server 8000      # → http://localhost:8000
npx serve .
```

## 수정 방법 (대부분 여기만 고치면 됩니다)

모든 텍스트·프로젝트·연락처는 **`js/data.js`** 한 파일에 모여 있습니다.

| 바꾸고 싶은 것 | 위치 |
|---|---|
| 이름·통계 숫자 | `js/data.js` → `PROFILE` |
| 이메일·SNS 링크 | `js/data.js` → `CONTACTS` |
| 스킬/도구 목록 | `js/data.js` → `SKILLS` |
| 필터 카테고리 | `js/data.js` → `CATEGORIES` |
| 프로젝트 | `js/data.js` → `WORKS` |
| 소개(About) 문구 | `index.html` 의 `#about` 영역 |
| 상단 로고/제목의 `NAME` | `index.html` |

### 프로젝트 추가하기

`WORKS` 배열에 객체 하나를 추가하면 카드가 생깁니다:

```js
{
  title: "프로젝트 이름",
  category: "Shader",            // CATEGORIES 중 하나
  year: "2025",
  role: "Shader / Look-dev",
  tools: ["Unreal", "HLSL"],
  cover: "assets/works/내이미지.jpg",   // 없으면 자동 그라데이션
  summary: "카드에 보이는 한 줄 요약",
  description: "모달(상세창) 설명 문단",
  bullets: ["성과 1", "성과 2"],
  media: [                                // 상세창 갤러리 (선택)
    { type: "image", src: "assets/works/shot1.jpg" },
    { type: "video", src: "assets/works/demo.mp4" }
  ],
}
```

### 이미지 / 영상 갈아끼우기 (가장 중요)

작업물 이미지는 **PNG 파일을 같은 이름으로 덮어쓰면** 그대로 교체됩니다.
코드를 안 건드려도 돼요. 권장 크기 **1600×1000** (16:10).

| 슬롯 | 파일 경로 |
|---|---|
| 랜딩(히어로) 큰 배경 | `assets/img/hero.png` |
| 1. 워터 셰이더 | `assets/works/water.png` |
| 2. 절차적 VFX | `assets/works/vfx.png` |
| 3. 파이프라인 툴 | `assets/works/tool.png` |
| 4. 환경 라이팅 | `assets/works/light.png` |
| 5. 디졸브 R&D | `assets/works/rnd.png` |
| 6. 헤어 셰이더 | `assets/works/hair.png` |

- 새 이름으로 넣고 싶으면 `js/data.js` 의 `cover` / `media` 경로만 바꾸면 됩니다.
- **이미지가 없으면** 자동으로 색 그라데이션 플레이스홀더가 표시됩니다 (검은 화면 안 됨).
- 영상/GIF: `media` 배열에 `{ type:"video", src:"assets/works/demo.mp4" }` 추가.
- 이력서는 `assets/resume.pdf` 로 넣으면 다운로드 버튼이 동작합니다.

### 히어로(메인) 배경에 영상 넣기

메인 섹션 배경은 **이미지 위에 영상을 얹는** 구조입니다. 코드 수정 없이 파일만 넣으면 됩니다.

1. 배경 영상을 **`assets/img/hero.mp4`** 로 저장 (가능하면 더 작은 `assets/img/hero.webm` 도 함께).
2. `assets/img/hero.png` 는 그대로 두기 — **포스터/폴백**으로 쓰입니다.
   - 영상 파일이 없으면 → 이 이미지가 그대로 보임
   - 영상 로딩 중 / 모션 최소화 설정 사용자 → 이 이미지가 보임
3. 영상은 자동으로 **음소거·자동재생·무한반복**됩니다 (브라우저 정책상 음소거 필수).

**영상 만들 때 권장 (배포 고려):**
- 길이 5~15초 루프, 음소거, 720p~1080p, **목표 용량 8MB 이하** (히어로는 가볍게).
- 포맷: 호환성용 `mp4`(H.264) + 용량 작은 `webm`(VP9) 둘 다 두면 베스트.
- `ffmpeg` 압축 예시:
  ```bash
  # mp4 (H.264, 음성 제거, 1080p)
  ffmpeg -i 원본.mov -an -vf "scale=1920:-2" -c:v libx264 -crf 26 -preset slow -movflags +faststart assets/img/hero.mp4
  # webm (VP9, 더 가벼움)
  ffmpeg -i 원본.mov -an -vf "scale=1920:-2" -c:v libvpx-vp9 -crf 34 -b:v 0 assets/img/hero.webm
  ```
  - `-an` 음성 제거, `-crf` 숫자가 클수록 용량↓품질↓, `+faststart` 는 웹에서 빨리 재생 시작.

> 현재 들어있는 PNG는 예시용으로 `tools/gen_art.py`(Python+Pillow)가 생성한 추상 아트입니다.
> 본인 작업물로 교체하면 됩니다. (예시 아트를 다시 만들려면 `python tools/gen_art.py`)

## 배포 (나중에 결정)
- **GitHub Pages**: 레포에 올리고 Settings → Pages → main 브랜치 / root.
  - ⚠️ 파일 1개당 100MB 제한, 레포 권장 1GB 이하 → **영상은 꼭 압축**해서 올릴 것.
- **Netlify / Vercel**: 폴더를 드래그&드롭 하거나 레포 연결. 빌드 설정 없음(정적). 용량 여유 많음.

### 영상이 많거나 무거우면 (외부 호스팅)
짧은 음소거 배경 루프는 위처럼 **직접 호스팅**(autoplay·무브랜딩)이 best.
하지만 작품 데모가 길거나 여러 개라 용량이 크면, 영상만 외부에 두고 링크하는 게 좋습니다:
- **YouTube/Vimeo(미등록 업로드)** 임베드, 또는 **Cloudflare Stream / Bunny Stream** 같은 영상 CDN.
- 작품 상세(모달)에는 `media` 에 임베드를 넣거나, 썸네일 + "영상 보기" 링크 방식으로 처리하면 됩니다(원하면 도와드릴게요).

문의/수정 필요하면 언제든 말씀해 주세요.
