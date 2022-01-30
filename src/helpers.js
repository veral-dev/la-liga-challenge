export const calculateAge = (dateOfBirth) => {
  const year = Number(dateOfBirth.substr(0, 4));
  const month = Number(dateOfBirth.substr(4, 2)) - 1;
  const day = Number(dateOfBirth.substr(6, 2));
  const today = new Date();
  let age = today.getFullYear() - year;
  if (today.getMonth() < month || (today.getMonth() === month && today.getDate() < day)) {
    age--;
  }
  return age;
};
