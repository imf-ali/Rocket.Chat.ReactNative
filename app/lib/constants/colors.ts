export const BACKGROUND_PUSH_COLOR = '#F5455C';

export const STATUS_COLORS: any = {
	online: '#2de0a5',
	busy: '#f5455c',
	away: '#ffd21f',
	offline: '#cbced1',
	loading: '#9ea2a8',
	disabled: '#F38C39'
};

export const SWITCH_TRACK_COLOR = {
	false: '#f5455c',
	true: '#2de0a5'
};

const mentions = {
	unreadColor: '#6C727A',
	tunreadColor: '#1d74f5',
	mentionMeColor: '#F5455C',
	mentionGroupColor: '#F38C39',
	mentionOtherColor: '#F3BE08'
};

// TODO: Remove this after the new colors are implemented
const newColors = {
	surfaceLight: '#FFFFFF',
	surfaceTint: '#F7F8FA',
	surfaceRoom: '#FFFFFF',
	surfaceNeutral: '#E4E7EA',
	surfaceDisabled: '#F7F8FA',
	surfaceHover: '#F2F3F5',
	surfaceSelected: '#D7DBE0',
	surfaceDark: '#1F2329',
	surfaceFeatured: '#5F1477',
	surfaceFeaturedHover: '#4A105D',

	strokeExtraLight: '#EBECEF',
	strokeLight: '#CBCED1',
	strokeMedium: '#9EA2A8',
	strokeDark: '#6C727A',
	strokeExtraDark: '#2F343D',
	strokeExtraLightHighlight: '#D1EBFE',
	strokeHighlight: '#156FF5',
	strokeExtraLightError: '#FFC1C9',
	strokeError: '#EC0D2A',

	fontWhite: '#FFFFFF',
	fontDisabled: '#CBCED1',
	fontAnnotation: '#9EA2A8',
	fontHint: '#6C727A',
	fontSecondaryInfo: '#6C727A',
	fontDefault: '#2F343D',
	fontTitlesLabels: '#1F2329',
	fontInfo: '#095AD2',
	fontDanger: '#D40C26',
	fontPureBlack: '#2F343D',
	fontPureWhite: '#FFFFFF',

	statusBackgroundInfo: '#D1EBFE',
	statusBackgroundSuccess: '#C0F6E4',
	statusBackgroundDanger: '#FFC1C9',
	statusBackgroundWarning: '#FFECAD',
	statusBackgroundWarning2: '#FFF6D6',
	statusBackgroundService: '#FAD1B0',
	statusBackgroundService2: '#EDD0F7',
	statusFontInfo: '#095AD2',
	statusFontSuccess: '#148660',
	statusFontDanger: '#9B1325',
	statusFontWarning: '#B88D00',
	statusFontWarning2: '#2F343D',
	statusFontService: '#974809',
	statusFontService2: '#7F1B9F',

	badgeBackgroundLevel1: '#6C727A',
	badgeBackgroundLevel2: '#1D74F5',
	badgeBackgroundLevel3: '#F38C39',
	badgeBackgroundLevel4: '#F5455C',

	userPresenceOnline: '#158D65',
	userPresenceBusy: '#DA1F37',
	userPresenceAway: '#AC892F',
	userPresenceOffline: '#6C727A',
	userPresenceDisabled: '#F38C39',

	buttonBackgroundPrimaryDefault: '#156FF5',
	buttonBackgroundPrimaryPress: '#10529E',
	buttonBackgroundPrimaryDisabled: '#D1EBFE',

	buttonBackgroundSecondaryDefault: '#E4E7EA',
	buttonBackgroundSecondaryPress: '#9EA2A8',
	buttonBackgroundSecondaryDisabled: '#EEEFF1',

	buttonBackgroundSecondaryDangerDefault: '#E4E7EA',
	buttonBackgroundSecondaryDangerPress: '#9EA2A8',
	buttonBackgroundSecondaryDangerDisabled: '#EEEFF1',

	buttonBackgroundDangerDefault: '#EC0D2A',
	buttonBackgroundDangerPress: '#BB0B21',
	buttonBackgroundDangerDisabled: '#FFC1C9',

	buttonBackgroundSuccessDefault: '#158D65',
	buttonBackgroundSuccessPress: '#0D5940',
	buttonBackgroundSuccessDisabled: '#C0F6E4',

	buttonFontPrimary: '#FFFFFF',
	buttonPrimaryDisabled: '#FFFFFF',
	buttonFontSecondary: '#1F2329',
	buttonSecondaryDisabled: '#CBCED1',
	buttonFontSecondaryDanger: '#BB0B21',
	buttonSecondaryDangerDisabled: '#F98F9D',
	buttonFontDanger: '#FFFFFF',
	buttonDangerDisabled: '#FFFFFF',
	buttonFontSuccess: '#FFFFFF',
	buttonSuccessDisabled: '#FFFFFF'
};
const newColorsDark = {
	surfaceLight: '#262931',
	surfaceTint: '#1F2329',
	surfaceRoom: '#1F2329',
	surfaceNeutral: '#2D3039',
	surfaceDisabled: '#24272E',
	surfaceHover: '#1A1E23',
	surfaceSelected: '#3C3F44',
	surfaceDark: '#E4E7EA',
	surfaceFeatured: '#5F1477',
	surfaceFeaturedHover: '#4A105D',

	strokeExtraLight: '#2F343D',
	strokeLight: '#333842',
	strokeMedium: '#404754',
	strokeDark: '#9EA2A8',
	strokeExtraDark: '#CBCED1',
	strokeExtraLightHighlight: '#87CBFC',
	strokeHighlight: '#3976D1',
	strokeExtraLightError: '#F49AA6',
	strokeError: '#BB3E4E',

	fontWhite: '#2F343D',
	fontDisabled: '#60646C',
	fontAnnotation: '#9EA2A8',
	fontHint: '#9EA2A8',
	fontSecondaryInfo: '#9EA2A8',
	fontDefault: '#E4E7EA',
	fontTitlesLabels: '#F2F3F5',
	fontInfo: '#739EDE',
	fontDanger: '#CF6E7A',
	fontPureBlack: '#2F343D',
	fontPureWhite: '#FFFFFF',

	statusBackgroundInfo: '#A8C3EB',
	statusBackgroundSuccess: '#C1EBDD',
	statusBackgroundDanger: '#FFBDC5',
	statusBackgroundWarning: '#FEEFBE',
	statusBackgroundWarning2: '#4E4731',
	statusBackgroundService: '#FCE3CF',
	statusBackgroundService2: '#EDD0F7',
	statusFontInfo: '#739EDE',
	statusFontSuccess: '#58AD90',
	statusFontDanger: '#D88892',
	statusFontWarning: '#C7AA66',
	statusFontWarning2: '#FFFFFF',
	statusFontService: '#CA9163',
	statusFontService2: '#C393D2',

	badgeBackgroundLevel1: '#484C51',
	badgeBackgroundLevel2: '#2C65BA',
	badgeBackgroundLevel3: '#955828',
	badgeBackgroundLevel4: '#B43C4C',

	userPresenceOnline: '#1CBF89',
	userPresenceBusy: '#C14454',
	userPresenceAway: '#AC892F',
	userPresenceOffline: '#6C727A',
	userPresenceDisabled: '#955828',

	buttonBackgroundPrimaryDefault: '#3976D1',
	buttonBackgroundPrimaryPress: '#245399',
	buttonBackgroundPrimaryDisabled: '#1D3963',

	buttonBackgroundSecondaryDefault: '#2F343D',
	buttonBackgroundSecondaryPress: '#454C59',
	buttonBackgroundSecondaryDisabled: '#2F343D',

	buttonBackgroundSecondaryDangerDefault: '#2F343D',
	buttonBackgroundSecondaryDangerPress: '#454C59',
	buttonBackgroundSecondaryDangerDisabled: '#2F343D',

	buttonBackgroundDangerDefault: '#BB3E4E',
	buttonBackgroundDangerPress: '#822C37',
	buttonBackgroundDangerDisabled: '#3D2126',

	buttonBackgroundSuccessDefault: '#1D7256',
	buttonBackgroundSuccessPress: '#134937',
	buttonBackgroundSuccessDisabled: '#1E4B40',

	buttonFontPrimary: '#FFFFFF',
	buttonPrimaryDisabled: '#6C727A',
	buttonFontSecondary: '#E4E7EA',
	buttonSecondaryDisabled: '#6C727A',
	buttonFontSecondaryDanger: '#C14454',
	buttonSecondaryDangerDisabled: '#613339',
	buttonFontDanger: '#FFFFFF',
	buttonDangerDisabled: '#757575',
	buttonFontSuccess: '#FFFFFF',
	buttonSuccessDisabled: '#757575'
};

