// Red Panda Browser
// Author: JyanD
// Based on: https://github.com/intika/librefox
//      Big props to them and all others on which Librefox/Privafox was based

// any malicious features added by Mozilla after version 64.0.0 

// Homepage, change as desired
lockPref("browser.startup.homepage", "https://searx.info/") ;
lockPref("startup.homepage_welcome_url", "about:config") ;

// "Phoning Home" // just search "report" and "sync" there's a good bit of work to do

// Mozilla's "tracking protection" whitelists a good amount of nasty sites
// When enabled, sending a "Do Not Track" request (which at best has no effect and at worst further exposes the user) is mandatory.
// Blocking "trackers" should be the handled by extensions.
lockPref("privacy.socialtracking.block_cookies.enabled", false) ;
lockPref("privacy.trackingprotection.cryptomining.enabled", false) ;
lockPref("privacy.trackingprotection.origin_telemetry.enabled", false) ;
lockPref("privacy.trackingprotection.socialtracking.enabled", false) ;
lockPref("urlclassifier.features.socialtracking.annontate.blacklistTables", "") ;
lockPref("urlclassifier.features.socialtracking.whitelistTables", "") ;
lockPref("urlclassifier.features.socialtracking.blacklistTables", "") ;
lockPref("urlclassifier.features.socialtracking.whitelistTables", "") ;
lockPref("urlclassifier.trackingAnnotationTable", "") ;
lockPref("urlclassifier.trackingAnnotationWhitelistTable", "") ;
lockPref("urlclassifier.trackingWhitelistTable", "") ;
// with the exception of fingerprinting
lockPref("privacy.trackingprotection.fingerprinting.enabled", true) ;

// Annoying-ass "Quick Find"
lockPref("accessibility.typeaheadfind", false) ;

// Anything having to do with recommendations
lockPref("extensions.htmlaboutaddons.recommendations.enabled", false) ;
lockPref("marionette.prefs.recommended", false) ;
lockPref("extensions.recommendations.privacyPolicyUrl", "") ;
lockPref("extensions.recommendations.themeRecommendationUrl", "") ;

// New sneaky Pocket spam
lockPref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includePocket", false) ;
lockPref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.topsites", false) ;
lockPref("services.sync.prefs.sync.browser.newtabpage.activity-stream.topSitesRows", false) ;
lockPref("browser.newtabpage.activity-stream.pocketCta", "") ;
lockPref("browser.newtabpage.activity-stream.feeds.topsites", false) ;
lockPref("browser.newtabpage.activity-stream.feeds.default.sites", "") ;
lockPref("browser.newtabpage.activity-stream.feeds.improvesearch.topSiteSearchShortcuts", false) ;

// New sneaky telemtry methods
lockPref("browser.newtabpage.activity-stream.telemetry.structuredIngestion", false) ;
lockPref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "") ;
lockPref("browser.newtabpage.activity-stream.telemetry.ut.events", false) ;
lockPref("browser.urlbar.eventTelemetry.enabled", false) ;
lockPref("security.app_menu.recordEventTelemetry", false) ;
lockPref("security.certerrors.recordEventTelemetry", false) ;
lockPref("security.identitypopup.recordEventTelemetry", false) ;
lockPref("security.protectionspopup.recordEventTelemetry", false) ;
lockPref("telemetry.origin_telemetry_test_mode.enabled", false) ;
lockPref("toolkit.telemtryldebugSlowSql", false) ;
lockPref("toolkit.ecosystemtelemtry.enabled", false) ;
lockPref("browser.ipcBatchTimeout", 0) ;
lockPref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false) ;
lockPref("toolkit.telemetry.testing.overrideProductsCheck", false) ;
lockPref("toolkit.telemetry.geckoview.streaming", false) ;
lockPref("toolkit.telemetry.geckoview.batchDurationMS", 0) ;
lockPref("services.sync.prefs.sync.app.shield.optoutstudies.enabled", true) ;
lockPref("services.sync.prefs.sync.browser.crashReports.unsubmittedCheck.autoSubmit2", false) ;

// Extensions
lockPref("extensions.legacy.enabled", true) ;
lockPref("extensions.screenshots.disabled", true) ;
lockPref("extensions.update.interval", 0) ;
lockPref("extensions.webextensions.background-delayed-startup", false) ;
lockPref("extensions.webextensions.enablePerformanceCounters", true) ;

// Everything below is from librefox's mozilla.cfg 

// Privafox-Firefox Version : 2.1
// Privafox-Firefox : Firefox settings for a better security, privacy and performances
// Mozilla.cfg      : Locking firefox settings for security, privacy & prevent settings changes 
// Autor            : Intika - intikadev (at) gmail.com
// Donation         : Paypal : intikadev (at) gmail.com
// Site             : https://github.com/intika/privafox-firefox
// Based on         : Ghacks-user.js (https://github.com/ghacksuserjs/ghacks-user.js)
//                    User.js (https://github.com/pyllyukko/user.js/)  
//                    PrivaConf (https://addons.mozilla.org/en-US/firefox/addon/privaconf/)
//                    Big thanks to all of them
// Documentation .............. :
// "Section"        : Description of the settings section separated by "----"
// "Bench Diff"     : Impact on the performances of firefox can be a gain or loss of performance 
//                    +100/5000 stand for 2% gained performance and -1500/5000 stand for -30% performance loss
//                    Performance can be tested here : https://intika.github.io/octane/
// "Pref"           : Preference/Settings name and or description followed by links or documentations
//                    and some time explanation why the setting is commented and ignored.
// "lockPref"       : Locked preference can not be changed on firefox, nor by extensions, can only be changed here
//                    lockPref is used to lock preferences so they cannot be changed through the GUI or about:config. 
//                    In many cases the GUI will change to reflect this, graying out or removing options. Appears 
//                    in about:config as "locked". Some config items require lockPref to be set, such as app.update.enabled. 
//                    It will not work if it set with just pref.
// "pref"           : Sets the preference as if a user had set it, every time you start the browser. So users can make changes, 
//                    but they will be erased on restart. If you set a particular preference this way, 
//                    it shows up in about:config as "user set". 
// "defaultPref"    : Defaulting : Is used to alter the default value, though users can set it normally and their changes will 
//                    be saved between sessions. If preferences are reset to default through the GUI or some other method, 
//                    this is what they will go back to. Appears in about:config as "default". 
// "clearPref"      : Can be used to "blank" certain preferences. This can be useful e.g. to disable functions 
//                    that rely on comparing version numbers. 
//
// ============================================================================================================================================
// Protection ................. :
// ==============================
//
// Pref             : Locking mozilla.cfg itself
lockPref("general.config.filename", "mozilla.cfg");
//
// ============================================================================================================================================
// Index mozilla.cfg .......... :
// ==============================
//
// -----------------------------------------------------------------------
// Section : User settings                    // Bench Diff : +0    / 5000
// Section : Defaulting Settings              // Bench Diff : ???   / 5000
// -------------------------------------------
// Section : Controversial                    // Bench Diff : +0    / 5000
// Section : Firefox Fingerprint              // Bench Diff : +0    / 5000
// Section : Locale/Time                      // Bench Diff : +0    / 5000
// Section : Ghacks-user Selection            // Bench Diff : +100  / 5000
// Section : Extensions Manager               // Bench Diff : ???   / 5000
// Section : IJWY To Shut Up                  // Bench Diff : ???   / 5000
// Section : Microsoft Windows                // Bench Diff : ???   / 5000
// Section : Firefox ESR60.x                  // Bench Diff : ???   / 5000
// -------------------------------------------
// Section : Security 1/3                     // Bench Diff : +0    / 5000
// Section : Security 2/3                     // Bench Diff : +0    / 5000
// Section : Security 3/3 (Cipher)            // Bench Diff : +0    / 5000
// -------------------------------------------
// Section : Performances 1/5                 // Bench Diff : +650  / 5000
// Section : Performances 2/5                 // Bench Diff : -800  / 5000
// Section : Performances 3/5                 // Bench Diff : -1720 / 5000
// Section : Performances 4/5                 // Bench Diff : -200  / 5000 
// Section : Performances 5/5                 // Bench Diff : -50   / 5000 
// -------------------------------------------
// Section : General Settings 1/3             // Bench Diff : +100  / 5000
// Section : General Settings 2/3             // Bench Diff : +0    / 5000
// Section : General Settings 3/3             // Bench Diff : -40   / 5000
// -------------------------------------------
// Section : Disabled - ON/OFF                // Bench Diff : ???   / 5000
// Section : Disabled - Deprecated Active     // Bench Diff : ???   / 5000
// Section : Disabled - Deprecated Inactive   // Bench Diff : +0    / 5000
// -----------------------------------------------------------------------
//
// ============================================================================================================================================
// Index local-settings.js .... :
// ==============================
//
// -----------------------------------------------------------------------
// Section : General Settings                 // Bench Diff : ++    / 5000
// -----------------------------------------------------------------------
//
// ============================================================================================================================================

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : User Settings
// Bench Diff : +0/5000
// >>>>>>>>>>>>>>>>>>>>

// Pref : Accept Only 1st Party Cookies
// http://kb.mozillazine.org/Network.cookie.cookieBehavior#1
// Blocking 3rd-party cookies breaks a number of payment gateways
// CIS 2.5.1
lockPref("network.cookie.cookieBehavior", 1);

// Pref : Cookies expires at the end of the session (when the browser closes)
// http://kb.mozillazine.org/Network.cookie.lifetimePolicy#2
// 0=until they expire (default)
// 2=until you close Firefox
// 3=for n days
lockPref("network.cookie.lifetimePolicy", 2);

// Pref : Disable Cookie Exception Button
// WARNING Bug !!! This lock the button whether its false or true  
//lockPref("pref.privacy.disable_button.cookie_exceptions", false);

// Pref : 2706: enable support for same-site cookies (FF60+)
// [1] https://bugzilla.mozilla.org/795346
// [2] https://blog.mozilla.org/security/2018/04/24/same-site-cookies-in-firefox-60/
// [3] https://www.sjoerdlangkemper.nl/2016/04/14/preventing-csrf-with-samesite-cookie-attribute/ 
lockPref("network.cookie.same-site.enabled", true); // default: true

// Pref : 2705: disable HTTP sites setting cookies with the "secure" directive (FF52+)
// [1] https://developer.mozilla.org/Firefox/Releases/52#HTTP 
lockPref("network.cookie.leave-secure-alone", true); // default: true

// Pref : 2702: set third-party cookies (i.e ALL) (if enabled, see above pref) to session-only
// and (FF58+) set third-party non-secure (i.e HTTP) cookies to session-only
// [NOTE] .sessionOnly overrides .nonsecureSessionOnly except when .sessionOnly=false and
// nonsecureSessionOnly=true. This allows you to keep HTTPS cookies, but session-only HTTP ones
// [1] https://feeding.cloud.geek.nz/posts/tweaking-cookies-for-privacy-in-firefox/
// [2] http://kb.mozillazine.org/Network.cookie.thirdparty.sessionOnly 
lockPref("network.cookie.thirdparty.sessionOnly", false); // default : false
lockPref("network.cookie.thirdparty.nonsecureSessionOnly", false); // (FF58+) // default false

// Also check "User Settings : Track Protection" for other cookies settings

// ----------------------------------------------------------------------------------------------------
// User Settings : Track Protection (Integrated disconnect.me settings like uBlock) 
// ----------------------------------------------------------------------------------------------------

// Pref : Track Protection
// Firefox now integrate a tracking protection feature (based on disconnect.me) 
// it's a light list content blocking, listing can not be edited, this feature 
// is disabled in Librefox. it's recommended to use ublock instead. 
// This feature is disabled :
// - Until it evolve and integrate at least list editing
// - Because double filtering (this + ublock) is not suitable for performances.

// Pref : Track Protection
lockPref("privacy.trackingprotection.enabled", false);

// Pref : 0425: disable passive Tracking Protection (FF53+)
// Passive TP annotates channels to lower the priority of network loads for resources 
// on the tracking protection list
// [NOTE] It has no effect if TP is enabled, but keep in mind that by default TP is 
// only enabled in Private Windows
// This is included for people who want to completely disable Tracking Protection.
// [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1170190,1141814 
lockPref("privacy.trackingprotection.annotate_channels", false);
lockPref("privacy.trackingprotection.lower_network_priority", false);
lockPref("privacy.trackingprotection.pbmode.enabled", false);

// Pref : Changing block list (Tracking protection)
// Default value "test-track-simple,base-track-digest256"
lockPref("urlclassifier.trackingTable", "");
// As tracking protection is disabled the button is disabled as well
lockPref("pref.privacy.disable_button.change_blocklist", true);

// Pref : contentblocking reportBreakage
lockPref("browser.contentblocking.reportBreakage.enabled", false);
lockPref("browser.contentblocking.reportBreakage.url", "");
lockPref("browser.contentblocking.rejecttrackers.reportBreakage.enabled", false);

// Pref : Third-party cookie ui under preferences
lockPref("browser.contentblocking.rejecttrackers.ui.enabled", false); //This hide third-party cookie ui
// Needed to lock third-party cookie ui (third-party cookies are blocked tho) 

// Pref : Disable tracking protection ui list editing under url bar popup
lockPref("browser.contentblocking.trackingprotection.control-center.ui.enabled", false); 

// Pref : Disable tracking protection ui list editing under preferences
lockPref("browser.contentblocking.trackingprotection.ui.enabled", false);

// Pref : Other CB/TP UI not needed
//lockPref("browser.contentblocking.global-toggle.enabled", false);
//lockPref("browser.contentblocking.rejecttrackers.ui.recommended", false);
//lockPref("browser.contentblocking.fastblock.ui.enabled", false);
//lockPref("browser.contentblocking.fastblock.control-center.ui.enabled", false);

// Pref : Tracking Protection Exception List
//lockPref("browser.contentblocking.allowlist.annotations.enabled", false);
//lockPref("browser.contentblocking.allowlist.storage.enabled", false);

// Pref : Disable exception button but does not work as expected.
//lockPref("pref.privacy.disable_button.tracking_protection_exceptions", false);
// This seems to only disable the button, not suitable 

// Pref : Third-party cookie ui under url bar
//lockPref("browser.contentblocking.rejecttrackers.control-center.ui.enabled", false); 
// This disable third-party cookie ui under url bar
// This is disabled to leave icon on url

// Pref : Disable TP UI
//lockPref("browser.contentblocking.ui.enabled", false); 
// Fully disable CB/TP ui, this is disabled to leave icon on url

// Pref : 0426 : Enforce Content Blocking (required to block cookies) (FF63+)
// Master switch for all content blocking features (includes tracking protection, 
// but excludes tracking annotations annotate_channels). 
//lockPref("browser.contentblocking.enabled", false); // default: true
// Other settings already regulate this section sub settings (this master switch 
// is not suitable).
// Disabled this because it is needed for blocking third party cookies 

// ----------------------------------------------------------------------------------------------------
// User Settings : Auto play settings
// ----------------------------------------------------------------------------------------------------

// Pref : 2030: disable auto-play of HTML5 media (FF63+)
// 0=Allowed (default), 1=Blocked, 2=Prompt
// [SETUP-WEB] This may break video playback on various sites 
lockPref("media.autoplay.default", 2);

// ----------------------------------------------------------------------------------------------------
// User Settings : Password manager settings
// ----------------------------------------------------------------------------------------------------

// Pref : Disable password manager
// CIS Version 1.2.0 October 21st, 2011 2.5.2
lockPref("signon.rememberSignons", false); // policies "OfferToSaveLogins": false,
lockPref("services.sync.prefs.sync.signon.rememberSignons", false);

// Pref : Disable websites autocomplete (FF30+)
// Don't let sites dictate use of saved logins and passwords. 
lockPref("signon.storeWhenAutocompleteOff", false); // default: true

// Also check policies.json for DisableMasterPasswordCreation

// Pref : When password manager is enabled, lock the password storage periodically
// CIS Version 1.2.0 October 21st, 2011 2.5.3 Disable Prompting for Credential Storage
// Advanced user settings when password manager is enabled
//lockPref("security.ask_for_password", 2);

