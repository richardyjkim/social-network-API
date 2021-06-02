const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Richard:1234@cluster0.vdahu.mongodb.net/social-network-api?retryWrites=true&w=majority', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(require('./routes'));
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
