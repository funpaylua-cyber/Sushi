/* ===========================================================
   НАЛАШТУВАННЯ — замініть на свої контакти
   =========================================================== */
const CONFIG = {
  telegram: "sushiua_",   // username у Telegram, куди приходять замовлення (без @)
  shopName: "SUSHI UA",
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
  { cat:"snacks", emoji:"🥑", title:"Авокадо (додаток)",     desc:"Додаток до суші-бургера", price:15 },
  { cat:"snacks", emoji:"🟠", title:"Ікра масаго (додаток)", desc:"Додаток до суші-бургера", price:20 },
];

/* ===========================================================
   РЕНДЕР МЕНЮ + ВКЛАДКИ
   =========================================================== */
const grid = document.getElementById("menuGrid");
const tabsEl = document.getElementById("tabs");

// індекс кожної страви в MENU — використовуємо як id у кошику
MENU.forEach((item, i) => item.id = i);

// вкладки
tabsEl.innerHTML =
  `<button class="tab is-active" data-filter="all">Все меню</button>` +
  CATEGORIES.map(c => `<button class="tab" data-filter="${c.key}">${c.icon} ${c.name}</button>`).join("");

function catName(key){ return (CATEGORIES.find(c => c.key === key) || {}).name || ""; }

function render(filter = "all"){
  const items = filter === "all" ? MENU : MENU.filter(i => i.cat === filter);
  grid.innerHTML = items.map(i => `
    <article class="card">
      <div class="card__media">
        ${i.badge ? `<span class="card__badge">${i.badge}</span>` : ""}
        <span class="card__cat">${catName(i.cat)}</span>
        ${i.emoji}
      </div>
      <div class="card__body">
        <h3 class="card__title">${i.title}</h3>
        <p class="card__desc">${i.desc}</p>
        <div class="card__foot">
          <span class="card__price">${i.price} ₴</span>
          <button class="card__btn" data-add="${i.id}" aria-label="Додати ${i.title}" title="Додати в кошик">+</button>
        </div>
      </div>
    </article>
  `).join("");
}
render();

tabsEl.addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (!tab) return;
  tabsEl.querySelectorAll(".tab").forEach(t => t.classList.remove("is-active"));
  tab.classList.add("is-active");
  render(tab.dataset.filter);
});

/* ===========================================================
   КОШИК
   =========================================================== */
const cart = {};          // { id: qty }
const cartEl       = document.getElementById("cart");
const overlay      = document.getElementById("cartOverlay");
const cartItemsEl  = document.getElementById("cartItems");
const cartEmptyEl  = document.getElementById("cartEmpty");
const cartFootEl   = document.getElementById("cartFoot");
const cartTotalEl  = document.getElementById("cartTotal");

function totalSum(){
  return Object.entries(cart).reduce((s,[id,q]) => s + MENU[id].price * q, 0);
}
function totalCount(){
  return Object.values(cart).reduce((s,q) => s + q, 0);
}

function updateBadges(){
  const n = totalCount();
  document.getElementById("cartCount").textContent = n;
  document.getElementById("fabCount").textContent = n;
  document.getElementById("fabCount").style.display = n ? "flex" : "none";
}

function renderCart(){
  const ids = Object.keys(cart);
  const empty = ids.length === 0;
  cartEmptyEl.style.display = empty ? "flex" : "none";
  cartFootEl.hidden = empty;
  cartItemsEl.innerHTML = ids.map(id => {
    const i = MENU[id], q = cart[id];
    return `
      <div class="ci">
        <div class="ci__emoji">${i.emoji}</div>
        <div class="ci__info">
          <span class="ci__title">${i.title}</span>
          <span class="ci__price">${i.price} ₴</span>
        </div>
        <div class="ci__qty">
          <button data-dec="${id}" aria-label="Менше">−</button>
          <span>${q}</span>
          <button data-inc="${id}" aria-label="Більше">+</button>
        </div>
        <button class="ci__del" data-del="${id}" aria-label="Видалити">🗑</button>
      </div>`;
  }).join("");
  cartTotalEl.textContent = totalSum() + " ₴";
  updateBadges();
}

function addToCart(id){
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
  bumpFab();
}

// делегування на кнопки "+" у меню
grid.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-add]");
  if (btn) addToCart(+btn.dataset.add);
});

// делегування всередині кошика
cartItemsEl.addEventListener("click", (e) => {
  const inc = e.target.closest("[data-inc]");
  const dec = e.target.closest("[data-dec]");
  const del = e.target.closest("[data-del]");
  if (inc){ cart[inc.dataset.inc]++; renderCart(); }
  if (dec){ const id = dec.dataset.dec; if(--cart[id] <= 0) delete cart[id]; renderCart(); }
  if (del){ delete cart[del.dataset.del]; renderCart(); }
});

/* ===== Відкриття / закриття кошика ===== */
function openCart(){ cartEl.classList.add("open"); overlay.classList.add("show"); document.body.style.overflow="hidden"; }
function closeCart(){ cartEl.classList.remove("open"); overlay.classList.remove("show"); document.body.style.overflow=""; }
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
   ФОРМУВАННЯ ТЕКСТУ ЗАМОВЛЕННЯ + ВІДПРАВКА
   =========================================================== */
function buildOrderText(){
  const f = document.getElementById("cartForm");
  const name = f.name.value.trim();
  const phone = f.phone.value.trim();
  const address = f.address.value.trim();
  const note = f.note.value.trim();

  let t = `🍣 Нове замовлення — ${CONFIG.shopName}\n\n`;
  Object.entries(cart).forEach(([id,q]) => {
    const i = MENU[id];
    t += `• ${i.title} × ${q} — ${i.price*q} ₴\n`;
  });
  t += `\n💰 Разом: ${totalSum()} ₴\n\n`;
  t += `👤 Ім'я: ${name}\n`;
  t += `📞 Телефон: ${phone}\n`;
  t += `📍 Адреса: ${address}\n`;
  if (note) t += `📝 Коментар: ${note}\n`;
  return t;
}

function validateForm(){
  const f = document.getElementById("cartForm");
  if (!f.reportValidity()) return false;
  if (totalCount() === 0) return false;
  return true;
}

document.getElementById("sendTg").addEventListener("click", async () => {
  if (!validateForm()) return;
  const order = buildOrderText();

  // копіюємо текст у буфер, щоб клієнт міг просто вставити в чат
  try { await navigator.clipboard.writeText(order); } catch {}

  // відкриваємо Telegram із готовим текстом замовлення
  const text = encodeURIComponent(order);
  window.open(`https://t.me/share/url?url=${encodeURIComponent("https://t.me/"+CONFIG.telegram)}&text=${text}`, "_blank");
});

document.getElementById("copyOrder").addEventListener("click", async () => {
  if (totalCount() === 0) return;
  try {
    await navigator.clipboard.writeText(buildOrderText());
  } catch {
    // запасний варіант
    const ta = document.createElement("textarea");
    ta.value = buildOrderText(); document.body.appendChild(ta);
    ta.select(); document.execCommand("copy"); ta.remove();
  }
  const c = document.getElementById("copied");
  c.hidden = false; setTimeout(() => c.hidden = true, 2500);
});

/* ===========================================================
   ДРІБНИЦІ: шапка, мобільне меню, анімації, рік
   =========================================================== */
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
