document.querySelector('.buton-dark-switch').addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.getElementById("button").classList.contains('fa-toggle-off')){
        document.getElementById('button').classList.remove('fa-toggle-off');
        document.getElementById('button').classList.add('fa-toggle-on');
        document.getElementById('button').classList.add('buton-normal-switch');
        document.getElementById('heading-1').classList.add('text-dark');
        document.getElementById('heading-2').classList.add('text-dark');
        document.getElementById('heading-3').classList.add('text-dark');
        document.getElementById('button-text').classList.add('buton-text-dark');
        document.getElementById('ov-pc-1').classList.add('background-dark'); 
        document.getElementById('ov-pc-2').classList.add('background-dark'); 
        document.getElementById('ov-pc-3').classList.add('background-dark'); 
        document.getElementById('ov-pc-4').classList.add('background-dark'); 
        document.getElementById('ov-td-1').classList.add('background-dark'); 
        document.getElementById('ov-td-2').classList.add('background-dark');
        document.getElementById('ov-td-3').classList.add('background-dark');
        document.getElementById('ov-td-4').classList.add('background-dark');
        document.getElementById('ov-td-5').classList.add('background-dark');
        document.getElementById('ov-td-6').classList.add('background-dark');
        document.getElementById('ov-td-7').classList.add('background-dark');
        document.getElementById('ov-td-8').classList.add('background-dark');
        document.getElementById('ov-sc-1').classList.add('text-dark');
        document.getElementById('ov-sc-2').classList.add('text-dark');
        document.getElementById('ov-sc-3').classList.add('text-dark');
        document.getElementById('ov-sc-4').classList.add('text-dark');
        document.getElementById('ov-tds-1').classList.add('text-dark');
        document.getElementById('ov-tds-2').classList.add('text-dark');
        document.getElementById('ov-tds-3').classList.add('text-dark');
        document.getElementById('ov-tds-4').classList.add('text-dark');
        document.getElementById('ov-tds-5').classList.add('text-dark');
        document.getElementById('ov-tds-6').classList.add('text-dark');
        document.getElementById('ov-tds-7').classList.add('text-dark');
        document.getElementById('ov-tds-8').classList.add('text-dark');






    
    } else if (document.getElementById("button").classList.contains('fa-toggle-on')){
        document.getElementById('button').classList.remove('fa-toggle-on');
        document.getElementById('button').classList.add('fa-toggle-off');
        document.getElementById('button').classList.remove('buton-normal-switch');
        document.getElementById('heading-1').classList.remove('text-dark');
        document.getElementById('heading-2').classList.remove('text-dark');
        document.getElementById('heading-3').classList.remove('text-dark'); 
        document.getElementById('button-text').classList.remove('buton-text-dark');
        document.getElementById('ov-pc-1').classList.remove('background-dark'); 
        document.getElementById('ov-pc-2').classList.remove('background-dark'); 
        document.getElementById('ov-pc-3').classList.remove('background-dark'); 
        document.getElementById('ov-pc-4').classList.remove('background-dark');
        document.getElementById('ov-td-1').classList.remove('background-dark'); 
        document.getElementById('ov-td-2').classList.remove('background-dark');
        document.getElementById('ov-td-3').classList.remove('background-dark');
        document.getElementById('ov-td-4').classList.remove('background-dark');
        document.getElementById('ov-td-5').classList.remove('background-dark');
        document.getElementById('ov-td-6').classList.remove('background-dark');
        document.getElementById('ov-td-7').classList.remove('background-dark');
        document.getElementById('ov-td-8').classList.remove('background-dark');
        document.getElementById('ov-sc-1').classList.remove('text-dark');
        document.getElementById('ov-sc-2').classList.remove('text-dark');
        document.getElementById('ov-sc-3').classList.remove('text-dark');
        document.getElementById('ov-sc-4').classList.remove('text-dark');
        document.getElementById('ov-tds-1').classList.remove('text-dark');
        document.getElementById('ov-tds-2').classList.remove('text-dark');
        document.getElementById('ov-tds-3').classList.remove('text-dark');
        document.getElementById('ov-tds-4').classList.remove('text-dark');
        document.getElementById('ov-tds-5').classList.remove('text-dark');
        document.getElementById('ov-tds-6').classList.remove('text-dark');
        document.getElementById('ov-tds-7').classList.remove('text-dark');
        document.getElementById('ov-tds-8').classList.remove('text-dark');





    }


});