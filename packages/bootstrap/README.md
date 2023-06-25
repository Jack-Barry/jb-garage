# @jb-garage/bootstrap

Bootstrap customized to my liking

## Installation

```bash
npm i @jb-garage/bootstrap
```

## Usage

### Stylesheet

You can use the provided `styles/index.css` or `styles/index.min.css`.

You can also compile the Sass from `node_modules/@jb-garage/bootstrap/scss` to your
liking. If compiling the Sass, you'll need to also have the peer dependency `bootstrap`
installed:

```bash
npm i bootstrap
```

And include a `load-path` when running `sass` so that it knows where `@jb-garage/style-dictionary`
is, e.g.:

```bash
sass --load-path=node_modules/@jb-garage
```
