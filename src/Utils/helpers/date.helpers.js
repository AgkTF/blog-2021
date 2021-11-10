const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
export const enUSDateRenderer = date => {
  if (date) {
    return new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(date));
  }
};
