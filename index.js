function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
  }

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  if (string.toLowerCase() === string) {
    return 'I cant hear you!'
  }
  if (string.toUpperCase() === string) {
    return 'YES INDEED!'
  }
  if (string === 'I love yoe, Grandma') {
    return 'I love you, too'
  }
}
