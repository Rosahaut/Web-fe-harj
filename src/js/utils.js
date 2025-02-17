
const parseDate = (dateString) => {
const date = new Date(dateString);
// Request a weekday along with a long date
const options = {
    timeZone: "utc",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return date.toLocaleString("fi-FI", options);
}

export {parseDate}