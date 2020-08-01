export const formateDate = (date) => {
    let newDate = date.split(' ');
    let time = newDate[newDate.length-1];
    newDate.splice(newDate.length-1, 1);
    newDate = newDate.join(' ');
    if(time.includes("PM")) {
      time = time.replace("PM","");
      time = time.split(":");
      time[0] = (Number(time[0]) !== 12) ? Number(time[0]) + 12 : "12";
      time = time.join(":");
      newDate = newDate + " " + time;
    } else {
      time = time.replace("AM","");
      time = time.split(":");
      time[0] = (Number(time[0]) !== 12) ? time[0] : "00";
      time = time.join(":");
      newDate = newDate + " " + time;
    }
    return new Date(newDate)
}