Blockly.JavaScript['bh1750'] = function(block) {
  var variable_bh17501 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('bh17501'), Blockly.Variables.NAME_TYPE);
  var text_mbh1750add = block.getFieldValue('BH1750ADD');
  var value_bh1750sda = Blockly.JavaScript.valueToCode(block, 'BH1750SDA', Blockly.JavaScript.ORDER_ATOMIC);
  var value_bh1750scl = Blockly.JavaScript.valueToCode(block, 'BH1750SCL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
    var code =
      `
#EXTINC#include <Wire.h>#END
#EXTINC#include <BH1750.h>#END

#VARIABLE
BH1750 ${variable_bh17501}(${text_mbh1750add});
#END
Wire.begin(${value_bh1750sda},${value_bh1750scl});\n
${variable_bh17501}.begin();
\n
`;
  return code;
};
Blockly.JavaScript['bh1750read'] = function(block) {
  var variable_bh17501 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('bh17501'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_bh17501}.readLightLevel()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};