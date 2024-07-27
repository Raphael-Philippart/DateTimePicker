import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { DateTimePickerProps } from "interfaces";
import DayGrid from "./DayGrid";
import styles from "./css/DateTimePicker.module.css";
import "./css/main.module.css";

/**
 * A DateTimePicker component for selecting dates and optionally times.
 *
 * @param {DateTimePickerProps} props - The properties for the DateTimePicker component.
 * @returns {React.ReactElement} - The rendered DateTimePicker component.
 */
const DateTimePicker: React.FC<DateTimePickerProps> = ({
  label = false,
  value,
  onChange,
  showTimeSelect = false,
  customization = {},
  name = "date_picker",
}: DateTimePickerProps): React.ReactElement => {
  const [selectedDate, setSelectedDate] = useState<Date>(value);
  const [lang, setLang] = useState<string>("us");
  const [isDayGridVisible, setIsDayGridVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Set language from the HTML document language
  useEffect(() => {
    const htmlLang = document.documentElement.lang || "us";
    setLang(htmlLang);
  }, []);

  // Handle click outside the component to hide the day grid
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsDayGridVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /**
   * Toggles the visibility of the day grid.
   */
  const handleInputClick = () => {
    setIsDayGridVisible(!isDayGridVisible);
  };

  /**
   * Updates the selected date and calls the onChange callback.
   *
   * @param {number} day - The selected day.
   * @param {number} month - The selected month (0-based).
   * @param {number} year - The selected year.
   */
  const handleDateChange = (day: number, month: number, year: number) => {
    const newDate = new Date(year, month, day, selectedDate.getHours(), selectedDate.getMinutes());
    setSelectedDate(newDate);
    onChange(newDate);
    if (!showTimeSelect) {
      setIsDayGridVisible(false);
    }
  };

  /**
   * Updates the hour of the selected date and calls the onChange callback.
   *
   * @param {number} hour - The selected hour.
   */
  const handleHourChange = (hour: number) => {
    const newDate = new Date(selectedDate);
    newDate.setHours(hour);
    setSelectedDate(newDate);
    onChange(newDate);
  };

  /**
   * Updates the minute of the selected date and calls the onChange callback.
   *
   * @param {number} minute - The selected minute.
   */
  const handleMinuteChange = (minute: number) => {
    const newDate = new Date(selectedDate);
    newDate.setMinutes(minute);
    setSelectedDate(newDate);
    onChange(newDate);
  };

  /**
   * Hides the day grid when time selection is complete.
   */
  const handleTimeChangeComplete = () => {
    setIsDayGridVisible(false);
  };

  /**
   * Formats the selected date as a string.
   *
   * @param {Date} date - The date to format.
   * @returns {string} - The formatted date string.
   */
  const formatDate = (date: Date): string => {
    const day = `0${date.getDate()}`.slice(-2);
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const year = date.getFullYear();
    if (showTimeSelect) {
      const hour = `0${date.getHours()}`.slice(-2);
      const minute = `0${date.getMinutes()}`.slice(-2);
      return `${day}/${month}/${year} ${hour}:${minute}`;
    } else {
      return `${day}/${month}/${year}`;
    }
  };

  /**
   * Formats the selected date as an ISO string.
   *
   * @param {Date} date - The date to format.
   * @returns {string} - The ISO formatted date string.
   */
  const formatISODate = (date: Date): string => {
    return date.toISOString();
  };

  return (
    <div className={classNames(styles.container)} ref={containerRef}>
      <input
        type='text'
        value={formatDate(selectedDate)}
        readOnly
        onClick={handleInputClick}
        className={classNames(...(customization.input || [styles.inputDefault]), styles.input)}
      />
      <input type='hidden' name={name} value={formatISODate(selectedDate)} />
      {isDayGridVisible && (
        <DayGrid
          label={label}
          initialYear={selectedDate.getFullYear()}
          initialMonth={selectedDate.getMonth()}
          lang={lang}
          onDateChange={handleDateChange}
          onHourChange={showTimeSelect ? handleHourChange : undefined}
          onMinuteChange={showTimeSelect ? handleMinuteChange : undefined}
          showTimeSelect={showTimeSelect}
          selectedDate={selectedDate}
          onTimeChangeComplete={handleTimeChangeComplete}
          customization={customization.calendar}
        />
      )}
    </div>
  );
};

export default DateTimePicker;
