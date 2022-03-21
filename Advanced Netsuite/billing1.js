function billing(){
    var obj=nlapiTransformRecord('salesorder',62764,'cashsale');
    obj.setFieldValue('custbody_end_user',48025);
    obj.selectLineItem('item','1');
    obj.setCurrentLineItemValue('item','quantity','10');
    obj.setCurrentLineItemValue('item','location','2');
    obj.commitLineItem('item')
    var billid=nlapiSubmitRecord(obj,true);
}