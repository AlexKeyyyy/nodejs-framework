const userRouter = require("./src/user-router");
const Application = require("./framework/Application");
const jsonParser = require("./framework/parseJson");
const parseUrl = require("./framework/parseUrl");
const mongoose = require("mongoose");
const PORT = 6000;

const app = new Application();

app.use(jsonParser);
app.use(parseUrl("http://localhost:5000"));

app.addRouter(userRouter);

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://root:root@cluster0.mx0gf1f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
