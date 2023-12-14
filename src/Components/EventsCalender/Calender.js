import * as React from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import { EventCalender } from './CalenderComp';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

function fakeFetch(date, { signal }, selectedFinalDates) {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            const month = date.month();
            let daysToHighlight;
            daysToHighlight = selectedFinalDates[month]
            resolve({ daysToHighlight });
        }, 500);

        signal.onabort = () => {
            clearTimeout(timeout);
            reject(new DOMException('aborted', 'AbortError'));
        };
    });
}


function ServerDay(props) {
    const { highlightedDays = [], day, outsideCurrentMonth, onSelect, ...other } = props;

    const isSelected =
        !outsideCurrentMonth && highlightedDays.indexOf(day.date()) >= 0;

    const handleClick = (isSelected) => {
        if (!isSelected) {
            onSelect(null)
            return;
        }
        const clickedDate = day.toDate();
        const clickedMonth = clickedDate.getMonth() + 1; // Month is zero-based, so add 1
        const clickedDay = clickedDate.getDate();
        const clickedYear = clickedDate.getFullYear();
        console.log('Clicked Date:', clickedMonth, clickedDay, clickedYear);
        onSelect(`${clickedDay}-${clickedMonth}-${clickedYear}`);
    };

    return (
        <Badge
            key={day.toString()}
            overlap="circular"
            badgeContent={isSelected ? '🌚' : undefined}
            onClick={() => { handleClick(isSelected) }}
        >
            <PickersDay
                {...other}
                style={{
                    color: isSelected ? '#fff' : '#000',
                    backgroundColor: isSelected ? '#5a9bdb' : '',
                    borderRadius: "50%",
                    fontSize: "12px",
                    padding: "2px"
                }}
                outsideCurrentMonth={outsideCurrentMonth}
                day={day}
            />
        </Badge>
    );
}


export default function Calendar() {
    //eslint-disable-next-line
    const [initialValue, setInitialValue] = React.useState(null);
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [selectedFinalDates, setSelectedFinalDates] = React.useState(Array.from({ length: 12 }, () => []))
    React.useEffect(() => {
        const dates = selectedFinalDates;
        dates[11].push(2, 16, 25)
        dates[10].push(1, 2, 4);
        dates[0].push(1);
        //eslint-disable-next-line
    }, [])
    const requestAbortController = React.useRef(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [highlightedDays, setHighlightedDays] = React.useState([]);

    const handleDateClick = (clickedDate) => {
        setSelectedDate(clickedDate);
    };

    const fetchHighlightedDays = (date) => {
        const controller = new AbortController();
        fakeFetch(date, {
            signal: controller.signal,
        }, selectedFinalDates)
            .then(({ daysToHighlight }) => {
                setHighlightedDays(daysToHighlight);
                setIsLoading(false);
            })
            .catch((error) => {
                if (error.name !== 'AbortError') {
                    throw error;
                }
            });
        requestAbortController.current = controller;
    };

    React.useEffect(() => {
        const currentDate = dayjs(); // Use the current date as a default
        const effectiveInitialValue = initialValue || currentDate;

        fetchHighlightedDays(effectiveInitialValue);
        return () => requestAbortController.current?.abort();
        //eslint-disable-next-line
    }, [initialValue]);

    const handleMonthChange = (date) => {
        if (requestAbortController.current) {
            requestAbortController.current.abort();
        }

        setIsLoading(true);
        setHighlightedDays([]);
        fetchHighlightedDays(date);
    };

    return (
        <div style={{ height: '100%', width: "100%", margin: "10px 20px", position: "relative" }}>
            <h3 style={{ textAlign: "center", fontSize: "20px", margin: "10px 0", fontWeight: "bold" }}>Upcomming Events </h3>
            <hr style={{ width: "100px", margin: "10px auto 20px auto", padding: "1px" }} />

            {
                !selectedDate && <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                        defaultValue={initialValue}
                        loading={isLoading}
                        onMonthChange={handleMonthChange}
                        renderLoading={() => <DayCalendarSkeleton />}
                        slots={{
                            day: (props) => (
                                <ServerDay {...props} onSelect={handleDateClick} />
                            ),
                        }}

                        slotProps={{
                            day: {
                                highlightedDays,
                            },
                        }}

                    />
                </LocalizationProvider>
            }

            {
                selectedDate &&
                <>
                    <div onClick={() => { setSelectedDate(null) }} style={{ position: 'absolute', top: -20, left: '4%', color: '#000', display: 'flex', alignItems: 'center', cursor: 'pointer', marginTop: '10px' }}>
                        <ArrowLeftIcon style={{ fontSize: '30px' }} />
                    </div>
                    <EventCalender EventDate={selectedDate} setSelectedFinalDates={setSelectedFinalDates} />
                </>
            }

        </div>
    );
}