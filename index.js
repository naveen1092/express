const express = require("express");
const app = express();
const port = 3000;

// Sample data (replace with your actual data source)
const nonFoodData = [
  { category: "BABYPFLEGE & -NAHRUNG", value: 12.3 },
  { category: "HAARPFLEGE", value: 7.2 },
  // Add more data as needed
];

// GET API endpoint
app.get("/api/non-food", (req, res) => {
  res.json(nonFoodData);
});

app.get("/api/non-food", (req, res) => {
  res.json(nonFoodData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