// Pref : Lock the password storage every 1 minutes (default: 30)
// Advanced user settings when password manager is enabled
//lockPref("security.password_lifetime", 5);

// ----------------------------------------------------------------------------------------------------
// User Settings : History settings
// ----------------------------------------------------------------------------------------------------

// Pref : 0804 : limit history leaks via enumeration (PER TAB: back/forward) - PRIVACY
// This is a PER TAB session history. You still have a full history stored under all history
// default=50, minimum=1=currentpage, 2 is the recommended minimum as some pages
// use it as a means of referral (e.g. hotlinking), 4 or 6 or 10 may be more practical 
lockPref("browser.sessionhistory.max_entries", 20);

// Pref : Disable Displaying Javascript in History URLs
// http://kb.mozillazine.org/Browser.urlbar.filter.javascript
// CIS 2.3.6 
lockPref("browser.urlbar.filter.javascript", true);

// Defaulting --------------------------

// Pref : Clear offline site data on shutdown
defaultPref("privacy.clearOnShutdown.offlineApps", true);

// Pref : Clear offline site data on clear dialog (History/Clear...)
defaultPref("privacy.cpd.offlineApps", true); // Offline Website Data

// Pref : Set time range to "Everything" as default in "Clear Recent History"
// This should not be enforced
defaultPref("privacy.sanitize.timeSpan", 0);

// Pref : Disable form autofill, don't save information 
// entered in web page forms and the Search Bar
// remember search and form history setting
defaultPref("browser.formfill.enable", false);

// Pref : Defaulting Settings : Clear history when closing 
defaultPref("privacy.sanitize.sanitizeOnShutdown", true);

// Pref : Defaulting Settings : Does not remember history
defaultPref("places.history.enabled", false);

// Pref : Settings history settings to custum by default
defaultPref("privacy.history.custom", true);

// -------------------------------------

// Pref : Clear session data on clear dialog (History/Clear...)
//defaultPref("privacy.cpd.openWindows", true); // Clear session data
// Same as 2805, session storage is cleared anyway... check with storage inspector

// Pref : 2805: privacy.*.openWindows (clear session restore data) (FF34+)
// [NOTE] There is a years-old bug that these cause two windows when Firefox restarts.
// You do not need these anyway if session restore is disabled (see 1020) 
//defaultPref("privacy.clearOnShutdown.openWindows", true);
// Break session restore on crash & some theming extensions 
// Also this have a bug causing two windows when Firefox restarts.
// The session is deleted anyway on restart so its not useful
// Mitigated with other settings 

// Pref : Defaulting Settings : Clear history when closing - Pref : 2803 : Duplicate ? 
// "sessions" removed from cleaning list as its an important data to keep... 
// user may add it back in the gui
// This settings work only as string not as bool (This seems to be a bug in ffox) 
// Also this settings seems to kill following settings so it should be the last
//defaultPref("privacy.sanitize.pending", '[{"id":"shutdown","itemsToClear":["cache","cookies","history","formdata","downloads"],"options":{}}]');
// Its erased if not enforced... and default does not differ a lot (session included in default...)
// This erase the settings no matter what ! so carefull here 

// -------------------------------------

// Pref : 1006: disable permissions manager from writing to disk [RESTART]
// [NOTE] This means any permission changes are session only
// [1] https://bugzilla.mozilla.org/967812 
//lockPref("permissions.memory_only", true); // (hidden pref)
// This does not keep sites permission and exceptions its then disabled
// This is managed by sanitize settings

// Pref : Delete Search and Form History
// Disabled - Deprecated Active - This is not deprecated
// Only used in a single test ? does not harm to have it
// CIS Version 1.2.0 October 21st, 2011 2.5.6
// Default value is 180 day
// Disabled because its managed by sanitize settings 
//lockPref("browser.formfill.expire_days", 0);

// Also check "User Settings : Session" 

// Also check "User Settings : Autofill settings"

// ----------------------------------------------------------------------------------------------------
// User Settings : Session : Other session settings on disabled section : Also Pref : 2805
// ----------------------------------------------------------------------------------------------------

// Pref : 1021 : disable storing extra session data
// extra session data contains contents of forms, scrollbar positions, cookies and POST data
// define on which sites to save extra session data:
// Pref : 0=everywhere, 1=unencrypted sites, 2=nowhere 
lockPref("browser.sessionstore.privacy_level", 2);

// Pref : 1023 : set the minimum interval between session save operations
// Default is 15000 (15 secs). Try 30000 (30sec), 60000 (1min) etc
// [WARNING] This can also affect entries in the "Recently Closed Tabs" feature
// i.e. the longer the interval the more chance a quick tab open/close won't be captured.
// This longer interval *may* affect history but we cannot replicate any history not recorded
// [1] https://bugzilla.mozilla.org/1304389 
lockPref("browser.sessionstore.interval", 60000);

// ----------------------------------------------------------------------------------------------------
// User Settings : Autofill settings
// ----------------------------------------------------------------------------------------------------

// Pref : Forms auto fill
lockPref("extensions.formautofill.addresses.enabled", false);
lockPref("extensions.formautofill.available", "off");
lockPref("extensions.formautofill.creditCards.enabled", false);
lockPref("extensions.formautofill.heuristics.enabled", false);

// Pref : Require manual intervention to autofill known username/passwords sign-in forms
// http://kb.mozillazine.org/Signon.autofillForms
// https://www.torproject.org/projects/torbrowser/design/#identifier-linkability
lockPref("signon.autofillForms", false);

// Pref : When username/password autofill is enabled, still disable it on non-HTTPS sites
// https://hg.mozilla.org/integration/mozilla-inbound/rev/f0d146fe7317
lockPref("signon.autofillForms.http", false);

// Pref : Disable inline autocomplete in URL bar
// http://kb.mozillazine.org/Inline_autocomplete
//lockPref("browser.urlbar.autoFill", false);
//lockPref("browser.urlbar.autoFill.typed", false);
// This does not cause privacy/leaking issue  

// ----------------------------------------------------------------------------------------------------
// User Settings : Check default browser Settings
// ----------------------------------------------------------------------------------------------------

// Pref : 0101 : disable default browser check
// [SETTING] General>Startup>Always check if Firefox is your default browser 
lockPref("browser.shell.checkDefaultBrowser", false);

// ----------------------------------------------------------------------------------------------------
// User Settings : DRM/CDM - Main
// ----------------------------------------------------------------------------------------------------

// Pref : DRM/CDM
// This is disabled because it's a closed source blob
// Encrypted Media Extensions
lockPref("media.eme.enabled", false);
lockPref("media.gmp-provider.enabled", false);
lockPref("media.gmp-manager.url", "data:text/plain,");
lockPref("media.gmp-manager.url.override", "data:text/plain,");
lockPref("media.gmp-manager.updateEnabled", false);
// Windows 10
lockPref("media.gmp.trial-create.enabled", false);

// ----------------------------------------------------------------------------------------------------
// User Settings : DRM/CDM - Widevine
// ----------------------------------------------------------------------------------------------------

// Pref : 1825 : disable widevine CDM (Content Decryption Module)
lockPref("media.gmp-widevinecdm.visible", false);
lockPref("media.gmp-widevinecdm.enabled", false);
lockPref("media.gmp-widevinecdm.autoupdate", false);

// ----------------------------------------------------------------------------------------------------
// User Settings : DRM/CDM - OpenH264
// ----------------------------------------------------------------------------------------------------

// Pref : Disable automatic downloading of OpenH264 codec
// Why is there OpenH264 ? hhttps://support.mozilla.org/en-US/kb/open-h264-plugin-firefox
// How to manually install OpenH264 ? https://support.mozilla.org/en-US/questions/1029174
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_media-capabilities
// https://andreasgal.com/2014/10/14/openh264-now-in-firefox/
// If you want to enable this webrtc need to be enabled too
lockPref("media.gmp-gmpopenh264.enabled", false);
lockPref("media.gmp-gmpopenh264.autoupdate", false);
lockPref("media.peerconnection.video.enabled", false); //Deprecated Active

// Pref : Force OpenH264 On (Not necessary) 
//lockPref("media.peerconnection.video.h264", true);

// ----------------------------------------------------------------------------------------------------
// User Settings : DRM/CDM - Adobe Primetime
// ----------------------------------------------------------------------------------------------------

// Pref :
lockPref("media.gmp-eme-adobe.enabled", false);

// ----------------------------------------------------------------------------------------------------
// User Settings : DRM/CDM - IJWY To Shut Up 
// ----------------------------------------------------------------------------------------------------

// Pref : 
lockPref("media.gmp-manager.certs.2.commonName", "");
// Default Value
// aus5.mozilla.org

// Pref : 
lockPref("media.gmp-manager.certs.1.commonName", "");
// Default Value
// aus5.mozilla.org

// ----------------------------------------------------------------------------------------------------
// User Settings : WebRTC (Very efficient for fingerprinting this is why its disabled)
// ----------------------------------------------------------------------------------------------------

// Pref : Disable WebRTC getUserMedia, screen sharing, audio capture, video capture
// https://wiki.mozilla.org/Media/getUserMedia
// https://blog.mozilla.org/futurereleases/2013/01/12/capture-local-camera-and-microphone-streams-with-getusermedia-now-enabled-in-firefox/
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator
lockPref("media.navigator.enabled", false);
lockPref("media.navigator.video.enabled", false); //Deprecated Active
lockPref("media.getusermedia.browser.enabled", false);
lockPref("media.getusermedia.screensharing.enabled", false);
lockPref("media.getusermedia.audiocapture.enabled", false);

// Pref : 2001 : disable WebRTC (Web Real-Time Communication)
// [1] https://www.privacytools.io/#webrtc 
lockPref("media.peerconnection.use_document_iceservers", false); //Deprecated Active
lockPref("media.peerconnection.identity.enabled", false); //Deprecated Active
lockPref("media.peerconnection.identity.timeout", 1); //Deprecated Active
lockPref("media.peerconnection.turn.disable", true); //Deprecated Active
lockPref("media.peerconnection.ice.tcp", false); //Deprecated Active

// Pref : 2002: limit WebRTC IP leaks if using WebRTC
// [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1189041,1297416
// [2] https://wiki.mozilla.org/Media/WebRTC/Privacy 
lockPref("media.peerconnection.ice.default_address_only", true); // (FF42-FF50)
lockPref("media.peerconnection.ice.no_host", true); // (FF51+)

// ----------------------------------------------------------------------------------------------------
// User Settings : Proxy settings
// ----------------------------------------------------------------------------------------------------

// Pref : 0706 : remove paths when sending URLs to PAC scripts (FF51+)
// CVE-2017-5384 : Information disclosure via Proxy Auto-Config (PAC)
// [1] https://bugzilla.mozilla.org/1255474
// Does not need to be set as its false by default
// BUG : This lock proxy settings from the panel
// BUG-Fix : Fixed in defaulting section
// MIGRATED : To defaulting section
// WARNING : Do not change this settings here or proxy settings will be locked
//lockPref("network.proxy.autoconfig_url.include_path", false); 

// Pref : Send DNS request through SOCKS when SOCKS proxying is in use
// https://trac.torproject.org/projects/tor/wiki/doc/TorifyHOWTO/WebBrowsers
// BUG : This lock proxy settings from the panel
// BUG-Fix : Fixed with defaulting section
// MIGRATED : To defaulting section
// WARNING : Do not change this settings here or proxy settings will be locked
//lockPref("network.proxy.socks_remote_dns", true);

// ----------------------------------------------------------------------------------------------------
// User Settings : DNS settings
// ----------------------------------------------------------------------------------------------------

// Pref : 0707 : disable (or setup) DNS-over-HTTPS (DoH) (FF60+)
// TRR = Trusted Recursive Resolver
// .mode: 0=off, 1=race, 2=TRR first, 3=TRR only, 4=race for stats, but always use native result
// [WARNING] DoH bypasses hosts and gives info to yet another party (e.g. Cloudflare)
// [1] https://www.ghacks.net/2018/04/02/configure-dns-over-https-in-firefox/
// [2] https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/ 
// BUG : This seem to disable socks_remote_dns ?! need to check with wireshark 
// If true, just settings urls to null should be enough to disable 
// Without impacting socks_remote_dns
lockPref("network.trr.mode", 0);
lockPref("network.trr.bootstrapAddress", "");
lockPref("network.trr.uri", "");

// If your OS or ISP does not support IPv6, there is no reason to have this preference set to false.
lockPref("network.dns.disableIPv6", true);

// Pref : Disable DNS prefetching
// http://kb.mozillazine.org/Network.dns.disablePrefetch
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Controlling_DNS_prefetching
lockPref("network.dns.disablePrefetch", true);
lockPref("network.dns.disablePrefetchFromHTTPS", true);

// ----------------------------------------------------------------------------------------------------
// User Settings : Start page highlight
// ----------------------------------------------------------------------------------------------------

// Pref : Defaulting Settings : Start page highlight settings
// This does not seems to work with defaultPref
lockPref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
lockPref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
lockPref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
lockPref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
lockPref("browser.newtabpage.activity-stream.prerender", false);

// ----------------------------------------------------------------------------------------------------
// Defaulting Settings : Do not track settings
// ----------------------------------------------------------------------------------------------------

// Set to enforce, choice was left to the user in previous version
lockPref("privacy.donottrackheader.enabled", true);

// Pref : 1610: (36+) set DNT "value" to "not be tracked" (FF21+)
// [1] http://kb.mozillazine.org/Privacy.donottrackheader.value
// [-] https://bugzilla.mozilla.org/1042135#c101
lockPref("privacy.donottrackheader.value", 1);

// ----------------------------------------------------------------------------------------------------
// User Settings : Other theming settings
// ----------------------------------------------------------------------------------------------------

// Pref : Fix white text on white background for linux
// fixed with lockPref("ui.use_standins_for_native_colors", true);
lockPref("widget.content.gtk-theme-override", "Adwaita:light");

// Pref : 
lockPref("browser.devedition.theme.enabled", true);

// Pref : 
lockPref("devtools.theme", "dark");

// Pref : 
lockPref("browser.devedition.theme.showCustomizeButton", true);

// ----------------------------------------------------------------------------------------------------
// User Settings : Miscellaneous settings
// ----------------------------------------------------------------------------------------------------

// Pref : Disable "Are you sure you want to leave this page?" popups on page close
// https://support.mozilla.org/en-US/questions/1043508
// Does not prevent JS leaks of the page close event.
// https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload
// Disabled by default could be useful on important site like banking
//lockPref("dom.disable_beforeunload", true);

// Pref : Disable geo localisation
lockPref("permissions.default.geo", 2);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Defaulting Settings
// Those settings are not locked this section purpose is to change default setting... 
// Modifications can still be done within firefox
// Bench Diff : ???/5000
// >>>>>>>>>>>>>>>>>>>>>

// ----------------------------------------------------------------------------------------------------
// Defaulting Settings : Other Defaulting
// ----------------------------------------------------------------------------------------------------

// Pref : Prefered lang for displaying websites... 
// The first settings overflow the second one
defaultPref("privacy.spoof_english", 2);
//defaultPref("intl.accept_languages", "en-US, en"); //This make lang windows unusable

// Pref : 1606: ALL: set the default Referrer Policy
// 0=no-referer, 1=same-origin, 2=strict-origin-when-cross-origin, 3=no-referrer-when-downgrade
// [NOTE] This is only a default, it can be overridden by a site-controlled Referrer Policy
// [1] https://www.w3.org/TR/referrer-policy/
// [2] https://developer.mozilla.org/docs/Web/HTTP/Headers/Referrer-Policy
// [3] https://blog.mozilla.org/security/2018/01/31/preventing-data-leaks-by-stripping-path-information-in-http-referrers/ 
defaultPref("network.http.referer.defaultPolicy", 3); // (FF59+) default: 3
defaultPref("network.http.referer.defaultPolicy.pbmode", 2); // (FF59+) default: 2

