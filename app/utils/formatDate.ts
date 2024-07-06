export const formatDate = (date: Date | string | undefined): string => {
  if (!date) return "";

  const dateObject = new Date(date);
  const formattedDate = `${
    dateObject.getMonth() + 1
  }/${dateObject.getDate()}/${dateObject.getFullYear()}`;

  return formattedDate;
};
