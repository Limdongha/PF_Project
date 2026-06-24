/* =========================================================================
   main.js — 동작 로직 (콘텐츠는 data.js에서 수정하세요)
   ========================================================================= */

/* 색상 풀: 플레이스홀더 그라데이션용 */
const PH_GRADS = [
  "linear-gradient(135deg,#7c5cff,#18e0c8)",
  "linear-gradient(135deg,#ff5c8a,#7c5cff)",
  "linear-gradient(135deg,#18e0c8,#3b82f6)",
  "linear-gradient(135deg,#f59e0b,#ff5c8a)",
  "linear-gradient(135deg,#22d3ee,#7c5cff)",
  "linear-gradient(135deg,#a78bfa,#34d399)",
];
const phFor = (i) => PH_GRADS[i % PH_GRADS.length];

/* 스크롤 등장 옵저버 — renderWorks()가 일찍 호출하므로 최상단에서 선언 (TDZ 방지) */
let revealObserver = null;

/* 모션 최소화 선호 여부 — showMedia()가 그리드 영상 자동재생 제어에 사용.
   renderProjects()가 showMedia()를 일찍 호출하므로 최상단에서 선언 (TDZ 방지). */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Hero background ----------
   우선순위: 동영상 파일(hero.mp4/webm) > 유튜브 링크 > 이미지(hero.png)
   - 파일이 실제로 있으면 그 파일을 재생, 없으면 유튜브, 그것도 없으면 이미지.
   - 모션 최소화(prefers-reduced-motion) 사용자에겐 항상 정지 이미지. */
(async function renderHeroBg() {
  const hero = document.getElementById("hero");
  const fileVideo = hero.querySelector(".hero__bg--video");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1) 동영상 파일 우선 — 실제 존재 확인
  if (fileVideo && !reduced) {
    const hasFile =
      (await fileExists("assets/img/hero.mp4")) ||
      (await fileExists("assets/img/hero.webm"));
    if (hasFile) return; // 파일 영상 사용 (이미 DOM에 autoplay 상태)
  }
  // 파일 없음 / 모션최소화 → 파일 영상 요소 제거
  if (fileVideo) fileVideo.remove();

  // 2) 유튜브 링크
  if (!reduced && typeof HERO !== "undefined" && HERO.youtube) {
    const raw = HERO.youtube.trim();
    const m = raw.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
    const id = m ? m[1] : raw;
    if (/^[\w-]{11}$/.test(id)) {
      const params = new URLSearchParams({
        autoplay: "1", mute: "1", controls: "0", loop: "1", playlist: id,
        playsinline: "1", rel: "0", modestbranding: "1",
        iv_load_policy: "3", disablekb: "1", fs: "0",
      });
      const wrap = document.createElement("div");
      wrap.className = "hero__yt";
      wrap.setAttribute("aria-hidden", "true");
      wrap.innerHTML =
        `<iframe src="https://www.youtube-nocookie.com/embed/${id}?${params}" title=""` +
        ` frameborder="0" allow="autoplay; encrypted-media; picture-in-picture"></iframe>`;
      hero.appendChild(wrap);
      return;
    }
  }
  // 3) 아무것도 없으면 이미지(hero.png)가 그대로 노출됨

  // 파일 존재 확인 (HEAD 요청). file:// 등에서 실패하면 false 로 간주.
  function fileExists(url) {
    return fetch(url, { method: "HEAD" })
      .then((r) => r.ok)
      .catch(() => false);
  }
})();

/* ---------- Hero stats ---------- */
(function renderStats() {
  const el = document.getElementById("hero-stats");
  el.innerHTML = PROFILE.stats
    .map((s) => `<li><span class="v">${s.value}</span><span class="l">${s.label}</span></li>`)
    .join("");
})();

/* ---------- Contacts ---------- */
(function renderContacts() {
  const el = document.getElementById("contact-list");
  el.innerHTML = CONTACTS.map(
    (c) => `<li><a href="${c.href}" target="_blank" rel="noopener">
      <span class="k">${c.label}</span><span class="v">${c.value} →</span></a></li>`
  ).join("");
})();

