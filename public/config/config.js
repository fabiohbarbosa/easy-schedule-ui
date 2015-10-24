angular.module("easy-scheduler-ui-config", ["ngCookies","ngAnimate","ngSanitize","ui.router","angular.filter","ui.bootstrap","pascalprecht.translate","chart.js"])

.constant("constant", {
	"backend": {
		"core": {
			"url": "http://localhost:4000"
		},
		"language": {
			"url": "http://localhost:4000"
		}
	}
})

;