/* ===========================================================
   НАЛАШТУВАННЯ — замініть на свої контакти
   =========================================================== */
const CONFIG = {
  telegram: "sushiua_",   // username у Telegram (без @) — для майбутнього онлайн-замовлення
  shopName: "SUSHI UA",
  telegramEnabled: false, // ← поставте true, коли налаштуєте онлайн-замовлення
};

/* ===========================================================
   МЕНЮ (перенесено з актуальних публікацій)
   =========================================================== */
const CATEGORIES = [
  { key:"burger",       name:"Суші бургер", icon:"🍔" },
  { key:"dog",          name:"Sushi Dog",   icon:"🌭" },
  { key:"philadelphia", name:"Філадельфії", icon:"🍣" },
  { key:"california",   name:"Каліфорнії",  icon:"🍱" },
  { key:"dragon",       name:"Дракони",     icon:"🐉" },
  { key:"cheese",       name:"Чіз роли",    icon:"🧀" },
  { key:"warm",         name:"Теплі роли",  icon:"🔥" },
  { key:"maki",         name:"Макі",        icon:"🍙" },
  { key:"snacks",       name:"Закуски",     icon:"🍟" },
];

const MENU = [
  // —— Суші бургер (350–380 г) ——
  { cat:"burger", emoji:"🍔", title:"Суші бургер «Лосось»",   desc:"Рисова булочка, лосось, овочі, соуси · 350–380 г", price:300, badge:"Хіт" },
  { cat:"burger", emoji:"🍔", title:"Суші бургер «Креветка»", desc:"Рисова булочка, креветка, овочі, соуси · 350–380 г", price:280 },
  { cat:"burger", emoji:"🍔", title:"Суші бургер «Курка»",    desc:"Рисова булочка, курка, овочі, соуси · 350–380 г", price:270 },

  // —— Sushi Dog ——
  { cat:"dog", emoji:"🌭", title:"Sushi Dog «Лосось»",   desc:"Хрустка паніровка, вершковий сир, огірок, лосось", price:290, badge:"Новинка" },
  { cat:"dog", emoji:"🌭", title:"Sushi Dog «Креветка»", desc:"Соковита креветка, вершковий сир, свіжий огірок", price:280 },
  { cat:"dog", emoji:"🌭", title:"Sushi Dog «Курка»",    desc:"Ніжна курка, сир, огірок, хрустка скоринка, соуси", price:260 },

  // —— Філадельфії ——
  { cat:"philadelphia", emoji:"🍣", title:"Філадельфія з вугрем",  desc:"Вугор, вершковий сир, рис, норі · 250 г", price:250 },
  { cat:"philadelphia", emoji:"🍣", title:"Філадельфія з лососем", desc:"Лосось, вершковий сир, рис, норі · 250 г", price:250, badge:"Хіт" },
  { cat:"philadelphia", emoji:"🍣", title:"Філадельфія з тунцем",  desc:"Тунець, вершковий сир, рис, норі · 250 г", price:250 },
  { cat:"philadelphia", emoji:"🍣", title:"Філадельфія фреш",      desc:"Свіжі інгредієнти, вершковий сир · 250 г", price:240 },
  { cat:"philadelphia", emoji:"🍣", title:"Імператор 50/50",       desc:"Мікс лосося та вугра, вершковий сир · 250 г", price:240 },
  { cat:"philadelphia", emoji:"🍣", title:"Самурай мікс",          desc:"Фірмовий мікс рибних начинок · 250 г", price:250 },

  // —— Каліфорнії ——
  { cat:"california", emoji:"🍱", title:"Каліфорнія з лососем",       desc:"Лосось, ікра кунжут · 220 г", price:220 },
  { cat:"california", emoji:"🍱", title:"Каліфорнія з тунцем",        desc:"Тунець, ікра кунжут · 210 г", price:210 },
  { cat:"california", emoji:"🍱", title:"Каліфорнія з креветкою",     desc:"Креветка, ікра кунжут · 210 г", price:210 },
  { cat:"california", emoji:"🍱", title:"Філадельфія 50/50 з тунцем", desc:"Мікс лосося й тунця · 240 г", price:240 },
  { cat:"california", emoji:"🍱", title:"Філадельфія 50/50 чіз рол",  desc:"Подвійний вершковий сир · 250 г", price:250 },

  // —— Дракони ——
  { cat:"dragon", emoji:"🐉", title:"Чорний дракон",  desc:"Фірмовий рол · 240 г", price:240 },
  { cat:"dragon", emoji:"🐉", title:"Червоний дракон", desc:"Фірмовий рол · 240 г", price:240 },
  { cat:"dragon", emoji:"🐉", title:"Зелений дракон",  desc:"Фірмовий рол · 240 г", price:240 },
  { cat:"dragon", emoji:"🐉", title:"Золотий дракон",  desc:"Фірмовий рол · 240 г", price:240 },

  // —— Чіз роли ——
  { cat:"cheese", emoji:"🧀", title:"Чіз рол огірок",      desc:"Вершковий сир, огірок · 190 г", price:190 },
  { cat:"cheese", emoji:"🧀", title:"Чіз рол курка",       desc:"Вершковий сир, курка · 190 г", price:190 },
  { cat:"cheese", emoji:"🧀", title:"Чіз рол сирний",      desc:"Подвійний вершковий сир · 200 г", price:200 },
  { cat:"cheese", emoji:"🧀", title:"Чіз рол з креветкою", desc:"Вершковий сир, креветка · 220 г", price:220 },
  { cat:"cheese", emoji:"🧀", title:"Чераезе з томаго",    desc:"Японський омлет томаго · 200 г", price:200 },
  { cat:"cheese", emoji:"🧀", title:"Футо рол з лососем",  desc:"Великий рол з лососем · 220 г", price:220 },

  // —— Теплі роли ——
  { cat:"warm", emoji:"🔥", title:"Гарячий рол «Курка»",      desc:"Темпура, хрустка скоринка", price:230 },
  { cat:"warm", emoji:"🔥", title:"Гарячий рол «Креветка»",   desc:"Темпура, хрустка скоринка", price:250 },
  { cat:"warm", emoji:"🔥", title:"Гарячий рол «Лосось»",     desc:"Темпура, хрустка скоринка", price:260 },
  { cat:"warm", emoji:"🔥", title:"Запечений рол «Курка»",    desc:"Під сирною шапкою, запечений", price:230 },
  { cat:"warm", emoji:"🔥", title:"Запечений рол «Креветка»", desc:"Під сирною шапкою, запечений", price:250 },
  { cat:"warm", emoji:"🔥", title:"Запечений рол «Лосось»",   desc:"Під сирною шапкою, запечений", price:260 },
  { cat:"warm", emoji:"🔥", title:"Topi maki",                desc:"Теплий фірмовий рол · 260 г", price:260 },

  // —— Макі ——
  { cat:"maki", emoji:"🍙", title:"Унагі Maki",        desc:"Макі з вугром · 130 г", price:130 },
  { cat:"maki", emoji:"🍙", title:"Maki з лососем",    desc:"Класичний макі · 100 г", price:100 },
  { cat:"maki", emoji:"🍙", title:"Maki з вугрем",     desc:"Класичний макі · 100 г", price:100 },
  { cat:"maki", emoji:"🍙", title:"Maki з тунцем",     desc:"Класичний макі · 100 г", price:100 },
  { cat:"maki", emoji:"🍙", title:"Maki з креветкою",  desc:"Класичний макі · 100 г", price:100 },
  { cat:"maki", emoji:"🍙", title:"Maki з авокадо",    desc:"Вегетаріанський макі · 100 г", price:100 },
  { cat:"maki", emoji:"🍙", title:"Maki з огірком",    desc:"Вегетаріанський макі · 100 г", price:100 },

  // —— Закуски та додатки ——
  { cat:"snacks", emoji:"🍟", title:"Картопляні палички", desc:"Хрустка закуска · 200 г · 1 соус у подарунок", price:120 },
  { cat:"snacks", emoji:"🥣", title:"Соус «Ніжний часник»", desc:"30 г · домашній соус", price:10 },
  { cat:"snacks", emoji:"🥣", title:"Соус «Солодкий дим»",  desc:"30 г · домашній соус", price:10 },
  { cat:"snacks", emoji:"🌶️", title:"Соус «Спайсі»",        desc:"30 г · гострий домашній соус", price:10 },
];
MENU.forEach((item, i) => item.id = i);

