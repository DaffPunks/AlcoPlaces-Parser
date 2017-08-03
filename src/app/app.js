var map,
    districtArbat,
    districts = [],
    array = [],
    count = 0,
    districtCoords;

function initMaps() {
    if(region === 1) {
        /*
            Arbat
         */
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: {lat: 55.752371, lng: 37.592595},
        });

        // Define the LatLng coordinates for the polygon's path.
        districtCoords = [
            {lat: 55.758194, lng: 37.584223},
            {lat: 55.754255, lng: 37.605706},
            {lat: 55.756332, lng: 37.607122},
            {lat: 55.754758, lng: 37.611958},
            {lat: 55.749352, lng: 37.608452},
            {lat: 55.750584, lng: 37.604032},
            {lat: 55.748821, lng: 37.602573},
            {lat: 55.747299, lng: 37.599011},
            {lat: 55.746478, lng: 37.585621},
            {lat: 55.744304, lng: 37.587166},
            {lat: 55.743917, lng: 37.583519},
            {lat: 55.745463, lng: 37.582832},
            {lat: 55.745608, lng: 37.573906},
            {lat: 55.752861, lng: 37.574065},
            {lat: 55.755318, lng: 37.576480},
            {lat: 55.755463, lng: 37.583561}
        ];

        districtArbat = new google.maps.Polygon({paths: districtCoords});
        districts.push(districtArbat);
        districtArbat.setMap(map);

    } else if (region === 2) {
        /*
          Himki
         */
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: {lat: 55.936754, lng: 37.403157},
        });

        var districtCoords1 = [
            {lat: 55.91058922530815, lng: 37.32836723327637},
            {lat: 55.91085381232567, lng: 37.342185974121094},
            {lat: 55.90577823743304, lng: 37.34351634979248},
            {lat: 55.90070199821982, lng: 37.35767841339111},
            {lat: 55.893844411845166, lng: 37.37175464630127},
            {lat: 55.88681713629612, lng: 37.37051010131836},
            {lat: 55.8878520547192, lng: 37.36227035522461},
            {lat: 55.88929608081855, lng: 37.36166954040527},
            {lat: 55.8894886135722, lng: 37.35527515411377},
            {lat: 55.88652831692708, lng: 37.354159355163574},
            {lat: 55.88700968134811, lng: 37.33707904815674},
            {lat: 55.89545665517155, lng: 37.33428955078125},
            {lat: 55.903155997757935, lng: 37.33922481536865},
            {lat: 55.90281918348405, lng: 37.33278751373291},
            {lat: 55.90746215108014, lng: 37.32798099517822},
            {lat: 55.91039679725238, lng: 37.328410148620605},
        ];
        var districtArbat1 = new google.maps.Polygon({paths: districtCoords1});

        var districtCoords2 =[
            {lat: 55.877694219831746, lng: 37.43192195892334},
            {lat: 55.877381258542364, lng: 37.42514133453369},
            {lat: 55.877742367498506, lng: 37.42067813873291},
            {lat: 55.87856086869799, lng: 37.41385459899902},
            {lat: 55.88060704620295, lng: 37.41175174713135},
            {lat: 55.881955057157526, lng: 37.409348487854004},
            {lat: 55.88426582417665, lng: 37.40870475769043},
            {lat: 55.8861432210917, lng: 37.40445613861084},
            {lat: 55.889368280713114, lng: 37.40364074707031},
            {lat: 55.8925208784476, lng: 37.403340339660645},
            {lat: 55.89492726922777, lng: 37.4014949798584},
            {lat: 55.89901779105615, lng: 37.399091720581055},
            {lat: 55.90132754225713, lng: 37.396302223205566},
            {lat: 55.90216960483922, lng: 37.39153861999512},
            {lat: 55.90402207817535, lng: 37.38947868347168},
            {lat: 55.91256155782375, lng: 37.389822006225586},
            {lat: 55.916000873282876, lng: 37.39926338195801},
            {lat: 55.918982969781986, lng: 37.3948860168457},
            {lat: 55.92177246528929, lng: 37.393598556518555},
            {lat: 55.923672093011554, lng: 37.394843101501465},
            {lat: 55.92391254557844, lng: 37.39664554595947},
            {lat: 55.92593228824558, lng: 37.39793300628662},
            {lat: 55.92470602846506, lng: 37.412309646606445},
            {lat: 55.923696138335394, lng: 37.41364002227783},
            {lat: 55.922926680573944, lng: 37.423553466796875},
            {lat: 55.923936590753094, lng: 37.42316722869873},
            {lat: 55.925595671777295, lng: 37.419047355651855},
            {lat: 55.93131775411198, lng: 37.42642879486084},
            {lat: 55.941461554008335, lng: 37.4448823928833},
            {lat: 55.93908208586502, lng: 37.447757720947266},
            {lat: 55.93915419310793, lng: 37.44771480560303},
            {lat: 55.93225532568772, lng: 37.44623422622681},
            {lat: 55.92860107247081, lng: 37.44144916534424},
            {lat: 55.919608218988294, lng: 37.42889642715454},
            {lat: 55.92083464006187, lng: 37.43711471557617},
            {lat: 55.91970441027876, lng: 37.44136333465576},
            {lat: 55.91893487327148, lng: 37.45413064956665},
            {lat: 55.923239274631875, lng: 37.46063232421875},
            {lat: 55.92696616340285, lng: 37.4708890914917},
            {lat: 55.92460984958647, lng: 37.485480308532715},
            {lat: 55.916650220282996, lng: 37.483978271484375},
            {lat: 55.91162350974775, lng: 37.4793004989624},
            {lat: 55.90904977412408, lng: 37.47440814971924},
            {lat: 55.90592257575341, lng: 37.47093200683594},
            {lat: 55.90255454164559, lng: 37.46960163116455},
            {lat: 55.89817566005359, lng: 37.46861457824707},
            {lat: 55.89367596464726, lng: 37.46638298034668},
            {lat: 55.88922388078968, lng: 37.46213436126709},
            {lat: 55.88373628555134, lng: 37.457542419433594},
            {lat: 55.88282161091005, lng: 37.45612621307373},
            {lat: 55.879933023171844, lng: 37.43887424468994},
            {lat: 55.877694219831746, lng: 37.43170738220215},
        ];
        var districtArbat2 = new google.maps.Polygon({paths: districtCoords2});

        var districtCoords3 =[
            {lat: 55.882869752217985, lng: 37.45872259140015},
            {lat: 55.883050281591, lng: 37.46481657028198},
            {lat: 55.88473518191873, lng: 37.473270893096924},
            {lat: 55.887298497135035, lng: 37.48307704925537},
            {lat: 55.89069192164141, lng: 37.49305486679077},
            {lat: 55.89723726397379, lng: 37.508225440979004},
            {lat: 55.90147189714086, lng: 37.50015735626221},
            {lat: 55.90445511113198, lng: 37.49232530593872},
            {lat: 55.909987884463206, lng: 37.487947940826416},
            {lat: 55.91085381232567, lng: 37.47758388519287},
            {lat: 55.90791920073989, lng: 37.47269153594971},
            {lat: 55.90445511113198, lng: 37.470223903656006},
            {lat: 55.8925208784476, lng: 37.465267181396484},
            {lat: 55.8864801801566, lng: 37.45968818664551},
            {lat: 55.88282161091005, lng: 37.459044456481934},
        ];
        var districtArbat3 = new google.maps.Polygon({paths: districtCoords3});

        var districtCoords4 =[
            {lat: 55.929971457813316, lng: 37.356905937194824},
            {lat: 55.92831256411796, lng: 37.352871894836426},
            {lat: 55.92412895161317, lng: 37.35982418060303},
            {lat: 55.922085068656095, lng: 37.35797882080078},
            {lat: 55.920113220600264, lng: 37.36106872558594},
            {lat: 55.91727550711486, lng: 37.35574722290039},
            {lat: 55.91568822084823, lng: 37.35531806945801},
            {lat: 55.91196024756557, lng: 37.35433101654053},
            {lat: 55.909987884463206, lng: 37.355875968933105},
            {lat: 55.90977139947616, lng: 37.35720634460449},
            {lat: 55.91044490435585, lng: 37.35952377319336},
            {lat: 55.910613278747974, lng: 37.35969543457031},
            {lat: 55.91205645783351, lng: 37.3590087890625},
            {lat: 55.9114791926449, lng: 37.36299991607666},
            {lat: 55.91196024756557, lng: 37.364373207092285},
            {lat: 55.914774299274605, lng: 37.363600730895996},
            {lat: 55.91542366681879, lng: 37.36681938171387},
            {lat: 55.91717930979717, lng: 37.36952304840088},
            {lat: 55.917732441114076, lng: 37.370381355285645},
            {lat: 55.91838175911137, lng: 37.36926555633545},
            {lat: 55.9211953447577, lng: 37.37793445587158},
            {lat: 55.92994741638287, lng: 37.35682010650635},
        ];
        var districtArbat4 = new google.maps.Polygon({paths: districtCoords4});

        var districtCoords5 =[
            {lat: 55.93439482714317, lng: 37.32746601104736},{lat: 55.93324095339487, lng: 37.33695030212402},{lat: 55.93437078845725, lng: 37.337422370910645},{lat: 55.93701495448931, lng: 37.338624000549316},{lat: 55.93951472730908, lng: 37.34407424926758},{lat: 55.93763991281783, lng: 37.34956741333008},{lat: 55.938072570369755, lng: 37.35179901123047},{lat: 55.93886576333085, lng: 37.35321521759033},{lat: 55.940163680414685, lng: 37.349867820739746},{lat: 55.94083665733646, lng: 37.35102653503418},{lat: 55.94670067561135, lng: 37.34175682067871},{lat: 55.94634020829838, lng: 37.34059810638428},{lat: 55.95090587967245, lng: 37.33600616455078},{lat: 55.9526599155236, lng: 37.33699321746826},{lat: 55.9543177667687, lng: 37.33609199523926},{lat: 55.95549503831217, lng: 37.33858108520508},{lat: 55.95491841998877, lng: 37.3396110534668},{lat: 55.956119698470346, lng: 37.34257221221924},{lat: 55.95818581025949, lng: 37.33948230743408},{lat: 55.95890652098559, lng: 37.34119892120361},{lat: 55.96073226143287, lng: 37.3410701751709},{lat: 55.962966274020516, lng: 37.346906661987305},{lat: 55.9640472015588, lng: 37.34682083129883},{lat: 55.96529623577951, lng: 37.33480453491211},{lat: 55.96123672716, lng: 37.32926845550537},{lat: 55.96051605982271, lng: 37.32699394226074},{lat: 55.96186129466453, lng: 37.319397926330566},{lat: 55.96114063895701, lng: 37.294721603393555},{lat: 55.95962721829231, lng: 37.28776931762695},{lat: 55.96114063895701, lng: 37.28433609008789},{lat: 55.96106857264821, lng: 37.28231906890869},{lat: 55.956023597563636, lng: 37.27785587310791},{lat: 55.952011171797835, lng: 37.277512550354004},{lat: 55.950641566011, lng: 37.2760534286499},{lat: 55.951218248036916, lng: 37.27339267730713},{lat: 55.94975249772599, lng: 37.271246910095215},{lat: 55.94936802944209, lng: 37.26489543914795},
            {lat: 55.9421104744966, lng: 37.26369380950928},{lat: 55.93997139914652, lng: 37.256269454956055},{lat: 55.93756780275603, lng: 37.256269454956055},{lat: 55.93629383619702, lng: 37.26154804229736},{lat: 55.937231287359396, lng: 37.26493835449219},{lat: 55.936654397021094, lng: 37.26905822753906},{lat: 55.93739954542312, lng: 37.269959449768066},{lat: 55.93547655257141, lng: 37.27279186248779},{lat: 55.93766394947527, lng: 37.278242111206055},{lat: 55.93739954542312, lng: 37.283735275268555},{lat: 55.937063028564836, lng: 37.28854179382324},{lat: 55.935885196539466, lng: 37.28802680969238},{lat: 55.93547655257141, lng: 37.289700508117676},{lat: 55.93687073190473, lng: 37.29085922241211},{lat: 55.9367505460074, lng: 37.29300498962402},{lat: 55.9387215476369, lng: 37.29506492614746},{lat: 55.94182206673296, lng: 37.2936487197876},{lat: 55.94098086515559, lng: 37.297940254211426},{lat: 55.93696688035409, lng: 37.29592323303223},{lat: 55.935380400423064, lng: 37.30201721191406},{lat: 55.938961906828524, lng: 37.304935455322266},{lat: 55.935284248036076, lng: 37.307939529418945},{lat: 55.93312075623642, lng: 37.30909824371338},{lat: 55.932543804685174, lng: 37.30639457702637},{lat: 55.93158219967403, lng: 37.3040771484375},{lat: 55.930332077480095, lng: 37.30416297912598},{lat: 55.928216394189654, lng: 37.30613708496094},
            {lat: 55.927062336433856, lng: 37.31034278869629},{lat: 55.92840873380758, lng: 37.31600761413574},{lat: 55.93059652976937, lng: 37.31647968292236},{lat: 55.933793855520854, lng: 37.314462661743164},{lat: 55.93465925170371, lng: 37.311973571777344},{lat: 55.93607749809172, lng: 37.311930656433105},{lat: 55.9389138351095, lng: 37.31235980987549},{lat: 55.93826486106392, lng: 37.318196296691895},{lat: 55.940668414202214, lng: 37.319397926330566},{lat: 55.94194223689547, lng: 37.32338905334473},{lat: 55.93651017309415, lng: 37.32476234436035},{lat: 55.93437078845725, lng: 37.327637672424316},
        ];
        var districtArbat5 = new google.maps.Polygon({paths: districtCoords5});

        var districtCoords6 =[
            {lat: 55.94119717587758, lng: 37.24983215332031},{lat: 55.941077003403386, lng: 37.24562644958496},{lat: 55.939058050087546, lng: 37.24257946014404},{lat: 55.940163680414685, lng: 37.239532470703125},{lat: 55.942446947506504, lng: 37.23867416381836},{lat: 55.94583554842309, lng: 37.24099159240723},{lat: 55.9473735389513, lng: 37.22949028015137},{lat: 55.94816654144937, lng: 37.227044105529785},{lat: 55.94994473043636, lng: 37.22794532775879},{lat: 55.95239561383643, lng: 37.23034858703613},{lat: 55.95410152932807, lng: 37.23069190979004},{lat: 55.95511062705087, lng: 37.22910404205322},{lat: 55.956407999758994, lng: 37.23043441772461},{lat: 55.95554308945144, lng: 37.23369598388672},{lat: 55.954077502871215, lng: 37.23391056060791},{lat: 55.96017974380633, lng: 37.23837375640869},{lat: 55.962413788286135, lng: 37.229061126708984},{lat: 55.964791822966404, lng: 37.23060607910156},{lat: 55.96219759606917, lng: 37.242021560668945},{lat: 55.961260749173476, lng: 37.243309020996094},{lat: 55.95818581025949, lng: 37.25931644439697},{lat: 55.956912521847535, lng: 37.258758544921875},{lat: 55.95700862054742, lng: 37.257256507873535},{lat: 55.95302032400737, lng: 37.25631237030029},{lat: 55.95196311627457, lng: 37.25442409515381},{lat: 55.95186700504915, lng: 37.25210666656494},
        ];
        var districtArbat6 = new google.maps.Polygon({paths: districtCoords6});

        var districtCoords7 =[
            {lat: 55.95777740155795, lng: 37.4144983291626},{lat: 55.95799361846615, lng: 37.41312503814697},{lat: 55.95912273158663, lng: 37.41226673126221},{lat: 55.96013169842257, lng: 37.40145206451416},{lat: 55.96049203734703, lng: 37.40020751953125},{lat: 55.96176520801219, lng: 37.3989200592041},{lat: 55.962149553190294, lng: 37.39501476287842},{lat: 55.96315844112281, lng: 37.39402770996094},{lat: 55.965248196747254, lng: 37.39213943481445},{lat: 55.96385503886969, lng: 37.38265514373779},{lat: 55.96395112033351, lng: 37.381324768066406},{lat: 55.96443152407442, lng: 37.37651824951172},{lat: 55.96452760410697, lng: 37.37222671508789},{lat: 55.96680943476965, lng: 37.37106800079346},{lat: 55.96810641537866, lng: 37.37128257751465},{lat: 55.97084434279058, lng: 37.37548828125},{lat: 55.973630105145276, lng: 37.3795223236084},{lat: 55.977880407703694, lng: 37.38767623901367},{lat: 55.981794115080916, lng: 37.38750457763672},{lat: 55.98328266054493, lng: 37.39514350891113},{lat: 55.98616355351687, lng: 37.39703178405762},{lat: 55.987075791547, lng: 37.40428447723389},{lat: 55.98827607195469, lng: 37.416300773620605},{lat: 55.99060450968631, lng: 37.416043281555176},{lat: 55.99514095978619, lng: 37.41986274719238},{lat: 55.9946609373429, lng: 37.4229097366333},{lat: 55.994300916598434, lng: 37.42715835571289},{lat: 55.995764980050545, lng: 37.42823123931885},{lat: 55.995524973448795, lng: 37.42938995361328},{lat: 55.99734898624658, lng: 37.43119239807129},{lat: 55.99749298359092, lng: 37.43273735046387},{lat: 55.990388474974, lng: 37.428574562072754},{lat: 55.98786798079674, lng: 37.426300048828125},{lat: 55.98726783891617, lng: 37.426815032958984},{lat: 55.98755590818139, lng: 37.42947578430176},{lat: 55.988564133708124, lng: 37.429046630859375},{lat: 55.98868415880531, lng: 37.43136405944824},{lat: 55.984459051102405, lng: 37.43247985839844},{lat: 55.982010197816145, lng: 37.4509334564209},{lat: 55.97884086336098, lng: 37.45359420776367},{lat: 55.975046924555784, lng: 37.45372295379639},{lat: 55.97427848656965, lng: 37.453980445861816},{lat: 55.97122859780014, lng: 37.456512451171875},{lat: 55.97019590380791, lng: 37.45393753051758},{lat: 55.970051804780304, lng: 37.45213508605957},{lat: 55.9718289886123, lng: 37.45097637176514},{lat: 55.97113253440553, lng: 37.44908809661865},{lat: 55.9718289886123, lng: 37.44737148284912},{lat: 55.967770165321106, lng: 37.43921756744385},{lat: 55.96572858438625, lng: 37.43415355682373},{lat: 55.96447956412051, lng: 37.42574214935303},{lat: 55.96279812702327, lng: 37.41964817047119},{lat: 55.96051605982271, lng: 37.41492748260498},
        ];
        var districtArbat7 = new google.maps.Polygon({paths: districtCoords7});

        var districtCoords8 =[
            {lat: 55.95729691521565, lng: 37.45818614959717},{lat: 55.96082835064974, lng: 37.46346473693848},{lat: 55.96378297761528, lng: 37.45797157287598},{lat: 55.96366287522641, lng: 37.45715618133545},{lat: 55.96709765643974, lng: 37.44934558868408},{lat: 55.96736185775138, lng: 37.446041107177734},{lat: 55.966833453324156, lng: 37.446298599243164},{lat: 55.96671336040253, lng: 37.44522571563721},{lat: 55.96373493670446, lng: 37.445526123046875},{lat: 55.96349473125578, lng: 37.44445323944092},{lat: 55.96219759606917, lng: 37.444539070129395},{lat: 55.96205346725359, lng: 37.44539737701416},{lat: 55.96027583439493, lng: 37.44445323944092},{lat: 55.959386987347784, lng: 37.446255683898926},{lat: 55.9576332562815, lng: 37.447500228881836},{lat: 55.957152768149925, lng: 37.446556091308594},{lat: 55.956119698470346, lng: 37.44518280029297},{lat: 55.955326858855074, lng: 37.447800636291504},{lat: 55.95390931725574, lng: 37.44840145111084},{lat: 55.95292421540641, lng: 37.44934558868408},{lat: 55.95251575119064, lng: 37.45213508605957},{lat: 55.95491841998877, lng: 37.45307922363281},{lat: 55.95485835508613, lng: 37.45458126068115},{lat: 55.955050562446495, lng: 37.45490312576294},{lat: 55.95483432909897, lng: 37.45908737182617},{lat: 55.95496647184376, lng: 37.460503578186035},{lat: 55.9539813968947, lng: 37.46033191680908},{lat: 55.9544258850361, lng: 37.462735176086426},{lat: 55.95530283315869, lng: 37.46359348297119},{lat: 55.95539893585473, lng: 37.4597954750061},{lat: 55.95575931884003, lng: 37.45745658874512},{lat: 55.95626384938306, lng: 37.45664119720459},{lat: 55.95639598724817, lng: 37.45709180831909},{lat: 55.956984595894795, lng: 37.4568772315979},{lat: 55.95751313480775, lng: 37.453980445861816},{lat: 55.957813437793185, lng: 37.45492458343506},{lat: 55.95842604865924, lng: 37.454988956451416},{lat: 55.960263823084404, lng: 37.451512813568115},{lat: 55.95814977437094, lng: 37.4494743347168},{lat: 55.959855436308565, lng: 37.447779178619385},{lat: 55.96447956412051, lng: 37.449517250061035},{lat: 55.964239363293714, lng: 37.45131969451904},{lat: 55.961549012172156, lng: 37.457478046417236},{lat: 55.96105656158371, lng: 37.456533908843994},{lat: 55.960468014856424, lng: 37.456533908843994},{lat: 55.95840202488636, lng: 37.45730638504028},
        ];
        var districtArbat8 = new google.maps.Polygon({paths: districtCoords8});

        districts.push(districtArbat1);
        districts.push(districtArbat2);
        districts.push(districtArbat3);
        districts.push(districtArbat4);
        districts.push(districtArbat5);
        districts.push(districtArbat6);
        districts.push(districtArbat7);
        districts.push(districtArbat8);
        districtArbat1.setMap(map);
        districtArbat2.setMap(map);
        districtArbat3.setMap(map);
        districtArbat4.setMap(map);
        districtArbat5.setMap(map);
        districtArbat6.setMap(map);
        districtArbat7.setMap(map);
        districtArbat8.setMap(map);

    } else if (region === 3) {
        /*
          Kaliningrad
         */
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: {lat: 54.715754, lng: 20.470022},
        });

        // Define the LatLng coordinates for the polygon's path.
        districtCoords = [
            {lat: 54.630190, lng: 20.278791},
            {lat: 54.783323, lng: 20.276731},
            {lat: 54.785303, lng: 20.632757},
            {lat: 54.640126, lng: 20.647176}
        ];

        districtArbat = new google.maps.Polygon({paths: districtCoords});
        districts.push(districtArbat);
    } else if (region === 4) {
        /*
          Down Novgorod
         */
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: {lat: 56.285399, lng: 43.920782},
        });

        // Define the LatLng coordinates for the polygon's path.
        districtCoords = [
            {lat: 56.175557, lng: 43.708475},
            {lat: 56.413450, lng: 43.715824},
            {lat: 56.407577, lng: 43.864439},
            {lat: 56.340654, lng: 44.081645},
            {lat: 56.278146, lng: 44.154319},
            {lat: 56.203728, lng: 43.986107}
        ];

        districtArbat = new google.maps.Polygon({paths: districtCoords});
        districts.push(districtArbat);
    }

    // districtArbat.setMap(map);

    // fetch('http://bars.dev/get?area=' + region)
    fetch('http://gwctest.org/bars/get?area=' + region)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                response.json().then(function(data) {
                    setMarkers(data);
                    console.log(count);
                    document.getElementById('count').innerHTML = count;
                    console.log(JSON.stringify(array));
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });


}

