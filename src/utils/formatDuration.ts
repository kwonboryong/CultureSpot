import formatDate from '@/utils/formatDate';

const formatDuration = (startDate: string, endDate?: string): string => {
  const [formattedStartDate, formattedEndDate] = [
    formatDate(startDate).slice(0, 10),
    endDate && formatDate(endDate).slice(0, 10),
  ];
  if (!formattedEndDate || formattedStartDate === formattedEndDate) {
    return formattedStartDate;
  }
  return `${formattedStartDate}-${formattedEndDate}`;
};

export default formatDuration;
