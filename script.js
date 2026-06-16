/* ===========================================================
   НАЛАШТУВАННЯ — замініть на свої контакти
   =========================================================== */
const CONFIG = {
  shopName: "SUSHI UA",
  instagram: "sushiua_",   // username в Instagram (без @)
  telegram: "sushiua_",    // username у Telegram (без @)
  telegramEnabled: false,  // ← true, коли налаштуєте онлайн-замовлення в Telegram

  // Контакти та локація (замініть на свої)
  phone: "+380000000000",                 // для посилання tel:
  phoneLabel: "+38 (000) 000-00-00",      // як показувати на сайті
  address: "вул. Прикладна, 1, Україна",  // адреса закладу
  mapQuery: "Київ, Україна",              // що шукати на Google Maps (адреса або координати)
  hours: { dinein: "10:00–22:00", takeaway: "10:00–22:00", delivery: "10:00–22:00" },
};

/* ===========================================================
   КАТЕГОРІЇ (підкатегорії) та ГРУПИ (верхній рівень)
   =========================================================== */
const CATEGORIES = [
  { key:"philadelphia", name:"Філадельфії" },
  { key:"california",   name:"Каліфорнії" },
  { key:"dragon",       name:"Дракони" },
  { key:"cheese",       name:"Чіз роли" },
  { key:"warm",         name:"Теплі роли" },
  { key:"maki",         name:"Макі" },
  { key:"burger",       name:"Суші бургери" },
  { key:"dog",          name:"Sushi Dog" },
  { key:"snacks",       name:"Закуски та соуси" },
];

const GROUPS = [
  { key:"rolls",  name:"Роли",              subs:["philadelphia","california","dragon","cheese","warm","maki"] },
  { key:"main",   name:"Бургери та доги",   subs:["burger","dog"] },
  { key:"snacks", name:"Закуски та соуси",  subs:["snacks"] },
];

/* ===========================================================
   МЕНЮ
   =========================================================== */