function setMarkers(data) {
    data.forEach(function (item) {
        var myLatlng = new google.maps.LatLng(parseFloat(item.lat),parseFloat(item.long));

        districts.forEach(function (district) {
            if(google.maps.geometry.poly.containsLocation(myLatlng, district)) {
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: item.name
                });

                count++;

                let DOM = '<div class="col-md-4 place">' +
                    '<div class="place-wrap">' +
                    '<div class="title">'+item.name+'</div>' +
                    '<div class="coords">Координаты: '+item.lat+','+item.long+'</div>' +
                    '<div class="phone">'+item.phone+'</div>' +
                    '<div class="phone">'+item.address+'</div>' +
                    '<div class="phone">'+item.category+'</div>' +
                    '<div class="phone">Рейтинг: '+item.rating+'</div>' +
                    '<div class="phone">Отзывов: '+item.reviews+'</div>' +
                    '<div class="phone">'+item.tags+'</div>' +
                    '<div class="website"><a href="http://'+item.website+'">'+item.website+'</a></div>' +
                    '<div class="schedule">'+parseWeeksHTML(item.schedule)+'</div>' +
                    '</div>' +
                    '</div>';

                let DOM_IW = '<div class="place">' +
                    '<div class="place-wrap">' +
                    '<div class="title">'+item.name+'</div>' +
                    '<div class="coords">Координаты: '+item.lat+','+item.long+'</div>' +
                    '<div class="phone">'+item.phone+'</div>' +
                    '<div class="phone">'+item.address+'</div>' +
                    '<div class="phone">'+item.category+'</div>' +
                    '<div class="phone">Рейтинг: '+item.rating+'</div>' +
                    '<div class="phone">Отзывов: '+item.reviews+'</div>' +
                    '<div class="phone">'+item.tags+'</div>' +
                    '<div class="website"><a href="http://'+item.website+'">'+item.website+'</a></div>' +
                    '<div class="schedule">'+parseWeeksHTML(item.schedule)+'</div>' +
                    '</div>' +
                    '</div>';

                var infowindow = new google.maps.InfoWindow({
                    content: DOM_IW
                });

                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });

                document.getElementById('places').innerHTML += DOM;

                array.push({
                    "Название": item.name,
                    "Lat": item.lat,
                    "Long": item.long,
                    "Адрес": item.address,
                    "Телефон": item.phone,
                    "Сайт": item.website,
                    "Расписание": parseWeeks(item.schedule),
                    "Категории": item.category,
                    "Тэги": item.tags,
                    "Tags": item.eng_tags
                });
            }
        });
    })
}


