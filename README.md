# Shipment Tracking UI

A demo of a package tracking page based on HTML, CSS, and JavaScript. This project does not use a database; all demo data is stored locally in `shipments.js`.

## How to Run

Open the `index.html` file directly through your browser.

## File Structure

- `index.html` - Tracking page structure.
- `styles.css` - Styling, layout, status colors, and truck/drop box animations.
- `app.js` - Input logic for receipts, demo dropdown, and shipping status updates.
- `shipments.js` - Local data for tracking demos.

## Demo Data

- `BM-2025-0001` - In Transit.
- `BM-2025-0002` - Package at Sorting Facility.
- `BM-2025-0003` - Package Delivered.

## Notes

The truck animation is for UI decoration only. Shipping status is retrieved from local data based on the receipt number selected or entered.