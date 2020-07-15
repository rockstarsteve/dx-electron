/**
 * 判断是否是外部链接路径
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 判断是否是已经存在js map中的用户
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername (str) {
  // eslint-disable-next-line camelcase
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
