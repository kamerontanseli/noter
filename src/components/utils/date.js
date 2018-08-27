export const padZero = n => n < 10 ? `0${n}` : `${n}`

export const toYearMonthDate = value => {
  const date = new Date(value || new Date().toISOString())
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  return `${year}-${padZero(month)}-${padZero(day)}`
}
