export const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
  
    const dayWithSuffix = `${day}${getDaySuffix(day)}`;
  
    return `${dayWithSuffix} ${month}, ${year}`;
  };
  
  const getDaySuffix = (day) => {
    if (day % 10 === 1 && day !== 11) return "st";
    if (day % 10 === 2 && day !== 12) return "nd";
    if (day % 10 === 3 && day !== 13) return "rd";
    return "th";
  };
  