/* ---------- Approach (3-column band) ---------- */
(function renderApproach() {
  const el = document.getElementById("approach-cols");
  if (!el || typeof APPROACH === "undefined") return;
  const ICONS = {
    // 얇은 라인 SVG (24x24, currentColor)
    shader: '<path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="1.2" fill="none"/><circle cx="8" cy="6" r="1.6" fill="currentColor"/><circle cx="15" cy="12" r="1.6" fill="currentColor"/><circle cx="10" cy="18" r="1.6" fill="currentColor"/>',
    vfx: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M18 6l-2.5 2.5M6 18l2.5-2.5M18 18l-2.5-2.5" stroke="currentColor" stroke-width="1.2" fill="none"/><circle cx="12" cy="12" r="2.4" stroke="currentColor" stroke-width="1.2" fill="none"/>',
    tool: '<path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" stroke-width="1.2" fill="none"/><path d="M17 15l2 2 3-3.5" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  };
  el.innerHTML = APPROACH.map(
    (a) => `<div class="approach__col reveal">
      <span class="approach__icon"><svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">${ICONS[a.icon] || ICONS.shader}</svg></span>
      <h3 class="approach__title">${a.title}</h3>
      <p class="approach__text">${a.text}</p>
    </div>`
  ).join("");
})();

/* ---------- Skills ---------- */
(function renderSkills() {
  const el = document.getElementById("skills-grid");
  el.innerHTML = SKILLS.map(
    (g) => `<div class="skill-group reveal">
      <h3>${g.group}</h3>
      <ul>${g.items.map((i) => `<li>${i}</li>`).join("")}</ul>
    </div>`
  ).join("");
})();

/* ---------- Projects (참여/제작 타이틀) ---------- */
const projGrid = document.getElementById("projects-grid");

function renderProjects() {
  if (!projGrid || typeof PROJECTS === "undefined") return;
  projGrid.innerHTML = PROJECTS.map((p, i) => {
    const sub = [p.role, p.year].filter(Boolean).join(" · ");
    return `<article class="tile tile--project reveal" data-project="${i}" tabindex="0" role="button" aria-label="${p.title} 상세 보기">
      <div class="tile__media">${showMedia(p, i)}</div>
      <div class="tile__overlay">
        <span class="tile__cat">${p.platform || "Project"}</span>
        <h3 class="tile__title">${p.title}</h3>
        ${sub ? `<span class="tile__sub">${sub}</span>` : ""}
        <span class="tile__view">자세히 보기 →</span>
      </div>
    </article>`;
  }).join("");
  observeReveals();
}
renderProjects();

let projDragged = false; // 드래그로 스크롤한 직후의 클릭(모달 열림)을 막기 위한 플래그

if (projGrid) {
  projGrid.addEventListener("click", (e) => {
    if (projDragged) return;                       // 방금 드래그였으면 모달 열지 않음
    const t = e.target.closest("[data-project]");
    if (t) openProjectModal(+t.dataset.project);
  });
  projGrid.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const t = e.target.closest("[data-project]");
    if (t) { e.preventDefault(); openProjectModal(+t.dataset.project); }
  });

  // 마우스 드래그로 가로 스크롤 (터치/트랙패드는 네이티브 스크롤 사용)
  const rowWrap = document.getElementById("projects-rowwrap");
  let down = false, startX = 0, startLeft = 0;
  projGrid.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    down = true; projDragged = false;
    startX = e.clientX; startLeft = projGrid.scrollLeft;
    projGrid.classList.add("dragging");
  });
  document.addEventListener("pointermove", (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 6) projDragged = true;
    projGrid.scrollLeft = startLeft - dx;
  });
  document.addEventListener("pointerup", () => {
    if (!down) return;
    down = false;
    projGrid.classList.remove("dragging");
  });

  // 스크롤 힌트(오른쪽 페이드 + 라벨) 상태 갱신
  function updateRowHint() {
    if (!rowWrap) return;
    const max = projGrid.scrollWidth - projGrid.clientWidth;
    rowWrap.classList.toggle("no-scroll", max <= 4);     // 스크롤 필요 없음(카드 다 보임)
    rowWrap.classList.toggle("at-end", projGrid.scrollLeft >= max - 2);
    rowWrap.classList.toggle("scrolled", projGrid.scrollLeft > 8);
  }
  projGrid.addEventListener("scroll", updateRowHint, { passive: true });
  window.addEventListener("resize", updateRowHint);
  updateRowHint();
}

/* ---------- Works showcase + filters ---------- */
const grid = document.getElementById("showcase");

