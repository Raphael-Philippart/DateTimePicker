import React, { useMemo } from "react";
import { getTranslation } from "i18n";
import { MonthPickerProps } from "interfaces";
import CustomDropdown from "./CustomDropdown";
import styles from "./css/MonthPicker.module.css";

/**
 * The `MonthPicker` component allows users to select a month from a dropdown menu.
 *
 * @param {MonthPickerProps} props - Optional customization for the component's styling.
 * @returns {React.ReactElement} - The rendered MonthPicker component.
 */
const MonthPicker: React.FC<MonthPickerProps> = ({
  label,
  year,
  month,
  onMonthChange,
  lang,
  customization = {},
}: MonthPickerProps): React.ReactElement => {
  const translation = useMemo(() => getTranslation(lang), [lang]);

  /**
   * Handles the month change event from the dropdown.
   *
   * @param {string | number} selectedMonth - The selected month as a string or number.
   */
  const handleMonthChange = (selectedMonth: string | number) => {
    const newMonth =
      typeof selectedMonth === "string" ? translation.months.indexOf(selectedMonth) : selectedMonth;
    onMonthChange(year, newMonth);
  };

  return (
    <div className={styles.monthPicker}>
      <CustomDropdown
        label={label ? `${translation.labels.month}` : ""}
        value={translation.months[month]}
        options={translation.months}
        onChange={handleMonthChange}
        customization={customization}
      />
    </div>
  );
};

export default MonthPicker;
