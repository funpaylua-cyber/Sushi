/* ===== Menu data ===== */
const MENU = [
  // Суші та роли
  { cat:"sushi", emoji:"🍣", title:"Філадельфія", desc:"Лосось, вершковий сир, огірок, рис, норі", price:189, badge:"Хіт" },
  { cat:"sushi", emoji:"🍱", title:"Каліфорнія", desc:"Краб, авокадо, огірок, ікра масаго", price:159 },
  { cat:"sushi", emoji:"🥢", title:"Запечений рол", desc:"Лосось, сир, гарячий соус, кунжут", price:175, badge:"Гарячий" },
  { cat:"sushi", emoji:"🍙", title:"Спайсі рол", desc:"Тунець, гострий соус, огірок, рис", price:165 },
  { cat:"sushi", emoji:"🍣", title:"Суші-бургер «Лосось»", desc:"Рисова булочка, лосось, соус, овочі", price:50 },
  { cat:"sushi", emoji:"🍤", title:"Суші-бургер «Креветка»", desc:"Рисова булочка, креветка, мікс соусів", price:30 },
  { cat:"sushi", emoji:"🍗", title:"Суші-бургер «Курка»", desc:"Рисова булочка, курка, свіжі овочі", price:27 },
  { cat:"sushi", emoji:"🍥", title:"Вегетаріанський рол", desc:"Авокадо, огірок, болгарський перець", price:139 },

  // Бургери
  { cat:"burger", emoji:"🍔", title:"Бургер S Класичний", desc:"Яловичина, сир чеддер, овочі, фірмовий соус", price:135, badge:"Хіт" },
  { cat:"burger", emoji:"🧀", title:"Подвійний чізбургер", desc:"Дві котлети, подвійний сир, бекон", price:175 },
  { cat:"burger", emoji:"🍗", title:"Курячий бургер", desc:"Хрустка курка, салат, сирний соус", price:125 },

  // Шаурма
  { cat:"shawarma", emoji:"🌯", title:"Шаурма Класична", desc:"Курка, овочі, фірмовий соус у лаваші", price:95 },
  { cat:"shawarma", emoji:"🌯", title:"Шаурма XXL", desc:"Подвійне м'ясо, сир, овочі, соуси", price:135, badge:"Ситна" },
  { cat:"shawarma", emoji:"🥙", title:"Шаурма у піті", desc:"Соковите м'ясо, овочі, гострий соус", price:99 },

  // Піца
  { cat:"pizza", emoji:"🍕", title:"Піца Маргарита", desc:"Томати, моцарела, базилік", price:155 },
  { cat:"pizza", emoji:"🍕", title:"Піца Пепероні", desc:"Пікантна салямі, моцарела, соус", price:185, badge:"Гостра" },
  { cat:"pizza", emoji:"🍕", title:"Піца 4 сири", desc:"Моцарела, чеддер, пармезан, дор-блю", price:199 },

  // Салати
  { cat:"salad", emoji:"🥗", title:"Салат Цезар", desc:"Курка, сухарики, пармезан, соус цезар", price:115 },
  { cat:"salad", emoji:"🥗", title:"Салат з тунцем", desc:"Тунець, мікс салатів, овочі, кунжут", price:135 },
  { cat:"salad", emoji:"🥬", title:"Грецький салат", desc:"Фета, оливки, свіжі овочі, олія", price:105 },
];

const catNames = { sushi:"Суші", burger:"Бургер", shawarma:"Шаурма", pizza:"Піца", salad:"Салат" };

/* ===== Render menu ===== */
const grid = document.getElementById("menuGrid");

function render(filter = "all"){
  const items = filter === "all" ? MENU : MENU.filter(i => i.cat === filter);
  grid.innerHTML = items.map(i => `
    <article class="card">
      <div class="card__media">
        ${i.badge ? `<span class="card__badge">${i.badge}</span>` : ""}
        ${i.emoji}
      </div>
      <div class="card__body">
        <h3 class="card__title">${i.title}</h3>
        <p class="card__desc">${i.desc}</p>
        <div class="card__foot">
          <span class="card__price">${i.price} ₴</span>
          <button class="card__btn" aria-label="Додати ${i.title}" title="Додати до замовлення">+</button>
        </div>
      </div>
    </article>
  `).join("");
}
render();

/* ===== Tabs ===== */
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("is-active"));
    tab.classList.add("is-active");
    render(tab.dataset.filter);
  });
});

/* ===== Header scroll ===== */
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

/* ===== Mobile nav ===== */
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  burger.classList.remove("open");
}));

/* ===== Reveal on scroll ===== */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} });
}, { threshold:.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ===== Order form (demo) ===== */
const form = document.getElementById("orderForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("formNote").hidden = false;
  form.reset();
});

/* ===== Year ===== */
document.getElementById("year").textContent = new Date().getFullYear();
