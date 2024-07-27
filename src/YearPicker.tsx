import React, { useMemo } from "react";
import { YearPickerProps } from "interfaces";
import { getTranslation } from "i18n";
import CustomDropdown from "./CustomDropdown";
import styles from "./css/YearPicker.module.css";

/**
 * The `YearPicker` component allows users to select a year from a dropdown menu.
 *
 * @param {YearPickerProps} props - The properties for the YearPicker component.
 * @returns {React.ReactElement} - The rendered YearPicker component.
 */
const YearPicker: React.FC<YearPickerProps> = ({
  label,
  selectedYear,
  onYearChange,
  lang,
  customization = {},
}: YearPickerProps): React.ReactElement => {
  const translation = useMemo(() => getTranslation(lang), [lang]);

  /**
   * Handles the year change event from the dropdown.
   *
   * @param {string | number} selectedYear - The selected year as a string or number.
   */
  const handleYearChange = (selectedYear: string | number) => {
    onYearChange(Number(selectedYear));
  };

  return (
    <div className={styles.yearPicker}>
      <CustomDropdown
        label={label ? `${translation.labels.year}` : ""}
        value={selectedYear}
        options={translation.years}
        onChange={handleYearChange}
        customization={customization}
      />
    </div>
  );
};

export default YearPicker;