// Pref : 1701: enable Container Tabs setting in preferences (see 1702) (FF50+)
// [1] https://bugzilla.mozilla.org/1279029 
defaultPref("privacy.userContext.ui.enabled", true);
// Pref : 1702: enable Container Tabs (FF50+)
// [SETTING] General>Tabs>Enable Container Tabs 
defaultPref("privacy.userContext.enabled", true);
// Pref : 1703: enable a private container for thumbnail loads (FF51+) 
defaultPref("privacy.usercontext.about_newtab_segregation.enabled", true); // default: true in FF61+
// Pref : 1704: set long press behaviour on "+ Tab" button to display container menu (FF53+)
// 0=disables long press, 1=when clicked, the menu is shown
// 2=the menu is shown after X milliseconds
// [NOTE] The menu does not contain a non-container tab option
// [1] https://bugzilla.mozilla.org/1328756 
defaultPref("privacy.userContext.longPressBehavior", 2);

// Pref : (FF57+)
defaultPref("browser.download.autohideButton", false);

// Pref : enable "Find As You Type"
defaultPref("accessibility.typeaheadfind", true);

// Pref : disable autocopy default [LINUX]
defaultPref("clipboard.autocopy", false);

// Pref : 0=none, 1-multi-line, 2=multi-line & single-line
defaultPref("layout.spellcheckDefault", 2);

// Pref : closeWindowWithLastTab
defaultPref("browser.tabs.closeWindowWithLastTab", false);

// Pref : middle-click enabling auto-scrolling [WINDOWS] [MAC]
defaultPref("general.autoScroll", false);

// Pref : 1601: ALL: control when images/links send a referer
// 0=never, 1=send only when links are clicked, 2=for links and images (default) 
//defaultPref("network.http.sendRefererHeader", 1);
// This break a lot of sites.. mitigating by extension

// Pref : 2620: enable Firefox's built-in PDF reader
// [SETTING] General>Applications>Portable Document Format (PDF)
// This setting controls if the option "Display in Firefox" in the above setting is available
// and by effect controls whether PDFs are handled in-browser or externally ("Ask" or "Open With")
// PROS:   pdfjs is lightweight, open source, and as secure/vetted as any pdf reader out there (more than most)
//         Exploits are rare (1 serious case in 4 yrs), treated seriously and patched quickly.
//         It doesn't break "state separation" of browser content (by not sharing with OS, independent apps).
//         It maintains disk avoidance and application data isolation. It's convenient. You can still save to disk.
// CONS:   You may prefer a different pdf reader for security reasons
// CAVEAT: JS can still force a pdf to open in-browser by bundling its own code (rare) 
defaultPref("pdfjs.disabled", false);

// Pref : 2210: block popup windows
// [SETTING] Privacy & Security>Permissions>Block pop-up windows 
defaultPref("dom.disable_open_during_load", true);

// Pref : 2203 : open links targeting new windows in a new tab instead
// User Settings : Migrated to Defaulting : Links pop-up open in new tab
// This stops malicious window sizes and some screen resolution leaks.
// You can still right-click a link and open in a new window.
// [TEST] https://people.torproject.org/~gk/misc/entire_desktop.html
// [1] https://trac.torproject.org/projects/tor/ticket/9881 
defaultPref("browser.link.open_newwindow", 3);
defaultPref("browser.link.open_newwindow.restriction", 0);

// Pref : Defaulting Settings : Proxy
defaultPref("network.proxy.autoconfig_url", ""); 
defaultPref("network.proxy.autoconfig_url.include_path", false); 
defaultPref("network.proxy.socks_remote_dns", true);
defaultPref("network.proxy.socks_version", 5);

// Pref : Defaulting Settings : Bookmark should by default open in newtab instead of 
// replacing the current page
defaultPref("browser.tabs.loadBookmarksInTabs", true);

// Pref : Debugging settings
defaultPref("devtools.debugger.remote-enabled", false);
defaultPref("devtools.chrome.enabled", false);

// Pref : site_specific_overrides useragent
defaultPref("general.useragent.site_specific_overrides", false);

// Pref : Display all sections by default
defaultPref("extensions.ui.experiment.hidden", false);
// Those two are not needed (they are set to true automatically when their list is empty )
//defaultPref("extensions.ui.dictionary.hidden", false);
//defaultPref("extensions.ui.locale.hidden", false);

// Pref : Pref tied to privafox, displaying small density by default
// Small icons...
defaultPref("browser.uidensity", 1);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Controversial
// Bench Diff : +0/5000
// >>>>>>>>>>>>>>>>>>>>

// Pref : Disable IndexedDB (disabled)
// Pref : 2720: enforce IndexedDB (IDB)
// IDB is required for extensions and Firefox internals (even before FF63)
// To control *website* IDB data, control allowing cookies and service workers, or use
// Temporary Containers. To mitigate *website* IDB, FPI helps (4001), and/or sanitize
// on close (Offline Website Data, see User Settings : History settings) or on-demand (Ctrl-Shift-Del), 
// or automatically via an extension. Note that IDB currently cannot be sanitized by host.
// IndexedDB could be used for tracking purposes, but is required for : 
// twitter and many sites, some addons, old version of uBlock, session manager in certain cases
// This is mitigated with addons and sanitize settings 
// IndexedDB is a low-level API for client-side storage of significant amounts of structured data, 
// including files/blobs. This API uses indexes to enable high-performance searches of this data. 
// While Web Storage is useful for storing smaller amounts of data, it is less useful for storing 
// larger amounts of structured data. IndexedDB provides a solution. This is the main landing page 
// for MDN's IndexedDB coverage — here we provide links to the full API reference and usage guides,
// browser support details, and some explanation of key concepts
// Also this is cleaned by privacy.clearOnShutdown.offlineApps"
// https://blog.mozilla.org/addons/2018/08/03/new-backend-for-storage-local-api/ 
// https://developer.mozilla.org/en-US/docs/IndexedDB
// https://en.wikipedia.org/wiki/Indexed_Database_API
// https://wiki.mozilla.org/Security/Reviews/Firefox4/IndexedDB_Security_Review
// http://forums.mozillazine.org/viewtopic.php?p=13842047
// https://github.com/pyllyukko/user.js/issues/8
lockPref("dom.indexedDB.enabled", true); //default true

// Pref : indexedDB Loggingq - disabled for performance
//lockPref("dom.indexedDB.logging.details", false); //default true
//lockPref("dom.indexedDB.logging.enabled", false); //default true

// Pref : 2516 : disable PointerEvents
// [1] https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent 
lockPref("dom.w3c_pointer_events.enabled", false);

// Pref : 0702 : disable HTTP2 (which was based on SPDY which is now deprecated)
// HTTP2 raises concerns with "multiplexing" and "server push", does nothing to enhance
// privacy, and in fact opens up a number of server-side fingerprinting opportunities
// [1] https://http2.github.io/faq/
// [2] https://blog.scottlogic.com/2014/11/07/http-2-a-quick-look.html
// [3] https://queue.acm.org/detail.cfm?id=2716278
// [4] https://github.com/ghacksuserjs/ghacks-user.js/issues/107
// Disabled because of [4]
//lockPref("network.http.spdy.enabled", false);
//lockPref("network.http.spdy.enabled.deps", false);
//lockPref("network.http.spdy.enabled.http2", false);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Firefox Fingerprint 
// ResistFingerprinting : Overrided by 'privacy.resistFingerprinting' 
// This need to be kept disabled to make resistFingerprinting efficient
// https://wiki.mozilla.org/Security/Fingerprinting
// Bench Diff : +0/5000
// >>>>>>>>>>>>>>>>>>>>

// Pref : Enable hardening against various fingerprinting vectors (Tor Uplift project)
// https://wiki.mozilla.org/Security/Tor_Uplift/Tracking
// https://bugzilla.mozilla.org/show_bug.cgi?id=1333933
lockPref("privacy.resistFingerprinting", true);

// Pref : 4503 : disable mozAddonManager Web API (FF57+)
// [NOTE] As a side-effect in FF57-59 this allowed extensions to work on AMO. In FF60+ you also need
// to sanitize or clear extensions.webextensions.restrictedDomains (see 2662) to keep that side-effect
// [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1384330,1406795,1415644,1453988 
lockPref("privacy.resistFingerprinting.block_mozAddonManager", true); 

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Locale/Time/UserAgent
// Bench Diff : +0/5000
// >>>>>>>>>>>>>>>>>>>>

// Pref : 0864 : disable date/time picker (FF57+ default true)
// This can leak your locale if not en-US
// [1] https://trac.torproject.org/projects/tor/ticket/21787 
// How does this work with resistFingerprinting efficient ??
lockPref("dom.forms.datetime", false);

// Pref : Prevent leaking application locale/date format using JavaScript
// https://bugzilla.mozilla.org/show_bug.cgi?id=867501
// https://hg.mozilla.org/mozilla-central/rev/52d635f2b33d
// Already applied by resistFingerprinting ?
lockPref("javascript.use_us_english_locale", true);

// Pref : Set Accept-Language HTTP header to en-US regardless of Firefox localization
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
// Already applied by resistFingerprinting ?
lockPref("intl.regional_prefs.use_os_locales", false);

// Pref : Local and useragent...
// Already applied by resistFingerprinting ?
lockPref("intl.locale.requested", "en-US");

// Pref : Spoof User-agent (disabled)
// Disabled to make resistFingerprinting efficient
//lockPref("general.useragent.override", "Mozilla/5.0 (Windows NT 6.1; rv:45.0) Gecko/20100101 Firefox/45.0, 45");
//lockPref("general.appname.override", "Netscape");
//lockPref("general.appversion.override", "5.0 (Windows)");
//lockPref("general.platform.override", "Win32");
//lockPref("general.oscpu.override", "Windows NT 6.1");

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Ghacks-user Selection
// Bench Diff : +100/5000
// >>>>>>>>>>>>>>>>>>>>>>

// Pref : 0335 : disable Telemetry Coverage [FF64+]
// [1] https://blog.mozilla.org/data/2018/08/20/effectively-measuring-search-in-firefox/
lockPref("toolkit.coverage.endpoint.base", "");
lockPref("toolkit.coverage.opt-out", true); // [HIDDEN PREF]

// DOWNLOADS
// Pref : 2652: disable adding downloads to the system's "recent documents" list 
lockPref("browser.download.manager.addToRecentDocs", false); //do not disabled
// Pref : 2653: disable hiding mime types (Options>General>Applications) not associated with a plugin 
lockPref("browser.download.hide_plugins_without_extensions", false); //do not disabled

// Pref : 2617: remove webchannel whitelist 
// Default value
// "https://content.cdn.mozilla.net https://input.mozilla.org https://support.mozilla.org https://install.mozilla.org"
lockPref("webchannel.allowObject.urlWhitelist", "");

// Pref : 2730b: disable offline cache on insecure sites (FF60+)
// [1] https://blog.mozilla.org/security/2018/02/12/restricting-appcache-secure-contexts/ 
lockPref("browser.cache.offline.insecure.enable", false); // default: false in FF62+

// Pref : 2614: limit HTTP redirects (this does not control redirects with HTML meta tags or JS)
// [NOTE] A low setting of 5 or under will probably break some sites (e.g. gmail logins)
// To control HTML Meta tag and JS redirects, use an extension. Default is 20 
lockPref("network.http.redirection-limit", 10);

// Pref : 2731: enforce websites to ask to store data for offline use
// [1] https://support.mozilla.org/questions/1098540
// [2] https://bugzilla.mozilla.org/959985 
lockPref("offline-apps.allow_by_default", false);

// EXTENSIONS
// Pref : 2660: lock down allowed extension directories
// [SETUP-CHROME] This will break extensions that do not use the default XPI directories
// [1] https://mike.kaply.com/2012/02/21/understanding-add-on-scopes/
// [1] archived: https://archive.is/DYjAM 
lockPref("extensions.enabledScopes", 1); // (hidden pref)
lockPref("extensions.autoDisableScopes", 15);
// Pref : 2663: enable warning when websites try to install add-ons
// [SETTING] Privacy & Security>Permissions>Warn you when websites try to install add-ons 
lockPref("xpinstall.whitelist.required", true); // default: true

// Pref : 2306: disable push notifications (FF44+)
// web apps can receive messages pushed to them from a server, whether or
// not the web app is in the foreground, or even currently loaded
// [1] https://developer.mozilla.org/docs/Web/API/Push_API 
lockPref("dom.push.enabled", false);
lockPref("dom.push.connection.enabled", false);
lockPref("dom.push.serverURL", ""); //default "wss://push.services.mozilla.com/"
lockPref("dom.push.userAgentID", "");

// Pref : 2683: block top level window data: URIs (FF56+)
// [1] https://bugzilla.mozilla.org/1331351
// [2] https://www.wordfence.com/blog/2017/01/gmail-phishing-data-uri/
// [3] https://www.fxsitecompat.com/en-CA/docs/2017/data-url-navigations-on-top-level-window-will-be-blocked/ 
lockPref("security.data_uri.block_toplevel_data_uri_navigations", true); // default: true in FF59+

// Pref : 2618: disable exposure of system colors to CSS or canvas (FF44+)
// [NOTE] see second listed bug: may cause black on black for elements with undefined colors
// [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=232227,1330876 
lockPref("ui.use_standins_for_native_colors", true); // (hidden pref)
// Fix for widget.content.gtk-theme-override;Adwaita:light

// Pref : 0403: disable individual unwanted/unneeded parts of the Kinto blocklists
// What is Kinto?: https://wiki.mozilla.org/Firefox/Kinto#Specifications
// As Firefox transitions to Kinto, the blocklists have been broken down into entries for certs to be
// revoked, extensions and plugins to be disabled, and gfx environments that cause problems or crashes 
lockPref("services.blocklist.onecrl.collection", ""); // revoked certificates
lockPref("services.blocklist.addons.collection", "");
lockPref("services.blocklist.plugins.collection", "");
lockPref("services.blocklist.gfx.collection", "");

// Pref : disable showing about:blank as soon as possible during startup (FF60+)
// When default true (FF62+) this no longer masks the RFP resizing activity
// [1] https://bugzilla.mozilla.org/1448423 
lockPref("browser.startup.blankWindow", false);

// Pref : 2428: enforce DOMHighResTimeStamp API
// [WARNING] Required for normalization of timestamps and any timer resolution mitigations
lockPref("dom.event.highrestimestamp.enabled", true); // default: true

// Pref : 0516 : disable Onboarding (FF55+)
// Onboarding is an interactive tour/setup for new installs/profiles and features. Every time
// about:home or about:newtab is opened, the onboarding overlay is injected into that page
// [NOTE] Onboarding uses Google Analytics [2], and leaks resource://URIs [3]
// [1] https://wiki.mozilla.org/Firefox/Onboarding
// [2] https://github.com/mozilla/onboard/commit/db4d6c8726c89a5d6a241c1b1065827b525c5baf
// [3] https://bugzilla.mozilla.org/863246#c154 
// Pref : URL that kicks off the UI tour
lockPref("privacy.trackingprotection.introURL", "");

// Pref : 0703 : disable HTTP Alternative Services (FF37+)
// [1] https://www.ghacks.net/2015/08/18/a-comprehensive-list-of-firefox-privacy-and-security-settings/#comment-3970881
// [2] https://www.mnot.net/blog/2016/03/09/alt-svc 
lockPref("network.http.altsvc.enabled", false);
lockPref("network.http.altsvc.oe", false);

// Pref : 0709 : disable using UNC (Uniform Naming Convention) paths (FF61+)
// [1] https://trac.torproject.org/projects/tor/ticket/26424 
lockPref("network.file.disable_unc_paths", true); // (hidden pref)

// Pref : 0710 : disable GIO as a potential proxy bypass vector
// Gvfs/GIO has a set of supported protocols like obex, network, archive, computer, dav, cdda,
// gphoto2, trash, etc. By default only smb and sftp protocols are accepted so far (as of FF64)
// [1] https://bugzilla.mozilla.org/1433507
// [2] https://trac.torproject.org/23044
// [3] https://en.wikipedia.org/wiki/GVfs
// [4] https://en.wikipedia.org/wiki/GIO_(software) 
lockPref("network.gio.supported-protocols", ""); // (hidden pref)

