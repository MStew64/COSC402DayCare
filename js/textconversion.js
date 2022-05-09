function storeContact()//Purpose of this function is to store encrypted input in database(file)
{
    table1=fopen("Table1(CustContact).txt",3);
    // For each of the variables below I need to store text input to encrypt
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var mobileNum=document.getElementById("mobile number").value;
    var area=document.getElementById("area").value;
    var city=document.getElementById("city").value;
    var state=document.getElementById("state").value;
    var postalCode=document.getElementById("Postal Code").value;
    //Line 7-14 store cipher text to _Cipher variable
    var nameCipher=CryptoJS.AES.encrypt(name,"security");
    var emailCipher=CryptoJS.AES.encrypt(email,"security");
    var mobileNumCipher=CryptoJS.AES.encrypt(mobileNum,"security");
    var areaCipher=CryptoJS.AES.encrypt(area,"security");
    var cityCipher=CryptoJS.AES.encrypt(city,"security");
    var stateCipher=CryptoJS.AES.encrypt(state,"security");
    var postalCodeCipher=CryptoJS.AES.encrypt(postalCode,"security");

    var str=nameCipher.concat(";",emailCipher,";",mobileNumCipher,";",areaCipher,";",cityCipher,";",stateCipher,";",postalCodeCipher,"\n");
    fwrite(table1,str);
    //To decrypt follow this format: 
    //nameDecrypted=CryptoJS.AES.decrypt(nameCipher,"security");
    //name=nameDecrypted.toString(CryptoJS.enc.Utf8);
}
function showContact()
{
    table1=fopen("Table1(CustContact).txt",0);
    file=fopen("Contact.txt",3);
    str = fread(table1,flength(table1));
    var prev=0;
    var x=0;
    for(x in str)
    {
        if(str.charAt(x)==";" || str.charAt(x)=="\n")
        {
            var temp=str.substring(prev,x-1);
            tempDecrypted=CryptoJS.AES.decrypt(temp,"security");
            clear=(tempDecrypted.toString(CryptoJS.enc.Utf8)).concat(str.charAt(x));

            fwrite(file,clear);
            prev=x+1;
        }
        x++;
    }
}
function storeEmp()
{
    table2=fopen("Table2(BusofDom).txt",3);
    // For each of the variables below I need to store text input to encrypt
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var mobileNum=document.getElementById("Mobile Number").value;

    //Lines 29-32 store cipher text to _Cipher variable
    var nameCipher=CryptoJS.AES.encrypt(name,"security");
    var emailCipher=CryptoJS.AES.encrypt(email,"security");
    var mobileNumCipher=CryptoJS.AES.encrypt(mobileNum,"security");

    var str=nameCipher.concat(";",emailCipher,";",mobileNumCipher,"\n");
    fwrite(table2,str);

}

function showEmp()
{
    table2=fopen("Table2(BusofDom).txt",0);
    file=fopen("Employee.txt",3);
    str = fread(table2,flength(table2));
    var prev=0;
    var x=0;
    for(x in str)
    {
        if(str.charAt(x)==";" || str.charAt(x)=="\n")
        {
            var temp=str.substring(prev,x-1);
            tempDecrypted=CryptoJS.AES.decrypt(temp,"security");
            clear=(tempDecrypted.toString(CryptoJS.enc.Utf8)).concat(str.charAt(x));

            fwrite(file,clear);
            prev=x+1;
        }
        x++;
    }   
}

function storeAppt()
{
    table3=fopen("Table3(ApptInfo).txt",3);
    // For each of the variables below I need to store text input to encrypt
    var apptD=document.getElementById("Appointment Date").value;
    var appTime=document.getElementById("Appointment Time").value;

    var apptDCipher=CryptoJS.AES.encrypt(apptD,"security");
    var appTimeCipher=CryptoJS.AES.encrypt(appTime,"security");
    
    str=apptDCipher.concat(";",appTimeCipher,"\n");
    fwrite(table3,str);

}

function showAppt()
{
    table3=fopen("Table3(ApptInfo).txt",0);
    file=fopen("Appointment.txt",3);
    str = fread(table3,flength(table3));
    var prev=0;
    var x=0;
    for(x in str)
    {
        if(str.charAt(x)==";" || str.charAt(x)=="\n")
        {
            var temp=str.substring(prev,x-1);
            tempDecrypted=CryptoJS.AES.decrypt(temp,"security");
            clear=(tempDecrypted.toString(CryptoJS.enc.Utf8)).concat(str.charAt(x));

            fwrite(file,clear);
            prev=x+1;
        }
        x++;
    }   
}
function storeAcct()
{
    table4=fopen("Table4(AccInfo).txt",3);
    
    var username=document.getElementById("username").value;
    var email=document.getElementById("Email Address").value;
    var pas=document.getElementById("password").value;

    var usernameCipher=CryptoJS.AES.encrypt(username,"security");
    var emailCipher=CryptoJS.AES.encrypt(emailAdd,"security");
    var pasCipher=CryptoJS.AES.encrypt(password,"security");

    var str=usernameCipher.concat(";",emailCipher,";",pasCipher,"\n");
    fwrite(table4,str);

}

function showAcct()
{
    table4=fopen("Table4(Acct).txt",0);
    file=fopen("Acct.txt",3);
    str = fread(table4,flength(table4));
    var prev=0;
    var x=0;
    for(x in str)
    {
        if(str.charAt(x)==";" || str.charAt(x)=="\n")
        {
            var temp=str.substring(prev,x-1);
            tempDecrypted=CryptoJS.AES.decrypt(temp,"security");
            clear=(tempDecrypted.toString(CryptoJS.enc.Utf8)).concat(str.charAt(x));

            fwrite(file,clear);
            prev=x+1;
        }
        x++;
    }   
}