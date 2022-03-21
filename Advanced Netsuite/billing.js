var billtype='invoice';
var obj=nlapiTransformRecord('salesorder',62734,billtype);
obj.selectLineItem('item','1');
obj.setCurrentLineItemValue('item','location','2');
obj.commitLineItem('item')
var billid=nlapiSubmitRecord(obj,true);