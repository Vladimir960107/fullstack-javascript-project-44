const IsNumberEvenCheckerYesOrNo = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  } if (number % 2 === 1) {
    return 'no';
  }
  return null;
};

export default IsNumberEvenCheckerYesOrNo;
