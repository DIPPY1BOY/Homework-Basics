const hasLicense = true;
const age = 18;
const isDrunk = false;

const canDrive = (age >= 18)
&& hasLicense
&& !isDrunk;

console.log(`Может ли данный водитель вести машину? - ${canDrive ? 'Может' : 'Не может'}`);
