const convertDate = (date) => {
  const vars = date.split('-');
  return `${vars[1]}/${vars[2]}/${vars[0]}`;
};

export default convertDate;
