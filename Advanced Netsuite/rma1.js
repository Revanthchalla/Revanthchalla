function rma1(){
    var obj=nlapiTransformRecord('salesorder',62764,'returnauthorization');
    obj.selectLineItem('item',1);
    obj.setCurrentLineItemValue('item','quantity',5);
    obj.commitLineItem('item');
    var returnid=nlapiSubmitRecord(obj,true);
    }