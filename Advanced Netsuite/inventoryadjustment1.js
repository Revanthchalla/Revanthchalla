function inventoryadjustment(){
var obj=nlapiCreateRecord('inventoryadjustment');
obj.setFieldValue('subsidiary','1');
obj.setFieldValue('account','2');
obj.selectNewLineItem('inventory');
obj.setCurrentLineItemValue('inventory','item',1398);
obj.setCurrentLineItemValue('inventory','location',2);
obj.setCurrentLineItemValue('inventory','adjustqtyby',10);
obj.commitLineItem('inventory');
var inventoryadjustmentid=nlapiSubmitRecord(obj,true);
}