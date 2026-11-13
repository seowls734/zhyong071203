// =========================================================
//  영어 번역 (한국어 원문은 index.html 안에 있음)
//  data-i18n="키" 가 붙은 요소가 아래 내용으로 바뀝니다.
// =========================================================
const en = {
  "name": "Haoyong Zhang",
  "theme.paper": "Paper",
  "theme.blue": "Blueprint",
  "nav.profile": "Profile",
  "nav.journey": "Journey",
  "nav.contact": "Contact",
  "sh.cover": "COVER",
  "sh.profile": "FLOOR PLAN",
  "sh.journey": "SECTION",
  "sh.contact": "TITLE BLOCK",
  "cover.kicker": "PROJECT — A PERSON UNDER CONSTRUCTION",
  "intro.title": "Hello,<br />I'm <em>Haoyong</em>.",
  "intro.lead": "My <b>foundation</b> was laid in China, and I am now <b>adding floors</b> in Korea.<br />I'm Haoyong, 20, and I think and speak in two languages: Chinese and Korean.",
  "ld.status": "Plotting drawings",
  "ld.skip": "Click to skip",
  "kr.k": "Life in Korea",
  "kr.pre": "Year",
  "kr.post": "",
  "brief.title": "DESIGN BRIEF",
  "b.name.k": "Building",
  "b.name.v": "Haoyong Zhang (20, groundbreaking 2007)",
  "b.found.k": "Foundation",
  "b.found.v": "China · native Chinese",
  "b.ext.k": "Extension",
  "b.ext.v": "Korea · since 2021",
  "b.site.k": "Site",
  "b.site.v": "Hwaseong, Gyeonggi-do",
  "b.use.k": "Use",
  "b.use.v": "Student",
  "b.done.k": "Completion",
  "b.done.v": "Top floor: a high school teacher — under construction",
  "foot.mat": "Materials: 2 languages · 3 certificates · 1 student",
  "intro.cta": "Open the drawings ↓",
  "intro.cta2": "Contact me",
  "profile.title": "Floor plan of a house called Haoyong",
  "profile.desc": "Every room holds a part of my story.",
  "story.title": "My story",
  "story.q": "“People are like buildings: the stronger the foundation, the higher they can rise.”",
  "story.p1":
    "I laid my foundation in <strong>China in 2007</strong>, and in <strong>2021</strong> I moved to Korea and started building new floors. I now live in <strong>Hwaseong, Gyeonggi-do</strong>.",
  "story.p2":
    "Starting over in a new language, I climbed all the way to <strong>TOPIK Level 6, the highest level</strong>. For documents and presentations, I prepared with ITQ Hangul and ITQ PowerPoint certificates.",
  "story.p3": "On my days off, I run across a soccer field or explore game worlds that someone else designed.",
  "hobby.soccer.d": "105 × 68 m — my favorite floor plan",
  "hobby.game.d": "Virtual spaces someone designed",
  "stat.unit": "years old",
  "stat.sub": "Male · Born 2007",
  "flag.v": "China",
  "flag.k": "Nationality",
  "place.v": "Hwaseong, Gyeonggi",
  "place.k": "Lives in",
  "hobby.title": "Hobbies",
  "hobby.soccer": "Soccer",
  "hobby.game": "Computer games",
  "lang.title": "Languages",
  "lang.zh": "Chinese",
  "lang.ko": "Korean",
  "lang.native": "Native",
  "lang.g6": "Level 6",
  "cert.title": "Certificates",
  "cert.topik": "TOPIK (Test of Proficiency in Korean)",
  "cert.niied": "NIIED, Korea",
  "cert.g6": "Level 6",
  "cert.itqHwp": "ITQ Hangul",
  "cert.itqPpt": "ITQ PowerPoint",
  "cert.kpc": "Korea Productivity Center",
  "cert.gB": "Grade B",
  "cert.gC": "Grade C",
  "journey.title": "Built one floor at a time",
  "journey.desc": "Step by step from the ground floor. The upper floors are still under construction.",
  "t1.h": "1F — Foundation work in China",
  "t1.p": "Born and raised in China. My native language, Chinese, is the strongest foundation of this building.",
  "t2.h": "2F — Extension to Korea",
  "t2.p": "A new country, a new language. I started raising the next floor on a new site: Hwaseong, Gyeonggi-do.",
  "t3.h": "3F — Here and now",
  "t3.p": "On this floor I raised three pillars: TOPIK Level 6, ITQ Hangul (Grade B), and ITQ PowerPoint (Grade C).",
  "t4.h": "Next floor — building toward becoming a high school teacher",
  "t4.p": "I will keep learning and preparing, and build a high school classroom on the top floor.",
  "ground": "▽ GL ±0 — FOUNDATION: TWO LANGUAGES, TWO COUNTRIES",
  "contact.title": "Nice to<br />meet you.",
  "contact.desc": "Thank you for reviewing my drawings. Send any feedback or questions anytime, in Chinese or Korean.",
  "contact.email": "✉ Send an email",
  "contact.copy": "⧉ Copy address",
  "tb.project": "About-me drawing set",
  "tb.you": "You ✓",
  "top": "Back to top ↑",
};

