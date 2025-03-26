const timeAgo = (date: string | Date): string => {
  const now = new Date();

  const inputDate = new Date(date);

  const diffInSeconds = Math.floor(
    (now.getTime() - inputDate.getTime()) / 1000
  );

  const minutes = 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const months = days * 30;
  const years = days * 365;

  if (diffInSeconds < minutes) {
    return `${diffInSeconds}초 전`;
  } else if (diffInSeconds < hours) {
    const diffInMinutes = Math.floor(diffInSeconds / minutes);
    return `${diffInMinutes}분 전`;
  } else if (diffInSeconds < days) {
    const diffInHours = Math.floor(diffInSeconds / hours);
    return `${diffInHours}시간 전`;
  } else if (diffInSeconds < months) {
    const diffInDays = Math.floor(diffInSeconds / days);
    return `${diffInDays}일 전`;
  } else if (diffInSeconds < years) {
    const diffInMonths = Math.floor(diffInSeconds / months);
    return `${diffInMonths}개월 전`;
  } else {
    const diffInYears = Math.floor(diffInSeconds / years);
    return `${diffInYears}년 전`;
  }
};

export default timeAgo;