const MENU = [
  { cat:"burger", title:"Суші бургер «Лосось»",   desc:"Рисова булочка, лосось, овочі, соуси · 350–380 г", price:300, badge:"Хіт" },
  { cat:"burger", title:"Суші бургер «Креветка»", desc:"Рисова булочка, креветка, овочі, соуси · 350–380 г", price:280 },
  { cat:"burger", title:"Суші бургер «Курка»",    desc:"Рисова булочка, курка, овочі, соуси · 350–380 г", price:270 },

  { cat:"dog", title:"Sushi Dog «Лосось»",   desc:"Хрустка паніровка, вершковий сир, огірок, лосось · 250 г", price:290, badge:"Новинка" },
  { cat:"dog", title:"Sushi Dog «Креветка»", desc:"Соковита креветка, вершковий сир, свіжий огірок · 250 г", price:280 },
  { cat:"dog", title:"Sushi Dog «Курка»",    desc:"Ніжна курка, сир, огірок, хрустка скоринка, соуси · 250 г", price:260 },

  { cat:"philadelphia", title:"Філадельфія з вугрем",  desc:"Вугор, вершковий сир, рис, норі · 250 г", price:250 },
  { cat:"philadelphia", title:"Філадельфія з лососем", desc:"Лосось, вершковий сир, рис, норі · 250 г", price:250, badge:"Хіт" },
  { cat:"philadelphia", title:"Філадельфія з тунцем",  desc:"Тунець, вершковий сир, рис, норі · 250 г", price:250 },
  { cat:"philadelphia", title:"Філадельфія фреш",      desc:"Свіжі інгредієнти, вершковий сир · 250 г", price:240 },
  { cat:"philadelphia", title:"Імператор 50/50",       desc:"Мікс лосося та вугра, вершковий сир · 250 г", price:240 },
  { cat:"philadelphia", title:"Самурай мікс",          desc:"Фірмовий мікс рибних начинок · 250 г", price:250 },

  { cat:"california", title:"Каліфорнія з лососем",       desc:"Лосось, ікра масаго, кунжут · 220 г", price:220 },
  { cat:"california", title:"Каліфорнія з тунцем",        desc:"Тунець, ікра масаго, кунжут · 210 г", price:210 },
  { cat:"california", title:"Каліфорнія з креветкою",     desc:"Креветка, ікра масаго, кунжут · 210 г", price:210 },
  { cat:"california", title:"Каліфорнія 50/50 з тунцем",  desc:"Мікс лосося й тунця · 240 г", price:240 },
  { cat:"california", title:"Каліфорнія 50/50 чіз",       desc:"Подвійний вершковий сир · 250 г", price:250 },

  { cat:"dragon", title:"Чорний дракон",   desc:"Фірмовий рол з вугрем · 240 г", price:240, badge:"Хіт" },
  { cat:"dragon", title:"Червоний дракон", desc:"Фірмовий рол з лососем · 240 г", price:240 },
  { cat:"dragon", title:"Зелений дракон",  desc:"Фірмовий рол з авокадо · 240 г", price:240 },
  { cat:"dragon", title:"Золотий дракон",  desc:"Фірмовий рол з креветкою · 240 г", price:240 },

  { cat:"cheese", title:"Чіз рол огірок",      desc:"Вершковий сир, огірок · 190 г", price:190 },
  { cat:"cheese", title:"Чіз рол курка",       desc:"Вершковий сир, курка · 190 г", price:190 },
  { cat:"cheese", title:"Чіз рол сирний",      desc:"Подвійний вершковий сир · 200 г", price:200 },
  { cat:"cheese", title:"Чіз рол з креветкою", desc:"Вершковий сир, креветка · 220 г", price:220 },
  { cat:"cheese", title:"Чіз рол з томаго",    desc:"Японський омлет томаго · 200 г", price:200 },
  { cat:"cheese", title:"Футо рол з лососем",  desc:"Великий рол з лососем · 220 г", price:220 },

  { cat:"warm", title:"Гарячий рол «Курка»",      desc:"Темпура, хрустка скоринка · 240 г", price:230 },
  { cat:"warm", title:"Гарячий рол «Креветка»",   desc:"Темпура, хрустка скоринка · 240 г", price:250 },
  { cat:"warm", title:"Гарячий рол «Лосось»",     desc:"Темпура, хрустка скоринка · 240 г", price:260 },
  { cat:"warm", title:"Запечений рол «Курка»",    desc:"Під сирною шапкою, запечений · 240 г", price:230 },
  { cat:"warm", title:"Запечений рол «Креветка»", desc:"Під сирною шапкою, запечений · 240 г", price:250 },
  { cat:"warm", title:"Запечений рол «Лосось»",   desc:"Під сирною шапкою, запечений · 240 г", price:260 },
  { cat:"warm", title:"Topi maki",                desc:"Теплий фірмовий рол · 260 г", price:260 },

  { cat:"maki", title:"Унагі Maki",        desc:"Макі з вугром · 130 г", price:130 },
  { cat:"maki", title:"Maki з лососем",    desc:"Класичний макі · 100 г", price:100 },
  { cat:"maki", title:"Maki з вугрем",     desc:"Класичний макі · 100 г", price:100 },
  { cat:"maki", title:"Maki з тунцем",     desc:"Класичний макі · 100 г", price:100 },
  { cat:"maki", title:"Maki з креветкою",  desc:"Класичний макі · 100 г", price:100 },
  { cat:"maki", title:"Maki з авокадо",    desc:"Вегетаріанський макі · 100 г", price:100 },
  { cat:"maki", title:"Maki з огірком",    desc:"Вегетаріанський макі · 100 г", price:100 },

  { cat:"snacks", title:"Картопляні палички",   desc:"Хрустка закуска, 1 соус у подарунок · 200 г", price:120 },
  { cat:"snacks", title:"Соус «Ніжний часник»", desc:"Домашній соус · 30 г", price:10 },
  { cat:"snacks", title:"Соус «Солодкий дим»",  desc:"Домашній соус · 30 г", price:10 },
  { cat:"snacks", title:"Соус «Спайсі»",        desc:"Гострий домашній соус · 30 г", price:10 },
];
MENU.forEach((item, i) => item.id = i);

/* ===========================================================
   ДОБАВКИ
   =========================================================== */
const ADDONS = [
  { id:"av", title:"Авокадо",          price:15 },
  { id:"ms", title:"Ікра масаго",      price:20 },
  { id:"ch", title:"Подвійний сир",    price:25 },
  { id:"sp", title:"Соус Спайсі",      price:10 },
  { id:"gl", title:"Соус Часник",      price:10 },
  { id:"sd", title:"Соус Солодкий дим", price:10 },
  { id:"gn", title:"Імбир",            price:10 },
  { id:"wb", title:"Васабі",           price:10 },
];
const ADDON_BY_ID = Object.fromEntries(ADDONS.map(a => [a.id, a]));
const hasAddons = (item) => item.cat !== "snacks";

/* ===========================================================
   ФОТО + ФОЛБЕК-ІКОНКА
   =========================================================== */
const catName = (key) => (CATEGORIES.find(c => c.key === key) || {}).name || "";