// =========================================================
//  중국어 번역 (간체)
//  ★ 중국어 이름(한자)을 아래 두 줄에 넣으면 중국어 화면 전체에 반영됩니다.
//    예) ZH_FULL = "张○○", ZH_GIVEN = "○○"
// =========================================================
const ZH_FULL = "Zhang Haoyong";
const ZH_GIVEN = "Haoyong";

const zh = {
  "name": ZH_FULL,
  "theme.paper": "纸张",
  "theme.blue": "蓝图",
  "nav.profile": "简介",
  "nav.journey": "经历",
  "nav.contact": "联系",
  "sh.cover": "封面 · COVER",
  "sh.profile": "平面图 · FLOOR PLAN",
  "sh.journey": "剖面图 · SECTION",
  "sh.contact": "图签栏 · TITLE BLOCK",
  "ld.status": "图纸打印中",
  "ld.skip": "点击跳过",
  "cover.kicker": "PROJECT — 正在建造一个人",
  "intro.title": `你好，<br />我是<em>${ZH_GIVEN}</em>。`,
  "intro.lead": `在中国打好<b>地基</b>，正在韩国<b>加盖楼层</b>的二十岁的${ZH_GIVEN}。<br />我用中文和韩语两种语言思考和表达。`,
  "intro.cta": "展开图纸 ↓",
  "intro.cta2": "联系我",
  "brief.title": "设计概要 · DESIGN BRIEF",
  "b.name.k": "建筑名称",
  "b.name.v": `${ZH_FULL}（20岁，2007年开工）`,
  "b.found.k": "地基",
  "b.found.v": "中国 · 母语中文",
  "b.ext.k": "加建",
  "b.ext.v": "韩国 · 自2021年起",
  "b.site.k": "用地位置",
  "b.site.v": "韩国京畿道华城市",
  "b.use.k": "用途",
  "b.use.v": "学生",
  "b.done.k": "预计竣工",
  "b.done.v": "顶层：高中老师 — 施工中",
  "profile.title": `名为${ZH_GIVEN}的房子的平面图`,
  "profile.desc": "每个房间里都装着关于我的故事。",
  "story.title": "故事",
  "story.q": "“人和建筑一样，地基越扎实，才能盖得越高。”",
  "story.p1": "我在<strong>2007年的中国</strong>打下地基，<strong>2021年</strong>来到韩国，开始盖新的楼层。现在住在<strong>京畿道华城市</strong>。",
  "story.p2": "我用一门新的语言重新开始，一路考到了韩国语能力考试<strong>最高等级6级</strong>。文书方面有 ITQ 韩文证书，演示方面有 ITQ 韩文 PowerPoint 证书。",
  "story.p3": "休息的日子里，我会在足球场上奔跑，或者探索别人设计的游戏世界。",
  "stat.unit": "岁",
  "stat.sub": "男 · 2007年出生",
  "flag.k": "国籍",
  "flag.v": "中国",
  "place.k": "居住地",
  "place.v": "京畿道华城市",
  "kr.k": "在韩国生活",
  "kr.pre": "第",
  "kr.post": "年",
  "lang.title": "语言",
  "lang.zh": "中文",
  "lang.ko": "韩语",
  "lang.native": "母语",
  "lang.g6": "6级",
  "cert.title": "证书",
  "cert.topik": "TOPIK 韩国语能力考试",
  "cert.niied": "韩国国立国际教育院",
  "cert.g6": "6级",
  "cert.itqHwp": "ITQ 韩文",
  "cert.itqPpt": "ITQ 韩文 PowerPoint",
  "cert.kpc": "韩国生产性本部",
  "cert.gB": "B级",
  "cert.gC": "C级",
  "hobby.title": "爱好",
  "hobby.soccer": "足球",
  "hobby.soccer.d": "105 × 68 m — 我最喜欢的平面图",
  "hobby.game": "电脑游戏",
  "hobby.game.d": "别人设计的虚拟空间",
  "journey.title": "一层一层盖起来的路",
  "journey.desc": "从一楼开始，一步一步来。上面的楼层还在施工中。",
  "route.cap": "总平面图 · SITE PLAN — 从中国到华城",
  "t4.h": "下一层 — 为成为高中老师而施工中",
  "t4.p": "我会继续学习、做好准备，在顶层盖一间高中教室。",
  "t3.h": "3层 — 此时此地",
  "t3.p": "这一层立起了三根柱子：TOPIK 6级、ITQ 韩文 B级、ITQ 韩文 PowerPoint C级。",
  "t2.h": "2层 — 加建到韩国",
  "t2.p": "新的国家，新的语言。在京畿道华城市这块新的用地上，开始盖下一层。",
  "t1.h": "1层 — 在中国打地基",
  "t1.p": "在中国出生、长大。母语中文是这栋建筑最坚固的地基。",
  "ground": "▽ GL ±0 — 地基：两种语言，两个国家",
  "contact.title": "很高兴<br />认识你。",
  "contact.desc": "感谢审阅我的图纸。有任何意见或问题，欢迎随时联系我，中文、韩语都可以。",
  "contact.email": "✉ 发送邮件",
  "contact.copy": "⧉ 复制地址",
  "tb.project": "自我介绍图纸集",
  "tb.you": "你 ✓",
  "foot.mat": "材料：语言 2 种 · 证书 3 种 · 学生 1 名",
  "top": "回到顶部 ↑",
};
en["route.cap"] = "SITE PLAN — From China to Hwaseong";

