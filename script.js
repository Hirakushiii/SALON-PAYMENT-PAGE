let menu_price = 0;
let Membership_value = undefined;
let Layanan_price = 0;

const menu = document.querySelector('#menu').addEventListener('change', () => {
    const PerawatanValue = document.querySelector('#Perawatan').value;
    const OutputHarga = document.querySelector('#Harga');
    switch (PerawatanValue) {
        case 'Gunting Rambut':
            OutputHarga.value = 'Rp50.000';
            menu_price = 50000;
            break;
        case 'Luluran':
            OutputHarga.value = 'Rp75.000';
            menu_price = 75000;
            break;
        default:
            alert('Aneh kamu wak :V');
            break;
    }
})
const Membership = document.querySelectorAll('input[type="radio"][name="pilihan"]').forEach((e) =>{
    e.addEventListener('change', () =>{
        if(e.checked){
            switch (e.value) {
                case 'Member':
                    Membership_value = true;
                    break;
                case 'Non-Member':
                    Membership_value = false;
                    break;
                default:
                    alert('Aneh kamu wak :V');
                    break;
            }
        }
    })
})
const Layanan = document.querySelectorAll('input[type="checkbox"][name="check"]').forEach((x) =>{
    x.addEventListener('change', () =>{
        if(x.checked){
            switch (x.value){
                case 'SPA':
                    Layanan_price += 200000;
                    break;
                case 'MASSAGE':
                    Layanan_price += 100000;
                    break;
                default:
                    alert('Aneh kamu wak :V');
                    break;
            }
        }
    })
})
const btn_hasil = document.querySelector('#hitung-hasil').addEventListener('click', () =>{
    const TotalOutput = document.querySelector('#Total-Bayar');
    const DiskonOutput = document.querySelector('#Diskon');
    if(Membership_value == true){
        let total = menu_price + Layanan_price;
        let diskon = menu_price + Layanan_price * 0.1;
        parseFloat(TotalOutput.value = `Rp${total - diskon}`);
        parseFloat(DiskonOutput.value = `Rp${diskon}`);
    }else if(Membership_value == false){
        parseFloat(TotalOutput.value = `Rp${menu_price + Layanan_price}`);
        DiskonOutput.value = `Anda belum membership`
    }else{
        alert('Aneh kamu wak :V');
    }
})
const clear = document.querySelector('#clear').addEventListener('click',() =>{
    location.reload();
})
const close = document.querySelector('#keluar').addEventListener('click',() =>{
    window.close();
})