const DISH_ICON = `<svg class="dish-ic" viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" aria-hidden="true"><circle cx="28" cy="42" r="15"/><circle cx="28" cy="42" r="7"/><circle cx="52" cy="42" r="15"/><circle cx="52" cy="42" r="7"/><circle cx="52" cy="42" r="2.6" fill="currentColor" stroke="none"/></svg>`;

const PHOTO = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=640&q=70`;
const CATEGORY_IMG = {
  burger:       PHOTO("1553621042-f6e147245754"),
  dog:          PHOTO("1606756790138-261d2b21cd75"),
  philadelphia: PHOTO("1579871494447-9811cf80d66c"),
  california:   PHOTO("1617196034796-73dfa7b1fd56"),
  dragon:       PHOTO("1611143669185-af224c5e3252"),
  cheese:       PHOTO("1607301405390-d831c242f59b"),
  warm:         PHOTO("1583623025817-d180a2221d0a"),
  maki:         PHOTO("1564489563601-c53cfc451e93"),
  snacks:       PHOTO("1573080496219-bb080dd4f877"),
};
const imgFor = (i) => i.img || CATEGORY_IMG[i.cat] || "";
const mediaHTML = (i) => {
  const src = imgFor(i);
  return `<span class="dish-fallback">${DISH_ICON}</span>` +
    (src ? `<img class="dish-img" src="${src}" alt="${i.title}" loading="lazy" onerror="this.remove()">` : "");
};

/* вага окремо + опис без ваги */
const WEIGHT_RE = /(\d[\d\s–—-]*)\s*г(?![а-яіїєґ])/iu;
const weightOf = (desc) => { const m = desc.match(WEIGHT_RE); return m ? m[0].replace(/\s+/g, " ").trim() : ""; };
const descClean = (desc) => desc.replace(/\s*·?\s*\d[\d\s–—-]*\s*г(?![а-яіїєґ])/iu, "").replace(/^\s*·\s*/, "").trim();

/* ===========================================================
   ОБРАНЕ (зберігається в браузері)
   =========================================================== */
let favs = new Set();
try { favs = new Set(JSON.parse(localStorage.getItem("sushi_favs") || "[]")); } catch {}
const saveFavs = () => { try { localStorage.setItem("sushi_favs", JSON.stringify([...favs])); } catch {} };
const likeBase = (id) => (id * 7 + 11) % 70 + 8;
const likeCount = (id) => likeBase(id) + (favs.has(id) ? 1 : 0);

const HEART = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M12 20s-7-4.5-9.2-8.4C1.3 8.9 3 6 6 6c2 0 3.2 1.4 6 4.3C15.8 7.4 17 6 19 6c3 0 4.7 2.9 3.2 5.6C19 15.5 12 20 12 20z"/></svg>`;
const SCALE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3"/><path d="M5 6h14l-2.5 4.5H7.5z"/><path d="M6 21h12"/><path d="M9 21v-4a3 3 0 0 1 6 0v4"/></svg>`;

/* ===========================================================
   РЕНДЕР МЕНЮ (дворівневі категорії / популярне / обрані / пошук)
   =========================================================== */
const menuRoot = document.getElementById("menuRoot");
const groupnav = document.getElementById("groupnav");
const subnav   = document.getElementById("subnav");
const tabbar   = document.getElementById("tabbar");

const itemsOf = (subKey) => MENU.filter(i => i.cat === subKey);
const usedSubs = (group) => group.subs.filter(s => itemsOf(s).length);
const usedGroups = GROUPS.filter(g => usedSubs(g).length);

let view = "all";          // all | popular | favorites | search
let activeGroup = null;

function rowHTML(i){
  const w = weightOf(i.desc);
  const liked = favs.has(i.id);
  return `
    <article class="row" data-open="${i.id}">
      <div class="row__info">
        <div class="row__head">
          <h3 class="row__title">${i.title}</h3>
          ${i.badge ? `<span class="row__badge">${i.badge}</span>` : ""}
        </div>
        <span class="row__price">${i.price} ₴</span>
        <p class="row__desc">${descClean(i.desc)}</p>
        <div class="row__meta">
          ${w ? `<span class="row__weight">${SCALE} ${w}</span>` : ""}
          <button class="row__fav${liked ? " is-on" : ""}" data-fav="${i.id}" aria-label="В обране">
            ${HEART}<span>${likeCount(i.id)}</span>
          </button>
        </div>
      </div>
      <div class="row__media">
        ${mediaHTML(i)}
        <button class="row__add" data-add="${i.id}" aria-label="Додати ${i.title}" title="Додати в кошик">+</button>
      </div>
    </article>`;
}

