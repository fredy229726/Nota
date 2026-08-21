const btn = document.getElementById('button');

btn.addEventListener('click', function() {
    btn.value = '登録中...';

    const seleccionBatalla1 = document.querySelector('input[name="ganador1"]:checked');
    const seleccionBatalla2 = document.querySelector('input[name="ganador2"]:checked');
    const seleccionBatalla3 = document.querySelector('input[name="ganador3"]:checked');
    const seleccionBatalla4 = document.querySelector('input[name="ganador4"]:checked');
    const seleccionBatalla5 = document.querySelector('input[name="ganador5"]:checked');
    const seleccionBatalla6 = document.querySelector('input[name="ganador6"]:checked');
    const seleccionBatalla7 = document.querySelector('input[name="ganador7"]:checked');
    const seleccionBatalla8 = document.querySelector('input[name="ganador8"]:checked');
    const nombreCapturado = document.getElementById('nombre').value;

    if (!seleccionBatalla1 || !seleccionBatalla2 || !nombreCapturado) {
        btn.value = '予想をゲット';
        Swal.fire({
            title: 'データ不足！',
            text: 'すべての項目を入力してください。',
            icon: 'warning',
            confirmButtonColor: '#d33'
        })
        return;
    }



    const parametrosEmail = {
        nombre: nombreCapturado,
        ganador1: seleccionBatalla1.value,
        ganador2: seleccionBatalla2.value,
        ganador3: seleccionBatalla3.value,
        ganador4: seleccionBatalla4.value,
        ganador5: seleccionBatalla5.value,
        ganador6: seleccionBatalla6.value,
        ganador7: seleccionBatalla7.value,
        ganador8: seleccionBatalla8.value

    }

    const serviceID = 'default_service';
    const templateID = 'template_1ayuvjg';

    emailjs.send(serviceID, templateID, parametrosEmail)
     .then(() => { 
        btn.value = '予想をゲット';
     
        Swal.fire ({
            title: '予想をゲットした！',
            text: '予想が登録されました。今節も頑張ってください、トレーナー！',
            icon: 'success',
            background: '#2b2b2b',  
            color: '#ffffff',  
            confirmButtonColor: '#ff0000', 
            confirmButtonText: '了解！'
        });

     }, (err) => {
        btn.value = '予想をゲット'; 
 
        Swal.fire({
            title: '通信エラー',
            text: '予想の送信中に問題が発生しました: ' + JSON.stringify(err),
            icon: 'error',
            background: '#2b2b2b',
            color: '#ffffff',
            confirmButtonColor: '#ff0000'
        });
        console.log(JSON.stringify(err));
    });
});