var obj=nlapiTransformRecord('salesorder',62734,'itemfulfillment');
obj.selectLineItem('item','1');
obj.setCurrentLineItemValue('item','item','1395');
obj.setCurrentLineItemValue('item','fullfill','T');
obj.setCurrentLineItemValue('item','quantity',5);
obj.setCurrentLineItemValue('item','location',2);
obj.commitLineItem('item')
var fulfillmentId = nlapiSubmitRecord(obj, true)