module.exports = {
    "name": "tr 5",
    execute(message) {
        mesaj= [
            "Son Oyuncu",
            "Craftrise",
            "Jeyst Craft",
            "Atom Craft"
            ];
            
            
            message.reply(mesaj[Math.floor(Math.random() *mesaj.length)])
    }



}