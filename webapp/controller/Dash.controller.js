sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,MessageToast) {
        "use strict";

        return Controller.extend("refinerydash.controller.Dash", {
            onInit: function () {
                
            },
        
            onClick : (oEvent)=>{
                var oClickedNode = oEvent.getSource();
                var sTitle = oClickedNode.getTitle();
                //  MessageToast.show("Clicked Node Title: " + sTitle);
                MessageToast.show(" Title: " + sTitle);
            }
           
        });
    });
