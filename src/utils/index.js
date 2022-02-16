import moment from "moment";

const dateFormatConverter = (timestamp) => {
  if (timestamp) {
    return moment(timestamp).startOf("hour").fromNow();
  } else {
    return null;
  }
};

export { dateFormatConverter };
