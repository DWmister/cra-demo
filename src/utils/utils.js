export const setLocal = (prop, val) => localStorage.setItem(prop, JSON.stringify(val))
export const getLocal = (prop) => {
  if (localStorage.getItem(prop)) return JSON.parse(localStorage.getItem(prop))
  return ''
}
export const removeLocal = (prop) => localStorage.removeItem(prop)

/**
 * 后缀验证
 * @param {待验证后缀} suffix
 * @param {待验证字符串} string
 * demo 验证后缀是否是.mp4 validSuffix('mp4', 'demo.mp4')
 */
export const validSuffix = (suffix, string) => RegExp(`\\.${suffix}$`, 'gi').test(string)
