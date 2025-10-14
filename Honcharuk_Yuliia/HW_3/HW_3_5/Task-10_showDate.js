import { getDate } from "./hw_3_5_getDate.js";

const showDate = () => {
    try {
        const date = getDate();
        console.log("The date is:", date);
        return date;
    } catch (error) {
        return "Could not get date";
    }
}
showDate();