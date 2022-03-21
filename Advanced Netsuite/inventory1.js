function inventory(){
var inventory=nlapiCreateRecord('inventoryitem');
inventory.setFieldValue('itemid','Eyeglasses');
inventory.setFieldValue('displayname','Eye Glasses');
inventory.setFieldValue('subsidiary','1');
inventory.setFieldValue('includechildren','T');
inventory.setFieldValue('cost','30');
inventory.selectNewLineItem('itemvendor');
inventory.setCurrentLineItemValue('itemvendor','vendor','1552');
inventory.commitLineItem('itemvendor');
inventory.setFieldValue('Salesdescription','Smart eyeglasses');
inventory.setFieldValue('costestimate','10');
inventory.setFieldValue('weight','25');
inventory.setFieldValue('weightunit',4);
inventory.setFieldValue('shippingcost','3');
var inventid=nlapiSubmitRecord(inventory,true);
}