function showMedia(w, i) {
  // cover 가 .mp4/.webm 이면 무음 루프 <video>, 그 외(이미지·gif)는 <img>.
  // 로드 실패 시 둘 다 그라데이션 플레이스홀더로 교체.
  const ph = `<div class="tile__ph" style="background:${phFor(i)}">${w.title}</div>`;
  if (!w.cover) return ph;
  const fallback = `this.outerHTML='<div class=&quot;tile__ph&quot; style=&quot;background:${phFor(i)}&quot;>${w.title}</div>'`;

  if (/\.(mp4|webm)(\?.*)?$/i.test(w.cover)) {
    // 모션 최소화 사용자: 자동재생 끄고 첫 프레임만(=정지) 노출
    const auto = prefersReducedMotion ? "" : "autoplay loop";
    return `<video src="${w.cover}" ${auto} muted playsinline preload="metadata"
      aria-label="${w.title}" onerror="${fallback}"></video>`;
  }
  return `<img src="${w.cover}" alt="${w.title}" loading="lazy" onerror="${fallback}">`;
}

function renderWorks(filter = "All") {
  const list = WORKS.filter((w) => filter === "All" || w.category === filter);
  grid.innerHTML = list
    .map((w) => {
      const i = WORKS.indexOf(w);
      return `<article class="tile reveal" data-open="${i}" tabindex="0" role="button" aria-label="${w.title} 상세 보기">
        <div class="tile__media">
          ${showMedia(w, i)}
        </div>
        <div class="tile__overlay">
          <span class="tile__cat">${w.category}</span>
          <h3 class="tile__title">${w.title}</h3>
          <span class="tile__view">Case study 보기 →</span>
        </div>
      </article>`;
    })
    .join("");
  observeReveals();
}

(function renderFilters() {
  const el = document.getElementById("filters");
  el.innerHTML = CATEGORIES.map(
    (c, i) => `<button class="${i === 0 ? "active" : ""}" data-cat="${c}">${c}</button>`
  ).join("");
  el.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    el.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderWorks(btn.dataset.cat);
  });
})();

renderWorks();

/* ---------- Modal ---------- */
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");

function galleryHTML(w) {
  if (!w.media || !w.media.length) {
    return `<div class="m-gallery"><div class="m-ph" style="background:${phFor(Math.max(0, WORKS.indexOf(w)))}">미디어를 data.js의 media에 추가하세요</div></div>`;
  }
  return `<div class="m-gallery">${w.media
    .map((m) => {
      if (m.type === "youtube") {
        // id 에 영상 ID 또는 전체 링크 둘 다 허용
        const raw = (m.id || m.src || "").trim();
        const mm = raw.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
        const id = mm ? mm[1] : raw;
        const params = new URLSearchParams({ rel: "0", modestbranding: "1", playsinline: "1" });
        return `<div class="m-embed"><iframe src="https://www.youtube-nocookie.com/embed/${id}?${params}"
          title="${w.title}" frameborder="0" loading="lazy"
          allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>`;
      }
      if (m.type === "video") {
        return `<video src="${m.src}" controls playsinline></video>`;
      }
      const g = phFor(Math.max(0, WORKS.indexOf(w)));
      return `<img src="${m.src}" alt="${w.title}"
        onerror="this.outerHTML='<div class=&quot;m-ph&quot; style=&quot;background:${g}&quot;>${w.title}</div>'">`;
    })
    .join("")}</div>`;
}

function openModalShell() {
  modal.scrollTop = 0;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  const panel = modal.querySelector(".modal__panel");
  if (panel) panel.scrollTop = 0;
}

// 케이스 스터디: 이미지+캡션을 본문 순서대로 배치 (study 배열이 있으면 갤러리/요약 대신 사용)
function studyHTML(w) {
  return `<div class="m-study">${w.study
    .map((b) => {
      if (b.h) return `<h3 class="m-subhead">${b.h}</h3>`;
      if (b.p) return `<p class="m-desc">${b.p}</p>`;
      if (b.img)
        return `<figure class="m-fig"><img src="${b.img}" alt="${b.cap || w.title}" loading="lazy"
          onerror="this.closest('.m-fig').style.display='none'">${b.cap ? `<figcaption>${b.cap}</figcaption>` : ""}</figure>`;
      return "";
    })
    .join("")}</div>`;
}

