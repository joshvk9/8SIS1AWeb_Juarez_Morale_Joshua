function calcular(){
    var monto_ini =0;
    var desc =0;
    var imp_desc = 0;
    var total =0;
    
    monto_ini = document.getElementById('monto_inicial').value;
    desc = document.getElementById('descuento').value;
    

    imp_desc = (monto_ini * desc)/100;

    document.getElementById('importe_descontado').value=imp_desc;

    total = monto_ini - imp_desc
    document.getElementById('total').value=total;
    console.log(total);
}