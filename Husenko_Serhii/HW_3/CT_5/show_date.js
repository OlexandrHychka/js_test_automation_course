import { getDate } from "./get_date.js";

const showDate = () => {
    try {
        const date = getDate();
        return date;
    } catch {
        return "Could not get date";
    }
};

console.log(showDate());