// Pref : 0809 : disable location bar suggesting "preloaded" top websites (FF54+)
// [1] https://bugzilla.mozilla.org/1211726 
lockPref("browser.urlbar.usepreloadedtopurls.enabled", false);

// Pref : 0810 : disable location bar making speculative connections (FF56+)
// [1] https://bugzilla.mozilla.org/1348275 
lockPref("browser.urlbar.speculativeConnect.enabled", false);

// Pref : 0850e: disable location bar one-off searches (FF51+)
// [1] https://www.ghacks.net/2016/08/09/firefox-one-off-searches-address-bar/ 
lockPref("browser.urlbar.oneOffSearches", false);

// Pref : 0911 : prevent cross-origin images from triggering an HTTP-Authentication prompt (FF55+)
// [1] https://bugzilla.mozilla.org/1357835 
lockPref("network.auth.subresource-img-cross-origin-http-auth-allow", false); //Deprecated Active

// Pref : 1030 : disable favicons in shortcuts
// URL shortcuts use a cached randomly named .ico file which is stored in your
// profile/shortcutCache directory. The .ico remains after the shortcut is deleted.
// If set to false then the shortcuts use a generic Firefox icon 
lockPref("browser.shell.shortcutFavicons", false);

// Pref : 1032 : disable favicons in web notifications 
lockPref("alerts.showFavicons", false); // default: false

// Pref : 1201 : disable old SSL/TLS "insecure" renegotiation (vulnerable to a MiTM attack)
// [WARNING] <2% of secure sites do NOT support the newer "secure" renegotiation, see [2]
// [1] https://wiki.mozilla.org/Security:Renegotiation
// [2] https://www.ssllabs.com/ssl-pulse/ 
lockPref("security.ssl.require_safe_negotiation", true);

// Pref : 1205 : disable TLS1.3 0-RTT (round-trip time) (FF51+)
// [1] https://github.com/tlswg/tls13-spec/issues/1001
// [2] https://blog.cloudflare.com/tls-1-3-overview-and-q-and-a/ 
lockPref("security.tls.enable_0rtt_data", false); // (FF55+ default true)

// Pref : 1272 : display advanced information on Insecure Connection warning pages
// only works when it's possible to add an exception
// i.e. it doesn't work for HSTS discrepancies (https://subdomain.preloaded-hsts.badssl.com/)
// [TEST] https://expired.badssl.com/ 
lockPref("browser.xul.error_pages.expert_bad_cert", true);

// Pref : 1407 : disable special underline handling for a few fonts which you will probably never use [RESTART]
// Any of these fonts on your system can be enumerated for fingerprinting.
// [1] http://kb.mozillazine.org/Font.blacklist.underline_offset 
lockPref("font.blacklist.underline_offset", "");

// Pref : 1408 : disable graphite which FF49 turned back on by default
// In the past it had security issues. Update: This continues to be the case, see [1]
// [1] https://www.mozilla.org/security/advisories/mfsa2017-15/#CVE-2017-7778 
lockPref("gfx.font_rendering.graphite.enabled", false);

// Pref : 1604 : CROSS ORIGIN: control the amount of information to send (FF52+)
// Pref : 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port 
lockPref("network.http.referer.XOriginTrimmingPolicy", 0);

// Pref : 1605 : ALL: disable spoofing a referer
// [WARNING] Spoofing effectively disables the anti-CSRF (Cross-Site Request Forgery) protections that some sites may rely on 
// Default false
lockPref("network.http.referer.spoofSource", false);

// Pref : 1801 : set default plugin state (i.e. new plugins on discovery) to never activate
// Pref : 0=disabled, 1=ask to activate, 2=active - you can override individual plugins 
lockPref("plugin.default.state", 1);
lockPref("plugin.defaultXpi.state", 1);

// Pref : 2026 : disable canvas capture stream (FF41+)
// [1] https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/captureStream 
lockPref("canvas.capturestream.enabled", false);

// Pref : 2027 : disable camera image capture (FF35+)
// [1] https://trac.torproject.org/projects/tor/ticket/16339 
lockPref("dom.imagecapture.enabled", false); // default: false

// Pref : 2028 : disable offscreen canvas (FF44+)
// [1] https://developer.mozilla.org/docs/Web/API/OffscreenCanvas 
lockPref("gfx.offscreencanvas.enabled", false); // default: false

// Pref : 2201 : prevent websites from disabling new window features
// [1] http://kb.mozillazine.org/Prevent_websites_from_disabling_new_window_features 
lockPref("dom.disable_window_open_feature.close", true);
lockPref("dom.disable_window_open_feature.location", true); // default: true
lockPref("dom.disable_window_open_feature.menubar", true);
lockPref("dom.disable_window_open_feature.minimizable", true);
lockPref("dom.disable_window_open_feature.personalbar", true); // bookmarks toolbar
lockPref("dom.disable_window_open_feature.resizable", true); // default: true
lockPref("dom.disable_window_open_feature.status", true); // status bar - default: true
lockPref("dom.disable_window_open_feature.titlebar", true);
lockPref("dom.disable_window_open_feature.toolbar", true);

// Pref : 2202 : prevent scripts moving and resizing open windows 
lockPref("dom.disable_window_move_resize", true);

// Pref : 2426 : disable Intersection Observer API (FF53+)
// Almost a year to complete, three versions late to stable (as default false),
// number #1 cause of crashes in nightly numerous times, and is (primarily) an
// ad network API for "ad viewability checks" down to a pixel level
// [1] https://developer.mozilla.org/docs/Web/API/Intersection_Observer_API
// [2] https://w3c.github.io/IntersectionObserver/
// [3] https://bugzilla.mozilla.org/1243846 
lockPref("dom.IntersectionObserver.enabled", false);

// Pref : 2601 : prevent accessibility services from accessing your browser [RESTART]
// [SETTING] Privacy & Security>Permissions>Prevent accessibility services from accessing your browser
// [1] https://support.mozilla.org/kb/accessibility-services 
lockPref("accessibility.force_disabled", 1);

// Pref : 2606 : disable UITour backend so there is no chance that a remote page can use it 
lockPref("browser.uitour.enabled", false);
lockPref("browser.uitour.url", "");

// Pref : 2611 : disable middle mouse click opening links from clipboard
// [1] https://trac.torproject.org/projects/tor/ticket/10089
// [2] http://kb.mozillazine.org/Middlemouse.contentLoadURL 
lockPref("middlemouse.contentLoadURL", false);

// Pref : 2616 : remove special permissions for certain mozilla domains (FF35+)
// [1] resource://app/defaults/permissions 
lockPref("permissions.manager.defaultsUrl", "");

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Extensions Manager
// Extensions settings and experimental tentative to firewall extensions
// Bench Diff : ???/5000
// >>>>>>>>>>>>>>>>>>>>>

// ----------------------------------------------------------------------------------
// Extensions Firewalling - Blocking Domains :
// -------------------------------------------

// !!!!!!!!!!!!!!!!!!! Important !!!!!!!!!!!!!!!!!!!
// Please check readme section "Extensions Firewall" 

// Pref : Restricted Domains I/II
// This will allow extensions to work everywhere
defaultPref("extensions.webextensions.restrictedDomains", "");
// Default Value : available in "debug-check-todo.log"

// Pref : Restricted Domains II/II 
// Old restrictedDomains implementation 
// Redirect basedomain used by identity api
lockPref("extensions.webextensions.identity.redirectDomain", "");
// Default Value : "extensions.allizom.org"

// ----------------------------------------------------------------------------------
// Extensions Firewalling - Blocking The Network :
// -----------------------------------------------

// !!!!!!!!!!!!!!!!!!! Important !!!!!!!!!!!!!!!!!!!
// Please check readme section "Extensions Firewall" 

// Pref : CSP Settings For Extensions I/II : Extension Firewall Feature 
// Uncomment to disable network for the extensions
// Enable-Firewall-Feature-In-The-Next-Line >>>>>>
//lockPref("extensions.webextensions.base-content-security-policy", "default-src 'self' moz-extension: blob: filesystem: 'unsafe-eval' 'unsafe-inline'; script-src 'self' moz-extension: blob: filesystem: 'unsafe-eval' 'unsafe-inline'; object-src 'self' moz-extension: blob: filesystem:;");

// Pref : CSP Settings For Extensions II/II : Extension Firewall Feature 
// This value is applied after the first one (just ignore this)
//defaultPref("extensions.webextensions.default-content-security-policy", "script-src 'self'; object-src 'self';");
// Default Value : "script-src 'self'; object-src 'self';"

// ----------------------------------------------------------------------------------
// Extensions Firewalling - CSP Main Settings  :
// ---------------------------------------------

// !!!!!!!!!!!!!!!!!!! Important !!!!!!!!!!!!!!!!!!!
// Please check readme section "Extensions Firewall" 

// Pref : CSP Main Settings I/II :
// Those are default value for CSP 
// Those are not intended to to be uncommented
//defaultPref("security.csp.enable", true);                                                     //This is its default value 
//defaultPref("security.csp.enableStrictDynamic", true);                                        //This is its default value 
//defaultPref("security.csp.enable_violation_events", true);                                    //This is its default value 
//defaultPref("security.csp.experimentalEnabled", false);                                       //This is its default value 
//defaultPref("security.csp.reporting.script-sample.max-length", 40);                           //This is its default value 
// Default Content Security Policy to apply to signed contents.
//defaultPref("security.signed_content.CSP.default", "script-src 'self'; style-src 'self'");    //This is its default value 

// Pref : Enable Content Security Policy (CSP)
// https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
lockPref("security.csp.enable", true);

// Pref : Enable CSP 1.1 script-nonce directive support
// https://bugzilla.mozilla.org/show_bug.cgi?id=855326
lockPref("security.csp.experimentalEnabled", true);

// Pref : CSP Main Settings II/II : Pref : 2681 : Disable CSP Violation Events [FF59+]
// [1] https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent
// [-] https://bugzilla.mozilla.org/1488165
// Setting removed in firefox v64
lockPref("security.csp.enable_violation_events", false); //Deprecated Active

// ----------------------------------------------------------------------------------
// Extensions Security :
// ---------------------

// Pref : Enable tab hiding API by default.
defaultPref("extensions.webextensions.tabhide.enabled", false); //Default true

// ----------------------------------------------------------------------------------
// Extensions IJWY :
// -----------------

// Pref : Report Site Issue button
lockPref("extensions.webcompat-reporter.newIssueEndpoint", "");
// Default Value
// https://webcompat.com/issues/new

// Pref : 0518 : disable Web Compatibility Reporter (FF56+)
// Web Compatibility Reporter adds a "Report Site Issue" button to send data to Mozilla 
// Report Site Issue button
// Note that on enabling the button in other release channels, make sure to
// disable it in problematic tests, see disableNonReleaseActions() inside
// browser/modules/test/browser/head.js
lockPref("extensions.webcompat-reporter.enabled", false); // Default true

// ----------------------------------------------------------------------------------
// Extensions Performances :
// -------------------------

// Pref : Delaying extensions background script startup
defaultPref("extensions.webextensions.background-delayed-startup", true); //default true

// Pref :Whether or not the installed extensions should be migrated to the 
// storage.local IndexedDB backend.
//defaultPref("extensions.webextensions.ExtensionStorageIDB.enabled", false); //default false

// Pref : if enabled, store execution times for API calls
//defaultPref("extensions.webextensions.enablePerformanceCounters", false); //default false

// Pref : Maximum age in milliseconds of performance counters in children
// When reached, the counters are sent to the main process and
// reset, so we reduce memory footprint.
//defaultPref("extensions.webextensions.performanceCountersMaxAge", 1000); //Hidden prefs

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : IJWY To Shut Up   
// I Just Want You To Shut Up : Closing all non necessary communication to mozilla.org etc. 
//                              Thoses settings are not used in gHacks for the moment.
//                              Will be upstreamed once stable in final version. 
// Bench Diff : ???/5000
// >>>>>>>>>>>>>>>>>>>>>

// Pref : Disabling performance addon url [FF64+]
lockPref("devtools.performance.recording.ui-base-url", "");
// Default Value : https://perf-html.io

// Pref : The default set of protocol handlers for irc [FF64+]
lockPref("gecko.handlerService.schemes.irc.0.uriTemplate", "");
// Default Value : https://www.mibbit.com/?url=%s

// Pref : 
lockPref("gecko.handlerService.schemes.ircs.0.uriTemplate", ""); // Deprecated Active
// Default Value
// https://www.mibbit.com/?url=%s

// Pref : “coverage” ping [FF64+]
// This ping is not enabled by default. When enabled, a ping is generated a total of once 
//per profile, as a diagnostic tool to determine whether Telemetry is working for users.
lockPref("toolkit.coverage.enabled", false); //default false 

// Pref : Allow extensions access to list of sites
// https://github.com/mozilla/gecko/blob/central/toolkit/mozapps/extensions/AddonManagerWebAPI.cpp
lockPref("extensions.webapi.testing", false); // hidden prefs // default false

// Pref : Disable recommended extensions [FF64+]
lockPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr", false); // disable CFR
// [SETTING] General>Browsing>Recommend extensions as you browse
// [1] https://support.mozilla.org/en-US/kb/extension-recommendations

// Pref : [FF64+]
lockPref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "");
// Default Value :
// {\"id\":\"cfr\",\"enabled\":false,\"type\":\"local\",\"localProvider\":\
// "CFRMessageProvider\",\"frequency\":{\"custom\":[{\"period\":\"daily\",\"cap\":1}]}}

// Pref : [FF64+]
lockPref("browser.newtabpage.activity-stream.asrouter.providers.onboarding", "");
// Default Value :
// {\"id\":\"onboarding\",\"type\":\"local\",\"localProvider\":\"OnboardingMessageProvider\",\"enabled\":true}

// Pref : [FF64+]
lockPref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
// Default Value :
// {\"id\":\"snippets\",\"enabled\":false,\"type\":\"remote\",\"url\":\"https://snippets.cdn.mozilla.net/
// %STARTPAGE_VERSION%/%NAME%/%VERSION%/%APPBUILDID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%
// /%DISTRIBUTION%/%DISTRIBUTION_VERSION%/\",\"updateCycleInMs\":14400000}

// Pref : 
lockPref("browser.onboarding.notification.tour-ids-queue", "");

// Pref : 
lockPref("lightweightThemes.getMoreURL", "");
// Default Value
// https://addons.mozilla.org/%LOCALE%/firefox/themes

// Pref : 
lockPref("devtools.gcli.lodashSrc", "");
// Default Value
// https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.6.1/lodash.min.js

// Pref : 
lockPref("media.decoder-doctor.new-issue-endpoint", "");
// Default Value
// https://webcompat.com/issues/new

// Pref : 
lockPref("identity.sync.tokenserver.uri", "");
// Default Value
// https://token.services.mozilla.com/1.0/sync/1.5

// Pref : 
lockPref("devtools.webide.templatesURL", "");
// Default Value
// https://code.cdn.mozilla.net/templates/list.json

// Pref : 
lockPref("browser.ping-centre.production.endpoint", "");
// Default Value
// https://tiles.services.mozilla.com/v3/links/ping-centre

// Pref : 
lockPref("browser.translation.engine", "");
// Default Value
// Google

// Pref : 
lockPref("network.trr.confirmationNS", "");
// Default Value
// example.com

// Pref : 
lockPref("gecko.handlerService.schemes.mailto.1.name", "");
// Default Value
// Gmail

// Pref : 
lockPref("gecko.handlerService.schemes.irc.0.name", "");
// Default Value
// Mibbit

// Pref : 
lockPref("gecko.handlerService.schemes.ircs.0.name", "");
// Default Value
// Mibbit

// Pref : 
lockPref("gecko.handlerService.schemes.mailto.0.name", "");
// Default Value
// Yahoo! Mail

// Pref : 
lockPref("services.sync.lastversion", "");
// Default Value
// firstrun

// Pref : 
lockPref("browser.safebrowsing.provider.mozilla.lists.base", "");
// Default Value
// moz-std

