/** user email 데이터 유효성 검사 */
const isValidUserEmailFunc = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/** user password 데이터 유효성 검사 */
const isValidUserPasswordFunc = (password: string): boolean => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return passwordRegex.test(password);
};

/** user password confirm 데이터 유효성 검사 */
const isValidUserPasswordConfirmFunc = (
  password: string,
  passwordConfirm: string,
): boolean => {
  if (password === passwordConfirm) {
    return true;
  } else {
    return false;
  }
};

/** user birth 데이터 유효성 검사 */
const isValidUserBirthFunc = (userBirth: string): boolean => {
  // 년, 월, 일을 분리
  const year = userBirth.substr(0, 2);
  const month = userBirth.substr(2, 2);
  const day = userBirth.substr(4, 2);

  // 년, 월, 일을 숫자로 변환
  const yearNum = parseInt(year, 10);
  const monthNum = parseInt(month, 10);
  const dayNum = parseInt(day, 10);

  // 유효한 날짜인지 검사
  const isValidYear = yearNum >= 0 && yearNum <= 99;
  const isValidMonth = monthNum >= 1 && monthNum <= 12;
  const isValidDay = dayNum >= 1 && dayNum <= 31;

  // 자리 수가 일치한지 검사
  const isValidLength = userBirth.length === 6;

  return isValidYear && isValidMonth && isValidDay && isValidLength;
};

export {
  isValidUserEmailFunc,
  isValidUserPasswordFunc,
  isValidUserPasswordConfirmFunc,
  isValidUserBirthFunc,
};