// ----- A-04 시공 일지 (경험) 번역 -----
Object.assign(en, {
  "nav.log": "Experience",
  "sh.log": "SITE LOG",
  "log.title": "Things I've done myself",
  "log.desc": "Not many yet, but each one I took on myself. I wrote down what I did and what I learned.",
  "log.did": "What I did",
  "log.learn": "What I learned",
  "log.st.live": "In progress",
  "log.st.done": "Done",
  "log.st.on": "Ongoing",
  "log1.h": "Internship at a computer academy",
  "log1.did": "Working with AI to write code, I planned and built this portfolio website myself, laying out the pages with HTML, CSS and JavaScript. I also got to talk with the students studying at the academy.",
  "log1.learn": "I'm learning how to turn an idea in my head into something other people can actually see and click.",
  "log1.proof": "The site you are looking at right now is the result",
  "log.dream": "→ Link to my dream",
  "log1.dream": "Talking with the students made me want to become a teacher who helps students up close.",
  "log2.dream": "Looking after a whole class is what a homeroom teacher does every day. I got to experience it early.",
  "log3.dream": "A teacher is someone who helps students. I want to bring what I learned from volunteering into the classroom.",
  "log4.dream": "Because I know how it feels to face something hard to learn, I want to be a teacher who explains things step by step, at high school students' level.",
  "log2.t": "1 semester",
  "log2.h": "Class president",
  "log2.did": "I served as class president for one semester and took responsibility for the class.",
  "log2.learn": "Looking after everyone takes more responsibility than just doing well on my own.",
  "log3.t": "Whenever I can",
  "log3.h": "Volunteering",
  "log3.did": "I take part in volunteer work whenever I have time.",
  "log3.learn": "Helping others has helped me get to know my community and my neighbors better.",
  "log4.h": "Korean, from zero to Level 6",
  "log4.did": "After coming to Korea, I learned a new language from scratch and reached TOPIK Level 6, the highest level.",
  "log4.learn": "Even something unfamiliar can be finished if I keep adding a little every day.",
  "ex.badge": "Direction found",
  "ex.h": "The direction I found by trying",
  "ex.p": "As I tried things one by one and kept a record, I found that all these experiences pointed the same way. I want to become a <b>high school teacher</b>. <a class=\"ex-go\" href=\"#dream\">A-04 ↓</a>",
  "ex.s1": "Language & communication",
  "ex.s1d": "Connecting two languages",
  "ex.s2": "Making things on a computer",
  "ex.s2d": "First tried in this internship",
  "ex.s3": "Working with people",
  "ex.s3d": "Class president, volunteering, and soccer",
  "t3.p": "On this floor I raised three pillars: TOPIK Level 6, ITQ Hangul (Grade B), and ITQ PowerPoint (Grade C). Now I'm building this website myself during an internship at a computer academy.",
});
Object.assign(zh, {
  "nav.log": "实践",
  "sh.log": "施工日志 · SITE LOG",
  "log.title": "我亲手做过的事",
  "log.desc": "虽然不多，但每一件都是我亲自去做的。我把做了什么、学到了什么都写了下来。",
  "log.did": "做了什么",
  "log.learn": "学到了什么",
  "log.st.live": "进行中",
  "log.st.done": "已完成",
  "log.st.on": "持续中",
  "log1.h": "电脑补习班实习",
  "log1.did": "和 AI 一起写代码，亲手策划并制作了这个作品集网站，用 HTML·CSS·JavaScript 搭建页面。我还和补习班里学习的学生们聊过天。",
  "log1.learn": "我正在学习怎样把脑子里的想法，变成别人能亲眼看到、亲手点击的成果。",
  "log1.proof": "你现在看到的这个网站，就是成果",
  "log.dream": "→ 和梦想的联系",
  "log1.dream": "和学生们聊天以后，我开始想成为一名在学生身边帮助他们的老师。",
  "log2.dream": "照顾整个班级，正是班主任老师每天做的事。我提前体验了这份工作。",
  "log3.dream": "老师是帮助学生的人。我想把在志愿活动中学到的心意带进教室。",
  "log4.dream": "因为我懂面对难学的东西时那种茫然的心情，所以我想成为一名站在高中生的角度、一步一步讲解的老师。",
  "log2.t": "一个学期",
  "log2.h": "班长",
  "log2.did": "担任了一个学期的班长，负责班级的事情。",
  "log2.learn": "比起只管好自己，照顾好所有人需要更大的责任感。",
  "log3.t": "有空就去",
  "log3.h": "志愿活动",
  "log3.did": "有时间的时候就参加志愿活动。",
  "log3.learn": "在帮助别人的过程中，我更了解了自己生活的地方和身边的邻居。",
  "log4.h": "韩语，从 0 到 6 级",
  "log4.did": "来到韩国后从零开始学一门新语言，考到了韩国语能力考试最高等级 6 级。",
  "log4.learn": "再陌生的事情，只要每天积累一点，就能走到最后。",
  "ex.badge": "找到方向",
  "ex.h": "在尝试中找到的方向",
  "ex.p": "一件一件亲自尝试、记录下来以后，我发现这些经历都指向同一个地方：我想成为一名<b>高中老师</b>。<a class=\"ex-go\" href=\"#dream\">A-04 ↓</a>",
  "ex.s1": "语言与沟通",
  "ex.s1d": "连接两种语言的事",
  "ex.s2": "用电脑做东西",
  "ex.s2d": "这次实习第一次尝试",
  "ex.s3": "和大家一起做事",
  "ex.s3d": "班长、志愿活动，还有足球",
  "t3.p": "这一层立起了三根柱子：TOPIK 6级、ITQ 韩文 B级、ITQ 韩文 PowerPoint C级。现在我正在电脑补习班实习，亲手做这个网站。",
});

