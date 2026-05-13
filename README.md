#  GrapesJS Masterclass: Veritabanı Entegrasyonlu Web Tasarım Ekosistemi

Bu proje, modern web geliştirme süreçlerinde kullanılan **Düşük Kodlu (Low-Code)** platformların çalışma mantığını simüle eden, tam donanımlı bir web sayfası editörüdür. Kullanıcıların herhangi bir programlama dili bilmesine gerek kalmadan, sürükle-bırak yöntemiyle profesyonel arayüzler oluşturmasına ve bu verileri kalıcı olarak **MySQL** üzerinde saklamasına olanak tanır.

---

##  Mimari ve Çalışma Mantığı

Proje, **Client-Server (İstemci-Sunucu)** modeline dayanmaktadır. Sistemin işleyişi şu adımlardan oluşur:

1.  **Frontend Katmanı (GrapesJS):** Kullanıcının görsel olarak etkileşime girdiği alandır. Yapılan her sürükleme veya metin düzenleme işlemi, arka planda dinamik bir HTML/CSS yapısı oluşturur.
2.  **Veri Transferi (PHP/AJAX):** GrapesJS'in `storageManager` modülü, tarayıcıyı yenilemeye gerek kalmadan (asenkron) verileri PHP dosyalarımıza (`save.php`) gönderir.
3.  **Kalıcı Depolama (MySQL):** Gelen HTML ve CSS kodları, veritabanında uzun vadeli saklanmak üzere `LONGTEXT` tipindeki alanlara kaydedilir.
4.  **Dışa Aktarma (Export):** İstemci tarafında oluşturulan sanal bir bağlantı yardımıyla, tarayıcı üzerinden veritabanı bağımsız çalışan bir `.html` dosyası üretilmesini sağlar.

---

##  Teknik Özellikler ve Fonksiyonlar

*   **Otomatik Kayıt Sistemi (Auto-Save):** Kullanıcının yaptığı her hamle anlık olarak veritabanına işlenir. Bu sayede veri kaybı riski ortadan kalkar.
*   **Gelişmiş Blok Yönetimi:** Proje; "Bölümler (Hero)", "Metin Kutuları", "Medya Öğeleri" ve "Çok Sütunlu Yapılar" gibi önceden tanımlanmış hazır bileşenler sunar.
*   **Tam Duyarlı (Responsive) Tasarım:** Editör içerisinden masaüstü, tablet ve mobil görünümler arasında geçiş yaparak her cihazda kusursuz görünen sayfalar tasarlanabilir.
*   **Görsel Stil Yöneticisi:** Kenar boşlukları, tipografi, gölgeler ve renk paletleri gibi karmaşık CSS özellikleri, görsel bir panel üzerinden yönetilir.
*   **Taşınabilir Çıktı (Export):** "İndir" butonu aracılığıyla, tüm stilleri içine gömülmüş, yayına hazır tek bir HTML dosyası elde edilir.

---

##  Teknoloji Yığını (Stack)

| Teknoloji | Görevi |
| :--- | :--- |
| **HTML5 & CSS3** | Dashboard tasarımı ve sayfa iskeleti. |
| **JavaScript (ES6+)** | GrapesJS motorunun yapılandırılması ve DOM manipülasyonu. |
| **PHP 8.x** | Sunucu tarafı mantığı ve MySQL sorgu yönetimi. |
| **MySQL** | İlişkisel veritabanı yönetimi ve veri saklama. |
| **XAMPP** | Yerel sunucu ve veritabanı barındırma ortamı. |

---

##  Proje Klasör Hiyerarşisi

```text
grapesjs-proje/
├── index.html     # Dashboard ve editörün ana arayüzü.
├── style.css      # Mor tema ağırlıklı dashboard stilleri.
├── script.js      # GrapesJS konfigürasyonu ve API bağlantıları.
├── db.php         # Veritabanı bağlantı katmanı (mysqli).
├── save.php       # Veriyi veritabanına UPDATE eden servis.
├── load.php       # Veriyi veritabanından SELECT eden servis.
└── README.md      # Teknik dökümantasyon (Şu an okuduğunuz dosya).