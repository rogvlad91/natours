import app from './app.js';

console.log(app.get('env'));
const port = 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
