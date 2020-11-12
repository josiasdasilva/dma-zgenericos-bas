/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"dma/zgenericos/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"dma/zgenericos/test/integration/pages/View1",
	"dma/zgenericos/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "dma.zgenericos.view.",
		autoWait: true
	});
});