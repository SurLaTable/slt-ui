export const parseDate = (date) => {
	//This is a specific function for parsinig dates coming from ATG for use on all browsers
	var values = date.split(/[^0-9]/),
		year = parseInt(values[0], 10),
		month = parseInt(values[1], 10) - 1, // Month is zero based, so subtract 1
		day = parseInt(values[2], 10),
		hours = parseInt(values[3], 10),
		minutes = parseInt(values[4], 10),
		seconds = parseInt(values[5], 10);
	return new Date(year, month, day, hours, minutes, seconds);
};
