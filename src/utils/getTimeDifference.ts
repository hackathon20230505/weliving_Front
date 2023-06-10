export const getTimeDifference = (props) => {
  const currentTime = new Date(); // 현재 시간
  const propsTime = new Date(props); // props로 전달된 시간

  const timeDifference = currentTime.getTime() - propsTime.getTime(); // 시간 차이 (밀리초 단위)

  const minutes = Math.floor(timeDifference / (1000 * 60)); // 분 단위
  const hours = Math.floor(timeDifference / (1000 * 60 * 60)); // 시간 단위
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // 일 단위
  const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30)); // 달 단위
  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30 * 12)); // 년 단위

  if (minutes < 60) {
    return `${minutes} 분 전`;
  } else if (hours < 24) {
    return `${hours} 시간 전`;
  } else if (days < 30) {
    return `${days} 일 전`;
  } else if (months < 12) {
    return `${months} 달 전`;
  } else {
    return `${years} 년 전`;
  }
};