// ----- A-05 완공 예상도 (꿈: 선생님) 번역 -----
Object.assign(en, {
  "nav.dream": "Dream",
  "sh.dream": "RENDERING",
  "dream.title": "The classroom on the top floor",
  "dream.desc": "When this building is finished, its highest floor will be a high school classroom.",
  "dream.k": "FUTURE USE",
  "dream.job": "High school<br />teacher",
  "dream.say": "I want to become a <b>high school teacher</b>.",
  "why.h": "Why a high school teacher — where my experiences point",
  "why1.h": "I've talked with students",
  "why1.p": "During my internship at the computer academy, I talked a little with the students, and it made me want to be someone who helps students up close.",
  "why2.h": "I've looked after a whole class",
  "why2.p": "As class president I looked after my class for a semester — a first taste, from the student side, of what a homeroom teacher does.",
  "why3.h": "Helping makes me happy",
  "why3.p": "Volunteering showed me the joy of helping someone. In the end, a teacher is also someone who helps students.",
  "why4.h": "I know how hard learning is",
  "why4.p": "I learned Korean from zero to Level 6, so I can understand high school students who struggle with hard subjects.",
  "road.h": "Schedule — the road to becoming a teacher",
  "road1.h": "Lay the foundation",
  "road1.p": "TOPIK 6, internship, class president, volunteering",
  "road2.h": "Choose a subject and study",
  "road2.p": "A university major + teacher-training courses",
  "road3.h": "Get qualified to teach",
  "road3.p": "Earn a teaching certificate, prepare for hiring",
  "road4.h": "Stand in a high school classroom",
  "road4.p": "My first lesson in front of high school students",
  "promise": "“I want to be a teacher who passes on to high school students the help I received when I was learning.”",
});
Object.assign(zh, {
  "nav.dream": "梦想",
  "sh.dream": "竣工效果图 · RENDERING",
  "dream.title": "顶层将要建起的教室",
  "dream.desc": "等这栋建筑盖好了，最高的一层会是一间高中教室。",
  "dream.k": "梦想的用途 · FUTURE USE",
  "dream.job": "高中<br />老师",
  "dream.say": "我想成为一名<b>高中老师</b>。",
  "why.h": "为什么是高中老师 — 我的经历指向的地方",
  "why1.h": "我和学生们聊过天",
  "why1.p": "在电脑补习班实习时，我和学生们聊过一些，这让我想成为一个在学生身边帮助他们的人。",
  "why2.h": "我照顾过一个班",
  "why2.p": "当班长的一个学期里，我照顾整个班级。这就像是站在学生的位置，提前体验了班主任老师做的事。",
  "why3.h": "帮助别人让我快乐",
  "why3.p": "在志愿活动中，我体会到了帮助别人的快乐。说到底，老师也是帮助学生的人。",
  "why4.h": "我知道学习有多难",
  "why4.p": "我从零开始学韩语一直到 6 级，所以我能理解在难懂的功课面前感到吃力的高中生。",
  "road.h": "施工进度表 — 成为老师的路",
  "road1.h": "打好地基",
  "road1.p": "韩语 6 级、实习、班长、志愿活动",
  "road2.h": "选定科目并学习",
  "road2.p": "在大学学专业 + 修教师课程",
  "road3.h": "准备教师资格",
  "road3.p": "取得教师资格证，准备应聘",
  "road4.h": "站上高中讲台",
  "road4.p": "在高中生面前上第一堂课",
  "promise": "“我想成为一名老师，把我学习时得到的帮助，再传给高中生们。”",
});

