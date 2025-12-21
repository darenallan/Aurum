
# Aurum — Vitrine + Marketplace (Prototype Frontend)

**Slogan**: *L’Excellence à Votre Portée*  
**Valeurs**: Qualité — Courtoisie — Efficacité

Ce livrable fournit une vitrine premium (inspirée de SHEIN/TEMU) et une base frontend prête pour une marketplace multi-boutiques avec rôles et automatisations. Il inclut:

- Pages: Home, Catalogue, Fiche produit, À propos, Contact, Connexion, Inscription, Espace vendeur, Dashboard Admin, FAQ, CGU.
- UI responsive (mobile-first), design premium, lazy-loading, SEO basique.
- Gestion de rôles **(démo)**: Super Admin, Maintenancier, Vendeur, Client.
- Automatisation des **durées de boutique**, expiration et bouton **« SAUTER LA BOUTIQUE »** (démo côté client).
- Panier, wishlist, recherche, filtres, promos.

> ?? **Sécurité**: Les comptes de test (emails/mots de passe) sont fournis pour la démo uniquement. **Changez-les en production** et implémentez le backend décrit.

## Démarrage
Ouvrez `index.html` dans un navigateur. Les données de démo sont stockées dans `localStorage`. Connectez-vous avec:
- Super Admin: `aurumcorporate.d@gmail.com` / `GhostAllan@2252`
- Maintenancier: `maint@aurumcorp.local` / `maint`
- Vendeur: `vente.lll@gmail.com` / `1234`
- Client: `client.add@gmail.com` / `4561`

## Architecture
```
AurumCorp/
  index.html, catalogue.html, product.html, ...
  assets/
    css/styles.css
    js/{utils.js, data.js, app.js, auth.js, product.js, seller.js, admin.js}
    img/*.svg
  docs/
    README.md (ce fichier)
    GUIDE_MODIFICATION.md
    GUIDE_MARKETPLACE.md
    BACKEND_SPEC.md
    SECURITY.md
  manifest.json, robots.txt, sitemap.xml
```

## Identité de marque
- Typographie: Helvetica
- Couleurs: Or royal (#C9A227), Noir profond (#0A0A0A), Blanc ivoire (#F8F5E9), Bleu nuit (#0E1B2A), Champagne (#F7E7CE), Bordeaux (#5B0A0A)
- Esthétique africaine/burkinabè & urbain chic (placeholders visuels inclus)

## Fonctionnalités clés (frontend de démo)
- **Rôles**: L’interface s’adapte à: Super Admin, Maintenancier (UI partielle), Vendeur, Client.
- **Boutiques**: Création admin, timer (30/60/90 j), blocage automatique à expiration, masquage produits, notifications simulées.
- **SAUTER LA BOUTIQUE**: Désactivation immédiate, backup interne, masquage des produits, notification simulée.
- **Vendeur**: Ajout produits (multi-images), publication/dépublication, suppression, import CSV, stats.
- **Client**: Recherche auto-suggest, catalogue avec filtres, wishlist, panier.
- **Marketplace**: Multi-boutiques, catégories, promos/coupons (ex: AURUM10).

Pour activer une marketplace complète **scalable et sécurisée**, suivez `docs/BACKEND_SPEC.md` et `docs/GUIDE_MARKETPLACE.md`.
