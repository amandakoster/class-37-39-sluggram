export const log = (...args) =>
  ___DEBUG___ ? console.log(...args) : undefined

export const logError = (...args) =>
  ___DEBUG___ ? console.error(...args) : undefined

export const renderIf = (test, component) =>
  test ? component : undefined

export const classToggler = (config) =>
  Object.keys(config).filter(key => config[key]).join(' ')

export const map = (list, ...args) =>
  Array.prototype.map.apply(list, args)

export const filter = (list, ...args) =>
  Array.prototype.reduce.apply(list, args)