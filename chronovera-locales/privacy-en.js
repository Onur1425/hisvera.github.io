window.CHRONOVERA_I18N = window.CHRONOVERA_I18N || {};
window.CHRONOVERA_I18N.en = window.CHRONOVERA_I18N.en || {};

window.CHRONOVERA_I18N.en.privacy = {
    meta_title: 'Privacy Policy | ChronoVera',
    meta_description: 'ChronoVera official privacy policy. User privacy, local data storage (sandbox), hardware permissions, sub-processors, and KVKK/GDPR compliance commitment.',
    badge: 'Official Privacy and Confidentiality Commitment',
    title: 'ChronoVera: Privacy Policy',
    date: 'Last Updated: November 21, 2026 // Effective Date: November 21, 2026',
    highlight_html: `At <strong>HisVera Studio</strong> ("HisVera", "we", or "developer"), we uphold the highest respect for our players' digital privacy and peace of mind.
                ChronoVera is architected against the constant tracking, data brokerage, and intrusive ad noise of the modern mobile world as <strong>"A Safe Digital Sanctuary That Stops Time."</strong>
                Our mobile game and promotional pages never collect unnecessary personal data, never covertly profile you, and never sell your data to third parties.`,
    toc: {
        group1: 'Part I: ChronoVera Mobile Game',
        group2: 'Part II: Web Platform & Submissions',
        group3: 'Part III: Security, Retention & Rights',
        sec1: '1. Overview, Philosophy and Scope',
        sec2: '2. What Information Do We Collect (and Not Collect)?',
        sec3: '3. Device Permissions and Hardware Transparency Matrix',
        sec4: '4. Local Storage, On-Device Backup & System Backups',
        sec5: '5. Revenue Model, Rewarded Ads (ATT) and Purchases',
        sec6: '6. Ethical Design and Digital Peace Manifesto',
        sec7: '7. Leaderboards, Online Mode, Crash Logs & External Links',
        sec8: '8. Waitlist and Web Contact Forms',
        sec9: '9. Browser Storage, Cookies and Web Analytics (GA4)',
        sec10: '10. Third-Party Service Providers and Data Transfers',
        sec11: '11. Data Security, RLS Protection and Retention Periods',
        sec12: "12. Children's Privacy and Family Protection (COPPA)",
        sec13: '13. Guide to Permanently Deleting Data and Progress',
        sec14: '14. Limitation of Liability and Publisher Disclaimer',
        sec15: '15. KVKK & GDPR Rights, Data Controller and Contact'
    },
    parts: {
        p1_badge: 'Part I // Mobile Game (iOS & Android)',
        p1_title: 'Part I: ChronoVera Mobile Game',
        p1_desc: 'Covers the full release distributed via Apple App Store and Google Play Store, Closed Beta / TestFlight builds, and all in-game modules.',
        p2_badge: 'Part II // Web Platform & Submissions',
        p2_title: 'Part II: Website, Waitlist and Contact',
        p2_desc_html: 'Governs the <a href="chronovera.html" style="color: var(--cv-gold-light); text-decoration: underline;">ChronoVera promotional page</a>, Closed Beta invitations, and ChronoVera contact submissions on the main site.',
        p3_badge: 'Part III // Sub-Processors, Security & Rights',
        p3_title: 'Part III: Security, Retention and Your Legal Rights',
        p3_desc: 'Explains third-party infrastructures, data security safeguards, permanent deletion methods, and request channels under KVKK and GDPR.'
    },
    sections: {
        sec1: `<h2>1. Overview, Philosophy and Scope</h2>
                <p>
                    This Privacy Policy covers both the full release and Closed Beta / TestFlight early access builds of the <strong>ChronoVera</strong> mobile game developed by HisVera Studio and distributed through the <strong>Apple App Store</strong> (iOS / iPadOS) and <strong>Google Play Store</strong> (Android), as well as the official promotional web page (<a href="chronovera.html" style="color: var(--cv-gold); text-decoration: underline;">ChronoVera Promotional Page</a>) and web contact channels.
                </p>
                <p>
                    By downloading or installing ChronoVera, or by submitting the closed beta waitlist or contact form through our website, you accept the principles explained in this document. Our purpose is to allow players to focus purely on art and the philosophical experience of time without privacy concerns.
                </p>`,
        sec2: `<h2>2. What Information Do We Collect (and Not Collect)?</h2>
                <p>
                    ChronoVera strictly adheres to the principle of <strong>Data Minimization</strong> under Turkish Personal Data Protection Law No. 6698 (KVKK) and the European Union General Data Protection Regulation (GDPR):
                </p>

                <table class="policy-table">
                    <thead>
                        <tr>
                            <th>Data Type</th>
                            <th>Collection Status</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Personal Identity Data</strong> (Full name, national ID, phone, address)</td>
                            <td style="color: #ef4444; font-weight: 700;">NEVER COLLECTED</td>
                            <td>There is no account registration, social media sign-in, or user profile requirement inside the game.</td>
                        </tr>
                        <tr>
                            <td><strong>Camera, Microphone, GPS Location, Contacts</strong></td>
                            <td style="color: #ef4444; font-weight: 700;">NEVER ACCESSED</td>
                            <td>Our game never requests or accesses any of these device hardware permissions.</td>
                        </tr>
                        <tr>
                            <td><strong>Game Progress, Scores and Preferences</strong></td>
                            <td style="color: #10b981; font-weight: 700;">LOCAL STORAGE ONLY</td>
                            <td>All 24 story chapters, ChronoMaze labyrinth progress, Wheels of Time (Zaman Çarkları) high scores, Time Garden items, unlocked auras, collected crystals, and audio/haptic/effect settings are stored exclusively in your device's secure sandbox memory.</td>
                        </tr>
                        <tr>
                            <td><strong>Time Capsules Letters, Time Mirror and Partner Name</strong></td>
                            <td style="color: #10b981; font-weight: 700;">ON-DEVICE ONLY</td>
                            <td>The titles and contents of letters you write to the future in Time Capsules, your Time Mirror reflections, and any partner name you enter on screen for two-player mode belong solely to you and are never transmitted to our servers.</td>
                        </tr>
                        <tr>
                            <td><strong>Haptic Hardware Interaction</strong></td>
                            <td style="color: #38bdf8; font-weight: 700;">INSTANT PHYSICAL RESPONSE</td>
                            <td>Your device's vibration engine is used solely to convey synchronized heartbeat pulses; it generates or stores no biometric data.</td>
                        </tr>
                    </tbody>
                </table>`,
        sec3: `<h2>3. Device Permissions and Hardware Transparency Matrix</h2>
                <p>
                    In accordance with Apple App Store Review Guidelines and Google Play User Data Policies, ChronoVera's exact usage of device hardware is transparently listed below:
                </p>

                <table class="policy-table">
                    <thead>
                        <tr>
                            <th>Device Hardware / Permission</th>
                            <th>Status</th>
                            <th>Purpose and Security Boundary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Touchscreen (Multi-Touch)</strong></td>
                            <td style="color: #10b981; font-weight: 700;">CORE GAME MECHANIC</td>
                            <td>Calculates single or dual touch coordinates (X, Y) in real time to drive resonance between the two souls. Never generates, stores, or transmits biometric data (such as fingerprints).</td>
                        </tr>
                        <tr>
                            <td><strong>Haptic Vibration Engine (Vibration)</strong></td>
                            <td style="color: #38bdf8; font-weight: 700;">TACTILE FEEDBACK</td>
                            <td>Simulates live heartbeat cadence based on the distance between touch points. Saves no data outside momentary hardware output.</td>
                        </tr>
                        <tr>
                            <td><strong>Audio Hardware (Speaker / Headphones)</strong></td>
                            <td style="color: #38bdf8; font-weight: 700;">AUDIO OUTPUT</td>
                            <td>Plays 432 Hz Solfeggio frequencies and ambient soundscapes. Microphone permission is never requested and ambient audio is never recorded.</td>
                        </tr>
                        <tr>
                            <td><strong>Network / Internet Access (Network State)</strong></td>
                            <td style="color: #f59e0b; font-weight: 700;">OPTIONAL</td>
                            <td>Used strictly for optional rewarded video playback, store purchase/license verification, read-only Daily Enigma fetching, or optional platform gaming services (Game Center / Google Play Games). <strong>The game is 100% playable offline.</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Optional Local File Backup (System File Picker)</strong></td>
                            <td style="color: #f59e0b; font-weight: 700;">USER-TRIGGERED</td>
                            <td>When the user chooses to back up or restore progress to their own device from Settings, the operating system's native file picker or share sheet opens solely for the selected backup file. Broad photo gallery or storage scanning permission is never requested.</td>
                        </tr>
                        <tr>
                            <td><strong>Camera, Microphone, GPS / Location, Contacts, Photo Library</strong></td>
                            <td style="color: #ef4444; font-weight: 700;">NEVER REQUESTED / ACCESSED</td>
                            <td>ChronoVera requires none of these sensitive permissions and strictly never requests them from the operating system (Android &amp; iOS).</td>
                        </tr>
                    </tbody>
                </table>`,
        sec4: `<h2>4. On-Device Local Data Storage (Sandbox), Optional Device Backup and System Backups</h2>
                <p>
                    ChronoVera is architected to operate completely without an internet connection (on airplanes, subways, or offline environments).
                    All game data listed below is stored in your device's local game storage (<code>AsyncStorage</code>):
                </p>
                <ul>
                    <li>Completed 24 story chapters, ChronoMaze labyrinth stages, and Wheels of Time high scores,</li>
                    <li>Collected crystals, Time Garden plants, unlocked/equipped auras, and onboarding tour status,</li>
                    <li>Personal letters saved inside Time Capsules and your haptic, audio, and cosmic effect preferences.</li>
                    <li><strong>User-Controlled Local Backup (Settings → Back Up / Restore to Your Device):</strong> From inside the in-game <strong>Settings</strong> menu, players may voluntarily export their game data as a local backup file <strong>directly onto their own device</strong> (e.g., Files / Downloads) and select that same file later to restore progress after switching or resetting a device. This backup file is never transferred to HisVera Studio servers; the developer cannot access it, holds no copy of it, and cannot recover it if lost. Safeguarding, securing, and keeping this exported backup file private from third parties is solely the user's responsibility.</li>
                </ul>
                <p>
                    This data is isolated inside the operating system's <em>Application Sandbox</em>; no other app on your device can access ChronoVera's data.
                    If operating-system-level cloud backup (<strong>Apple iCloud Backup</strong> or <strong>Google Android Auto Backup</strong>) is enabled on your device, local game saves may be encrypted and backed up by your device to your personal Apple/Google cloud account. The developer cannot access or view those personal backups.
                </p>`,
        sec5: `<h2>5. Revenue Model, Optional Rewarded Ads (ATT) and Store Purchases</h2>
                <p>
                    Under HisVera's ethical design manifesto, ChronoVera contains <strong>zero forced advertisements</strong> (no mandatory banners or interstitial ads popping up to disrupt gameplay).
                </p>
                <ul>
                    <li><strong>Optional Rewarded Video:</strong> Once 2 rewind charges are spent in a chapter, the player may either restart the chapter from the beginning free of charge or voluntarily watch a short video to resume from where they paused.</li>
                    <li><strong>Ad Privacy and Apple ATT / GDPR Compliance:</strong> For optional rewarded video delivery, Google AdMob or industry-standard trusted SDKs may be utilized. By default, ChronoVera does not track players across other apps or websites and serves <strong>non-personalized</strong> ads. The device advertising identifier (IDFA / GAID) is only accessed if the user grants explicit consent through iOS <em>App Tracking Transparency (ATT)</em> or the EU/GDPR consent prompt; when declined or when no ad is watched, no advertising identifier is processed.</li>
                    <li><strong>Cosmetic Purchases and ChronoPass:</strong> In-game light auras, Time Garden seeds, and ChronoPass subscriptions are processed exclusively through the official <strong>Apple App Store (StoreKit)</strong> and <strong>Google Play Store (Billing API)</strong> payment gateways. Your credit card or financial details are never seen or stored by the developer.</li>
                </ul>`,
        sec6: `<h2>6. Ethical Design and Digital Peace Manifesto</h2>
                <p>
                    Against manipulative design models (Dark Patterns) widespread across the modern mobile industry, we make clear commitments to our players:
                </p>
                <ul>
                    <li><strong>No Dark Patterns:</strong> Fake countdown timers, misleading urgency buttons, or hidden subscription traps designed to pressure purchases against your will never appear in ChronoVera.</li>
                    <li><strong>No FOMO Exploitation:</strong> ChronoVera never punishes you for stepping away or bombards you with stress-inducing notifications.</li>
                    <li><strong>No Covert Background Tracking:</strong> Location, microphone, or cross-app activity is strictly never monitored in the background.</li>
                </ul>`,
        sec7: `<h2>7. Leaderboards, Online Mode, Crash Logs &amp; External Links</h2>
                <p>
                    Our transparency commitments regarding optional technical features that may be active in the full release or future updates of ChronoVera are as follows:
                </p>
                <ul>
                    <li><strong>Leaderboards, Achievements and Cloud Save (Apple Game Center / Google Play Games):</strong> Future updates may offer optional leaderboards and achievements for Wheels of Time or chapter scores. When you choose to participate with your own Apple/Google gaming profile, only your player alias and game score are processed under the respective platform's privacy policy; you may disable this feature anytime in your device settings or gaming profile.</li>
                    <li><strong>Daily Enigma &amp; Potential Online Co-op:</strong> When an internet connection is available, Daily Enigma fetches only a read-only daily philosophical question and transmits zero user identity data. If room-code online two-player co-op is introduced in a future update, only live touch coordinates (X, Y) and resonance state will be transiently relayed during the session; voice, text chat, or location history will never be stored.</li>
                    <li><strong>Anonymous Crash and Error Logs:</strong> Only if enabled in your device's operating-system privacy settings may anonymized crash reports be delivered via Apple or Google to the developer console to improve game stability.</li>
                    <li><strong>In-Game External Links:</strong> Tapping shortcuts such as <em>HisVera Studio</em> or <em>Digital Sanctuaries</em> (<a href="index.html" style="color: var(--cv-gold); text-decoration: underline;">hisvera.com</a>) opens your device's external web browser, where the visited website's own privacy terms apply.</li>
                </ul>`,
        sec8: `<h2>8. Waitlist and Web Contact Forms</h2>
                <p>
                    Through our official website, the following information is collected strictly when voluntarily submitted by you via two forms:
                </p>
                <ul>
                    <li><strong><a href="chronovera.html#bekleme-listesi" style="color: var(--cv-gold); text-decoration: underline;">Closed Beta Waitlist</a>:</strong> To prepare your personalized pass and send the correct platform build access, we record your <strong>Name</strong>, <strong>Email address</strong>, <strong>Platform preference</strong> (Android Google Play Beta / iOS Pre-Registration &amp; TestFlight), <strong>Experience mode preference</strong> (Solo / Resonance Duo), and generated <strong>Pass Number</strong> (<code>#CV-2026-XXXX</code>).</li>
                    <li><strong><a href="index.html#iletisim" style="color: var(--cv-gold); text-decoration: underline;">Web Contact Form</a> (when ChronoVera is selected):</strong> To respond to your support inquiry, feedback, or beta questions, we record your <strong>Name / handle</strong>, <strong>Email address</strong>, <strong>Selected topic</strong>, <strong>Message text</strong>, website <strong>Language preference</strong> (TR/EN), and automatically generated <strong>Ticket Code</strong> (<code>#CV-2026-XXXX</code>).</li>
                    <li><strong>Strict Purpose Limitation:</strong> This data is used exclusively to send beta invitations, early-access notices, or replies to your support requests; under no circumstances is it added to commercial spam newsletters or sold/rented to ad networks or third-party data brokers.</li>
                </ul>`,
        sec9: `<h2>9. Browser Storage, Cookies and Web Analytics (Google Analytics GA4)</h2>
                <p>
                    ChronoVera's promotional and legal web pages never use personalized advertising cookies to target visitors with ads. Only the following mechanisms are used for core web functionality and aggregated visitor statistics:
                </p>
                <ul>
                    <li><strong>Browser Local Storage (<code>localStorage</code> / <code>sessionStorage</code>):</strong> After registering for the waitlist, your browser stores <code>chronovera_pass</code> locally so you can continue viewing your Temporal Pass ticket, along with <code>sessionStorage</code> state for managing the intro animation in the same session. You may clear these anytime via browser settings.</li>
                    <li><strong>Web Analytics (Google Analytics GA4):</strong> Google Analytics (GA4) analytics cookies are used solely on our web pages to measure overall visitor traffic and page performance in an anonymized/aggregated manner <em>(strictly never used inside the offline mobile game)</em>. Visitors can block analytics cookies anytime through browser settings or cookie controls.</li>
                    <li><strong>External Web Resources (CDN):</strong> Typography (Google Fonts), icons (Font Awesome / Cloudflare CDN), and form submission transport (Supabase JS CDN) are loaded by your browser over encrypted HTTPS. These servers may temporarily process standard HTTP connection headers (such as IP address and user agent) as required for technical network delivery.</li>
                </ul>`,
        sec10: `<h2>10. Third-Party Service Providers (Sub-Processors) and International Data Transfers</h2>
                <p>
                    To deliver ChronoVera services reliably and securely, we rely solely on the reputable industry-standard providers listed below. Your offline mobile game saves and Time Capsule letters are never transferred to these servers:
                </p>

                <table class="policy-table">
                    <thead>
                        <tr>
                            <th>Provider / Sub-Processor</th>
                            <th>Scope of Use</th>
                            <th>Processed Data &amp; Safeguards</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Apple Inc.</strong> (App Store, StoreKit, TestFlight, Game Center)</td>
                            <td>iOS / iPadOS Game Distribution &amp; Payments</td>
                            <td>Store downloads, in-app purchase verification, and user-enabled optional leaderboards / anonymized crash diagnostics.</td>
                        </tr>
                        <tr>
                            <td><strong>Google LLC</strong> (Google Play, Billing, Play Games, Google Analytics GA4)</td>
                            <td>Android Game Distribution, Payments &amp; Web Analytics</td>
                            <td>Store downloads, purchase verification, closed beta access list, user-enabled optional leaderboards, and aggregated web-only traffic measurement (GA4).</td>
                        </tr>
                        <tr>
                            <td><strong>Google AdMob</strong> <em>(Optional)</em></td>
                            <td>Voluntary Rewarded Video Only</td>
                            <td>Activates strictly when the player chooses to watch a rewarded video; non-personalized ads are preferred by default.</td>
                        </tr>
                        <tr>
                            <td><strong>Supabase Inc.</strong></td>
                            <td>Web Waitlist &amp; Web Contact Forms</td>
                            <td>Stores only the name, email, platform/topic, and message records submitted through web forms in an encrypted database and triggers notifications.</td>
                        </tr>
                        <tr>
                            <td><strong>Zoho Corporation</strong> (Zoho Mail)</td>
                            <td>Official Email Communication</td>
                            <td>Receiving form alerts and delivering beta invitations and support responses via <a href="mailto:chronovera@hisvera.com" style="color: var(--cv-gold); text-decoration: underline;">chronovera@hisvera.com</a>.</td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    Servers operated by the cloud, store, and email providers listed above may be located in the European Union (EU) or the United States (US). Waitlist and contact data you knowingly submit via web forms is transferred in accordance with KVKK Article 9 and GDPR safeguards using 256-bit SSL/TLS encryption and data minimization.
                </p>`,
        sec11: `<h2>11. Data Security, RLS Protection and Retention / Destruction Periods</h2>
                <p>
                    Technical and administrative safeguards are enforced to protect the confidentiality of the limited web data you share:
                </p>
                <ul>
                    <li><strong>Transport and Access Security:</strong> Our web pages and Supabase data transmissions are encrypted with <strong>256-bit HTTPS/TLS</strong>. Strict <strong>Row Level Security (RLS)</strong> policies are enforced on database tables: web visitors can only append new entries (<code>INSERT</code>) and can never read or modify any other user's record.</li>
                    <li><strong>In-Game Mobile Data:</strong> Because all game saves remain locally on your device, they persist only until you reset or uninstall the game and are never held on our servers.</li>
                    <li><strong>Waitlist Records:</strong> Retained until the beta test and corresponding store launch phase conclude; permanently deleted thereafter or within no later than <strong>48 hours</strong> upon your request.</li>
                    <li><strong>Web Contact Messages:</strong> Retained for at most <strong>12 months</strong> after your support or feedback ticket is resolved for legal audit purposes, then periodically destroyed, or deleted earlier upon request.</li>
                </ul>`,
        sec12: `<h2>12. Children's Privacy and Family Protection (COPPA &amp; GDPR-K Compliant)</h2>
                <p>
                    ChronoVera is a philosophical and meditative art experience free of violence, gambling, horror, or adult content.
                    We do not knowingly collect any personal data from children under 13 years of age (or under 16 where required by local law).
                </p>
                <p>
                    Parents can comfortably manage screen-time and purchase limits on their children's mobile devices via Apple Screen Time or Google Family Link. If you believe data from a child was inadvertently submitted, please contact us at <a href="mailto:chronovera@hisvera.com" style="color: var(--cv-gold); text-decoration: underline;">chronovera@hisvera.com</a> and the record will be deleted immediately.
                </p>`,
        sec13: `<h2>13. Guide to Permanently Deleting Game Data and Records</h2>
                <p>
                    In alignment with Apple App Store Review Guidelines and Google Play User Data Policies, our users hold full control to permanently erase all data at any time:
                </p>
                <ul>
                    <li><strong>One-Tap In-Game Reset:</strong> Inside ChronoVera, open <strong>Settings &gt; Data &amp; Progress &gt; "Reset All Progress"</strong> to immediately clear all crystals, chapters, the Time Garden, and Time Capsules from your device.</li>
                    <li><strong>Permanent Removal via Device Settings or Uninstallation:</strong> Navigate to your device's <em>Settings &gt; Apps &gt; ChronoVera &gt; Storage &gt; "Clear Data"</em> or uninstall the game directly from your device. This immediately and irreversibly deletes all local traces from the app sandbox. <em>(Note: If you manually exported a backup file into your own device folders from Settings, you may also manually delete that standalone backup file from your device's Files/Downloads folder after uninstalling.)</em></li>
                    <li><strong>Deleting Waitlist &amp; Web Contact Records:</strong> If you signed up for the waitlist or submitted a contact form on our website and wish to have your email permanently purged from our database, simply send a short email with the subject <em>"Record Deletion"</em> from your registered address to <a href="mailto:chronovera@hisvera.com" style="color: var(--cv-gold); text-decoration: underline;">chronovera@hisvera.com</a>. Your request will be fulfilled and your record permanently destroyed within at most <strong>48 hours</strong>.</li>
                </ul>`,
        sec14: `<h2>14. Limitation of Liability and Publisher Disclaimer</h2>
                <p>
                    The ChronoVera mobile game and official promotional web pages are provided to users on an <strong>"as-is"</strong> and <strong>"as-available"</strong> basis. To the maximum extent permitted by applicable law, <strong>HisVera Studio</strong> and the producer/developer (<strong>Onur Öztürk</strong>) shall not be held liable for any adverse outcomes or damages arising from:
                </p>
                <ul>
                    <li><strong>General Usage and Technical Issues:</strong> HisVera Studio and the producer cannot be held liable for any direct, indirect, incidental, special, punitive, or pecuniary/non-pecuniary damages arising from the use of or inability to use the game or website, unexpected software/hardware incompatibilities, or any adverse circumstances.</li>
                    <li><strong>Device, System and Local Backup Data Loss:</strong> The producer bears zero responsibility for data loss or privacy exposure resulting from hardware or software failures on the user's device, operating system updates, insufficient storage, third-party malware, loss or theft of the device, or the user losing, deleting, corrupting, or sharing with third parties a local backup file exported from Settings to their own device.</li>
                    <li><strong>Third-Party Platforms, Networks and Force Majeure:</strong> HisVera Studio and the producer cannot be held responsible for interruptions, delays, or adverse issues attributable to the Apple App Store, Google Play Store, Apple iCloud/Google backup services, optional payment/ad providers, external web links, internet infrastructure outages, unauthorized third-party cyber interference, or force majeure events.</li>
                    <li><strong>User-Created Local Content:</strong> Legal and personal responsibility for all text and content voluntarily entered by the player into Time Capsules, Time Mirror, or partner name fields rests exclusively with the user.</li>
                </ul>`,
        sec15: `<h2>15. KVKK &amp; GDPR Rights, Data Controller, Contact and Effective Date</h2>
                <p>
                    Under Article 11 of Turkish Personal Data Protection Law No. 6698 (KVKK) and the EU General Data Protection Regulation (GDPR), you have the following rights:
                </p>
                <ul>
                    <li>To learn whether your personal data is being processed and request information and a copy thereof,</li>
                    <li>To learn the purpose of processing and whether data is used accordingly, and to know third parties domestically or abroad to whom data is transferred,</li>
                    <li>To request correction of incomplete or inaccurate data, and to request erasure, destruction (right to be forgotten), or restriction of processing,</li>
                    <li>To withdraw consent in optional consent-based processes, request data portability, and lodge a complaint with the competent data protection authority (KVKK Board in Türkiye / relevant supervisory authority in the EU).</li>
                </ul>
                <p>
                    Our official publisher, data controller details, and inquiry channels for Apple App Store and Google Play are listed below:
                </p>
                <ul>
                    <li><strong>Official Data Controller &amp; Publisher (Apple Developer):</strong> Onur Öztürk / HisVera Studio</li>
                    <li><strong>ChronoVera Support &amp; Contact Email:</strong> <a href="mailto:chronovera@hisvera.com" style="color: var(--cv-gold); text-decoration: none;">chronovera@hisvera.com</a></li>
                    <li><strong>General Web Contact:</strong> <a href="index.html#iletisim" style="color: var(--cv-gold); text-decoration: underline;">Web Contact Menu (hisvera.com/#iletisim)</a></li>
                    <li><strong>Response Time:</strong> All statutory information and deletion requests are reviewed and answered in writing free of charge within at most 30 days (48 hours for waitlist and contact record deletions).</li>
                </ul>
                <p>
                    <strong>Policy Updates and Effective Date:</strong> This privacy policy may be updated as new ChronoVera features (such as optional leaderboards or online modes) are introduced or laws evolve. Updates take effect upon publication, and material changes are announced via the date notice at the top of this page.
                </p>`
    }
};
