import React, { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import { getTranslation } from "i18n";
import MonthPicker from "./MonthPicker";
import YearPicker from "./YearPicker";
import TimePicker from "./TimePicker";
import { DayGridProps } from "interfaces";
import styles from "./css/DayGrid.module.css";

/**
 * DayGrid component for selecting a date and optionally time.
 *
 * @param {DayGridProps} props - The properties for the DayGrid component.
 * @returns {React.ReactElement} - The rendered DayGrid component.
 */
const DayGrid: React.FC<DayGridProps> = ({
  label,
  initialYear,
  initialMonth,
  lang,
  onDateChange,
  onHourChange,
  onMinuteChange,
  showTimeSelect,
  selectedDate,
  onTimeChangeComplete,
  customization = {},
}: DayGridProps): React.ReactElement => {
  const translation = useMemo(() => getTranslation(lang), [lang]);
  const today = new Date();
  const currentYear = initialYear ?? today.getFullYear();
  const currentMonth = initialMonth ?? today.getMonth();

  const [year, setYear] = useState<number>(currentYear);
  const [month, setMonth] = useState<number>(currentMonth);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  useEffect(() => {
    if (year === today.getFullYear() && month === today.getMonth()) {
      setSelectedDay(today.getDate());
    } else {
      setSelectedDay(null);
    }
  }, [year, month]);

  /**
   * Gets the days in a specific month and year.
   *
   * @param {number} year - The year of the month.
   * @param {number} month - The month (0-based).
   * @returns {number[]} - Array of days in the month.
   */
  const getDaysInMonth = (year: number, month: number): number[] => {
    const date = new Date(year, month + 1, 0); // Last day of the month
    return Array.from({ length: date.getDate() }, (_, i) => i + 1); // Days from 1 to n
  };

  const days = getDaysInMonth(year, month);

  /**
   * Handles the click event on a day.
   *
   * @param {number} day - The day to select.
   */
  const handleDayClick = (day: number) => {
    setSelectedDay(day);
    onDateChange(day, month, year);
  };

  /**
   * Handles the mouse enter event on a day.
   *
   * @param {number} day - The day being hovered.
   */
  const handleDayMouseEnter = (day: number) => {
    setHoveredDay(day);
  };

  /**
   * Handles the mouse leave event on a day.
   */
  const handleDayMouseLeave = () => {
    setHoveredDay(null);
  };

  /**
   * Handles month and year changes.
   *
   * @param {number} newYear - The new year.
   * @param {number} newMonth - The new month (0-based).
   */
  const handleMonthChange = (newYear: number, newMonth: number) => {
    setYear(newYear);
    setMonth(newMonth);
  };

  /**
   * Handles year change.
   *
   * @param {number} newYear - The new year.
   */
  const handleYearChange = (newYear: number) => {
    setYear(newYear);
  };

  return (
    <div
      className={classNames(
        styles.dg_b_c_Base,
        ...(customization.container || [styles.dg_b_C_Default]),
      )}
    >
      <div className={styles.dg_b_S}>
        <YearPicker
          selectedYear={year}
          onYearChange={handleYearChange}
          lang={lang}
          label={label}
          customization={customization.date}
        />
        <MonthPicker
          year={year}
          month={month}
          onMonthChange={handleMonthChange}
          lang={lang}
          label={label}
          customization={customization.date}
        />
      </div>
      {label && (
        <div className={styles.dg_b_S}>
          <span>{translation.labels.selectADay}</span>
        </div>
      )}
      <div className={styles.dg}>
        {days.map((day) => (
          <div
            key={day}
            className={classNames(
              styles.dg_b_Base,
              ...(customization.button || [styles.dg_b_Default]),
              {
                [classNames(...(customization.selected || [styles.dg_b_Selected]))]:
                  selectedDay === day,
              },
              { [classNames(...(customization.hover || []))]: hoveredDay === day },
            )}
            onClick={() => handleDayClick(day)}
            onMouseEnter={() => handleDayMouseEnter(day)}
            onMouseLeave={handleDayMouseLeave}
          >
            <span>{day}</span>
          </div>
        ))}
      </div>
      {selectedDay !== null && showTimeSelect && onTimeChangeComplete && (
        <TimePicker
          label={label}
          lang={lang}
          selectedDate={selectedDate}
          onHourChange={onHourChange!}
          onMinuteChange={(minute: number) => {
            onMinuteChange!(minute);
            onTimeChangeComplete();
          }}
          onTimeChangeComplete={onTimeChangeComplete}
          customization={customization.time}
        />
      )}
    </div>
  );
};

export default DayGrid;
