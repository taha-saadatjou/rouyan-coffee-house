# Rouyan coffee ordering interface

Rouyan is a warm, modern coffee shop ordering experience for browsing a seasonal menu, filtering items by category, and building a lightweight local cart. The static prototype also includes responsive pages for the shop story, contact form, account login, and signup flow.

Open `index.html` in a browser. The pages use Tailwind’s CDN for a zero-build static prototype; shared presentation and behavior live in `assets/site.css`, `assets/site.js`, and `assets/components.js`.

## Data and templating

`data/menu.json` and `data/forms.json` are the canonical sample data models. Menu cards are rendered from JSON in this prototype. In a Flask/Django/Jinja page, the menu grid maps directly to:

```jinja2
{% for item in menu_items if active_category == 'All' or item.category == active_category %}
  <article class="card-3d ...">
    <img src="{{ item.image }}" alt="{{ item.name }}">
    <h3>{{ item.name }}</h3><b>${{ '%.2f'|format(item.price) }}</b>
    {% if item.options.sizes %}<span>Customisable</span>{% endif %}
  </article>
{% else %}
  <p>No items are available in this category today.</p>
{% endfor %}
```

The shared header/footer drawer should become template includes (`partials/header.html`, `partials/cart.html`, `partials/footer.html`). Forms map cleanly from `forms.json` by looping over field config and conditionally rendering an `input` or `textarea`.

## Interactions and accessibility

- CSS handles card perspective/lift, glass surfaces, animated focus rings, hero float, and reveal transitions; `prefers-reduced-motion` disables these.
- Lightweight JavaScript renders categories, keeps a localStorage cart, controls the drawer/mobile menu, and supplies client-side validation and success states.
- Forms use semantic labels, native input types, required fields, keyboard-safe buttons, and descriptive image alt text. A production integration should add server-side validation and connect visible error text through `aria-describedby`.
- Empty-cart and category-empty rendering are included. The cart data can be extended with selected size/milk/add-ons before calling `add()`.