/* ===========================================================
   ДОБАВКИ (доступні для всіх страв, крім закусок/соусів)
   =========================================================== */
const ADDONS = [
  { id:"av",  emoji:"🥑", title:"Авокадо",        price:15 },
  { id:"ms",  emoji:"🟠", title:"Ікра масаго",     price:20 },
  { id:"ch",  emoji:"🧀", title:"Подвійний сир",   price:25 },
  { id:"sp",  emoji:"🌶️", title:"Соус Спайсі",     price:10 },
  { id:"gl",  emoji:"🧄", title:"Соус Часник",     price:10 },
  { id:"sd",  emoji:"💨", title:"Соус Солодкий дим", price:10 },
  { id:"gn",  emoji:"🫚", title:"Імбир",            price:10 },
  { id:"wb",  emoji:"🥢", title:"Васабі",           price:10 },
];
const ADDON_BY_ID = Object.fromEntries(ADDONS.map(a => [a.id, a]));
const hasAddons = (item) => item.cat !== "snacks";

/* ===========================================================
   РЕНДЕР МЕНЮ + ВКЛАДКИ
   =========================================================== */
const grid = document.getElementById("menuGrid");
const tabsEl = document.getElementById("tabs");

tabsEl.innerHTML =
  `<button class="tab is-active" data-filter="all">Все меню</button>` +
  CATEGORIES.map(c => `<button class="tab" data-filter="${c.key}">${c.name}</button>`).join("");

