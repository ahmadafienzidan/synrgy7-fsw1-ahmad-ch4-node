// const { printData, printDataCustom } = require("./dummy");

// printData();
// printDataCustom("custom");

const { cubeVolume, cubeSurfaceArea } = require("./dummy");
cubeVolume();
cubeSurfaceArea();

const sideLength = 5;
const volume = cubeVolume(sideLength);
const surfaceArea = cubeSurfaceArea(sideLength);

console.log("Volume kubus:", volume);
console.log("Luas permukaan kubus:", surfaceArea);
