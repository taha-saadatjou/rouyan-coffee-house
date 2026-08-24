const $ = (s, e = document) => e.querySelector(s);
const $$ = (s, e = document) => [...e.querySelectorAll(s)];
const money = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    n,
  );
let cart = JSON.parse(localStorage.getItem("roast-cart") || "[]");
function save() {
  localStorage.setItem("roast-cart", JSON.stringify(cart));
  renderCart();
}
function add(item) {
  const found = cart.find((x) => x.id === item.id);
  found ? found.quantity++ : cart.push({ ...item, quantity: 1 });
  save();
  const t = $("#toast");
  if (t) {
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 1800);
  }
}
function renderCart() {
  const badge = $("#cartCount"),
    list = $("#cartList"),
    total = $("#cartTotal");
  const count = cart.reduce((a, x) => a + x.quantity, 0);
  if (badge) {
    badge.textContent = count;
    badge.classList.remove("badge-pop");
    void badge.offsetWidth;
    badge.classList.add("badge-pop");
  }
  if (!list) return;
  list.innerHTML = cart.length
    ? cart
        .map(
          (x) =>
            `<li class="flex gap-3 py-3 border-b border-stone-100"><img class="h-14 w-14 rounded-xl object-cover" src="${x.image}" alt=""><div class="flex-1"><p class="font-bold">${x.name}</p><p class="text-sm text-stone-500">${money(x.price)}</p></div><div class="flex items-center gap-2"><button aria-label="Remove one ${x.name}" data-minus="${x.id}" class="h-7 w-7 rounded-full bg-stone-100">−</button><span>${x.quantity}</span><button aria-label="Add one ${x.name}" data-plus="${x.id}" class="h-7 w-7 rounded-full bg-stone-100">+</button></div></li>`,
        )
        .join("")
    : '<li class="py-12 text-center text-stone-500">Your cart is waiting for its first treat.</li>';
  total.textContent = money(cart.reduce((a, x) => a + x.price * x.quantity, 0));
  $$("[data-minus]").forEach(
    (b) =>
      (b.onclick = () => {
        const x = cart.find((x) => x.id === b.dataset.minus);
        if (--x.quantity === 0) cart = cart.filter((y) => y !== x);
        save();
      }),
  );
  $$("[data-plus]").forEach(
    (b) =>
      (b.onclick = () => {
        cart.find((x) => x.id === b.dataset.plus).quantity++;
        save();
      }),
  );
}
function initShared() {
  $("#cartToggle")?.addEventListener("click", () =>
    $("#cartDrawer").classList.add("open"),
  );
  $("#cartClose")?.addEventListener("click", () =>
    $("#cartDrawer").classList.remove("open"),
  );
  $("#mobileToggle")?.addEventListener("click", () =>
    $("#mobileMenu").classList.toggle("hidden"),
  );
  $$(".reveal").forEach((el) =>
    new IntersectionObserver(
      (es) =>
        es.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.12 },
    ).observe(el),
  );
  renderCart();
}
function initForm(form) {
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;
    $$("[required]", form).forEach((f) => {
      const bad =
        !f.value.trim() ||
        (f.type === "email" && !f.validity.valid) ||
        (f.name === "confirmPassword" &&
          f.value !== $("[name=password]", form).value);
      f.classList.toggle("invalid", bad);
      ok &&= !bad;
    });
    if (ok) {
      $(".form-content", form)?.classList.add("hidden");
      $(".form-success", form)?.classList.remove("hidden");
    }
  });
  $$(".field", form).forEach((f) =>
    f.addEventListener("input", () => f.classList.remove("invalid")),
  );
}
document.addEventListener("DOMContentLoaded", initShared);
