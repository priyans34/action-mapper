const express = require("express");
const actionMapper = require("./mapper.js");

const app = express();
const PORT = 3030;

app.use(express.json());

app.post("/", (req, res) => {
  const { action } = req.body;

  if (!action) {
    return res.status(400).json({
      error: "Action is required",
    });
  }
  let title = action.title;
  const actionData = actionMapper[action];

  if (!actionData) {
    return res.status(404).json({
      error: `Action '${action}' not found`,
    });
  }

  res.status(200).json(actionData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