en["qr.title"] = "Open these drawings on your phone";
zh["qr.title"] = "用手机打开这套图纸";

// QR 코드가 가리킬 주소 (인터넷에 올린 사이트에서 열면 그 주소를 자동으로 사용)
const SITE_URL = "https://haoyongzhang147.github.io/potporrio_/";

const TITLE = { ko: "장호영 | 자기소개", en: "Haoyong Zhang | About Me", zh: `${ZH_FULL} | 自我介绍` };
const LANGS = ["ko", "en", "zh"];
const DICTS = { en, zh };
const root = document.documentElement;

// ----- 언어 전환 -----
const ko = {};
const i18nEls = document.querySelectorAll("[data-i18n]");
i18nEls.forEach((el) => {
  const k = el.dataset.i18n;
  if (!(k in ko)) ko[k] = el.innerHTML.trim();
});
let lang = LANGS.includes(root.lang) ? root.lang : "ko";
function applyLang() {
  root.lang = lang;
  const dict = DICTS[lang] || ko;
  i18nEls.forEach((el) => { el.innerHTML = dict[el.dataset.i18n] ?? ko[el.dataset.i18n]; });
  document.title = TITLE[lang];
}
if (lang !== "ko") applyLang();
// 한 → EN → 中 → 한 순서로 바뀜
document.getElementById("langBtn").addEventListener("click", () => {
  lang = LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length];
  try { localStorage.setItem("lang", lang); } catch (e) {}
  applyLang();
});

