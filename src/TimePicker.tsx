import React, { useEffect, useMemo, useState } from "react";
import { getTranslation } from "i18n";
import { TimePickerProps } from "interfaces";
import CustomDropdown from "./CustomDropdown";
import styles from "./css/TimePicker.module.css";

/**
 * The `TimePicker` component allows users to select an hour and a minute.
 *
 * @param {TimePickerProps} props - Props for customizing the TimePicker component.
 * @returns {React.ReactElement} - The rendered TimePicker component.
 */
const TimePicker: React.FC<TimePickerProps> = ({
  label,
  lang,
  selectedDate,
  onHourChange,
  onMinuteChange,
  onTimeChangeComplete,
  customization = {},
}: TimePickerProps): React.ReactElement => {
  const translation = useMemo(() => getTranslation(lang), [lang]);
  const [hour, setHour] = useState<number>(selectedDate.getHours());
  const [minute, setMinute] = useState<number>(selectedDate.getMinutes());

  useEffect(() => {
    setHour(selectedDate.getHours());
    setMinute(selectedDate.getMinutes());
  }, [selectedDate]);

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  /**
   * Handles changes to the selected hour.
   *
   * @param {number | string} value - The selected hour as a number or string.
   */
  const handleHourChange = (value: number | string) => {
    const newHour = Number(value);
    setHour(newHour);
    onHourChange(newHour);
  };

  /**
   * Handles changes to the selected minute.
   *
   * @param {number | string} value - The selected minute as a number or string.
   */
  const handleMinuteChange = (value: number | string) => {
    const newMinute = Number(value);
    setMinute(newMinute);
    onMinuteChange(newMinute);
    onTimeChangeComplete();
  };

  /**
   * Formats a number to ensure it has two digits.
   *
   * @param {number} num - The number to format.
   * @returns {string} - The formatted number as a string.
   */
  const formatNumber = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

  return (
    <div className={styles.timeContainer}>
      <div>
        <CustomDropdown
          label={label ? `${translation.labels.hour}` : ""}
          value={formatNumber(hour)}
          options={hours.map(formatNumber)}
          onChange={handleHourChange}
          customization={customization}
        />
      </div>
      <div>
        <CustomDropdown
          label={label ? `${translation.labels.minute}` : ""}
          value={formatNumber(minute)}
          options={minutes.map(formatNumber)}
          onChange={handleMinuteChange}
          customization={customization}
        />
      </div>
    </div>
  );
};

export default TimePicker;
