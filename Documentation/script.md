# scripts.js

The `scripts.js` file contains the JavaScript code for the JSONify application. It handles the functionality for formatting JSON data input by the user.

## Overview

This file includes:
- The `formatJson` function that processes and formats JSON data

## Key Functions

- **formatJson**:
  - **Purpose**: Parses the JSON input from the textarea, formats it with proper indentation, and displays the result.
  - **Steps**:
    1. Retrieves the value from the textarea with the id `jsonInput`.
    2. Tries to parse the JSON data.
    3. Formats the JSON data with `JSON.stringify` and sets the result in the `<pre>` element with the id `formattedJson`.
    4. If parsing fails, it catches the error and displays "Invalid JSON" in the `<pre>` element.

## Usage

Include this file in your `index.html` using a `<script>` tag at the bottom of the body to ensure it loads after the HTML elements.

For any functional changes, update the code in this file. Ensure to test the JSON formatting functionality thoroughly.

---

Thank you for reviewing the `scripts.js` file!

[Go Back to Documentation Index](doc.md)