// ----- 테마: 종이 ↔ 청사진 -----
document.getElementById("themeBtn").addEventListener("click", () => {
  const dark = root.dataset.theme === "dark" ||
    (!root.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
  root.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
});

// ----- 이메일 주소 복사 -----
const copyBtn = document.getElementById("copyMail");
const COPIED = { ko: "✓ 복사했습니다", en: "✓ Copied", zh: "✓ 已复制" };
copyBtn.addEventListener("click", async () => {
  const mail = copyBtn.dataset.mail;
  let ok = false;
  try { await navigator.clipboard.writeText(mail); ok = true; } catch (e) {
    // 예전 방식 (클립보드 권한이 없을 때)
    const t = document.createElement("textarea");
    t.value = mail; t.style.position = "fixed"; t.style.opacity = "0";
    document.body.appendChild(t); t.select();
    try { ok = document.execCommand("copy"); } catch (e2) {}
    t.remove();
  }
  if (!ok) { window.prompt("", mail); return; }
  const label = document.getElementById("copyLabel");
  label.textContent = COPIED[lang] || COPIED.ko;
  copyBtn.classList.add("copied");
  clearTimeout(copyBtn._t);
  copyBtn._t = setTimeout(() => { label.innerHTML = (DICTS[lang] || ko)["contact.copy"] ?? ko["contact.copy"]; copyBtn.classList.remove("copied"); }, 1800);
});

// ----- 모바일 메뉴 -----
const menu = document.getElementById("menu");
document.getElementById("burger").addEventListener("click", () => menu.classList.toggle("open"));
menu.addEventListener("click", (e) => { if (e.target.closest("a")) menu.classList.remove("open"); });

// ----- 스크롤 등장 애니메이션 -----
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// ----- 현재 도면 번호 + 메뉴 강조 -----
const nowId = document.getElementById("nowId");
const sheets = ["profile", "journey", "log", "dream", "contact"].map((id) => document.getElementById(id));
const spy = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    nowId.textContent = e.target.dataset.sheet;
    menu.querySelectorAll("a").forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sheets.forEach((s) => spy.observe(s));

const nowBar = document.getElementById("nowBar");
const nowPct = document.getElementById("nowPct");
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const p = max > 0 ? Math.min(100, Math.round((scrollY / max) * 100)) : 0;
  nowBar.style.width = p + "%";
  nowPct.textContent = p + "%";
  if (scrollY < sheets[0].offsetTop - innerHeight / 2) {
    nowId.textContent = "A-00";
    menu.querySelectorAll("a").forEach((a) => a.classList.remove("on"));
  }
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ----- 마우스 십자선 + 좌표 (CAD 느낌) -----
if (matchMedia("(pointer: fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  root.classList.add("has-cursor");
  const cx = document.querySelector(".cross .cx");
  const cy = document.querySelector(".cross .cy");
  const coords = document.getElementById("coords");
  const pad = (n) => String(Math.max(0, Math.round(n))).padStart(4, "0");
  let raf = 0, mx = 0, my = 0;
  addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      cx.style.transform = `translateY(${my}px)`;
      cy.style.transform = `translateX(${mx}px)`;
      coords.textContent = `X ${pad(mx)} · Y ${pad(my + scrollY)}`;
    });
  }, { passive: true });
}

