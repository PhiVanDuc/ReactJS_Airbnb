import moment from "moment";

export const formatTimeToDate = (time) => {
    const date = new Date(time);
    return moment(date).format('MM/DD/YYYY');
}

