export enum ActionId {
	Start = 'start',
	Load = 'load',
	Pause = 'pause',
	Stop = 'stop',
	Reload = 'reload',
	Roll = 'roll',

	Add = 'add',

	Change = 'change',

	TimerBlackout = 'TimerBlackout',
	TimerBlink = 'TimerBlink',
	MessageVisibility = 'setMessageVisibility',
	MessageText = 'setMessage',

	AuxTimerDuration = 'auxTimerDuration',
	AuxTimerPlayState = 'auxTimerPlayState',
	AuxTimerDirection = 'auxTimerDirection',
}

export enum deprecatedActionId {
	Next = 'next',
	Previous = 'previous',
	SetOnAir = 'setOnAir',
	SetTimerMessageVisibility = 'setTimerMessageVisibility',
	SetTimerMessage = 'setTimerMessage',
	SetPublicMessageVisibility = 'setPublicMessageVisibility',
	SetPublicMessage = 'setPublicMessage',
	SetLowerMessageVisibility = 'setLowerMessageVisibility',
	SetLowerMessage = 'setLowerMessage',
	StartId = 'startId',
	StartSelect = 'startSelect',
	StartIndex = 'startIndex',
	StartNext = 'startNext',
	StartCue = 'startCue',
	LoadId = 'loadId',
	LoadSelect = 'loadSelect',
	LoadIndex = 'loadIndex',
	LoadCue = 'loadCue',
	SetTimerBlackout = 'setTimerBlackout',
	SetTimerBlink = 'setTimerBlink',
}

export enum feedbackId {
	ColorPlayback = 'colorPlayback',
	ColorNegative = 'timer_negative',
	ColorAddRemove = 'state_color_add_remove',
	OnAir = 'onAir',
	MessageVisible = 'messageVisible',
	TimerBlink = 'timerBlink',
	TimerBlackout = 'timerBlackout',
	TimerZone = 'timerZone',
}

export enum deprecatedFeedbackId {
	ThisMessageVisible = 'thisMessageVisible',
	TimerMessageVisible = 'timerMessageVisible',
	ThisTimerMessageVisible = 'thisTimerMessageVisible',
	PublicMessageVisible = 'publicMessageVisible',
	LowerMessageVisible = 'lowerMessageVisible',
	ColorRunning = 'state_color_running',
	ColorPaused = 'state_color_paused',
	ColorStopped = 'state_color_stopped',
	ColorRoll = 'state_color_roll',
}

export enum variableId {
	PlayState = 'playState',

	Clock = 'clock',

	TimerStart = 'timer_start',
	TimerFinish = 'timer_finish',
	TimerAdded = 'timer_added',
	TimerAddedNice = 'timer_added_nice',
	TimerTotalMs = 'timer_total_ms',
	TimerZone = 'time_zone',
	Time = 'time',
	TimeHM = 'time_hm',
	TimeH = 'time_h',
	TimeM = 'time_m',
	TimeS = 'time_s',

	IdNow = 'idNow',
	TitleNow = 'titleNow',
	NoteNow = 'noteNow',
	CueNow = 'cueNow',

	IdNext = 'idNext',
	TitleNext = 'titleNext',
	NoteNext = 'noteNext',
	CueNext = 'cueNext',

	TimerMessage = 'timerMessage',
	TimerMessageVisible = 'timerMessageVisible',
	TimerBlink = 'timerBlink',
	TimerBlackout = 'timerBlackout',

	AuxTimerDurationMs = 'auxTimer_duration_ms',
	AuxTimerPlayback = 'auxTimer_playback',
	AuxTimerCurrentMs = 'auxTimer_current_hms',
	AuxTimerCurrent = 'auxTimer_current_hms',
	AuxTimerPalyback = 'auxTimer_playback',
	AuxTimerDirection = 'auxTimer_direction',
}

export enum deprecatedVariableId {
	SubtitleNow = 'subtitleNow',
	SpeakerNow = 'speakerNow',
	SubtitleNext = 'subtitleNext',
	SpeakerNext = 'speakerNext',
}