// ----- QR 코드 -----
(() => {
  const cell = document.getElementById("qrCell");
  const url = /^https?:$/.test(location.protocol) ? location.origin + location.pathname : SITE_URL;
  if (typeof qrcode !== "function") { cell.classList.add("off"); return; }
  const qr = qrcode(0, "M");
  qr.addData(url);
  qr.make();
  document.getElementById("qr").innerHTML = qr.createSvgTag({ cellSize: 4, margin: 0, scalable: true });
  document.getElementById("qrUrl").textContent = url.replace(/^https?:\/\//, "");
})();

// ----- 날짜 -----
const d = new Date();
document.getElementById("yearsKr").textContent = `(${d.getFullYear() - 2021}Y+)`;
document.getElementById("krYears").textContent = d.getFullYear() - 2021 + 1; // 햇수로 N년째
document.getElementById("year").textContent = d.getFullYear();
document.getElementById("today").textContent =
  `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;

// ----- 오프닝: 도면 출력 중 (세션마다 한 번) -----
if (root.classList.contains("is-loading")) {
  const loader = document.getElementById("loader");
  const bar = document.getElementById("ldBar");
  const pct = document.getElementById("ldPct");
  const items = [...document.querySelectorAll("#ldList li")];
  const DURATION = 1800;
  let start = 0, finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    try { sessionStorage.setItem("plotted", "1"); } catch (e) {}
    items.forEach((li) => li.classList.add("done"));
    loader.classList.add("ld-out");     // 위로 올라가며 사라짐
    requestAnimationFrame(() => root.classList.remove("is-loading")); // 표지 애니메이션 시작
    setTimeout(() => loader.remove(), 900);
  };
  const tick = (t) => {
    if (finished) return;
    if (!start) start = t;
    const p = Math.min(1, (t - start) / DURATION);
    const eased = 1 - Math.pow(1 - p, 2);
    bar.style.width = eased * 100 + "%";
    pct.textContent = String(Math.round(eased * 100)).padStart(3, "0") + "%";
    items.forEach((li, i) => li.classList.toggle("done", eased >= (i + 1) / items.length - 0.001));
    if (p < 1) requestAnimationFrame(tick);
    else setTimeout(finish, 250);
  };
  requestAnimationFrame(tick);
  loader.addEventListener("click", finish);
  setTimeout(finish, DURATION + 600); // 화면 갱신이 느린 기기에서도 반드시 끝나도록
}

// ----- 총배치도: 화면에 보이면 경로가 그려지고 비행기가 날아감 -----
const route = document.getElementById("route");
const planeAnim = document.getElementById("planeAnim");
new IntersectionObserver((entries, obs) => {
  if (!entries[0].isIntersecting) return;
  obs.disconnect();
  route.classList.add("fly");
  try { planeAnim.beginElement(); } catch (e) {}
}, { threshold: 0.4 }).observe(route);
