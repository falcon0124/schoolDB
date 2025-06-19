const express = require('express');
const app = express();
require('dotenv').config();

const schoolRoutes = require('./routes/schoolRoutes');

app.use(express.json());
app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
