# @jb-garage/theme-switcher-react

React implementation of `@jb-garage/theme-switcher`

## Installation

```bash
npm i @jb-garage/{theme-switcher,theme-switcher-react}
```

## Usage

> To prevent flickering on page load, see notes in the `@jb-garage/theme-switcher`
> README.

### `ThemeSwitcherContextProvider`

```tsx
import { ThemeSwitcherContextProvider } from '@jb-garage/theme-switcher-react';

function App(props: PropsWithChildren) {
  return <ThemeSwitcherContextProvider>
    {props.children}
  </ThemeSwitcherContextProvider>
}
```

#### Options

- `themeKey` can be set to a custom value. For example, `"bsTheme"` if you are
  using Bootstrap

### `useThemeSwitcher`

Use the `setTheme` function and `currentTheme` value provided by `useThemeSwitcher`
wherever you need them

```ts
const { setTheme, currentTheme } = useThemeSwitcher()
```

### Usage in NextJS Apps

- You can wrap your app in `ThemeSwitcherContextProvider` in `pages/_app.tsx`
- If you are rendering a toggle button with state based on `currentTheme`, you
  may need to prevent hydration errors by doing something like this:

  ```tsx
  export default function ThemeSwitcherButton() {
    const { setTheme, currentTheme } = useThemeSwitcher()
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
      setHydrated(true)
    }, [])

    if (!hydrated) {
      // You could also return a placeholder here
      return null
    }

    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'

    return (
      <button
        className="btn btn-primary"
        onClick={() => {
          setTheme(nextTheme)
        }}
      >
        Switch to {nextTheme}
      </button>
    )
  }
  ```