function parseWeeks(weeksJSON) {

    var result = "";
    var json;

    try {
        json = JSON.parse(weeksJSON);

        if (json.Mon !== undefined)
            result += "Понедельник: " + json.Mon.working_hours[0].from + "-" + json.Mon.working_hours[0].to + ". ";
        if (json.Tue !== undefined)
            result += "Вторник: " + json.Tue.working_hours[0].from + "-" + json.Tue.working_hours[0].to + ". ";
        if (json.Wed !== undefined)
            result += "Среда: " + json.Wed.working_hours[0].from + "-" + json.Wed.working_hours[0].to + ". ";
        if (json.Thu !== undefined)
            result += "Четверг: " + json.Thu.working_hours[0].from + "-" + json.Thu.working_hours[0].to + ". ";
        if (json.Fri !== undefined)
            result += "Пятница: " + json.Fri.working_hours[0].from + "-" + json.Fri.working_hours[0].to + ". ";
        if (json.Sat !== undefined)
            result += "Суббота: " + json.Sat.working_hours[0].from + "-" + json.Sat.working_hours[0].to + ". ";
        if (json.Sun !== undefined)
            result += "Воскресенье: " + json.Sun.working_hours[0].from + "-" + json.Sun.working_hours[0].to + ". ";
        return result;

    } catch (e) {
        console.log(e); // You get an error.
        console.log(weeksJSON); // You get an error.

        return "";
    }
}
function parseWeeksHTML(weeksJSON) {
    if(weeksJSON !== null) {
        var result = "<br>";
        var json;
        try {
            json = JSON.parse(weeksJSON);

            if(json.Mon !== undefined)
                result += "Понедельник: " + json.Mon.working_hours[0].from + "-" + json.Mon.working_hours[0].to + ".<br>";
            if(json.Tue !== undefined)
                result += "Вторник: " + json.Tue.working_hours[0].from + "-" + json.Tue.working_hours[0].to + ".<br>";
            if(json.Wed !== undefined)
                result += "Среда: " + json.Wed.working_hours[0].from + "-" + json.Wed.working_hours[0].to + ".<br>";
            if(json.Thu !== undefined)
                result += "Четверг: " + json.Thu.working_hours[0].from + "-" + json.Thu.working_hours[0].to + ".<br>";
            if(json.Fri !== undefined)
                result += "Пятница: " + json.Fri.working_hours[0].from + "-" + json.Fri.working_hours[0].to + ".<br>";
            if(json.Sat !== undefined)
                result += "Суббота: " + json.Sat.working_hours[0].from + "-" + json.Sat.working_hours[0].to + ".<br>";
            if(json.Sun !== undefined)
                result += "Воскресенье: " + json.Sun.working_hours[0].from + "-" + json.Sun.working_hours[0].to + ".<br>";
            return result;

        } catch (e) {
            console.log(e); // You get an error.
            console.log(weeksJSON); // You get an error.

            return "";
        }

    } else {
        return "";
    }
}