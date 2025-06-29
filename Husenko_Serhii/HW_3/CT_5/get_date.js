export const getDate = () => {
    if (Math.random() < 0.5) {
        throw Error("An error has occurred");
    } else {
        const date = new Date();
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
};
