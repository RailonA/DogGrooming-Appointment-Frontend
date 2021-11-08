const convertDate = (date) => {
  console.log('DATE ==>', date);
  // let day = date.getDate() + 1;
  // day = day < 10 ? `0${day}` : day;
  // let month = date.getMonth() + 1;
  // month = month < 10 ? `0${month}` : month;
  // const year = date.getFullYear();
  // return `${month}/${day}/${year}`;
  const vars = date.split('-');
  return `${vars[1]}/${vars[2]}/${vars[0]}`;
};

export default convertDate;
