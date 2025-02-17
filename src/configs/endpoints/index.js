// Định nghĩa các endpoints API
const ENDPOINTS = {
  work: {
    create: '/work-manager/work/create',
    delete: (workId) => `/work-manager/work/delete/${workId}`,
    edit: (workId) => `/work-manager/work/edit/${workId}`,
    deletePermanent: (workId) => `/work-manager/work/delete-permanent/${workId}`,
    search: '/work-manager/work/search',
    searchStatus: '/work-manager/work-status/search',
    info: (workId) => `/work-manager/work/info/${workId}`
  },
  workSearch: (employeeId) => {
    return {
      create: `/work-manager/work-search/create/${employeeId}`,
      edit: (searchPatternId) => `/work-manager/work-search/edit/${employeeId}/${searchPatternId}`,
      deletePermanent: (searchPatternId) =>
        `/work-manager/work-search/delete-permanent/${employeeId}/${searchPatternId}`,
      getAll: `/work-manager/work-search/all/${employeeId}`
    }
  }
}

export default ENDPOINTS
