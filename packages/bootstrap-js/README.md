# @jb-garage/bootstrap-js

<img src="./assets//bsjs.svg" style="height:100px;" />

Bootstrap utility and helper styles made available via JavaScript

## Why?

I've worked with quite a few devs (including past me) who are unfamiliar with a lot of the awesome
features that Bootstrap offers with its utility and helper styles. They/we end up writing a bunch
of custom CSS that is painful to read and maintain. With these utilities and helper classes more
discoverable with intellisense and a more explicit markup in a JavaScript function, it's easier to
reach for what's already there.

## Usage

To get an object of `classes` and `styles`

```ts
import { BsJsConfig, bsJs} from '@jb-garage/bootstrap-js'

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

const { classes, styles } = bsJs(config)
```
