const convertAcresToSQFT = (acres) => {
  return { sqft: Math.round(acres * 43560) };
}

export default convertAcresToSQFT;