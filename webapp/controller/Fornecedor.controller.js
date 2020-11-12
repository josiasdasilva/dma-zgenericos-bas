sap.ui.define([
	"dma/zgenericos/controller/BaseController",
	"dma/zgenericos/model/formatter"
], function (BaseController, formatter) {
	"use strict";

	return BaseController.extend("dma.zgenericos.controller.Fornecedor", {

		formatter: formatter,

		// --- Botão Pedido
		onPedidoPressed: function (oEvent) {
			//			var sFornecedor = oEvent.getSource().getBindingContext().Lifnr;
			var sLifnr = oEvent.getSource().getBindingContext().getProperty("Lifnr");
			var sComprador = oEvent.getSource().getBindingContext().getProperty("Comprador");
			this.getRouter().navTo("pedido", {
				Lifnr: sLifnr,
				Comprador: sComprador
			}, true);
		}

		// onInit: function() {

		// }

		//	onBeforeRendering: function() {
		//
		//	},

		//	onAfterRendering: function() {
		//
		//	},

		//	onExit: function() {
		//
		//	}

	});

});