// Pref : 
lockPref("browser.safebrowsing.provider.mozilla.lists.content", "");
// Default Value
// moz-full

// Pref : 
lockPref("browser.safebrowsing.provider.google.advisoryName", "");
// Default Value
// Google Safe Browsing

// Pref : 
lockPref("browser.safebrowsing.provider.google4.advisoryName", "");
// Default Value
// Google Safe Browsing

// Pref : Test To Make FFox Silent
lockPref("browser.safebrowsing.provider.mozilla.lists", "");
// Default Value
// base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,
// mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,
// except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,
// block-flashsubdoc-digest256,except-flashsubdoc-digest256,
// except-flashinfobar-digest256,ads-track-digest256,social-track-digest256,
// analytics-track-digest256,fastblock1-track-digest256,fastblock1-trackwhite-digest256,
// fastblock2-track-digest256,fastblock2-trackwhite-digest256,fastblock3-track-digest256

// Pref : 
lockPref("identity.fxaccounts.remote.root", "");
// Default Value
// https://accounts.firefox.com/

// Pref : 
lockPref("services.settings.server", "");
// Default Value
// https://firefox.settings.services.mozilla.com/v1

// Pref : 
lockPref("services.sync.fxa.privacyURL", "");
// Default Value
// https://accounts.firefox.com/legal/privacy

// Pref : 
lockPref("services.sync.fxa.termsURL", "");
// Default Value
// https://accounts.firefox.com/legal/terms

// Pref : 
lockPref("services.blocklist.addons.signer", "");
// Default Value
// remote-settings.content-signature.mozilla.org

// Pref : 
lockPref("services.blocklist.gfx.signer", "");
// Default Value
// remote-settings.content-signature.mozilla.org

// Pref : 
lockPref("services.blocklist.onecrl.signer", "");
// Default Value
// onecrl.content-signature.mozilla.org

// Pref : 
lockPref("services.blocklist.pinning.signer", "");
// Default Value
// pinning-preload.content-signature.mozilla.org

// Pref : 
lockPref("services.blocklist.plugins.signer", "");
// Default Value
// remote-settings.content-signature.mozilla.org

// Pref : 
lockPref("services.settings.default_signer", "");
// Default Value
// remote-settings.content-signature.mozilla.org

// Pref : 
lockPref("accessibility.support.url", "");
// Default Value
// https://support.mozilla.org/%LOCALE%/kb/accessibility-services

// Pref : 
lockPref("app.normandy.shieldLearnMoreUrl", "");
// Default Value
// https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/shield

// Pref : 
lockPref("app.productInfo.baseURL", "");
// Default Value
// https://www.mozilla.org/firefox/features/

// Pref : 
lockPref("app.support.baseURL", "");
// Default Value
// https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/

// Pref : 
lockPref("browser.chrome.errorReporter.infoURL", "");
// Default Value
// https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/nightly-error-collection

// Pref : 
lockPref("browser.dictionaries.download.url", "");
// Default Value
// https://addons.mozilla.org/%LOCALE%/firefox/dictionaries/

// Pref : 
lockPref("browser.geolocation.warning.infoURL", "");
// Default Value
// https://www.mozilla.org/%LOCALE%/firefox/geolocation/

// Pref : 
lockPref("browser.search.searchEnginesURL", "");
// Default Value
// https://addons.mozilla.org/%LOCALE%/firefox/search-engines/

// Pref : 
lockPref("browser.uitour.themeOrigin", "");
// Default Value
// https://addons.mozilla.org/%LOCALE%/firefox/themes/

// Pref : Disable WebIDE ADB Dxtension Downloads 
// Pref : 2608 : gHacks Deprecated Active
lockPref("devtools.webide.adbAddonURL", "");
// Default Value
// https://ftp.mozilla.org/pub/mozilla.org/labs/fxos-simulator/adb-helper/#OS#/adbhelper-#OS#-latest.xpi

// Pref : 
lockPref("extensions.getAddons.compatOverides.url", "");
// Default Value
// https://services.addons.mozilla.org/api/v3/addons/compat-override/?guid=%IDS%&lang=%LOCALE%

// Pref : 
lockPref("extensions.getAddons.get.url", "");
// Default Value
// https://services.addons.mozilla.org/api/v3/addons/search/?guid=%IDS%&lang=%LOCALE%

// Pref : 
lockPref("extensions.getAddons.langpacks.url", "");
// Default Value
// https://services.addons.mozilla.org/api/v3/addons/language-tools/?app=firefox&type=language&appversion=%VERSION%

// Pref : 
lockPref("extensions.getAddons.link.url", "");
// Default Value
// https://addons.mozilla.org/%LOCALE%/firefox/

// Pref : 
lockPref("extensions.getAddons.search.browseURL", "");
// Default Value
// https://addons.mozilla.org/%LOCALE%/firefox/search?q=%TERMS%&platform=%OS%&appver=%VERSION%

// Pref : 
lockPref("extensions.getAddons.themes.browseURL", "");
// Default Value
// https://addons.mozilla.org/%LOCALE%/firefox/themes/?src=firefox

// Pref : 
lockPref("services.sync.addons.trustedSourceHostnames", "");
// Default Value
// addons.mozilla.org

// Pref : 
lockPref("toolkit.datacollection.infoURL", "");
// Default Value
// https://www.mozilla.org/legal/privacy/firefox.html

// Pref : 
lockPref("xpinstall.signatures.devInfoURL", "");
// Default Value
// https://wiki.mozilla.org/Addons/Extension_Signing

// Pref : 
lockPref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "");
// Default Value
// google,amazon

// Pref : 
lockPref("browser.newtabpage.activity-stream.fxaccounts.endpoint", "");
// Default Value
// https://accounts.firefox.com/

// Pref : 
lockPref("extensions.update.url", "");
// Default Value
// https://versioncheck.addons.mozilla.org/update/VersionCheck.php?reqVersion=
// %REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&maxAppVersion=
// %ITEM_MAXAPPVERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=%APP_VERSION%&appOS=
// %APP_OS%&appABI=%APP_ABI%&locale=%APP_LOCALE%&currentAppVersion=
// %CURRENT_APP_VERSION%&updateType=%UPDATE_TYPE%&compatMode=%COMPATIBILITY_MODE%

// Pref : 
lockPref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "");
// Default Value
// {"api_key_pref":"extensions.pocket.oAuthConsumerKey","hidden":false,"provider_icon":
// "pocket","provider_name":"Pocket","read_more_endpoint":"https://getpocket.com/explore/
// trending?src=fx_new_tab","stories_endpoint":"https://getpocket.cdn.mozilla.net/v3/
// firefox/global-recs?version=3&consumer_key=$apiKey&locale_lang=en-US&feed_variant=
// default_spocs_on","stories_referrer":"https://getpocket.com/recommendations",
// "topics_endpoint":"https://getpocket.cdn.mozilla.net/v3/firefox/trending-topics?
// version=2&consumer_key=$apiKey&locale_lang=en-US","show_spocs":true,"personalized":true}

// Pref : 
lockPref("lightweightThemes.recommendedThemes", "");
// Default Value
// [{"id":"recommended-1","homepageURL":"https://addons.mozilla.org/firefox/addon/a-web-browser-renaissance/",
// "headerURL":"resource:///chrome/browser/content/browser/defaultthemes/1.header.jpg",
// "textcolor":"#000000","accentcolor":"#834d29","iconURL":"resource:///chrome/browser/content/browser/
// defaultthemes/1.icon.jpg","previewURL":"resource:///chrome/browser/content/browser/defaultthemes/1.
// preview.jpg","author":"Sean.Martell","version":"0"},{"id":"recommended-2","homepageURL":
// "https://addons.mozilla.org/firefox/addon/space-fantasy/","headerURL":
// "resource:///chrome/browser/content/browser/defaultthemes/2.header.jpg",
// "textcolor":"#ffffff","accentcolor":"#d9d9d9","iconURL":"resource:///chrome/browser/content/browser/
// defaultthemes/2.icon.jpg","previewURL":"resource:///chrome/browser/content/browser/defaultthemes/
// 2.preview.jpg","author":"fx5800p","version":"1.0"},{"id":"recommended-4","homepageURL":
// "https://addons.mozilla.org/firefox/addon/pastel-gradient/","headerURL":
// "resource:///chrome/browser/content/browser/defaultthemes/4.header.png",
// "textcolor":"#000000","accentcolor":"#000000","iconURL":
// "resource:///chrome/browser/content/browser/defaultthemes/4.icon.png","previewURL":
// "resource:///chrome/browser/content/browser/defaultthemes/4.preview.png",
// "author":"darrinhenein","version":"1.0"}]

// Other Sync Settings - Disabling By Prevention ---------------------------------------------------------

lockPref("services.sync.maxResyncs", 0); //5
lockPref("services.sync.telemetry.maxPayloadCount", 0); //500
lockPref("services.sync.addons.ignoreUserEnabledChanges", true); //false
lockPref("services.sync.engine.addons", false); //true
lockPref("services.sync.engine.addresses", false); //false
lockPref("services.sync.engine.bookmarks", false); //true
lockPref("services.sync.engine.bookmarks.buffer", false); //false
lockPref("services.sync.engine.creditcards", false); //false
lockPref("services.sync.engine.creditcards.available", false); //false
lockPref("services.sync.engine.history", false); //true
lockPref("services.sync.engine.passwords", false); //true
lockPref("services.sync.engine.prefs", false); //true
lockPref("services.sync.engine.tabs", false); //true  
lockPref("services.sync.log.appender.file.logOnError", false); //true
lockPref("services.sync.log.appender.file.logOnSuccess", false); //false
lockPref("services.sync.log.cryptoDebug", false); //false
lockPref("services.sync.sendVersionInfo", false); //true
lockPref("services.sync.syncedTabs.showRemoteIcons", true); //true
lockPref("services.sync.prefs.sync.accessibility.blockautorefresh", false); //true
lockPref("services.sync.prefs.sync.accessibility.browsewithcaret", false); //true
lockPref("services.sync.prefs.sync.accessibility.typeaheadfind", false); //true
lockPref("services.sync.prefs.sync.accessibility.typeaheadfind.linksonly", false); //true
lockPref("services.sync.prefs.sync.addons.ignoreUserEnabledChanges", true); //true
lockPref("services.sync.prefs.sync.browser.contentblocking.enabled", false); //true
lockPref("services.sync.prefs.sync.browser.ctrlTab.recentlyUsedOrder", false); //true
lockPref("services.sync.prefs.sync.browser.download.useDownloadDir", false); //true
lockPref("services.sync.prefs.sync.browser.formfill.enable", false); //true
lockPref("services.sync.prefs.sync.browser.link.open_newwindow", false); //true
lockPref("services.sync.prefs.sync.browser.newtabpage.enabled", false); //true
lockPref("services.sync.prefs.sync.browser.newtabpage.pinned", false); //true
lockPref("services.sync.prefs.sync.browser.offline-apps.notify", false); //true
lockPref("services.sync.prefs.sync.browser.search.update", false); //true
lockPref("services.sync.prefs.sync.browser.sessionstore.restore_on_demand", false); //true
lockPref("services.sync.prefs.sync.browser.startup.homepage", false); //true
lockPref("services.sync.prefs.sync.browser.startup.page", false); //true
lockPref("services.sync.prefs.sync.browser.tabs.loadInBackground", false); //true
lockPref("services.sync.prefs.sync.browser.tabs.warnOnClose", false); //true
lockPref("services.sync.prefs.sync.browser.tabs.warnOnOpen", false); //true
lockPref("services.sync.prefs.sync.browser.urlbar.autocomplete.enabled", false); //true
lockPref("services.sync.prefs.sync.browser.urlbar.matchBuckets", false); //true
lockPref("services.sync.prefs.sync.browser.urlbar.maxRichResults", false); //true
lockPref("services.sync.prefs.sync.browser.urlbar.suggest.bookmark", false); //true
lockPref("services.sync.prefs.sync.browser.urlbar.suggest.history", false); //true
lockPref("services.sync.prefs.sync.browser.urlbar.suggest.history.onlyTyped", false); //true
lockPref("services.sync.prefs.sync.browser.urlbar.suggest.openpage", false); //true
lockPref("services.sync.prefs.sync.browser.urlbar.suggest.searches", false); //true
lockPref("services.sync.prefs.sync.dom.disable_open_during_load", false); //true
lockPref("services.sync.prefs.sync.dom.disable_window_flip", false); //true
lockPref("services.sync.prefs.sync.dom.disable_window_move_resize", false); //true
lockPref("services.sync.prefs.sync.dom.event.contextmenu.enabled", false); //true
lockPref("services.sync.prefs.sync.extensions.personas.current", false); //true
lockPref("services.sync.prefs.sync.extensions.update.enabled", false); //true
lockPref("services.sync.prefs.sync.intl.accept_languages", false); //true
lockPref("services.sync.prefs.sync.layout.spellcheckDefault", false); //true
lockPref("services.sync.prefs.sync.lightweightThemes.selectedThemeID", false); //true
lockPref("services.sync.prefs.sync.lightweightThemes.usedThemes", false); //true
lockPref("services.sync.prefs.sync.network.cookie.cookieBehavior", false); //true
lockPref("services.sync.prefs.sync.network.cookie.lifetimePolicy", false); //true
lockPref("services.sync.prefs.sync.network.cookie.thirdparty.sessionOnly", false); //true
lockPref("services.sync.prefs.sync.permissions.default.image", false); //true
lockPref("services.sync.prefs.sync.pref.advanced.images.disable_button.view_image", false); //true
lockPref("services.sync.prefs.sync.pref.advanced.javascript.disable_button.advanced", false); //true
lockPref("services.sync.prefs.sync.pref.downloads.disable_button.edit_actions", false); //true
lockPref("services.sync.prefs.sync.pref.privacy.disable_button.cookie_exceptions", false); //true
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.cache", false); //true
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.cookies", false); //true
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.downloads", false); //true
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.formdata", false); //true
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.history", false); //true
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.offlineApps", false); //true
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.sessions", false); //true
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.siteSettings", false); //true
lockPref("services.sync.prefs.sync.privacy.donottrackheader.enabled", false); //true
lockPref("services.sync.prefs.sync.privacy.reduceTimerPrecision", false); //true
lockPref("services.sync.prefs.sync.privacy.resistFingerprinting", false); //true
lockPref("services.sync.prefs.sync.privacy.resistFingerprinting.reduceTimerPrecision.jitter", false); //true
lockPref("services.sync.prefs.sync.privacy.resistFingerprinting.reduceTimerPrecision.microseconds", false); //true
lockPref("services.sync.prefs.sync.privacy.sanitize.sanitizeOnShutdown", false); //true
lockPref("services.sync.prefs.sync.privacy.trackingprotection.enabled", false); //true
lockPref("services.sync.prefs.sync.privacy.trackingprotection.pbmode.enabled", false); //true
lockPref("services.sync.prefs.sync.security.OCSP.enabled", false); //true
lockPref("services.sync.prefs.sync.security.OCSP.require", false); //true
lockPref("services.sync.prefs.sync.security.default_personal_cert", false); //true
lockPref("services.sync.prefs.sync.security.tls.version.max", false); //true
lockPref("services.sync.prefs.sync.security.tls.version.min", false); //true
lockPref("services.sync.prefs.sync.services.sync.syncedTabs.showRemoteIcons", false); //true
lockPref("services.sync.prefs.sync.spellchecker.dictionary", false); //true
lockPref("services.sync.prefs.sync.xpinstall.whitelist.required", false); //true

// Testing -----------------------------------------------------------------------------------------------

// Pref : Test To Make FFox Silent
lockPref("browser.chrome.errorReporter.publicKey", "");
// Default Value
// c709cb7a2c0b4f0882fcc84a5af161ec

// Pref : Test To Make FFox Silent
lockPref("prio.publicKeyA", "");
// Default Value
// 35AC1C7576C7C6EDD7FED6BCFC337B34D48CB4EE45C86BEEFB40BD8875707733
lockPref("prio.publicKeyB", "");
// Default Value
// 26E6674E65425B823F1F1D5F96E3BB3EF9E406EC7FBA7DEF8B08A35DD135AF50

