function rma2(){
    var obj=nlapiTransformRecord('cashsale',62769,'returnauthorization');
    obj.selectLineItem('item',1);
    obj.setCurrentLineItemValue('item','item',1398);
    obj.setCurrentLineItemValue('item','quantity',5);
    obj.commitLineItem('item');
    var rma2id=nlapiSubmitRecord(obj,true);
}