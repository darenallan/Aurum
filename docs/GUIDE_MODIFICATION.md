
# Guide — Comment modifier le site

## Couleurs & identité
- Modifiez les variables CSS dans `assets/css/styles.css` (`:root`).
- Logo: remplacez `assets/img/placeholder-urban.svg` par vos visuels.

## Typographie
- Par défaut: Helvetica. Vous pouvez charger une police via `<link>` ou `@font-face`.

## Navigation
- Les liens du header/footer sont gérés dans `assets/js/utils.js` (fonctions `injectHeader`, `injectFooter`).

## Sections Home
- Data dynamique rendue par `renderHome()` dans `assets/js/app.js`.
- Catégories: `Store.categories` dans `assets/js/data.js`.

## Catalogue & Filtres
- Modifiez les attributs dans `app.js` (`initCatalogue`).

## Produits
- Démo: `Store.products` (localStorage). En production: API.

## Images
- Remplacez les placeholders `assets/img/placeholder-product-*.svg` par vos images.

## SEO
- Mettez à jour `<meta>` dans chaque page.

## Accessibilité
- Les styles `:focus-visible` et attributs `aria-*` sont inclus de base. Complétez selon vos besoins.
