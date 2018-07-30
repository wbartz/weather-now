export const temperature = temp => parseInt((temp - 32) / 1.8, 10);

export const velocity = vel => parseFloat(vel * 1.609344).toFixed(2);

export const date = (data) => {
  const newDate = new Date(data);
  let day = newDate.getDate();

  if (day < 10) {
    day = `${'0'.repeat(1)}${String(day)}`;
  }

  let month = date.getMonth() + 1;

  if (month < 10) {
    month = `${'0'.repeat(1)}${String(month)}`;
  }

  const year = date.getFullYear();

  const formated = `${day}/${month}/${year}`;

  return formated;
};
