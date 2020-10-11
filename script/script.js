
// ========== SIdebar ========
let btnMenu = document.getElementById('btnMenu');
btnMenu.addEventListener('click' , () => {
    let sidebar  = document.getElementById('sidebar');
    console.log();
    if(!sidebar.classList.contains('sidebar-muncul')) {
        console.log('ok');
        sidebar.classList.add('sidebar-muncul');
        sidebar.classList.remove('sidebar-hidden');
    } else {
        sidebar.classList.add('sidebar-hidden');
        sidebar.classList.remove('sidebar-muncul');
    }
})


window.addEventListener('scroll' , function() {
    console.log(window.pageYOffset);

    let wScroll = window.pageYOffset;
    
    // ========== parralax =============

    // ------- jumbotron -------------
    let dokter = document.getElementById('dokter');
    let jumboKonten = document.getElementById('jumboKonten');
    dokter.style.transform = 'translate( 0px , ' + wScroll/3 + 'px)';
    jumboKonten.style.transform = 'translate( 0px , ' + wScroll/8 + 'px)';
    dokter.style.opacity = 1 - wScroll * 0.0016;


    if(wScroll > 550) {
        let corona = document.getElementById('tentangCorona');
        corona.style.animation = 'landingLeft 2s forwards';

        let imgCorona = document.getElementById('imgCorona');
        imgCorona.style.animation = 'landingRight 2s forwards';
    }
    
    if(wScroll > 900) {
        let gejala = document.getElementById('gejala');
        gejala.style.animation = 'landingDown 2s forwards';
    }

    if(wScroll > 1700) {
        let penularan = document.getElementById('penularan');
        penularan.style.animation = 'landingDown 2s forwards';
    }

    if(wScroll > 2740) {
        let pencegahan1 = document.getElementById('pencegahanA');
        let pencegahan2 = document.getElementById('pencegahanB');
        let pencegahan3 = document.getElementById('pencegahanC');

        pencegahan1.style.animation = 'landingTop 2s forwards';
        pencegahan2.style.animation = 'landingTop 2s .5s forwards';
        pencegahan3.style.animation = 'landingTop 2s 1s forwards';


    }
})
