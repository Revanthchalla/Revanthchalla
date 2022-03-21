function creditmemo(){
    var obj=nlapiTransformRecord('returnauthorization',62878,'creditmemo');
  obj.setFieldValue('location',2);
  obj.selectNewLineItem('item');
  obj.setCurrentLineItemValue('item','item',1398);
  obj.setCurrentLineItemValue('item','quantity',5);
  obj.commitLineItem('item');
    var creditid=nlapiSubmitRecord(obj,true);
}