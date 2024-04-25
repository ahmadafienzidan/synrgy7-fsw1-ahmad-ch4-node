// const { printData, printDataCustom } = require("./dummy");

// printData();
// printDataCustom("custom");

// const { cubeVolume, cubeSurfaceArea } = require("./dummy");
// cubeVolume();
// cubeSurfaceArea();

// const sideLength = 5;
// const volume = cubeVolume(sideLength);
// const surfaceArea = cubeSurfaceArea(sideLength);

// const os = require("os");
// const fs = require("fs");

// const result = `Volume kubus: ${volume}\nLuas permukaan kubus: ${surfaceArea}`;
// console.log(data);
// const data = fs.readFileSync("./dummy.txt", "utf-8");

// fs.writeFileSync("./dummy.txt", result, "utf-8");

// ===========INI YG BENER=============
const os = require("os");
const fs = require("fs");
const { setInitialData, getData, getDataById } = require("./people");

setInitialData();
getData();
getDataById(2);

//============END===============
