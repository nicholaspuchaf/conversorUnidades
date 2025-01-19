
function zjjsahoudha() {

    const carregarDivs = () => {
        $("#meuNav").load("myNavbar.html");

        $("#espacoMassa").load("massa.html", () => {
            gerarMedidasPesos();

        });

        $("#espacoComprimento").load("comprimento.html", () => {
            gerarMedidasComprimento();
        });
        
        $("#espacoVolume").load("volume.html", () => {
            gerarMedidasVolume();
        });

    };


    const gerarMoedas = () =>{
        
        listaMoedas = $("#listaMoedas");

        try {
            
            url = "https://api.coingecko.com/api/v3/simple/price"

            params = {
                "ids":"bitcoin, ethereum",
                "vs_currencies" : "usd"
            }

            $.ajax({
                url: url,
                method: "GET",
                data:params,
                success: function(data) {
                    
                }

            })


        } catch (error) {
            console.log(error);
        }

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


    carregarDivs();

}

zjjsahoudha();