const callButtons = {
	cancelCallButton: '#F5455C',
	acceptCallButton: '#158D65'
};

export const colors = {
	light: {
		...newColors,

		backgroundColor: '#ffffff',
		focusedBackground: '#ffffff',
		chatComponentBackground: '#f3f4f5',
		auxiliaryBackground: '#efeff4',
		bannerBackground: '#f1f2f4',
		titleText: '#0d0e12',
		bodyText: '#2f343d',
		backdropColor: '#000000',
		dangerColor: '#f5455c',
		successColor: '#2de0a5',
		borderColor: '#e1e5e8',
		controlText: '#54585e',
		auxiliaryText: '#9ca2a8',
		infoText: '#6d6d72',
		tintColor: '#1d74f5',
		tintActive: '#549df9',
		tintDisabled: '#88B4F5',
		auxiliaryTintColor: '#6C727A',
		actionTintColor: '#1d74f5',
		separatorColor: '#cbcbcc',
		navbarBackground: '#ffffff',
		headerBorder: '#B2B2B2',
		headerBackground: '#EEEFF1',
		headerSecondaryBackground: '#ffffff',
		headerTintColor: '#6C727A',
		headerTitleColor: '#0C0D0F',
		headerSecondaryText: '#1d74f5',
		toastBackground: '#0C0D0F',
		videoBackground: '#1f2329',
		favoriteBackground: '#ffbb00',
		hideBackground: '#54585e',
		searchboxBackground: '#E6E6E7',
		buttonBackground: '#414852',
		buttonText: '#ffffff',
		passcodeBackground: '#EEEFF1',
		passcodeButtonActive: '#E4E7EA',
		editAndUploadButtonAvatar: '#E4E7EA',
		passcodeLockIcon: '#6C727A',
		passcodePrimary: '#2F343D',
		passcodeSecondary: '#6C727A',
		passcodeDotEmpty: '#CBCED1',
		passcodeDotFull: '#6C727A',
		previewBackground: '#1F2329',
		previewTintColor: '#f9f9f9',
		backdropOpacity: 0.3,
		attachmentLoadingOpacity: 0.7,
		collapsibleQuoteBorder: '#CBCED1',
		collapsibleChevron: '#6C727A',
		cancelButton: '#E4E7EA',
		conferenceCallBorder: '#F2F3F5',
		conferenceCallBackground: '#F7F8FA',
		conferenceCallOngoingPhoneBackground: '#C0F6E4',
		conferenceCallIncomingPhoneBackground: '#D1EBFE',
		conferenceCallEndedPhoneBackground: '#E4E7EA',
		conferenceCallOngoingPhoneIcon: '#158D65',
		conferenceCallIncomingPhoneIcon: '#095AD2',
		conferenceCallEndedPhoneIcon: '#6C727A',
		conferenceCallPlusUsersButton: '#E4E7EA',
		conferenceCallPlusUsersText: '#6C727A',
		conferenceCallCallBackButton: '#EEEFF1',
		conferenceCallCallBackText: '#1F2329',
		conferenceCallDisabledIcon: '#6C727A',
		conferenceCallEnabledIcon: '#FFFFFF',
		conferenceCallEnabledIconBackground: '#156FF5',
		conferenceCallPhotoBackground: '#E4E7EA',
		textInputSecondaryBackground: '#E4E7EA',
		dotBg: '#a9cbff',
		dotActiveBg: '#1d74f5',
		gray300: '#5f656e',
		gray100: '#CBCED1',
		n900: '#1F2329',
		statusBackgroundWarning: '#FFECAD',
		statusFontOnWarning: '#B88D00',
		overlayColor: '#1F2329CC',
		taskBoxColor: '#9297a2',
		...mentions,
		...callButtons
	},
	dark: {
		...newColorsDark,
		surfaceLight: '#0b182c',

		backgroundColor: '#030b1b',
		focusedBackground: '#0b182c',
		chatComponentBackground: '#192132',
		auxiliaryBackground: '#07101e',
		bannerBackground: '#0e1f38',
		titleText: '#f9f9f9',
		bodyText: '#cbced1',
		backdropColor: '#000000',
		dangerColor: '#f5455c',
		successColor: '#2de0a5',
		borderColor: '#0f213d',
		controlText: '#dadde6',
		auxiliaryText: '#9297a2',
		infoText: '#6D6D72',
		tintColor: '#1d74f5',
		tintActive: '#549df9',
		tintDisabled: '#88B4F5',
		auxiliaryTintColor: '#f9f9f9',
		actionTintColor: '#1d74f5',
		separatorColor: '#2b2b2d',
		navbarBackground: '#0b182c',
		headerBorder: '#2F3A4B',
		headerBackground: '#0b182c',
		headerSecondaryBackground: '#0b182c',
		headerTintColor: '#f9f9f9',
		headerTitleColor: '#f9f9f9',
		headerSecondaryText: '#9297a2',
		toastBackground: '#54585e',
		videoBackground: '#1f2329',
		favoriteBackground: '#ffbb00',
		hideBackground: '#54585e',
		searchboxBackground: '#192d4d',
		buttonBackground: '#414852',
		buttonText: '#ffffff',
		passcodeBackground: '#030C1B',
		passcodeButtonActive: '#0B182C',
		editAndUploadButtonAvatar: '#0B182C',
		passcodeLockIcon: '#6C727A',
		passcodePrimary: '#FFFFFF',
		passcodeSecondary: '#CBCED1',
		passcodeDotEmpty: '#CBCED1',
		passcodeDotFull: '#6C727A',
		previewBackground: '#030b1b',
		previewTintColor: '#f9f9f9',
		backdropOpacity: 0.9,
		attachmentLoadingOpacity: 0.3,
		collapsibleQuoteBorder: '#CBCED1',
		collapsibleChevron: '#6C727A',
		cancelButton: '#E4E7EA',
		conferenceCallBorder: '#1F2329',
		conferenceCallBackground: '#1F2329',
		conferenceCallOngoingPhoneBackground: '#106D4F',
		conferenceCallIncomingPhoneBackground: '#D1EBFE',
		conferenceCallEndedPhoneBackground: '#6C727A',
		conferenceCallOngoingPhoneIcon: '#F7F8FA',
		conferenceCallIncomingPhoneIcon: '#095AD2',
		conferenceCallEndedPhoneIcon: '#F7F8FA',
		conferenceCallPlusUsersButton: '#2F343D',
		conferenceCallPlusUsersText: '#9EA2A8',
		conferenceCallCallBackButton: '#E4E7EA',
		conferenceCallCallBackText: '#FFFFFF',
		conferenceCallDisabledIcon: '#6C727A',
		conferenceCallEnabledIcon: '#FFFFFF',
		conferenceCallEnabledIconBackground: '#156FF5',
		conferenceCallPhotoBackground: '#E4E7EA',
		textInputSecondaryBackground: '#030b1b',
		dotBg: '#a9cbff',
		dotActiveBg: '#1d74f5',
		gray300: '#5f656e',
		gray100: '#CBCED1',
		n900: '#FFFFFF',
		statusBackgroundWarning: '#FFECAD',
		statusFontOnWarning: '#B88D00',
		overlayColor: '#1F2329CC',
		taskBoxColor: '#9297a2',
		...mentions,
		...callButtons
	},
	black: {
		...newColorsDark,
		surfaceLight: '#0d0d0d',

		backgroundColor: '#000000',
		focusedBackground: '#0d0d0d',
		chatComponentBackground: '#16181a',
		auxiliaryBackground: '#080808',
		bannerBackground: '#1f2329',
		titleText: '#f9f9f9',
		bodyText: '#cbced1',
		backdropColor: '#000000',
		dangerColor: '#f5455c',
		successColor: '#2de0a5',
		borderColor: '#1f2329',
		controlText: '#dadde6',
		auxiliaryText: '#b2b8c6',
		infoText: '#6d6d72',
		tintColor: '#1e9bfe',
		tintActive: '#76b7fc',
		tintDisabled: '#88B4F5', // TODO: Evaluate this with design team
		auxiliaryTintColor: '#f9f9f9',
		actionTintColor: '#1e9bfe',
		separatorColor: '#272728',
		navbarBackground: '#0d0d0d',
		headerBorder: '#323232',
		headerBackground: '#0d0d0d',
		headerSecondaryBackground: '#0d0d0d',
		headerTintColor: '#f9f9f9',
		headerTitleColor: '#f9f9f9',
		headerSecondaryText: '#b2b8c6',
		toastBackground: '#54585e',
		videoBackground: '#1f2329',
		favoriteBackground: '#ffbb00',
		hideBackground: '#54585e',
		searchboxBackground: '#1f1f1f',
		buttonBackground: '#414852',
		buttonText: '#ffffff',
		passcodeBackground: '#000000',
		passcodeButtonActive: '#0E0D0D',
		editAndUploadButtonAvatar: '#0E0D0D',
		passcodeLockIcon: '#6C727A',
		passcodePrimary: '#FFFFFF',
		passcodeSecondary: '#CBCED1',
		passcodeDotEmpty: '#CBCED1',
		passcodeDotFull: '#6C727A',
		previewBackground: '#000000',
		previewTintColor: '#f9f9f9',
		backdropOpacity: 0.9,
		attachmentLoadingOpacity: 0.3,
		collapsibleQuoteBorder: '#CBCED1',
		collapsibleChevron: '#6C727A',
		cancelButton: '#E4E7EA',
		conferenceCallBorder: '#1F2329',
		conferenceCallBackground: '#1F2329',
		conferenceCallOngoingPhoneBackground: '#106D4F',
		conferenceCallIncomingPhoneBackground: '#D1EBFE',
		conferenceCallEndedPhoneBackground: '#6C727A',
		conferenceCallOngoingPhoneIcon: '#F7F8FA',
		conferenceCallIncomingPhoneIcon: '#095AD2',
		conferenceCallEndedPhoneIcon: '#F7F8FA',
		conferenceCallPlusUsersButton: '#2F343D',
		conferenceCallPlusUsersText: '#9EA2A8',
		conferenceCallCallBackButton: '#E4E7EA',
		conferenceCallCallBackText: '#FFFFFF',
		conferenceCallDisabledIcon: '#6C727A',
		conferenceCallEnabledIcon: '#FFFFFF',
		conferenceCallEnabledIconBackground: '#156FF5',
		conferenceCallPhotoBackground: '#E4E7EA',
		textInputSecondaryBackground: '#000000',
		dotBg: '#a9cbff',
		dotActiveBg: '#1d74f5',
		gray300: '#5f656e',
		gray100: '#CBCED1',
		n900: '#FFFFFF',
		statusBackgroundWarning: '#FFECAD',
		statusFontOnWarning: '#B88D00',
		overlayColor: '#1F2329CC',
		taskBoxColor: '#9297a2',
		...mentions,
		...callButtons
	}
};

export const themes = colors;
