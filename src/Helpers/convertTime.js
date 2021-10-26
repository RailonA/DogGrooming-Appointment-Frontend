const convertTime = (time) => {
  const hour = ((time.getHours() % 12) + 1);

  const ampm = hour >= 12 ? ' pm' : ' am';

  const setTime = hour + ampm;

  return `${setTime}`;
};

export default convertTime;
