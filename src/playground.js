const interval = setInterval(() => {
  console.log('two seconds!')
}, 2000)

setTimeout(() => {
  clearInterval(interval)
}, 10100)
