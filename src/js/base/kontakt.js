$('#myForm').on('submit', function(e){
    e.preventDefault();

    let _thisloginFormOne = $(this);                
    let dataa = $(this).getFormData();

    let space = '%20';
    let nl = '%0d%0a';

    window.location.href = "mailto:rbedekovic1606@gmail.com?subject=Podatci&body=" + dataa.First_name + space
                            + dataa.Last_name + nl + dataa.Email + nl + dataa.Number + nl + dataa.dym + nl + 
                            dataa.answer + nl + dataa.rating;

});