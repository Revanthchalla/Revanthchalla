function noninventory(){
var noninventory=nlapiCreateRecord('noninventoryitem');
noninventory.setFieldValue('itemid','Lens Cleaners');
noninventory.setFieldValue('displayname','Lens Cleaners');
noninventory.setFieldValue('subsidiary','1');
noninventory.setFieldValue('includechildren','T');
noninventory.setFieldValue('cost','4');
noninventory.setFieldValue('custitem_item_category','3');
noninventory.setFieldValue('custitem_quantity_type','1');
noninventory.setFieldValue('custitem_product_line','2');
noninventory.setFieldValue('weight','0.15');
noninventory.setFieldValue('weightunit','3');
noninventory.selectNewLineItem('itemvendor');
noninventory.setCurrentLineItemValue('itemvendor','vendor','1552');
noninventory.commitLineItem('itemvendor');
noninventory.setFieldValue('taxschedule','2');
var noninventoryid=nlapiSubmitRecord(noninventory,true);
}