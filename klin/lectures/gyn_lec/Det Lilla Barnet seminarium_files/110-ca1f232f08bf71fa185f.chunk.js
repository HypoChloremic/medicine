(("undefined"!==typeof self?self:this).webpackJsonp=("undefined"!==typeof self?self:this).webpackJsonp||[]).push([[110],{538:function(e,n,t){},756:function(e,n,t){"use strict";t.r(n);var i=t(157),o=t(9);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var l={components:{AppUpsellBanner:()=>t.e(103).then(t.bind(null,1127)),AppUpdateBanner:()=>t.e(118).then(t.bind(null,1152)),SurfacePanelSettings:()=>t.e(80).then(t.bind(null,1114)),SurfacePanelSettingsModalConfirm:()=>t.e(122).then(t.bind(null,1128)),SurfacePanelShare:()=>t.e(77).then(t.bind(null,1113)),SurfacePanelWallOnboardingReadyToPost:()=>t.e(109).then(t.bind(null,1129)),SurfacePanelRemake:()=>t.e(121).then(t.bind(null,1118)),SurfacePanelConvertLayout:()=>t.e(107).then(t.bind(null,1130)),SurfacePanelComments:()=>t.e(81).then(t.bind(null,1120)),SurfacePanelPostZoom:()=>t.e(101).then(t.bind(null,1131)),SurfacePanelPostExpanded:()=>t.e(100).then(t.bind(null,1132)),SurfacePanelPostActionMenu:()=>t.e(99).then(t.bind(null,1122)),SurfacePanelSectionActionMenu:()=>t.e(117).then(t.bind(null,1133)),SurfacePanelCommentActionMenu:()=>t.e(116).then(t.bind(null,1134)),SurfacePanelCopyOrTransferPost:()=>t.e(78).then(t.bind(null,1119)),SurfaceComposerModal:()=>Promise.all([t.e(5),t.e(82)]).then(t.bind(null,1135)),FileSizeExceededNotice:()=>t.e(92).then(t.bind(null,1125)),UpgradeRequired:()=>t.e(111).then(t.bind(null,744)),SurfaceDropdownReactionStar:()=>t.e(106).then(t.bind(null,1136)),SurfaceDropdownReactionGrade:()=>t.e(105).then(t.bind(null,1137)),CanvasConnectionSnackbar:()=>t.e(104).then(t.bind(null,1138)),DialogPermitNotification:()=>t.e(83).then(t.bind(null,755)),SurfaceInfo:()=>t.e(93).then(t.bind(null,1139)),SurfaceDialogExtensionRequired:()=>t.e(89).then(t.bind(null,1140)),ConfirmationDialog:()=>t.e(87).then(t.bind(null,470)),CookieNotification:()=>t.e(90).then(t.bind(null,1141)),ReloadNotification:()=>t.e(91).then(t.bind(null,1142)),ImagePickerSources:()=>Promise.all([t.e(4),t.e(112)]).then(t.bind(null,1143))},data:()=>({appUpsellClosed:!1,xSettingsPanelModalConfirm:!1}),computed:s(s(s(s(s(s(s(s(s(s(s({},Object(o.e)(["isEmbedded","isApp","isIOS","isAndroid","amIRegistered","isBackchannel","isReadOnly","xInfo","xWallQuotaExceeded","xExtensionRequired","xFileSizeExceeded","fileThatExceededSize","xRemakePanel","xConvertLayoutPanel","xCommentsPanel","commentsPanelPostId","modalPostEdit","nativePostEdit","isNativeMenu","xPermitNotification","xCookieNotification","xReloadNotification","wall"])),Object(o.c)("onboarding",["xReadyToPostPanel"])),Object(o.c)("post",["postBeingEditedCid"])),Object(o.c)("postAction",["zoomedPostCid","expandedPost","expandedPostCid","postUnderActionCid","xTransferPostPanel","postBeingTransferredCid","xCopyPostPanel","postBeingCopiedCid"])),Object(o.e)("comment",["actionMenuCommentId"])),Object(o.e)("section",["actionMenuSectionId"])),Object(o.c)("postConnection",["xConnectionCancellation","xDisconnectionCancellation"])),Object(o.c)("imagePicker",["xImagePickerSources"])),Object(o.c)("reaction",["xReactionDropdownStar","xReactionDropdownGrade"])),Object(o.c)(["isBackchannel","canIWrite","xSharePanel","xSettingsPanel"])),{},{xComposerModal(){return!this.isBackchannel&&!this.nativePostEdit&&this.canIWrite&&!this.isReadOnly&&this.postBeingEditedCid&&this.modalPostEdit},xAppUpsell(){return!this.appUpsellClosed&&this.amIRegistered&&!this.isEmbedded&&(this.isIOS||this.isAndroid)&&!this.isApp},xAppUpdateRequired(){return this.isBackchannel&&this.isApp&&!Object(i.a)("chat")},xCurtain(){return this.xSettingsPanel||this.xSharePanel||this.xReadyToPostPanel||this.xCopyPostPanel||this.xTransferPostPanel},xCommentMenu(){return this.actionMenuCommentId&&!this.isNativeMenu},xSectionMenu(){return this.actionMenuSectionId&&!this.isNativeMenu},xExpandedPostPanel(){return!!this.expandedPostCid&&!this.isApp}}),mounted(){this.startOnboardingIfFirstView()},methods:s(s(s(s(s({},Object(o.b)(["hideExtensionRequired","hideWallQuotaExceeded","hideFileSizeExceeded","hideInfo","hidePermitNotification","hideCookieNotification","hideReloadNotification"])),Object(o.b)("postAction",["postTransferNavigate","endPostTransfer","postCopyNavigate","endPostCopy"])),Object(o.b)("postConnection",["cancelConnection","cancelDisconnection"])),Object(o.b)("onboarding",["startOnboardingIfFirstView"])),{},{navigateCopyPanel(e){this.postCopyNavigate({panel:e})},navigateTransferPanel(e){this.postTransferNavigate({panel:e})},hideAppUpsell(){this.appUpsellClosed=!0},hideCanvasConnection(){this.xConnectionCancellation?this.cancelConnection():this.xDisconnectionCancellation&&this.cancelDisconnection()},showSettingsPanelModalConfirm(){this.xSettingsPanelModalConfirm=!0},hideSettingsPanelModalConfirm(){this.xSettingsPanelModalConfirm=!1}})},r=(t(840),t(7)),d=Object(r.a)(l,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"surface-panels"},[e.xCurtain?t("div",{staticClass:"curtain is-animated fade-in"}):e._e(),e._v(" "),e.xSettingsPanel?t("surface-panel-settings",{on:{"confirm-close":e.showSettingsPanelModalConfirm}}):e._e(),e._v(" "),e.xSettingsPanelModalConfirm?t("surface-panel-settings-modal-confirm",{on:{hide:e.hideSettingsPanelModalConfirm}}):e._e(),e._v(" "),e.xSharePanel?t("surface-panel-share"):e._e(),e._v(" "),e.xReadyToPostPanel?t("surface-panel-wall-onboarding-ready-to-post"):e._e(),e._v(" "),e.xRemakePanel?t("surface-panel-remake"):e._e(),e._v(" "),e.xConvertLayoutPanel?t("surface-panel-convert-layout"):e._e(),e._v(" "),e.xCommentsPanel?t("surface-panel-comments",{attrs:{"post-id":e.commentsPanelPostId}}):e._e(),e._v(" "),e.zoomedPostCid?t("surface-panel-post-zoom",{attrs:{"post-cid":e.zoomedPostCid}}):e._e(),e._v(" "),e.xExpandedPostPanel?t("surface-panel-post-expanded",{attrs:{"post-cid":e.expandedPostCid}}):e._e(),e._v(" "),e.postUnderActionCid?t("surface-panel-post-action-menu",{attrs:{"post-cid":e.postUnderActionCid}}):e._e(),e._v(" "),e.xSectionMenu?t("surface-panel-section-action-menu",{attrs:{"section-id":e.actionMenuSectionId}}):e._e(),e._v(" "),e.xCommentMenu?t("surface-panel-comment-action-menu",{attrs:{"comment-id":e.actionMenuCommentId}}):e._e(),e._v(" "),e.xTransferPostPanel?t("surface-panel-copy-or-transfer-post",{tag:"surface-panel-transfer-post",attrs:{"post-cid":e.postBeingTransferredCid,action:"transfer"},on:{navigate:e.navigateTransferPanel,close:e.endPostTransfer}}):e._e(),e._v(" "),e.xCopyPostPanel?t("surface-panel-copy-or-transfer-post",{tag:"surface-panel-copy-post",attrs:{"post-cid":e.postBeingCopiedCid,action:"copy"},on:{navigate:e.navigateCopyPanel,close:e.endPostCopy}}):e._e(),e._v(" "),e.xComposerModal?t("surface-composer-modal"):e._e(),e._v(" "),e.xInfo?t("surface-info",{on:{close:e.hideInfo}}):e._e(),e._v(" "),e.xWallQuotaExceeded?t("upgrade-required",{attrs:{reason:"walls"},on:{close:e.hideWallQuotaExceeded}}):e._e(),e._v(" "),e.xFileSizeExceeded?t("file-size-exceeded-notice",{attrs:{file:e.fileThatExceededSize},on:{close:e.hideFileSizeExceeded}}):e._e(),e._v(" "),e.xAppUpsell?t("app-upsell-banner",{on:{close:e.hideAppUpsell}}):e._e(),e._v(" "),e.xAppUpdateRequired?t("app-update-banner"):e._e(),e._v(" "),e.xReactionDropdownStar?t("surface-dropdown-reaction-star"):e._e(),e._v(" "),e.xReactionDropdownGrade?t("surface-dropdown-reaction-grade"):e._e(),e._v(" "),e.xExtensionRequired?t("surface-dialog-extension-required",{on:{close:e.hideExtensionRequired}}):e._e(),e._v(" "),e.xConnectionCancellation||e.xDisconnectionCancellation?t("canvas-connection-snackbar",{attrs:{"x-connection-cancellation":e.xConnectionCancellation,"x-disconnection-cancellation":e.xDisconnectionCancellation},on:{close:e.hideCanvasConnection}}):e._e(),e._v(" "),e.xPermitNotification?t("dialog-permit-notification",{on:{close:e.hidePermitNotification}}):e._e(),e._v(" "),e.xCookieNotification?t("cookie-notification",{attrs:{"is-embedded":e.isEmbedded,"wall-url":e.wall.links.show},on:{cancel:e.hideCookieNotification}}):e._e(),e._v(" "),e.xReloadNotification?t("reload-notification",{on:{cancel:e.hideReloadNotification}}):e._e(),e._v(" "),e.xImagePickerSources?t("image-picker-sources"):e._e(),e._v(" "),t("confirmation-dialog")],1)}),[],!1,null,"5bad7e2d",null);n.default=d.exports},840:function(e,n,t){"use strict";var i=t(538);t.n(i).a}}]);
//# sourceMappingURL=110-ca1f232f08bf71fa185f.chunk.js.map