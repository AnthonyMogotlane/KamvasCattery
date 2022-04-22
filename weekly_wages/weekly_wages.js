function weeklyWage(band, weeklyHours) {
    let sum = weeklyHours.split(",").map(dayHours => {
        if(band === "A") return parseInt(dayHours) * 23;
        if(band === "B") return parseInt(dayHours) * 37;
        if(band === "C") return parseInt(dayHours) * 51;
        return 0;
    }).reduce((total, num) => total += num);

    return (weeklyHours.split(",").length < 7) ? "missing day" : sum;
};