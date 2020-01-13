module.exports = async (page, selector) => {
  const elements = await page.$$(selector)
  return elements
}
