// mongoDB 사용하기 - mongoose
const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect("mongodb://localhost:27017/sparta_db") // MongoDB연결
    .catch((err) => {
      console.error(err); // DB연결 실패시 error출력
    });
};

module.exports = connect;