const rowsBlock = (items) => `<div class="rows">${items.map(rowHTML).join("")}</div>`;

function flatSection(title, items){
  if (!items.length)
    return `<div class="emptyview"><p>Тут поки порожньо</p><span>Додайте страви до обраного — натискаючи ♥</span></div>`;
  return `<section class="cat-section"><h2 class="cat-section__title">${title}</h2>${rowsBlock(items)}</section>`;
}

function groupsHTML(){
  return usedGroups.map(g => `
    <div class="group" id="group-${g.key}">
      <h2 class="group__title">${g.name}</h2>
      ${usedSubs(g).map(s => `
        <section class="cat-section" id="cat-${s}">
          <h3 class="cat-section__title">${catName(s)}</h3>
          ${rowsBlock(itemsOf(s))}
        </section>`).join("")}
    </div>`).join("");
}

const popularItems = () =>
  [...MENU].sort((a,b) => (b.badge?1:0)-(a.badge?1:0) || likeCount(b.id)-likeCount(a.id)).slice(0, 12);
const favItems = () => MENU.filter(i => favs.has(i.id));

function renderMenu(){
  if (view === "popular")        menuRoot.innerHTML = flatSection("Популярне", popularItems());
  else if (view === "favorites") menuRoot.innerHTML = flatSection("Обрані", favItems());
  else                           menuRoot.innerHTML = groupsHTML();
  setupSpy();
}

/* ---- навігація: вкладки + групи + підкатегорії ---- */
function buildGroupNav(){
  groupnav.innerHTML = usedGroups.map((g, i) =>
    `<button class="chip${i===0?" is-active":""}" data-group="${g.key}">${g.name}</button>`).join("");
}
function buildSubNav(groupKey){
  const g = usedGroups.find(x => x.key === groupKey);
  if (!g){ subnav.innerHTML = ""; return; }
  subnav.innerHTML = usedSubs(g).map((s, i) =>
    `<button class="chip chip--sm${i===0?" is-active":""}" data-sub="${s}">${catName(s)}</button>`).join("");
}

function setActiveChip(container, attr, value){
  container.querySelectorAll(".chip").forEach(ch => ch.classList.toggle("is-active", ch.dataset[attr] === value));
}
function scrollChipIntoView(container){
  container.querySelector(".chip.is-active")?.scrollIntoView({ inline:"center", block:"nearest", behavior:"smooth" });
}

function setView(v){
  view = v;
  tabbar.querySelectorAll(".ftab").forEach(t => t.classList.toggle("is-active", t.dataset.view === v));
  const isMenu = (v === "all");
  groupnav.style.display = isMenu ? "" : "none";
  subnav.style.display   = isMenu ? "" : "none";
  renderMenu();
  if (isMenu){
    activeGroup = usedGroups[0]?.key || null;
    buildSubNav(activeGroup);
    setActiveChip(groupnav, "group", activeGroup);
  }
}

/* tabs (Популярне / Обрані) */
tabbar.addEventListener("click", (e) => {
  const t = e.target.closest(".ftab");
  if (!t) return;
  setView(view === t.dataset.view ? "all" : t.dataset.view);
  document.getElementById("menu").scrollIntoView({ behavior:"smooth", block:"start" });
});

/* групи */
groupnav.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  if (view !== "all"){ setView("all"); }
  document.getElementById("group-" + chip.dataset.group)?.scrollIntoView({ behavior:"smooth", block:"start" });
});
/* підкатегорії */
subnav.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  document.getElementById("cat-" + chip.dataset.sub)?.scrollIntoView({ behavior:"smooth", block:"start" });
});

/* scroll-spy для груп та підкатегорій */
let groupSpy, subSpy;
function setupSpy(){
  groupSpy?.disconnect(); subSpy?.disconnect();
  if (view !== "all") return;

  groupSpy = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const key = en.target.id.replace("group-", "");
      if (key !== activeGroup){
        activeGroup = key;
        buildSubNav(key);
      }
      setActiveChip(groupnav, "group", key);
      scrollChipIntoView(groupnav);
    });
  }, { rootMargin: "-210px 0px -72% 0px", threshold: 0 });

  subSpy = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      setActiveChip(subnav, "sub", en.target.id.replace("cat-", ""));
      scrollChipIntoView(subnav);
    });
  }, { rootMargin: "-215px 0px -72% 0px", threshold: 0 });

  document.querySelectorAll(".group").forEach(el => groupSpy.observe(el));
  document.querySelectorAll(".cat-section[id]").forEach(el => subSpy.observe(el));
}

