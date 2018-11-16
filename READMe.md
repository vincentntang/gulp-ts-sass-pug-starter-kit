GulpJS-Pug-Sass-Typescript Starter Kit is a simple, customizable frontend kit.

It includes CDN links to jquery 3.3.1 and bootstrap 4.1.3. Includes the following [startbootstrap templates](https://startbootstrap.com/template-categories/unstyled/)

- Bare
- 1 Column Portfolio
- Shop Item
- Heroic

# Installation

Have NodeJS installed

Fork or download Repo.
Go to your root directory.

```
npm install gulp-cli -g
npm install
```

Startup using

```
gulp
```

## Directory Structure

This project contains a `src` and a `dest` folder, and a few starter files located in the `src/scss/base` directory.

- **dist** - the distribution folder that contains only CSS, Javascript and HTML output from gulp processes
- **src** - SCSS, Typescript, PUG files
- **.gitignore** - ignore `node_modules` folder
- **package.json** - npm package folder to initialize `node_modules`

```
dist/
├── css/
│   ├── main.css
│   └── main.css.map
├── js/
│   └── script.jsg
├── index.html
src/
└── scss/
    ├── base/
    │   ├── _mixins.scss
    │   ├── _normalize.scss
    │   ├── _reset.scss
    │   └── _variables.scss
    └── components/
        └── _layout.scss
└── pug/
    ├── partials/
    │   ├── _footer.pug
    │   ├── _header.pug
    │   ├── _layout.pug
    └── components/
        └── _index.pug
        └── _heroic.pug
        └── _portfolio.pug
        └── _shop.pug
└── ts/
    ├── ts
       └── _script.ts
.gitignore
LICENSE.md
README.md
package-lock.json
package.json
```
