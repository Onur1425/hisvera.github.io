// Hisvera Uyum Testi - Türkçe Dil Paketi
window.UYUM_I18N = window.UYUM_I18N || {};

window.UYUM_I18N.tr = {
    meta: {
        lang: 'tr',
        name: 'Türkçe',
        flag: '🇹🇷'
    },
    ui: {
        headerBadge: 'Aura Rezonansı Aktif',
        langMoreTitle: 'Diğer Diller (Yakında)',
        langDropdownTitle: '✦ 14 Dilde HİS Evreni',
        langDropdownActiveTitle: 'Aktif Diller',
        langDropdownSoonTitle: 'Yakında (Mobil Uygulamada Aktif)',
        badgeActive: 'Aktif',
        badgeSoon: 'Yakında',
        langDropdownFooter: '🌙 Diğer 12 dil mobil uygulamamızda aktiftir, web testine çok yakında eklenecektir.',

        introTag: '✦ MİSTİK REZONANS MATRİSİ',
        introTitle: 'Ruh İkizi & Aura Frekans Testi',
        inviterGreeting: (name) => `<strong>${name}</strong> seninle arasındaki görünmez bağı keşfetmek için bir frekans köprüsü başlattı.`,
        inviterWantsText: 'seninle frekansını test etmek istiyor ✨',
        defaultInviterName: 'Bir Ruhdaş',
        defaultParticipantName: 'Bir Ruhdaş',

        dimMentalIntro: 'Zihinsel Uyum',
        dimEmotionalIntro: 'Duygusal Rezonans',
        dimSpiritualIntro: 'Ruhani Frekans',
        modeSelectorTitle: 'Yolculuk Derinliğini Seç',

        modeQuickTitle: 'Hızlı Rezonans',
        modeQuickSub: '8 Mistik Soru • ~2 dk',
        modeDeepTitle: 'Derin Ruh Yolculuğu',
        modeDeepSub: '16 Soru • Gölge Arketip & Telepati',

        introDescQuick: 'Evrendeki her bağın gizli bir dalga boyu vardır. 8 derin mistik soru ile aranızdaki <strong>Zihinsel, Duygusal ve Ruhani</strong> uyum yüzdesini keşfet.',
        introDescDeep: 'Evrendeki her bağın gizli bir dalga boyu vardır. 16 derin mistik soru ile <strong>Zihinsel, Duygusal, Ruhani, Gölge Benlik ve Telepati</strong> spektrumunu keşfet.',

        btnStartQuick: 'Hızlı Rezonans Testine Başla (8 Soru)',
        btnStartDeep: 'Derin Ruh Yolculuğuna Başla (16 Soru)',
        footerSecurity: '✦ Gizli & Anonim • 12 Mistik Boyut • Derin Karakter Analizi',

        // Quiz
        questionStep: (curr, total) => `Soru ${curr} / ${total}`,
        questionStepLabel: (curr, total) => `Soru ${curr} / ${total}`,

        // Name Screen
        nameTitle: 'Auranın Analizi Hazırlanıyor',
        nameSubtitle: (name) => `<strong>${name}</strong> ile olan frekans matrisini mühürlemek ve analizini tamamlamak için ismini yaz.`,
        nameScreenDesc: 'Rezonans raporunda ve mühürlü kartta görünecek ismini veya rumuzunu fısılda:',
        nameInputPlaceholder: 'Rumuzun / İsmin (örn: Deniz)',
        btnCalculate: 'Frekans Uyumumuzu Gör ✨',

        // Analyzing Screen
        analyzingTitle: 'Auralar Hizalanıyor...',
        analyzingDesc: 'Zihinsel ve duygusal frekans dalgaları hesaplanıyor.',
        analyzingStep1: 'Aura dalgaları taranıyor...',
        analyzingStep2: 'Zihinsel ve duygusal patikalar eşleştiriliyor...',
        analyzingStep3: 'Rezonans frekansı mühürleniyor...',

        // Result Screen
        scoreLabel: 'Frekans Uyumu',
        dimMental: 'Zihinsel Uyum (Dalga Boyu)',
        dimEmotional: 'Duygusal Rezonans (Şefkat & Empati)',
        dimSpiritual: 'Ruhani Frekans (Telepatik Çekim)',
        dimShadow: 'Gölge Benlik Rezonansı (Kırılganlık & Sırdaşlık)',
        dimTelepathy: 'Telepatik Sezgi (Kelimesiz Anlaşma)',

        sectionMystery: 'Frekansınızın Gizemi',
        sectionBalance: 'Gölge & Denge Dinamiği',
        sectionProphecy: 'Mistik Kehanet & Tavsiye',

        convTitle: 'Bu Bağı HİS Dünyasına Taşı 🌙',
        convDesc: "HİS uygulamasını indirerek geceleri fısıltı paylaşabilir, ruh ikizine telepatik sinyal gönderebilir ve Karanlık Gece Geçidi'nde fener yakabilirsin.",
        btnAppStore: "App Store'dan İndir",
        btnGooglePlay: "Google Play'den İndir",

        btnShareResult: (name) => name ? `Sonucu ${name} ile Paylaş ✨` : 'Sonucu Paylaş ✨',
        btnShareStory: 'Instagram Story Kartı Paylaş ✨',
        btnDownloadStory: 'Story Görselini İndir (9:16 HD) 📥',

        storyPreparing: 'Story Kartı Hazırlanıyor... ✨',
        storyDownloading: 'İndiriliyor...',
        storyModalTitle: 'Story Önizleme',
        btnModalDownload: 'Story Görselini Kaydet (HD)',
        storyModalClose: 'Kapat',
        modalNotice: 'Instagram Story\'ye ekleyip <strong style="color: #ffd166;">hisvera.com</strong> ve <strong style="color: #f472b6;">@his.noktasi</strong> etiketleyebilirsiniz ✨',
        footerRights: '© 2026 <a href="index.html">hisvera</a> • HİS Mobil Uygulaması Tüm Hakları Saklıdır.',

        storyShareTitle: 'Aura & Ruh İkizi Frekans Testi | hisvera',
        storyShareText: (n1, n2, sc) => `🔮 ${n1} ile ${n2} Ruh İkizi Uyumumuz: %${sc}! hisvera.com`,

        // WhatsApp Share Message
        waMessageQuick: (inviter, score, title, m, e, s, url) => `✨ ${inviter}, seninle hisvera.com üzerinde Aura Frekans Testini çözdüm!\n🔮 Aramızdaki Uyum: %${score} (${title})\n🧠 Zihinsel: %${m} | 🤍 Duygusal: %${e} | 🌌 Ruhani: %${s}\n\nSen de sonucu incele: ${url}`,
        waMessageDeep: (inviter, score, title, m, e, s, sh, t, url) => `✨ ${inviter}, seninle hisvera.com üzerinde 16 Soruluk Derin Ruh Analizini tamamladım!\n🔮 Aramızdaki Frekans: %${score} (${title})\n🧠 Zihinsel: %${m} | 🤍 Duygusal: %${e} | 🌌 Ruhani: %${s}\n🔮 Gölge Benlik: %${sh} | ✨ Telepati: %${t}\n\nSen de sonucu incele: ${url}`
    },

    auraTraits: {
        mental: {
            A: { name: 'İçsel Sessizlik', desc: 'sessizlikte dinginlik arayan', matchText: 'aynı sessizlikte derin bir sığınak bulabilme' },
            B: { name: 'Sıcak Sığınak', desc: 'güven veren bir sığınağa sığınan', matchText: 'fırtınada birbirinize güvenli liman olabilme' },
            C: { name: 'Felsefi Mimar', desc: 'mantık ve derinlikle çözmeyi seçen', matchText: 'zihnin derin labirentlerinde ortak akılla ilerleme' },
            D: { name: 'Kozmik Gezgin', desc: 'gecenin ve sonsuzluğun izini süren', matchText: 'sınır tanımayan bir özgürlükle aynı göğe bakabilme' }
        },
        heart: {
            A: { name: 'Sessiz Şifacı', desc: 'kelimesiz sarılıp iyileştiren şefkatli', matchText: 'yargısız ve şefkatli bir kabulleniş' },
            B: { name: 'Fener Taşıyıcısı', desc: 'karanlıkta içindeki ışığı hatırlatan', matchText: 'biri düştüğünde diğerinin feneri yakması' },
            C: { name: 'Sadık Muhafız', desc: 'dokunulmaz ve güvenli alan açan koruyucu', matchText: 'sarsılmaz bir sadakat ve koruyucu güven' },
            D: { name: 'Bilge Ayna', desc: 'korkuların ardındaki gerçeği gösteren bilge', matchText: 'birbirinizin ruhuna dürüst bir ayna tutabilme' }
        },
        element: {
            A: { name: 'Gece Yağmuru', desc: 'toprak kokusu ve sakin yağmur' },
            B: { name: 'Kozmik Gökyüzü', desc: 'yıldızlar ve alacakaranlık' },
            C: { name: 'Fener Alevi', desc: 'karanlıkta sıcak bir mum ateşi' },
            D: { name: 'Deniz & Rüzgar', desc: 'engin okyanus ve dağ rüzgarı' }
        }
    },

    paletteTiers: {
        tier1: {
            title: 'Kozmik Ruh İkizi 🌌',
            colors: 'Ametist Moru & Gece Mavisi',
            subtitle: 'Kozmik Rezonans & Manyetik Senkron'
        },
        tier2: {
            title: 'Harmonik Tamamlanma 💫',
            colors: 'Zümrüt Yeşili & Altın Işık',
            subtitle: 'Fener Taşıyıcısı & Sessiz Liman'
        },
        tier3: {
            title: 'Dengeli Kalp Bağı 💖',
            colors: 'Gül Kurusu & Saf Gümüş',
            subtitle: 'Güvenli Alan & Koruyucu Işık'
        },
        tier4: {
            title: 'Zıt Kutuplar Frekansı ⚡',
            colors: 'Kutup Işığı & Lavanta Sisi',
            subtitle: 'Keşif Ahengi & Yeni Pencereler'
        }
    },

    storyCanvas: {
        badge: '✦  AURA & RUH İKİZİ REZONANSI  ✦',
        scoreLabel: 'FREKANS UYUMU',
        dimMental: '🧠 Zihinsel Uyum (Dalga Boyu)',
        dimEmotional: '💖 Duygusal Rezonans (Şefkat & Empati)',
        dimSpiritual: '🌌 Ruhani Frekans (Telepatik Çekim)',
        dimShadow: '🔮 Gölge Benlik Rezonansı',
        dimTelepathy: '✨ Telepatik Sezgi (Kelimesiz Anlaşma)',
        watermarkSub: 'RUH İKİZİ REZONANSI',
        brandTitle: 'HİS  •  KARANLIKTA YANAN FENER',
        storeNotice: 'App Store & Google Play  •  hisvera.com',
        tagline: 'Sen de kendi frekans testini oluştur ve ruh ikizini keşfet ✨'
    },

    questions: [
        // 1
        {
            dimensionKey: 'mental',
            dimension: 'Zihinsel Frekans',
            title: 'Fırtınalı ve karmaşık bir günde, zihnin dinginliğe kavuşmak için en çok nereye sığınır?',
            options: [
                { key: 'A', badge: 'İçsel Sessizlik', text: 'Karanlık bir odada sadece nefesime ve derin sessizliğe çekilirim.', arch: 'İçsel Gözlemci', mental: 96, emotional: 84, spiritual: 92, shadow: 88, telepathy: 85 },
                { key: 'B', badge: 'Mistik Şiir', text: 'Düşüncelerimi kağıda, kelimelere veya bir melodiye dökerim.', arch: 'Mistik Şair', mental: 88, emotional: 96, spiritual: 90, shadow: 86, telepathy: 92 },
                { key: 'C', badge: 'Gece Yoldaşı', text: 'Gece yürüyüşüne çıkar, şehrin fenerlerine ve gökyüzüne bakarım.', arch: 'Fener Taşıyıcısı', mental: 84, emotional: 90, spiritual: 96, shadow: 92, telepathy: 90 },
                { key: 'D', badge: 'Felsefi Mimar', text: 'Her şeyi rasyonel parçalara ayırır, mantıkla çözmeye odaklanırım.', arch: 'Felsefi Mimar', mental: 98, emotional: 78, spiritual: 82, shadow: 80, telepathy: 78 }
            ]
        },
        // 2
        {
            dimensionKey: 'mental',
            dimension: 'Zihinsel Frekans',
            title: 'Zihninin labirentlerinde kaybolduğunda, seni oradan çekip çıkaracak en büyük güç nedir?',
            options: [
                { key: 'A', badge: 'Sıcak Sığınak', text: 'Güvendiğim bir sesin "Buradayım, yanındayım" fısıltısı.', arch: 'Sessiz Şifacı', mental: 90, emotional: 98, spiritual: 94, shadow: 90, telepathy: 92 },
                { key: 'B', badge: 'Kendi Işığı', text: 'Tek başıma çözebileceğime olan o kadim inat ve sessiz irade.', arch: 'Yalnız Gezgin', mental: 96, emotional: 82, spiritual: 88, shadow: 84, telepathy: 80 },
                { key: 'C', badge: 'Doğa Rezonansı', text: 'Yağmurun cama vuran ritmi ve zamanın aktığını hatırlamak.', arch: 'Yağmur Bekçisi', mental: 86, emotional: 92, spiritual: 96, shadow: 90, telepathy: 94 },
                { key: 'D', badge: 'Empatik Zihin', text: 'Beni yargılamadan dinleyen derin, felsefi bir bakış.', arch: 'Felsefi Yoldaş', mental: 95, emotional: 93, spiritual: 90, shadow: 88, telepathy: 91 }
            ]
        },
        // 3
        {
            dimensionKey: 'emotional',
            dimension: 'Duygusal Rezonans',
            title: 'Değer verdiğin birinin kalbinin kırıldığını hissettiğinde ilk içsel tepkin ne olur?',
            options: [
                { key: 'A', badge: 'Sessiz Şifacı', text: 'Hiç konuşmadan yanında durur, varlığımla sessizce sararım.', arch: 'Sessiz Şifacı', mental: 86, emotional: 99, spiritual: 95, shadow: 91, telepathy: 96 },
                { key: 'B', badge: 'Empat Ruhdaş', text: 'Ruhunun derinliğini anlamak için doğru kelimeleri ve hisleri ararım.', arch: 'Empat Ruhdaş', mental: 93, emotional: 95, spiritual: 89, shadow: 85, telepathy: 91 },
                { key: 'C', badge: 'Koruyucu Kalkan', text: 'Hemen koruma kalkanı oluşturur, ona güvenli dokunulmaz bir alan açarım.', arch: 'Koruyucu Işık', mental: 89, emotional: 94, spiritual: 87, shadow: 89, telepathy: 86 },
                { key: 'D', badge: 'Saygılı Bilge', text: 'Yalnız kalma ihtiyacına saygı duyar, uzaktan sakin bir fener yakarım.', arch: 'Saygılı Bilge', mental: 95, emotional: 87, spiritual: 93, shadow: 90, telepathy: 88 }
            ]
        },
        // 4
        {
            dimensionKey: 'emotional',
            dimension: 'Duygusal Rezonans',
            title: 'Kendi kalbin kırıldığında o kırıkları nasıl onarırsın?',
            options: [
                { key: 'A', badge: 'Gizli Sabır', text: 'Zamanın akışına bırakır, kimseye hissettirmeden içimde demlerim.', arch: 'Gölge Saklayıcısı', mental: 91, emotional: 92, spiritual: 94, shadow: 96, telepathy: 87 },
                { key: 'B', badge: 'Telepatik Şifa', text: 'Sadece ruh ikizimin gözlerine bakarak kelimesizce şifalanırım.', arch: 'Kozmik Empat', mental: 88, emotional: 99, spiritual: 96, shadow: 92, telepathy: 98 },
                { key: 'C', badge: 'Kintsugi Ruhu', text: 'Kırıkları sanatla, şiirle veya gecenin hüznüyle altın tozuyla birleştiririm.', arch: 'Mistik Şair', mental: 94, emotional: 96, spiritual: 92, shadow: 90, telepathy: 90 },
                { key: 'D', badge: 'Elementel Barış', text: 'Sessiz bir denizin veya dağın karşısına geçip rüzgarla konuşurum.', arch: 'Ay Rezonansı', mental: 89, emotional: 90, spiritual: 98, shadow: 93, telepathy: 92 }
            ]
        },
        // 5
        {
            dimensionKey: 'telepathy',
            dimension: 'Sosyal Çekim & Telepati',
            title: 'Seni bir insana çeken en güçlü, görünmez "çekim frekansı" nedir?',
            options: [
                { key: 'A', badge: 'Mistik Telepat', text: 'Göz göze geldiğimizde kelimelere ihtiyaç kalmayan o gizemli sessizlik.', arch: 'Mistik Telepat', mental: 87, emotional: 97, spiritual: 99, shadow: 90, telepathy: 99 },
                { key: 'B', badge: 'Zihinsel Ahenk', text: 'Sabaha kadar süren, hayatın sırlarını sorguladığımız derin sohbetler.', arch: 'Zihinsel Ruhdaş', mental: 99, emotional: 90, spiritual: 90, shadow: 84, telepathy: 89 },
                { key: 'C', badge: 'Saf Rezonans', text: 'Yanında çocuk gibi hafif ve tamamen maskesiz kalabilme huzuru.', arch: 'Saf Rezonans', mental: 89, emotional: 98, spiritual: 94, shadow: 88, telepathy: 93 },
                { key: 'D', badge: 'Gölge Cesareti', text: 'Ruhundaki karanlıkları ve yaraları gizlemeden gösteren cesur dürüstlük.', arch: 'Gölge Arayıcısı', mental: 94, emotional: 96, spiritual: 92, shadow: 97, telepathy: 94 }
            ]
        },
        // 6
        {
            dimensionKey: 'telepathy',
            dimension: 'Sosyal Çekim & Telepati',
            title: 'Hiç birinin varlığını, o yanında yokken bile kalbinin tam ortasında hissettin mi?',
            options: [
                { key: 'A', badge: 'Kozmik Telepati', text: 'Evet; mesafelerin bir yanılsama olduğunu fısıldayan güçlü bir bağ hissederim.', arch: 'Mistik Telepat', mental: 88, emotional: 96, spiritual: 99, shadow: 89, telepathy: 99 },
                { key: 'B', badge: 'Sezgisel Dalga', text: 'Aniden gelen bir rüzgar veya tanıdık bir koku gibi beni birdenbire sarar.', arch: 'Sezgisel Gezgin', mental: 85, emotional: 94, spiritual: 95, shadow: 86, telepathy: 96 },
                { key: 'C', badge: 'Gece Rezonansı', text: 'Geceleri uyumadan hemen önce gelen o tarif edilemez sıcak dalga.', arch: 'Gece Bekçisi', mental: 91, emotional: 97, spiritual: 94, shadow: 93, telepathy: 95 },
                { key: 'D', badge: 'Dingin Sezgi', text: 'Sadece zihnim tamamen durulduğunda ve dünya sustuğunda yakalarım.', arch: 'İçsel Gözlemci', mental: 96, emotional: 89, spiritual: 92, shadow: 87, telepathy: 90 }
            ]
        },
        // 7
        {
            dimensionKey: 'spiritual',
            dimension: 'Ruhun Doğal Elementi',
            title: 'Hangi doğal atmosfer ruhunun titreşimini en yüksek seviyeye çıkarır?',
            options: [
                { key: 'A', badge: 'Toprak & Yağmur', text: 'Gece yarısı yağmurun cama vurduğu toprak kokulu anlar.', arch: 'Gece Yağmuru', mental: 90, emotional: 95, spiritual: 96, shadow: 92, telepathy: 93 },
                { key: 'B', badge: 'Hava & Boşluk', text: 'Dağ başında esen serin bir rüzgar ve sonsuz gökyüzü.', arch: 'Gök Gezgini', mental: 96, emotional: 88, spiritual: 92, shadow: 85, telepathy: 89 },
                { key: 'C', badge: 'Ateş & Fener', text: 'Karanlıkta titreyen bir mum alevi ve şömine sıcaklığı.', arch: 'Fener Alevi', mental: 88, emotional: 97, spiritual: 93, shadow: 89, telepathy: 91 },
                { key: 'D', badge: 'Ay & Okyanus', text: 'Dolunayın aydınlattığı sakin, dalgasız bir okyanus kıyısı.', arch: 'Ay Rezonansı', mental: 92, emotional: 96, spiritual: 98, shadow: 94, telepathy: 97 }
            ]
        },
        // 8
        {
            dimensionKey: 'spiritual',
            dimension: 'Ruhun Doğal Elementi',
            title: 'Eğer bir element seni koruyan bir kalkan olsaydı, hangisini seçerdin?',
            options: [
                { key: 'A', badge: 'Derin Okyanus', text: 'Sessiz okyanus derinlikleri; dış dünyanın tüm gürültüsünü yutan sükunet.', arch: 'Okyanus Sığınağı', mental: 92, emotional: 95, spiritual: 97, shadow: 93, telepathy: 95 },
                { key: 'B', badge: 'Gök Sisi', text: 'Gökyüzünde süzülen sis; kimsenin dokunamadığı gizemli bir örtü.', arch: 'Sisli Yolcu', mental: 95, emotional: 90, spiritual: 94, shadow: 95, telepathy: 92 },
                { key: 'C', badge: 'Kadim Kök', text: 'Asırlık bir çınarın kökleri; sarsılmaz bir sadakat ve güven.', arch: 'Sadık Muhafız', mental: 94, emotional: 96, spiritual: 91, shadow: 86, telepathy: 88 },
                { key: 'D', badge: 'Kutup Işığı', text: 'Geceyi aydınlatan kutup ışıkları; sadece ruha dokunan manyetik enerji.', arch: 'Kozmik Işık', mental: 91, emotional: 94, spiritual: 98, shadow: 90, telepathy: 98 }
            ]
        },
        // 9
        {
            dimensionKey: 'shadow',
            dimension: 'Gölge Taraf & Kırılganlık',
            title: 'Kalbinin en derin yerinde seni en çok hırpalayan içsel çatışma hangisidir?',
            options: [
                { key: 'A', badge: 'Derin Yalnızlık', text: 'Çok derin hissetmek ama kimseye tam olarak anlaşılamamak.', arch: 'Derin Yalnızlık', mental: 92, emotional: 98, spiritual: 95, shadow: 98, telepathy: 93 },
                { key: 'B', badge: 'Fedakar Fener', text: 'Sürekli başkalarına fener olup kendi iç ışığımı tüketmek.', arch: 'Fedakar Fener', mental: 89, emotional: 97, spiritual: 93, shadow: 95, telepathy: 91 },
                { key: 'C', badge: 'Kırılgan Zırh', text: 'Güvenip kalbimi sonuna kadar açtığımda savunmasız kalmaktan çekinmek.', arch: 'Kırılgan Zırh', mental: 94, emotional: 92, spiritual: 88, shadow: 96, telepathy: 89 },
                { key: 'D', badge: 'Zamansal Melankoli', text: 'Zamanın hızla akıp gitmesi ve ruhumu kaçırma kaygısı.', arch: 'Zamansal Melankoli', mental: 95, emotional: 90, spiritual: 91, shadow: 91, telepathy: 87 }
            ]
        },
        // 10
        {
            dimensionKey: 'shadow',
            dimension: 'Gölge Taraf & Kırılganlık',
            title: 'Dış dünyaya göstermekten en çok çekindiğin gölge parçan nedir?',
            options: [
                { key: 'A', badge: 'Gizli Yorgunluk', text: 'Bazen çok güçlü görünürken aslında bir fısıltıyla yıkılabilecek kadar yorgun olmam.', arch: 'Yorgun Savaşçı', mental: 91, emotional: 98, spiritual: 93, shadow: 99, telepathy: 92 },
                { key: 'B', badge: 'Bağlanma Kaygısı', text: 'Birine fazlasıyla bağlanıp kendi eksenimi ve özgürlüğümü kaybetme korkum.', arch: 'Özgür Ruh', mental: 96, emotional: 91, spiritual: 89, shadow: 95, telepathy: 88 },
                { key: 'C', badge: 'Mükemmeliyet Zırhı', text: 'Kusursuz olmaya çalışırken içimdeki o kırılgan çocuğu ihmal etmem.', arch: 'Sessiz Çocuk', mental: 94, emotional: 93, spiritual: 90, shadow: 94, telepathy: 86 },
                { key: 'D', badge: 'Felsefi Ağırlık', text: 'Fazla felsefi düşünüp hayatın hafif ve basit neşesini kaçırmam.', arch: 'Felsefi Mimar', mental: 97, emotional: 88, spiritual: 92, shadow: 92, telepathy: 89 }
            ]
        },
        // 11
        {
            dimensionKey: 'emotional',
            dimension: 'Aşk & Bağın Kutsal Dili',
            title: 'Gerçek bir ruh ikizinde aradığın en vazgeçilmez his hangisidir?',
            options: [
                { key: 'A', badge: 'Sessiz Ahenk', text: 'Birbirimizin suskunluğunu anlayabilmek ve o suskunlukta dinlenebilmek.', arch: 'Sessiz Ahenk', mental: 91, emotional: 99, spiritual: 97, shadow: 92, telepathy: 98 },
                { key: 'B', badge: 'Kozmik Yoldaş', text: 'Birlikte büyümek, birbirimizin en yüksek potansiyeline ışık tutmak.', arch: 'Kozmik Yoldaş', mental: 98, emotional: 93, spiritual: 92, shadow: 86, telepathy: 91 },
                { key: 'C', badge: 'Sonsuz Kale', text: 'Dünyanın tüm kaosuna karşı birlikte inşa edilmiş dokunulmaz bir sığınak.', arch: 'Sonsuz Kale', mental: 93, emotional: 97, spiritual: 94, shadow: 90, telepathy: 92 },
                { key: 'D', badge: 'Kutsal Şifa', text: 'Birbirimizin en gizli yaralarına korkusuzca ve şefkatle dokunabilmek.', arch: 'Kutsal Şifa', mental: 90, emotional: 99, spiritual: 96, shadow: 97, telepathy: 96 }
            ]
        },
        // 12
        {
            dimensionKey: 'emotional',
            dimension: 'Aşk & Bağın Kutsal Dili',
            title: 'İki insan arasındaki güvenin nihai kanıtı sence nedir?',
            options: [
                { key: 'A', badge: 'Mutlak Dürüstlük', text: 'Yanındayken zihnimdeki hiçbir kelimeyi filtreleme ihtiyacı duymamak.', arch: 'Saf Dürüstlük', mental: 97, emotional: 96, spiritual: 93, shadow: 92, telepathy: 93 },
                { key: 'B', badge: 'Zamanı Aşan Bağ', text: 'Aradan aylar geçse bile kaldığınız yerden aynı sıcaklıkla devam edebilmek.', arch: 'Zamansız Gezgin', mental: 94, emotional: 97, spiritual: 96, shadow: 88, telepathy: 95 },
                { key: 'C', badge: 'Kör Güven', text: 'Karanlık bir anda arkanı dönüp düşsen bile seni tutacağına emin olmak.', arch: 'Sadık Muhafız', mental: 91, emotional: 99, spiritual: 94, shadow: 91, telepathy: 92 },
                { key: 'D', badge: 'Kalp Radarı', text: 'Birbirinin sessiz çığlıklarını sadece bir bakıştan duyabilmek.', arch: 'Mistik Telepat', mental: 92, emotional: 98, spiritual: 97, shadow: 95, telepathy: 99 }
            ]
        },
        // 13
        {
            dimensionKey: 'spiritual',
            dimension: 'Zamansal Mistik Saat',
            title: 'Ruhunun evrenle en çok rezonansa girdiği o sihirli zaman dilimi?',
            options: [
                { key: 'A', badge: 'Gece Kuşu', text: '00:00 - 04:00 (Karanlık Gece Geçidi ve yıldızların fısıltısı).', arch: 'Gece Kuşu', mental: 93, emotional: 96, spiritual: 99, shadow: 96, telepathy: 97 },
                { key: 'B', badge: 'Alacakaranlık', text: 'Alacakaranlık (Günün bittiği, mor ve kızıl hüznün çöktüğü saat).', arch: 'Alacakaranlık Aurası', mental: 91, emotional: 97, spiritual: 94, shadow: 93, telepathy: 94 },
                { key: 'C', badge: 'Şafak Sisi', text: 'Sabahın ilk sisli sessizliği (Kimse uyanmadan önceki taze an).', arch: 'Şafak Ruhu', mental: 96, emotional: 90, spiritual: 93, shadow: 87, telepathy: 90 },
                { key: 'D', badge: 'Zamansız An', text: 'Zamansız anlar (Saat kaç olursa olsun kalbimin titrediği o an).', arch: 'Zamansız Gezgin', mental: 92, emotional: 98, spiritual: 97, shadow: 91, telepathy: 96 }
            ]
        },
        // 14
        {
            dimensionKey: 'spiritual',
            dimension: 'Zamansal Mistik Saat',
            title: 'Gece yarısı herkes uyurken dünya durmuş gibi hissettiğinde ne yaparsın?',
            options: [
                { key: 'A', badge: 'Kozmik Merak', text: 'Gökyüzüne bakar, bu devasa evrende aynı yalnızlığı paylaşan ruhları düşünürüm.', arch: 'Yıldız Seyyivı', mental: 95, emotional: 94, spiritual: 98, shadow: 92, telepathy: 96 },
                { key: 'B', badge: 'Melankolik Melodi', text: 'Bir şarkının en can alıcı yerine sarılır, hatıralarla demlenirim.', arch: 'Mistik Şair', mental: 89, emotional: 98, spiritual: 94, shadow: 95, telepathy: 93 },
                { key: 'C', badge: 'Gece Günlüğü', text: 'Defterime kimsenin asla okumayacağı gizli fısıltılar bırakırım.', arch: 'Gizli Kalem', mental: 94, emotional: 95, spiritual: 93, shadow: 96, telepathy: 91 },
                { key: 'D', badge: 'Saf Meditasyon', text: 'Sessizliğin kendisini dinler, içsel dengemi ve frekansımı yeniden kurarım.', arch: 'İçsel Gözlemci', mental: 97, emotional: 89, spiritual: 96, shadow: 88, telepathy: 92 }
            ]
        },
        // 15
        {
            dimensionKey: 'telepathy',
            dimension: 'Gizli Fısıltı & İtiraf',
            title: 'Bu testi sana gönderen kişiye şu an tek bir fısıltı bırakabilseydin ne olurdu?',
            options: [
                { key: 'A', badge: 'Sessiz Minnet', text: '"Bazen kelimelerle anlatamasam da varlığın ruhumu dinlendiriyor."', arch: 'Sessiz Minnet', mental: 89, emotional: 99, spiritual: 96, shadow: 90, telepathy: 96 },
                { key: 'B', badge: 'Manyetik İtiraf', text: '"Aramızda henüz adını tam koyamadığımız derin bir manyetik bağ var."', arch: 'Manyetik Rezonans', mental: 94, emotional: 97, spiritual: 98, shadow: 93, telepathy: 99 },
                { key: 'C', badge: 'Sadık Işık', text: '"Gecenin karanlığında ne zaman yorulsan, sana fener olmaya hazırım."', arch: 'Sadık Işık', mental: 91, emotional: 98, spiritual: 95, shadow: 91, telepathy: 93 },
                { key: 'D', badge: 'Saf İçtenlik', text: '"Seninle konuşurken maskelerimi indirmekten hiç çekinmiyorum."', arch: 'Saf Dürüstlük', mental: 96, emotional: 96, spiritual: 93, shadow: 94, telepathy: 94 }
            ]
        },
        // 16
        {
            dimensionKey: 'telepathy',
            dimension: 'Gizli Fısıltı & İtiraf',
            title: 'Bu kişiyle aranızdaki frekansı tek bir metaforla anlatsan hangisi olurdu?',
            options: [
                { key: 'A', badge: 'Çifte Fener', text: 'Sisli bir denizde birbirini bulan iki deniz fenerinin kesişen ışığı.', arch: 'Fener Taşıyıcısı', mental: 92, emotional: 98, spiritual: 97, shadow: 92, telepathy: 97 },
                { key: 'B', badge: 'Takımyıldızı', text: 'Aynı karanlık gökyüzünde parlayan ama birbirini tamamlayan iki yıldız.', arch: 'Kozmik Rezonans', mental: 95, emotional: 96, spiritual: 98, shadow: 89, telepathy: 98 },
                { key: 'C', badge: 'Kadim Sayfalar', text: 'Eski bir sahafta yan yana duran iki bilge ve gizemli ciltli kitap.', arch: 'Felsefi Mimar', mental: 98, emotional: 92, spiritual: 93, shadow: 87, telepathy: 90 },
                { key: 'D', badge: 'Toprak Kokusu', text: 'Yaz yağmurundan sonra havaya yayılan o taze, huzurlu toprak kokusu.', arch: 'Toprak Huzuru', mental: 90, emotional: 97, spiritual: 96, shadow: 91, telepathy: 94 }
            ]
        },
        // 17
        {
            dimensionKey: 'mental',
            dimension: 'Varoluşsal Sessizlik',
            title: 'İki insan aynı odada hiç konuşmadan saatlerce otursa bu sende ne uyandırır?',
            options: [
                { key: 'A', badge: 'Ruhani Birlik', text: 'Kelimelerin tükendiği yerde ruhların konuştuğu en saf yakınlık.', arch: 'Sessiz Ahenk', mental: 90, emotional: 98, spiritual: 99, shadow: 92, telepathy: 99 },
                { key: 'B', badge: 'Kutsal Sükunet', text: 'Güvenin zirvesi; suskunluğu doldurmak için yapmacık laflara ihtiyaç duymamak.', arch: 'Saf Rezonans', mental: 97, emotional: 96, spiritual: 94, shadow: 88, telepathy: 93 },
                { key: 'C', badge: 'Şifa Odası', text: 'Eğer frekans tutuyorsa dünyanın en huzurlu ve onarıcı terapisi.', arch: 'Sessiz Şifacı', mental: 92, emotional: 97, spiritual: 96, shadow: 90, telepathy: 95 },
                { key: 'D', badge: 'Huzur Limanı', text: 'Birbirinin nefesinde kendi iç fırtınalarını dindirebilme ustalığı.', arch: 'Huzur Bekçisi', mental: 94, emotional: 95, spiritual: 95, shadow: 91, telepathy: 94 }
            ]
        },
        // 18
        {
            dimensionKey: 'mental',
            dimension: 'Varoluşsal Sessizlik',
            title: 'Bazen hayatın tüm telaşı durduğunda, içinde yankılanan o derin sessizlik sana ne söyler?',
            options: [
                { key: 'A', badge: 'İçsel Pusula', text: '"Yavaşla; gideceğin yer zaten senin içinde, dışarıda arama."', arch: 'İçsel Gözlemci', mental: 96, emotional: 94, spiritual: 97, shadow: 89, telepathy: 92 },
                { key: 'B', badge: 'Yaratıcı Kıvılcım', text: '"Bu boşluk bir son değil; yeni bir şiirin veya düşüncenin doğum sancısı."', arch: 'Mistik Şair', mental: 98, emotional: 95, spiritual: 93, shadow: 94, telepathy: 95 },
                { key: 'C', badge: 'Evrensel Kucaklama', text: '"Yalnız değilsin; varoluşun kendisi seni bu sessizlikte sımsıkı sarıyor."', arch: 'Sessiz Şifacı', mental: 90, emotional: 99, spiritual: 98, shadow: 91, telepathy: 97 },
                { key: 'D', badge: 'Fırtına Öncesi', text: '"Ruhun fırtınalara karşı güç topluyor; bekle ve ışığına güven."', arch: 'Sadık Muhafız', mental: 93, emotional: 96, spiritual: 95, shadow: 93, telepathy: 93 }
            ]
        },
        // 19
        {
            dimensionKey: 'mental',
            dimension: 'Edebi & Sanatsal Melankoli',
            title: 'Eğer hayatın bir roman olsaydı, senin sayfan hangi tonla yazılırdı?',
            options: [
                { key: 'A', badge: 'Gece Şiiri', text: 'Geceye yazılmış, her satırında gizli bir hüzün ve asalet barındıran şiir.', arch: 'Mistik Şair', mental: 93, emotional: 98, spiritual: 96, shadow: 96, telepathy: 94 },
                { key: 'B', badge: 'Seyyahın İzi', text: 'Fırtınalardan geçip bilgeliğe ulaşmış bir seyyahın içsel günlüğü.', arch: 'Yalnız Gezgin', mental: 98, emotional: 91, spiritual: 93, shadow: 89, telepathy: 90 },
                { key: 'C', badge: 'Sade Derinlik', text: 'Sade, gösterişsiz ama derinine indikçe büyüleyen minimalist felsefe.', arch: 'Felsefi Mimar', mental: 96, emotional: 93, spiritual: 92, shadow: 86, telepathy: 89 },
                { key: 'D', badge: 'Anka Yükselişi', text: 'Yaralarını gururla taşıyan bir ruhun küllerinden doğuş manifestosu.', arch: 'Kutsal Şifa', mental: 94, emotional: 97, spiritual: 95, shadow: 97, telepathy: 93 }
            ]
        },
        // 20
        {
            dimensionKey: 'emotional',
            dimension: 'Edebi & Sanatsal Melankoli',
            title: 'Bir yağmur damlası cama vururken hissettiğin o ince sızı sence nereden gelir?',
            options: [
                { key: 'A', badge: 'Geçmişin Yankısı', text: '"Unutulduğunu sandığım eski bir hatıranın kalbime dokunan fısıltısından."', arch: 'Mistik Şair', mental: 91, emotional: 99, spiritual: 95, shadow: 96, telepathy: 94 },
                { key: 'B', badge: 'Evrenin Gözyaşı', text: '"Dünyanın söylenmemiş tüm kederlerini kendi içimde hissetmemden."', arch: 'Kutsal Şifa', mental: 94, emotional: 98, spiritual: 97, shadow: 95, telepathy: 98 },
                { key: 'C', badge: 'Yenilenme İksiri', text: '"Yıkanan yeryüzüyle birlikte ruhumun da arındığını bilmenin huzurundan."', arch: 'Şafak Ruhu', mental: 97, emotional: 92, spiritual: 94, shadow: 88, telepathy: 90 },
                { key: 'D', badge: 'Gizli Özlem', text: '"Henüz karşılaşmadığım ama varlığını bildiğim o ruha duyulan derin özlemden."', arch: 'Kozmik Rezonans', mental: 92, emotional: 97, spiritual: 98, shadow: 93, telepathy: 99 }
            ]
        },
        // 21
        {
            dimensionKey: 'spiritual',
            dimension: 'Kader & Mistik Tesadüf',
            title: 'İki ruhun bu hayatta tam da bu zamanda karşılaşması sence ne anlama gelir?',
            options: [
                { key: 'A', badge: 'Kader Rezonansı', text: 'Tesadüf diye bir şey yoktur; frekanslar çekim yasasıyla birbirini bulur.', arch: 'Kozmik Rezonans', mental: 92, emotional: 97, spiritual: 99, shadow: 91, telepathy: 99 },
                { key: 'B', badge: 'Kozmik Görev', text: 'Birbirimize öğreteceğimiz ve birlikte şifalayacağımız ortak bir yol vardır.', arch: 'Kozmik Yoldaş', mental: 97, emotional: 95, spiritual: 94, shadow: 93, telepathy: 94 },
                { key: 'C', badge: 'Kutsal Hediye', text: 'Evrenin karmaşasında bize hediye edilmiş nadir ve kıymetli bir sığınak.', arch: 'Sonsuz Kale', mental: 91, emotional: 99, spiritual: 95, shadow: 89, telepathy: 93 },
                { key: 'D', badge: 'Kadim Tanışıklık', text: 'Zamanın ve mekanın ötesinde zaten var olan bir bağın bu dünyadaki yankısı.', arch: 'Mistik Telepat', mental: 94, emotional: 96, spiritual: 98, shadow: 94, telepathy: 98 }
            ]
        },
        // 22
        {
            dimensionKey: 'spiritual',
            dimension: 'Kader & Mistik Tesadüf',
            title: 'Birinin gözlerine ilk kez baktığında "Ben bu insanı sanki bin yıldır tanıyorum" hissini yaşadın mı?',
            options: [
                { key: 'A', badge: 'Kadim Hatırlama', text: '"Evet; gözler kelimelerin anlatamadığı bin yıllık ortak bir hafızayı fısıldar."', arch: 'Mistik Telepat', mental: 94, emotional: 98, spiritual: 99, shadow: 92, telepathy: 99 },
                { key: 'B', badge: 'Manyetik Kilit', text: '"Nefesim kesilir ve tüm mantığım o an devre dışı kalır; kader budur."', arch: 'Manyetik Rezonans', mental: 90, emotional: 99, spiritual: 97, shadow: 94, telepathy: 97 },
                { key: 'C', badge: 'Sezgisel Güven', text: '"Hemen bir bağ kurmam ama ruhum sessizce \'doğru yerdesin\' sinyali verir."', arch: 'Saf Rezonans', mental: 98, emotional: 93, spiritual: 94, shadow: 87, telepathy: 93 },
                { key: 'D', badge: 'Zamansız Frekans', text: '"Zaman donar; sanki evrendeki tüm gezegenler tek bir hatta dizilmiş gibi."', arch: 'Kozmik Yoldaş', mental: 95, emotional: 96, spiritual: 98, shadow: 91, telepathy: 98 }
            ]
        },
        // 23
        {
            dimensionKey: 'shadow',
            dimension: 'Karanlıkta Fener Yakmak',
            title: 'Bu dünyada en çok korumak istediğin kutsal değer hangisidir?',
            options: [
                { key: 'A', badge: 'Saf Samimiyet', text: 'İnsanların birbirinin gözlerinin içine maskesiz bakabildiği samimiyet.', arch: 'Saf Dürüstlük', mental: 95, emotional: 99, spiritual: 96, shadow: 94, telepathy: 97 },
                { key: 'B', badge: 'Kaya Sadakati', text: 'Herkes yüz çevirse bile birinin yanında dimdik durabilen o sadakat.', arch: 'Sadık Muhafız', mental: 93, emotional: 98, spiritual: 94, shadow: 91, telepathy: 92 },
                { key: 'C', badge: 'Cesur Kalp', text: 'Kırılsa da sevmeye, hissetmeye ve umut etmeye devam edebilme cesareti.', arch: 'Kutsal Şifa', mental: 91, emotional: 99, spiritual: 97, shadow: 97, telepathy: 95 },
                { key: 'D', badge: 'Aydınlanmış Ruh', text: 'Kendi karanlığımla barışıp başkalarına fener olabilme olgunluğu.', arch: 'Fener Taşıyıcısı', mental: 97, emotional: 94, spiritual: 96, shadow: 98, telepathy: 93 }
            ]
        },
        // 24
        {
            dimensionKey: 'shadow',
            dimension: 'Karanlıkta Fener Yakmak',
            title: 'En güvendiğin kişi zifiri bir karanlığa gömülse, ona nasıl ışık olursun?',
            options: [
                { key: 'A', badge: 'Birlikte Susmak', text: '"Tavsiye vermem; karanlığında yanına oturur, elini tutar ve susarım."', arch: 'Sessiz Şifacı', mental: 92, emotional: 99, spiritual: 97, shadow: 96, telepathy: 98 },
                { key: 'B', badge: 'Sarsılmaz Kalkan', text: '"Tüm dünyayı karşısına alsa bile sırtımı sırtına yaslar, kalkan olurum."', arch: 'Sadık Muhafız', mental: 95, emotional: 97, spiritual: 93, shadow: 92, telepathy: 93 },
                { key: 'C', badge: 'Gizli Fener', text: '"Ona kim olduğunu ve ne kadar güçlü parladığını hatırlatan bir fener yakarım."', arch: 'Fener Taşıyıcısı', mental: 97, emotional: 96, spiritual: 98, shadow: 90, telepathy: 96 },
                { key: 'D', badge: 'Aynanın Gerçeği', text: '"Korkularıyla yüzleşmesi için şefkatli ama dürüst bir ayna tutarım."', arch: 'Felsefi Mimar', mental: 99, emotional: 92, spiritual: 94, shadow: 95, telepathy: 91 }
            ]
        }
    ],

    narratives: {
        // Tier 1: Kozmik Ruh İkizi 🌌 (93% - 98%)
        tier1: {
            mystery: [
                (inviter, pName, aMental, bMental, score, matchText) => `${inviter} (${aMental}) ile ${pName} (${bMental}) arasındaki frekans, sıradan bir tanışmanın çok ötesinde. Zihinsel dalga boyunuz (%${score}), düşüncelerinizin aynı gizli patikalarda yürüdüğünü ve ${matchText} gücünüzü gösteriyor. Birbirinizin cümlelerini tamamlamaya gerek duymadan, aynı sessizlikte derin bir huzur bulabilen nadir iki ruha sahipsiniz.`,
                (inviter, pName, aMental, bMental, score) => `Evrenin labirentinde bazı ruhlar ilk karşılaşmada dahi yüzyıllardır tanışıyormuş gibi hissettirir. ${inviter} (${aMental}) ve ${pName} (${bMental}) arasındaki zihinsel ahenk (%${score}), kelimelerin tükendiği yerde bile zihninizin aynı kozmik patikada aktığını fısıldıyor. Bir bakışınız veya sessiz bir nefesiniz, sayfalarca sohbetin ötesinde bir berraklık yaratıyor.`,
                (inviter, pName, aMental, bMental, score) => `${inviter}'ın ${aMental} yapısı ile ${pName}'ın ${bMental} enerjisi, zihinsel boyutta (%${score}) kusursuz bir manyetik rezonans oluşturuyor. Fikirleriniz birbirini tartmak yerine anında kavrıyor; en karmaşık düğümleri bile birbirinize hissettirmeden çözebilecek telepatik bir ortak akla sahipsiniz.`
            ],
            balance: [
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Duygusal rezonansınız (%${emoScore}) ve Gölge Benlik uyumunuz (%${shadowScore}) ilişkinizin en güçlü kalkanı. ${inviter}'ın ${aHeartDesc} aurası ile senin kalbin öyle bir dengelenmiş ki, biriniz hayatın karmaşasında yorulduğunda diğerinin içindeki fener kendiliğinden uyanıyor. Saklanan kırılganlıkları yargılamadan kucaklayabilme ve Telepatik Sezgi (%${telScore}) ile kelimesiz anlaşabilme gücünüz büyüleyici.`
                    : `Duygusal rezonansınız (%${emoScore}) ilişkinizin en güçlü zırhı. ${inviter}'ın ${aHeartDesc} aurası ile birleştiğinde, biriniz hayatın karmaşasında yorulduğunda diğerinin içindeki fener kendiliğinden uyanıyor. Birbirinizin kırılganlıklarını yargılamadan kucaklayabilme ve gölge taraflarınızı şifalandırma potansiyeliniz son derece yüksek.`,
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Kalpleriniz arasındaki titreşim (%${emoScore}) ve Gölge Benlik uyumunuz (%${shadowScore}), birbirinizin en gizli yaralarını bile korkusuzca açabildiğiniz kutsal bir sığınak kurmuş. ${inviter}'ın ${aHeartDesc} titreşimi, karanlık gecelerde bir deniz feneri gibi yol gösteriyor. Telepati puanınız (%${telScore}) gösteriyor ki mesafeler kalbinizin frekansını asla zayıflatamaz.`
                    : `Kalpleriniz arasındaki duygusal rezonans (%${emoScore}), birbirinize güvenli bir liman sunduğunuzu müjdeliyor. ${inviter}'ın ${aHeartDesc} aurası, fırtınalı anlarda kalbinize şefkatli bir dokunuş gibi iniyor. Birinizin hüznünü diğeri sormadan seziyor ve aynı sessizlikte şifa buluyorsunuz.`,
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Duygusal rezonansınız (%${emoScore}) ve gölge dünyanızın uyumu (%${shadowScore}), ilişkide maskelere ihtiyaç bırakmayan en saf hali sunuyor. ${inviter}'ın ${aHeartDesc} doğası, her türlü kırılganlığı koşulsuz kucaklıyor. Telepatik bağınız (%${telScore}) sayesinde tek bir sessizlik anında bile birbirinizin iç dünyasını eksiksiz okuyabiliyorsunuz.`
                    : `Duygusal uyumunuz (%${emoScore}), aranızdaki bağın ne kadar naif ve sarsılmaz olduğunu gösteriyor. ${inviter}'ın ${aHeartDesc} karakteri, hayatın tüm yüklerini hafifleten bir denge unsuru. Birbirinizin kalbine dokunurken gösterdiğiniz o zarif özen, aranızdaki frekansı paha biçilmez kılıyor.`
            ],
            prophecy: [
                (elemName, spScore) => `Ruhani çekiminiz (%${spScore}) ve ${elemName} titreşimi gösteriyor ki aranızdaki bağ zamanla aşınacak türden değil. Birlikte karanlığa bir fener yaktığınızda dünyanın tüm ağırlığı hafifliyor. Birbirinize maskesiz olmaktan asla çekinmeyin; bu kozmik frekans evrende çok az insana nasip olur.`,
                (elemName, spScore) => `Aura alanlarınızın ${elemName} elementiyle kaynaşması (%${spScore}), bu bağın sadece bir tesadüf değil, kaderin kadim bir çağrısı olduğunu söylüyor. Birlikteyken zamanın akışı yavaşlıyor ve dünya susuyor. Birbirinizin özgürlüğüne kanat germeye devam ettikçe, bu rezonans bir ömür kılavuzunuz olacak.`,
                (elemName, spScore) => `Ruhani frekansınız (%${spScore}) ve gökyüzüyle kurduğunuz bağ, geleceğe uzanan fener yolunda birbirinizin eksilmeyen pusulası olacağınızı fısıldıyor. Dünyanın tüm karmaşası kapınızın dışında kalır; birbirinize karşı olduğunuz gibi, en çıplak ve duru halinizle kalın.`
            ]
        },

        // Tier 2: Harmonik Tamamlanma 💫 (83% - 92%)
        tier2: {
            mystery: [
                (inviter, pName, aMental, bMental, score) => `${inviter} (${aMental}) ile ${pName} (${bMental}) arasındaki zihinsel dalga boyu (%${score}), birbirinizin eksiklerini kusursuz tamamlayan harmonik bir akışa sahip. Düşüncelerinizin aynı gizli patikalarda yürüdüğü anlar çoğunlukta; fırtınalı günlerde birbirinize hem dinleyen bir kulak hem de sağlam bir sığınak oluyorsunuz.`,
                (inviter, pName, aMental, bMental, score) => `${inviter} (${aMental}) ve ${pName} (${bMental}) zihinleri, fener ve liman gibi birbirini dengeleyen bir akor oluşturuyor (%${score}). Biri büyük resmi çizerken diğeri en can alıcı ayrıntıyı yakalıyor. Birbirinizle sohbet ederken zamanın nasıl aktığını unutmanız tam da bu zihinsel tamamlanmadan kaynaklanıyor.`,
                (inviter, pName, aMental, bMental, score) => `Zihinsel rezonansınız (%${score}), birbirinize fikir üretirken ve hayatı sorgularken müthiş bir ilham verdiğinizi gösteriyor. ${inviter}'ın ${aMental} yapısı ile senin bakış açın, çatışmak yerine aynı nehirde birleşen iki kol gibi akıyor ve gizli patikaları birlikte aydınlatıyor.`
            ],
            balance: [
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Duygusal rezonansınız (%${emoScore}) ve Gölge Benlik uyumunuz (%${shadowScore}) ilişkinizin en güvenli limanı. ${inviter}'ın ${aHeartDesc} yaklaşımı ile senin hissiyatın birleştiğinde, biriniz yorulduğunda diğerinin içindeki fener kendiliğinden uyanıyor. Telepatik Sezgi (%${telScore}) ile birbirinizin modunu uzaktan dahi hissedebiliyorsunuz.`
                    : `Duygusal rezonansınız (%${emoScore}) ilişkinizin en güçlü kalkanı. ${inviter}'ın ${aHeartDesc} yaklaşımı, zor günlerde kalbinize güvenli bir alan açıyor. Birbirinizin kırılganlıklarını yargılamadan dinleyebilme olgunluğunuz, fırtınaları hızla dindiriyor.`,
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Kalplerinizin ritmi (%${emoScore}) ve gölge dünyanızdaki ahenk (%${shadowScore}), birbirinize duygusal olarak nefes alma alanı tanıyan çok sağlıklı bir bağ kuruyor. ${inviter}'ın ${aHeartDesc} dokunuşu, kalbindeki tereddütleri bir bir yatıştırıyor. Telepati frekansınız (%${telScore}) ise beklenmedik anlarda aynı duyguda buluşmanızı sağlıyor.`
                    : `Duygusal dengeniz (%${emoScore}), ilişkinizde hem yakınlık hem de saygılı bir alan olduğunu gösteriyor. ${inviter}'ın ${aHeartDesc} duruşu, en gergin anlarda bile ortama bir sükunet yayıyor. Birbirinizi anlamak için uzun açıklamalara gerek duymuyorsunuz.`,
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Duygusal şifalanma gücünüz (%${emoScore}) ve Gölge Benlik uyumunuz (%${shadowScore}), birbirinizin içindeki çocuğu korkusuzca ortaya çıkarıyor. ${inviter}'ın ${aHeartDesc} mizacı fırtınalarda kaleyi tutarken, Telepatik Sezginiz (%${telScore}) birbirinizin kırgınlıklarını henüz söze dökülmeden onarıyor.`
                    : `Duygusal çekiminiz (%${emoScore}), aranızdaki samimiyetin ne kadar doğal ve içten olduğunu ortaya koyuyor. ${inviter}'ın ${aHeartDesc} tarzı, zor anlarda en çok ihtiyaç duyduğunuz iç huzurunu size cömertçe sunuyor.`
            ],
            prophecy: [
                (elemName, spScore) => `Ruhani çekiminiz (%${spScore}) ve ${elemName} elementinin enerjisi, birlikte yol aldıkça derinleşen sağlam bir dostluğu müjdeliyor. Birlikte karanlığa bir fener yaktığınızda dünyanın tüm karmaşası kapının dışında kalıyor. Birbirinize maskesiz olmayı sürdürdükçe bu bağ bir ömür ışıldar.`,
                (elemName, spScore) => `${elemName} elementinin mistik esintisi (%${spScore}), aranızdaki bağın gelip geçici değil, kökleri derinlere uzanan bir hayat yolculuğu olduğunu simgeliyor. Birbirinizin sınırlarına saygı duyarak el ele yürüdüğünüzde, aşamayacağınız hiçbir engel kalmaz.`,
                (elemName, spScore) => `Ruhani frekansınız (%${spScore}), birbirinizin hayatına tam da doğru zamanda girdiğinizi fısıldıyor. Birbirinize karanlıkta yanan bir fener olmaktan ve kalbinizin gerçek renklerini göstermekten çekinmeyin; bu dostluk paylaştıkça çoğalan bir bereket taşır.`
            ]
        },

        // Tier 3: Dengeli Kalp Bağı 💖 (72% - 82%)
        tier3: {
            mystery: [
                (inviter, pName, aMental, bMental, score) => `${inviter} (${aMental}) ile ${pName} (${bMental}) arasındaki zihinsel frekans (%${score}), birbirinin sınırlarına ve özgürlüğüne saygı duyan olgun bir denge sunuyor. Düşünceleriniz birebir aynı kalıptan çıkmasa da, birbirinize yeni pencereler açarak gizli patikaları keşfetmenizi sağlıyor.`,
                (inviter, pName, aMental, bMental, score) => `${inviter} (${aMental}) ve ${pName} (${bMental}) arasındaki zihinsel etkileşim (%${score}), iki bağımsız ve güçlü aklın saygı çerçevesindeki buluşmasıdır. Her konuyu aynı şekilde görmeseniz de, birbirinizin fikirlerine kulak vermek dünyanızı zenginleştiriyor.`,
                (inviter, pName, aMental, bMental, score) => `Zihinsel dalga boyunuz (%${score}), birbirinizi kısıtlamayan, tam tersine kendi yolunda yürürken arkasını kollayan olgun bir dostluk dinamiğini yansıtıyor. ${inviter}'ın ${aMental} duruşu sana farklı bir perspektif katarken, senin zihnin de ona taze bir soluk getiriyor.`
            ],
            balance: [
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Duygusal rezonansınız (%${emoScore}) ve Gölge Benlik dengeniz (%${shadowScore}), ilişkinizde kişisel sınırlara verilen değeri simgeliyor. ${inviter}'ın ${aHeartDesc} tutumu, gerektiğinde sana güvenli bir mesafe ve sığınak sunuyor. Telepatik Sezginiz (%${telScore}) ise zaman zaman aynı anda aynı şeyleri hissettirerek yüzünüzde tebessüm bırakıyor.`
                    : `Duygusal rezonansınız (%${emoScore}), ilişkinizde saygı ve güvenin temel olduğunu gösteriyor. ${inviter}'ın ${aHeartDesc} tutumu, fırtınalı anlarda sağduyulu bir liman yaratıyor. Birbirinizin kişisel alanlarına saygı duyarak paylaştığınız anlar çok daha kıymetli hale geliyor.`,
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Duygusal frekansınız (%${emoScore}) ve Gölge Benlik dengeniz (%${shadowScore}), aceleye gelmeyen ve zamanla demlenen sağlam bir sevgiyi işaret ediyor. ${inviter}'ın ${aHeartDesc} tavrı, aşırı beklentilere girmeden dürüstçe yan yana durabilme erdemi kazandırıyor. Telepati oranınız (%${telScore}) kritik anlarda birbirinizi hatırlamanıza yetiyor.`
                    : `Duygusal dengeniz (%${emoScore}), aranızda yapmacıksız ve sakin bir güven ortamı olduğunu gösteriyor. ${inviter}'ın ${aHeartDesc} doğası, fırtınalar koptuğunda fevri davranmak yerine suları durultmayı başarıyor.`,
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Duygusal rezonansınız (%${emoScore}) ve gölge taraflara yaklaşımınız (%${shadowScore}), birbirinizi olduğu gibi kabul eden çok samimi bir zemin sunuyor. ${inviter}'ın ${aHeartDesc} aurası, kırgınlıkları büyütmeden konuşabilme olanağı sağlıyor. Telepatik algınız (%${telScore}) sessizliğin bile bir iletişim biçimi olduğunu hatırlatıyor.`
                    : `Duygusal uyumunuz (%${emoScore}), birbirinize gösterdiğiniz karşılıklı anlayışla besleniyor. ${inviter}'ın ${aHeartDesc} yaklaşımı, zor günlerde kalabalıklar içinde aradığınız o sakin nefes gibi.`
            ],
            prophecy: [
                (elemName, spScore) => `Ruhani çekiminiz (%${spScore}) ve ${elemName} elementinin sakin titreşimi, zorlamasız ve zamana yayılan kalıcı bir yol arkadaşlığına işaret ediyor. Birbirinizi değiştirmeye çalışmadan olduğunuz gibi kucakladığınızda karanlığa ortak bir fener yakabiliyorsunuz.`,
                (elemName, spScore) => `${elemName} elementinin dengeli esintisi (%${spScore}), bu bağın acele etmeyen ve kök salan bir nitelikte olduğunu gösteriyor. Birbirinize kendi sınırlarınızı koruyarak eşlik ettiğinizde, bu güven bağı yıllar geçtikçe daha da güçlenecektir.`,
                (elemName, spScore) => `Ruhani frekansınız (%${spScore}), aranızdaki ilişkinin zorlamadan, suyun yatağını bulması gibi aktığını söylüyor. Birbirinizin eksiklerini kapatmak yerine farklılıklarına alan açtığınız sürece bu dostluk hep güvenli bir kale kalacaktır.`
            ]
        },

        // Tier 4: Zıt Kutuplar Frekansı ⚡ (< 72%)
        tier4: {
            mystery: [
                (inviter, pName, aMental, bMental, score) => `${inviter} (${aMental}) ile ${pName} (${bMental}) arasındaki zihinsel çekim (%${score}), birbirine zıt iki dünyanın büyüleyici karşılaşmasını yansıtıyor. Birbirinizin alışık olmadığı patikalardan yürüyerek, hayata bambaşka açılardan bakmayı öğreten zenginleştirici bir dinamiğe sahipsiniz.`,
                (inviter, pName, aMental, bMental, score) => `Ateş ve su, gece ve gündüz gibi zıt kutuplar evrenin en güçlü çekimini oluşturur. ${inviter} (${aMental}) ile ${pName} (${bMental}) arasındaki zihinsel kontrast (%${score}), tekdüzelikten uzak, her sohbette birbirinizin ufkunu genişleten canlı bir kıvılcım barındırıyor.`,
                (inviter, pName, aMental, bMental, score) => `Zihinsel frekansınız (%${score}), iki farklı kutuptan beslenen zengin bir keşif alanı sunuyor. ${inviter}'ın ${aMental} mizaç yapısı ile senin düşünce tarzın birbirine meydan okurken aynı zamanda gizli kapılar aralıyor.`
            ],
            balance: [
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Duygusal rezonansınız (%${emoScore}) ve Gölge Benlik kontrastınız (%${shadowScore}), birbirinizin göremediği kör noktaları aydınlatan bir ayna görevi görüyor. ${inviter}'ın ${aHeartDesc} karakteri ile senin özgün mizacın çatışmak yerine doğru iletişimle birbirini büyütecek bir derinlik taşıyor.`
                    : `Duygusal rezonansınız (%${emoScore}), zıt kutupların birbirine kattığı derinliği simgeliyor. ${inviter}'ın ${aHeartDesc} karakteri ile senin dünyan birbirine yabancı patikalar açsa da, doğru empati kurulduğunda en güçlü keşifler bu farklılıklardan doğar.`,
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Duygusal etkileşiminiz (%${emoScore}) ve Gölge Benlik dinamikleriniz (%${shadowScore}), birbirinizin konfor alanını esneten bir ayna tutuyor. ${inviter}'ın ${aHeartDesc} duruşu, sende eksik olan parçayı hatırlatırken Telepatik Sezginiz (%${telScore}) zıtlıkların ardındaki görünmez köprüyü kuruyor.`
                    : `Duygusal frekansınız (%${emoScore}), farklılıkların sunduğu zenginliği yansıtıyor. ${inviter}'ın ${aHeartDesc} mizacı, kalbinize daha önce hiç bakmadığınız yönlerden ışık tutarak sizi büyütüyor.`,
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Duygusal dünyanızdaki bu zıt kutup ahengi (%${emoScore}) ve Gölge Benlik sınavınız (%${shadowScore}), birbirinize sabrı ve koşulsuz dinlemeyi öğretiyor. ${inviter}'ın ${aHeartDesc} yaklaşımı, sert köşeleri yumuşatmak için sakin bir fener uzatıyor.`
                    : `Duygusal dengeniz (%${emoScore}), zıt kutupların birbirini dönüştürme gücünü barındırıyor. ${inviter}'ın ${aHeartDesc} tavrı ile senin duyguların, birbirinize yepyeni yaşam dersleri fısıldıyor.`
            ],
            prophecy: [
                (elemName, spScore) => `Ruhani frekansınız (%${spScore}) ve ${elemName} elementinin mistik kontrastı, birbirinizin hayatında dönüştürücü bir öğretmen rolü üstlendiğinizi fısıldıyor. Birbirinizin farklılıklarına sabır ve merakla yaklaştığınızda, bu zıt kutup enerjisi unutulmaz bir keşfe evrilir.`,
                (elemName, spScore) => `${elemName} elementi ile aranızdaki titreşim (%${spScore}), iki zıt kutbun birbirini tamamlaması gibi nadir ve özel bir tecrübeyi simgeliyor. Birbirinizi değiştirmeye çalışmak yerine bu benzersiz dinamiği merakla izlediğinizde, hayat boyu unutamayacağınız bir fener bağı doğacaktır.`,
                (elemName, spScore) => `Ruhani çekiminiz (%${spScore}), evrenin sizi birbirinizin eksik parçalarını fark ettirmek için bir araya getirdiğini gösteriyor. Kendi doğrularınızı dayatmadan maskesizce dinlemeyi seçtiğinizde, bu zıtlık en güçlü dönüşümünüze dönüşür.`
            ]
        }
    }
};
