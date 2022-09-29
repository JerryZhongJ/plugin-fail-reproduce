
export const searchIndex = [
  {
    "path": "/",
    "title": "",
    "pathLocale": "/",
    "contents": []
  },
  {
    "path": "/404.html",
    "title": "",
    "pathLocale": "/",
    "contents": []
  }
]
export const UPD_NAME = 'update-vuepress-plugin-full-text-search2-search-index'

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__[UPD_NAME]) {
    __VUE_HMR_RUNTIME__[UPD_NAME](searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    if (__VUE_HMR_RUNTIME__[UPD_NAME]) {
      __VUE_HMR_RUNTIME__[UPD_NAME](searchIndex)
    }
  })
}