// Pref : Other webGl [WINDOWS]
lockPref("webgl.dxgl.enabled", false); 

// Pref : disable scanning for plugins [WINDOWS]
lockPref("plugin.scan.plid.all", false);

// Pref : disable Windows jumplist [WINDOWS]
lockPref("browser.taskbar.lists.enabled", false);
lockPref("browser.taskbar.lists.frequent.enabled", false);
lockPref("browser.taskbar.lists.recent.enabled", false);
lockPref("browser.taskbar.lists.tasks.enabled", false);

// Pref : disable Windows taskbar preview [WINDOWS] 
lockPref("browser.taskbar.previews.enable", false);

// Pref : disable links launching Windows Store on Windows 8/8.1/10 [WINDOWS]
// [1] https://www.ghacks.net/2016/03/25/block-firefox-chrome-windows-store/ 
lockPref("network.protocol-handler.external.ms-windows-store", false);

// Pref : disable background update service [WINDOWS]
// [SETTING] General>Firefox Updates>Use a background service to install updates 
lockPref("app.update.service.enabled", false);

// Pref : disable automatic Firefox start and session restore after reboot [WINDOWS] (FF62+)
// [1] https://bugzilla.mozilla.org/603903 
lockPref("toolkit.winRegisterApplicationRestart", false);

// Pref : 1220: disable Windows 8.1's Microsoft Family Safety cert [WINDOWS] (FF50+)
// 0=disable detecting Family Safety mode and importing the root
// 1=only attempt to detect Family Safety mode (don't import the root)
// 2=detect Family Safety mode and import the root
// [1] https://trac.torproject.org/projects/tor/ticket/21686 
lockPref("security.family_safety.mode", 0);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Firefox ESR60.x    
// Deprecated Active For ESR
// Bench Diff : ???/5000
// >>>>>>>>>>>>>>>>>>>>>

// Pref : Geolocation
lockPref("browser.search.countryCode", "US");

// Pref : Disable Mozilla telemetry/experiments
// https://wiki.mozilla.org/Platform/Features/Telemetry
// https://wiki.mozilla.org/Privacy/Reviews/Telemetry
// https://wiki.mozilla.org/Telemetry
// https://www.mozilla.org/en-US/legal/privacy/firefox.html#telemetry
// https://support.mozilla.org/t5/Firefox-crashes/Mozilla-Crash-Reporter/ta-p/1715
// https://wiki.mozilla.org/Security/Reviews/Firefox6/ReviewNotes/telemetry
// https://gecko.readthedocs.io/en/latest/browser/experiments/experiments/manifest.html
// https://wiki.mozilla.org/Telemetry/Experiments
// https://support.mozilla.org/en-US/questions/1197144
lockPref("experiments.activeExperiment", false);
lockPref("experiments.enabled", false);
lockPref("experiments.manifest.uri", "");
lockPref("experiments.supported", false);

// Pref : 2612: disable remote JAR files being opened, regardless of content type (FF42+)
// [1] https://bugzilla.mozilla.org/1173171
// [2] https://www.fxsitecompat.com/en-CA/docs/2015/jar-protocol-support-has-been-disabled-by-default/
// [-] https://bugzilla.mozilla.org/1427726
lockPref("network.jar.block-remote-files", true);

// Pref : 2613: disable JAR from opening Unsafe File Types
// [-] https://bugzilla.mozilla.org/1427726
lockPref("network.jar.open-unsafe-types", false);

// Pref : Disable Java NPAPI plugin
lockPref("plugin.state.java", 0);

// Pref : 0402: enable Kinto blocklist updates (FF50+)
// What is Kinto?: https://wiki.mozilla.org/Firefox/Kinto#Specifications
// As Firefox transitions to Kinto, the blocklists have been broken down into entries for certs to be
// revoked, extensions and plugins to be disabled, and gfx environments that cause problems or crashes
// [-] https://bugzilla.mozilla.org/1458917
lockPref("services.blocklist.update_enabled", false);

// Pref : 0503: disable "Savant" Shield study (FF61+)
// [-] https://bugzilla.mozilla.org/1457226
lockPref("shield.savant.enabled", false);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Security 1/3
// Bench Diff : +0/5000
// >>>>>>>>>>>>>>>>>>>>

// Pref : Enable insecure password warnings (login forms in non-HTTPS pages)
// https://blog.mozilla.org/tanvi/2016/01/28/no-more-passwords-over-http-please/
// https://bugzilla.mozilla.org/show_bug.cgi?id=1319119
// https://bugzilla.mozilla.org/show_bug.cgi?id=1217156
lockPref("security.insecure_password.ui.enabled", true);

// Pref : Show in-content login form warning UI for insecure login fields
// https://hg.mozilla.org/integration/mozilla-inbound/rev/f0d146fe7317
lockPref("security.insecure_field_warning.contextual.enabled", true);

// Pref : Disable HSTS preload list (pre-set HSTS sites list provided by Mozilla)
// https://blog.mozilla.org/security/2012/11/01/preloading-hsts/
// https://wiki.mozilla.org/Privacy/Features/HSTS_Preload_List
// https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security
lockPref("network.stricttransportsecurity.preloadlist",	false);

// Pref : Disable TLS Session Tickets
// https://www.blackhat.com/us-13/briefings.html#NextGen
// https://media.blackhat.com/us-13/US-13-Daigniere-TLS-Secrets-Slides.pdf
// https://media.blackhat.com/us-13/US-13-Daigniere-TLS-Secrets-WP.pdf
// https://bugzilla.mozilla.org/show_bug.cgi?id=917049
// https://bugzilla.mozilla.org/show_bug.cgi?id=967977
// SSL Session IDs speed up HTTPS connections (no need to renegotiate) and last for 48hrs.
// Since the ID is unique, web servers can (and do) use it for tracking. If set to true,
// this disables sending SSL Session IDs and TLS Session Tickets to prevent session tracking
lockPref("security.ssl.disable_session_identifiers", true);

// Pref : Blocking GD Parking Scam Site 
defaultPref("network.dns.localDomains", "librefox.com");

// Pref : Disable insecure TLS version fallback
// https://bugzilla.mozilla.org/show_bug.cgi?id=1084025
// https://github.com/pyllyukko/user.js/pull/206#issuecomment-280229645
lockPref("security.tls.version.fallback-limit", 3);

// Pref : Only allow TLS 1.[0-3]
// http://kb.mozillazine.org/Security.tls.version.*
lockPref("security.tls.version.min", 2);

// Pref : Enfore Public Key Pinning
// https://en.wikipedia.org/wiki/HTTP_Public_Key_Pinning
// https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning
// "2. Strict. Pinning is always enforced."
lockPref("security.cert_pinning.enforcement_level", 2);

// Pref : Disallow SHA-1
// https://bugzilla.mozilla.org/show_bug.cgi?id=1302140
// https://shattered.io/
lockPref("security.pki.sha1_enforcement_level", 1);

// Pref : Warn the user when server doesn't support RFC 5746 ("safe" renegotiation)
// https://wiki.mozilla.org/Security:Renegotiation#security.ssl.treat_unsafe_negotiation_as_broken
// https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2009-3555
lockPref("security.ssl.treat_unsafe_negotiation_as_broken",	true);

// Pref : Pre-populate the current URL but do not pre-fetch the certificate in the 
// "Add Security Exception" dialog
// http://kb.mozillazine.org/Browser.ssl_override_behavior
// https://github.com/pyllyukko/user.js/issues/210
lockPref("browser.ssl_override_behavior", 1);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Security 2/3
// Bench Diff : +0/5000
// >>>>>>>>>>>>>>>>>>>>

// Pref :
lockPref("security.ssl.errorReporting.automatic", false);
lockPref("security.ssl.errorReporting.url", "");

// Pref : Check disabled section
// OCSP Leaks the visited sited exactly same issue as safebrowsing.
// Stapling have the site itsefl proof that his certificate is good 
// through the CA so apparently nothing is leaked in this case.
// [1] https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/ 
lockPref("security.OCSP.enabled", 0);
lockPref("security.OCSP.require", false);
lockPref("security.ssl.enable_ocsp_stapling", true);

// Pref :
lockPref("security.ssl.errorReporting.enabled", false);

// Pref : Manage certificates button
//lockPref("security.disable_button.openCertManager", false);
// Disabled because of a bug that disable the button no matter what is the value

// Pref : Manage security devices button
//lockPref("security.disable_button.openDeviceManager", false);
// Disabled because of a bug that disable the button no matter what is the value

// Pref :
lockPref("security.mixed_content.upgrade_display_content", true);
lockPref("security.mixed_content.block_object_subrequest", true);
lockPref("security.mixed_content.block_display_content", true);
lockPref("security.mixed_content.block_active_content", true);

// Pref :
lockPref("security.insecure_connection_icon.enabled", true);
lockPref("security.insecure_connection_icon.pbmode.enabled", true);
lockPref("security.insecure_connection_text.enabled", true);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Security 3/3 (Cipher)
// Bench Diff : +0/5000
// >>>>>>>>>>>>>>>>>>>>

// Pref :
lockPref("security.ssl3.rsa_des_ede3_sha", false);
lockPref("security.ssl3.rsa_aes_256_sha", false);
lockPref("security.ssl3.rsa_aes_128_sha", false);

// Pref : Disable RC4
// https://developer.mozilla.org/en-US/Firefox/Releases/38#Security
// https://bugzilla.mozilla.org/show_bug.cgi?id=1138882
// https://rc4.io/
// https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2566
lockPref("security.ssl3.ecdh_ecdsa_rc4_128_sha", false);
lockPref("security.ssl3.ecdh_rsa_rc4_128_sha", false);

// Pref : Disable SEED cipher
// https://en.wikipedia.org/wiki/SEED
lockPref("security.ssl3.rsa_seed_sha", false);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Performances 1/5
// Defaulting settings - HW Settings can be checked under about:support
// Bench Diff : +650/5000 
// >>>>>>>>>>>>>>>>>>>>>>

// Bench Diff : +100/5000 
// Pref : Increases animation speed. May mitigate choppy scrolling.
defaultPref("layout.frame_rate.precise", true);

// Bench Diff : +500/5000 
// Pref : Enable Hardware Acceleration and Off Main Thread Compositing (OMTC).
// It's likely your browser is already set to use these features.
// May introduce instability on some hardware.
defaultPref("webgl.force-enabled", true);
defaultPref("layers.acceleration.force-enabled", true);

// Pref : 2508: disable hardware acceleration to reduce graphics fingerprinting
// [SETTING] General>Performance>Custom>Use hardware acceleration when available
// [SETUP-PERF] Affects text rendering (fonts will look different), impacts video performance,
// and parts of Quantum that utilize the GPU will also be affected as they are rolled out
// [1] https://wiki.mozilla.org/Platform/GFX/HardwareAcceleration 
// Resolved with extension
defaultPref("gfx.direct2d.disabled", false); // [WINDOWS]
defaultPref("layers.acceleration.disabled", false); 

// Bench Diff : 0/5000 
// Pref :
defaultPref("html5.offmainthread", true); //default true
defaultPref("layers.offmainthreadcomposition.enabled", true);
defaultPref("layers.offmainthreadcomposition.async-animations", true);
defaultPref("layers.async-video.enabled", true);

// Bench Diff : +50/5000
// Pref : Deprecated Active
defaultPref("browser.tabs.animate", false);

// Pref : The impact for this one is negligible
//defaultPref("browser.download.animateNotifications", false);	

// Bench Diff : -80/5000 
// Pref : Spoof CPU Core Def 16
// Default settings seems to be the best
//defaultPref("dom.maxHardwareConcurrency", 8);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Performances 2/5
// Bench Diff : -800/5000
// >>>>>>>>>>>>>>>>>>>>>>

// Bench Diff : -500/5000
// Pref : Tell garbage collector to start running when javascript is using xx MB of memory. 
// Garbage collection releases memory back to the system.
// Default settings seems to be the best
//lockPref("javascript.options.mem.high_water_mark", 96);

// Bench Diff : -200/5000 
// Pref : Disable WebAssembly
// https://webassembly.org/
// https://en.wikipedia.org/wiki/WebAssembly
// https://trac.torproject.org/projects/tor/ticket/21549
// Solved with extension disabled here for performances 
//lockPref("javascript.options.wasm", false);

// Bench Diff : -100/5000 
// Pref : Prevent font fingerprinting
// https://browserleaks.com/fonts
// https://github.com/pyllyukko/user.js/issues/120
// Solved with extension disabled here for performances 
//lockPref("browser.display.use_document_fonts", 0);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Performances 3/5
// Bench Diff : -1720/5000
// >>>>>>>>>>>>>>>>>>>>>>>

// Bench Diff : -220/5000
// Pref : Disable webGL I/II
// WebGL introduce high fingerprinting... (webgl is direct hardware js) 
lockPref("webgl.disabled", true);
lockPref("webgl.enable-webgl2", false);
lockPref("webgl.min_capability_mode", true);

// Bench Diff : 0/5000
// Pref : Disable webGL II/II
// WebGL introduce high fingerprinting... (webgl is direct hardware js) 
lockPref("pdfjs.enableWebGL", false);
lockPref("webgl.disable-extensions", true);
lockPref("webgl.disable-fail-if-major-performance-caveat", true);
lockPref("webgl.enable-debug-renderer-info", false); //Deprecated Active

// Bench Diff : -1500/5000
// Pref : Disable asm.js
// http://asmjs.org/
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-29/
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-50/
// https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-2712
// Solved with extension disabled here for performances 
//lockPref("javascript.options.asmjs", false);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Performances 4/5
// Bench Diff : -200/5000 
// >>>>>>>>>>>>>>>>>>>>>>

// Bench Diff : -200/5000 
// Pref : JS Shared Memory - Default false 
// https://github.com/MrAlex94/Waterfox/issues/356
lockPref("javascript.options.shared_memory", false);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Performances 5/5
// Bench Diff : -50/5000 
// >>>>>>>>>>>>>>>>>>>>>

// Bench Diff : -50/5000 
// Pref : 2302 : disable service workers
// Service workers essentially act as proxy servers that sit between web apps, and the browser
// and network, are event driven, and can control the web page/site it is associated with,
// intercepting and modifying navigation and resource requests, and caching resources.
// SW may decrease performances depending on the script this ot that site is running in background
// So overall disabling SW should enhance performances because it block SW Scripts 
// [NOTE] Service worker APIs are hidden (in Firefox) and cannot be used when in PB mode.
// [NOTE] Service workers only run over HTTPS. Service Workers have no DOM access. 
lockPref("dom.serviceWorkers.enabled", false);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : General Settings 1/3
// Bench Diff : +100/5000
// >>>>>>>>>>>>>>>>>>>>>>

// Pref : Onboarding tour disable because of included telemetry
// This extension is already removed this setting is just in case it
// comeback or for users using the script outside the bundle
lockPref("browser.onboarding.notification.finished", true);
lockPref("browser.onboarding.tour.onboarding-tour-customize.completed", true);
lockPref("browser.onboarding.tour.onboarding-tour-performance.completed", true);

// Pref :
lockPref("devtools.onboarding.telemetry.logged", false);

// Pref :
lockPref("services.sync.engine.addresses.available", false);

// Pref :
lockPref("browser.bookmarks.restore_default_bookmarks", false);

// Pref :
lockPref("pdfjs.previousHandler.alwaysAskBeforeHandling", true);

// Pref : Caching for integrated PDF 
lockPref("pdfjs.enabledCache.state", false);

// Pref :
lockPref("pref.general.disable_button.default_browser", false);
lockPref("pref.privacy.disable_button.view_passwords", false);

// Pref :
lockPref("identity.mobilepromo.android", "");

// Pref :
lockPref("extensions.systemAddon.update.url", "");

// Pref :
lockPref("datareporting.healthreport.infoURL", "");