/* делегування кліків у списку меню */
function attachMenuClicks(el){
  el.addEventListener("click", (e) => {
    const fav = e.target.closest("[data-fav]");
    if (fav){ e.stopPropagation(); toggleFav(+fav.dataset.fav, fav); return; }
    const add = e.target.closest("[data-add]");
    if (add){ e.stopPropagation(); addToCart(+add.dataset.add); bumpFab(); return; }
    const open = e.target.closest("[data-open]");
    if (open) openProduct(+open.dataset.open);
  });
}
attachMenuClicks(menuRoot);

function toggleFav(id, btn){
  if (favs.has(id)) favs.delete(id); else favs.add(id);
  saveFavs();
  updateFavCount();
  if (view === "favorites"){ renderMenu(); return; }
  if (btn){
    btn.classList.toggle("is-on", favs.has(id));
    const c = btn.querySelector("span"); if (c) c.textContent = likeCount(id);
  }
}
function updateFavCount(){
  document.getElementById("favCount").textContent = favs.size;
}

/* старт */
buildGroupNav();
renderMenu();
activeGroup = usedGroups[0]?.key || null;
buildSubNav(activeGroup);
updateFavCount();

/* ===========================================================
   ПОШУК
   =========================================================== */
const searchbar   = document.getElementById("searchbar");
const searchInput = document.getElementById("searchInput");

document.getElementById("searchToggle").addEventListener("click", () => {
  const show = searchbar.hidden;
  searchbar.hidden = !show;
  if (show){ searchInput.focus(); }
  else { searchInput.value = ""; if (view === "search") setView("all"); }
});
document.getElementById("searchClear").addEventListener("click", () => {
  searchInput.value = "";
  searchbar.hidden = true;
  if (view === "search") setView("all");
});
searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q){ if (view === "search") setView("all"); return; }
  view = "search";
  tabbar.querySelectorAll(".ftab").forEach(t => t.classList.remove("is-active"));
  groupnav.style.display = "none";
  subnav.style.display = "none";
  groupSpy?.disconnect(); subSpy?.disconnect();
  const res = MENU.filter(i => (i.title + " " + i.desc).toLowerCase().includes(q));
  menuRoot.innerHTML = res.length
    ? flatSection(`Результати пошуку (${res.length})`, res)
    : `<div class="emptyview"><p>Нічого не знайдено</p><span>Спробуйте інший запит</span></div>`;
});

/* ===========================================================
   «МИ РЕКОМЕНДУЄМО» + «НАШІ ФОТОГРАФІЇ»
   =========================================================== */
const recommended = (() => {
  const flagged = MENU.filter(i => i.badge);
  if (flagged.length >= 6) return flagged;
  return flagged.concat(MENU.filter(i => !i.badge).slice(0, 6 - flagged.length));
})();

document.getElementById("recoRow").innerHTML = recommended.map(i => `
  <article class="reco-card" data-open="${i.id}">
    <span class="reco-card__media">${mediaHTML(i)}</span>
    <span class="reco-card__body">
      <span class="reco-card__price">${i.price} ₴</span>
      <span class="reco-card__title">${i.title}</span>
    </span>
    <button class="reco-card__add" data-add="${i.id}" aria-label="Додати ${i.title}">+ Додати</button>
  </article>`).join("");
attachMenuClicks(document.getElementById("recoRow"));

const galleryPhotos = [...new Set(CATEGORIES.map(c => CATEGORY_IMG[c.key]).filter(Boolean))];
document.getElementById("galleryGrid").innerHTML = galleryPhotos.map(src => `
  <div class="ph"><img src="${src}" alt="Фото страви" loading="lazy" onerror="this.parentElement.classList.add('ph--empty')"></div>`).join("");

/* ===========================================================
   КОШИК
   =========================================================== */
const cart = {};
const cartEl      = document.getElementById("cart");
const overlay     = document.getElementById("cartOverlay");
const cartItemsEl = document.getElementById("cartItems");
const cartEmptyEl = document.getElementById("cartEmpty");
const cartFootEl  = document.getElementById("cartFoot");
const cartTotalEl = document.getElementById("cartTotal");

const lineKey = (id, addons) => id + "|" + [...addons].sort().join(",");
const addonsSum = (addons) => addons.reduce((s,a) => s + (ADDON_BY_ID[a]?.price || 0), 0);
const linePrice = (line) => (MENU[line.id].price + addonsSum(line.addons)) * line.qty;
const totalSum = () => Object.values(cart).reduce((s,l) => s + linePrice(l), 0);
const totalCount = () => Object.values(cart).reduce((s,l) => s + l.qty, 0);

