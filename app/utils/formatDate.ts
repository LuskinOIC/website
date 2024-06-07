export const formatDate = (date: string): string => {
  const dateDate = new Date(date);
  const formattedDate = `${
    dateDate.getMonth() + 1
  }/${dateDate.getDate()}/${dateDate.getFullYear()}`;
  return formattedDate;
};
