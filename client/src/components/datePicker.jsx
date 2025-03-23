import React, { useState, useEffect, useRef } from "react";
import { Form, InputGroup, Overlay, Popover } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { parse } from 'date-fns';

const DateInput = ({ setJourneyForm, dateKey , dateData }) => {
  const [day, setDay] = useState(()=>String(new Date(dateData).getDate()).padStart(2, '0'));
  const [month, setMonth] = useState(()=>String(new Date(dateData).getMonth()).padStart(2, '0'));
  const [year, setYear] = useState(()=>String(new Date(dateData).getFullYear()).padStart(2, '0'));
  const [formattedDate, setFormattedDate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);

  useEffect(() => {
    const parsedDate = parse('2025-09-23', 'dd/MM/yyyy', new Date());
    console.log(parsedDate);
    setFormattedDate(`${year}-${month}-${day}`);
  }, []);

  useEffect(() => {
    if (day && month && year) {
      const newDate = `${year}-${month}-${day}`;
      setFormattedDate(newDate);
    }
  }, [day, month, year]);

  useEffect(() => {
    if (formattedDate) {
      setJourneyForm((prevForm) => ({
        ...prevForm,
        [dateKey]: formattedDate,
      }));
    }
  }, [formattedDate]);

  const handleDayChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value <= 31) setDay(value);
  };

  const handleMonthChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value <= 12) setMonth(value);
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
      setFormattedDate(selectedDate); // Use selectedDate directly
      setJourneyForm((prevForm) => ({
        ...prevForm,
        [dateKey]: selectedDate,
      }));
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