function addToCart(id, addons = [], qty = 1){
  const key = lineKey(id, addons);
  if (cart[key]) cart[key].qty += qty;
  else cart[key] = { id, addons:[...addons], qty };
  renderCart();
}

function updateBadges(){
  const n = totalCount();
  document.getElementById("cartCount").textContent = n;
  const fc = document.getElementById("fabCount");
  fc.textContent = n;
  fc.style.display = n ? "flex" : "none";
}

function renderCart(){
  const keys = Object.keys(cart);
  const empty = keys.length === 0;
  cartEmptyEl.style.display = empty ? "flex" : "none";
  cartFootEl.hidden = empty;
  cartItemsEl.innerHTML = keys.map(key => {
    const line = cart[key], i = MENU[line.id];
    const addonNames = line.addons.map(a => ADDON_BY_ID[a]?.title).filter(Boolean).join(", ");
    return `
      <div class="ci">
        <div class="ci__ic">${mediaHTML(i)}</div>
        <div class="ci__info">
          <span class="ci__title">${i.title}</span>
          ${addonNames ? `<span class="ci__addons">+ ${addonNames}</span>` : ""}
          <span class="ci__price">${linePrice(line)} ₴</span>
        </div>
        <div class="ci__qty">
          <button data-dec="${key}" aria-label="Менше">−</button>
          <span>${line.qty}</span>
          <button data-inc="${key}" aria-label="Більше">+</button>
        </div>
        <button class="ci__del" data-del="${key}" aria-label="Видалити">🗑</button>
      </div>`;
  }).join("");
  cartTotalEl.textContent = totalSum() + " ₴";
  updateBadges();
}

cartItemsEl.addEventListener("click", (e) => {
  const inc = e.target.closest("[data-inc]");
  const dec = e.target.closest("[data-dec]");
  const del = e.target.closest("[data-del]");
  if (inc){ cart[inc.dataset.inc].qty++; renderCart(); }
  if (dec){ const k = dec.dataset.dec; if(--cart[k].qty <= 0) delete cart[k]; renderCart(); }
  if (del){ delete cart[del.dataset.del]; renderCart(); }
});

function openCart(){ cartEl.classList.add("open"); overlay.classList.add("show"); lockScroll(true); }
function closeCart(){ cartEl.classList.remove("open"); overlay.classList.remove("show"); lockScroll(false); }
document.getElementById("cartOpen").addEventListener("click", openCart);
document.getElementById("fab").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

function bumpFab(){
  const fab = document.getElementById("fab");
  fab.classList.remove("bump"); void fab.offsetWidth; fab.classList.add("bump");
}

/* ===========================================================
   КАРТКА ТОВАРУ
   =========================================================== */
const modal        = document.getElementById("modal");
const modalOverlay = document.getElementById("modalOverlay");
const modalBody    = document.getElementById("modalBody");

let pState = { id:null, addons:new Set(), qty:1 };

function openProduct(id){
  pState = { id, addons:new Set(), qty:1 };
  renderProduct();
  modal.classList.add("open");
  modalOverlay.classList.add("show");
  lockScroll(true);
}
function closeProduct(){
  modal.classList.remove("open");
  modalOverlay.classList.remove("show");
  if (!cartEl.classList.contains("open")) lockScroll(false);
}

function productTotal(){
  const base = MENU[pState.id].price + addonsSum([...pState.addons]);
  return base * pState.qty;
}

function renderProduct(){
  const i = MENU[pState.id];
  const w = weightOf(i.desc);
  const addonsBlock = hasAddons(i) ? `
    <div class="pm__section">
      <h4 class="pm__h">Додатки до страви</h4>
      <div class="pm__addons">
        ${ADDONS.map(a => `
          <button class="addon ${pState.addons.has(a.id) ? "is-on" : ""}" data-addon="${a.id}">
            <span class="addon__l">${a.title}</span>
            <span class="addon__p">+${a.price} ₴</span>
          </button>`).join("")}
      </div>
    </div>` : "";

  const similar = MENU.filter(x => x.cat === i.cat && x.id !== i.id).slice(0, 4);
  const similarBlock = similar.length ? `
    <div class="pm__section">
      <h4 class="pm__h">Схожі страви</h4>
      <div class="pm__similar">
        ${similar.map(s => `
          <button class="sim" data-open="${s.id}">
            <span class="sim__ic">${mediaHTML(s)}</span>
            <span class="sim__title">${s.title}</span>
            <span class="sim__price">${s.price} ₴</span>
          </button>`).join("")}
      </div>
    </div>` : "";

  modalBody.innerHTML = `
    <div class="pm__media">
      ${i.badge ? `<span class="card__badge">${i.badge}</span>` : ""}
      ${mediaHTML(i)}
    </div>
    <div class="pm__main">
      <span class="pm__cat">${catName(i.cat)}</span>
      <h3 class="pm__title">${i.title}</h3>
      ${w ? `<span class="pm__weight">${SCALE} ${w}</span>` : ""}
      <p class="pm__desc">${descClean(i.desc)}</p>
      ${addonsBlock}
      <div class="pm__buy">
        <div class="pm__qty">
          <button data-pq="-1" aria-label="Менше">−</button>
          <span id="pmQty">${pState.qty}</span>
          <button data-pq="1" aria-label="Більше">+</button>
        </div>
        <button class="btn btn--primary pm__add" id="pmAdd">Додати — ${productTotal()} ₴</button>
      </div>
      ${similarBlock}
    </div>`;
}

