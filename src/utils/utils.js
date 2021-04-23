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

/**
 * 尺寸单位换算
 * B --> KB/MB/GB/TB
 */
export const byteShift = size => {
  if (!size || isNaN(size)) return ''
  const num = 1024.00
  if (size < num) return size + 'B'
  if (size < Math.pow(num, 2)) return (size / num).toFixed(2) + 'KB'
  if (size < Math.pow(num, 3)) return (size / Math.pow(num, 2)).toFixed(2) + 'MB'
  if (size < Math.pow(num, 4)) return (size / Math.pow(num, 3)).toFixed(2) + 'GB'
  return (size / Math.pow(num, 4)).toFixed(2) + 'TB'
}
/**
 * 尺寸单位换算
 * KB/MB/GB/TB --> B
 */
export const shiftByte = size => {
  if (!size) return 0
  if (typeof size === 'number') return size
  const num = size.slice(0, -2)
  const unit = 1024
  if (size.includes('K')) return num * unit
  if (size.includes('M')) return num * Math.pow(unit, 2)
  if (size.includes('T')) return num * Math.pow(unit, 3)
  return num * Math.pow(unit, 4)
}
