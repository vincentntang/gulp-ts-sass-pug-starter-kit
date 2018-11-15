GulpJS-Pug-Sass-Typescript Starter Kit is a simple, customizable frontend kit.

It includes jquery 3.3.1 and bootstrap 4.1.3 using the bootstrap thumbnail gallery template

https://startbootstrap.com/template-overviews/thumbnail-gallery/

# Todo

- [ ] Working pipeline
- [ ] Revise pug for simpler example
- [ ] Add live endpoint example

# Installation

NodeJS required

```
npm install gulp-cli -g
```

```
npm install
```

Run

```
gulp
```

Change a `src/scss` file and you should see a new file created in `dist`

## Features

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
        main.scss
.gitignore
LICENSE.md
README.md
package-lock.json
package.json
```
