let mevcutGirdi = '0';

function sonucuGuncelle() {
    document.querySelector('.sonuc').value = mevcutGirdi;
}

function girdiyiTemizle() {
    mevcutGirdi = '0';
    sonucuGuncelle();
}

function sonKarakteriSil() {
    mevcutGirdi = mevcutGirdi.slice(0, -1);
    if (mevcutGirdi === '') {
        mevcutGirdi = '0';
    }
    sonucuGuncelle();
}

function rakamEkle(rakam) {
    if (mevcutGirdi === '0') {
        mevcutGirdi = '';
    }
    mevcutGirdi += rakam;
    sonucuGuncelle();
}

function operatorEkle(operator) {
    mevcutGirdi += operator;
    sonucuGuncelle();
}

function ondalikNoktaEkle() {
    if (!mevcutGirdi.includes('.')) {
        mevcutGirdi += '.';
        sonucuGuncelle();
    }
}

function sonucuHesapla() {
    try {
        mevcutGirdi = eval(mevcutGirdi).toString();
        sonucuGuncelle();
    } catch (hata) {
        mevcutGirdi = 'Hata';
        sonucuGuncelle();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const butonlar = document.querySelectorAll('.rkmbtn, .optbtn, .clear, .esittir');

    butonlar.forEach(buton => {
        buton.addEventListener('click', function () {
            const butonMetni = this.innerText;

            if (butonMetni === 'AC') {
                girdiyiTemizle();
            } else if (butonMetni === 'DEL') {
                sonKarakteriSil();
            } else if (butonMetni === '=') {
                sonucuHesapla();
            } else {
                if (!isNaN(butonMetni) || butonMetni === '.') {
                    rakamEkle(butonMetni);
                } else {
                    operatorEkle(butonMetni);
                }
            }
        });
    });
});