// Pref :
lockPref("browser.urlbar.daysBeforeHidingSuggestionsPrompt", 0);
lockPref("browser.urlbar.searchSuggestionsChoice", false);
lockPref("browser.urlbar.timesBeforeHidingSuggestionsHint", 0);

// Pref :
lockPref("browser.shell.didSkipDefaultBrowserCheckOnFirstRun", true);

// Pref :
lockPref("app.feedback.baseURL", "");

// Pref :
lockPref("app.normandy.enabled", false);
lockPref("app.normandy.api_url", "");
lockPref("app.normandy.first_run", false);
lockPref("app.normandy.user_id", "");

// Pref :
lockPref("app.releaseNotesURL", "");

// Pref :
lockPref("app.update.auto", false);
lockPref("extensions.update.autoUpdateDefault", false);
lockPref("app.update.staging.enabled", false);
lockPref("app.update.silent", false);
lockPref("app.update.lastUpdateTime.telemetry_modules_ping", 0);
lockPref("app.update.url", "");
lockPref("app.update.url.details", "");
lockPref("app.update.url.manual", "");

// Pref :
lockPref("app.vendorURL", "");

// Pref :
lockPref("breakpad.reportURL", "");

// Pref :
lockPref("browser.chrome.errorReporter.submitUrl", "");
lockPref("browser.chrome.errorReporter.enabled", false);

// Pref :
lockPref("browser.ping-centre.staging.endpoint", "");
lockPref("browser.ping-centre.telemetry", false);

// Pref : Google Safe Browsing (Block dangerous and deceptive contents)

//    browser.safebrowsing.downloads.enabled                            true
  //  browser.safebrowsing.downloads.remote.block_potentially_unwanted  true
 //   browser.safebrowsing.downloads.remote.block_uncommon              true
 //   browser.safebrowsing.malware.enabled                              true
 //   browser.safebrowsing.phishing.enabled                             true

lockPref("browser.safebrowsing.id", "");
lockPref("browser.safebrowsing.provider.google4.pver", "");
lockPref("browser.safebrowsing.provider.mozilla.pver", "");
lockPref("browser.safebrowsing.allowOverride", false);
lockPref("browser.safebrowsing.blockedURIs.enabled", false);
lockPref("browser.safebrowsing.downloads.enabled", false);
lockPref("browser.safebrowsing.downloads.remote.block_dangerous", false);
lockPref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
lockPref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
lockPref("browser.safebrowsing.downloads.remote.block_uncommon", false);
lockPref("browser.safebrowsing.downloads.remote.enabled", false);
lockPref("browser.safebrowsing.downloads.remote.url", "");
lockPref("browser.safebrowsing.malware.enabled", false);
lockPref("browser.safebrowsing.passwords.enabled", false);
lockPref("browser.safebrowsing.phishing.enabled", false);
lockPref("browser.safebrowsing.provider.google4.advisoryURL", "");
lockPref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
lockPref("browser.safebrowsing.provider.google4.dataSharingURL", "");
lockPref("browser.safebrowsing.provider.google4.gethashURL", "");
lockPref("browser.safebrowsing.provider.google4.lists", "");
lockPref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
lockPref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
lockPref("browser.safebrowsing.provider.google4.reportURL", "");
lockPref("browser.safebrowsing.provider.google4.updateURL", "");
lockPref("browser.safebrowsing.provider.google4.lastupdatetime", "");
lockPref("browser.safebrowsing.provider.google4.nextupdatetime", "");
lockPref("browser.safebrowsing.provider.google.advisoryURL", "");
lockPref("browser.safebrowsing.provider.google.gethashURL", "");
lockPref("browser.safebrowsing.provider.google.lastupdatetime", "");
lockPref("browser.safebrowsing.provider.google.lists", "");
lockPref("browser.safebrowsing.provider.google.nextupdatetime", "");
lockPref("browser.safebrowsing.provider.google.pver", "");
lockPref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
lockPref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
lockPref("browser.safebrowsing.provider.google.reportURL", "");
lockPref("browser.safebrowsing.provider.google.updateURL", "");
lockPref("browser.safebrowsing.provider.mozilla.gethashURL", "");
lockPref("browser.safebrowsing.provider.mozilla.lastupdatetime", "");
lockPref("browser.safebrowsing.provider.mozilla.nextupdatetime", "");
lockPref("browser.safebrowsing.provider.mozilla.updateURL", "");
lockPref("browser.safebrowsing.reportPhishURL", "");

// Pref :
lockPref("browser.search.suggest.enabled", false);

// Pref :
lockPref("captivedetect.canonicalURL", "");

// Pref :
lockPref("datareporting.policy.firstRunURL", "");

// Pref :
lockPref("devtools.devedition.promo.url", "");
lockPref("devtools.devices.url", "");
lockPref("devtools.gcli.imgurUploadURL", "");
lockPref("devtools.gcli.jquerySrc", "");
lockPref("devtools.gcli.underscoreSrc", "");
lockPref("devtools.telemetry.supported_performance_marks", "");
lockPref("devtools.telemetry.tools.opened.version", "");

// Pref :
lockPref("dom.battery.enabled", false);

// Pref :
lockPref("dom.permissions.enabled", false);

// Pref : Maximum pop launch at the same time
lockPref("dom.popup_maximum", 4);

// Pref :
lockPref("dom.registerProtocolHandler.insecure.enabled", true);

// Pref :
lockPref("extensions.blocklist.detailsURL", "");
lockPref("extensions.blocklist.itemURL", "");

// Pref : Block list url disabled
// gHacks tune this to minimize privacy issue.. its complitely disabled here
// Disabled complitely
lockPref("extensions.blocklist.url", "");

// Pref :
lockPref("extensions.update.background.url", "");

// Pref :
lockPref("extensions.getAddons.showPane", false);

// Pref :
lockPref("extensions.webservice.discoverURL", "");

// Pref :
lockPref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
lockPref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
lockPref("gecko.handlerService.schemes.webcal.0.uriTemplate", "");

// Pref :
lockPref("geo.enabled", false);
lockPref("geo.wifi.uri", "");

// Pref :
lockPref("identity.fxaccounts.auth.uri", "");
lockPref("identity.fxaccounts.remote.oauth.uri", "");
lockPref("identity.fxaccounts.remote.profile.uri", "");
lockPref("identity.mobilepromo.ios", "");

// Pref :
lockPref("layout.css.visited_links_enabled", false);

// Pref :
lockPref("lpbmode.enabled", true);

// Pref :
lockPref("mailnews.messageid_browser.url", "");
lockPref("mailnews.mx_service_url", "");

// Pref : 0608 : disable predictor / prefetching (FF48+) 
// Network predicator load pages before they are opened 
// with mose hover for example
lockPref("network.predictor.enabled", false);
lockPref("network.predictor.cleaned-up", true);
lockPref("network.predictor.enable-prefetch", false);

// Pref :
lockPref("plugins.crash.supportUrl", "");

// Pref : Sync prefs
lockPref("services.sync.clients.lastSync", "0");
lockPref("services.sync.clients.lastSyncLocal", "0");
lockPref("services.sync.declinedEngines", "");
lockPref("services.sync.enabled", false);
lockPref("services.sync.globalScore", 0);
lockPref("services.sync.jpake.serverURL", "");
lockPref("services.sync.migrated", true);
lockPref("services.sync.nextSync", 0);
lockPref("services.sync.prefs.sync.browser.safebrowsing.downloads.enabled", false);
lockPref("services.sync.prefs.sync.browser.safebrowsing.malware.enabled", false);
lockPref("services.sync.prefs.sync.browser.safebrowsing.passwords.enabled", false);
lockPref("services.sync.prefs.sync.browser.safebrowsing.phishing.enabled", false);
lockPref("services.sync.serverURL", "");
lockPref("services.sync.tabs.lastSync", "0");
lockPref("services.sync.tabs.lastSyncLocal", "0");

// Pref :
lockPref("sync.enabled", false);

// Pref :
lockPref("sync.jpake.serverURL", "");

// Pref :
lockPref("sync.serverURL", "");

// Pref :
lockPref("toolkit.crashreporter.infoURL", "");

// Pref : Disable telemetry
lockPref("toolkit.telemetry.archive.enabled", false);
lockPref("toolkit.telemetry.updatePing.enabled", false);
lockPref("toolkit.telemetry.bhrPing.enabled", false);
lockPref("toolkit.telemetry.cachedClientID", "");
lockPref("toolkit.telemetry.enabled", false);
lockPref("toolkit.telemetry.firstShutdownPing.enabled", false);
lockPref("toolkit.telemetry.hybridContent.enabled", false);
lockPref("toolkit.telemetry.infoURL", "");
lockPref("toolkit.telemetry.newProfilePing.enabled", false);
lockPref("toolkit.telemetry.previousBuildID", "");
lockPref("toolkit.telemetry.prompted", 2); //Setting seem to still exist
lockPref("toolkit.telemetry.rejected", true);
lockPref("toolkit.telemetry.reportingpolicy.firstRun", false);
lockPref("toolkit.telemetry.server", "data:,");
lockPref("toolkit.telemetry.server_owner", "");
lockPref("toolkit.telemetry.shutdownPingSender.enabled", false);
lockPref("toolkit.telemetry.unified", false);
lockPref("toolkit.telemetry.coverage.opt-out", true);

// Pref :
lockPref("webextensions.storage.sync.serverURL", "");

// Pref :
lockPref("extensions.screenshots.upload-disabled", true);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : General Settings 2/3
// Bench Diff : +0/5000
// >>>>>>>>>>>>>>>>>>>>

// Pref : Referer: ALL: control the amount of information to send
// 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port 
lockPref("network.http.referer.trimmingPolicy", 0);

// Pref : Close tab
lockPref("browser.tabs.closeTabByDblclick", true);

// Pref : Disable collection/sending of the health report (healthreport.sqlite*)
// https://support.mozilla.org/en-US/kb/firefox-health-report-understand-your-browser-perf
// https://gecko.readthedocs.org/en/latest/toolkit/components/telemetry/telemetry/preferences.html
lockPref("datareporting.healthreport.uploadEnabled", false);
lockPref("datareporting.policy.dataSubmissionEnabled", false);

// Pref : Disable right-click menu manipulation via JavaScript (disabled)
lockPref("dom.event.contextmenu.enabled", false);

// Pref : Disable clipboard event detection (onCut/onCopy/onPaste) via Javascript
// Disabling clipboard events breaks Ctrl+C/X/V copy/cut/paste functionaility in 
// JS-based web applications (Google Docs...)
// https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/dom.event.clipboardevents.enabled
lockPref("dom.event.clipboardevents.enabled", false);

// Pref : Force Punycode for Internationalized Domain Names
// http://kb.mozillazine.org/Network.IDN_show_punycode
// https://www.xudongz.com/blog/2017/idn-phishing/
// https://wiki.mozilla.org/IDN_Display_Algorithm
// https://en.wikipedia.org/wiki/IDN_homograph_attack
// https://www.mozilla.org/en-US/security/advisories/mfsa2017-02/
// CIS Mozilla Firefox 24 ESR v1.0.0 - 3.6
lockPref("network.IDN_show_punycode", true);

// Pref : Disable Pocket
// https://support.mozilla.org/en-US/kb/save-web-pages-later-pocket-firefox
// https://github.com/pyllyukko/user.js/issues/143
lockPref("extensions.pocket.enabled", false);
lockPref("extensions.pocket.site", "");
lockPref("extensions.pocket.oAuthConsumerKey", "");
lockPref("extensions.pocket.api", "");

// Pref : Disable downloading homepage snippets/messages from Mozilla
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_mozilla-content
// https://wiki.mozilla.org/Firefox/Projects/Firefox_Start/Snippet_Service
lockPref("browser.aboutHomeSnippets.updateUrl", "");

// Pref : Don't reveal build ID
// Value taken from Tor Browser
// https://bugzilla.mozilla.org/show_bug.cgi?id=583181
// Already enforced with 'privacy.resistFingerprinting' ?
lockPref("general.buildID.override", "20100101");
lockPref("browser.startup.homepage_override.buildID", "20100101");

// Pref : Disable pinging URIs specified in HTML <a> ping= attributes
// http://kb.mozillazine.org/Browser.send_pings
lockPref("browser.send_pings", false);

// Pref : When browser pings are enabled, only allow pinging the same host as the origin page
// http://kb.mozillazine.org/Browser.send_pings.require_same_host
lockPref("browser.send_pings.require_same_host", true);

// Pref : Do not download URLs for the offline cache
// http://kb.mozillazine.org/Browser.cache.offline.enable
lockPref("browser.cache.offline.enable", false);

// Pref : Disable prefetching of <link rel="next"> URLs
// http://kb.mozillazine.org/Network.prefetch-next
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ#Is_there_a_preference_to_disable_link_prefetching.3F
// Link prefetching is when a webpage hints to the browser that certain pages are likely to be visited, 
// so the browser downloads them immediately so they can be displayed immediately when the user requests it.
lockPref("network.prefetch-next", false);

// Pref : Disable speculative pre-connections
// Disable prefetch link on hover.
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_speculative-pre-connections
// https://bugzilla.mozilla.org/show_bug.cgi?id=814169
lockPref("network.http.speculative-parallel-limit", 0);

// Pref : WebSockets is a technology that makes it possible to open an interactive communication 
// session between the user's browser and a server. (May leak IP when using proxy/VPN)
lockPref("media.peerconnection.enabled", false);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : General Settings 3/3
// Bench Diff : -40/5000
// >>>>>>>>>>>>>>>>>>>>>

// Pref : Disable DOM timing API
// https://wiki.mozilla.org/Security/Reviews/Firefox/NavigationTimingAPI
// https://www.w3.org/TR/navigation-timing/#privacy
lockPref("dom.enable_performance", false); //Deprecated Active
lockPref("dom.enable_performance_navigation_timing", false);

// Pref : Make sure the User Timing API does not provide a new high resolution timestamp
// https://trac.torproject.org/projects/tor/ticket/16336
// https://www.w3.org/TR/2013/REC-user-timing-20131212/#privacy-security
lockPref("dom.enable_user_timing", false);

// Pref : Disable Web Audio API
// https://bugzilla.mozilla.org/show_bug.cgi?id=1288359
// Avoid fingerprinting... 
lockPref("dom.webaudio.enabled", false);

// Pref : When geolocation is enabled, don't log geolocation requests to the console
lockPref("geo.wifi.logging.enabled", true);

// Pref : Disable "beacon" asynchronous HTTP transfers (used for analytics)
// https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon
lockPref("beacon.enabled", false);

// Pref : Disable speech recognition
// https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
// https://wiki.mozilla.org/HTML5_Speech_API
lockPref("media.webspeech.recognition.enable", false);

// Pref : Disable virtual reality devices APIs
// https://developer.mozilla.org/en-US/Firefox/Releases/36#Interfaces.2FAPIs.2FDOM
// https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API
lockPref("dom.vr.enabled", false);

// Pref : Disable vibrator API
lockPref("dom.vibrator.enabled", false);

// Pref : Disable GeoIP lookup on your address to set default search engine region
// https://trac.torproject.org/projects/tor/ticket/16254
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_geolocation-for-default-search-engine
lockPref("browser.search.region", "US");
lockPref("browser.search.geoip.url", "");
lockPref("browser.search.geoSpecificDefaults.url", "");

// Pref : Don't use Mozilla-provided location-specific search engines
lockPref("browser.search.geoSpecificDefaults", false);

// Pref : Don't trim HTTP off of URLs in the address bar.
// https://bugzilla.mozilla.org/show_bug.cgi?id=665580
lockPref("browser.urlbar.trimURLs", false);

// Pref : Don't try to guess domain names when entering an invalid domain name in URL bar
// http://www-archive.mozilla.org/docs/end-user/domain-guessing.html
lockPref("browser.fixup.alternate.enabled", false);

// Pref : When browser.fixup.alternate.enabled is enabled, strip password from 'user:password@...' URLs
// https://github.com/pyllyukko/user.js/issues/290#issuecomment-303560851
lockPref("browser.fixup.hide_user_pass", true);

// Pref : Don't monitor OS online/offline connection state
// https://trac.torproject.org/projects/tor/ticket/18945
lockPref("network.manage-offline-status", false);

