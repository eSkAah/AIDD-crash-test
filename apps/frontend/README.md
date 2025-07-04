# Sirius Frontend

## Architecture des composants

```
src/
├── components/
│   ├── ui/           # Composants UI réutilisables
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Card.jsx
│   │   ├── SiriusLogo.jsx
│   │   └── index.js
│   ├── auth/         # Composants d'authentification
│   │   └── AuthForm.jsx
│   ├── layout/       # Composants de mise en page
│   │   └── BrandingSection.jsx
│   └── pages/        # Pages complètes
│       └── HomePage.jsx
├── utils/
│   └── cn.js         # Utilitaire pour les classes CSS
├── App.jsx
├── main.jsx
└── index.css         # Styles Tailwind + thème Sirius
```

## Thème de couleurs Sirius

- **Bleu Foncé Sirius** (#0A0F2C) - Couleur principale (fond, header)
- **Jaune Sirius** (#FFE600) - Accent / Call-to-action
- **Noir Sirius** (#18191A) - Texte très foncé / Fond contrasté
- **Blanc Sirius** (#FFFFFF) - Fond clair / Texte secondaire
- **Gris Clair Sirius** (#F5F5F7) - Arrière-plan clair type Apple
- **Gris Foncé Sirius** (#5A5A5A) - Texte secondaire / Désactivé
- **Bleu Acier Sirius** (#2A2D3E) - Alternative au noir (cards, modales)

## Composants réutilisables

### Button
```jsx
<Button variant="primary|secondary|outline|ghost" size="sm|default|lg">
  Texte du bouton
</Button>
```

### Input
```jsx
<Input label="Email" type="email" error={errorMessage} />
```

### Card
```jsx
<Card>
  <CardHeader>
    <CardTitle>Titre</CardTitle>
  </CardHeader>
  <CardContent>
    Contenu
  </CardContent>
</Card>
```

### SiriusLogo
```jsx
<SiriusLogo size="sm|default|lg" />
```

## Classes Tailwind personnalisées

- `.btn-primary` - Bouton principal jaune
- `.btn-secondary` - Bouton secondaire bleu acier
- `.card` - Carte avec styles Sirius
- `.input-field` - Champ de saisie avec styles Sirius
- `.form-error` - Texte d'erreur
- `.form-success` - Texte de succès

## Scripts

- `nx serve frontend` - Démarrer le serveur de développement
- `nx build frontend` - Construire pour la production
- `nx lint frontend` - Vérifier le code avec ESLint+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
