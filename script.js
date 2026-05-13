const editor = grapesjs.init({
    // Editörün yerleşeceği div'in ID'si
    container: '#gjs',
    // Editörün yüksekliği
    height: '100%',
    width: 'auto',
    // Veritabanı (Storage) Ayarları
    storageManager: {
        type: 'remote',         // Uzak sunucu kullanacağımızı belirttik
        stepsBeforeSave: 1,      // Her 1 değişiklikte otomatik kaydet
        urlStore: 'save.php',    // Veriyi göndereceği PHP dosyası
        urlLoad: 'load.php',     // Veriyi çekeceği PHP dosyası
        contentTypeJson: false,  // PHP'nin $_POST ile okuyabilmesi için
    },
    // Blok Yöneticisi (Sürükle-Bırak öğeleri)
    blockManager: {
        appendTo: '', // Varsayılan yan panelde görünsün
        blocks: [
            {
                id: 'section',
                label: '<b>Bölüm</b>', 
                content: '<section style="padding:50px;"><h1>Yeni Bölüm</h1><p>Metninizi buraya yazın.</p></section>',
                attributes: { class: 'gjs-fonts gjs-f-b1' }
            },
            {
                id: 'text',
                label: 'Metin Kutusu',
                content: '<div style="padding:10px;">Buraya yazı yazabilirsiniz.</div>',
                attributes: { class: 'gjs-fonts gjs-f-text' }
            },
            {
                id: 'image',
                label: 'Resim',
                select: true,
                content: { type: 'image' },
                attributes: { class: 'gjs-fonts gjs-f-image' }
            }
        ]
    }
});

// Editör yüklendiğinde konsola mesaj yaz (Kontrol amaçlı)
editor.on('load', () => {
    console.log('GrapesJS ve Veritabanı bağlantısı hazır!');
});
// Editörün üst paneline bir Kaydet butonu ekler
editor.Panels.addButton('options', [{
    id: 'save-db',
    className: 'fa fa-floppy-o', // Disket ikonu
    command: 'save-to-db',
    attributes: { title: 'Veritabanına Kaydet' }
}]);

// Kaydet butonuna basınca ne olacağını tanımlar
editor.Commands.add('save-to-db', {
    run: function(editor, sender) {
        sender && sender.set('active', 0); // Butonun basılı kalmasını engelle
        editor.store(); // Veritabanına kaydetme işlemini zorla çalıştırır
        alert('Tasarım başarıyla veritabanına kaydedildi!');
    }
});
// 1. Üst Panele "İndir" Butonu Ekle
editor.Panels.addButton('options', [{
    id: 'export-html',
    className: 'fa fa-download',
    command: 'download-now', // Kendi komutumuzu veriyoruz
    attributes: { title: 'HTML Olarak İndir' }
}]);

// 2. İndirme Komutunu Tanımla (Eklentisiz Kesin Çözüm)
editor.Commands.add('download-now', {
    run: function(editor) {
        // Editördeki HTML ve CSS kodlarını al
        const html = editor.getHtml();
        const css = editor.getCss();
        
        // Tam bir HTML dosyası yapısı oluştur
        const fullHtml = `
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <style>${css}</style>
</head>
<body>
    ${html}
</body>
</html>`;

        // Dosyayı oluştur ve indir
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(fullHtml));
        element.setAttribute('download', 'tasarimim.html'); // İnecek dosyanın adı
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
});