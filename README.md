# Piodjio
Un framework sass (ici le framework fonctionne sous Webpack mais libre à vous d'exporter les fichiers dans votre propre environnement de travail).

## Installation
```shell
# Installer les dépendances
npm i

# Utiliser le framework en environnement de développement
npm run dev

# Utiliser le framework en environnement de production
npm run prod
```

## Configuration
Avec le framework Piodjio, vous pouvez vous rendre dans le fichier config.sass et ajouter vos propres valeurs dans les variables en suivant la syntaxe et vos classes css seront crées.
```scss
// config.sass

$fontSize: (xs: .75rem, sm: .875rem, md: 1rem, lg: 1.125rem, xl: 1.25rem, 2xl: 1.5rem, 3xl: 1.875rem, 4xl: 2.25rem, 5xl: 3rem, 6xl: 4rem, PROPRIETE: VALUE)
```
```css
/* Le rendu en css */

.font-PROPRIETE {
    font-size: VALUE;
}
.xs-font-PROPRIETE {
    font-size: VALUE;
}
.sm-font-PROPRIETE {
    font-size: VALUE;
}
.md-font-PROPRIETE {
    font-size: VALUE;
}
.lg-font-PROPRIETE {
    font-size: VALUE;
}
.xl-font-PROPRIETE {
    font-size: VALUE;
}
```

## Utilisation
Le framework Piodjio à été conçu selon 9 principales axes.

### Layout
```html
<div class="block inline-block inline flex inline-flex none ..."></div>
<!-- Et bien d'autres classes -->
```

### Flexbox
```html
<div class="row row-reverse column column-reverse ..."></div>
<!-- Et bien d'autres classes -->
```

### Sizing
```html
<div class="w-0 w-1 w-2 w-3 ..."></div>
<div class="h-0 h-1 h-2 h-3 ..."></div>
<!-- Et bien d'autres classes -->
```

### Spacing
```html
<div class="m-5 mt-5 mr-5 mb-5 ml-5 mtb-5 mrl-5 ..."></div>
<!-- Et bien d'autres classes -->
```

### Typography
```html
<div class="sans-serif serif ..."></div>
<!-- Et bien d'autres classes -->
```

### Borders
```html
<div class="border-gray-100 border-purple-500 ..."></div>
<!-- Et bien d'autres classes -->
```

### Backgrounds
```html
<div class="bg-gray-100 bg-purple-500 ..."></div>
<!-- Et bien d'autres classes -->
```

### Effects
```html
<div class="opacity-100 opacity-75 ..."></div>
<!-- Et bien d'autres classes -->
```

### Interactivity
```html
<div class="cursor-pointer cursor-move ..."></div>
<!-- Et bien d'autres classes -->
```

Ils existent encore une multitude de classe, je vous laisse regarder le fichier piodjio.css afin de toutes les découvrir.

## Responsive
Si vous souhaitez utilisez certaines propriétés en responsive, vous pouvez utilisez les classes prévues à cet effet.
```html
<div class="xs-flex sm-block md-inline-flex lg-inline-block xl-none"></div>
```