const convertTime = (time) => {
  // const hour = ((time.getHours() % 12));
  // const ampm = hour >= 12 ? ' pm' : ' am';
  // const setTime = hour + ampm;
  // return `${setTime}`;
  const timeString = time.substring(11, 16);
  const timeArr = timeString.split(':');
  const ampm = timeArr[0] >= 12 ? ' pm' : ' am';
  console.log('Time', timeArr);
  return `${timeArr[0] > 12 ? timeArr[0] - 12 : timeArr[0]}:${timeArr[1]} ${ampm}`;
};

export default convertTime;
