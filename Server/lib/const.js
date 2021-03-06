/**
 * Rule the words! KKuTu Online
 * Copyright (C) 2017 JJoriping(op@jjo.kr)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

var GLOBAL = require("./sub/global.json");

exports.KKUTU_MAX = 400;
exports.CUSTOM_HOST = GLOBAL.CUSTOM_HOST;
exports.HOSTNAME = GLOBAL.HOSTNAME;
exports.MAIN_PORTS = GLOBAL.MAIN_PORTS;
exports.TEST_PORT = 4040;
exports.SPAM_CLEAR_DELAY = 1600;
exports.SPAM_ADD_DELAY = 750;
exports.SPAM_LIMIT = 10;
exports.BLOCKED_LENGTH = 10000;
exports.KICK_BY_SPAM = 9;
exports.MAX_OBSERVER = 16;
exports.TESTER = GLOBAL.ADMIN.concat([
	"naver-96346946",
	"google-103339276222262423156"
]);
exports.IS_SECURED = GLOBAL.IS_SECURED;
exports.SSL_OPTIONS = GLOBAL.SSL_OPTIONS;
exports.OPTIONS = {
	'man': { name: "Manner" },
	'ext': { name: "Injeong" },
	'mis': { name: "Mission" },
	'loa': { name: "Loanword" },
	'prv': { name: "Proverb" },
	'str': { name: "Strict" },
	'k32': { name: "Sami" },
	'no2': { name: "No2" },
	'rms': { name: "RandomMission" },
	'nrt': { name: "NoReturn" },
	'lvl': { name: "Level" },
	'leg': { name: "Leng" },
	'rtu': { name: "RandomTurn" },
	'uwd': { name: "UnknownWord" },
	'upl': { name: "UnknownPlayer" },
	'rtn': { name: "Returns" }
};
exports.MOREMI_PART = [ 'back', 'eye', 'mouth', 'shoes', 'clothes', 'head', 'lhand', 'rhand', 'front', 'buff' ];
exports.CATEGORIES = [ "all", "spec", "skin", "badge", "head", "eye", "mouth", "clothes", "hs", "back" ];
exports.AVAIL_EQUIP = [
	"NIK", "BDG0", "BDG1", "BDG2", "BDG3", "BDG4",
	"Mhead", "Meye", "Mmouth", "Mhand", "Mclothes", "Mshoes", "Mback",
	"buff"
];
exports.GROUPS = {
	'spec': [ "PIX", "PIY", "PIZ", "CNS", "buff" ],
	'skin': [ "NIK" ],
	'badge': [ "BDG0", "BDG1", "BDG2", "BDG3", "BDG4" ],
	'head': [ "Mhead" ],
	'eye': [ "Meye" ],
	'mouth': [ "Mmouth" ],
	'clothes': [ "Mclothes" ],
	'hs': [ "Mhand", "Mshoes" ],
	'back': [ "Mback", "Mfront" ],
};
exports.CUSTOM_OG = GLOBAL.CUSTOM_OG
exports.OG_IMAGE = exports.CUSTOM_OG ? GLOBAL.OG_IMAGE : "http://modukkutu.kro.kr/img/kkutu/logo.png",
exports.OG_URL = exports.CUSTON_OG ? GLOBAL.OG_URL : "http://modukkutu.kro.kr/",
exports.OG_TITLE = exports.CUSTON_OG ? GLOBAL.OG_TITLE : "글자로 놀자! 끄투 온라인",
exports.OG_DESC = exports.CUSTON_OG ? GLOBAL.OG_DESC : "끝말잇기가 이렇게 박진감 넘치는 게임이었다니!"
exports.RULE = {
/*
	유형: { lang: 언어,
		rule: 이름,
		opts: [ 추가 규칙 ],
		time: 시간 상수,
		ai: AI 가능?,
		big: 큰 화면?,
		ewq: 현재 턴 나가면 라운드 종료?
	}
*/
	'EKT': { lang: "en", // 영어 끄투
		rule: "Classic",
		opts: ["man", "ext", "mis", "rms", "rtu",
		"nrt", "uwd", "rtn"],
		time: 1,
		ai: true,
		big: false,
		ewq: true
	},
	'ESH': { lang: "en", // 영어 끝말잇기
		rule: "Classic",
		opts: ["ext", "mis", "rms","rtu"],
		time: 1,
		ai: true,
		big: false,
		ewq: true
	},
	'KKT': { lang: "ko", // 쿵쿵따
		rule: "Classic",
		opts: ["man", "ext", "mis", "loa", "str",
		"k32", "rtu"],
		time: 1,
		ai: true,
		big: false,
		ewq: true
	},
	'KSH': { lang: "ko", // 한국어 끝말잇기
		rule: "Classic",
		opts: ["man", "ext", "mis", "loa", "str", "uwd", "rtu", "rtn"],
		time: 1,
		ai: true,
		big: false,
		ewq: true
	},
	'CSQ': { lang: "ko", // 한국어 자음퀴즈
		rule: "Jaqwi",
		opts: [ "ijp" ],
		time: 1,
		ai: true,
		big: false,
		ewq: false
	},
	'KCW': { lang: "ko", // 한국어 십자말풀이
		rule: "Crossword",
		opts: [ "lvl" ],
		time: 2,
		ai: false,
		big: true,
		ewq: false
	},
	'KTY': { lang: "ko", // 한국어 타자대결
		rule: "Typing",
		opts: [ "prv", "lvl" ],
		time: 1,
		ai: false,
		big: false,
		ewq: false
	},
	'ETY': { lang: "en", // 영어 타자대결
		rule: "Typing",
		opts: [ "prv", "lvl" ],
		time: 1,
		ai: false,
		big: false,
		ewq: false
	},
	'KAP': { lang: "ko", // 한국어 앞말잇기
		rule: "Classic",
		opts: ["man", "ext", "mis", "loa", "str", "rtu", "uwd", "rtn"],
		time: 1,
		ai: true,
		big: false,
		_back: true,
		ewq: true
	},
	'HUN': { lang: "ko", // 훈민정음
		rule: "Hunmin",
		opts: ["ext", "mis", "rms", "loa", "str",
		"rtu"],
		time: 1,
		ai: true,
		big: false,
		ewq: true
	},
	'KDA': { lang: "ko", // 한국어 단어 대결
		rule: "Daneo",
		opts: ["ijp", "mis", "rms", "rtu"],
		time: 1,
		ai: true,
		big: false,
		ewq: true
	},
	'EDA': { lang: "en", // 영어 단어 대결
		rule: "Daneo",
		opts: ["ijp", "mis", "rms", "rtu"],
		time: 1,
		ai: true,
		big: false,
		ewq: true
	},
	'KSS': { lang: "ko", // 한국어 솎솎
		rule: "Sock",
		opts: [ "no2" ],
		time: 1,
		ai: false,
		big: true,
		ewq: false
	},
	'ESS': { lang: "en", // 영어 솎솎
		rule: "Sock",
		opts: [ "no2" ],
		time: 1,
		ai: false,
		big: true,
		ewq: false
	},
	'ECW': { lang: "en", // 영어 십자말풀이
		rule: "Crossword",
		opts: [ "lvl" ],
		time: 2,
		ai: false,
		big: true,
		ewq: false
	}
};
exports.getPreScore = function(text, chain, tr){
	return 2 * (Math.pow(5 + 7 * (text || "").length, 0.74) + 0.88 * (chain || []).length) * ( 0.5 + 0.5 * tr );
};
exports.getPenalty = function(chain, score){
	return -1 * Math.round(Math.min(10 + (chain || []).length * 2.1 + score * 0.15, score));
};
exports.GAME_TYPE = Object.keys(exports.RULE);
exports.EXAMPLE_TITLE = {
	'ko': "가나다라마바사아자차카타파하거너더러머버",
	'en': "abcdefghijklmnopqrst"
};
exports.INIT_SOUNDS = [ "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ" ];
exports.MISSION_ko = [ "가", "나", "다", "라", "마", "바", "사", "아", "자", "차", "카", "타", "파", "하" ];
exports.MISSION_en = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

