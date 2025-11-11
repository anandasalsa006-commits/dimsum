// script.js

// Fungsi yang akan dijalankan ketika dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Ambil semua elemen dengan kelas 'menu-item'
    const menuItems = document.querySelectorAll('.menu-item');

    // 2. Iterasi (loop) melalui setiap item menu
    menuItems.forEach(item => {
        
        // 3. Tambahkan event listener untuk mendengarkan klik pada setiap item
        item.addEventListener('click', function() {
            
            // Ambil nama item dari elemen anak dengan kelas 'item-name'
            const itemNameElement = item.querySelector('.item-name');
            const itemName = itemNameElement ? itemNameElement.textContent.trim() : 'Item Menu';

            // Tampilkan notifikasi pop-up
            alert(`✅ Pesanan Ditambahkan!\nAnda memesan: ${itemName}\nSilakan lanjutkan ke kasir.`);
            
            // Opsional: berikan umpan balik visual singkat
            item.style.backgroundColor = '#E0F7FA'; // Ubah warna latar sebentar
            
            setTimeout(() => {
                item.style.backgroundColor = '#FFFFFF'; // Kembalikan warna setelah 500ms
            }, 500);
        });
    });

    // Opsional: Konsol log untuk memastikan script berhasil terhubung
    console.log("Script.js berhasil dimuat dan siap melayani pesanan!");
});
