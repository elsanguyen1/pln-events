function HpCalendarDateCell(dayInfo) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const isToday = dayInfo.isToday ?? false
    const dayOfWeek = dayInfo.dow;
    const isOther = dayInfo.isOther ?? false;
    
    return <>
        <div className="dcn">
            <p className="dcn__date">{dayInfo.dayNumberText}</p>
           
        </div>
        <p className="dcn__day">{days[dayOfWeek]}</p>

        <style jsx>
            {
                `
                .dcn {position: absolute; bottom: 16px; right: 16px;}
                .dcn__date {font-size: 20px; font-weight: 500; color: ${isToday ? '#E17527': 'black'};}
                .dcn__day{ display: none;position: absolute; bottom: 20px; left: 16px;font-size: 12px; font-weight: 400; color: lightgrey;}
            
                @media(min-width: 1200px) {
                    .dcn {}
                    .dcn__day {display:block;}
                }
                
                `
            }
        </style>
    </>
}

export default HpCalendarDateCell