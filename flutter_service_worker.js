'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a8d344aa2c5d8b436f31c3a861f7639d",
"version.json": "89a23ceb77571254ad27444391a8e438",
"index.html": "32eb64636b479713e7a81f19999cae39",
"/": "32eb64636b479713e7a81f19999cae39",
"main.dart.js": "d0986435a52d680d4eb499cfdc015ba1",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/companylogonewfinal.png": "97fd43cf180ee87dfdfaa0e62f9b3f3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "027f30f23b48d9ca86b94dad1b3be0ea",
".git/ORIG_HEAD": "82179bf668008ed0abeb65f5c74a9fb3",
".git/config": "302e0d49cf8c157408008f22db7403a2",
".git/objects/0d/16e3878af11766d11d0f5e104b665ab6b4ef8c": "dbba941747c03f8359433373756b85e0",
".git/objects/66/816120746832c12071a9a7fb35260155f49705": "95895ec908c3aef5ebc2720486a02d6f",
".git/objects/3e/07405bb07dc007dbbfc4d95be97fec1388c723": "0f5bc5fb7f36a61d40168d0a30f99d01",
".git/objects/68/44ace74ac4f2e5869fb1798e2dd1940fcf795a": "ab877ab84298c29735f621140ce39c9b",
".git/objects/57/88dd2134215e3c1558856f767c7a4e64aa4878": "91c6671517dddace3c27e2764d72befe",
".git/objects/03/19e54e381b2af7a90a1af645d1e9e2434eb0c6": "a595e0edc44ee71bf1ba56ea9f4084fe",
".git/objects/9b/3ff1f3e5833bbaa98ab4b7375318a831e001b6": "e6e2da328af81d79d6bf9f271a497542",
".git/objects/93/c9986efee9a6f1829e9d07012971935cd47f24": "d5582ab8ff206795e27e5278b6b6a528",
".git/objects/5f/da36287db5a4b69f4a5eade4698d45294847f3": "11b4e4aa2dec07b9ef15f4ddaa7bce67",
".git/objects/05/e9defc7c41d6ce1b3810c6b6f0505c15b8fe70": "3f41036bde24f7899f907e7dc0cc7ffc",
".git/objects/b2/631aeceeda196338f527b3a131eb3a20cf9776": "7de85cfe2f256f31a4fa8e6fe3ac9e28",
".git/objects/ad/b1116a7bebcc0a7991d7ddb4cc66bc4c150ba6": "92e62a774bea1fab981ff978b3fb67e0",
".git/objects/a2/6153d4e87312315284f49bb64ff84101f6030c": "942dc137027373e75b418c5ef1b32c84",
".git/objects/bd/324c0f884e324be983d51f100e71e321eff6f8": "0324e5b8a92b417e9c73dc5abbb550c2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/3fbcd84ff4fc0d908f5e6c6e0222ecd616989e": "3a3205cd0d1d4878b8a016fa5473d62e",
".git/objects/bc/c8240ef1201b54c5245f5115a912ac4a29be10": "9c3117df358da023bb4c0c15ab2e0e20",
".git/objects/e2/e43e999a8a6c7a2ab8f034520e47a013ea503c": "91ec7feca33f1bf17b80a3608abf1e86",
".git/objects/e2/78d6c6a0cbe9003f4a1cb72252a6d517d84eea": "9de0c826ee01b23a67c6b8e3e588fda6",
".git/objects/f4/474c7c6383d21ba4da9c796ec58c4fb476c29e": "3d1c81fd45655a21686155171356007b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/6fc821f6c42bf17eb960ddc96cfc048b3fef86": "c24d998f551ca388ae17fb085c73b39c",
".git/objects/f2/c9e97c91d0ca32002d6eba53cf1981031047bb": "05d147ca28fabf58f251c18d62f64056",
".git/objects/c8/d8c01e5cbcd264636b8264c932b2c11d4945ab": "10398f527b95255541efce29f83fc4c3",
".git/objects/c8/650964b7d35ad39d607c4fd7f7e5ea01d3f7c4": "a460d538eed06127775580dd1e325aff",
".git/objects/fb/48a6e392ee21dfff636351d3bd917f88f9ed73": "bc0d53ecd34d9af5a91b609652ad11a0",
".git/objects/4e/764a9edc3c981d205d5501186fcab20ab4044d": "0d002b3f0c1281e1e1a06c59bf0dab30",
".git/objects/4e/f5317aac66b8dc7ffe66ad057f2ea77e55f1e4": "9296404b9f43338be698a18e03ea217e",
".git/objects/18/d68254d652fc8053f992e4318701918500e7eb": "f302d5cab62b2696feb4de53acd7dabd",
".git/objects/18/f64b6d0a05c24a9c0b1867b9b3dcedf92e929b": "36a751818415a826155f2fb2b0f269e7",
".git/objects/pack/pack-6246496996046c8ef0c7288dc3ebf8261a6dc7b2.pack": "1e6e69f50cc85f5cdf288962f388b0fd",
".git/objects/pack/pack-459304b66d4890ba5ca062ccf0c2a8461c8ba6cd.idx": "723fe94d0390c17e0b823d2d6f563a56",
".git/objects/pack/pack-459304b66d4890ba5ca062ccf0c2a8461c8ba6cd.pack": "71a97b30069a26ebc35eebc6fc32c131",
".git/objects/pack/pack-449a6c4769bbe39ce866da4bb7f4a925a37d5a8a.idx": "492379b92ff9228020570b8a48d91b09",
".git/objects/pack/pack-449a6c4769bbe39ce866da4bb7f4a925a37d5a8a.pack": "5db701fbc4f49c879c3cffa3785657d1",
".git/objects/pack/pack-6246496996046c8ef0c7288dc3ebf8261a6dc7b2.idx": "9550c51994294bfa90dfd86a2ad44a7b",
".git/objects/7c/38eb0f34301c98007ad87b69441cbc989384b4": "5251e02663aecf33f0e8fde5e23b023f",
".git/objects/42/9a03e5dfb678a505fda2185678f106efcdff14": "40d0219f25138b96773834d22d4dc741",
".git/objects/74/860a4b854f27ac6b52f70a6eb4e598def4b9d5": "1ab215939957931a18c4d930bf14b042",
".git/objects/7b/d835b11b4ff0b3d84937a9c6685b26218e47cd": "bb4ebb500a5d342b96c07f2d0ace556f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/4d5e81834a8c3bce710aa38f1982e8bc9f955d": "e00e4449d40d742e6d9deeb32a587aa2",
".git/objects/26/8a6a6af71eb1f4adb52aa2decb60a7b36b0619": "ce8f15fe9d79e653d2b11947e0fbd860",
".git/objects/4d/71f284bef3e259c36f82e36a279487ad1a658f": "d78a608e97b100697cd53e677734f353",
".git/objects/81/5780b1dfda434bea71abfa1653f652201bbc29": "6c635a3cfaa23a38a20d304aefc6d083",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/a581021a6c90f1bb0b08e95627d598104f79f8": "fe241c747dc78f2ab5c9bb9366009979",
".git/objects/08/d18c87d0089a1c9aa6d7239a53ead69d1547c0": "534176ed7dc54cf2951aee8064fcf044",
".git/objects/6d/a7599a59df0c57585b4320e27fe7fdf96ab6ce": "5c708eb3287f3d53cdbcbf192a8b55c0",
".git/objects/97/a5a6c2b88a9ec1edc88c2c15a60ddfb799965f": "882388d96f838313c0e59de63f56164b",
".git/objects/0a/323f5f4fc664265098c3e97ff6d4d5dc7afd00": "2ee0e2d4c4ebe89b3ad68a6308678dec",
".git/objects/bf/b3528ab3a6c7087037b192be12f3b37dd5fca6": "5654a75886f82c3db8d0bdcf738c89d5",
".git/objects/b8/15317bb2f4d1a339664f218703edf890d05c79": "782fc2266f466ad24a26ae4e44d4e59d",
".git/objects/aa/bb9865cb02842c721a419a41e03b5cd7951ffa": "afd9761eda6a4597794df311c7cceafd",
".git/objects/af/ddde7474881849b8bc7c93db0812045c0f4b39": "71ced24a7a22eb5ed545172f57c49044",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/467f0d216fe2f8db932d0cefabf5d0f402ff15": "f1bfb85e854d52011645348f130d4915",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e08b251b29f20a68c46c8302e6db0773dec8f5": "d84a254d232cf4d4fc000d91aab233d5",
".git/objects/b9/84c1ecc192712c0da136c3ec48376fc80c435c": "284aeeb8616559bab27c2eb0f66e473a",
".git/objects/e1/60755f9d39543a90b91fbbd03bc538a860e539": "512da74d7c0b4659bb0fbdb9aba7e3aa",
".git/objects/e1/d2efef16bec16e352d2453927d8f34cc278848": "34379fca58bd89274193156975a73952",
".git/objects/f0/072383008663a84f7cdc31279bff49ce780416": "4de17c3c26a79495ab4ada0052497fe5",
".git/objects/f7/fd30166fcb165ea60b003570ddcad312d3d635": "7e4222f10dc75bbe3bad76f0c0e9fa0f",
".git/objects/e8/d3c409d58eb35b4db1d081c6ed2f9eac0c24f1": "59020fc5827f1353ca1be0860733d85e",
".git/objects/f1/7d595d0ef4fd7297cb9a4b16f3ffa3417bf8dd": "ae5fd0a36fd1bad57de51e7fef107774",
".git/objects/cb/0fc8b227763125acc5d2abd8696dcd3a70e6a1": "d747062bf477dbb32a7e508d680c80b5",
".git/objects/2c/761a04ff54a647d9fd00c62c42f811c9378806": "42a7ebbde984aa09265935a993e8deda",
".git/objects/79/18e0829cb7f9265dd6660a07c89c01ce666c44": "61d29b46d82987e75b5118311cc019d8",
".git/objects/41/f7b0b7d46da94cc14c001827d82f2572f3d8af": "29766350429db9f9e8b7b0376c36239d",
".git/objects/1b/851301b57b3a35a6c91c54e261055d1b3368a2": "fe80c7791e7e7c514e49aa26a58210a0",
".git/objects/77/5d94b403ecc4d5faf5e24f5a09ed944edc6e1f": "d3dc6ab2acef22f6dd3ebcafc0c881dc",
".git/objects/48/ee85e21e24050acd2c608f20d684d24c4bd202": "76929298309f01e5d2183f0c036d232f",
".git/objects/84/f83a8b4265212e44f56383f525751683347762": "fff0c267ca844aef6b8573dbbde869a0",
".git/objects/84/c0cc5e33e5b6570b993765fd5a98bbf0b31e51": "b75cbb3adb3db6fe0813522993b94cfa",
".git/objects/15/406d3ab474671719eeacd55e99f92355b2e426": "8f94c439b7de83bbf096054698f6d16e",
".git/objects/15/6b66d142238b00065f71bff6f462fe1a5bbcc7": "8bc3236d0432feea9e8bd0a77bfe0708",
".git/objects/85/0eee90cd0c0a0493b48b5ec9914ffbbcba21e8": "dba74d222070e1836050034253fdce0a",
".git/objects/85/4cdc42770ab875673a4b9ce12a05368bbc4e7c": "08fea2d17d077cfae8a67611249471bf",
".git/objects/76/2b2fd2996d0c72f2f65e72f9e800f0059c7dad": "f2e8c40e4b9d98b4e4fdd4cd0691bb97",
".git/objects/76/39594eedf91b3e9f9b5fb76ec816a115a35251": "7230322bc0926aee2a5fa1015d464692",
".git/objects/82/9cbee7283dc4ed3cfc1580b93c2f762521b324": "eece939d50816e55c60a26625ee07c3f",
".git/objects/22/c54c75bb8974c73b8224fcf9c4278bbed158d0": "fbaf0359fc77950b1f21a9a6a45efda7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "64743ebdfdb9019d43815bf4d5d37179",
".git/logs/refs/heads/main": "bbcd24de52b161ce8eb60cad5febcf06",
".git/logs/refs/remotes/origin/main": "53029b4e0329ce4af446e2b8240c704a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ac152b0128e9be640b0a15900c7f8381",
".git/refs/remotes/origin/main": "d0d8118266bb7878853a532ffe9322f0",
".git/index": "053fcda63370d0fd899a40b5f2d62ba5",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "0fe530e1743a693f0d31824e68aa84b6",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "194d4b9974c3725e63b99d5cc7efedae",
"assets/NOTICES": "8f76c155ee1f17f193b11b6cb66df221",
"assets/FontManifest.json": "fe95dcf393a3c3d942ac7de6f6fd3673",
"assets/AssetManifest.bin.json": "adef170634e0e5f5db26e44688aa1e95",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3a1d97be5b3788d64ea655b03e212c61",
"assets/fonts/MaterialIcons-Regular.otf": "fdab4974b9a2a70043fa6badf829c4cf",
"assets/assets/images/instagram_image.jpeg": "d0994c3e82c00f7a05f58b12f876cfce",
"assets/assets/images/nextstep.png": "a36668ec9bd2d4d2437d1053eedfb4ab",
"assets/assets/images/application.png": "d904891bff8b1756cf73c5f70dcd0c4c",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.44.57.jpeg": "08212e37b201ab05d617f053235cf699",
"assets/assets/images/classroom2.png": "6920fd54ef3ad9661c7163bec341749d",
"assets/assets/images/eACCC4.png": "cdb1a65179fd5203fb8623f4461afa0a",
"assets/assets/images/fund1.png": "447e623788b7007e24cfcc78846bd063",
"assets/assets/images/150175.png": "db08aee854aad6bef6654f7d59b15244",
"assets/assets/images/aboutus.png": "59ee81b7624bfda7c253b9d521cd4841",
"assets/assets/images/scholarships_financial_aid.png": "ce4bfdc17692c54eb2e58ef95788d0a8",
"assets/assets/images/nodataImage.png": "383aef1a9a6d353459669f2f4fb94a0a",
"assets/assets/images/BritishCouncil_Logo.png": "2e7c25007ec3721c74e4fdf5ce7cdc17",
"assets/assets/images/whatsapp_image.jpeg": "d4213c9456bb3473bd4938084b6871f0",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.44.57%2520(1).jpeg": "5defc5d386d227b6113635c668af81cc",
"assets/assets/images/likedin_image.jpeg": "633255efc6348b00f48186fc79817cff",
"assets/assets/images/egstudio1new.png": "eeb41211d0f25bcf945bbebc156ccda0",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.45.00.jpeg": "ffbb48c636f4cf88dd1e60915e0b855f",
"assets/assets/images/faceboook_image.png": "8cf5e300b2e3086e6fd464c573b01b74",
"assets/assets/images/bcaccreditation.png": "9d16dec1763b2515310b5f6518cc8e85",
"assets/assets/images/jobrequirements.png": "dd10cf3675981f18db9312fa5489c762",
"assets/assets/images/call_image.jpeg": "aa907afebdcee6420696b28bab3bbe79",
"assets/assets/images/Quora_icon.png": "674856c2afa89e3f4b4ffed48705bc2c",
"assets/assets/images/Mail%2520Envelope%2520With%25201%2520Alert.jpg": "047057d9856e809f0f1d7e780a45c7fd",
"assets/assets/images/careerhub.png": "7fc8a58c365adddf9be6465e719881a0",
"assets/assets/images/STP4.png": "0bc7a932b349a81fb6d454056b024324",
"assets/assets/images/corsera1.png": "e76d3a79cb4e8b851cd2655ef96418d1",
"assets/assets/images/testimonial9.png": "5855261322acfe4527d8e1a92d41f05d",
"assets/assets/images/requirements.png": "efdda30a0b55b6cf9ed9d428a1cd0b55",
"assets/assets/images/testimonial8.png": "410eefb23cb9a2a7d2159e2aa7aced44",
"assets/assets/images/cimage2.png": "ca0a8c8ed11eed19dc9022e69d9852a8",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.44.59%2520(2).jpeg": "a80d6f43167a449753d0a8aa44cbed7b",
"assets/assets/images/testimonial5.png": "e1d3b1b84754bc66bb8d0d2f6c02c441",
"assets/assets/images/submit.png": "4e4bec3e00928dd5c39d1de72adf8094",
"assets/assets/images/tiktok.png": "55046fbdea38fe825e8b1bcee7de32c0",
"assets/assets/images/testimonial4.png": "0ee04c2393389929b613ccefac8c8480",
"assets/assets/images/studyabroad.png": "639558bdb015831366d1f81bd4508e66",
"assets/assets/images/homeimage3.png": "8fc3d0bb15e364d90503b71d0ac25d82",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.45.00%2520(1).jpeg": "f182bbdca31865507b1266943bae0950",
"assets/assets/images/cimage1.png": "da75e588dbb458713e64381ff24a5fa3",
"assets/assets/images/testimonial6.png": "8d4654f8370bf3fedf7e06510fe724a7",
"assets/assets/images/eSPG3.png": "be42ed268758d9fe96189acbd56164cd",
"assets/assets/images/destinationstudents.png": "ff08a731985ced306d9c40a2e8544aed",
"assets/assets/images/newsletter1.png": "d60e2e0427125e5171c3dcc91dce3761",
"assets/assets/images/eSPG2.png": "617821fe43df319fe77273211ba5dc29",
"assets/assets/images/testimonial7.png": "30406b3368e92dc320958732f259f3ca",
"assets/assets/images/scholarshipsapplyprocess.png": "a4e886517c32ddefe570d5520e603ff3",
"assets/assets/images/Germany.png": "efd0dcabf004e280259ef2045a957171",
"assets/assets/images/pinterest_logo.png": "358a500d8d0fa1da04475ecd3d14ccb7",
"assets/assets/images/elearning3.png": "0777e127aa1e7a14fa19a355005b51b2",
"assets/assets/images/transportationappln.png": "ae7185b5d3de6111b6e4310f9d3a237c",
"assets/assets/images/rightprogram.png": "3da339169102b9b4439cfd36e96107ce",
"assets/assets/images/socialmediafb_1.png": "6395c24854b248606314e23ed2c7c5a9",
"assets/assets/images/eJBS3.png": "fdf1fcba5766077ff0d1e972142d10fd",
"assets/assets/images/testimonial3.png": "2b31350328cf861ba307c689fddd029d",
"assets/assets/images/about22.png": "71485e9b7ecaa63eaeb7afb95e03f0af",
"assets/assets/images/testimonial2.png": "24da18ca5b597dd848e03b889cdbc7f9",
"assets/assets/images/companylogonewfinal.png": "97fd43cf180ee87dfdfaa0e62f9b3f3c",
"assets/assets/images/socialmediafb_0.png": "04f554fcbe92d91ff67f11ba43ffce32",
"assets/assets/images/socialmediafb_2.png": "515fbef0a4c8c52eb555596665d8d11e",
"assets/assets/images/appdownload.png": "e3e1fe9bf0c1d73af6ae6cc614549f77",
"assets/assets/images/ABST2.png": "7ecbae1079c5a7d051db8ee9f963e69e",
"assets/assets/images/testimonial1.png": "f08b0d91f20940523ca633992742c54c",
"assets/assets/images/programlength.png": "b8b66386c7e16b3abcc7ce6dffed53bc",
"assets/assets/images/France.png": "5056bd9b68abb3399388e15a88ddb37a",
"assets/assets/images/socialmediafb_3.png": "e2799821a4126c3b268b60a8f46f9d93",
"assets/assets/images/Pathwaysenroll.png": "399d5473f4cbefce56d205fb306388af",
"assets/assets/images/education.png": "b3cd8eba2f6fd70c4d7f106f230fc4a3",
"assets/assets/images/about1.png": "403f83879700c5a7e8038f30b0974ba1",
"assets/assets/images/contactusnewfinalnew.png": "f5f083f381480b7694a7c1bfd2837890",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.44.59%2520(1).jpeg": "a38e0d3650621d39887c5e41d677159e",
"assets/assets/images/snap_chat.png.jpeg": "6bded6e85fc90fa66834de42f0ae2bf3",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.44.59.jpeg": "fe28c332502501d79aa4def2f51bbb97",
"assets/assets/images/applyprocess.png": "4425d31320a8561eaf7617420a88c254",
"assets/assets/images/teenyicons_shield-tick-outline.png": "09e01150f4e4c82cf878fd9bae27431f",
"assets/assets/images/eG1.png": "5c0a7b69e848b8bbd279c202e863b262",
"assets/assets/images/coursera2.png": "0cee6ca79ddbe25f3a586471ec7fa498",
"assets/assets/images/signin.png": "acfb03187a65a2019c4720c13b6fb52f",
"assets/assets/images/about2.png": "bb7c6ecc90dd1d26e5a394b2e413acfd",
"assets/assets/images/level7six.png": "f8988435e289da07abc843b5c30d723a",
"assets/assets/images/socialmedia_2.png": "09e42dab797f8a3d25a9768e6e2226fe",
"assets/assets/images/about6.png": "fac9d0996479e02ca0b42e6814254243",
"assets/assets/images/credit4.png": "b90890ae8f2b2136223f062d6a7f866d",
"assets/assets/images/about7.png": "c0b65d2995c54deac71443ddf63f4cbc",
"assets/assets/images/socialmedia_3.png": "08e0df4a4e3509dd13ef348f2db5b079",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.44.58.jpeg": "61edd1e39b1ab942f3eb59f9fc2e7fdf",
"assets/assets/images/Japan.png": "53e20bf38f69ad0a1ae32dd84c024fbc",
"assets/assets/images/images.png": "b5b96f7f348fec2fb37a4ba5a4b691e7",
"assets/assets/images/socialmedia_1.png": "3e4c64258a752fbed335dd789ef842a2",
"assets/assets/images/level3twelve.png": "31f6b0254dc5d9d6d2a2bb4e9ff1183f",
"assets/assets/images/x.png.webp": "045545dbf4e47c0376e7ac3bd919cdf3",
"assets/assets/images/finance.png": "b3920c97ff4225521cf745f91e463bd1",
"assets/assets/images/about4.png": "8d09e31a7184cb465a98fdc5b15f05f5",
"assets/assets/images/socialmedia_0.png": "a8edba43f9bf1a42513f55ec089ac62c",
"assets/assets/dev/28468.jpg": "862d7fe98ebe1854629043c1b9bd7d55",
"assets/assets/dev/19197556.jpg": "9bb997318ef8398a094cf77c693f9c98",
"assets/assets/dev/arrow_image.png": "17854b9cc6f3c201c10efd16b6644096",
"assets/assets/dev/careerhub.png": "7fc8a58c365adddf9be6465e719881a0",
"assets/assets/dev/accommodationappln-1.png": "d042b3eb879643623d186a04413f024f",
"assets/assets/dev/studyabroad.png": "639558bdb015831366d1f81bd4508e66",
"assets/assets/dev/homeimage3.png": "8fc3d0bb15e364d90503b71d0ac25d82",
"assets/assets/dev/service_icons/icon_bus.png": "c4e2ef2da11e07d3957cfef402f9dfc2",
"assets/assets/dev/service_icons/icon_bag.png": "bbd406716bf04349919fae36f012ce6c",
"assets/assets/dev/service_icons/ion_book.png": "b641357924fcf96005daeb6fef485d99",
"assets/assets/dev/service_icons/icon_Door.png": "0ff23bf40d817d0686a820199fdcf292",
"assets/assets/dev/service_icons/icon_cap.png": "770de42f1ca58b6962c928fec62b766b",
"assets/assets/dev/service_icons/icon_head.png": "5f1479e74e3e46e9fcbf9db56ea97fe1",
"assets/assets/dev/service_icons/icon_location.png": "55ad64975008db0b240f25f210deeb13",
"assets/assets/dev/service_icons/icon_bulb.png": "e99036ba60b84273765d0432b6c4af87",
"assets/assets/dev/service_icons/icon_book.png": "acacde0715c84b55cf015ce00f84b9c0",
"assets/assets/dev/service_icons/icon_plane.png": "fc932f3e3d4004e4f08d8041e9603123",
"assets/assets/dev/service_icons/icon_worshop.png": "58e4629b2f2adf30123bc303207d26e2",
"assets/assets/dev/eSPG3.png": "be42ed268758d9fe96189acbd56164cd",
"assets/assets/dev/eCRSB1-1.png": "4930ffec52c293a373ac7a62dc1b0def",
"assets/assets/dev/scholarshipsapplyprocess.png": "a4e886517c32ddefe570d5520e603ff3",
"assets/assets/dev/Germany.png": "efd0dcabf004e280259ef2045a957171",
"assets/assets/dev/elearning3.png": "0777e127aa1e7a14fa19a355005b51b2",
"assets/assets/dev/transportationappln.png": "ae7185b5d3de6111b6e4310f9d3a237c",
"assets/assets/dev/rightprogram.png": "3da339169102b9b4439cfd36e96107ce",
"assets/assets/dev/eJBS3.png": "fdf1fcba5766077ff0d1e972142d10fd",
"assets/assets/dev/testimonial3.png": "1834627133df890f78583de7a6e81996",
"assets/assets/dev/about22.png": "71485e9b7ecaa63eaeb7afb95e03f0af",
"assets/assets/dev/France.png": "5056bd9b68abb3399388e15a88ddb37a",
"assets/assets/dev/school3.jpg": "02060f30dc47fcf7defb70de3ad7e568",
"assets/assets/dev/2302.q702.010.S.m005.c12.student%2520campus.jpg": "877b6d9526181f5af4f6941fbf7f3736",
"assets/assets/dev/level7seven-1.png": "62032d53d72d1048d991a9a2f346a0ba",
"assets/assets/dev/applyprocess.png": "4425d31320a8561eaf7617420a88c254",
"assets/assets/dev/faculties-1.png": "d7d6a324c4de1ec4bf5adb7216eb5c16",
"assets/assets/dev/Japan.png": "53e20bf38f69ad0a1ae32dd84c024fbc",
"assets/assets/fonts/Arvo-Regular.ttf": "afb50701726581f5f817faab8f7cf1b7",
"assets/assets/fonts/Merriweather-VariableFont_opsz,wdth,wght.ttf": "4c27d0a30c5346c22f1be560631ecabb",
"assets/assets/fonts/BigShoulders-VariableFont_opsz,wght.ttf": "d243b0542ccfccbc06e5d2bc3580c808",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
