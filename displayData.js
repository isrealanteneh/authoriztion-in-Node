const datas = require("./data");

const x = JSON.stringify(datas.students);
const y = JSON.parse(x);
const names = y.map((user) => user.role);

for (let i = 0; i < 4; i++) {
  console.log(names[i]);
}
