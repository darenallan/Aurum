
# Spécification Backend (API + Base de données)

## API (REST-ish)

### Auth & Users
- `POST /auth/login` — retourne JWT
- `POST /auth/register` — crée user (option `wantShop`)
- `GET /users` (admin) — liste + filtres
- `PATCH /users/:id` — bannir/restaurer, changer rôle

### Rôles & Accès
Rôles: `superadmin`, `maintainer`, `seller`, `client`.  
- RBAC: middleware `requireRole([...])`

### Boutiques
- `POST /shops` (admin) — {name, description, category, ownerEmail, durationDays, itemLimit}
- `GET /shops` — liste
- `PATCH /shops/:id` — status (active/blocked/disabled), dates
- `POST /shops/:id/skip` — **SAUTER LA BOUTIQUE** → désactive immédiatement, backup interne, notifie vendeur

### Produits
- `POST /products` (seller) — {shopId, name, price, stock, variations, features, images[]}
- `GET /products` — filtres (cat, color, size, sort)
- `GET /products/:id`
- `PATCH /products/:id` — publier/dépublier, modifier
- `DELETE /products/:id`
- `POST /products/bulk` — CSV + ZIP d’images

### Durées & Automatisations
- `POST /shops/:id/duration` — {startDate, endDate}
- **Job CRON**: toutes les heures →
  - Détecte expiration, `PATCH /shops/:id {status:'blocked'}`
  - Masque produits, envoie email propriétaire

### Notifications
- `POST /notifications` — envoyer email (admin/automatique)
- `GET /notifications` — liste

### Commandes
- `POST /orders` — panier → commande
- `GET /orders` (seller/admin)
- `PATCH /orders/:id` — statut

### Promotions & Coupons
- `POST /promotions` — offres flash, coupons
- `GET /promotions`

## Modèle de données (tables)

### users
- id (uuid), name, email (unique), password_hash, role, banned (bool), created_at

### roles
- id, name, permissions (json)

### shops
- id, name, description, category, owner_id (FK users), start_date, end_date, item_limit, status

### products
- id, shop_id (FK), name, price, stock, color, size, features (json), images (json), published (bool), views, sales, wishlist

### categories
- id, name, parent_id

### orders
- id, user_id, items (json), total, status, created_at

### promotions
- id, code, percent, start_date, end_date, segments (json)

### notifications
- id, user_id, type, payload (json), created_at, read

### action_logs
- id, actor_id, action, target_type, target_id, meta (json), created_at

## Sécurité
- Hash (argon2/bcrypt), JWT avec refresh tokens.
- Validation stricte des entrées, rate limiting.
- CORS, CSRF (selon framework), audit logs.
- Stockage des fichiers en dehors du serveur applicatif + antivirus.

## Scalabilité
- Cache Redis pour catalogue et sessions.
- CDN pour images.
- File d’attente pour emails et traitements ZIP.
- Monitoring (Prometheus/Grafana), traçage (OpenTelemetry).
