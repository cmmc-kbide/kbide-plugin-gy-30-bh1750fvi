Blockly.Blocks['bh1750'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("bh17501", null,["Plugin.bh1750"], ["Plugin.bh1750"]), "bh17501")
        .appendField("begin ADD")
        .appendField(new Blockly.FieldTextInput("0x23"), "BH1750ADD");
    this.appendValueInput("BH1750SDA")
        .setCheck("Number")
        .appendField("SDA PIN");
    this.appendValueInput("BH1750SCL")
        .setCheck("Number")
        .appendField("SCL PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['bh1750read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("bh17501", null,["Plugin.bh1750"], ["Plugin.bh1750"]), "bh17501")
        .appendField("readLightLevel");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    
 this.setTooltip("");
 this.setHelpUrl("");
  }
};