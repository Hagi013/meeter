const not = res => !res;

const emptyCheck = data => data === '' || data === undefined || data === null;

const notEmptyCheck = data => not(emptyCheck(data));

const arrayCheck = data => notEmptyCheck(data) && Array.isArray(data);

const notArrayCheck = data => not(arrayCheck(data));

const emptyObjCheck = obj => emptyCheck(obj) || Object.keys(obj).length === 0 || obj === {};

const notEmptyObjCheck = obj => not(emptyObjCheck(obj));

module.exports = { emptyCheck, notEmptyCheck, arrayCheck, notArrayCheck, emptyObjCheck, notEmptyObjCheck };