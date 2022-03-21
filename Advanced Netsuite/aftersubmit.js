function OnAfterSubmit(type) {
    if(type=='create'){

        var fromId ='44393';
        var toEmail = nlapiGetFieldValue('entity');
        var sbj = 'sample';
        var msg = 'just a demo email';


        var fileObj = nlapiPrintRecord('TRANSACTION',nlapiGetRecordId(), 'PDF',null);

        nlapiSendEmail(fromId, toEmail, sbj, msg, null, null, null, fileObj);

    }
    }