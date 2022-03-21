function createCust(){
    var customerRecord=nlapiCreateRecord('customer');
    customerRecord.setValue('isperson','T');
    customerRecord.setValue('companyname','Wholesale Books Company');
    customerRecord.setValue('firstname','Niharika');
    customerRecord.setValue('lastname','Sharma');
    customerRecord.setValue('subsidiary','1')
    customerRecord.setValue('phone','8458330530');
    customerRecord.setValue('email','niharika@books.com');
    var customerId=nlapiSubmitRecord(customerRecord,true);
}