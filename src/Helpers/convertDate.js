const convertDate = (date) => {
  let day = date.getDate() + 1;
  day = day < 10 ? `0${day}` : day;
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

export default convertDate;
