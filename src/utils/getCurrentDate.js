export default function getCurrentDate() {
    // Create a new Date object
    const currentDate = new Date();

    // Get individual components of the date
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][currentDate.getDay()];
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();

    // Display the current day, month, date, and year
    const result = `${dayOfWeek}, ${month}, ${date}, ${year}`

    return result;
}
