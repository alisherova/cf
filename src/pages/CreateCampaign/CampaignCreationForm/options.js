const categories = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" }
];
const cities = [
  { value: "toshkent", label: "Toshkent" },
  { value: "samarqand", label: "Samarqand" },
  { value: "namangan", label: "Namangan" },
  { value: "andijon", label: "Andijon" },
  { value: "buxoro", label: "Buxoro" },
  { value: "nukus", label: "Nukus" },
  { value: "qarshi", label: "Qarshi" },
  { value: "urganch", label: "Urganch" },
  { value: "qo'qon", label: "Qo'qon" },
  { value: "chirchiq", label: "Chirchiq" },
  { value: "farg'ona", label: "Farg'ona" },
  { value: "jizzax", label: "Jizzax" },
  { value: "termiz", label: "Termiz" },
  { value: "marg'ilon", label: "Marg'ilon" },
  { value: "navoiy", label: "Navoiy" },
  { value: "angren", label: "Angren" },
  { value: "olmaliq", label: "Olmaliq" },
  { value: "bekobod", label: "Bekobod" },
  { value: "xo'jayli", label: "Xo'jayli" },
  { value: "denov", label: "Denov" },
  { value: "shahrixon", label: "Shahrixon" },
  { value: "chust", label: "Chust" },
  { value: "kogon", label: "Kogon" },
  { value: "zarafshon", label: "Zarafshon" },
  { value: "koson", label: "Koson" },
  { value: "qo'ng'irot", label: "Qo'ng'irot" },
  { value: "taxiatosh", label: "Taxiatosh" },
  { value: "shahrisabz", label: "Shahrisabz" },
  { value: "kattaqo'rg'on", label: "Kattaqo'rg'on" },
  { value: "asaka", label: "Asaka" },
  { value: "xiva", label: "Xiva" },
  { value: "guliston", label: "Guliston" },
  { value: "beruniy", label: "Beruniy" },
  { value: "chortoq", label: "Chortoq" },
  { value: "to'rtko'l", label: "To'rtko'l" },
  { value: "so'x", label: "So'x" },
  { value: "urgut", label: "Urgut" },
  { value: "kosonsoy", label: "Kosonsoy" },
  { value: "kitob", label: "Kitob" },
  { value: "yangiyo'l", label: "Yangiyo'l" },
  { value: "g'ijduvon", label: "G'ijduvon" },
  { value: "xonqa", label: "Xonqa" },
  { value: "oqtosh", label: "Oqtosh" },
  { value: "chimboy", label: "Chimboy" },
  { value: "parkent", label: "Parkent" },
  { value: "ohangaron", label: "Ohangaron" },
  { value: "uchqo'rg'on", label: "Uchqo'rg'on" },
  { value: "qamashi", label: "Qamashi" },
  { value: "quva", label: "Quva" },
  { value: "uchquduq", label: "Uchquduq" },
  { value: "xonobod", label: "Xonobod" },
  { value: "yangiyer", label: "Yangiyer" },
  { value: "quvasoy", label: "Quvasoy" },
  { value: "mang'it", label: "Mang'it" },
  { value: "rishton", label: "Rishton" },
  { value: "uychi", label: "Uychi" },
  { value: "nurota", label: "Nurota" },
  { value: "muborak", label: "Muborak" },
  { value: "zarbdor", label: "Zarbdor" },
  { value: "yangiqo'rg'on", label: "Yangiqo'rg'on" },
  { value: "shayxali", label: "Shayxali" },
  { value: "to'raqo'rg'on", label: "To'raqo'rg'on" },
  { value: "gurlan", label: "Gurlan" },
  { value: "piskent", label: "Piskent" },
  { value: "qibray", label: "Qibray" },
  { value: "zomin", label: "Zomin" },
  { value: "iskandar", label: "Iskandar" },
  { value: "qorao'zak", label: "Qorao'zak" },
  { value: "shovot", label: "Shovot" },
  { value: "taxtako'pir", label: "Taxtako'pir" },
  { value: "jarqo'rg'on", label: "Jarqo'rg'on" },
  { value: "bulung'ur", label: "Bulung'ur" },
  { value: "shofirkon", label: "Shofirkon" },
  { value: "toshloq", label: "Toshloq" },
  { value: "sirdaryo", label: "Sirdaryo" },
  { value: "haqqulobod", label: "Haqqulobod" },
  { value: "salor", label: "Salor" },
  { value: "bektemir", label: "Bektemir" },
  { value: "sherobod", label: "Sherobod" },
  { value: "qo'rg'ontepa", label: "Qo'rg'ontepa" },
  { value: "yakkabog'", label: "Yakkabog'" },
  { value: "qorasuv", label: "Qorasuv" },
  { value: "g'uzor", label: "G'uzor" },
  { value: "poytug'", label: "Poytug'" },
  { value: "oltiariq", label: "Oltiariq" },
  { value: "boysun", label: "Boysun" },
  { value: "sho'rchi", label: "Sho'rchi" },
  { value: "paxtaobod", label: "Paxtaobod" },
  { value: "gagarin", label: "Gagarin" },
  { value: "yangirobod", label: "Yangirobod" },
  { value: "payshanba", label: "Payshanba" },
  { value: "olmazor", label: "Olmazor" },
  { value: "g'azalkent", label: "G'azalkent" },
  { value: "chinoz", label: "Chinoz" },
  { value: "bo'z", label: "Bo'z" },
  { value: "yangiobod", label: "Yangiobod" },
  { value: "g'allaorol", label: "G'allaorol" },
  { value: "karmana", label: "Karmana" },
  { value: "sariosiyo", label: "Sariosiyo" },
  { value: "qorako'l", label: "Qorako'l" },
  { value: "pop", label: "Pop" },
  { value: "beshariq", label: "Beshariq" },
  { value: "paxtakor", label: "Paxtakor" },
  { value: "qirguli", label: "Qirguli" },
  { value: "yaypan", label: "Yaypan" },
  { value: "qozonketkan", label: "Qozonketkan" },
  { value: "juma", label: "Juma" },
  { value: "dashtobod", label: "Dashtobod" },
  { value: "to'ytepa", label: "To'ytepa" },
  { value: "chiroqchi", label: "Chiroqchi" }
];

export { categories, cities };
