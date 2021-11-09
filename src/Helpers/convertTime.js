const convertTime = (time) => {
  const timeString = time.substring(11, 16);
  const timeArr = timeString.split(':');
  const ampm = timeArr[0] >= 12 ? ' pm' : ' am';
  return `${timeArr[0] > 12 ? timeArr[0] - 12 : timeArr[0]}:${timeArr[1]} ${ampm}`;
};

export default convertTime;
