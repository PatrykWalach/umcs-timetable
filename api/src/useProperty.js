module.exports = async (element, property) => {
  if (!element) {
    return null
  }
  const attr = await element.getProperty(property)
  const raw = await attr.jsonValue()
  if (typeof raw === 'string') {
    return raw.trim()
  }
  return raw
}