exports.KO_INJEONG = [
	"IMS"/*THE iDOLM@STER*/,
	"VOC"/*VOCALOID/UTAU*/,
	"KRR"/*개구리 중사 케로로*/,
	"KTV"/*국내 방송 프로그램*/,
	"NSK"/*니세코이*/,
	"KOT"/*대한민국 철도역*/,
	"DOT"/*도타 2*/,
	"DRR"/*듀라라라!!*/,
	"DGM"/*디지몬*/,
	"RAG"/*라면/과자*/,
	"LVL"/*러브 라이브!*/,
	"LOL"/*리그 오브 레전드*/,
	"MRN"/*마법소녀 리리컬 나노하*/,
	"MMM"/*마법소녀 마도카☆마기카*/,
	"MAP"/*메이플스토리*/,
	/*"MKK" 메카쿠시티 액터즈 : 아지랑이 프로젝트와 통합*/
	"MNG"/*모노가타리 시리즈*/,
	"MOB"/*모바일 게임*/,
	"HYK"/*빙과*/,
	"CYP"/*사이퍼즈*/,
	"HRH"/*스즈미야 하루히*/,
	"STA"/*스타크래프트*/,
	"OIJ"/*신조어*/,
	"KGR"/*아지랑이 프로젝트*/,
	"ESB"/*앙상블 스타즈!*/,
	"ELW"/*엘소드*/,
	"OIM"/*오레이모*/,
	"OVW"/*오버워치*/,
	"NEX"/*온라인 게임*/,
	"YRY"/*유루유리*/,
	"KPO"/*유명인*/,
	"JLN"/*라이트 노벨*/,
	"JAN"/*만화/애니메이션*/,
	"ZEL"/*젤다의 전설*/,
	"POK"/*포켓몬스터*/,
	"HAI"/*하이큐!!*/,
	"HSS"/*하스스톤*/,
	"KMV"/*한국영화*/,
	"HDC"/*함대 컬렉션*/,
	"HOS"/*히어로즈 오브 더 스톰*/,
    "FOR"/*포트나이트*/,
    "ZHS"/*좀비고등학교*/,
	"WOW"/*월드 오브 워크래프트*/,
	"CKR"/*쿠키런*/,
	"DBP"/*동방프로젝트*/,
    "WTN"/*웹툰*/
  
];
exports.EN_INJEONG = [
	"LOL"/*리그 오브 레전드*/
];
exports.JA_INJEONG = [
	"VOM"/*VOCALROID 오리지널 곡*/
];
exports.KO_THEME = [
	"30"/*경제*/,
	"40"/*고적*/,
	"60"/*공업*/,
	"80"/*교육*/,
	"90"/*교통*/,
	"140"/*농업*/,
	"150"/*문학*/,
	"160"/*물리*/,
	"170"/*미술*/,
	"190"/*동물*/,
	"220"/*사회*/,
	"230"/*생물*/,
	"240"/*수학*/,
	"270"/*식물*/,
	"310"/*언어*/,
	"320"/*역사*/,
	"350"/*운동*/,
	"360"/*음악*/,
	"420"/*지리*/,
	"430"/*지명*/,
	"440"/*책명*/,
	"450"/*천문*/,
	"490"/*컴퓨터*/,
	"530"/*화학*/,
	"1001"/*나라 이름과 수도*/
];
exports.EN_THEME = [
	"e05"/*동물*/,
	"e08"/*인체*/,
	"e12"/*감정*/,
	"e13"/*음식*/,
	"e15"/*지명*/,
	"e18"/*사람*/,
	"e20"/*식물*/,
	"e43"/*날씨*/
];
exports.JA_THEME = [
];
exports.IJP_EXCEPT = [
	"OIJ"/*신조어*/,
];
exports.KO_IJP = exports.KO_INJEONG.concat(exports.KO_THEME).filter(function(item){ return !exports.IJP_EXCEPT.includes(item); });
exports.EN_IJP = exports.EN_INJEONG.concat(exports.EN_THEME).filter(function(item){ return !exports.IJP_EXCEPT.includes(item); });
exports.JA_IJP = exports.JA_INJEONG.concat(exports.JA_THEME).filter(function(item){ return !exports.IJP_EXCEPT.includes(item); });
exports.REGION = {
	'en': "en",
	'ko': "kr",
};
exports.KOR_STRICT = /(^|,)(1|INJEONG)($|,)/;
exports.KOR_GROUP = new RegExp("(,|^)(" + [
	"0", "1", "3", "7", "8", "11", "9",
	"16", "15", "17", "2", "18", "20", "26", "19",
	"INJEONG"
].join('|') + ")(,|$)");
exports.ENG_ID = /^['a','b','c',d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9',' ', '.', "'", '"', '!']+$/i;
exports.KOR_FLAG = {
	LOANWORD: 1, // 외래어
	INJEONG: 2,	// 어인정
	SPACED: 4, // 띄어쓰기를 해야 하는 어휘
	SATURI: 8, // 방언
	OLD: 16, // 옛말
	MUNHWA: 32 // 문화어
};
exports.WP_REWARD = function(){
	return 10 + Math.floor(Math.random() * 91);
};
exports.getRule = function(mode){
	return exports.RULE[exports.GAME_TYPE[mode]];
};
AllChar = []
var i;
AllChar.push(String.fromCharCode(20)) // 공백
AllChar.push(String.fromCharCode(45)) // 하이픈
AllChar.push(String.fromCharCode(95)) // 언더바
for(i=48;i<57;i++){ // 영어 대문자
	AllChar.push(String.fromCharCode(i))
}
for(i=97;i<122;i++){ // 영어 소문자
	AllChar.push(String.fromCharCode(i))
}
/*
for(i=12353;i<12436;i++){ // 히라가나
	AllChar.push(String.fromCharCode(i))
}
for(i=12449;i<12540;i++){ // 가타카나
	AllChar.push(String.fromCharCode(i))
}
*/
for(i=12593;i<12643;i++){ // 한글 자모
	AllChar.push(String.fromCharCode(i))
}
for(i=44032;i<55203;i++){ // 완성형 한글
	AllChar.push(String.fromCharCode(i))
}
exports.AllChar = AllChar
