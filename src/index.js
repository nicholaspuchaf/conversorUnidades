
function zjjsahoudha() {

    const carregarDivs = () => {
        $("#meuNav").load("myNavbar.html");

        $("#espacoMoeda").load("moedas.html", () => {
            gerarMoedas();
        });

        $("#espacoMassa").load("massa.html", () => {
            gerarMedidasPesos();

        });

        $("#espacoComprimento").load("comprimento.html", () => {
            gerarMedidasComprimento();
        });
        
        $("#espacoVolume").load("volume.html", () => {
            gerarMedidasVolume();
        });

        $("#espacoArea").load("area.html", ()=>{
            gerarMedidasArea();
        });

        $("#espacoVelocidade").load("velocidade.html", () => {
            gerarMedidasVelocidade();
        });

        $("#textoDescritivo").load("texto.html");

    };


    const gerarMoedas = () =>{
        
        const apiUrl = "https://open.er-api.com/v6/latest/USD"
        lista = {
            "AED": "UAE Dirham-United Arab Emirates", "AFN": "Afghan Afghani-Afghanistan", "ALL": "Albanian LekAlbania", "AMD": "Armenian Dram-Armenia", "ANG": "Netherlands Antillian Guilder-Netherlands Antilles", "AOA": "Angolan Kwanza-Angola", "ARS": "Argentine Peso-Argentina", "AUD": "Australian Dollar -Australia", "AWG": "Aruban Florin-Aruba", "AZN": "Azerbaijani Manat-Azerbaijan", "BAM": "Bosnia and Herzegovina Mark-Bosnia and Herzegovina", "BBD": "Barbados Dollar-Barbados", "BDT": "Bangladeshi Taka-Bangladesh", "BGN": "Bulgarian Lev-Bulgaria", "BHD": "Bahraini Dinar-Bahrain", "BIF": "Burundian Franc-Burundi", "BMD": "Bermudian Dollar-Bermuda", "BND": "Brunei Dollar-Brunei", "BOB": "Bolivian Boliviano-Bolivia", "BRL": "Brazilian Real-Brazil", "BSD": "Bahamian Dollar-Bahamas", "BTN": "Bhutanese Ngultrum-Bhutan", "BWP": "Botswana Pula-Botswana", "BYN": "Belarusian Ruble-Belarus", "BZD": "Belize Dollar-Belize", "CAD": "Canadian Dollar-Canada", "CDF": "Congolese Franc-Democratic Republic of the Congo", "CHF": "Swiss Franc-Switzerland", "CLP": "Chilean Peso-Chile", "CNY": "Chinese Renminbi-China", "COP": "Colombian Peso-Colombia", "CRC": "Costa Rican Colon-Costa Rica", "CUP": "Cuban Peso-Cuba", "CVE": "Cape Verdean Escud0-oCape Verde", "CZK": "Czech Koruna-Czech Republic", "DJF": "Djiboutian Franc-Djibouti", "DKK": "Danish Krone-Denmark", "DOP": "Dominican Peso-Dominican Republic", "DZD": "Algerian Dinar-Algeria", "EGP": "Egyptian Pound-Egypt", "ERN": "Eritrean Nakfa-Eritrea", "ETB": "Ethiopian Birr-Ethiopia", "EUR": "Euro-European Union", "FJD": "Fiji Dollar-Fiji", "FKP": "Falkland Islands Pound-Falkland Islands", "FOK": "Faroese Króna-Faroe Islands", "GBP": "Pound Sterling-United Kingdom", "GEL": "Georgian Lari-Georgia", "GGP": "Guernsey Pound-Guernsey", "GHS": "Ghanaian Cedi-Ghana", "GIP": "Gibraltar Pound-Gibraltar", "GMD": "Gambian Dalasi-The Gambia", "GNF": "Guinean Franc-Guinea", "GTQ": "Guatemalan Quetzal-Guatemala", "GYD": "Guyanese Dollar-Guyana", "HKD": "Hong Kong Dollar-Hong Kong", "HNL": "Honduran Lempira-Honduras", "HRK": "Croatian Kuna-Croatia", "HTG": "Haitian Gourde-Haiti", "HUF": "Hungarian Forint-Hungary", "IDR": "Indonesian Rupiah-Indonesia", "ILS": "Israeli New Shekel-Israel", "IMP": "Manx Pound-Isle of Man", "INR": "Indian Rupee-India", "IQD": "Iraqi Dinar-Iraq", "IRR": "Iranian Rial-Iran", "ISK": "Icelandic Króna-Iceland", "JEP": "Jersey Pound-Jersey", "JMD": "Jamaican Dollar-Jamaica", "JOD": "Jordanian Dinar-Jordan", "JPY": "Japanese Yen-Japan", "KES": "Kenyan Shilling-Kenya", "KGS": "Kyrgyzstani Som-Kyrgyzstan", "KHR": "Cambodian Riel-Cambodia", "KID": "Kiribati Dollar-Kiribati", "KMF": "Comorian Franc-Comoros", "KRW": "South Korean Won-South Korea", "KWD": "Kuwaiti Dinar-Kuwait", "KYD": "Cayman Islands Dollar-Cayman Islands", "KZT": "Kazakhstani Tenge-Kazakhstan", "LAK": "Lao Kip-Laos", "LBP": "Lebanese Pound-Lebanon", "LKR": "Sri Lanka Rupee-Sri Lanka", "LRD": "Liberian Dollar-Liberia", "LSL": "Lesotho Loti-Lesotho", "LYD": "Libyan Dinar-Libya", "MAD": "Moroccan Dirham-Morocco", "MDL": "Moldovan Leu-Moldova", "MGA": "Malagasy Ariary-Madagascar", "MKD": "Macedonian Denar-North Macedonia", "MMK": "Burmese Kyat-Myanmar", "MNT": "Mongolian Tögrög-Mongolia", "MOP": "Macanese Pataca-Macau", "MRU": "Mauritanian Ouguiya-Mauritania", "MUR": "Mauritian Rupee-Mauritius", "MVR": "Maldivian Rufiyaa-Maldives", "MWK": "Malawian Kwacha-Malawi", "MXN": "Mexican Peso-Mexico", "MYR": "Malaysian Ringgit-Malaysia", "MZN": "Mozambican Metical-Mozambique", "NAD": "Namibian Dollar-Namibia", "NGN": "Nigerian Naira-Nigeria", "NIO": "Nicaraguan Córdoba-Nicaragua", "NOK": "Norwegian Krone-Norway", "NPR": "Nepalese Rupee-Nepal", "NZD": "New Zealand Dollar-New Zealand", "OMR": "Omani Rial-Oman", "PAB": "Panamanian Balboa-Panama", "PEN": "Peruvian Sol-Peru", "PGK": "Papua New Guinean Kina-Papua New Guinea", "PHP": "Philippine Peso-Philippines", "PKR": "Pakistani Rupee-Pakistan", "PLN": "Polish Złoty-Poland", "PYG": "Paraguayan Guaraní-Paraguay", "QAR": "Qatari Riyal-Qatar", "RON": "Romanian Leu-Romania", "RSD": "Serbian Dinar-Serbia", "RUB": "Russian Ruble-Russia", "RWF": "Rwandan Franc-Rwanda", "SAR": "Saudi Riyal-Saudi Arabia", "SBD": "Solomon Islands Dollar-Solomon Islands", "SCR": "Seychellois Rupee-Seychelles", "SDG": "Sudanese Pound-Sudan", "SEK": "Swedish Krona-Sweden", "SGD": "Singapore Dollar-Singapore", "SHP": "Saint Helena Pound-Saint Helena", "SLE": "Sierra Leonean Leone-Sierra Leone", "SOS": "Somali Shilling-Somalia", "SRD": "Surinamese Dollar-Suriname", "SSP": "South Sudanese Pound-South Sudan", "STN": "São Tomé and Príncipe Dobra-São Tomé and Príncipe", "SYP": "Syrian Pound-Syria", "SZL": "Eswatini Lilangeni-Eswatini", "THB": "Thai Baht-Thailand", "TJS": "Tajikistani Somoni-Tajikistan", "TMT": "Turkmenistan Manat-Turkmenistan", "TND": "Tunisian Dinar-Tunisia", "TOP": "Tongan Paanga-Tonga", "TRY": "Turkish Lira-Turkey", "TTD": "Trinidad and Tobago Dollar-Trinidad and Tobago", "TVD": "Tuvaluan Dollar-Tuvalu", "TWD": "New Taiwan Dollar-Taiwan", "TZS": "Tanzanian Shilling-Tanzania", "UAH": "Ukrainian Hryvnia-Ukraine", "UGX": "Ugandan Shilling-Uganda", "USD": "United States Dollar-United States", "UYU": "Uruguayan Peso-Uruguay", "UZS": "Uzbekistani So m-Uzbekistan", "VES": "Venezuelan Bolívar Soberano-Venezuela", "VND": "Vietnamese Dong-Vietnam", "VUV": "Vanuatu Vatu-Vanuatu", "WST": "Samoan Tālā-Samoa", "XAF": "Central African CFA Franc-CEMAC", "XCD": "East Caribbean Dollar-Organisation of Eastern Caribbean States", "XDR": "Special Drawing Rights-International Monetary Fund", "XOF": "West African CFA franc-CFA", "XPF": "CFP Franc-Collectivités dOutre-Mer", "YER": "Yemeni Rial-Yemen", "ZAR": "South African Rand-South Africa", "ZMW": "Zambian Kwacha-Zambia", "ZWL": "Zimbabwean Dollar-Zimbabwe"
        }

        fetch(apiUrl, {
            method:"GET"
        }).then(response => response.json()).then(data => {
            
            info = {}

            rates = data['rates']

            for(key in rates)
            {
                if (key in lista){
                    nome = lista[key] + `(${key})`
                    info[nome] = rates[key]
                }
            }
            maisUsadas = {}


            Object.entries(info).forEach(([key, value]) => {
                option1 = $("<option>", {
                    value:value,
                    text:key
                });
    
                option2 = $("<option>", {
                    value:value,
                    text:key
                });
    
               $("#listaMedidasMoedas").append(option1);
               $("#listaMedidasMoedasFim").append(option2);
            })


            function resultadoMoedas() {

                quantidade = parseFloat($("#quantidadeEntradaMoedas").val());
    
                option1 = parseFloat($("#listaMedidasMoedas").val());
    
                option2 = parseFloat($("#listaMedidasMoedasFim").val());
    
                resultado = option2 / option1;
                resultado = resultado * quantidade;
    
    
                if(resultado+"" == "NaN")
                    return
    
                $("#resultadoMoeda").text(resultado.toFixed(2));
    
            };
    
    
            $("#listaMedidasMoedas").change(resultadoMoedas);
            $("#listaMedidasMoedasFim").change(resultadoMoedas);
            $("#quantidadeEntradaMoedas").change(resultadoMoedas);
    


        }).catch(error => console.error('Error:', error));


    };

    const gerarMedidasComprimento = () =>{

        listaDeMedidas = {
            "Metro (m)": 1,
            "Kilômetro (km)": 1000,
            "Centímetro (cm)": 0.01,
            "Milímetro (mm)": 0.001,
            "Micrômetro (µm)": 0.000001,
            "Nanômetro (nm)": 0.000000001,
            "Decímetro (dm)": 0.1,
            "Decâmetro (dam)": 10,
            "Hectômetro (hm)": 100
        }

        listaDeMedidasBritanicas = {
            "Polegada (in)": 0.0254,
            "Pé (ft)": 0.3048,
            "Jarda (yd)": 0.9144,
            "Milha (mi)": 1609.34,
            "Milha náutica (nmi)": 1852,
            "Milha terrestre (statute mile)": 1609.344,
            "Légua (league)": 4828.032,
            "Furlong": 201.168,
            "Cadeia (chain)": 20.1168,
            "Vara (rod/perch/pole)": 5.0292
        }

        listaDeMedidasAstronomicas = 
        {
            "Unidade Astronômica (UA)": 149597870700,
            "Ano-luz (ly)": 9460730472580800,
            "Parsec (pc)": 30856775814913673,
            "Quiloparsec (kpc)": 30856775814913673000,
            "Megalight-year (Mly)": 946073047258080000000,
            "Gigaparsec (Gpc)": 30856775814913673000000000
        }
        
    
        Object.entries(listaDeMedidas).forEach(([key,value]) => {
            option1 = $("<option>", {
                value:value,
                text:key
            });

            option2 = $("<option>", {
                value:value,
                text:key
            });

           $("#listaMedidas").append(option1);
           $("#listaMedidasFim").append(option2);
        })

        Object.entries(listaDeMedidasBritanicas).forEach(([key,value]) => {
            option1 = $("<option>", {
                value:value,
                text:key
            });

            option2 = $("<option>", {
                value:value,
                text:key
            });

            $("#listaMedidas").append(option1);
            $("#listaMedidasFim").append(option2);
        })

        Object.entries(listaDeMedidasAstronomicas).forEach(([key,value]) => {
            option1 = $("<option>", {
                value:value,
                text:key
            });

            option2 = $("<option>", {
                value:value,
                text:key
            });

            $("#listaMedidas").append(option1);
            $("#listaMedidasFim").append(option2);
        })

        function resultadoMedidas() {

            quantidade = parseFloat($("#quantidadeEntrada").val());

            option1 = parseFloat($("#listaMedidas").val());

            option2 = parseFloat($("#listaMedidasFim").val());

            resultado = option1 / option2;
            resultado = resultado * quantidade;


            if(resultado+"" == "NaN")
                return

            $("#resultadoMedidaComprimento").text(resultado.toFixed(3));

        };


        $("#listaMedidas").change(resultadoMedidas);
        $("#listaMedidasFim").change(resultadoMedidas);
        $("#quantidadeEntrada").change(resultadoMedidas);


    };

    const gerarMedidasPesos = () => {

        listaDeMedidasPesos = {
            "Tonelada (t)": 1000,
            "Kilonewton (kN)": 101.97,
            "Kilograma (Kg)": 1,
            "Hectograma (Hg)": 0.1,
            "Decagrama (Dag)": 0.01,
            "Grama (g)": 0.001,
            "Decigrama (dg)": 0.0001,
            "Centigrama (cg)": 0.00001,
            "Miligrama (mg)": 0.000001,
            "Micrograma (µg)": 0.000000001,
            "Nanograma (ng)": 0.000000000001,
            "Stone (st)": 6.35029,
            "Libra (lb)": 0.453592,
            "Onça (oz)": 0.0283495,
            "Quilate (ct)": 0.0002,
            "Grain (gr)": 0.00006479891,
            "Dram (dr)": 0.00177185,
            "Quarter (qt)": 12.7006,
            "Hundredweight (cwt)": 50.8023,
            "Ton (short, US)": 907.1847,
            "Ton (long, UK)": 1016.0469,
            "Kwan (貫)": 3.75,
            "Kin (斤, Japão)": 0.6,
            "Momme (匁)": 0.00375,
            "Jin (斤, China)": 0.5,
            "Liang (两)": 0.05,
            "Dan (担, China)": 50,
            "Skeppspund (Velho Sueco)": 170.0,
            "Lispund (Velho Sueco)": 8.5,
            "Markpund (Velho Sueco)": 0.425,
            "Ort (Velho Sueco)": 0.014173,
            "Uns (Velho Sueco)": 0.028346
        }

        Object.entries(listaDeMedidasPesos).forEach(([key,value]) => {
            option1 = $("<option>", {
                value:value,
                text:key
            });
            option2 = $("<option>", {
                value:value,
                text:key
            });

            $("#listaMedidasPesos").append(option1);
            $("#listaMedidasPesosFim").append(option2);
        })

        function resultadoPeso() {

            valor1 = parseFloat($("#quantidadeEntradaPesos").val());

            opcao1 = parseFloat($("#listaMedidasPesos").val());
            opcao2 = parseFloat($("#listaMedidasPesosFim").val());

            resultado = opcao1 / opcao2;
            resultado = resultado * valor1;


            if(resultado+"" == "NaN")
                return;
            $("#resultadoMedidaPesos").text(resultado.toFixed(3));
        }


        $("#listaMedidasPesos").change(resultadoPeso);
        $("#listaMedidasPesosFim").change(resultadoPeso);
        $("#quantidadeEntradaPesos").change(resultadoPeso);

    };

    const gerarMedidasVolume = () => {

        listaMedidasVolume = {
            "Litro (l)": 1,
            "Metro cúbico (m³)": 1000,
            "Decímetro cúbico (dm³)": 0.001,
            "Centímetro cúbico (cm³)": 0.000001,
            "Milímetro cúbico (mm³)": 0.000000001,
            "Quilômetro cúbico (km³)": 1000000000,
            "Hectólitro (hl)": 100,
            "Galão (gal)": 3.78541,
            "Onça líquida (fl.oz)": 0.0295735,
            "Pipeta (mL)": 0.001,
            "Barril (bbl)": 158.987,
            "Copo (cup)": 0.24,
            
            "Galão americano (líquido)": 3.78541,
            "Galão americano (seco)": 4.4048838,
            "Onça líquida americana (fl.oz)": 0.0295735,
            "Onça seca americana (fl.oz)": 0.0351951,
            "Pinta americana (pt)": 0.473176,
            "Pinta britânica (pt)": 0.568261,
            "Quart americano (qt)": 0.946352,
            "Quart britânico (qt)": 1.13652,
            "Bushel americano (bu)": 35.2391,
            "Bushel britânico (bu)": 36.3687,
        
            // Medidas de cozinha
            "Copo americano (cup)": 0.24,
            "Colher de sopa (tblsp)": 0.01479,
            "Colher de chá (tsp)": 0.00493,
            "Café (espresso shot)": 0.03,
            "Xícara (cup)": 0.24,
            "Galão britânico (gal)": 4.54609,
            "Pinta britânica (pt)": 0.568261,
            "Copo de medição (cup)": 0.24,
            "Colher de sopa (soup spoon)": 0.015,
            "Colher de sobremesa (dessert spoon)": 0.010,
            "Colher de chá (teaspoon)": 0.005,
            "Copo de chá (teacup)": 0.2,
            "Onça líquida (fl.oz)": 0.0295735,
        
            // Unidades de Volume Japonesas
            "Shaku (尺)": 0.0030303,
            "Go (合)": 0.18039,
            "Shō (升)": 1.8039,
            "Koku (石)": 180.39,
        
            // Unidades de Volume Chinesas
            "Liang (两)": 0.05,
            "Sheng (升)": 1,
            "Dou (斗)": 10,
            "Zhong (钟)": 100,
            "Gong (公)": 1000
        }

        Object.entries(listaMedidasVolume).forEach(([key,value]) => {
            option1 = $("<option>", {
                value:value,
                text:key
            });
            option2 = $("<option>", {
                value:value,
                text:key
            });

            $("#listaMedidasVolume").append(option1);
            $("#listaMedidasVolumeFim").append(option2);
        })

        function resultadoVolume() {

            valor1 = parseFloat($("#quantidadeEntradaVolume").val());

            opcao1 = parseFloat($("#listaMedidasVolume").val());
            opcao2 = parseFloat($("#listaMedidasVolumeFim").val());

            resultado = opcao1 / opcao2;
            resultado = resultado * valor1;


            if(resultado+"" == "NaN")
                return;
            $("#resultadoMedidaVolume").text(resultado.toFixed(5));
        }


        $("#listaMedidasVolume").change(resultadoVolume);
        $("#listaMedidasVolumeFim").change(resultadoVolume);
        $("#quantidadeEntradaVolume").change(resultadoVolume);

    };

    const gerarMedidasArea = () => {

        listaDeMedidas = {
            "Metro quadrado (m²)": 1,
            "Kilômetro quadrado (km²)": 1000000,
            "Hectare (ha)": 10000,
            "Decâmetro quadrado (dam²)": 100,
            "Centímetro quadrado (cm²)": 0.0001,
            "Milímetro quadrado (mm²)": 0.000001,
            "Acre (ac)": 4046.86,
            "Jarda quadrada (yd²)": 0.836127,
            "Pé quadrado (ft²)": 0.092903,
            "Polegada quadrada (in²)": 0.00064516,
            "Are (a)": 100,
            "Milha quadrada (mi²)": 2589988.11,
            "Rod quadrado": 25.2929,
            "Rood": 1011.714,
            "Perche": 34.188,
            "Pole (britânico)": 25.2929,
            "Furlong quadrado": 40468.6,
            "Chain quadrado": 404.686,
            "Acre (britânico, imperial)": 4046.856,
            "Perch quadrado": 25.29285264,
            "Alqueire Paulista": 24200,
            "Alqueire Mineiro": 48400,
            "Alqueire Baiano": 96800,
            "Alqueire Goiano": 48400
        };



        Object.entries(listaDeMedidas).forEach(([key,value]) => {
            option1 = $("<option>", {
                value:value,
                text:key
            });
            option2 = $("<option>", {
                value:value,
                text:key
            });

            $("#listaMedidasArea").append(option1);
            $("#listaMedidasAreaFim").append(option2);
        })

        function resultadoArea() {

            valor1 = parseFloat($("#quantidadeEntradaArea").val());

            opcao1 = parseFloat($("#listaMedidasArea").val());
            opcao2 = parseFloat($("#listaMedidasAreaFim").val());

            resultado = opcao1 / opcao2;
            resultado = resultado * valor1;


            if(resultado+"" == "NaN")
                return;
            $("#resultadoArea").text(resultado.toFixed(5));
        }


        $("#listaMedidasArea").change(resultadoArea);
        $("#listaMedidasAreaFim").change(resultadoArea);
        $("#quantidadeEntradaArea").change(resultadoArea);


    };

    const gerarMedidasVelocidade = () =>{

        listaVelocidade = {
            "m/s": 1,
            "km/s": 0.001,
            "km/h": 3.6,
            "cm/s": 100,
            "mm/s": 1000,
            "mi/h (milhas por hora)": 2.23694,
            "ft/s (pés por segundo)": 3.28084,
            "in/s (polegadas por segundo)": 39.3701,
            "nós (knot)": 1.94384,
            "c (velocidade da luz no vácuo)": 299792458,
            "Mach (ao nível do mar, 20°C)": 340.29
        }
        

        Object.entries(listaVelocidade).forEach(([key,value]) => {
            option1 = $("<option>", {
                value:value,
                text:key
            });
            option2 = $("<option>", {
                value:value,
                text:key
            });

            $("#listaMedidasVelocidade").append(option1);
            $("#listaMedidasVelocidadeFim").append(option2);
        })

        function resultadoVelocidade() {

            valor1 = parseFloat($("#quantidadeEntradaVelocidade").val());

            opcao1 = parseFloat($("#listaMedidasVelocidade").val());
            opcao2 = parseFloat($("#listaMedidasVelocidadeFim").val());

            resultado = opcao1 / opcao2;
            resultado = resultado * valor1;

            console.log(resultado)
            if(resultado+"" == "NaN")
                return;
            $("#resultadoVelocidade").text(resultado.toFixed(4));
            
        }


        $("#listaMedidasVelocidade").change(resultadoVelocidade);
        $("#listaMedidasVelocidadeFim").change(resultadoVelocidade);
        $("#quantidadeEntradeVelocidade").change(resultadoVelocidade);

    };

    carregarDivs();

}

zjjsahoudha();