// Pref : Set File URI Origin Policy
// http://kb.mozillazine.org/Security.fileuri.strict_origin_policy
// CIS Mozilla Firefox 24 ESR v1.0.0 - 3.8
lockPref("security.fileuri.strict_origin_policy", true);

// Pref : Disable SVG in OpenType fonts
// https://wiki.mozilla.org/SVGOpenTypeFonts
// https://github.com/iSECPartners/publications/tree/master/reports/Tor%20Browser%20Bundle
lockPref("gfx.font_rendering.opentype_svg.enabled", false);

// Pref : Enable only whitelisted URL protocol handlers
// Disabling nonessential protocols breaks all interaction with custom protocols such 
// as mailto:, irc:, magnet: ... and breaks opening third-party mail/messaging/torrent/...
// clients when clicking on links with these protocols
lockPref("network.protocol-handler.warn-external-default",true);
lockPref("network.protocol-handler.external.http",false);
lockPref("network.protocol-handler.external.https",false);
lockPref("network.protocol-handler.external.javascript",false);
lockPref("network.protocol-handler.external.moz-extension",false);
lockPref("network.protocol-handler.external.ftp",false);
lockPref("network.protocol-handler.external.file",false);
lockPref("network.protocol-handler.external.about",false);
lockPref("network.protocol-handler.external.chrome",false);
lockPref("network.protocol-handler.external.blob",false);
lockPref("network.protocol-handler.external.data",false);
lockPref("network.protocol-handler.expose-all",false);
lockPref("network.protocol-handler.expose.http",true);
lockPref("network.protocol-handler.expose.https",true);
lockPref("network.protocol-handler.expose.javascript",true);
lockPref("network.protocol-handler.expose.moz-extension",true);
lockPref("network.protocol-handler.expose.ftp",true);
lockPref("network.protocol-handler.expose.file",true);
lockPref("network.protocol-handler.expose.about",true);
lockPref("network.protocol-handler.expose.chrome",true);
lockPref("network.protocol-handler.expose.blob",true);
lockPref("network.protocol-handler.expose.data",true);

// Pref : Ensure you have a security delay when installing add-ons (milliseconds)
// http://kb.mozillazine.org/Disable_extension_install_delay_-_Firefox
// http://www.squarefree.com/2004/07/01/race-conditions-in-security-dialogs/
lockPref("security.dialog_enable_delay", 700);

// Pref : Opt-out of add-on metadata updates
// https://blog.mozilla.org/addons/how-to-opt-out-of-add-on-metadata-updates/
lockPref("extensions.getAddons.cache.enabled", false);

// Pref : Opt-out of themes (Persona) updates
// https://support.mozilla.org/t5/Firefox/how-do-I-prevent-autoamtic-updates-in-a-50-user-environment/td-p/144287
lockPref("lightweightThemes.update.enabled", false);
lockPref("lightweightThemes.persisted.headerURL", false);
lockPref("lightweightThemes.persisted.footerURL", false);

// Pref : Disable Flash Player NPAPI plugin
// http://kb.mozillazine.org/Flash_plugin
lockPref("plugin.state.flash", 0);

// Pref : Disable sending Flash Player crash reports
lockPref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);

// Pref : When Flash crash reports are enabled, don't send the visited URL in the crash report
lockPref("dom.ipc.plugins.reportCrashURL", false);

// Pref : Disable Shumway (Mozilla Flash renderer)
// https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Shumway
lockPref("shumway.disabled", true);

// Pref : Disable Gnome Shell Integration NPAPI plugin
lockPref("plugin.state.libgnome-shell-browser-plugin", 0);

// Pref : Enable plugins click-to-play
// https://wiki.mozilla.org/Firefox/Click_To_Play
// https://blog.mozilla.org/security/2012/10/11/click-to-play-plugins-blocklist-style/
lockPref("plugins.click_to_play", true);
lockPref("plugin.sessionPermissionNow.intervalInMinutes", 0);

// Pref : Updates addons automatically
// https://blog.mozilla.org/addons/how-to-turn-off-add-on-updates/
lockPref("extensions.update.enabled", false);

// Pref : Enable add-on and certificate blocklists (OneCRL) from Mozilla
// Updated at interval defined in extensions.blocklist.interval (default: 86400)
lockPref("extensions.blocklist.enabled", false);

// Pref : Disable system add-on updates (hidden & always-enabled add-ons from Mozilla)
lockPref("extensions.systemAddon.update.enabled", false);

// Pref : Disable WebIDE Web Debug
// https://trac.torproject.org/projects/tor/ticket/16222
// https://developer.mozilla.org/docs/Tools/WebIDE
lockPref("devtools.webide.enabled", false);
lockPref("devtools.webide.autoinstallADBExtension", false); // [FF64+]
lockPref("devtools.remote.adb.extensionURL", ""); // [FF64+]
lockPref("devtools.remote.adb.extensionID", ""); // default adb@mozilla.org [FF64+]

// Pref : Disable remote debugging
// https://developer.mozilla.org/en-US/docs/Tools/Remote_Debugging/Debugging_Firefox_Desktop
// https://developer.mozilla.org/en-US/docs/Tools/Tools_Toolbox#Advanced_settings
lockPref("devtools.debugger.force-local", true);

// Pref : Disallow Necko to do A/B testing
// https://trac.torproject.org/projects/tor/ticket/13170
lockPref("network.allow-experiments", false);

// Pref : Disable sending reports of tab crashes to Mozilla (about:tabcrashed), don't 
// nag user about unsent crash reports
// https://hg.mozilla.org/mozilla-central/file/tip/browser/app/profile/firefox.js
lockPref("browser.tabs.crashReporting.sendReport", false);
lockPref("browser.crashReports.unsubmittedCheck.enabled", false);
lockPref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); 

// Pref : Disable SHIELD
// https://support.mozilla.org/en-US/kb/shield
// https://bugzilla.mozilla.org/show_bug.cgi?id=1370801
lockPref("app.shield.optoutstudies.enabled", false);

// Pref : Disable new tab tile ads & preload & Activity Stream
// http://www.thewindowsclub.com/disable-remove-ad-tiles-from-firefox
// http://forums.mozillazine.org/viewtopic.php?p=13876331#p13876331
// https://wiki.mozilla.org/Firefox/Activity_Stream
// https://wiki.mozilla.org/Tiles/Technical_Documentation#Ping
// https://gecko.readthedocs.org/en/latest/browser/browser/DirectoryLinksProvider.html#browser-newtabpage-directory-source
// https://gecko.readthedocs.org/en/latest/browser/browser/DirectoryLinksProvider.html#browser-newtabpage-directory-ping
lockPref("browser.newtabpage.activity-stream.feeds.section.topstories",	false);
lockPref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
lockPref("browser.newtabpage.activity-stream.showSponsored", false);
lockPref("browser.newtabpage.activity-stream.aboutHome.enabled", false); 
lockPref("browser.newtabpage.activity-stream.asrouter.messageProviders", "");
lockPref("browser.newtabpage.activity-stream.telemetry", false);
lockPref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
lockPref("browser.newtabpage.activity-stream.feeds.telemetry", false);
lockPref("browser.newtabpage.activity-stream.feeds.snippets", false);
lockPref("browser.newtabpage.activity-stream.disableSnippets", true);
lockPref("browser.newtab.preload", false);

// Pref : Disable "Show search suggestions in location bar results"
lockPref("browser.urlbar.suggest.searches", false);
lockPref("browser.urlbar.userMadeSearchSuggestionsChoice", true);

// Pref : Never check updates for search engines
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_auto-update-checking
lockPref("browser.search.update", false);

// Pref : Disable automatic captive portal detection (Firefox >= 52.0)
// https://support.mozilla.org/en-US/questions/1157121
lockPref("network.captive-portal-service.enabled", false);

// Pref : Disallow NTLMv1
// https://bugzilla.mozilla.org/show_bug.cgi?id=828183
lockPref("network.negotiate-auth.allow-insecure-ntlm-v1", false);
// it is still allowed through HTTPS. 
lockPref("network.negotiate-auth.allow-insecure-ntlm-v1-https", false);

// Pref : Disable formless login capture
// https://bugzilla.mozilla.org/show_bug.cgi?id=1166947
lockPref("signon.formlessCapture.enabled", false);

// Pref : Delete temporary files on exit
// https://bugzilla.mozilla.org/show_bug.cgi?id=238789
lockPref("browser.helperApps.deleteTempFileOnExit", true);

// Pref : Do not create screenshots of visited pages (relates to the "new tab page" feature)
// https://support.mozilla.org/en-US/questions/973320
// https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/browser.pagethumbnails.capturing_disabled
lockPref("browser.pagethumbnails.capturing_disabled", true);

// Pref : Tor settings
// This browser is not meant for tor
// Enabling those settings for user torifying their whole connection 
lockPref("network.dns.blockDotOnion", true);
lockPref("network.http.referer.hideOnionSource", true);

// Pref : 1603 : CROSS ORIGIN: control when to send a referer
// 0=always (default), 1=only if base domains match, 2=only if hosts match 
// Can break some important site... (payment... )
lockPref("network.http.referer.XOriginPolicy", 1);

// Pref : Only allow TLS 1.[0-3]
lockPref("security.tls.version.max", 4); // 4 = allow up to and including TLS 1.3

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Disabled - Deprecated Active
// Deprecated settings but left active for various reasons
// Bench Diff : ???/5000
// >>>>>>>>>>>>>>>>>>>>>

// Pref : 0516 : disable Onboarding (FF55+)
// Onboarding is an interactive tour/setup for new installs/profiles and features. Every time
// about:home or about:newtab is opened, the onboarding overlay is injected into that page
// [NOTE] Onboarding uses Google Analytics [2], and leaks resource://URIs [3]
// [1] https://wiki.mozilla.org/Firefox/Onboarding
// [2] https://github.com/mozilla/onboard/commit/db4d6c8726c89a5d6a241c1b1065827b525c5baf
// [3] https://bugzilla.mozilla.org/863246#c154 
lockPref("browser.onboarding.enabled", false); // Removed in v64 //Deprecated Active

// Pref : Disable WebIDE Web Debug Extension
// https://trac.torproject.org/projects/tor/ticket/16222
// https://developer.mozilla.org/docs/Tools/WebIDE
lockPref("devtools.webide.autoinstallADBHelper", false); 
// Remplaced by "devtools.webide.autoinstallADBExtension" in 64

// Pref : Disable raw TCP socket support (mozTCPSocket)
// https://trac.torproject.org/projects/tor/ticket/18863
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-97/
// https://developer.mozilla.org/docs/Mozilla/B2G_OS/API/TCPSocket
// is only exposed to chrome ( https://trac.torproject.org/projects/tor/ticket/27268#comment:2 )
// Not important
lockPref("dom.mozTCPSocket.enabled", false);

// Pref : Enforce checking for Firefox updates
lockPref("app.update.enabled", false);

// Pref : Disable bookmarks backups (default: 15)
// http://kb.mozillazine.org/Browser.bookmarks.max_backups
lockPref("browser.bookmarks.max_backups", 2);

// Pref : Disable SSDP
// https://bugzilla.mozilla.org/show_bug.cgi?id=1111967
lockPref("browser.casting.enabled", false);

// Pref : 
lockPref("browser.newtabpage.activity-stream.enabled", false);
lockPref("browser.newtabpage.directory.ping", "data:text/plain,");
lockPref("browser.newtabpage.directory.source", "data:text/plain,");
lockPref("browser.newtabpage.enhanced", false);

// Pref : 
lockPref("browser.pocket.enabled", false);

// Pref : Disable Heartbeat  (Mozilla user rating telemetry)
// https://wiki.mozilla.org/Advocacy/heartbeat
// https://trac.torproject.org/projects/tor/ticket/19047
lockPref("browser.selfsupport.url", "");

// Pref : Don't reveal build ID
// Value taken from Tor Browser
// https://bugzilla.mozilla.org/show_bug.cgi?id=583181
// Already enforced with 'privacy.resistFingerprinting' ?
lockPref("browser.startup.homepage_override.mstone", "ignore");

// Pref : Disable face detection
lockPref("camera.control.face_detection.enabled", false);

// Pref :
lockPref("datareporting.healthreport.about.reportUrl", "data:,");
lockPref("datareporting.healthreport.service.enabled", false);

// Pref :
lockPref("device.sensors.enabled", false);

// Pref : Disable WebIDE Web Debug
// https://trac.torproject.org/projects/tor/ticket/16222
// https://developer.mozilla.org/docs/Tools/WebIDE
lockPref("devtools.webide.autoinstallFxdtAdapters", false);
lockPref("devtools.webide.adaptersAddonURL", "");

// Pref : Disable resource timing API
// https://www.w3.org/TR/resource-timing/#privacy-security
lockPref("dom.enable_resource_timing", false);

// Pref : Disable FlyWeb (discovery of LAN/proximity IoT devices that expose a Web interface)
// https://wiki.mozilla.org/FlyWeb
// https://wiki.mozilla.org/FlyWeb/Security_scenarios
// https://docs.google.com/document/d/1eqLb6cGjDL9XooSYEEo7mE-zKQ-o-AuDTcEyNhfBMBM/edit
// http://www.ghacks.net/2016/07/26/firefox-flyweb
lockPref("dom.flyweb.enabled", false);

// Pref :
lockPref("dom.gamepad.enabled", false);

// Pref : Disable leaking network/browser connection information via Javascript
// Network Information API provides general information about the system's connection type (WiFi, cellular, etc.)
// https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
// https://wicg.github.io/netinfo/#privacy-considerations
// https://bugzilla.mozilla.org/show_bug.cgi?id=960426
lockPref("dom.netinfo.enabled", false);

// Pref : 2306: disable push notifications (FF44+)
// web apps can receive messages pushed to them from a server, whether or
// not the web app is in the foreground, or even currently loaded
// [1] https://developer.mozilla.org/docs/Web/API/Push_API 
lockPref("dom.push.udp.wakeupEnabled", false); //UDP Wake-up

// Pref : Disable telephony API
// https://wiki.mozilla.org/WebAPI/Security/WebTelephony
lockPref("dom.telephony.enabled", false);

// Pref : Disable SHIELD
// https://support.mozilla.org/en-US/kb/shield
// https://bugzilla.mozilla.org/show_bug.cgi?id=1370801
lockPref("extensions.shield-recipe-client.enabled", false);

// Pref : Disable Firefox Hello metrics collection
// https://groups.google.com/d/topic/mozilla.dev.platform/nyVkCx-_sFw/discussion
lockPref("loop.logDomains", false);

// Pref : Disable video stats to reduce fingerprinting threat
// https://bugzilla.mozilla.org/show_bug.cgi?id=654550
// https://github.com/pyllyukko/user.js/issues/9#issuecomment-100468785
// https://github.com/pyllyukko/user.js/issues/9#issuecomment-148922065
lockPref("media.video_stats.enabled", false);

// Pref : WebSockets is a technology that makes it possible to open an interactive communication 
// session between the user's browser and a server. (May leak IP when using proxy/VPN)
lockPref("network.websocket.enabled", false);

// Pref : Disable Reader
// Not deprecated but usefull to be located here
lockPref("reader.parse-on-load.enabled", false); 

// CIS 2.7.4 Disable Scripting of Plugins by JavaScript
// http://forums.mozillazine.org/viewtopic.php?f=7&t=153889
lockPref("security.xpconnect.plugin.unrestricted", false);

// Pref :
lockPref("social.directories", "");
lockPref("social.remote-install.enabled", false);
lockPref("social.whitelist", "");
    
// Pref : Disable RC4
// https://developer.mozilla.org/en-US/Firefox/Releases/38#Security
// https://bugzilla.mozilla.org/show_bug.cgi?id=1138882
// https://rc4.io/
// https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2566
lockPref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
lockPref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
lockPref("security.ssl3.rsa_rc4_128_md5", false);
lockPref("security.ssl3.rsa_rc4_128_sha", false);
lockPref("security.tls.unrestricted_rc4_fallback", false);
