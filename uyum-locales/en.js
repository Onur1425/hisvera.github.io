// Hisvera Compatibility Test - English Language Pack
window.UYUM_I18N = window.UYUM_I18N || {};

window.UYUM_I18N.en = {
    meta: {
        lang: 'en',
        name: 'English',
        flag: '🇬🇧'
    },
    ui: {
        headerBadge: 'Aura Resonance Active',
        langMoreTitle: 'Other Languages (Coming Soon)',
        langDropdownTitle: '✦ 14 Languages in HİS',
        langDropdownActiveTitle: 'Active Languages',
        langDropdownSoonTitle: 'Coming Soon (Active in Mobile App)',
        badgeActive: 'Active',
        badgeSoon: 'Soon',
        langDropdownFooter: '🌙 Other 12 languages are active in our mobile app, coming soon to the web test.',

        introTag: '✦ MYSTICAL RESONANCE MATRIX',
        introTitle: 'Soulmate & Aura Frequency Test',
        inviterGreeting: (name) => `<strong>${name}</strong> has initiated a resonance bridge to explore the unseen bond between you.`,
        inviterWantsText: 'wants to test frequency resonance with you ✨',
        defaultInviterName: 'A Soulmate',
        defaultParticipantName: 'A Soulmate',

        dimMentalIntro: 'Mental Harmony',
        dimEmotionalIntro: 'Emotional Resonance',
        dimSpiritualIntro: 'Spiritual Frequency',
        modeSelectorTitle: 'Select Journey Depth',

        modeQuickTitle: 'Quick Resonance',
        modeQuickSub: '8 Mystical Questions • ~2 min',
        modeDeepTitle: 'Deep Soul Journey',
        modeDeepSub: '16 Questions • Shadow Archetypes & Telepathy',

        introDescQuick: 'Every bond in the cosmos carries a hidden wavelength. Discover your <strong>Mental, Emotional, and Spiritual</strong> alignment across 8 deep mystical questions.',
        introDescDeep: 'Every bond in the cosmos carries a hidden wavelength. Explore the full spectrum across 16 questions: <strong>Mental, Emotional, Spiritual, Shadow Self, and Telepathy</strong>.',

        btnStartQuick: 'Begin Quick Resonance Test (8 Questions)',
        btnStartDeep: 'Begin Deep Soul Journey (16 Questions)',
        footerSecurity: '✦ Private & Anonymous • 12 Mystical Dimensions • Deep Archetype Analysis',

        // Quiz
        questionStep: (curr, total) => `Question ${curr} / ${total}`,
        questionStepLabel: (curr, total) => `Question ${curr} / ${total}`,

        // Name Screen
        nameTitle: 'Preparing Aura Analysis',
        nameSubtitle: (name) => `Enter your name to seal the frequency matrix and reveal your analysis with <strong>${name}</strong>.`,
        nameScreenDesc: 'Whisper your name or moniker to appear on your resonance report & sealed card:',
        nameInputPlaceholder: 'Your Name / Moniker (e.g. Alex)',
        btnCalculate: 'Reveal Frequency Resonance ✨',

        // Analyzing Screen
        analyzingTitle: 'Aligning Auras...',
        analyzingDesc: 'Calculating mental and emotional frequency waves.',
        analyzingStep1: 'Scanning aura wavelengths...',
        analyzingStep2: 'Mapping mental and emotional paths...',
        analyzingStep3: 'Sealing resonance frequency...',

        // Result Screen
        scoreLabel: 'Frequency Compatibility',
        dimMental: 'Mental Harmony (Wavelength)',
        dimEmotional: 'Emotional Resonance (Compassion & Empathy)',
        dimSpiritual: 'Spiritual Frequency (Telepathic Pull)',
        dimShadow: 'Shadow Self Resonance (Vulnerability & Secrets)',
        dimTelepathy: 'Telepathic Intuition (Wordless Bond)',

        sectionMystery: 'Mystery of Your Frequency',
        sectionBalance: 'Shadow & Balance Dynamics',
        sectionProphecy: 'Mystic Prophecy & Guidance',

        convTitle: 'Carry This Bond into HİS 🌙',
        convDesc: 'Download the HİS app to share late-night whispers, send telepathic signals to your soulmate, and light a lantern in the Dark Night Passage.',
        btnAppStore: 'Download on App Store',
        btnGooglePlay: 'Get it on Google Play',

        btnShareResult: (name) => name ? `Share Result with ${name} ✨` : 'Share Result ✨',
        btnShareStory: 'Share Instagram Story Card ✨',
        btnDownloadStory: 'Download Story Image (9:16 HD) 📥',

        storyPreparing: 'Preparing Story Card... ✨',
        storyDownloading: 'Downloading...',
        storyModalTitle: 'Story Preview',
        btnModalDownload: 'Save Story Card (HD)',
        storyModalClose: 'Close',
        modalNotice: 'Add to your Instagram Story and tag <strong style="color: #ffd166;">hisvera.com</strong> & <strong style="color: #f472b6;">@his.noktasi</strong> ✨',
        footerRights: '© 2026 <a href="index.html">hisvera</a> • HİS Mobile App All Rights Reserved.',

        storyShareTitle: 'Aura & Soulmate Frequency Test | hisvera',
        storyShareText: (n1, n2, sc) => `🔮 Soulmate Resonance between ${n1} & ${n2}: ${sc}%! hisvera.com`,

        // WhatsApp Share Message
        waMessageQuick: (inviter, score, title, m, e, s, url) => `✨ ${inviter}, I completed the Aura Frequency Test with you on hisvera.com!\n🔮 Our Resonance: %${score} (${title})\n🧠 Mental: %${m} | 🤍 Emotional: %${e} | 🌌 Spiritual: %${s}\n\nExplore our result here: ${url}`,
        waMessageDeep: (inviter, score, title, m, e, s, sh, t, url) => `✨ ${inviter}, I completed the 16-Question Deep Soul Analysis with you on hisvera.com!\n🔮 Our Frequency: %${score} (${title})\n🧠 Mental: %${m} | 🤍 Emotional: %${e} | 🌌 Spiritual: %${s}\n🔮 Shadow Self: %${sh} | ✨ Telepathy: %${t}\n\nExplore our result here: ${url}`
    },

    auraTraits: {
        mental: {
            A: { name: 'Inner Stillness', desc: 'seeking serene peace in silence', matchText: 'finding profound sanctuary in shared silence' },
            B: { name: 'Warm Haven', desc: 'finding comfort in a trusted presence', matchText: 'being a safe harbor in the storm for each other' },
            C: { name: 'Philosophical Architect', desc: 'unraveling life with logic and depth', matchText: 'navigating the mind’s labyrinths with shared intellect' },
            D: { name: 'Cosmic Wanderer', desc: 'tracing the mysteries of night and cosmos', matchText: 'gazing upon the same boundless sky with untamed freedom' }
        },
        heart: {
            A: { name: 'Silent Healer', desc: 'healing with quiet, wordless compassion', matchText: 'an unconditional, compassionate acceptance' },
            B: { name: 'Lantern Bearer', desc: 'reminding you of your inner light in the dark', matchText: 'lighting the lantern when the other stumbles' },
            C: { name: 'Loyal Guardian', desc: 'holding a safe, inviolable sanctuary', matchText: 'an unshakable loyalty and protective trust' },
            D: { name: 'Wise Mirror', desc: 'gently reflecting the truth behind fears', matchText: 'holding a compassionate mirror to each other’s soul' }
        },
        element: {
            A: { name: 'Night Rain', desc: 'earthly petrichor and serene rain' },
            B: { name: 'Cosmic Sky', desc: 'starlit skies and dusk' },
            C: { name: 'Lantern Flame', desc: 'a warm candle flame in the dark' },
            D: { name: 'Ocean & Wind', desc: 'boundless oceans and mountain winds' }
        }
    },

    paletteTiers: {
        tier1: {
            title: 'Cosmic Soulmate 🌌',
            colors: 'Amethyst Violet & Midnight Blue',
            subtitle: 'Cosmic Resonance & Magnetic Synchronicity'
        },
        tier2: {
            title: 'Harmonic Alignment 💫',
            colors: 'Emerald Green & Golden Glow',
            subtitle: 'Lantern Bearer & Quiet Haven'
        },
        tier3: {
            title: 'Balanced Heart Bond 💖',
            colors: 'Dusty Rose & Pure Silver',
            subtitle: 'Sacred Space & Protective Light'
        },
        tier4: {
            title: 'Opposite Poles Frequency ⚡',
            colors: 'Aurora Light & Lavender Mist',
            subtitle: 'Harmony of Discovery & New Horizons'
        }
    },

    storyCanvas: {
        badge: '✦  AURA & SOULMATE RESONANCE  ✦',
        scoreLabel: 'FREQUENCY COMPATIBILITY',
        dimMental: '🧠 Mental Harmony (Wavelength)',
        dimEmotional: '💖 Emotional Resonance (Compassion & Empathy)',
        dimSpiritual: '🌌 Spiritual Frequency (Telepathic Pull)',
        dimShadow: '🔮 Shadow Self Resonance',
        dimTelepathy: '✨ Telepathic Intuition (Wordless Bond)',
        watermarkSub: 'SOULMATE RESONANCE',
        brandTitle: 'HİS  •  A LANTERN IN THE DARK',
        storeNotice: 'App Store & Google Play  •  hisvera.com',
        tagline: 'Discover your soulmate & unleash your resonance ✨'
    },

    questions: [
        // 1
        {
            dimensionKey: 'mental',
            dimension: 'Mental Frequency',
            title: 'On a stormy and chaotic day, where does your mind seek sanctuary for stillness?',
            options: [
                { key: 'A', badge: 'Inner Stillness', text: 'In a dimly lit room, turning inward only to my breath and deep silence.', arch: 'Inner Observer', mental: 96, emotional: 84, spiritual: 92, shadow: 88, telepathy: 85 },
                { key: 'B', badge: 'Mystic Poetry', text: 'Pouring my thoughts onto paper, weaving them into words or a melody.', arch: 'Mystic Poet', mental: 88, emotional: 96, spiritual: 90, shadow: 86, telepathy: 92 },
                { key: 'C', badge: 'Night Wanderer', text: 'Going for a late-night walk, gazing at city lanterns and the vast night sky.', arch: 'Lantern Bearer', mental: 84, emotional: 90, spiritual: 96, shadow: 92, telepathy: 90 },
                { key: 'D', badge: 'Philosophical Architect', text: 'Deconstructing everything rationally, focusing on logic to find balance.', arch: 'Philosophical Architect', mental: 98, emotional: 78, spiritual: 82, shadow: 80, telepathy: 78 }
            ]
        },
        // 2
        {
            dimensionKey: 'mental',
            dimension: 'Mental Frequency',
            title: 'When lost in the labyrinths of your mind, what is the greatest force that guides you out?',
            options: [
                { key: 'A', badge: 'Warm Haven', text: 'The whisper of a trusted voice saying: "I am here, by your side."', arch: 'Silent Healer', mental: 90, emotional: 98, spiritual: 94, shadow: 90, telepathy: 92 },
                { key: 'B', badge: 'Inner Sovereign', text: 'That ancient resilience and quiet will, knowing I can solve it on my own.', arch: 'Solitary Wanderer', mental: 96, emotional: 82, spiritual: 88, shadow: 84, telepathy: 80 },
                { key: 'C', badge: 'Nature’s Resonance', text: 'The rhythm of rain on the glass, remembering that time flows onward.', arch: 'Rain Keeper', mental: 86, emotional: 92, spiritual: 96, shadow: 90, telepathy: 94 },
                { key: 'D', badge: 'Empathetic Mind', text: 'A deep, philosophical gaze that listens without ever judging.', arch: 'Philosophical Companion', mental: 95, emotional: 93, spiritual: 90, shadow: 88, telepathy: 91 }
            ]
        },
        // 3
        {
            dimensionKey: 'emotional',
            dimension: 'Emotional Resonance',
            title: 'When you sense that someone you cherish has a broken heart, what is your first instinct?',
            options: [
                { key: 'A', badge: 'Silent Healer', text: 'Sitting beside them in silence, wrapping them in quiet presence.', arch: 'Silent Healer', mental: 86, emotional: 99, spiritual: 95, shadow: 91, telepathy: 96 },
                { key: 'B', badge: 'Empathic Kin', text: 'Searching for gentle words and resonance to honor their soul’s depth.', arch: 'Empathic Kin', mental: 93, emotional: 95, spiritual: 89, shadow: 85, telepathy: 91 },
                { key: 'C', badge: 'Protective Shield', text: 'Erecting a protective shield, holding a safe and untouchable haven for them.', arch: 'Protective Light', mental: 89, emotional: 94, spiritual: 87, shadow: 89, telepathy: 86 },
                { key: 'D', badge: 'Gentle Sage', text: 'Respecting their need for solitude while lighting a quiet lantern from afar.', arch: 'Gentle Sage', mental: 95, emotional: 87, spiritual: 93, shadow: 90, telepathy: 88 }
            ]
        },
        // 4
        {
            dimensionKey: 'emotional',
            dimension: 'Emotional Resonance',
            title: 'When your own heart shatters, how do you mend the broken pieces?',
            options: [
                { key: 'A', badge: 'Hidden Patience', text: 'Surrendering to time, letting sorrow brew quietly without showing a trace.', arch: 'Shadow Keeper', mental: 91, emotional: 92, spiritual: 94, shadow: 96, telepathy: 87 },
                { key: 'B', badge: 'Telepathic Healing', text: 'Healing without words, simply gazing into the eyes of my soulmate.', arch: 'Cosmic Empath', mental: 88, emotional: 99, spiritual: 96, shadow: 92, telepathy: 98 },
                { key: 'C', badge: 'Kintsugi Soul', text: 'Joining the fractures with golden dust through art, poetry, or melancholy.', arch: 'Mystic Poet', mental: 94, emotional: 96, spiritual: 92, shadow: 90, telepathy: 90 },
                { key: 'D', badge: 'Elemental Peace', text: 'Standing before a silent sea or misty mountain, communing with the wind.', arch: 'Moon Resonance', mental: 89, emotional: 90, spiritual: 98, shadow: 93, telepathy: 92 }
            ]
        },
        // 5
        {
            dimensionKey: 'telepathy',
            dimension: 'Social Gravity & Telepathy',
            title: 'What is the most powerful unseen frequency that draws you to another soul?',
            options: [
                { key: 'A', badge: 'Mystic Telepathy', text: 'That sacred silence where eyes meet and words are no longer needed.', arch: 'Mystic Telepath', mental: 87, emotional: 97, spiritual: 99, shadow: 90, telepathy: 99 },
                { key: 'B', badge: 'Intellectual Harmony', text: 'Late-night conversations that unravel the deep mysteries of existence.', arch: 'Intellectual Kin', mental: 99, emotional: 90, spiritual: 90, shadow: 84, telepathy: 89 },
                { key: 'C', badge: 'Pure Resonance', text: 'The peace of feeling light as a child, completely unburdened and maskless.', arch: 'Pure Resonance', mental: 89, emotional: 98, spiritual: 94, shadow: 88, telepathy: 93 },
                { key: 'D', badge: 'Shadow Courage', text: 'The brave honesty of revealing wounds and shadows without hiding.', arch: 'Shadow Seeker', mental: 94, emotional: 96, spiritual: 92, shadow: 97, telepathy: 94 }
            ]
        },
        // 6
        {
            dimensionKey: 'telepathy',
            dimension: 'Social Gravity & Telepathy',
            title: 'Have you ever felt someone’s presence right in your heart, even when miles apart?',
            options: [
                { key: 'A', badge: 'Cosmic Telepathy', text: 'Yes; a profound bond whispering that physical distance is merely an illusion.', arch: 'Mystic Telepath', mental: 88, emotional: 96, spiritual: 99, shadow: 89, telepathy: 99 },
                { key: 'B', badge: 'Intuitive Wave', text: 'A sudden breeze or familiar scent that envelopes my senses out of nowhere.', arch: 'Intuitive Wanderer', mental: 85, emotional: 94, spiritual: 95, shadow: 86, telepathy: 96 },
                { key: 'C', badge: 'Night Resonance', text: 'That warm, indescribable wave washing over me just before sleep.', arch: 'Night Keeper', mental: 91, emotional: 97, spiritual: 94, shadow: 93, telepathy: 95 },
                { key: 'D', badge: 'Serene Intuition', text: 'I only perceive it when my mind grows completely quiet and the world falls silent.', arch: 'Inner Observer', mental: 96, emotional: 89, spiritual: 92, shadow: 87, telepathy: 90 }
            ]
        },
        // 7
        {
            dimensionKey: 'spiritual',
            dimension: 'Soul’s Natural Element',
            title: 'Which natural atmosphere elevates your soul’s vibration to its zenith?',
            options: [
                { key: 'A', badge: 'Earth & Rain', text: 'Midnight rain beating against the glass with the intoxicating scent of petrichor.', arch: 'Night Rain', mental: 90, emotional: 95, spiritual: 96, shadow: 92, telepathy: 93 },
                { key: 'B', badge: 'Air & Cosmos', text: 'A cool breeze on a solitary mountain summit under an infinite sky.', arch: 'Sky Wanderer', mental: 96, emotional: 88, spiritual: 92, shadow: 85, telepathy: 89 },
                { key: 'C', badge: 'Fire & Lantern', text: 'A flickering candle flame in the dark and the comforting hearth of a fire.', arch: 'Lantern Flame', mental: 88, emotional: 97, spiritual: 93, shadow: 89, telepathy: 91 },
                { key: 'D', badge: 'Moon & Ocean', text: 'A calm, waveless ocean shore illuminated by the silvery full moon.', arch: 'Moon Resonance', mental: 92, emotional: 96, spiritual: 98, shadow: 94, telepathy: 97 }
            ]
        },
        // 8
        {
            dimensionKey: 'spiritual',
            dimension: 'Soul’s Natural Element',
            title: 'If an element became a shield guarding your essence, which would you choose?',
            options: [
                { key: 'A', badge: 'Abyssal Ocean', text: 'Silent oceanic depths, absorbing and muffling all chaotic noise of the world.', arch: 'Ocean Sanctuary', mental: 92, emotional: 95, spiritual: 97, shadow: 93, telepathy: 95 },
                { key: 'B', badge: 'Celestial Mist', text: 'A drifting veil of mist, leaving an untouchable aura of mystery.', arch: 'Misty Traveler', mental: 95, emotional: 90, spiritual: 94, shadow: 95, telepathy: 92 },
                { key: 'C', badge: 'Ancient Roots', text: 'The roots of an ancient cedar, offering unshakable loyalty and grounding.', arch: 'Loyal Guardian', mental: 94, emotional: 96, spiritual: 91, shadow: 86, telepathy: 88 },
                { key: 'D', badge: 'Aurora Light', text: 'Aurora borealis dancing in the night, radiating pure magnetic energy.', arch: 'Cosmic Light', mental: 91, emotional: 94, spiritual: 98, shadow: 90, telepathy: 98 }
            ]
        },
        // 9
        {
            dimensionKey: 'shadow',
            dimension: 'Shadow Self & Vulnerability',
            title: 'In the deepest sanctuary of your heart, which inner conflict tests you most?',
            options: [
                { key: 'A', badge: 'Profound Solitude', text: 'Feeling with immense depth, yet rarely being truly understood by anyone.', arch: 'Profound Solitude', mental: 92, emotional: 98, spiritual: 95, shadow: 98, telepathy: 93 },
                { key: 'B', badge: 'Sacrificial Lantern', text: 'Constantly being a lantern for others while exhausting my own inner spark.', arch: 'Sacrificial Lantern', mental: 89, emotional: 97, spiritual: 93, shadow: 95, telepathy: 91 },
                { key: 'C', badge: 'Vulnerable Armor', text: 'Fearing that opening my heart fully will leave me defenseless.', arch: 'Vulnerable Armor', mental: 94, emotional: 92, spiritual: 88, shadow: 96, telepathy: 89 },
                { key: 'D', badge: 'Temporal Melancholy', text: 'Watching time slip through my fingers, aching not to lose my true essence.', arch: 'Temporal Melancholy', mental: 95, emotional: 90, spiritual: 91, shadow: 91, telepathy: 87 }
            ]
        },
        // 10
        {
            dimensionKey: 'shadow',
            dimension: 'Shadow Self & Vulnerability',
            title: 'What is the shadow facet of yourself that you hesitate most to show the world?',
            options: [
                { key: 'A', badge: 'Hidden Fatigue', text: 'Appearing unshakable on the outside while feeling fragile enough to collapse at a whisper.', arch: 'Weary Warrior', mental: 91, emotional: 98, spiritual: 93, shadow: 99, telepathy: 92 },
                { key: 'B', badge: 'Attachment Fear', text: 'Fearing that loving too deeply will dissolve my freedom and personal center.', arch: 'Free Spirit', mental: 96, emotional: 91, spiritual: 89, shadow: 95, telepathy: 88 },
                { key: 'C', badge: 'Perfectionist Shield', text: 'Striving for perfection while neglecting the tender child within.', arch: 'Quiet Child', mental: 94, emotional: 93, spiritual: 90, shadow: 94, telepathy: 86 },
                { key: 'D', badge: 'Philosophical Weight', text: 'Over-intellectualizing life and missing its effortless, simple joys.', arch: 'Philosophical Architect', mental: 97, emotional: 88, spiritual: 92, shadow: 92, telepathy: 89 }
            ]
        },
        // 11
        {
            dimensionKey: 'emotional',
            dimension: 'Sacred Language of Love',
            title: 'What is the most indispensable feeling you seek in a true cosmic soulmate?',
            options: [
                { key: 'A', badge: 'Silent Harmony', text: 'Understanding each other’s silence and finding refuge within that quiet.', arch: 'Silent Harmony', mental: 91, emotional: 99, spiritual: 97, shadow: 92, telepathy: 98 },
                { key: 'B', badge: 'Cosmic Companion', text: 'Growing alongside one another, illuminating our highest potential.', arch: 'Cosmic Companion', mental: 98, emotional: 93, spiritual: 92, shadow: 86, telepathy: 91 },
                { key: 'C', badge: 'Timeless Citadel', text: 'An inviolable sanctuary built together against the world’s chaos.', arch: 'Timeless Citadel', mental: 93, emotional: 97, spiritual: 94, shadow: 90, telepathy: 92 },
                { key: 'D', badge: 'Sacred Healing', text: 'Tending to each other’s deepest wounds with reverence and tenderness.', arch: 'Sacred Healing', mental: 90, emotional: 99, spiritual: 96, shadow: 97, telepathy: 96 }
            ]
        },
        // 12
        {
            dimensionKey: 'emotional',
            dimension: 'Sacred Language of Love',
            title: 'What do you consider the ultimate testament of trust between two souls?',
            options: [
                { key: 'A', badge: 'Unfiltered Truth', text: 'Never needing to filter a single word or thought when with them.', arch: 'Pure Honesty', mental: 97, emotional: 96, spiritual: 93, shadow: 92, telepathy: 93 },
                { key: 'B', badge: 'Timeless Bond', text: 'Resuming with the exact same warmth, even after months of silence.', arch: 'Timeless Wanderer', mental: 94, emotional: 97, spiritual: 96, shadow: 88, telepathy: 95 },
                { key: 'C', badge: 'Unwavering Faith', text: 'Knowing that if you were to fall blindfolded into the dark, they would catch you.', arch: 'Loyal Guardian', mental: 91, emotional: 99, spiritual: 94, shadow: 91, telepathy: 92 },
                { key: 'D', badge: 'Heart Radar', text: 'Hearing each other’s unspoken cries through nothing more than a glance.', arch: 'Mystic Telepath', mental: 92, emotional: 98, spiritual: 97, shadow: 95, telepathy: 99 }
            ]
        },
        // 13
        {
            dimensionKey: 'spiritual',
            dimension: 'Mystical Temporal Hour',
            title: 'Which mystical hour does your soul resonate most deeply with the cosmos?',
            options: [
                { key: 'A', badge: 'Night Owl', text: '00:00 - 04:00 (The Dark Night Passage and whispers of starlight).', arch: 'Night Owl', mental: 93, emotional: 96, spiritual: 99, shadow: 96, telepathy: 97 },
                { key: 'B', badge: 'Twilight', text: 'Twilight (The hour when the day fades into purple and crimson melancholy).', arch: 'Twilight Aura', mental: 91, emotional: 97, spiritual: 94, shadow: 93, telepathy: 94 },
                { key: 'C', badge: 'Misty Dawn', text: 'The first misty stillness of dawn, before the waking world stirs.', arch: 'Dawn Spirit', mental: 96, emotional: 90, spiritual: 93, shadow: 87, telepathy: 90 },
                { key: 'D', badge: 'Timeless Instant', text: 'Timeless moments (Whenever my heart flutters, regardless of the clock).', arch: 'Timeless Wanderer', mental: 92, emotional: 98, spiritual: 97, shadow: 91, telepathy: 96 }
            ]
        },
        // 14
        {
            dimensionKey: 'spiritual',
            dimension: 'Mystical Temporal Hour',
            title: 'When the clock strikes midnight and the world stands still, what draws your soul?',
            options: [
                { key: 'A', badge: 'Cosmic Wonder', text: 'Looking at the stars, pondering the souls sharing this quiet solitude.', arch: 'Star Gazing Wanderer', mental: 95, emotional: 94, spiritual: 98, shadow: 92, telepathy: 96 },
                { key: 'B', badge: 'Melancholic Melody', text: 'Losing myself in the most poignant chords of a song, steeped in memories.', arch: 'Mystic Poet', mental: 89, emotional: 98, spiritual: 94, shadow: 95, telepathy: 93 },
                { key: 'C', badge: 'Midnight Journal', text: 'Inscribing private whispers into my journal that no other eye will see.', arch: 'Secret Pen', mental: 94, emotional: 95, spiritual: 93, shadow: 96, telepathy: 91 },
                { key: 'D', badge: 'Pure Stillness', text: 'Listening to the silence itself, recalibrating my inner equilibrium.', arch: 'Inner Observer', mental: 97, emotional: 89, spiritual: 96, shadow: 88, telepathy: 92 }
            ]
        },
        // 15
        {
            dimensionKey: 'telepathy',
            dimension: 'Secret Whispers & Confession',
            title: 'If you could whisper a single truth to the one who sent you this test, what would it be?',
            options: [
                { key: 'A', badge: 'Silent Gratitude', text: '"Even when words fail me, your presence brings stillness to my soul."', arch: 'Silent Gratitude', mental: 89, emotional: 99, spiritual: 96, shadow: 90, telepathy: 96 },
                { key: 'B', badge: 'Magnetic Confession', text: '"There is an unspoken magnetic current flowing between us that defies words."', arch: 'Magnetic Resonance', mental: 94, emotional: 97, spiritual: 98, shadow: 93, telepathy: 99 },
                { key: 'C', badge: 'Loyal Light', text: '"Whenever the night grows heavy, I stand ready to be your lantern."', arch: 'Loyal Light', mental: 91, emotional: 98, spiritual: 95, shadow: 91, telepathy: 93 },
                { key: 'D', badge: 'Pure Authenticity', text: '"With you, I never fear shedding my armor and standing completely unmasked."', arch: 'Pure Honesty', mental: 96, emotional: 96, spiritual: 93, shadow: 94, telepathy: 94 }
            ]
        },
        // 16
        {
            dimensionKey: 'telepathy',
            dimension: 'Secret Whispers & Confession',
            title: 'If you were to capture the resonance between you two in a single metaphor, which would it be?',
            options: [
                { key: 'A', badge: 'Twin Beacons', text: 'The intersecting beams of two lighthouses finding each other across a foggy sea.', arch: 'Lantern Bearer', mental: 92, emotional: 98, spiritual: 97, shadow: 92, telepathy: 97 },
                { key: 'B', badge: 'Constellation', text: 'Two stars shining across the dark cosmos, complementing one another’s orbit.', arch: 'Cosmic Resonance', mental: 95, emotional: 96, spiritual: 98, shadow: 89, telepathy: 98 },
                { key: 'C', badge: 'Ancient Volumes', text: 'Two leatherbound grimoires resting side by side in an ancient bookstore.', arch: 'Philosophical Architect', mental: 98, emotional: 92, spiritual: 93, shadow: 87, telepathy: 90 },
                { key: 'D', badge: 'Scent of Rain', text: 'The tranquil scent of earth awakening right after summer rain.', arch: 'Earth Serenity', mental: 90, emotional: 97, spiritual: 96, shadow: 91, telepathy: 94 }
            ]
        },
        // 17
        {
            dimensionKey: 'mental',
            dimension: 'Existential Silence',
            title: 'If two souls share hours in the same room without speaking a word, what does it evoke in you?',
            options: [
                { key: 'A', badge: 'Spiritual Unity', text: 'The purest intimacy, where words cease and souls converse in silence.', arch: 'Silent Harmony', mental: 90, emotional: 98, spiritual: 99, shadow: 92, telepathy: 99 },
                { key: 'B', badge: 'Sacred Stillness', text: 'The summit of trust: never needing hollow talk to fill the silence.', arch: 'Pure Resonance', mental: 97, emotional: 96, spiritual: 94, shadow: 88, telepathy: 93 },
                { key: 'C', badge: 'Healing Chamber', text: 'When frequencies align, the most restorative and tranquil therapy on earth.', arch: 'Silent Healer', mental: 92, emotional: 97, spiritual: 96, shadow: 90, telepathy: 95 },
                { key: 'D', badge: 'Haven of Peace', text: 'The art of calming one’s inner tempests simply by breathing beside the other.', arch: 'Peace Keeper', mental: 94, emotional: 95, spiritual: 95, shadow: 91, telepathy: 94 }
            ]
        },
        // 18
        {
            dimensionKey: 'mental',
            dimension: 'Existential Silence',
            title: 'When the rush of life falls quiet, what does that deep silence whisper within you?',
            options: [
                { key: 'A', badge: 'Inner Compass', text: '"Slow down; your destination already dwells within, seek it not outside."', arch: 'Inner Observer', mental: 96, emotional: 94, spiritual: 97, shadow: 89, telepathy: 92 },
                { key: 'B', badge: 'Creative Spark', text: '"This void is no end; it is the genesis of a new poem or profound thought."', arch: 'Mystic Poet', mental: 98, emotional: 95, spiritual: 93, shadow: 94, telepathy: 95 },
                { key: 'C', badge: 'Universal Embrace', text: '"You are never alone; the universe itself holds you close in this quiet."', arch: 'Silent Healer', mental: 90, emotional: 99, spiritual: 98, shadow: 91, telepathy: 97 },
                { key: 'D', badge: 'Gathering Power', text: '"Your soul is gathering strength against the storms; wait and trust your light."', arch: 'Loyal Guardian', mental: 93, emotional: 96, spiritual: 95, shadow: 93, telepathy: 93 }
            ]
        },
        // 19
        {
            dimensionKey: 'mental',
            dimension: 'Literary Melancholy',
            title: 'If your life were an ancient novel, what tone would define your pages?',
            options: [
                { key: 'A', badge: 'Night Poem', text: 'Verses written under the stars, carrying secret sorrow and noble grace.', arch: 'Mystic Poet', mental: 93, emotional: 98, spiritual: 96, shadow: 96, telepathy: 94 },
                { key: 'B', badge: 'Voyager’s Journal', text: 'The inner chronicle of a voyager who found wisdom through tempests.', arch: 'Solitary Wanderer', mental: 98, emotional: 91, spiritual: 93, shadow: 89, telepathy: 90 },
                { key: 'C', badge: 'Subtle Depth', text: 'Unpretentious, minimalist philosophy that enchants the deeper you look.', arch: 'Philosophical Architect', mental: 96, emotional: 93, spiritual: 92, shadow: 86, telepathy: 89 },
                { key: 'D', badge: 'Phoenix Rising', text: 'The manifesto of a soul bearing its scars with pride, rising from the ashes.', arch: 'Sacred Healing', mental: 94, emotional: 97, spiritual: 95, shadow: 97, telepathy: 93 }
            ]
        },
        // 20
        {
            dimensionKey: 'emotional',
            dimension: 'Literary Melancholy',
            title: 'When a raindrop taps upon the glass, where does that tender melancholy stem from?',
            options: [
                { key: 'A', badge: 'Echo of Memory', text: '"The faint whisper of a cherished memory gently brushing against my heart."', arch: 'Mystic Poet', mental: 91, emotional: 99, spiritual: 95, shadow: 96, telepathy: 94 },
                { key: 'B', badge: 'Tears of Cosmos', text: '"Feeling all the unspoken sorrows of the world echoing inside my soul."', arch: 'Sacred Healing', mental: 94, emotional: 98, spiritual: 97, shadow: 95, telepathy: 98 },
                { key: 'C', badge: 'Cleansing Elixir', text: '"The serenity of knowing that as the earth is cleansed, my soul is renewed."', arch: 'Dawn Spirit', mental: 97, emotional: 92, spiritual: 94, shadow: 88, telepathy: 90 },
                { key: 'D', badge: 'Cosmic Longing', text: '"A deep longing for a kindred soul I have yet to meet, but know exists."', arch: 'Cosmic Resonance', mental: 92, emotional: 97, spiritual: 98, shadow: 93, telepathy: 99 }
            ]
        },
        // 21
        {
            dimensionKey: 'spiritual',
            dimension: 'Destiny & Synchronicity',
            title: 'What does it mean when two kindred souls cross paths in this exact lifetime?',
            options: [
                { key: 'A', badge: 'Destiny’s Resonance', text: 'There are no coincidences; frequencies draw together by sacred cosmic law.', arch: 'Cosmic Resonance', mental: 92, emotional: 97, spiritual: 99, shadow: 91, telepathy: 99 },
                { key: 'B', badge: 'Shared Pilgrimage', text: 'A shared journey of mutual learning and compassionate healing.', arch: 'Cosmic Companion', mental: 97, emotional: 95, spiritual: 94, shadow: 93, telepathy: 94 },
                { key: 'C', badge: 'Sacred Haven', text: 'A rare, precious sanctuary gifted to us amidst the world’s chaos.', arch: 'Timeless Citadel', mental: 91, emotional: 99, spiritual: 95, shadow: 89, telepathy: 93 },
                { key: 'D', badge: 'Ancient Recognition', text: 'The earthly echo of a bond that has transcended time and space.', arch: 'Mystic Telepath', mental: 94, emotional: 96, spiritual: 98, shadow: 94, telepathy: 98 }
            ]
        },
        // 22
        {
            dimensionKey: 'spiritual',
            dimension: 'Destiny & Synchronicity',
            title: 'Have you ever looked into someone’s eyes and felt as if you have known them for a millennium?',
            options: [
                { key: 'A', badge: 'Ancient Memory', text: '"Yes; the gaze whispers an ancient memory that words could never capture."', arch: 'Mystic Telepath', mental: 94, emotional: 98, spiritual: 99, shadow: 92, telepathy: 99 },
                { key: 'B', badge: 'Magnetic Lock', text: '"Breath catches and logic falls silent in awe; that is the hand of destiny."', arch: 'Magnetic Resonance', mental: 90, emotional: 99, spiritual: 97, shadow: 94, telepathy: 97 },
                { key: 'C', badge: 'Intuitive Trust', text: '"I rarely rush, yet my spirit quietly signals: \'You are right where you belong.\'"', arch: 'Pure Resonance', mental: 98, emotional: 93, spiritual: 94, shadow: 87, telepathy: 93 },
                { key: 'D', badge: 'Timeless Frequency', text: '"Time freezes, as if every star and constellation aligned for that instant."', arch: 'Cosmic Companion', mental: 95, emotional: 96, spiritual: 98, shadow: 91, telepathy: 98 }
            ]
        },
        // 23
        {
            dimensionKey: 'shadow',
            dimension: 'Lantern in the Dark',
            title: 'What is the most sacred virtue you fiercely protect in this world?',
            options: [
                { key: 'A', badge: 'Unmasked Truth', text: 'The pure authenticity of gazing into someone’s eyes without masks.', arch: 'Pure Honesty', mental: 95, emotional: 99, spiritual: 96, shadow: 94, telepathy: 97 },
                { key: 'B', badge: 'Granite Loyalty', text: 'The unwavering loyalty of standing tall beside someone when all else turn away.', arch: 'Loyal Guardian', mental: 93, emotional: 98, spiritual: 94, shadow: 91, telepathy: 92 },
                { key: 'C', badge: 'Courageous Heart', text: 'The courage to keep loving, feeling, and hoping even after being broken.', arch: 'Sacred Healing', mental: 91, emotional: 99, spiritual: 97, shadow: 97, telepathy: 95 },
                { key: 'D', badge: 'Luminous Spirit', text: 'The grace to embrace one’s own shadows and become a lantern for others.', arch: 'Lantern Bearer', mental: 97, emotional: 94, spiritual: 96, shadow: 98, telepathy: 93 }
            ]
        },
        // 24
        {
            dimensionKey: 'shadow',
            dimension: 'Lantern in the Dark',
            title: 'If the soul you trust most falls into total darkness, how do you become their light?',
            options: [
                { key: 'A', badge: 'Shared Silence', text: '"I offer no empty counsel; I sit beside them in the dark, hold their hand, and keep silent."', arch: 'Silent Healer', mental: 92, emotional: 99, spiritual: 97, shadow: 96, telepathy: 98 },
                { key: 'B', badge: 'Unbending Shield', text: '"Even if they face the entire world, I stand back-to-back as their shield."', arch: 'Loyal Guardian', mental: 95, emotional: 97, spiritual: 93, shadow: 92, telepathy: 93 },
                { key: 'C', badge: 'Inner Torch', text: '"I light a lantern to remind them of who they are and how brightly they truly shine."', arch: 'Lantern Bearer', mental: 97, emotional: 96, spiritual: 98, shadow: 90, telepathy: 96 },
                { key: 'D', badge: 'Mirror of Truth', text: '"I hold a gentle yet truthful mirror, guiding them to confront their fears."', arch: 'Philosophical Architect', mental: 99, emotional: 92, spiritual: 94, shadow: 95, telepathy: 91 }
            ]
        }
    ],

    narratives: {
        // Tier 1: Cosmic Soulmate 🌌 (93% - 98%)
        tier1: {
            mystery: [
                (inviter, pName, aMental, bMental, score, matchText) => `The frequency between ${inviter} (${aMental}) and ${pName} (${bMental}) reaches far beyond an ordinary bond. Your mental wavelength (%${score}) reveals that your thoughts walk along the same hidden pathways, gifting you the power of ${matchText}. You are two rare souls who find deep sanctuary in shared silence without ever needing to finish each other's sentences.`,
                (inviter, pName, aMental, bMental, score) => `In the vast labyrinth of the cosmos, certain souls feel as though they have known each other for centuries upon their very first encounter. The mental harmony (%${score}) between ${inviter} (${aMental}) and ${pName} (${bMental}) whispers that even where words dissolve, your minds flow along the same celestial path. A single glance carries more clarity than pages of dialogue.`,
                (inviter, pName, aMental, bMental, score) => `The ${aMental} essence of ${inviter} intertwined with ${pName}'s ${bMental} energy weaves a flawless magnetic resonance on the mental plane (%${score}). Your thoughts embrace each other instantly rather than measuring; you share an intuitive collective intellect capable of untangling life's deepest knots effortlessly.`
            ],
            balance: [
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Your emotional resonance (%${emoScore}) and Shadow Self harmony (%${shadowScore}) stand as your bond's strongest fortress. Combined with ${inviter}'s aura of ${aHeartDesc}, when one grows weary amidst life’s storm, the lantern in the other awakens naturally. Your gift to embrace vulnerabilities without judgment and communicate telepathically (%${telScore}) is nothing short of mesmerizing.`
                    : `Your emotional resonance (%${emoScore}) serves as your bond's deepest armor. Embraced by ${inviter}'s nature of ${aHeartDesc}, whenever one of you wearies in life's tempests, the lantern within the other awakens on its own. Your potential to cradle each other's vulnerabilities without judgment is extraordinarily profound.`,
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `The heartbeat vibration between you (%${emoScore}) and your shadow harmony (%${shadowScore}) have built a sacred sanctuary where you can bare your deepest wounds without fear. ${inviter}'s resonance of ${aHeartDesc} shines like a lighthouse in dark nights. Your telepathy score (%${telScore}) proves that physical distance can never diminish your heart's signal.`
                    : `Your emotional resonance (%${emoScore}) heralds that you offer a true sanctuary to each other. ${inviter}'s presence of ${aHeartDesc} descends like a compassionate balm upon your heart in stormy moments. One senses the sorrow of the other before a question is asked, discovering healing in shared quiet.`,
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Your emotional resonance (%${emoScore}) and shadow world alignment (%${shadowScore}) offer the purest love—one that leaves no room or need for masks. ${inviter}'s spirit of ${aHeartDesc} unconditionally cradles every vulnerability. With your telepathic intuition (%${telScore}), you read each other's inner universe in a single pause.`
                    : `Your emotional alignment (%${emoScore}) reveals how tender yet unbreakable this bond is. ${inviter}'s aura of ${aHeartDesc} acts as a grounding anchor that lightens all of life’s burdens. The delicate grace with which you touch each other's hearts renders your connection priceless.`
            ],
            prophecy: [
                (elemName, spScore) => `Your spiritual gravity (%${spScore}) and the vibration of ${elemName} whisper that this bond will not erode with time. When you kindle a shared lantern in the dark, the whole weight of the world grows light. Never hesitate to stand unmasked before one another; this cosmic frequency is gifted to very few souls.`,
                (elemName, spScore) => `The merging of your auras with the element of ${elemName} (%${spScore}) proclaims that this connection is no mere accident, but an ancient decree of destiny. In each other's presence, time slows down and the outer world falls quiet. As you continue to shelter each other's freedom, this resonance will remain your lifelong compass.`,
                (elemName, spScore) => `Your spiritual frequency (%${spScore}) and bond with the cosmos foretell that you will be an unyielding compass for each other along the lantern path. The chaos of the world remains outside your door; remain as you are—in your rawest, purest truth.`
            ]
        },

        // Tier 2: Harmonic Alignment 💫 (83% - 92%)
        tier2: {
            mystery: [
                (inviter, pName, aMental, bMental, score) => `The mental wavelength (%${score}) between ${inviter} (${aMental}) and ${pName} (${bMental}) flows with a harmonic rhythm that balances each other's edges with grace. Most of your thoughts journey along the same secret paths; on turbulent days, you provide both an attentive ear and a steadfast sanctuary.`,
                (inviter, pName, aMental, bMental, score) => `The minds of ${inviter} (${aMental}) and ${pName} (${bMental}) strike a chord as complementary as a beacon and a calm harbor (%${score}). One paints the grand canvas while the other catches the most vital nuance. Losing track of time in conversation flows directly from this harmonious symmetry.`,
                (inviter, pName, aMental, bMental, score) => `Your mental resonance (%${score}) demonstrates that you deeply inspire one another when questioning life and exploring ideas. ${inviter}'s nature of ${aMental} and your unique perspective merge like two streams into one serene river, illuminating secret pathways together.`
            ],
            balance: [
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Your emotional resonance (%${emoScore}) and Shadow Self harmony (%${shadowScore}) serve as your most peaceful harbor. When ${inviter}'s posture of ${aHeartDesc} meets your intuitive depth, the lantern in one awakens as soon as the other tires. With Telepathic Intuition (%${telScore}), you sense each other's moods even from afar.`
                    : `Your emotional resonance (%${emoScore}) stands as your bond's strongest shield. ${inviter}'s presence of ${aHeartDesc} carves out a tranquil space for your heart during difficult days. Your maturity to listen without judgment swiftly calms any storm.`,
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `The rhythm of your hearts (%${emoScore}) and the balance in your shadow worlds (%${shadowScore}) establish a healthy connection that grants emotional breathing room. ${inviter}'s touch of ${aHeartDesc} soothes doubts one by one, while your telepathy frequency (%${telScore}) unites you in shared feeling unexpectedly.`
                    : `Your emotional balance (%${emoScore}) proves there is both warm intimacy and respectful space in your relationship. ${inviter}'s demeanor of ${aHeartDesc} spreads serenity even in tense moments; you rarely need lengthy explanations to feel understood.`,
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Your healing grace (%${emoScore}) and shadow alignment (%${shadowScore}) gently coax out the free child within both of you. While ${inviter}'s character of ${aHeartDesc} guards the citadel, Telepathic Intuition (%${telScore}) mends unspoken sorrows before words are spoken.`
                    : `Your emotional affinity (%${emoScore}) highlights how natural and genuine your bond is. ${inviter}'s style of ${aHeartDesc} offers the quiet peace of mind you crave most during testing times.`
            ],
            prophecy: [
                (elemName, spScore) => `Your spiritual affinity (%${spScore}) and the energy of ${elemName} herald a steadfast friendship that deepens with every step. When you light a lantern together in the dark, the turmoil of the world fades away. As long as you remain unmasked, this bond will shine throughout a lifetime.`,
                (elemName, spScore) => `The mystical breeze of ${elemName} (%${spScore}) symbolizes that your connection is not fleeting, but a deeply rooted journey through life. Walking hand in hand while respecting personal boundaries, there is no storm you cannot weather.`,
                (elemName, spScore) => `Your spiritual frequency (%${spScore}) whispers that you entered each other’s lives at the exact right moment. Never shy away from being a guiding lantern in the dark; this friendship carries an abundance that multiplies as it is shared.`
            ]
        },

        // Tier 3: Balanced Heart Bond 💖 (72% - 82%)
        tier3: {
            mystery: [
                (inviter, pName, aMental, bMental, score) => `The mental frequency (%${score}) between ${inviter} (${aMental}) and ${pName} (${bMental}) presents a mature equilibrium that honors each other's boundaries and freedom. Even when you do not originate from the exact same mold, you open fresh windows for each other to discover hidden perspectives.`,
                (inviter, pName, aMental, bMental, score) => `The mental interaction (%${score}) between ${inviter} (${aMental}) and ${pName} (${bMental}) is a meeting of two strong, independent minds rooted in mutual respect. While you may see different facets of truth, listening to one another enriches your world.`,
                (inviter, pName, aMental, bMental, score) => `Your mental wavelength (%${score}) reflects a mature companionship that never constrains, but rather watches each other’s back on your respective paths. ${inviter}'s stance of ${aMental} brings fresh perspective, while your intellect infuses a revitalizing breeze.`
            ],
            balance: [
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Your emotional resonance (%${emoScore}) and Shadow Self balance (%${shadowScore}) symbolize the deep value placed on personal boundaries. ${inviter}'s attitude of ${aHeartDesc} offers both a safe distance and refuge when needed. Meanwhile, your Telepathic Intuition (%${telScore}) brings smiles by catching identical thoughts simultaneously.`
                    : `Your emotional resonance (%${emoScore}) indicates that respect and trust form the bedrock of your connection. ${inviter}'s posture of ${aHeartDesc} creates a wise harbor during turbulent times; respecting personal space makes your shared moments far more sacred.`,
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Your emotional frequency (%${emoScore}) and shadow balance (%${shadowScore}) point to a durable affection that brews slowly over time. ${inviter}'s quality of ${aHeartDesc} fosters honest presence without burdensome expectations, while Telepathy (%${telScore}) reminds you of each other at vital moments.`
                    : `Your emotional balance (%${emoScore}) reveals a calm, unpretentious atmosphere of trust. ${inviter}'s demeanor of ${aHeartDesc} manages to quiet the waters rather than reacting rashly when waves rise.`,
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Your emotional resonance (%${emoScore}) and approach to shadow facets (%${shadowScore}) establish an authentic ground of mutual acceptance. ${inviter}'s aura of ${aHeartDesc} allows you to talk through hurts without escalation, while telepathic awareness (%${telScore}) reminds that silence is also communication.`
                    : `Your emotional alignment (%${emoScore}) thrives on mutual understanding. ${inviter}'s approach of ${aHeartDesc} feels like that refreshing breath of stillness you search for in the midst of crowded days.`
            ],
            prophecy: [
                (elemName, spScore) => `Your spiritual gravity (%${spScore}) and the gentle vibration of ${elemName} indicate an unforced, enduring companionship built across time. When you embrace each other as you are rather than trying to change one another, you light a shared lantern in the dark.`,
                (elemName, spScore) => `The balanced breeze of ${elemName} (%${spScore}) shows that this bond takes its time to take deep root. As long as you accompany one another while preserving individual sanctuaries, this circle of trust will only solidify over the years.`,
                (elemName, spScore) => `Your spiritual frequency (%${spScore}) conveys that your connection flows naturally, like water finding its riverbed. As long as you celebrate differences rather than attempting to mend them, this friendship remains an unshakable haven.`
            ]
        },

        // Tier 4: Opposite Poles Frequency ⚡ (< 72%)
        tier4: {
            mystery: [
                (inviter, pName, aMental, bMental, score) => `The mental dynamic (%${score}) between ${inviter} (${aMental}) and ${pName} (${bMental}) mirrors the fascinating encounter of two contrasting worlds. By walking paths unfamiliar to each other, you cultivate an enriching dynamic that teaches you to view existence from unexpected angles.`,
                (inviter, pName, aMental, bMental, score) => `Like fire and water, or night and dawn, opposite poles create the universe’s most electrifying attraction. The mental contrast (%${score}) between ${inviter} (${aMental}) and ${pName} (${bMental}) carries a vibrant spark that expands each other’s horizon in every conversation.`,
                (inviter, pName, aMental, bMental, score) => `Your mental frequency (%${score}) offers an abundant field of discovery fueled by distinct polarities. The ${aMental} essence of ${inviter} and your style of thought gently challenge one another while unlocking unseen gateways of perception.`
            ],
            balance: [
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Your emotional resonance (%${emoScore}) and Shadow Self contrast (%${shadowScore}) act as a mirror revealing blind spots you could not see alone. Combined with ${inviter}'s nature of ${aHeartDesc}, your distinct temperaments possess a depth that fosters mutual growth through mindful communication.`
                    : `Your emotional resonance (%${emoScore}) symbolizes the profound depth that opposite poles bring to one another. Though ${inviter}'s character of ${aHeartDesc} and your world walk different pathways, empathetic curiosity turns these contrasts into powerful revelations.`,
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `Your emotional interaction (%${emoScore}) and shadow dynamic (%${shadowScore}) stretch each other's comfort zones in healthy ways. ${inviter}'s presence of ${aHeartDesc} reminds you of missing facets, while Telepathic Intuition (%${telScore}) constructs an invisible bridge across differences.`
                    : `Your emotional frequency (%${emoScore}) reflects the rich tapestry of contrast. ${inviter}'s temperament of ${aHeartDesc} shines a light onto corners of your heart you rarely visited, nurturing inner expansion.`,
                (inviter, aHeartDesc, emoScore, shadowScore, telScore, isDeep) => isDeep
                    ? `This opposite-pole harmony in your emotional worlds (%${emoScore}) and shadow exploration (%${shadowScore}) teaches unconditional listening and patience. ${inviter}'s approach of ${aHeartDesc} extends a gentle lantern to soften sharp corners.`
                    : `Your emotional balance (%${emoScore}) carries the transformative power of contrasting polarities. ${inviter}'s presence of ${aHeartDesc} and your emotions whisper fresh life lessons to one another.`
            ],
            prophecy: [
                (elemName, spScore) => `Your spiritual frequency (%${spScore}) and the mystical contrast of ${elemName} whisper that you serve as transformative teachers in each other’s lives. When you approach differences with curiosity and patience, this polarity evolves into an unforgettable voyage of discovery.`,
                (elemName, spScore) => `The resonance between the element of ${elemName} and your spirits (%${spScore}) symbolizes a rare encounter of complementary opposites. Approaching this dynamic without wanting to change the other gives birth to a lifelong bond of fascination.`,
                (elemName, spScore) => `Your spiritual gravity (%${spScore}) shows that the universe brought you together to illuminate the pieces you each overlook. When you choose to listen unmasked without imposing rigid certainties, this contrast becomes your greatest awakening.`
            ]
        }
    }
};
