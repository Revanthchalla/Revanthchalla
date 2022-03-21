function myPageInit() {
    alert('myPageInit');
  nlapiLogExecution('DEBUG','page loading','Done pageinit');
}
function mySaveRecord() {
    alert('mySaveRecord');
  nlapiLogExecution('DEBUG','before saved','Done saverecord');
}
function myFieldChanged() {
    alert('myFieldChanged');
    nlapiLogExecution('DEBUG','after changed','Done fieldchanging');

}
function myRecalc() {
    alert('myRecalc');
      nlapiLogExecution('DEBUG','after changed','Done recalc');

}