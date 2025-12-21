
# Guide — Activer la marketplace complète

Ce prototype frontend illustre l’UX et les règles. Pour une plateforme complète:

1. **Backend/API** (voir `BACKEND_SPEC.md`):
   - Déployez une API (Node.js/Express, Django, ou Laravel) avec JWT/OAuth.
   - Implémentez les endpoints Users/Rôles, Boutiques, Produits, Uploads, Durées, Notifications, Commandes, Promotions.
2. **Base de données**:
   - Tables: `users`, `roles`, `shops`, `products`, `categories`, `orders`, `promotions`, `notifications`, `action_logs`.
3. **Stockage & CDN**:
   - Images sur S3/Cloud Storage + CDN. Support upload multi-images & ZIP.
4. **Sécurité**:
   - Hash de mots de passe (bcrypt/argon2), vérif email, 2FA facultatif.
   - RBAC strict (SuperAdmin/Maintainer/Seller/Client), rate limiting, CSRF, CORS.
5. **Automatisations**:
   - Cron jobs pour expiration des boutiques, email (SES/SendGrid), mise en quarantaine des produits.
6. **Paiements**:
   - Intégration passerelle (Wave, Orange Money, MTN, PayPal selon pays), commissions admin.
7. **Analytics**:
   - Traquer vues, conversions, paniers, ventes; dashboards.
8. **Scalabilité**:
   - Conteneurs (Docker), orchestrateur (Kubernetes), cache (Redis), queue (RabbitMQ).

Après déploiement, remplacez les stores frontend par des appels API.
