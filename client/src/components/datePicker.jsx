import React, { useState, useEffect, useRef } from "react";
import { Form, InputGroup, Overlay, Popover } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const DateInput = ({ setJourneyForm, dateKey, dateData }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);

  // Initialize the date if `dateData` is empty
  useEffect(() => {
    if (!dateData?.trim()) {
      const today = new Date();
      const defaultDate = {
        day: String(today.getDate()).padStart(2, "0"),
        month: String(today.getMonth() + 1).padStart(2, "0"),
        year: String(today.getFullYear())
      };
      setDay(defaultDate.day);
      setMonth(defaultDate.month);
      setYear(defaultDate.year);
    } else {
      const [year, month, day] = dateData.split("-");

          setDay(day.padStart(2, "0"));
          setMonth(month.padStart(2, "0"));
          setYear(year);
    }
  }, [dateData]);

  // Update formatted date whenever day, month, or year changes
  useEffect(() => {
    if (day && month && year) {
      const newDate = `${year}-${month}-${day}`;
      setFormattedDate(newDate);

      // Update parent state
      setJourneyForm((prevForm) => ({
        ...prevForm,
        [dateKey]: newDate,
      }));
    }
  }, [day, month, year]);

  const handleDayChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value <= 31) setDay(value.padStart(2, "0"));
  };

  const handleMonthChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value <= 12) setMonth(value.padStart(2, "0"));
  };

  const handleYearChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) setYear(value);
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    const dateParts = selectedDate.split("-");
    if (dateParts.length === 3) {
      setYear(dateParts[0]);
      setMonth(dateParts[1]);
      setDay(dateParts[2]);
    }
    setShowCalendar(false);
  };

  return (
    <div className="d-flex align-items-end gap-2">
      {/* Day Input */}
      <div className="d-flex flex-column text-center">
        <label className="small">Date</label>
        <Form.Control
          type="text"
          placeholder="DD"
          className="text-center"
          maxLength={2}
          value={day}
          onChange={handleDayChange}
        />
      </div>

      {/* Month Input */}
      <div className="d-flex flex-column text-center">
        <label className="small">Month</label>
        <Form.Control
          type="text"
          placeholder="MM"
          className="text-center"
          maxLength={2}
          value={month}
          onChange={handleMonthChange}
        />
      </div>

      {/* Year Input */}
      <div className="d-flex flex-column text-center">
        <label className="small">Year</label>
        <Form.Control
          type="text"
          placeholder="YYYY"
          className="text-center"
          maxLength={4}
          value={year}
          onChange={handleYearChange}
        />
      </div>

      {/* Calendar Button */}
      <InputGroup>
        <button
          ref={calendarRef}
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <FaCalendarAlt />
        </button>
      </InputGroup>

      {/* Overlay for Calendar Positioning */}
      <Overlay target={calendarRef.current} show={showCalendar} placement="bottom">
        <Popover id="date-picker-popover">
          <Popover.Body>
            <Form.Control
              type="date"
              value={formattedDate}
              onChange={handleDateChange}
              className="form-control"
            />
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
};

export default DateInput;
