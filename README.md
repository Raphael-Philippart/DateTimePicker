# Custom Date and Time Picker Components

I created this small library as part of my studies. I apologize for any bugs you may encounter. 

I am constantly learning and welcome your feedback to improve this project. Thank you for your understanding !

### DateTimePicker

A customizable React component for selecting dates and times.

This library provides a `DateTimePicker` component that can be easily integrated and customized in your React applications.

## Automatic Language Detection

The `DateTimePicker` component automatically detects and adjusts its language based on the language of the website. It uses the `lang` attribute of the HTML `<html>` element to determine the appropriate locale. If no language is specified, it defaults to `us`.

Here’s a simplified version of how the language detection works:

```javascript
useEffect(() => {
  const htmlLang = document.documentElement.lang || "us";
  setLang(htmlLang);
}, []);
```

#### Supported Languages

Currently, the component only supports English (us) and French (fr).

If the detected language is not supported, the component will default to English.

##### How It Works:
The component looks for the lang attribute on the <html> element.

If the attribute is set to "fr", the component will use French. Otherwise, it defaults to English ("us").

More languages may be added in future updates.

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

## Dependencies

This project relies on the following dependencies:

| Package    | Version   |
|------------|-----------|
| Node.js    | 20.16.0   |
| classnames | ^2.5.1    |
| prettier   | ^3.3.3    |

## Recommended IDE

This project is best developed using [WebStorm](https://www.jetbrains.com/webstorm/), version **[2024.2.2]**.

### IDE Setup

To ensure the best development experience, it's recommended to use WebStorm with the following configurations:

- WebStorm version: 2024.2.2
- Node.js version: 20.16.0
- Enable ESLint for code linting
- Enable Prettier for code formatting

# License

This project is licensed under the MIT [License](LICENSE).
