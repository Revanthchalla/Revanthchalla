var obj=nlapiCreateRecord('creditmemo');
obj.setFieldValue('entity',48021);
obj.setFieldValue('location',2);
obj.selectNewLineItem('item');
obj.setCurrentLineItemValue('item','item',1395);
obj.setCurrentLineItemValue('item','quantity',10);
obj.commitLineItem('item');
var creditid=nlapiSubmitRecord(obj,true);