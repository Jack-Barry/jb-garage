# @jb-garage/theme-switcher

Framework agnostic tools for switching web app theme

## Installation

```bash
npm i @jb-garage/theme-switcher
```

## Usage

### Provided Tools

#### `setThemeOnLoad`

To prevent flickering, you should set the theme before anything else loads.
`setThemeOnLoad` is a helper function you can use to accomplish this.

#### `ThemeSwitcher`

Once the app has loaded, you can initialize an instance of `ThemeSwitcher`. When
calling the `setTheme` method, a `ThemeSwitchEvent` will be emitted that can be
listened for in your application to invoke callbacks.

#### Options

Both `setThemeOnLoad` and the constructor for `ThemeSwitcher` accept an optional
`themeKey` value so that you may choose a value other than the default of `"theme"`.
For example, you may set it to `"bsTheme"` if using Bootstrap.

### How to Use It

#### Prevent Flickering on Load

First, you'll  want to have a local script available somewhere in your site that
will set the theme on load to prevent flickering. `scripts/setThemeOnLoad.js` provides
the code for this. You can just copy and paste it into your `public` directory.

Note that if you need a different theme key than `"theme"`, e.g. `"bsTheme"` for
Bootstrap, you'll need to do a search-and-replace for `"theme"` in the script.

If you're lazy like me, there's a provided `scripts/setup.js` that will do the
copy/paste for you, and set the theme key. This can be handy for making sure your
set theme on load script aligns with the current version provided by this package.

```bash
node node_modules/@jb-garage/theme-switcher/scripts/setup.js <RELATIVE_PATH_TO_DESTINATION> <THEME_KEY>
```

By default, `<RELATIVE_PATH_TO_DESTINATION>` will be `"public/setThemeOnLoad.js"`
and `<THEME_KEY>` is `"theme"`.

Alternatively, you could write and bundle your own script using the provided
`setThemeOnLoad` function.

Here's what importing from `public` might look like in your markup:

`index.html`

```html
<body>
  <script type="module" src="setThemeOnLoad.js">
</body>
```

In NextJS, you can use the `Script` component:

```tsx
<Script src="setThemeOnLoad.js" type="module" strategy="beforeInteractive" />
```

#### Initialize the `ThemeSwitcher` Instance

Somewhere at the beginning of your application code, initialize a `ThemeSwitcher`
instance and attach event listeners to it. Any time the `setTheme` method is invoked,
theme change events will be dispatched.

> For React, a companion lib `@jb-garage/theme-switcher-react` is available that
> takes care of setting up the event listener and wraps the state in a context

```js
import { ThemeChangeEvent, ThemeSwitcher } from '@jb-garage/theme-switcher';

const themeSwitcher = new ThemeSwitcher();

function handleThemeChange(event) {
  console.log(event.detail)
}

themeSwitcher.addEventListener(ThemeChangeEvent.type, handleThemeChange);

// cleanup
themeSwitcher.removeEventListener(ThemeChangeEvent.type, handleThemeChange);
```

#### Using the `ThemeSwitcher` Instance

##### Setting the Theme

Invoke `setTheme` on the `themeSwitcher` instance to set the theme and dispatch
relevant events

```ts
themeSwitcher.setTheme('dark')
```

##### Getting the Current Theme

```ts
themeSwitcher.getCurrentTheme()
```
