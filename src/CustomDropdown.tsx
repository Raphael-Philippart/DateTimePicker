import React, { useEffect, useRef, useState } from "react";
import styles from "./css/CustomDropdown.module.css";
import classNames from "classnames";
import { CustomDropdownProps } from "interfaces";

/**
 * A dropdown component allowing selection from a list of options.
 *
 * @param {CustomDropdownProps} props - The properties for the CustomDropdown component.
 * @returns {React.ReactElement} - The rendered CustomDropdown component.
 */
const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  value,
  options,
  onChange,
  customization = {},
}: CustomDropdownProps): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /**
   * Handles option selection.
   *
   * @param {number | string} option - The selected option.
   */
  const handleOptionClick = (option: number | string) => {
    onChange(option);
    setIsOpen(false);
  };

  /**
   * Handles click outside the dropdown to close it.
   *
   * @param {MouseEvent} event - The mouse event.
   */
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      {label && <label className={styles.label}>{label}</label>}
      <div
        className={classNames(...(customization.button || [styles.c_D]), styles.c_B)}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value}
      </div>
      {isOpen && (
        <div className={classNames(...(customization.dropdown || [styles.Opts_D]), styles.Opts_B)}>
          {options.map((option) => (
            <div key={option} className={styles.option} onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