modalBody.addEventListener("click", (e) => {
  const addon = e.target.closest("[data-addon]");
  const pq = e.target.closest("[data-pq]");
  const sim = e.target.closest("[data-open]");
  const add = e.target.closest("#pmAdd");
  if (addon){
    const id = addon.dataset.addon;
    pState.addons.has(id) ? pState.addons.delete(id) : pState.addons.add(id);
    renderProduct();
  } else if (pq){
    pState.qty = Math.max(1, pState.qty + Number(pq.dataset.pq));
    renderProduct();
  } else if (sim){
    openProduct(+sim.dataset.open);
  } else if (add){
    addToCart(pState.id, [...pState.addons], pState.qty);
    bumpFab(); closeProduct(); openCart();
  }
});

document.getElementById("modalClose").addEventListener("click", closeProduct);
modalOverlay.addEventListener("click", closeProduct);

/* ===========================================================
   БІЧНА ПАНЕЛЬ (☰) + ІНФО-МОДАЛКИ
   =========================================================== */
const panel        = document.getElementById("panel");
const panelOverlay = document.getElementById("panelOverlay");
function openPanel(){ panel.classList.add("open"); panelOverlay.classList.add("show"); lockScroll(true); }
function closePanel(){ panel.classList.remove("open"); panelOverlay.classList.remove("show"); lockScroll(false); }
document.getElementById("menuToggle").addEventListener("click", openPanel);
document.getElementById("panelClose").addEventListener("click", closePanel);
panelOverlay.addEventListener("click", closePanel);

const INFO = {
  auth:      { t:"Авторизація",                          b:"<p>Особистий кабінет доступний у повній версії платформи. У цьому демо-макеті вхід вимкнено.</p>" },
  venue:     { t:"Змінити заклад",                       b:"<p>Наразі працює один заклад — <b>SUSHI UA</b>.</p>" },
  allergens: { t:"Список алергенів",                     b:"<p>Страви можуть містити: рибу, морепродукти, яйця, молочні продукти, кунжут, сою та глютен.</p><p>Точний склад уточнюйте у менеджера.</p>" },
  company:   { t:"Інформація про компанію",              b:"<p><b>SUSHI UA</b> — суші, роли, суші-бургери та Sushi Dog. Готуємо щодня зі свіжих інгредієнтів.</p><p>Замовлення приймаємо в Instagram Direct.</p>" },
  cookie:    { t:"Політика використання файлів cookie",  b:"<p>Ми використовуємо файли cookie, щоб сайт працював коректно та зручно. Продовжуючи користуватися сайтом, ви погоджуєтесь із цим.</p>" },
};
const infoModal   = document.getElementById("infoModal");
const infoOverlay = document.getElementById("infoOverlay");
function openInfo(key){
  const data = INFO[key]; if (!data) return;
  document.getElementById("infoTitle").textContent = data.t;
  document.getElementById("infoText").innerHTML = data.b;
  infoModal.classList.add("open"); infoOverlay.classList.add("show"); lockScroll(true);
}
function closeInfo(){ infoModal.classList.remove("open"); infoOverlay.classList.remove("show");
  if (!panel.classList.contains("open")) lockScroll(false); }
document.getElementById("infoClose").addEventListener("click", closeInfo);
infoOverlay.addEventListener("click", closeInfo);

/* копіювання контактів + інфо-кнопки (працює і в панелі, і в контактах) */
async function copyText(text){
  try { await navigator.clipboard.writeText(text); }
  catch { const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove(); }
}
document.addEventListener("click", (e) => {
  const copy = e.target.closest("[data-copy]");
  if (copy){
    copyText(copy.dataset.copy === "phone" ? CONFIG.phoneLabel : CONFIG.address);
    copy.classList.add("copied"); setTimeout(() => copy.classList.remove("copied"), 1200);
  }
  const info = e.target.closest("[data-info]");
  if (info){ openInfo(info.dataset.info); }
});

