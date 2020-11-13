Blockly.defineBlocksWithJsonArray([
{
  "type": "esp_now_send",
  "message0": "ESP-NOW send  %1",
  "args0": [
    {
      "type": "input_value",
      "name": "value",
      "check": [
        "String",
        "Number",
        "Boolean"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E74C3C",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "esp_now_send_to",
  "message0": "ESP-NOW send  %1 to %2",
  "args0": [
    {
      "type": "input_value",
      "name": "value",
      "check": [
        "String",
        "Number",
        "Boolean"
      ]
    },
    {
      "type": "input_value",
      "name": "to",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E74C3C",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "esp_now_is_ready_read",
  "message0": "ESP-NOW is ready to read ?",
  "inputsInline": true,
  "output": [
    "Boolean",
    "Number"
  ],
  "colour": "#E74C3C",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "esp_now_read_as_text",
  "message0": "ESP-NOW read as text",
  "inputsInline": true,
  "output": "String",
  "colour": "#E74C3C",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "esp_now_read_as_number",
  "message0": "ESP-NOW read as number",
  "inputsInline": true,
  "output": "Number",
  "colour": "#E74C3C",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "esp_now_get_my_mac",
  "message0": "ESP-NOW get my MAC address",
  "inputsInline": true,
  "output": "String",
  "colour": "#E74C3C",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "esp_now_get_sender_mac",
  "message0": "ESP-NOW get sender MAC address",
  "inputsInline": true,
  "output": "String",
  "colour": "#E74C3C",
  "tooltip": "",
  "helpUrl": ""
}
]);
