/**
 * Customization options for various components.
 */
interface CustomizationProps {
  /**
   * Custom styles for input elements.
   */
  input?: string[];

  /**
   * Custom styles for the calendar component.
   */
  calendar?: {
    /**
     * Custom styles for the calendar container.
     */
    container?: string[];

    /**
     * Custom styles for calendar buttons.
     */
    button?: string[];

    /**
     * Custom styles for selected dates.
     */
    selected?: string[];

    /**
     * Custom styles for hovered dates.
     */
    hover?: string[];

    /**
     * Custom styles for time-related elements.
     */
    time?: {
      /**
       * Custom styles for time buttons.
       */
      button?: string[];

      /**
       * Custom styles for time dropdowns.
       */
      dropdown?: string[];
    };

    /**
     * Custom styles for date-related elements.
     */
    date?: {
      /**
       * Custom styles for date buttons.
       */
      button?: string[];

      /**
       * Custom styles for date dropdowns.
       */
      dropdown?: string[];
    };
  };

  /**
   * Custom styles for year dropdown.
   */
  yearDropdown?: string[];

  /**
   * Custom styles for hour dropdown.
   */
  hourDropdown?: string[];

  /**
   * Custom styles for minute dropdown.
   */
  minuteDropdown?: string[];
}

/**
 * Props for the DateTimePicker component.
 */
interface DateTimePickerProps {
  /**
   * Whether to show a label.
   */
  label?: boolean;

  /**
   * The selected date value.
   */
  value: Date;

  /**
   * Callback function to handle date changes.
   */
  onChange: (date: Date) => void;

  /**
   * Whether to show time selection.
   */
  showTimeSelect?: boolean;

  /**
   * Customization options for the DateTimePicker component.
   */
  customization?: CustomizationProps;

  /**
   * Name attribute for the hidden input element.
   */
  name?: string;
}

/**
 * Props for the DayGrid component.
 */
interface DayGridProps {
  /**
   * Whether to show labels.
   */
  label: boolean;

  /**
   * Initial year to display.
   */
  initialYear?: number;

  /**
   * Initial month to display.
   */
  initialMonth?: number;

  /**
   * Language for translations.
   */
  lang: string;

  /**
   * Callback function to handle date changes.
   */
  onDateChange: (day: number, month: number, year: number) => void;

  /**
   * Callback function to handle hour changes.
   */
  onHourChange?: (hour: number) => void;

  /**
   * Callback function to handle minute changes.
   */
  onMinuteChange?: (minute: number) => void;

  /**
   * Whether to show time selection.
   */
  showTimeSelect?: boolean;

  /**
   * Currently selected date.
   */
  selectedDate: Date;

  /**
   * Callback function when time change is complete.
   */
  onTimeChangeComplete?: () => void;

  /**
   * Customization options for the DayGrid component.
   */
  customization?: {
    /**
     * Custom styles for the DayGrid container.
     */
    container?: string[];

    /**
     * Custom styles for DayGrid buttons.
     */
    button?: string[];

    /**
     * Custom styles for selected days.
     */
    selected?: string[];

    /**
     * Custom styles for hovered days.
     */
    hover?: string[];

    /**
     * Custom styles for time-related elements.
     */
    time?: {
      /**
       * Custom styles for time buttons.
       */
      button?: string[];
    };

    /**
     * Custom styles for date-related elements.
     */
    date?: {
      /**
       * Custom styles for date buttons.
       */
      button?: string[];
    };
  };
}

/**
 * Props for the YearPicker component.
 */
interface YearPickerProps {
  /**
   * Whether to show a label.
   */
  label: boolean;

  /**
   * Currently selected year.
   */
  selectedYear: number;

  /**
   * Callback function to handle year changes.
   */
  onYearChange: (year: number) => void;

  /**
   * Language for translations.
   */
  lang: string;

  /**
   * Customization options for the YearPicker component.
   */
  customization?: {
    /**
     * Custom styles for YearPicker buttons.
     */
    button?: string[];

    /**
     * Custom styles for YearPicker dropdowns.
     */
    dropdown?: string[];
  };
}

/**
 * Props for the MonthPicker component.
 */
interface MonthPickerProps {
  /**
   * Whether to show a label.
   */
  label: boolean;

  /**
   * The current year.
   */
  year: number;

  /**
   * The current month.
   */
  month: number;

  /**
   * Callback function to handle month changes.
   */
  onMonthChange: (year: number, month: number) => void;

  /**
   * Language for translations.
   */
  lang: string;

  /**
   * Customization options for the MonthPicker component.
   */
  customization?: {
    /**
     * Custom styles for MonthPicker buttons.
     */
    button?: string[];

    /**
     * Custom styles for MonthPicker dropdowns.
     */
    dropdown?: string[];
  };
}

/**
 * Props for the TimePicker component.
 */
interface TimePickerProps {
  /**
   * Whether to show a label.
   */
  label: boolean;

  /**
   * Language for translations.
   */
  lang: string;

  /**
   * Currently selected date.
   */
  selectedDate: Date;

  /**
   * Callback function to handle hour changes.
   */
  onHourChange: (hour: number) => void;

  /**
   * Callback function to handle minute changes.
   */
  onMinuteChange: (minute: number) => void;

  /**
   * Callback function when time change is complete.
   */
  onTimeChangeComplete: () => void;

  /**
   * Customization options for the TimePicker component.
   */
  customization?: {
    /**
     * Custom styles for TimePicker buttons.
     */
    button?: string[];
  };
}

/**
 * Props for the CustomDropdown component.
 */
interface CustomDropdownProps {
  /**
   * Optional label for the dropdown.
   */
  label?: string;

  /**
   * Currently selected value.
   */
  value: number | string;

  /**
   * Array of options to select from.
   */
  options: Array<number | string>;

  /**
   * Callback function to handle option selection.
   */
  onChange: (value: number | string) => void;

  /**
   * Customization options for the dropdown.
   */
  customization?: {
    /**
     * Custom styles for dropdown button.
     */
    button?: string[];

    /**
     * Custom styles for dropdown menu.
     */
    dropdown?: string[];
  };
}

export {
  CustomizationProps,
  DateTimePickerProps,
  DayGridProps,
  YearPickerProps,
  MonthPickerProps,
  TimePickerProps,
  CustomDropdownProps,
};
