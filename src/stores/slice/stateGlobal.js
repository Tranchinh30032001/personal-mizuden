const stateGlobal = {
  lang:'ja',
  pageTitle: ''
}

export const createGlobalSlice = (set) => ({
  ...stateGlobal,
  setLanguage: (lang) => set(() => lang),
  setPageTitle: (pageTitle) => set(() => pageTitle)
})
