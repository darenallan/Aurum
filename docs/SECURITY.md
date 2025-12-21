
# Sécurité & Bonnes pratiques

- **NE PAS** conserver des mots de passe en clair. Utilisez des hashes robustes.
- Activez la **vérification d’email** et **2FA** pour l’admin.
- Implémentez **RBAC** pour toutes les routes sensibles.
- Utilisez **HTTPS** partout, HSTS, CSP, et sécurisez les cookies.
- Protégez les uploads (limites, antivirus, validation MIME, traitement ZIP hors-ligne).
- Journalisez les actions admin (action_logs) et surveillez les anomalies.
- Changez les comptes de test avant toute mise en production.
