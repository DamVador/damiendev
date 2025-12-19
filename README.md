# Portfolio - Développeur Web Freelance

Site vitrine professionnel pour développeur web freelance spécialisé en sites vitrines et landing pages.

## 📁 Structure du Projet

```
portfolio/
├── index.html              # Page principale
├── success.html            # Page de confirmation formulaire
├── css/
│   ├── variables.css       # Variables CSS (couleurs, fonts, spacing)
│   ├── reset.css           # Reset CSS et styles de base
│   ├── layout.css          # Structure globale (nav, sections, footer)
│   ├── components.css      # Composants réutilisables (boutons, cartes)
│   └── responsive.css      # Media queries (mobile, tablette)
├── js/
│   └── main.js             # Logique JavaScript
└── assets/
    └── images/             # Images et logos
```

## 🎨 Personnalisation

### Changer les couleurs

Éditez `css/variables.css` :

```css
:root {
    --primary: #0A0E27;      /* Couleur principale */
    --accent: #00D9FF;       /* Couleur d'accent (liens, boutons) */
    --secondary: #FF6B35;    /* Couleur secondaire */
    --text: #E8E9ED;         /* Couleur du texte principal */
    --bg: #0F1419;           /* Couleur de fond */
}
```

### Modifier le contenu

1. **Informations personnelles** : Éditez `index.html`, sections Hero et Contact
2. **Services** : Modifiez la section `#services`
3. **Tarifs** : Ajustez les prix dans la section `#tarifs`

### Ajouter des images

Placez vos images dans `assets/images/` et référencez-les :

```html
<img src="assets/images/mon-image.jpg" alt="Description">
```

## 🚀 Déploiement

### Sur Netlify (recommandé)

1. Créez un compte sur [Netlify](https://netlify.com)
2. Glissez-déposez le dossier complet
3. Votre site est en ligne !

### Configuration du formulaire

Le formulaire est configuré pour Netlify Forms :
- Aucune configuration supplémentaire nécessaire
- Les soumissions arrivent dans votre dashboard Netlify

## 🔧 Développement Local

1. Ouvrez `index.html` dans votre navigateur
2. Ou utilisez Live Server (extension VS Code)

## 📱 Responsive

Le site est entièrement responsive avec 3 breakpoints :

- **Mobile** : < 768px
- **Tablette** : 769px - 1024px
- **Desktop** : > 1024px

## ✏️ Modifications Courantes

### Changer le logo

Dans `index.html`, ligne ~60 :
```html
<a href="#" class="logo">VotreNom</a>
```

### Ajouter un service

Copiez un bloc `.service-card` dans la section Services et modifiez le contenu.

### Modifier le prix

Dans la section Pricing, changez les valeurs de prix directement dans le HTML.

## 📧 Contact

Pour toute question sur le code : votre.email@example.com

## 📄 Licence

Ce site est votre propriété. Vous pouvez le modifier et l'utiliser librement.
