var n = (e, t) => () => (e && (t = e((e = 0))), t)
var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports)
function o(e = r) {
  let t = m(e)
  return t || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
}
function m(e = r) {
  return localStorage.getItem(e)
}
var r,
  d = n(() => {
    'use strict'
    r = 'bsTheme'
  })
function s(e = r) {
  let t = o(e)
  document.body.dataset[e] = t
}
var h = n(() => {
  'use strict'
  d()
})
var a = n(() => {
  'use strict'
  d()
})
var i = n(() => {
  'use strict'
  h()
  a()
})
var u = c(() => {
  i()
  s()
})
export default u()
