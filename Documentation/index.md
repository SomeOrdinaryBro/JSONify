# index.html

The `index.html` file serves as the core structure of the JSONify application. It defines the HTML markup for the user interface and links to external CSS and JavaScript files.

## Overview

This file includes:
- The basic HTML5 structure
- A `<textarea>` for users to input JSON data
- A `<button>` to trigger JSON formatting
- A `<pre>` element to display the formatted JSON

## Key Sections

- **HTML Head**:
  - **Charset and Viewport**: Ensures proper encoding and responsiveness on various devices.
  - **Title**: Sets the title of the web page to "JSONify".
  - **Link to CSS**: Includes `styles.css` to style the application.

- **HTML Body**:
  - **Container**: A `<div>` element with the class `container` that holds the main content.
  - **Textarea**: An input area with the id `jsonInput` where users paste their JSON data.
  - **Button**: A button with an `onclick` event that triggers the `formatJson` function from `scripts.js`.
  - **Preformatted Text**: A `<pre>` element with the id `formattedJson` where the formatted JSON is displayed.

## Usage

This file should be placed in the root directory of your project. It will be automatically loaded when users visit your JSONify application.

For any updates or modifications to the structure, make changes directly in this file and ensure proper testing.

---

Thank you for reviewing the `index.html` file!

[Go Back to Documentation Index](doc.md)