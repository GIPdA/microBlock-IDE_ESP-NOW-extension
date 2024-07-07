({
    name: "ESP-NOW", // Category Name
    description: "Communication between ESP via ESP-NOW",
    author: "microBlock",
    category: "Communication",
    version: "1.0.1",
    icon: "/static/icon.png", // Category icon
    color: "#E74C3C", // Category color (recommend some blocks color)
    modules: [
        "modules/ESPNOW.py",
    ],
    blocks: [ // Blocks in Category
        "esp_now_get_my_mac",
        {
            xml: `
                <block type="esp_now_send">
                    <value name="value">
                        <shadow type="text">
                            <field name="TEXT">Hello !</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="esp_now_send_to">
                    <value name="value">
                        <shadow type="text">
                            <field name="TEXT">Hello !</field>
                        </shadow>
                    </value>
                    <value name="to">
                        <shadow type="text">
                            <field name="TEXT">FF:FF:FF:FF:FF:FF</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "esp_now_is_ready_read",
        "esp_now_get_sender_mac",
        "esp_now_read_as_text",
        "esp_now_read_as_number"
    ],
    chip: [
        "ESP32" // Chip support
    ]
});
