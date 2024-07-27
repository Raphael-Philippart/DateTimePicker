# Custom Date and Time Picker Components

I created this small library as part of my studies. I apologize for any bugs you may encounter. 

I am constantly learning and welcome your feedback to improve this project. Thank you for your understanding !

### DateTimePicker

A customizable React component for selecting dates and times.

This library provides a `DateTimePicker` component that can be easily integrated and customized in your React applications.

### Screens 

To use the DateTimePicker with hour and minute selection, set showTimeSelect to true.

To use it without hour and minute selection, set showTimeSelect to false.

![showTimeSelect to false](https://i.postimg.cc/Y07CvCBy/base1.png)

![showTimeSelect to true](https://i.postimg.cc/5ymNLWx9/base2.png)

## Installation

To install the package, use npm or yarn:

```bash
yarn add react-easy-datetime
# or
npm install react-easy-datetime
```

### Basic Usage

To use the DateTimePicker component, import it and include it in your JSX:
```tsx
import React, { useState } from 'react';
import DateTimePicker from 'react-easy-datetime';

const MyComponent: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const handleChange = (newDate: Date) => {
    setDate(newDate);
  };

  return (
    <DateTimePicker
      label={true}
      name="nameInput"
      value={date}
      onChange={handleChange}
      showTimeSelect={true}
      customization={{
        input: ['input_c'],
        calendar: {
          container: ['container_c'],
          button: ['button_c'],
          selected: ['selected_c'],
          hover: ['hover_c'],
          time: {
            button: ['button_c'],
            dropdown: ['dropdown_c']
          },
          date: {
            button: ['button_c'],
            dropdown: ['dropdown_c']
          }
        },
      }}
    />
  );
};

export default MyComponent;
```

# Props

The DateTimePicker component accepts the following props:

    label (boolean): Whether to show labels.
    name (string): The name attribute for the input element.
    value (Date): The current selected date.
    onChange (function): Callback function to handle date change.
    showTimeSelect (boolean): Whether to show time selection.
    customization (object): Custom styles for the component.

# Customization

You can customize the appearance of the DateTimePicker by providing a customization object with your own CSS class names.

#### Customization Props Types

```tsx
interface CustomizationProps {
  input?: string[];
  calendar?: {
    container?: string[];
    button?: string[];
    selected?: string[];
    hover?: string[];
    time?: {
      button?: string[];
      dropdown?: string[];
    };
    date?: {
      button?: string[];
      dropdown?: string[];
    };
  };
}
```

# License

This project is licensed under the MIT [License](LICENSE).
