import ssheet from "./TimeCountdown.module.scss";

type Props = {
  label: string;
  date: Date;
  card?: boolean
};

function timeTo (d: Date) {
  // Get the current date and time
  let now = new Date();
  // Get the difference between the specific date and the current date in milliseconds
  let diff = d.getTime() - now.getTime();
  // Check if the specific date is in the past
  if (diff < 0) {
    // Return a message indicating that the date has passed
    return "The date has passed";
  }
  // Calculate the number of days, hours, minutes and seconds left
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  // Return the time left in the format of 6 Day : 22 Hrs : 56 Min : 13 Seg
  return `${days} Day : ${hours} Hrs : ${minutes} Min : ${seconds} Seg`;
}

export const TimeCountdown = ({ label, date, card }: Props) => {
  return (
    <div className={card? ssheet.cardContainer : ssheet.container}>
      <p className={ssheet.label}>{label}</p>
      <p className={ssheet.time}>{timeTo(date)}</p>
    </div>
  );
};
