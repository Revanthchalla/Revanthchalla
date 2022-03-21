var obj= nlapiCreateRecord('salesorder');
obj.setFieldValue('entity',48021);
obj.setFieldValue('custbody_order_type',1);
obj.setFieldValue('custbody_end_user',48021);
obj.selectNewLineItem('item');
obj.setCurrentLineItemValue('item','item',1395);
obj.setCurrentLineItemValue('item','quantity',10);
obj.commitLineItem('item');
var salesorderid=nlapiSubmitRecord(obj,true);