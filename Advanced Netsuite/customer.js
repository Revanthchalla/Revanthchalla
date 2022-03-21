var m=nlapiCreateRecord('customer');
m.setFieldValue('companyname','Bags Company');
m.setFieldValue('subsidiary','1');
m.setFieldValue('phone','7438929493');
m.setLineItemValue('addressbook','addr1','1','Kaveri Hills');
m.setLineItemValue('addressbook','zip','1','90001');
m.setFieldValue('email','bags@company.com');
var p= nlapiSubmitRecord(m,true);