function openModal(i) {
  const w = WORKS[i];
  modalBody.innerHTML = `
    <p class="m-cat">${w.category}</p>
    <h2 class="m-title">${w.title}</h2>
    <div class="m-meta">
      <div><span class="k">Year</span><span class="v">${w.year}</span></div>
      <div><span class="k">Role</span><span class="v">${w.role}</span></div>
      <div><span class="k">Tools</span><span class="v">${w.tools.join(", ")}</span></div>
    </div>
    ${w.summary ? `<p class="m-lead">${w.summary}</p>` : ""}
    ${w.study && w.study.length
      ? studyHTML(w)
      : `${galleryHTML(w)}<p class="m-desc">${w.description}</p>${w.bullets && w.bullets.length ? `<ul class="m-bullets">${w.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>` : ""}`}
    <div class="m-tools">${w.tools.map((t) => `<span>${t}</span>`).join("")}</div>
    ${w.links && w.links.length
      ? `<div class="m-linkrow">${w.links
          .map((l) => `<a href="${l.href}" class="btn btn--primary m-link" target="_blank" rel="noopener">${l.label} ↗</a>`)
          .join("")}</div>`
      : ""}
  `;
  openModalShell();
}

function openProjectModal(i) {
  const p = PROJECTS[i];
  const related = (p.related || []).map((wi) => WORKS[wi]).filter(Boolean);
  modalBody.innerHTML = `
    <p class="m-cat">${p.platform || "Project"}</p>
    <h2 class="m-title">${p.title}</h2>
    <div class="m-meta">
      <div><span class="k">Year</span><span class="v">${p.year || "—"}</span></div>
      <div><span class="k">Role</span><span class="v">${p.role || "—"}</span></div>
      ${p.studio ? `<div><span class="k">Studio</span><span class="v">${p.studio}</span></div>` : ""}
    </div>
    ${p.notice ? `<div class="m-notice">${p.notice}</div>` : ""}
    ${galleryHTML(p)}
    <p class="m-desc">${p.description || p.summary || ""}</p>
    ${p.contribution && p.contribution.length
      ? `<h3 class="m-subhead">담당 · 기여</h3><ul class="m-bullets">${p.contribution.map((b) => `<li>${b}</li>`).join("")}</ul>`
      : ""}
    ${related.length
      ? `<h3 class="m-subhead">사용 기술</h3><div class="m-related">${related
          .map((w) => `<button type="button" class="m-related__item" data-open-work="${WORKS.indexOf(w)}">${w.title} →</button>`)
          .join("")}</div>`
      : ""}
    ${p.link
      ? `<a href="${p.link}" class="btn btn--primary m-link" target="_blank" rel="noopener">${p.linkLabel || "프로젝트 보기"} ↗</a>`
      : ""}
  `;
  openModalShell();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  modalBody.innerHTML = "";
}

grid.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-open]");
  if (trigger) openModal(+trigger.dataset.open);
});
grid.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const trigger = e.target.closest("[data-open]");
  if (trigger) { e.preventDefault(); openModal(+trigger.dataset.open); }
});
modal.addEventListener("click", (e) => {
  const rel = e.target.closest("[data-open-work]");
  if (rel) { openModal(+rel.dataset.openWork); return; } // 프로젝트 모달 → 기술 쇼케이스 모달로 전환
  if (e.target.dataset.close !== undefined) closeModal();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("open")) closeModal(); });

/* ---------- Nav: scroll state, active link, mobile menu ---------- */
const nav = document.getElementById("nav");
const navLinks = document.getElementById("nav-links");
const navToggle = document.getElementById("nav-toggle");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 30);
});

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  nav.classList.toggle("menu-open");
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    nav.classList.remove("menu-open");
  })
);

/* Active section highlight */
const sections = ["projects", "works", "skills", "about", "contact"].map((id) => document.getElementById(id)).filter(Boolean);
const linkFor = {};
navLinks.querySelectorAll("a").forEach((a) => {
  const id = a.getAttribute("href").slice(1);
  linkFor[id] = a;
});
const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      const a = linkFor[en.target.id];
      if (a && en.isIntersecting) {
        Object.values(linkFor).forEach((l) => l.classList.remove("active"));
        a.classList.add("active");
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => navObserver.observe(s));

/* ---------- Scroll reveal ----------
   진행적 향상(progressive enhancement): 기본은 보이게 두고, JS가 정상 동작할 때만
   숨겼다가 스크롤 시 나타나게 한다. (JS가 실패해도 콘텐츠가 사라지지 않음) */
function observeReveals() {
  const noIO = !("IntersectionObserver" in window);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (noIO || reduced) {
    // 애니메이션 미지원/비선호 → 그냥 전부 보이게
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    return;
  }
  document.documentElement.classList.add("reveal-on"); // 이때부터 CSS가 .reveal을 숨김
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            revealObserver.unobserve(en.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );
  }
  document.querySelectorAll(".reveal:not(.in)").forEach((el) => revealObserver.observe(el));
}
observeReveals();

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
