window.CHRONOVERA_I18N = window.CHRONOVERA_I18N || {};
window.CHRONOVERA_I18N.tr = window.CHRONOVERA_I18N.tr || {};

window.CHRONOVERA_I18N.tr.privacy = {
    meta_title: 'Gizlilik Politikası | ChronoVera',
    meta_description: 'ChronoVera resmi gizlilik politikası. Kullanıcı mahremiyeti, yerel veri depolama (sandbox), donanım izinleri, alt işleyiciler ve KVKK/GDPR uyum taahhüdü.',
    badge: 'Resmi Gizlilik ve Mahremiyet Taahhüdü',
    title: 'ChronoVera: Gizlilik Politikası',
    date: 'Son Güncelleme: 21 Kasım 2026 // Yürürlük Tarihi: 21 Kasım 2026',
    highlight_html: `<strong>HisVera Studio</strong> ("HisVera", "biz" veya "geliştirici") olarak oyuncularımızın dijital mahremiyetine ve huzuruna en yüksek derecede saygı duyuyoruz.
                ChronoVera; modern mobil dünyanın sürekli izleme, veri satışı ve agresif reklam gürültüsüne karşı <strong>"Zamanı Durduran Güvenli Bir Dijital Sığınak"</strong> olarak mimari edilmiştir.
                Oyunumuz ve tanıtım mecralarımız gereksiz hiçbir kişisel veri toplamaz, sizi gizlice profillemez ve verilerinizi üçüncü taraflara satmaz.`,
    toc: {
        group1: 'Bölüm I: ChronoVera Mobil Oyunu',
        group2: 'Bölüm II: Web Platformu & Başvurular',
        group3: 'Bölüm III: Güvenlik, Saklama & Haklar',
        sec1: '1. Genel Bakış, Felsefe ve Kapsam',
        sec2: '2. Hangi Bilgileri Topluyoruz (ve Toplamıyoruz)?',
        sec3: '3. Cihaz İzinleri ve Donanım Şeffaflık Matrisi',
        sec4: '4. Yerel Depolama, Cihaz İçi Yedekleme & Sistem Yedekleri',
        sec5: '5. Gelir Modeli, Ödüllü Reklamlar (ATT) ve Satın Alımlar',
        sec6: '6. Etik Tasarım ve Dijital Huzur Manifestosu',
        sec7: '7. Liderlik Tablosu, Çevrimiçi Mod, Çökme Logları & Bağlantılar',
        sec8: '8. Bekleme Listesi ve Web İletişim Formları',
        sec9: '9. Tarayıcı Depolaması, Çerezler ve Web Analitiği (GA4)',
        sec10: '10. Üçüncü Taraf Hizmet Sağlayıcılar ve Aktarım',
        sec11: '11. Veri Güvenliği, RLS Koruması ve Saklama Süreleri',
        sec12: '12. Çocukların Gizliliği ve Aile Koruması (COPPA)',
        sec13: '13. Verileri ve İlerlemeyi Kalıcı Silme Rehberi',
        sec14: '14. Sorumluluk Sınırı ve Yayıncı Sorumluluk Reddi',
        sec15: '15. KVKK & GDPR Hakları, Veri Sorumlusu ve İletişim'
    },
    parts: {
        p1_badge: 'Bölüm I // Mobil Oyun (iOS & Android)',
        p1_title: 'Bölüm I: ChronoVera Mobil Oyunu',
        p1_desc: 'Apple App Store ve Google Play Store üzerinden sunulan tam sürüm, Kapalı Beta / TestFlight test sürümleri ve tüm oyun içi modülleri kapsar.',
        p2_badge: 'Bölüm II // Web Platformu & Başvurular',
        p2_title: 'Bölüm II: Web Sitesi, Bekleme Listesi ve İletişim',
        p2_desc_html: '<a href="chronovera.html" style="color: var(--cv-gold-light); text-decoration: underline;">ChronoVera tanıtım sayfası</a>, Kapalı Beta davetiyeleri ve ana sayfadaki ChronoVera iletişim başvurularını düzenler.',
        p3_badge: 'Bölüm III // Alt İşleyiciler, Güvenlik & Haklar',
        p3_title: 'Bölüm III: Güvenlik, Saklama ve Yasal Haklarınız',
        p3_desc: 'KVKK ve GDPR çerçevesinde üçüncü taraf altyapılar, veri güvenliği önlemleri, kalıcı silme yöntemleri ve başvuru kanallarını açıklar.'
    },
    sections: {
        sec1: `<h2>1. Genel Bakış, Felsefe ve Kapsam</h2>
                <p>
                    İşbu Gizlilik Politikası; HisVera Studio tarafından geliştirilen ve <strong>Apple App Store</strong> (iOS / iPadOS) ile <strong>Google Play Store</strong> (Android) mağazaları üzerinden sunulan <strong>ChronoVera</strong> mobil oyununun hem tam sürümünü hem de Kapalı Beta / TestFlight erken erişim sürümlerini, ayrıca oyunun resmi web tanıtım sayfasını (<a href="chronovera.html" style="color: var(--cv-gold); text-decoration: underline;">ChronoVera Tanıtım Sayfası</a>) ve web iletişim kanallarını kapsar.
                </p>
                <p>
                    ChronoVera'yı indirerek, kurarak veya sitemiz üzerinden kapalı beta testine / iletişim formuna başvurarak bu belgede açıklanan ilkeleri kabul etmiş sayılırsınız. Amacımız, oyuncunun mahremiyet endişesi taşımadan saf sanat ve felsefi zaman deneyimine odaklanabilmesidir.
                </p>`,
        sec2: `<h2>2. Hangi Bilgileri Topluyoruz (ve Toplamıyoruz)?</h2>
                <p>
                    ChronoVera, 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve Avrupa Genel Veri Koruma Tüzüğü (GDPR) kapsamında <strong>Veri Minimizasyonu (Data Minimization)</strong> ilkesine sıkı sıkıya bağlıdır:
                </p>

                <table class="policy-table">
                    <thead>
                        <tr>
                            <th>Veri Türü</th>
                            <th>Toplanma Durumu</th>
                            <th>Açıklama</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Kişisel Kimlik Verileri</strong> (Ad, soyad, T.C. kimlik, telefon, adres)</td>
                            <td style="color: #ef4444; font-weight: 700;">ASLA TOPLANMAZ</td>
                            <td>Oyun içinde üyelik açma, sosyal medya ile giriş yapma veya profil zorunluluğu yoktur.</td>
                        </tr>
                        <tr>
                            <td><strong>Kamera, Mikrofon, GPS Konumu, Rehber</strong></td>
                            <td style="color: #ef4444; font-weight: 700;">ASLA ERİŞİLMEZ</td>
                            <td>Oyunumuz cihazınızın bu donanım izinlerini talep etmez ve erişmez.</td>
                        </tr>
                        <tr>
                            <td><strong>Oyun İlerlemesi, Skorlar ve Tercihler</strong></td>
                            <td style="color: #10b981; font-weight: 700;">SADECE YEREL DEPOLAMA</td>
                            <td>24 hikaye bölümü, ChronoMaze labirent ilerlemesi, Zaman Çarkları en yüksek skorları, Zaman Bahçesi öğeleri, kilidi açılan auralar, toplanan kristaller ile ses/haptik/efekt ayarlarınız yalnızca cihazınızın güvenli belleğinde (Sandbox) tutulur.</td>
                        </tr>
                        <tr>
                            <td><strong>Zaman Kapsülleri Mektupları, Zaman Aynası ve Partner Adı</strong></td>
                            <td style="color: #10b981; font-weight: 700;">SADECE CİHAZ İÇİNDE</td>
                            <td>Zaman Kapsülleri modülüne geleceğe not olarak yazdığınız mektup başlıkları ve içerikleri, Zaman Aynası yanıtlarınız ve iki kişilik modda ekrana girdiğiniz partner adı tamamen size aittir; sunucularımıza aktarılmaz.</td>
                        </tr>
                        <tr>
                            <td><strong>Haptik Donanım Etkileşimi</strong></td>
                            <td style="color: #38bdf8; font-weight: 700;">ANLIK FİZİKSEL TEPKİ</td>
                            <td>Cihazın titreşim motoru iki kalp atışını aktarmak için kullanılır; biyometrik veri üretmez veya saklamaz.</td>
                        </tr>
                    </tbody>
                </table>`,
        sec3: `<h2>3. Cihaz İzinleri ve Donanım Şeffaflık Matrisi</h2>
                <p>
                    Apple App Store Review Guidelines ve Google Play Kullanıcı Verileri Yönergeleri gereğince, ChronoVera'nın cihaz donanımlarını nasıl kullandığı aşağıda açıkça listelenmiştir:
                </p>

                <table class="policy-table">
                    <thead>
                        <tr>
                            <th>Cihaz Donanımı / İzni</th>
                            <th>Durum</th>
                            <th>Kullanım Amacı ve Güvenlik Sınırı</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Dokunmatik Ekran (Multi-Touch)</strong></td>
                            <td style="color: #10b981; font-weight: 700;">TEMEL OYUN MEKANİĞİ</td>
                            <td>İki ruh arasındaki rezonansı sağlamak amacıyla tek/çift parmak temas koordinatlarını (X, Y) hesaplar. Biyometrik veri (parmak izi vb.) üretmez, saklamaz veya aktarmaz.</td>
                        </tr>
                        <tr>
                            <td><strong>Haptik Titreşim Motoru (Vibration)</strong></td>
                            <td style="color: #38bdf8; font-weight: 700;">DOKUNSAL GERİ BİLDİRİM</td>
                            <td>İki temas noktasının mesafesine göre anlık kalp atışı ritmi simüle eder. Donanımsal durum dışında hiçbir veri kaydetmez.</td>
                        </tr>
                        <tr>
                            <td><strong>Ses Donanımı (Hoparlör / Kulaklık)</strong></td>
                            <td style="color: #38bdf8; font-weight: 700;">SES ÇIKIŞI</td>
                            <td>432 Hz Solfeggio frekansları ve ortam seslerini çalmak içindir. Mikrofon izni talep edilmez ve ortam dinlenmez.</td>
                        </tr>
                        <tr>
                            <td><strong>Ağ / İnternet Erişimi (Network State)</strong></td>
                            <td style="color: #f59e0b; font-weight: 700;">OPSİYONEL</td>
                            <td>Yalnızca isteğe bağlı ödüllü video gösterimi, mağaza satın alma/lisans doğrulaması, salt-okunur Günün Bilmecesi veya isteğe bağlı platform oyun servisleri (Game Center / Google Play Games) için kullanılır. <strong>Oyun %100 çevrimdışı (offline) oynanabilir.</strong></td>
                        </tr>
                        <tr>
                            <td><strong>İsteğe Bağlı Yerel Dosya Yedekleme (Sistem Dosya Seçicisi)</strong></td>
                            <td style="color: #f59e0b; font-weight: 700;">KULLANICI TETİKLEMELİ</td>
                            <td>Kullanıcı Ayarlar menüsünden ilerlemesini kendi cihazına yedeklemek veya geri yüklemek istediğinde yalnızca seçilen yedek dosyası için işletim sisteminin yerleşik dosya seçicisi / paylaşım penceresi açılır. Geniş kapsamlı galeri veya depolama alanı tarama izni asla talep edilmez.</td>
                        </tr>
                        <tr>
                            <td><strong>Kamera, Mikrofon, GPS / Konum, Rehber, Fotoğraf Galerisi</strong></td>
                            <td style="color: #ef4444; font-weight: 700;">ASLA İSTENMEZ / ERİŞİLMEZ</td>
                            <td>ChronoVera bu kritik izinlerin hiçbirine ihtiyaç duymaz; işletim sisteminden (Android &amp; iOS) bu izinleri kesinlikle talep etmez.</td>
                        </tr>
                    </tbody>
                </table>`,
        sec4: `<h2>4. Cihaz Yerelinde Depolanan Veriler (Sandbox), İsteğe Bağlı Cihaz Yedeklemesi ve Sistem Yedeklemeleri</h2>
                <p>
                    ChronoVera; internet bağlantısı olmaksızın (uçakta, metroda veya çevrimdışı ortamlarda) eksiksiz çalışacak şekilde mimari edilmiştir.
                    Aşağıdaki tüm oyun verileri cihazınızın kendi yerel oyun belleğinde (<code>AsyncStorage</code>) saklanır:
                </p>
                <ul>
                    <li>Tamamlanan 24 hikaye bölümü, ChronoMaze labirent seviyeleri ve Zaman Çarkları en yüksek skorları,</li>
                    <li>Kazanılan kristaller, Zaman Bahçesi bitkileri, kilidi açılan/seçilen auralar ve tanıtım turu durumu,</li>
                    <li>Zaman Kapsülleri modülüne kaydettiğiniz kişisel mektuplar ve haptik/ses/kozmik efekt tercihleriniz.</li>
                    <li><strong>Kullanıcı Kontrollü Yerel Yedekleme (Ayarlar → Kendi Cihazına Yedekle / Geri Yükle):</strong> Oyuncu dilerse oyun içindeki <strong>Ayarlar</strong> bölümünden oyun verilerini kendi rızasıyla yerel bir yedek dosyası olarak <strong>doğrudan kendi cihazına</strong> (Dosyalar / İndirilenler vb.) kaydedebilir ve cihaz değişimi veya sıfırlama sonrasında aynı dosyayı seçerek geri yükleyebilir. Bu yedek dosyası hiçbir şekilde HisVera Studio sunucularına aktarılmaz; geliştirici bu dosyaya erişemez, kopyasını tutmaz ve kaybolması hâlinde kurtaramaz. Oluşturulan yedek dosyasının cihazda korunması, güvenliği ve üçüncü kişilerle paylaşılmaması tamamen kullanıcının kendi sorumluluğundadır.</li>
                </ul>
                <p>
                    Bu veriler işletim sisteminin <em>Uygulama Kum Havuzu (Application Sandbox)</em> içinde korunur; cihazınızdaki başka hiçbir uygulama ChronoVera'nın verilerine erişemez.
                    Cihazınızda işletim sistemi düzeyinde bulut yedekleme (<strong>Apple iCloud Backup</strong> veya <strong>Google Android Auto Backup</strong>) açıksa, oyun yerel kayıtları cihazınız tarafından kendi kişisel Apple/Google bulut hesabınıza şifreli olarak yedeklenebilir. Geliştirici bu kişisel yedeklere erişemez ve bunları görüntüleyemez.
                </p>`,
        sec5: `<h2>5. Gelir Modeli, İsteğe Bağlı Ödüllü Reklamlar (ATT) ve Mağaza Satın Alımları</h2>
                <p>
                    HisVera'nın etik tasarım manifestosu gereği ChronoVera'da oyuncuyu rahatsız eden, akışı bozan veya oyunun ortasında aniden beliren <strong>zorla reklamlar (zorunlu banner veya interstitial geçiş reklamları) sıfırdır.</strong>
                </p>
                <ul>
                    <li><strong>İsteğe Bağlı Rewarded Video (Ödüllü Video):</strong> Bölümlerde 2 geri sarım hakkı bittiğinde oyuncu dilerse bölümü baştan ücretsiz başlatabilir ya da tamamen kendi rızasıyla kısa bir video izleyerek kaldığı yerden devam edebilir.</li>
                    <li><strong>Reklam Gizliliği ve Apple ATT / GDPR Uyumu:</strong> İsteğe bağlı ödüllü video gösterimlerinde Google AdMob veya platform standartlarındaki güvenilir SDK'lar kullanılabilir. ChronoVera, varsayılan olarak oyuncuları uygulamalar arasında takip etmez ve <strong>kişiselleştirilmemiş (non-personalized)</strong> reklam sunumunu esas alır. Cihaz reklam tanımlayıcısına (IDFA / GAID) yalnızca kullanıcının iOS <em>Uygulama Takip Şeffaflığı (ATT)</em> veya AB/GDPR rıza penceresinden açık onay vermesi hâlinde erişilebilir; onay verilmediğinde veya reklam izlenmediğinde hiçbir tanımlayıcı işlenmez.</li>
                    <li><strong>Kozmetik Satın Alımlar ve ChronoPass:</strong> Oyun içi ışık auraları, Zaman Bahçesi tohumları ve ChronoPass üyelikleri yalnızca <strong>Apple App Store (StoreKit)</strong> ve <strong>Google Play Store (Billing API)</strong> resmî ödeme geçitleri üzerinden işlenir. Kredi kartı ve finansal verileriniz geliştirici tarafından asla görülmez veya kaydedilmez.</li>
                </ul>`,
        sec6: `<h2>6. Etik Tasarım ve Dijital Huzur Manifestosu</h2>
                <p>
                    Modern mobil dünyada yaygınlaşan manipülatif tasarım modellerine (Dark Patterns) karşı oyuncumuza net taahhütlerde bulunuyoruz:
                </p>
                <ul>
                    <li><strong>Karanlık Tasarım (Dark Pattern) Yoktur:</strong> Oyuncuyu iradesi dışında satın almaya zorlayan sahte sayaçlar, aciliyet hissi uyandıran yanıltıcı butonlar veya gizli abonelik tuzakları ChronoVera'da kesinlikle yer almaz.</li>
                    <li><strong>Kayıp Korkusu (FOMO) İstismarı Yoktur:</strong> Oyunu oynamadığınız süre boyunca sizi cezalandıran veya stres yaratan bildirim bombardımanı uygulanmaz.</li>
                    <li><strong>Gizli Arka Plan İzlemesi Yoktur:</strong> Oyuncu rızası dışında arka planda konum, mikrofon veya çapraz uygulama aktivitesi kesinlikle izlenmez.</li>
                </ul>`,
        sec7: `<h2>7. Liderlik Tablosu, Çevrimiçi Mod, Çökme Logları &amp; Dış Bağlantılar</h2>
                <p>
                    ChronoVera'nın tam sürümü ve gelecek güncellemeleri kapsamında devreye alınabilecek isteğe bağlı teknik özelliklere ilişkin şeffaflık ilkelerimiz şunlardır:
                </p>
                <ul>
                    <li><strong>Liderlik Tablosu, Başarımlar ve Bulut Kayıt (Apple Game Center / Google Play Games):</strong> İlerleyen güncellemelerde Zaman Çarkları veya bölüm skorları için isteğe bağlı liderlik tabloları ve başarımlar sunulabilir. Bu özelliklere kendi Apple/Google oyun profilinizle katılmayı seçtiğinizde yalnızca oyuncu takma adınız (alias) ve oyun skorunuz ilgili platformun kendi gizlilik politikası kapsamında işlenir; bu özelliği dilediğiniz zaman cihaz ayarlarınızdan veya oyun profilinizden kapatabilirsiniz.</li>
                    <li><strong>Günün Zaman Bilmecesi &amp; Olası Çevrimiçi Eşleşme (Online Co-op):</strong> Günün Bilmecesi özelliği internet bağlantısı mevcutken yalnızca salt-okunur günlük soru çeker ve kullanıcıdan kimlik bilgisi göndermez. İleride oda kodu ile çevrimiçi iki kişilik eşleşme desteği sunulursa bağlantı sırasında yalnızca anlık dokunma koordinatları (X, Y) ve rezonans durumu geçici olarak iletilir; ses, metin sohbeti veya konum geçmişi tutulmaz.</li>
                    <li><strong>Anonim Çökme ve Hata Günlükleri:</strong> Yalnızca cihazınızın gizlilik ayarlarında işletim sistemine izin vermeniz hâlinde Apple veya Google üzerinden oyunun teknik kararlılığını artırmaya yönelik kimliksiz (anonim) çökme raporları geliştirici paneline düşebilir.</li>
                    <li><strong>Oyun İçi Dış Bağlantılar:</strong> Oyun içinde yer alan <em>HisVera Stüdyo</em> ve <em>Dijital Sığınaklar</em> (<a href="index.html" style="color: var(--cv-gold); text-decoration: underline;">hisvera.com</a>) kısayollarına dokunduğunuzda cihazınızın harici web tarayıcısı açılır; ziyaret ettiğiniz web sayfasının kendi gizlilik şartları geçerlidir.</li>
                </ul>`,
        sec8: `<h2>8. Bekleme Listesi ve Web İletişim Formları</h2>
                <p>
                    Resmi web sitemiz üzerinden yalnızca sizin kendi rızanızla doldurduğunuz iki form aracılığıyla aşağıdaki bilgiler toplanmaktadır:
                </p>
                <ul>
                    <li><strong><a href="chronovera.html#bekleme-listesi" style="color: var(--cv-gold); text-decoration: underline;">Kapalı Beta Bekleme Listesi</a>:</strong> Davetiyenizi size özel hazırlayabilmek ve doğru platform erişimi gönderebilmek için <strong>Adınız</strong>, <strong>E-posta adresiniz</strong>, <strong>Platform tercihiniz</strong> (Android Google Play Beta / iOS Ön Kayıt &amp; TestFlight), <strong>Deneyim modu tercihiniz</strong> (Solo / Rezonans Çifti) ve üretilen <strong>Bilet Numaranız</strong> (<code>#CV-2026-XXXX</code>) kaydedilir.</li>
                    <li><strong><a href="index.html#iletisim" style="color: var(--cv-gold); text-decoration: underline;">Web İletişim Formu</a> (ChronoVera seçimi):</strong> Destek, geri bildirim veya beta sorularınızı yanıtlayabilmek için <strong>Adınız / rumuzunuz</strong>, <strong>E-posta adresiniz</strong>, <strong>Konu seçiminiz</strong>, <strong>Mesaj metniniz</strong>, site <strong>Dil tercihiniz</strong> (TR/EN) ve otomatik üretilen <strong>Talep Kodunuz</strong> (<code>#CV-2026-XXXX</code>) kaydedilir.</li>
                    <li><strong>Kesin Kullanım Sınırı:</strong> Bu bilgiler yalnızca beta test daveti, erken erişim duyurusu veya ilettiğiniz destek talebine yanıt vermek için kullanılır; hiçbir koşulda ticari spam bültenlere eklenmez, reklam ağlarına veya üçüncü şahıs veri aracılarına satılmaz/kiralanmaz.</li>
                </ul>`,
        sec9: `<h2>9. Tarayıcı Depolaması, Çerezler ve Web Analitiği (Google Analytics GA4)</h2>
                <p>
                    ChronoVera tanıtım ve yasal bilgilendirme web sayfalarında kullanıcıyı reklama yönelik hedefleyen kişiselleştirilmiş reklam çerezleri kullanılmaz. Web deneyiminin teknik çalışması ve temel ziyaretçi istatistikleri için yalnızca aşağıdaki mekanizmalardan yararlanılır:
                </p>
                <ul>
                    <li><strong>Tarayıcı Yerel Depolaması (<code>localStorage</code> / <code>sessionStorage</code>):</strong> Bekleme listesine kaydolduktan sonra Temporal Pass bilet kartınızı tekrar görüntüleyebilmeniz için yalnızca kendi tarayıcınızda <code>chronovera_pass</code> kaydı; sayfa giriş animasyonunun aynı oturumda kontrolü için ise <code>sessionStorage</code> değeri tutulur. Dilediğiniz an tarayıcı önbelleğini temizleyerek silebilirsiniz.</li>
                    <li><strong>Web Analitiği (Google Analytics GA4):</strong> Yalnızca web sayfalarımızda toplam ziyaretçi trafiğini ve sayfa performansını anonim/toplulaştırılmış olarak ölçmek için Google Analytics (GA4) analitik çerezleri kullanılır <em>(çevrimdışı çalışan mobil oyunun içinde kesinlikle kullanılmaz)</em>. Kullanıcılar tarayıcı ayarlarından veya çerez kontrollerinden analitik çerezlerini diledikleri zaman engelleyebilirler.</li>
                    <li><strong>Harici Web Kaynakları (CDN):</strong> Yazı tipleri (Google Fonts), ikonlar (Font Awesome / Cloudflare CDN) ve form gönderim bağlantısı (Supabase JS CDN) tarayıcınız tarafından güvenli HTTPS üzerinden yüklenir. Bu sunucular teknik bağlantı güvenliği gereği standart HTTP başlıklarını (IP adresi ve tarayıcı bilgisi gibi) geçici olarak işleyebilir.</li>
                </ul>`,
        sec10: `<h2>10. Üçüncü Taraf Hizmet Sağlayıcılar (Alt İşleyiciler) ve Uluslararası Veri Aktarımı</h2>
                <p>
                    ChronoVera hizmetlerini güvenli biçimde sunabilmek için yalnızca aşağıda belirtilen saygın ve endüstri standardı sağlayıcılardan yararlanılır. Mobil oyunun çevrimdışı kayıtları ve Zaman Kapsülü notlarınız bu sunuculara aktarılmaz:
                </p>

                <table class="policy-table">
                    <thead>
                        <tr>
                            <th>Sağlayıcı / Alt İşleyici</th>
                            <th>Kullanım Kapsamı</th>
                            <th>İşlenen Veri &amp; Güvence</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Apple Inc.</strong> (App Store, StoreKit, TestFlight, Game Center)</td>
                            <td>iOS / iPadOS Oyun Dağıtımı &amp; Ödemeler</td>
                            <td>Mağaza indirme, uygulama içi satın alma doğrulama ve kullanıcı açarsa isteğe bağlı liderlik tablosu / anonim çökme raporları.</td>
                        </tr>
                        <tr>
                            <td><strong>Google LLC</strong> (Google Play, Billing, Play Games, Google Analytics GA4)</td>
                            <td>Android Oyun Dağıtımı, Ödemeler &amp; Web Analitiği</td>
                            <td>Mağaza indirme, satın alma doğrulama, kapalı beta erişim listesi, kullanıcı açarsa isteğe bağlı liderlik tablosu ve yalnızca web sayfalarında toplu anonim ziyaretçi trafiği ölçümü (GA4).</td>
                        </tr>
                        <tr>
                            <td><strong>Google AdMob</strong> <em>(Opsiyonel)</em></td>
                            <td>Yalnızca Rızaya Bağlı Ödüllü Video</td>
                            <td>Oyuncu kendi isteğiyle ödüllü video izlediğinde çalışır; varsayılan olarak kişiselleştirilmemiş reklam tercih edilir.</td>
                        </tr>
                        <tr>
                            <td><strong>Supabase Inc.</strong></td>
                            <td>Web Bekleme Listesi &amp; Web İletişim Formları</td>
                            <td>Yalnızca web formları üzerinden sizin gönderdiğiniz ad, e-posta, platform/konu ve mesaj kayıtlarını şifreli veritabanında saklar ve bildirim tetikler.</td>
                        </tr>
                        <tr>
                            <td><strong>Zoho Corporation</strong> (Zoho Mail)</td>
                            <td>Resmi E-posta İletişimi</td>
                            <td><a href="mailto:chronovera@hisvera.com" style="color: var(--cv-gold); text-decoration: underline;">chronovera@hisvera.com</a> üzerinden form bildirimlerinin alınması, beta davetiyelerinin ve destek yanıtlarının iletilmesi.</td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    Yukarıda sayılan bulut, mağaza ve e-posta altyapılarının sunucuları Avrupa Birliği (AB) veya Amerika Birleşik Devletleri'nde (ABD) bulunabilmektedir. Web formları aracılığıyla bilerek paylaştığınız iletişim/beta verileri, KVKK Madde 9 ve GDPR standartlarına uygun şekilde 256-bit SSL/TLS şifrelemesi ve veri minimizasyonu ilkeleri gözetilerek aktarılır.
                </p>`,
        sec11: `<h2>11. Veri Güvenliği, RLS Koruması ve Saklama / İmha Süreleri</h2>
                <p>
                    Paylaştığınız sınırlı web verilerinin gizliliğini korumak için teknik ve idari tedbirler uygulanmaktadır:
                </p>
                <ul>
                    <li><strong>Aktarım ve Erişim Güvenliği:</strong> Web sayfalarımız ve Supabase veri iletimi <strong>256-bit HTTPS/TLS</strong> ile şifrelenir. Veritabanı tablolarımızda sıkı <strong>Satır Düzeyinde Güvenlik (RLS - Row Level Security)</strong> kuralları aktiftir; web ziyaretçileri yalnızca yeni kayıt ekleyebilir (<code>INSERT</code>), başka hiçbir kullanıcının kaydını görüntüleyemez veya değiştiremez.</li>
                    <li><strong>Mobil Oyun İçi Veriler:</strong> Tamamen cihazınızda yerel olarak tutulduğu için siz oyunu silene veya sıfırlayana kadar cihazınızda kalır; sunucularımızda tutulmaz.</li>
                    <li><strong>Bekleme Listesi Kayıtları:</strong> Beta testi ve ilgili mağaza lansman süreci tamamlanana kadar saklanır; lansman süreci sonrasında veya talep etmeniz hâlinde en geç <strong>48 saat</strong> içinde kalıcı olarak silinir.</li>
                    <li><strong>Web İletişim Mesajları:</strong> Destek veya geri bildirim talebiniz sonuçlandıktan sonra yasal takip amacıyla en fazla <strong>12 ay</strong> saklanır, ardından periyodik olarak imha edilir; talebiniz hâlinde daha erken silinir.</li>
                </ul>`,
        sec12: `<h2>12. Çocukların Gizliliği ve Aile Koruması (COPPA &amp; GDPR-K Uyumlu)</h2>
                <p>
                    ChronoVera; şiddet, kumar, korku veya cinsel içerik barındırmayan felsefi ve meditatif bir sanat deneyimidir.
                    13 yaşından (veya ilgili ülke yasalarına göre 16 yaşından) küçük çocuklardan bilerek herhangi bir kişisel veri toplamıyoruz.
                </p>
                <p>
                    Ebeveynler, çocuklarının mobil cihazlarındaki satın alma ve süre sınırlarını Apple Ekran Süresi veya Google Family Link araçlarıyla gönül rahatlığıyla yönetebilirler. Yanlışlıkla bir çocuk verisi iletildiğini fark ederseniz lütfen <a href="mailto:chronovera@hisvera.com" style="color: var(--cv-gold); text-decoration: underline;">chronovera@hisvera.com</a> adresinden bize bildirin; kayıt derhal silinecektir.
                </p>`,
        sec13: `<h2>13. Oyun Verilerini ve Kayıtları Kalıcı Silme Rehberi </h2>
                <p>
                    Apple App Store İnceleme Kılavuzları ve Google Play Kullanıcı Verileri Politikaları doğrultusunda, kullanıcılarımızın tüm verilerini istedikleri an kalıcı olarak yok etme hakları bulunmaktadır:
                </p>
                <ul>
                    <li><strong>Oyun İçinden Tek Dokunuşla Sıfırlama:</strong> ChronoVera oyunu içinde <strong>Ayarlar &gt; Veri &amp; İlerleme &gt; "Tüm İlerlemeyi Sıfırla"</strong> seçeneğine dokunarak tüm kristalleri, bölümleri, Zaman Bahçesi'ni ve Zaman Kapsülleri'ni cihazınızdan anında sıfırlayabilirsiniz.</li>
                    <li><strong>Cihaz Ayarlarından veya Oyunu Silerek Kalıcı Kaldırma:</strong> Cihazınızın <em>Ayarlar &gt; Uygulamalar &gt; ChronoVera &gt; Depolama &gt; "Verileri Temizle"</em> adımlarını izleyebilir ya da oyunu doğrudan cihazınızdan silebilirsiniz. Bu işlem oyunun sandbox belleğindeki tüm yerel izleri geri döndürülemez şekilde anında siler. <em>(Not: Ayarlar üzerinden kendi cihaz klasörlerinize manuel bir yedek dosyası dışa aktardıysanız, oyunu kaldırdıktan sonra bu bağımsız yedek dosyasını da cihazınızın Dosyalar/İndirilenler klasöründen bizzat silebilirsiniz.)</em></li>
                    <li><strong>Bekleme Listesi &amp; Web İletişim Kaydını Silme:</strong> Tanıtım sayfamız üzerinden bekleme listesine veya iletişim formuna kaydolduysanız ve e-posta adresinizin veri tabanımızdan tamamen silinmesini istiyorsanız; <a href="mailto:chronovera@hisvera.com" style="color: var(--cv-gold); text-decoration: underline;">chronovera@hisvera.com</a> adresine kayıtlı e-postanızdan <em>"Kayıt Silme"</em> konulu kısa bir ileti göndermeniz yeterlidir. Talebiniz en geç <strong>48 saat</strong> içerisinde yerine getirilir ve kaydınız kalıcı olarak imha edilir.</li>
                </ul>`,
        sec14: `<h2>14. Sorumluluk Sınırı ve Yayıncı Sorumluluk Reddi</h2>
                <p>
                    ChronoVera mobil oyunu ve resmi web tanıtım sayfaları kullanıcılara <strong>"olduğu gibi" (as-is)</strong> ve <strong>"mevcut olduğu şekilde"</strong> sunulmaktadır. Yürürlükteki mevzuatın izin verdiği azami ölçüde <strong>HisVera Studio</strong> ve yapımcı/geliştirici (<strong>Onur Öztürk</strong>), aşağıdaki durumlardan kaynaklanabilecek hiçbir olumsuz sonuç veya zarardan sorumlu tutulamaz:
                </p>
                <ul>
                    <li><strong>Genel Kullanım ve Teknik Aksaklıklar:</strong> Oyunun veya web sitesinin kullanımından, kullanılamamasından, beklenmedik yazılım/donanım uyumsuzluklarından ya da olası her türlü olumsuz durumdan doğabilecek doğrudan, dolaylı, arızi, özel, cezai veya maddi/manevi hiçbir zarardan HisVera Studio ve yapımcı sorumlu tutulamaz.</li>
                    <li><strong>Cihaz, Sistem ve Yerel Yedekleme Kaynaklı Veri Kayıpları:</strong> Kullanıcının cihazındaki donanım veya yazılım arızaları, işletim sistemi güncellemeleri, depolama alanı yetersizliği, üçüncü taraf zararlı yazılımlar, cihazın kaybolması/çalınması ya da kullanıcının Ayarlar menüsünden kendi cihazına aldığı yerel yedek dosyasını kaybetmesi, silmesi, bozması veya üçüncü kişilerle paylaşması sonucu doğabilecek veri kayıplarından ve mahremiyet ihlallerinden yapımcı hiçbir şekilde sorumlu değildir.</li>
                    <li><strong>Üçüncü Taraf Platformlar, Ağ ve Mücbir Sebepler:</strong> Apple App Store, Google Play Store, Apple iCloud/Google yedekleme hizmetleri, isteğe bağlı ödeme/reklam sağlayıcıları, harici web bağlantıları, internet altyapı kesintileri, yetkisiz üçüncü taraf siber müdahaleleri veya mücbir sebepler (force majeure) nedeniyle yaşanabilecek kesinti, gecikme veya olumsuz durumlardan HisVera Studio ve yapımcı sorumlu tutulamaz.</li>
                    <li><strong>Kullanıcı Tarafından Oluşturulan Yerel İçerikler:</strong> Oyuncunun kendi iradesiyle Zaman Kapsülleri, Zaman Aynası veya partner adı alanlarına yazdığı tüm metin ve içeriklerin hukuki ve kişisel sorumluluğu münhasıran kullanıcıya aittir.</li>
                </ul>`,
        sec15: `<h2>15. KVKK &amp; GDPR Hakları, Veri Sorumlusu, İletişim ve Yürürlük</h2>
                <p>
                    6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) Madde 11 ve Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) kapsamında aşağıdaki haklara sahipsiniz:
                </p>
                <ul>
                    <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenmişse buna ilişkin bilgi ve kopya talep etme,</li>
                    <li>Verilerin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içi veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
                    <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme; silinmesini, yok edilmesini (unutulma hakkı) veya işlenmesinin kısıtlanmasını talep etme,</li>
                    <li>İsteğe bağlı rıza verdiğiniz süreçlerde rızanızı geri çekme, veri taşınabilirliği isteme ve ilgili veri koruma otoritesine (Türkiye'de KVK Kurumu / AB'de ilgili denetim makamı) başvurma.</li>
                </ul>
                <p>
                    Apple App Store ve Google Play platformlarındaki resmi yayıncı, veri sorumlusu bilgileri ve başvuru kanallarımız aşağıdadır:
                </p>
                <ul>
                    <li><strong>Resmi Veri Sorumlusu &amp; Yayıncı (Apple Developer):</strong> Onur Öztürk / HisVera Studio</li>
                    <li><strong>ChronoVera Destek &amp; İletişim E-Postası:</strong> <a href="mailto:chronovera@hisvera.com" style="color: var(--cv-gold); text-decoration: none;">chronovera@hisvera.com</a></li>
                    <li><strong>Genel Web İletişim:</strong> <a href="index.html#iletisim" style="color: var(--cv-gold); text-decoration: underline;">Web İletişim Menüsü (hisvera.com/#iletisim)</a></li>
                    <li><strong>Yanıt Süresi:</strong> İlettiğiniz tüm yasal bilgi ve silme talepleri en geç 30 gün (bekleme listesi ve iletişim silme talepleri 48 saat) içerisinde ücretsiz olarak incelenip tarafınıza yazılı olarak yanıtlanacaktır.</li>
                </ul>
                <p>
                    <strong>Politika Güncellemeleri ve Yürürlük:</strong> ChronoVera'ya yeni özellikler (örneğin isteğe bağlı liderlik tabloları veya çevrimiçi modlar) eklendikçe ya da yasal düzenlemeler değiştikçe bu gizlilik politikası güncellenebilir. Güncel metin yayınlandığı tarihte yürürlüğe girer ve önemli değişiklikler sayfa başındaki tarih alanından duyurulur.
                </p>`
    }
};
