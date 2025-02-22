import React, { useState, useRef } from "react";
import { Form, InputGroup, Overlay, Popover } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const DateInput = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null); // Ref for positioning

  // Handle manual input (only allow numbers)
  const handleDayChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value <= 31) setDay(value);
  };

  const handleMonthChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value <= 12) setMonth(value);
  };

  const handleYearChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 4) setYear(value);
  };

  // Handle date selection from the calendar
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    const dateParts = selectedDate.split("-"); // Format: YYYY-MM-DD
    if (dateParts.length === 3) {
      setYear(dateParts[0]);
      setMonth(dateParts[1]);
      setDay(dateParts[2]);
    }
    setShowCalendar(false); // Close the calendar after selection
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
