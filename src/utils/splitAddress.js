const splitAddress = (inString) => {
  let splitInput = String(inString).split(', ');
  return {
    street: splitInput[0],
    city: splitInput[1],
    state: splitInput[2],
  }
}

export default splitAddress;