const catName = (key) => (CATEGORIES.find(c => c.key === key) || {}).name || "";

/* Елегантна лінійна іконка (поки немає фото) */
const DISH_ICON = `<svg class="dish-ic" viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" aria-hidden="true"><circle cx="28" cy="42" r="15"/><circle cx="28" cy="42" r="7"/><circle cx="52" cy="42" r="15"/><circle cx="52" cy="42" r="7"/><circle cx="52" cy="42" r="2.6" fill="currentColor" stroke="none"/></svg>`;

/* Якщо у страви є фото (item.img) — показуємо його, інакше іконку */
const mediaHTML = (i) => i.img
  ? `<img class="dish-img" src="${i.img}" alt="${i.title}" loading="lazy">`
  : DISH_ICON;

function cardHTML(i){
  return `
    <article class="card" data-open="${i.id}">
      <div class="card__media">
        ${i.badge ? `<span class="card__badge">${i.badge}</span>` : ""}
        <span class="card__cat">${catName(i.cat)}</span>
        ${mediaHTML(i)}
      </div>
      <div class="card__body">
        <h3 class="card__title">${i.title}</h3>
        <p class="card__desc">${i.desc}</p>
        <div class="card__foot">
          <span class="card__price">${i.price} ₴</span>
          <button class="card__btn" data-add="${i.id}" aria-label="Додати ${i.title}" title="Додати в кошик">+</button>
        </div>
      </div>
    </article>`;
}

function render(filter = "all"){
  const items = filter === "all" ? MENU : MENU.filter(i => i.cat === filter);
  grid.innerHTML = items.map(cardHTML).join("");
}
render();

tabsEl.addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (!tab) return;
  tabsEl.querySelectorAll(".tab").forEach(t => t.classList.remove("is-active"));
  tab.classList.add("is-active");
  render(tab.dataset.filter);
});

// клік по картці відкриває деталі; клік по "+" швидко додає
grid.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add){ e.stopPropagation(); addToCart(+add.dataset.add); bumpFab(); return; }
  const open = e.target.closest("[data-open]");
  if (open) openProduct(+open.dataset.open);
});

/* ===========================================================
   КОШИК (рядки з урахуванням добавок)
   =========================================================== */
const cart = {};   // key -> { id, addons:[ids], qty }
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
        <div class="ci__ic">${DISH_ICON}</div>
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

/* ===== Відкриття / закриття кошика ===== */
function openCart(){ cartEl.classList.add("open"); overlay.classList.add("show"); lockScroll(true); }
function closeCart(){ cartEl.classList.remove("open"); overlay.classList.remove("show"); lockScroll(false); }
document.getElementById("cartOpen").addEventListener("click", openCart);
document.getElementById("cartOpen2").addEventListener("click", openCart);
document.getElementById("fab").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

function bumpFab(){
  const fab = document.getElementById("fab");
  fab.classList.remove("bump"); void fab.offsetWidth; fab.classList.add("bump");
}

/* ===========================================================
   КАРТКА ТОВАРУ (добавки + схожі товари)
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
            <span class="sim__ic">${DISH_ICON}</span>
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
      <p class="pm__desc">${i.desc}</p>
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
    bumpFab();
    closeProduct();
    openCart();
  }
});

document.getElementById("modalClose").addEventListener("click", closeProduct);
modalOverlay.addEventListener("click", closeProduct);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape"){ closeProduct(); closeCart(); }
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

// Кнопка Telegram поки неактивна (CONFIG.telegramEnabled = false)
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

document.getElementById("copyOrder").addEventListener("click", async () => {
  if (totalCount() === 0) return;
  const order = buildOrderText();
  try { await navigator.clipboard.writeText(order); }
  catch {
    const ta = document.createElement("textarea");
    ta.value = order; document.body.appendChild(ta);
    ta.select(); document.execCommand("copy"); ta.remove();
  }
  const c = document.getElementById("copied");
  c.hidden = false; setTimeout(() => c.hidden = true, 2500);
});

/* ===========================================================
   ДРІБНИЦІ
   =========================================================== */
function lockScroll(on){ document.body.style.overflow = on ? "hidden" : ""; }

const header = document.getElementById("header");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 20));

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open"); burger.classList.remove("open");
}));

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} });
}, { threshold:.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
updateBadges();
