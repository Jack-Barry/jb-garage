# @jb-garage/bootstrap-js

<img src="./assets//bsjs.svg" style="height:100px;" />

Bootstrap utility and helper styles made available via JavaScript

## Why?

I've worked with quite a few devs (including past me) who are unfamiliar with a lot of the awesome
features that Bootstrap offers with its utility and helper styles. They/we end up writing a bunch
of custom CSS that is painful to read and maintain. With these utilities and helper classes more
discoverable with intellisense and a more explicit markup in a JavaScript function, it's easier to
reach for what's already there. For example, if you've never worked with Bootstrap before, the class
name `px-1 ms-2` may not be as clear to you as seeing something like

```ts
{ 
  bsJsAll: { spacing: { padding: { x: 1 }, margin: { start: 2 } } },
  lg: { spacing: { margin: { end: 3 } } }
}
```

In the JavaScript object, it's more clear that padding level `1` will be applied to the x axis and
margin level `2` will be applied to the start of the element for all breakpoints, and margin level
`3` will be applied to the end of the element above the `lg` breakpoint.

Granted, invoking a function to return a string for a class isn't the most _performant_ way to apply
Bootstrap styles - passing a static string value is what you'd reach for if it's performance that you're
really concerned with (and you'd probably be building up a custom CSS stylesheet from scratch instead
of reaching for a more generic option like Bootstrap if you're really _really_ concerned with performance).
However, this lib does its best to simply short circuit/early return anything passed to it as empty,
so in a context like frontend frameworks where you're invoking functions for every component anyway,
it shouldn't make a huge difference. Plus, if you're already using tools like the excellent `classnames`
lib, you're already invoking functions to compute class strings 🙂

## Usage

To get an object of `classes` and `inlineStyles`

```ts
import { BootstrapJs, BsJsConfig, bsJs } from '@jb-garage/bootstrap-js'

const config: BsJsConfig = {
  bsJsAll: {
    // options that will apply to all breakpoints
  },
  sm: {
    // options that will apply above the "sm" breakpoint
  }
  // All other breakpoints can be provided in this config, including any of your own custom breakpoints
  //   (Just don't name any of your custom breakpoints "bsJsAll" 😉)
}

const { classes, inlineStyles } = bsJs(config)

// If you're using your own custom Bootstrap prefix instead of `"bs"`, initialize
//   your own instance of `BootstrapJs`. This will ensure that CSS variables get
//   constructed properly
const { classes, inlineStyles } = new BootstrapJs('custom').bsJs(config)
```
