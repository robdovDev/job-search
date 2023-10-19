const nextElementInList = (list, value) => {
  const currValueIdx = list.indexOf(value)
  return list[(currValueIdx + 1) % list.length]
}

export default nextElementInList
