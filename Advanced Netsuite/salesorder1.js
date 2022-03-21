function salesorder(){
var obj= nlapiCreateRecord('salesorder');
obj.setFieldValue('entity',48025);
obj.setFieldValue('custbody_order_type',1);
obj.setFieldValue('custbody_end_user',48025);
obj.selectNewLineItem('item');
obj.setCurrentLineItemValue('item','item',1398);
obj.setCurrentLineItemValue('item','quantity',10);
obj.commitLineItem('item');
var salesorderid=nlapiSubmitRecord(obj,true);
}