/* розклад */
document.getElementById("schedToggle").addEventListener("click", () => {
  const s = document.getElementById("sched");
  s.hidden = !s.hidden;
  document.getElementById("schedToggle").classList.toggle("open", !s.hidden);
});

/* ===========================================================
   ТЕКСТ ЗАМОВЛЕННЯ + ВІДПРАВКА
   =========================================================== */
function buildOrderText(){
  const f = document.getElementById("cartForm");
  let t = `🍣 Нове замовлення — ${CONFIG.shopName}\n\n`;
  Object.values(cart).forEach(line => {
    const i = MENU[line.id];
    const addonNames = line.addons.map(a => ADDON_BY_ID[a]?.title).filter(Boolean).join(", ");
    t += `• ${i.title}${addonNames ? " (" + addonNames + ")" : ""} × ${line.qty} — ${linePrice(line)} ₴\n`;
  });
  t += `\n💰 Разом: ${totalSum()} ₴\n\n`;
  t += `👤 Ім'я: ${f.name.value.trim()}\n`;
  t += `📞 Телефон: ${f.phone.value.trim()}\n`;
  t += `📍 Адреса: ${f.address.value.trim()}\n`;
  if (f.note.value.trim()) t += `📝 Коментар: ${f.note.value.trim()}\n`;
  return t;
}

const sendTgBtn = document.getElementById("sendTg");
sendTgBtn.disabled = !CONFIG.telegramEnabled;
if (CONFIG.telegramEnabled){
  sendTgBtn.addEventListener("click", () => {
    const f = document.getElementById("cartForm");
    if (!f.reportValidity() || totalCount() === 0) return;
    const text = encodeURIComponent(buildOrderText());
    window.open(`https://t.me/share/url?url=${encodeURIComponent("https://t.me/"+CONFIG.telegram)}&text=${text}`, "_blank");
  });
}

async function copyOrderToClipboard(){ await copyText(buildOrderText()); }
function flashCopied(msg){
  const c = document.getElementById("copied");
  c.textContent = msg || "✓ Замовлення скопійовано";
  c.hidden = false; setTimeout(() => c.hidden = true, 3500);
}
document.getElementById("sendIg").addEventListener("click", async () => {
  const f = document.getElementById("cartForm");
  if (totalCount() === 0 || !f.reportValidity()) return;
  window.open(`https://ig.me/m/${CONFIG.instagram}`, "_blank", "noopener");
  await copyOrderToClipboard();
  flashCopied("✓ Замовлення скопійовано — вставте його у Direct і надішліть");
});
document.getElementById("copyOrder").addEventListener("click", async () => {
  if (totalCount() === 0) return;
  await copyOrderToClipboard();
  flashCopied();
});

/* ===========================================================
   ESC + КОНТАКТИ/КАРТА З CONFIG
   =========================================================== */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape"){ closeInfo(); closeProduct(); closeCart(); closePanel(); }
});

function lockScroll(on){ document.body.style.overflow = on ? "hidden" : ""; }

const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
const setAttr = (id, attr, val) => { const el = document.getElementById(id); if (el) el.setAttribute(attr, val); };

setText("venueAddr", CONFIG.address);
setText("infoAddr", CONFIG.address);
setText("panelAddr", CONFIG.address);
setText("hrDinein", CONFIG.hours.dinein);
setText("hrTakeaway", CONFIG.hours.takeaway);
setText("hrDelivery", CONFIG.hours.delivery);

setText("infoPhone", CONFIG.phoneLabel);  setAttr("infoPhone", "href", "tel:" + CONFIG.phone);
setText("panelPhone", CONFIG.phoneLabel); setAttr("panelPhone", "href", "tel:" + CONFIG.phone);

const igUrl = "https://instagram.com/" + CONFIG.instagram;
const tgUrl = "https://t.me/" + CONFIG.telegram;
const mapQ = encodeURIComponent(CONFIG.mapQuery);
setAttr("igLink", "href", igUrl);  setAttr("panelIg", "href", igUrl);
setAttr("tgLink", "href", tgUrl);  setAttr("panelTg", "href", tgUrl);
setAttr("panelGoogle", "href", `https://www.google.com/maps/search/?api=1&query=${mapQ}`);
setAttr("map", "src", `https://maps.google.com/maps?q=${mapQ}&z=15&output=embed`);
setAttr("routeBtn", "href", `https://www.google.com/maps/search/?api=1&query=${mapQ}`);

document.getElementById("year").textContent = new Date().getFullYear();
updateBadges();
