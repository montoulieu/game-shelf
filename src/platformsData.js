const platforms = {
  "1": {
    "id": 1,
    "name": "PC",
    "alias": "pc"
  },
  "2": {
    "id": 2,
    "name": "Nintendo GameCube",
    "alias": "nintendo-gamecube"
  },
  "3": {
    "id": 3,
    "name": "Nintendo 64",
    "alias": "nintendo-64"
  },
  "4": {
    "id": 4,
    "name": "Nintendo Game Boy",
    "alias": "nintendo-gameboy"
  },
  "5": {
    "id": 5,
    "name": "Nintendo Game Boy Advance",
    "alias": "nintendo-gameboy-advance"
  },
  "6": {
    "id": 6,
    "name": "Super Nintendo (SNES)",
    "alias": "super-nintendo-snes"
  },
  "7": {
    "id": 7,
    "name": "Nintendo Entertainment System (NES)",
    "alias": "nintendo-entertainment-system-nes"
  },
  "8": {
    "id": 8,
    "name": "Nintendo DS",
    "alias": "nintendo-ds"
  },
  "9": {
    "id": 9,
    "name": "Nintendo Wii",
    "alias": "nintendo-wii"
  },
  "10": {
    "id": 10,
    "name": "Sony Playstation",
    "alias": "sony-playstation"
  },
  "11": {
    "id": 11,
    "name": "Sony Playstation 2",
    "alias": "sony-playstation-2"
  },
  "12": {
    "id": 12,
    "name": "Sony Playstation 3",
    "alias": "sony-playstation-3"
  },
  "13": {
    "id": 13,
    "name": "Sony Playstation Portable",
    "alias": "sony-psp"
  },
  "14": {
    "id": 14,
    "name": "Microsoft Xbox",
    "alias": "microsoft-xbox"
  },
  "15": {
    "id": 15,
    "name": "Microsoft Xbox 360",
    "alias": "microsoft-xbox-360"
  },
  "16": {
    "id": 16,
    "name": "Sega Dreamcast",
    "alias": "sega-dreamcast"
  },
  "17": {
    "id": 17,
    "name": "Sega Saturn",
    "alias": "sega-saturn"
  },
  "18": {
    "id": 18,
    "name": "Sega Genesis",
    "alias": "sega-genesis"
  },
  "20": {
    "id": 20,
    "name": "Sega Game Gear",
    "alias": "sega-game-gear"
  },
  "21": {
    "id": 21,
    "name": "Sega CD",
    "alias": "sega-cd"
  },
  "22": {
    "id": 22,
    "name": "Atari 2600",
    "alias": "atari-2600"
  },
  "23": {
    "id": 23,
    "name": "Arcade",
    "alias": "arcade"
  },
  "24": {
    "id": 24,
    "name": "Neo Geo",
    "alias": "neogeo"
  },
  "25": {
    "id": 25,
    "name": "3DO",
    "alias": "3do"
  },
  "26": {
    "id": 26,
    "name": "Atari 5200",
    "alias": "atari-5200"
  },
  "27": {
    "id": 27,
    "name": "Atari 7800",
    "alias": "atari-7800"
  },
  "28": {
    "id": 28,
    "name": "Atari Jaguar",
    "alias": "atari-jaguar"
  },
  "29": {
    "id": 29,
    "name": "Atari Jaguar CD",
    "alias": "atari-jaguar-cd"
  },
  "30": {
    "id": 30,
    "name": "Atari XE",
    "alias": "atari-xe"
  },
  "31": {
    "id": 31,
    "name": "Colecovision",
    "alias": "colecovision"
  },
  "32": {
    "id": 32,
    "name": "Intellivision",
    "alias": "intellivision"
  },
  "33": {
    "id": 33,
    "name": "Sega 32X",
    "alias": "sega-32x"
  },
  "34": {
    "id": 34,
    "name": "TurboGrafx 16",
    "alias": "turbografx-16"
  },
  "35": {
    "id": 35,
    "name": "Sega Master System",
    "alias": "sega-master-system"
  },
  "36": {
    "id": 36,
    "name": "Sega Mega Drive",
    "alias": "sega-mega-drive"
  },
  "37": {
    "id": 37,
    "name": "Mac OS",
    "alias": "mac-os"
  },
  "38": {
    "id": 38,
    "name": "Nintendo Wii U",
    "alias": "nintendo-wii-u"
  },
  "39": {
    "id": 39,
    "name": "Sony Playstation Vita",
    "alias": "sony-playstation-vita"
  },
  "40": {
    "id": 40,
    "name": "Commodore 64",
    "alias": "commodore-64"
  },
  "41": {
    "id": 41,
    "name": "Nintendo Game Boy Color",
    "alias": "nintendo-gameboy-color"
  },
  "4911": {
    "id": 4911,
    "name": "Amiga",
    "alias": "amiga"
  },
  "4912": {
    "id": 4912,
    "name": "Nintendo 3DS",
    "alias": "nintendo-3ds"
  },
  "4913": {
    "id": 4913,
    "name": "Sinclair ZX Spectrum",
    "alias": "sinclair-zx-spectrum"
  },
  "4914": {
    "id": 4914,
    "name": "Amstrad CPC",
    "alias": "amstrad-cpc"
  },
  "4915": {
    "id": 4915,
    "name": "iOS",
    "alias": "ios"
  },
  "4916": {
    "id": 4916,
    "name": "Android",
    "alias": "android"
  },
  "4917": {
    "id": 4917,
    "name": "Philips CD-i",
    "alias": "philips-cd-i"
  },
  "4918": {
    "id": 4918,
    "name": "Nintendo Virtual Boy",
    "alias": "nintendo-virtual-boy"
  },
  "4919": {
    "id": 4919,
    "name": "Sony Playstation 4",
    "alias": "sony-playstation-4"
  },
  "4920": {
    "id": 4920,
    "name": "Microsoft Xbox One",
    "alias": "microsoft-xbox-one"
  },
  "4921": {
    "id": 4921,
    "name": "Ouya",
    "alias": "ouya"
  },
  "4922": {
    "id": 4922,
    "name": "Neo Geo Pocket",
    "alias": "neo-geo-pocket"
  },
  "4923": {
    "id": 4923,
    "name": "Neo Geo Pocket Color",
    "alias": "neo-geo-pocket-color"
  },
  "4924": {
    "id": 4924,
    "name": "Atari Lynx",
    "alias": "atari-lynx"
  },
  "4925": {
    "id": 4925,
    "name": "WonderSwan",
    "alias": "wonderswan"
  },
  "4926": {
    "id": 4926,
    "name": "WonderSwan Color",
    "alias": "wonderswan-color"
  },
  "4927": {
    "id": 4927,
    "name": "Magnavox Odyssey 2",
    "alias": "magnavox-odyssey-2"
  },
  "4928": {
    "id": 4928,
    "name": "Fairchild Channel F",
    "alias": "fairchild"
  },
  "4929": {
    "id": 4929,
    "name": "MSX",
    "alias": "msx"
  },
  "4930": {
    "id": 4930,
    "name": "PC-FX",
    "alias": "pcfx"
  },
  "4931": {
    "id": 4931,
    "name": "Sharp X68000",
    "alias": "x68"
  },
  "4932": {
    "id": 4932,
    "name": "FM Towns Marty",
    "alias": "fmtowns"
  },
  "4933": {
    "id": 4933,
    "name": "PC-88",
    "alias": "pc88"
  },
  "4934": {
    "id": 4934,
    "name": "PC-98",
    "alias": "pc98"
  },
  "4935": {
    "id": 4935,
    "name": "Nuon",
    "alias": "nuon"
  },
  "4936": {
    "id": 4936,
    "name": "Famicom Disk System",
    "alias": "fds"
  },
  "4937": {
    "id": 4937,
    "name": "Atari ST",
    "alias": "atari-st"
  },
  "4938": {
    "id": 4938,
    "name": "N-Gage",
    "alias": "ngage"
  },
  "4939": {
    "id": 4939,
    "name": "Vectrex",
    "alias": "vectrex"
  },
  "4940": {
    "id": 4940,
    "name": "Game.com",
    "alias": "game-com"
  },
  "4941": {
    "id": 4941,
    "name": "TRS-80 Color Computer",
    "alias": "trs80-color"
  },
  "4942": {
    "id": 4942,
    "name": "Apple II",
    "alias": "apple2"
  },
  "4943": {
    "id": 4943,
    "name": "Atari 800",
    "alias": "atari800"
  },
  "4944": {
    "id": 4944,
    "name": "Acorn Archimedes",
    "alias": "acorn-archimedes"
  },
  "4945": {
    "id": 4945,
    "name": "Commodore VIC-20",
    "alias": "commodore-vic20"
  },
  "4946": {
    "id": 4946,
    "name": "Commodore 128",
    "alias": "c128"
  },
  "4947": {
    "id": 4947,
    "name": "Amiga CD32",
    "alias": "amiga-cd32"
  },
  "4948": {
    "id": 4948,
    "name": "Mega Duck",
    "alias": "megaduck"
  },
  "4949": {
    "id": 4949,
    "name": "SEGA SG-1000",
    "alias": "sg1000"
  },
  "4950": {
    "id": 4950,
    "name": "Game & Watch",
    "alias": "game-and-watch"
  },
  "4951": {
    "id": 4951,
    "name": "Handheld Electronic Games (LCD)",
    "alias": "lcd"
  },
  "4952": {
    "id": 4952,
    "name": "Dragon 32/64",
    "alias": "dragon32-64"
  },
  "4953": {
    "id": 4953,
    "name": "Texas Instruments TI-99/4A",
    "alias": "texas-instruments-ti-99-4a"
  },
  "4954": {
    "id": 4954,
    "name": "Acorn Electron",
    "alias": "acorn-electron"
  },
  "4955": {
    "id": 4955,
    "name": "TurboGrafx CD",
    "alias": "turbo-grafx-cd"
  },
  "4956": {
    "id": 4956,
    "name": "Neo Geo CD",
    "alias": "neo-geo-cd"
  },
  "4957": {
    "id": 4957,
    "name": "Nintendo Pokémon Mini",
    "alias": "nintendo-pokmon-mini"
  },
  "4958": {
    "id": 4958,
    "name": "Sega Pico",
    "alias": "sega-pico"
  },
  "4959": {
    "id": 4959,
    "name": "Watara Supervision",
    "alias": "watara-supervision"
  },
  "4960": {
    "id": 4960,
    "name": "Tomy Tutor",
    "alias": "tomy-pyta"
  },
  "4961": {
    "id": 4961,
    "name": "Magnavox Odyssey 1",
    "alias": "magnavox-odyssey"
  },
  "4962": {
    "id": 4962,
    "name": "Gakken Compact Vision",
    "alias": "gakken-compact-vision"
  },
  "4963": {
    "id": 4963,
    "name": "Emerson Arcadia 2001",
    "alias": "emerson-arcadia-2001"
  },
  "4964": {
    "id": 4964,
    "name": "Casio PV-1000",
    "alias": "casio-pv-1000"
  },
  "4965": {
    "id": 4965,
    "name": "Epoch Cassette Vision",
    "alias": "epoch-cassette-vision"
  },
  "4966": {
    "id": 4966,
    "name": "Epoch Super Cassette Vision",
    "alias": "epoch-super-cassette-vision"
  },
  "4967": {
    "id": 4967,
    "name": "RCA Studio II",
    "alias": "rca-studio-ii"
  },
  "4968": {
    "id": 4968,
    "name": "Bally Astrocade",
    "alias": "bally-astrocade"
  },
  "4969": {
    "id": 4969,
    "name": "APF MP-1000",
    "alias": "apf-mp-1000"
  },
  "4970": {
    "id": 4970,
    "name": "Coleco Telstar Arcade",
    "alias": "coleco-telstar-arcade"
  },
  "4971": {
    "id": 4971,
    "name": "Nintendo Switch",
    "alias": "nintendo-switch"
  },
  "4972": {
    "id": 4972,
    "name": "Milton Bradley Microvision",
    "alias": "milton-bradley-microvision"
  },
  "4973": {
    "id": 4973,
    "name": "Entex Select-a-Game",
    "alias": "entex-select-a-game"
  },
  "4974": {
    "id": 4974,
    "name": "Entex Adventure Vision",
    "alias": "entex-adventure-vision"
  },
  "4975": {
    "id": 4975,
    "name": "Pioneer LaserActive",
    "alias": ""
  },
  "4976": {
    "id": 4976,
    "name": "Action Max",
    "alias": "action-max"
  },
  "4977": {
    "id": 4977,
    "name": "Sharp X1",
    "alias": "sharp-x1"
  },
  "4978": {
    "id": 4978,
    "name": "Fujitsu FM-7",
    "alias": "fujitsu-fm-7"
  },
  "4979": {
    "id": 4979,
    "name": "SAM Coupé",
    "alias": null
  }
}

export default platforms;
