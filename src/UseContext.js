import { createContext, useContext, useState, useEffect } from "react";

import HeydarAliyevCenter from "./assets/images/HeydarAliyevCenter.png";
import CarpetMuseumBaku from "./assets/images/Carpet.png";
import ArtMuseum from "./assets/images/ArtMuseum.png";
import MiniBook from "./assets/images/MiniBook.png";
import FireXram from "./assets/images/FireXram.png";
import NationalMusey from "./assets/images/NationalMusey.png";
import Literaturi from "./assets/images/LiteraturiMuseum.png";
import CentralMusei from "./assets/images/CentralMusei.png";
import IsteglalMusei from "./assets/images/IsteglalMusei.png";
import VurgunOlace from "./assets/images/Vurgunhouse.png";
import UzeirHouse from "./assets/images/UzeirHouse.png";
import JafarJabbarliHousem from "./assets/images/jafarjabbarlihousem.png";
import GanjaHistory from "./assets/images/GanjaHistory.png";
import MuzeyGandjs from "./assets/images/MuzeyGandjs.png";
import ShekiMuzet from "./assets/images/ShekiMuzey.png";
import WinterShekiMuzey from "./assets/images/WinterMuzey.png";
import ShekiMuzeyKravoed from "./assets/images/ShekiMuzeyKravoed.png";
import LankoranMuzey from "./assets/images/LankoranMuzey.png";
import LankoranHaziMuzey from "./assets/images/LankoranHaziHouseMuzey.png";
import ShamaxiMuzey from "./assets/images/ShamaxiMuzey.png";
import CarpetShusaMuzey from "./assets/images/CarpetShusaMuzey.png";
import MavzouleyShusa from "./assets/images/MouvsoleyShusha.png";
import BulBulMuzeyShusha from "./assets/images/BulBulMuzeyShusha.png";
import GabalaGeologCenter from "./assets/images/GabalaGeologCenter.png";
import GabalaArxelojiCenter from "./assets/images/GabalaArxelojiCenter.png";
import GabalaKraevodMuzey from "./assets/images/GabalaKraevodMuzey.png";
import XacmazMuzeum from "./assets/images/XacmazMuzeum.png";
import XacmazEzizEliyev from "./assets/images/ƏzizƏliyevMuzeyiXacmaz.png";
import MuzeumXacmaxfreinds from "./assets/images/MuzeumFreinds.png";
import XacmazCarpetMuzeum from "./assets/images/MuzeyCarpetXacmaz.png";
import ShamkirKraevodMuzey from "./assets/images/ShamkirKraevodMuzey.png";
import ShamkirFlagsMuzey from "./assets/images/ShamkirFlagsMuzey.png";
import LahicKraevodMuzey from "./assets/images/LahicKraevodMuzey.png";
import GazaxMuzey from "./assets/images/GazaxMuzey.png";
import YaratMusey from "./assets/images/YaratMuseum.png";

import HighPark from "./assets/images/BakuHigh.png";

// Atraction import

import SeeBreez from "./assets/images/SeeBreezActraction.png";
import SkyPark from "./assets/images/SkyParkActraction.png";
import VrPark from "./assets/images/VrParkAttractive.png";
import ShootingPark from "./assets/images/ShootingAttractive.png";
import Shagdag from "./assets/images/ShagdagAttractive.png";
import Safari from "./assets/images/SafariAttractive.png";
import HorseClub from "./assets/images/HorseClub.png";
import Gabalalnd from "./assets/images/QabalalandAtraction.png";
import Karting from "./assets/images/KartingBakuAttraction.png";
import Waterpark from "./assets/images/WaterparkAttraction.png";
import GanjaPaintBall from "./assets/images/GanjaPaintBallAtraction.png";
import GoyGolOffRoad from "./assets/images/GoyGolOffRoadAttraction.png";
import ZireZig from "./assets/images/ZireZipAttraction.png";
import GabalaShooting from "./assets/images/GabalaShootingAttraction.png";
import BakuClimbingGym from "./assets/images/ClimbingBakuAttraction.png";
import AquaParkNovyyLankaran from "./assets/images/LankaranAguaAtrraction.png";
import BakuEye from "./assets/images/BakuEyeAttraction.png";
import DalgaBeach from "./assets/images/DalgaBeachAttraction.png";
import Bowling from "./assets/images/BowlingAttraction.png";

import DescImg from "./assets/images/FCenter.png";
import DescFirstHeydar from "./assets/images/DescFirstHeydar.png";
import MiniAzer from "./assets/images/MiniAzer.png";
import MuzeyCaroet from "./assets/images/MuzeyCarpetdesc.png";
import MiniCarpet from "./assets/images/MiniCarpetDesc.png";
import MiniCarpet2 from "./assets/images/MiniCarpetDesc2.png";
import MuzeyArtMain from "./assets/images/MuzeyArtDesc.png";
import MuzeyArtMainItem from "./assets/images/MuzeyArtDescMainItem.png";
import MiniBookArtMain from "./assets/images/MiniBookMainDesc.png";
import MiniBookArtMainItem from "./assets/images/MiniBookArtMainItem.png";
import MiniBookArtMainItem2 from "./assets/images/MiniBookArtMainItem2.png";
import YaratMain from "./assets/images/YaratMain.png";
import YaratDesc from "./assets/images/YarartDesc.png";
import AteshgaxMain from "./assets/images/AteshgaxMain.png";
import AteshgaxDesc from "./assets/images/AteshgaxDescOpis.png";
import AteshgaxDesc2 from "./assets/images/AteshgaxDescOpis2.png";
import NationalMuseyMain from "./assets/images/NationalMuseyMain.png";
import NationalMuseyInside from "./assets/images/NationalMuseyDesc.png";
import NationalMuseyExtra from "./assets/images/NationalMuseyDesc2.png";
import LiteraturiMain from "./assets/images/MuseyNationalLiteraturiMain.png";
import LiteraturiInside from "./assets/images/MuseyNationalLiteraturidesc.png";
import LiteraturiExtra from "./assets/images/MuseyNationalLiteraturidesc2.png";
import CentralMuseiMain from "./assets/images/MuseumcenterMain.png";
import CentralMuseiInside from "./assets/images/MuseumcenterDesc.png";
import IsteglalMuseiMain from "./assets/images/IsteglalMuseiMain.png";
import IsteglalMuseiInside from "./assets/images/IsteglalMuseidesc.png";
import VurgunOlaceMain from "./assets/images/VurgunPLaceMain.png";
import VurgunOlaceInside from "./assets/images/VurgunPLaceDesc.png";

// NATURE

import NohurLake from "./assets/images/NohurLakeNature.png";
import GoyGolLake from "./assets/images/GoyGolNature.png";
import IlisuVilage from "./assets/images/IlisuNature.png";
import LahicNature from "./assets/images/LahicNature.png";
import KarabaxNature from "./assets/images/KarabaxNation.png";
import LankaranNature from "./assets/images/LankaranGizilNature.png";
import YanardagNature from "./assets/images/YanardagNature.png";
import AfrudjaNature from "./assets/images/AfrudjaNature.png";
import QusarSuniNature from "./assets/images/QusarSuniNature.png";
import BeshbarmagNature from "./assets/images/BeshmarmagNature.png";
import QusarLazaNature from "./assets/images/QusarLazaNature.png";
import MaralgolNature from "./assets/images/MaralgolNature.png";
import QabalaNature from "./assets/images/QabalaYeddiNaature.png";
import QizilBashNature from "./assets/images/QizilbashNature.png";
import TangiyatiNature from "./assets/images/TanyagatiNature.png";

import NohurLakeMain from "./assets/images/NohurLakeMain.png";
import NohurLakeDesc from "./assets/images/NohurLakeDesc.png";
import GoyGolMain from "./assets/images/GoygolMain.png";
import GoyGolDesc from "./assets/images/GoygolDesc.png";
import IlisuMain from "./assets/images/IlisuMain.png";
import IlisuDesc from "./assets/images/IlisuDesc.png";
import LahicMain from "./assets/images/LahicMainNature.png";
import LahicDesc from "./assets/images/LahicDescNAature.png";
import KarabaxMain from "./assets/images/KarabaxMainNature.png";
import KarabaxDesc from "./assets/images/KarabaxDescNature.png";
import LankaranGizilMain from "./assets/images/LankaranGizilMain.png";
import LankaranGizilDesc from "./assets/images/LankaranGizilDesc.png";
import YanardagMainNature from "./assets/images/YanardagMainNature.png";
import YanardagDescNature from "./assets/images/YanarDagDescNature.png";
import AfrudjaMainNature from "./assets/images/AfrudjaMainNature.png";
import AfrudjaDescNature from "./assets/images/AfrudjaDescNature.png";
import QusarSuniMain from "./assets/images/QusarSuniMain.png";
import QusarSuinDesc from "./assets/images/QusarSuniDesc.png";
import BeshbarmagMainNature from "./assets/images/BeshmarmagNatureMain.png";
import BeshbarmagDescNature from "./assets/images/BeshmarmagDescNature.png";
import QusarLazaMainNature from "./assets/images/QusarLazaMainNAture.png";
import QusarLazaDescNature from "./assets/images/QusarLazaDescNature.png";
import MaralgolMainNature from "./assets/images/MaralgolMainNature.png";
import MaralgolDescNature from "./assets/images/MaralgolDescNature.png";
import QabalaYeddiMainNature from "./assets/images/QabalaYeddiMainNature.png";
import QabalaYeddiDescNature from "./assets/images/QabalaYeddiDescNature.png";
import QizilbashMainNature from "./assets/images/QizilbashMainNature.png";
import QizalbashDescNature from "./assets/images/QizilbashDescNature.png";
import TangiyatiMainNature from "./assets/images/TanyagatiMainNature.png";
import TangiyatiDescNature from "./assets/images/TanyagatiDescNature.png";

import HighParkMain from "./assets/images/HighParkMain.png";
import HighParkFunikler from "./assets/images/HighParkFunickler.png";
import SeeBreezMain from "./assets/images/SeeBreezMain.png";
import SeeBreezF from "./assets/images/SeeBreezF.png";
import SkyParkMain from "./assets/images/SkyParkMain.png";
import SkyParkZone from "./assets/images/SkyZone.png";
import VrParkMain from "./assets/images/VrParkMain.png";
import VrParkDesc from "./assets/images/VrParkDesc.png";
import ShootingMain from "./assets/images/ShootingMain.png";
import ShootingMainDesc from "./assets/images/ShootingMainDesc.png";
import ShootingMainDesc2 from "./assets/images/ShootingMainDesc2.png";
import ShagdagMain from "./assets/images/ShagdagMain.png";
import ShagdagMainDesc from "./assets/images/ShagdagMainDesc.png";
import ShagdagMainDesc2 from "./assets/images/ShagdagMainDesc2.png";
import SafariMain from "./assets/images/SafariMain.png";
import SafariMainDesc from "./assets/images/SafariMainDesc.png";
import SafariMainDesc2 from "./assets/images/SafariMainDesc2.png";
import HorseClubMain from "./assets/images/HorseClubMain.png";
import HorseClubDesc1 from "./assets/images/HorseClubDesc1.png";
import GabalalanfMain from "./assets/images/QabalalandMain.png";
import GabalalanfDesc from "./assets/images/QabalandDesc.png";
import KartingMain from "./assets/images/KartingMain.png";
import KartingDesc1 from "./assets/images/KartingDesc.png";
import WaterparkMain from "./assets/images/WaterparkMain.png";
import WaterparkDesc1 from "./assets/images/WaterparkDesc1.png";
import GanjaPaintMain from "./assets/images/GanjaPaintBallMain.png";
import GanjaPaintDesc from "./assets/images/GanjaPaintBallDesc.png";
import GoyGolOffRoadMain from "./assets/images/GoyGolOffRoadMain.png";
import GoyGolOffRoadDesc from "./assets/images/GoyGolOffRoadDesc.png";
import ZireZigMain from "./assets/images/ZireZipMain.png";
import ZireZigDesc from "./assets/images/ZireZipDesc.png";
import GabalaShootingMain from "./assets/images/GabalaShootingMain.png";
import GabalaShootingDesc from "./assets/images/GabalaShootingdesc.png";
import BakuClimbingGymMain from "./assets/images/BakuClimbingMain.png";
import BakuClimbingGymDesc from "./assets/images/BakuClimbingDesc.png";
import LankaranMain from "./assets/images/LankaranAguaMain.png";
import LankaranDesc from "./assets/images/LankaranAguaDesc.png";
import BakuEyeMain from "./assets/images/BakuEyeMain.png";
import BakuEyeDesc from "./assets/images/BakuEyeDesc.png";
import DalgaBeachMain from "./assets/images/DalgaBeachMain.png";
import DalgaBeachDesc from "./assets/images/DalgaBeachDesc.png";
import BowlingMain from "./assets/images/BowlingMain.png";
import BowlingDesc from "./assets/images/BowlingDesc.png";

import GS from "./ServicesProvidedComponent/asestss/GabalaSeason.png";
import NS from "./ServicesProvidedComponent/asestss/NabranSeason.png";
import SHS from "./ServicesProvidedComponent/asestss/ShekiSeason.png";

import SHW from "./ServicesProvidedComponent/asestss/SahdagWinter.png";
import TufWin from "./ServicesProvidedComponent/asestss/TufanWinter.png";
import HinWin from "./ServicesProvidedComponent/asestss/HinaligWinter.png";

import SS from "./ServicesProvidedComponent/asestss/ShekiSpring.png";
import SG from "./ServicesProvidedComponent/asestss/SpringGax.png";
import Ls from "./ServicesProvidedComponent/asestss/LerikSpring.png";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const translations = {};

  const [punktMenu, setPunktMenu] = useState([]);

  const [point, setPointed] = useState();

  const [museums, setMuseums] = useState([]);

  const traveled = [
    {
      img: HeydarAliyevCenter,
      descImgMain: DescImg,
      DescFirstHeydar: DescFirstHeydar,
      DescSecondImg: MiniAzer,
      id: 1,
      name: "heydarAliyevCultureCenter",
      openClose: "openCloseHeydarAliyev",
      timeBuild: "timeBuildHeydarAliyev",
      adres: "adresHeydarAliyev",
      rooms: "roomsHeydarAliyev",
      sayt: "saytHeydarAliyev",
      category: "Bakı",
      city: "baku",
      special: "museums",
      specialization: "Музей",
      minihistory: "minihistoryHeydarAliyev",
      minihistory2: "minihistory2HeydarAliyev",
      titleDescitemTop: "titleDescitemTopHeydarAliyev",
      titleDescitemTopOpis: "titleDescitemTopOpisHeydarAliyev",
      titleDescitemBottom: "titleDescitemBottomHeydarAliyev",
      titleDescitembottomOpis: "titleDescitemBottomOpisHeydarAliyev",
    },
    {
      img: CarpetMuseumBaku,
      descImgMain: MuzeyCaroet,
      DescFirstHeydar: MiniCarpet,
      DescSecondImg: MiniCarpet2,
      id: 2,
      name: "azerbaijanCarpetMuseum",
      openClose: "openCloseCarpetMuseum",
      timeBuild: "timeBuildCarpetMuseum",
      adres: "adresCarpetMuseum",
      rooms: "roomsCarpetMuseum",
      sayt: "saytCarpetMuseum",
      category: "Bakı",
      city: "baku",
      special: "museums",
      specialization: "Музей",
      minihistory: "minihistoryCarpetMuseum",
      minihistory2: "minihistory2CarpetMuseum",
      titleDescitemTop: "titleDescitemTopCarpetMuseum",
      titleDescitemTopOpis: "titleDescitemTopOpisCarpetMuseum",
      titleDescitemBottom: "titleDescitemBottomCarpetMuseum",
      titleDescitembottomOpis: "titleDescitemBottomOpisCarpetMuseum",
    },
    {
      img: ArtMuseum,
      descImgMain: MuzeyArtMain,
      DescFirstHeydar: MuzeyArtMainItem,
      id: 3,
      name: "artmuseumName",
      openClose: "artopenClose",
      timeBuild: "arttimeBuild",
      adres: "artadres",
      rooms: "artrooms",
      sayt: "artsayt",
      category: "Bakı",
      city: "baku",
      special: "museums",
      specialization: "Музей",
      minihistory: "artminihistory",
      minihistory2: "artminihistory2",
      titleDescitemTop: "arttitleDescitemTop",
      titleDescitemTopOpis: "arttitleDescitemTopOpis",
    },
    {
      img: MiniBook,
      descImgMain: MiniBookArtMain,
      DescFirstHeydar: MiniBookArtMainItem,
      DescSecondImg: MiniBookArtMainItem2,
      id: 4,
      name: "bakuMiniBookMuseum",
      openClose: "openCloseMiniBookMuseum",
      timeBuild: "timeBuildMiniBookMuseum",
      adres: "adresMiniBookMuseum",
      rooms: "roomsMiniBookMuseum",
      sayt: "saytMiniBookMuseum",
      category: "Bakı",
      city: "baku",
      special: "museums",
      specialization: "Музей",
      minihistory: "minihistoryMiniBookMuseum",
      minihistory2: "minihistory2MiniBookMuseum",
      titleDescitemTop: "titleDescitemTopMiniBookMuseum",
      titleDescitemTopOpis: "titleDescitemTopOpisMiniBookMuseum",
      titleDescitemBottom: "titleDescitemBottomMiniBookMuseum",
      titleDescitembottomOpis: "titleDescitemBottomOpisMiniBookMuseum",
    },
    {
      img: YaratMusey,
      descImgMain: YaratMain,
      DescFirstHeydar: YaratDesc,
      id: 5,
      special: "museums",
      name: "yaratContemporaryArt",
      openClose: "openCloseYarat",
      timeBuild: "timeBuildYarat",
      adres: "adresYarat",
      cost: "costYarat",
      rooms: "roomsYarat",
      sayt: "saytYarat",
      category: "Bakı",
      specialization: "Музей",
      minihistory: "minihistoryYarat1",
      minihistory2: "minihistoryYarat2",
      titleDescitemTop: "titleDescitemTopYarat",
      titleDescitemTopOpis: "titleDescitemTopOpisYarat",
    },
    {
      img: FireXram,
      descImgMain: AteshgaxMain,
      DescFirstHeydar: AteshgaxDesc,
      DescSecondImg: AteshgaxDesc2,
      id: 6,
      name: "fireTempleAteshgah",
      openClose: "openCloseFireTempleAteshgah",
      timeBuild: "timeBuildFireTempleAteshgah",
      adres: "adresFireTempleAteshgah",
      rooms: "roomsFireTempleAteshgah",
      sayt: "saytFireTempleAteshgah",
      category: "Bakı",
      city: "baku",
      special: "museums",
      specialization: "Музей",
      minihistory: "minihistoryFireTempleAteshgah",
      minihistory2: "minihistory2FireTempleAteshgah",
      titleDescitemTop: "titleDescitemTopFireTempleAteshgah",
      titleDescitemTopOpis: "titleDescitemTopOpisFireTempleAteshgah",

      titleDescitemBottom: "titleDescitemBottomFireTempleAteshgah",
      titleDescitembottomOpis: "titleDescitemBottomOpisFireTempleAteshgah",
    },
    {
      img: NationalMusey,
      descImgMain: NationalMuseyMain,
      DescFirstHeydar: NationalMuseyInside,
      DescSecondImg: NationalMuseyExtra,
      id: 7,
      name: "nationalMuseumHistoryAzerbaijan",
      openClose: "openCloseNationalMuseum",
      timeBuild: "timeBuildNationalMuseum",
      adres: "adresNationalMuseum",
      rooms: "roomsNationalMuseum",
      sayt: "saytNationalMuseum",
      category: "Bakı",
      city: "baku",
      special: "museums",
      specialization: "Музей",
      minihistory: "minihistoryNationalMuseum1",
      minihistory2: "minihistoryNationalMuseum2",
      titleDescitemTop: "titleDescitemTopNationalMuseum",
      titleDescitemTopOpis: "titleDescitemTopOpisNationalMuseum",
      titleDescitemBottom: "titleDescitemBottomNationalMuseum",
      titleDescitembottomOpis: "titleDescitemBottomOpisNationalMuseum",
    },
    {
      img: Literaturi,
      descImgMain: LiteraturiMain,
      DescFirstHeydar: LiteraturiInside,
      DescSecondImg: LiteraturiExtra,
      id: 8,
      name: "museumAzerbaijanLiterature",
      openClose: "openCloseLiteratureMuseum",
      timeBuild: "timeBuildLiteratureMuseum",
      adres: "adresLiteratureMuseum",
      rooms: "roomsLiteratureMuseum",
      sayt: "saytLiteratureMuseum",
      category: "Bakı",
      city: "baku",
      special: "museums",
      specialization: "Музей",
      minihistory: "minihistoryLiteratureMuseum1",
      minihistory2: "minihistoryLiteratureMuseum2",
      titleDescitemTop: "titleDescitemTopLiteratureMuseum",
      titleDescitemTopOpis: "titleDescitemTopOpisLiteratureMuseum",
      titleDescitemBottom: "titleDescitemBottomLiteratureMuseum",
      titleDescitembottomOpis: "titleDescitemBottomOpisLiteratureMuseum",
    },
    {
      img: CentralMusei,
      descImgMain: CentralMuseiMain,
      DescFirstHeydar: CentralMuseiInside,
      id: 9,
      name: "museumCenter",
      openClose: "openCloseMuseumCenter",
      timeBuild: "timeBuildMuseumCenter",
      adres: "adresMuseumCenter",
      rooms: "roomsMuseumCenter",
      sayt: "saytMuseumCenter",
      category: "Bakı",
      city: "baku",
      special: "museums",
      specialization: "Музей",
      minihistory: "minihistoryMuseumCenter1",
      minihistory2: "minihistoryMuseumCenter2",
      titleDescitemTop: "titleDescitemTopMuseumCenter",
      titleDescitemTopOpis: "titleDescitemTopOpisMuseumCenter",
      titleDescitemBottom: "titleDescitemBottomMuseumCenter",
      titleDescitembottomOpis: "titleDescitemBottomOpisMuseumCenter",
    },
    {
      img: IsteglalMusei,
      descImgMain: IsteglalMuseiMain,
      DescFirstHeydar: IsteglalMuseiInside,
      id: 10,
      name: "independenceMuseum",
      openClose: "openCloseIndependenceMuseum",
      timeBuild: "timeBuildIndependenceMuseum",
      adres: "adresIndependenceMuseum",
      rooms: "roomsIndependenceMuseum",
      sayt: "saytIndependenceMuseum",
      category: "Bakı",
      city: "baku",
      special: "museums",
      specialization: "Музей",
      minihistory: "minihistoryIndependenceMuseum1",
      minihistory2: "minihistoryIndependenceMuseum2",
      titleDescitemTop: "titleDescitemTopIndependenceMuseum",
      titleDescitemTopOpis: "titleDescitemTopOpisIndependenceMuseum",
      titleDescitemBottom: "titleDescitemBottomIndependenceMuseum",
      titleDescitembottomOpis: "titleDescitemBottomOpisIndependenceMuseum",
    },
    {
      img: VurgunOlace,
      descImgMain: VurgunOlaceMain,
      DescFirstHeydar: VurgunOlaceInside,
      id: 11,
      name: "samedVurghunHouseMuseum",
      openClose: "openCloseSamedVurghun",
      timeBuild: "timeBuildSamedVurghun",
      adres: "adresSamedVurghun",
      sayt: "saytSamedVurghun",
      category: "Bakı",
      city: "baku",
      special: "museums",
      specialization: "Музей",
      minihistory: "minihistorySamedVurghun1",
      minihistory2: "minihistorySamedVurghun2",
      titleDescitemTop: "titleDescitemTopSamedVurghun",
      titleDescitemTopOpis: "titleDescitemTopOpisSamedVurghun",
    },

    {
      img: UzeirHouse,
      id: 12,
      specialization: "Музей",
      special: "Музей",
      name: "Дом-музей Узеира Гаджибекова",
      openClose: "вт-вс 09:00–18:00",
      timeBuild: "1955 год",
      adres: "ул. Шамиля Азизбекова, 65",
      rooms: "Количество выставочных залов: 5",
      sayt: "Сайт: museumcenter.az",
      category: "Bakı",
    },
    {
      img: JafarJabbarliHousem,
      id: 13,
      specialization: "Музей",
      special: "Музей",
      name: "Дом-музей Джафара Джаббарлы",
      openClose: "вт-вс 9:00–18:00",
      timeBuild: "1979 год",
      adres: "Азербайджан, Баку, улица Исмаил-бека Куткашенского, 64A",
      rooms: "Количество выставочных залов: 5",
      sayt: "Сайт: museumcenter.az",
      category: "Bakı",
    },
    {
      img: GanjaHistory,
      id: 14,
      specialization: "Музей",
      special: "Музей",
      name: "Историко-этнографический музей Гянджи",
      openClose: "вт-вс 9:00–18:00",
      timeBuild: "1924 год",
      adres: "пр. Ататюрка, 424. ",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Gəncə",
    },
    {
      img: MuzeyGandjs,
      id: 15,
      specialization: "Музей",
      special: "Музей",
      name: "Музей Гейдара Алиева",
      openClose: "вт-вс 9:00–18:00",
      timeBuild: "",
      adres: "Проспект Гейдара Алиева, 430",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Gəncə",
    },
    {
      img: ShekiMuzet,
      id: 16,
      specialization: "Музей",
      special: "Музей",
      name: "Дворец Шекинских ханов",
      openClose: "вт-вс 9:00–18:00",
      timeBuild: "1797 год",
      adres: "пр. Ататюрка, 424. ",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Şəki",
    },
    {
      img: WinterShekiMuzey,
      id: 17,
      specialization: "Музей",
      special: "Музей",
      name: "Дворец Шекинских ханов",
      openClose: "вт-вс 9:00–18:00",
      timeBuild: "1797 год",
      adres: "пр. Ататюрка, 424. ",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Şəki",
    },
    {
      img: ShekiMuzeyKravoed,
      id: 18,
      specialization: "Музей",
      special: "Музей",
      name: "Шекинский историко-краеведческий музей",
      openClose: "вт-вс 9:00–18:00",
      timeBuild: " сентябрь 1925 года",
      adres: "Азербайджан, Шеки, улица Мирза Фатали Ахундова",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Şəki",
    },
    {
      img: LankoranMuzey,
      id: 19,
      specialization: "Музей",
      special: "Музей",
      name: "Дом Мир Ахмада Хана",
      openClose: "вт-вс 9:00–17:00",
      timeBuild: "1797 год",
      adres: "Улица Ширали Ахундова, Ленкорань",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Lənkəran",
    },
    {
      img: LankoranHaziMuzey,
      id: 20,
      specialization: "Музей",
      special: "Музей",
      name: "Дом-музей Ази Асланова",
      openClose: "вт-вс 9:00–17:00",
      timeBuild: "1969 года.",
      adres: "Ленкорань, Гаибова Исмета 19",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Lənkəran",
    },
    {
      img: ShamaxiMuzey,
      id: 21,
      specialization: "Музей",
      special: "Музей",
      name: "Шемахи́нская Астрофизи́ческая Обсервато́рия",
      openClose: "вт-вс 9:00–17:00",
      timeBuild: "17 ноября 1959 года",
      adres: "Пиркули, Шемахы, Азербайджан.",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Şamaxı",
    },
    {
      img: CarpetShusaMuzey,
      id: 22,
      specialization: "Музей",
      special: "Музей",
      name: "Музей ковров",
      openClose: "вт-вс 9:00–17:00",
      timeBuild: "26 сентября 1985",
      adres: "Шуша, Азербайджан.",
      rooms: "Количество выставочных залов: 5",
      sayt: "http://www.azcarpetmuseum.az/ru/shusha-history",
      category: "Qarabağ",
    },
    {
      img: MavzouleyShusa,
      id: 23,
      specialization: "Музей",
      special: "Музей",
      name: "Мавзолей Вагифа",
      openClose: "вт-вс 9:00–17:00",
      timeBuild: "1982",
      adres: "Шуша, Азербайджан.",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Qarabağ",
    },
    {
      img: BulBulMuzeyShusha,
      id: 24,
      specialization: "Музей",
      special: "Музей",
      name: "Дом-музей Бульбуль",
      openClose: "вт-вс 9:00–17:00",
      timeBuild: "1983",
      adres: "Шуша, Азербайджан.",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Qarabağ",
    },
    {
      img: GabalaGeologCenter,
      id: 25,
      specialization: "Музей",
      special: "Музей",
      name: "Габалинский археологический центр",
      openClose: "вт-вс 9:00–17:00",
      timeBuild: "22 сентября 2014 года.",
      adres: "село Чухур-Габала, Габалинский район.",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Gabala",
    },
    {
      img: GabalaArxelojiCenter,
      id: 26,
      specialization: "Музей",
      special: "Музей",
      name: "Дом-музей Бульбуль",
      openClose: "вт-вс 9:00–17:00",
      timeBuild: "-",
      adres: "Габала, Азербайджан.",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Gabala",
    },
    {
      img: GabalaKraevodMuzey,
      id: 27,
      specialization: "Музей",
      special: "Музей",
      name: "Габалинский историко-краеведческий музей",
      openClose: "вт-вс 9:00–17:00",
      timeBuild: "15 мая 1980 года. ",
      adres: "Габала, улица Низами, 1.",
      rooms: "13 экспозиционных залов",
      sayt: "-",
      category: "Gabala",
    },
    {
      img: XacmazMuzeum,
      id: 28,
      specialization: "Музей",
      special: "Музей",
      name: "Хачмазский историко-краеведческий музей",
      openClose: "вт-вс 9:00–17:00",
      timeBuild: "Основан в 1981 году",
      adres: "Хачмаз Азербайджанской Республики.",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Xaçmaz",
    },
    {
      img: XacmazEzizEliyev,
      id: 29,
      specialization: "Музей",
      special: "Музей",
      name: "Музей А. Алиеву. ",
      openClose: "вт-вс 9:00–17:00",
      timeBuild: "25 декабря 2013 г",
      adres: "Хачмазский район, Азербайджан.",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Xaçmaz",
    },
    {
      img: MuzeumXacmaxfreinds,
      id: 30,
      specialization: "Музей",
      special: "Музей",
      name: "Музей «Дружба народов».",
      openClose: "вт-вс 9:00–17:00",
      timeBuild: "в 2006 году",
      adres: "Хачмазский район, Азербайджан.",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Xaçmaz",
    },
    {
      img: XacmazCarpetMuzeum,
      id: 31,
      specialization: "Музей",
      special: "Музей",
      name: "Музей ковроткачества.",
      openClose: "вт-вс 9:00–17:00",
      timeBuild: "в 2011 году.",
      adres: "Хачмазский район, Азербайджан.",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Xaçmaz",
    },
    {
      img: ShamkirKraevodMuzey,
      id: 32,
      specialization: "Музей",
      special: "Музей",
      name: "Шамкирский историко-краеведческий музей",
      openClose: "вт-вс 9:00–17:00",
      timeBuild: "в 1971 году.",
      adres: "улица Сабира, Шамкир, 18",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Şəmkir",
    },
    {
      img: ShamkirFlagsMuzey,
      id: 33,
      specialization: "Музей",
      special: "Музей",
      name: "Музей флага",
      openClose: "вт-вс 9:00–17:00",
      timeBuild: "9 ноября 2010 года",
      adres: "Shamkir, Азербайджан",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Şəmkir",
    },
    {
      img: LahicKraevodMuzey,
      id: 34,
      specialization: "Музей",
      special: "Музей",
      name: "Историко-краеведческий музей Лагича",
      openClose: "вт-вс 9:00–17:00",
      timeBuild: "в 1985 году",
      adres: "Исмаиллинском районе Азербайджана",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Ismayilli",
    },
    {
      img: GazaxMuzey,
      id: 35,
      specialization: "Музей",
      special: "Музей",
      name: "Историко-Краеведческий Музей Газахского района",
      openClose: "вт-вс 9:00–17:00",
      timeBuild: "в 1984 году.",
      // 19 октября 2016 года
      adres: "Гейдар Алиев, Газах",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Газах",
    },
    {
      img: ShamkirFlagsMuzey,
      id: 36,
      specialization: "Музей",
      special: "Музей",
      name: "Музей флага",
      openClose: "вт-вс 9:00–17:00",
      timeBuild: "9 ноября 2010 года",
      adres: "Shamkir, Азербайджан",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Şəmkir",
    },
    {
      img: ShamkirFlagsMuzey,
      id: 37,
      specialization: "Музей",
      special: "Музей",
      name: "Музей флага",
      openClose: "вт-вс 9:00–17:00",
      timeBuild: "9 ноября 2010 года",
      adres: "Shamkir, Азербайджан",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Şəmkir",
    },
    // Attractive
    // Attractive Baku
    {
      img: SeeBreez,
      descImgMain: SeeBreezMain,
      DescFirstHeydar: SeeBreezF,
      id: 38,
      special: "Attractive",
      specialization: "Attractive",
      name: "seaBreeze",
      openClose: "openCloseSeaBreeze",
      timeBuild: "timeBuildSeaBreeze",
      adres: "adresSeaBreeze",
      // cost: "-",
      // rooms: "roomsSeaBreeze",
      sayt: "saytSeaBreeze",
      category: "Bakı",
      minihistory: "minihistorySeaBreeze",
      minihistory2: "minihistory2SeaBreeze",

      titleDescitemTop: "titleDescitemTopSeaBreeze",
      titleDescitemTopOpis: "titleDescitemTopOpisSeaBreeze",
    },
    {
      img: SkyPark,
      descImgMain: SkyParkMain,
      DescFirstHeydar: SkyParkZone,
      id: 39,
      name: "SkyPark",
      openClose: "openCloseSkyPark",
      timeBuild: "timeBuildSkyPark",
      adres: "adresSkyPark",
      cost: "costSkyPark",
      rooms: "roomsSkyPark",
      sayt: "saytSkyPark",
      category: "Bakı",
      city: "baku",
      special: "attractive",
      specialization: "Attractive",
      minihistory: "minihistorySkyPark1",
      minihistory2: "minihistorySkyPark2",
      titleDescitemTop: "titleDescitemTopSkyPark",
      titleDescitemTopOpis: "titleDescitemTopOpisSkyPark",
    },
    {
      img: VrPark,
      descImgMain: VrParkMain,
      DescFirstHeydar: VrParkDesc,
      id: 40,
      name: "vrPark",
      openClose: "openCloseVRPark",
      timeBuild: "timeBuildVRPark",
      adres: "adresVRPark",
      cost: "20–27 AZN",
      // rooms: "roomsSkyPark",
      sayt: "saytVRPark",
      category: "Bakı",
      city: "baku",
      special: "attractive",
      specialization: "Attractive",
      minihistoryVRPark1: "minihistorySkyPark1",
      minihistoryVRPark2: "minihistorySkyPark2",
      titleDescitemTopVRPark: "titleDescitemTopSkyPark",
      titleDescitemTopOpisVRPark: "titleDescitemTopOpisSkyPark",
    },
    {
      img: ShootingPark,
      descImgMain: ShootingMain,
      DescFirstHeydar: ShootingMainDesc,
      DescSecondImg: ShootingMainDesc2,
      id: 41,
      special: "Attractive",
      specialization: "Attractive",
      name: "nameBakuShooting",
      openClose: "openCloseBakuShooting",
      timeBuild: "timeBuildBakuShooting",
      adres: "adresBakuShooting",
      cost: "costBakuShooting",
      rooms: "roomsBakuShooting",
      sayt: "-",
      category: "Bakı",
      minihistory: "minihistoryBakuShooting1",
      minihistory2: "minihistoryBakuShooting2",

      titleDescitemTop: "titleDescitemTopBakuShooting",
      titleDescitemTopOpis: "titleDescitemTopOpisBakuShooting",
      titleDescitemBottom: "titleDescitemBottom",
      titleDescitembottomOpis: "titleDescitembottomOpis",
    },
    {
      img: HorseClub,
      descImgMain: HorseClubMain,
      DescFirstHeydar: HorseClubDesc1,
      id: 42,
      special: "Attractive",
      specialization: "Attractive",
      name: "HorseClubname",
      openClose: "openCloseHorseClub",
      timeBuild: "timeBuildHorseClub",
      adres: "adresHorseClub",
      cost: "costHorseClub",
      rooms: "roomsHorseClub",
      sayt: "-",
      category: "Bakı",
      minihistory: "minihistoryHorseClub1",
      minihistory2: "minihistoryHorseClub2",

      titleDescitemTop: "titleDescitemTopHorseClub",
      titleDescitemTopOpis: "titleDescitemTopOpisHorseClub",
    },
    {
      img: Karting,
      descImgMain: KartingMain,
      DescFirstHeydar: KartingDesc1,
      id: 43,
      special: "Attractive",
      specialization: "Attractive",
      name: "KartingName",
      openClose: "KartingOpenClose",
      timeBuild: "KartingTimeBuild",
      adres: "KartingAdres",
      cost: "KartingCost",
      rooms: "KartingRooms",
      sayt: "KartingSayt",
      category: "Bakı",
      minihistory: "KartingMiniHistory1",
      minihistory2: "KartingMiniHistory2",
      titleDescitemTop: "KartingTitleDescTop",
      titleDescitemTopOpis: "KartingTitleDescOpis",
    },
    {
      img: Waterpark,
      descImgMain: WaterparkMain,
      DescFirstHeydar: WaterparkDesc1,
      id: 44,
      special: "Attractive",
      specialization: "Attractive",
      name: "WaterparkName",
      openClose: "WaterparkOpenClose",
      timeBuild: "WaterparkTimeBuild",
      adres: "WaterparkAdres",
      cost: "WaterparkCost",
      rooms: "WaterparkRooms",
      sayt: "WaterparkSayt",
      category: "Bakı",
      minihistory: "WaterparkMiniHistory1",
      minihistory2: "WaterparkMiniHistory2",
      titleDescitemTop: "WaterparkTitleDescTop",
      titleDescitemTopOpis: "WaterparkTitleDescOpis",
    },
    {
      img: ZireZig,
      descImgMain: ZireZigMain,
      DescFirstHeydar: ZireZigDesc,
      id: 45,
      special: "Attractive",
      specialization: "Attractive",
      name: "ZireExtremeName",
      openClose: "ZireExtremeOpenClose",
      timeBuild: "ZireExtremeTimeBuild",
      adres: "ZireExtremeAdres",
      cost: "ZireExtremeCost",
      rooms: "ZireExtremeRooms",
      sayt: "ZireExtremeSayt",
      category: "Bakı",
      minihistory: "ZireExtremeMinihistory",
      minihistory2: "ZireExtremeMinihistory2",
      titleDescitemTop: "ZireExtremeTitleDescitemTop",
      titleDescitemTopOpis: "ZireExtremeTitleDescitemTopOpis",
    },
    {
      img: BakuClimbingGym,
      descImgMain: BakuClimbingGymMain,
      DescFirstHeydar: BakuClimbingGymDesc,
      id: 46,
      special: "Attractive",
      specialization: "Attractive",
      name: "ClimbingGymName",
      openClose: "ClimbingGymOpenClose",
      timeBuild: "ClimbingGymTimeBuild",
      adres: "ClimbingGymAdres",
      cost: "ClimbingGymCost",
      rooms: "ClimbingGymRooms",
      sayt: "ClimbingGymSayt",
      category: "Bakı",
      minihistory: "ClimbingGymMinihistory",
      minihistory2: "ClimbingGymMinihistory2",
      titleDescitemTop: "ClimbingGymTitleDescitemTop",
      titleDescitemTopOpis: "ClimbingGymTitleDescitemTopOpis",
    },
    {
      img: BakuEye,
      descImgMain: BakuEyeMain,
      DescFirstHeydar: BakuEyeDesc,
      id: 47,
      special: "Attractive",
      specialization: "Attractive",
      name: "BakuEyeName",
      openClose: "BakuEyeOpenClose",
      timeBuild: "BakuEyeTimeBuild",
      adres: "BakuEyeAdres",
      cost: "BakuEyeCost",
      rooms: "BakuEyeRooms",
      sayt: "BakuEyeSayt",
      category: "Bakı",
      minihistory: "BakuEyeMinihistory",
      minihistory2: "BakuEyeMinihistory2",
      titleDescitemTop: "BakuEyeTitleDescitemTop",
      titleDescitemTopOpis: "BakuEyeTitleDescitemTopOpis",
    },
    {
      img: DalgaBeach,
      descImgMain: DalgaBeachMain,
      DescFirstHeydar: DalgaBeachDesc,
      id: 48,
      special: "Attractive",
      specialization: "Attractive",
      name: "DalgaBeachName",
      openClose: "DalgaBeachOpenClose",
      timeBuild: "DalgaBeachTimeBuild",
      adres: "DalgaBeachAdres",
      cost: "DalgaBeachCost",
      rooms: "DalgaBeachRooms",
      sayt: "DalgaBeachSayt",
      category: "Bakı",
      minihistory: "DalgaBeachMinihistory",
      minihistory2: "DalgaBeachMinihistory2",
      titleDescitemTop: "DalgaBeachTitleDescitemTop",
      titleDescitemTopOpis: "DalgaBeachTitleDescitemTopOpis",
    },
    {
      img: Bowling,
      descImgMain: BowlingMain,
      DescFirstHeydar: BowlingDesc,
      id: 49,
      special: "Attractive",
      specialization: "Attractive",
      name: "BowlingName",
      openClose: "BowlingOpenClose",
      timeBuild: "BowlingTimeBuild",
      adres: "BowlingAdres",
      cost: "BowlingCost",
      rooms: "BowlingRooms",
      sayt: "BowlingSayt",
      category: "Bakı",
      minihistory: "BowlingMinihistory",
      minihistory2: "BowlingMinihistory2",
      titleDescitemTop: "BowlingTitleDescitemTop",
      titleDescitemTopOpis: "BowlingTitleDescitemTopOpis",
    },
    // Attractive Qusar
    {
      img: Shagdag,
      descImgMain: ShagdagMain,
      DescFirstHeydar: ShagdagMainDesc,
      DescSecondImg: ShagdagMainDesc2,
      id: 50,
      special: "Attractive",
      specialization: "Attractive",
      name: "ShahdagName",
      openClose: "ShahdagOpenClose",
      timeBuild: "ShahdagTimeBuild",
      adres: "ShahdagAdres",
      cost: "ShahdagCost",
      rooms: "ShahdagRooms",
      sayt: "ShahdagSayt",
      category: "Bakı",
      minihistory: "ShahdagMinihistory",
      minihistory2: "ShahdagMinihistory2",
      titleDescitemTop: "ShahdagTitleDescitemTop",
      titleDescitemTopOpis: "ShahdagTitleDescitemTopOpis",
      titleDescitemBottom: "ShahdagTitleDescitemBottom",
      titleDescitembottomOpis: "ShahdagTitleDescitemBottomOpis",
    },
    // Attractive Qobustan
    {
      img: Safari,
      descImgMain: SafariMain,
      DescFirstHeydar: SafariMainDesc,
      DescSecondImg: SafariMainDesc2,
      id: 51,
      special: "Attractive",
      specialization: "Attractive",
      name: "QobustanSafariName",
      openClose: "QobustanSafariOpenClose",
      timeBuild: "QobustanSafariTimeBuild",
      adres: "QobustanSafariAdres",
      cost: "QobustanSafariCost",
      rooms: "QobustanSafariRooms",
      sayt: "QobustanSafariSayt",
      category: "Bakı",
      minihistory: "QobustanSafariMinihistory",
      minihistory2: "QobustanSafariMinihistory2",
      titleDescitemTop: "QobustanSafariTitleDescitemTop",
      titleDescitemTopOpis: "QobustanSafariTitleDescitemTopOpis",
      titleDescitemBottom: "QobustanSafariTitleDescitemBottom",
      titleDescitembottomOpis: "QobustanSafariTitleDescitemBottomOpis",
    },
    // Attractive Qabala
    {
      img: Gabalalnd,
      descImgMain: GabalalanfMain,
      DescFirstHeydar: GabalalanfDesc,
      id: 52,
      special: "Attractive",
      specialization: "Attractive",
      name: "GabalandName",
      openClose: "GabalandOpenClose",
      timeBuild: "GabalandTimeBuild",
      adres: "GabalandAdres",
      cost: "GabalandCost",
      rooms: "GabalandRooms",
      sayt: "GabalandSayt",
      category: "Bakı",
      minihistory: "GabalandMinihistory",
      minihistory2: "GabalandMinihistory2",
      titleDescitemTop: "GabalandTitleDescitemTop",
      titleDescitemTopOpis: "GabalandTitleDescitemTopOpis",
    },
    {
      img: GabalaShooting,
      descImgMain: GabalaShootingMain,
      DescFirstHeydar: GabalaShootingDesc,
      id: 53,
      special: "Attractive",
      specialization: "Attractive",
      name: "GabalaShootingName",
      openClose: "GabalaShootingOpenClose",
      timeBuild: "GabalaShootingTimeBuild",
      adres: "GabalaShootingAdres",
      cost: "GabalaShootingCost",
      rooms: "GabalaShootingRooms",
      sayt: "GabalaShootingSayt",
      category: "Bakı",
      minihistory: "GabalaShootingMinihistory",
      minihistory2: "GabalaShootingMinihistory2",
      titleDescitemTop: "GabalaShootingTitleDescitemTop",
      titleDescitemTopOpis: "GabalaShootingTitleDescitemTopOpis",
    },
    // Attraction Ganja
    {
      img: GanjaPaintBall,
      descImgMain: GanjaPaintMain,
      DescFirstHeydar: GanjaPaintDesc,
      id: 54,
      special: "Attractive",
      specialization: "Attractive",
      name: "GanjaPaintballName",
      openClose: "GanjaPaintballOpenClose",
      timeBuild: "GanjaPaintballTimeBuild",
      adres: "GanjaPaintballAdres",
      cost: "GanjaPaintballCost",
      rooms: "GanjaPaintballRooms",
      sayt: "GanjaPaintballSayt",
      category: "Bakı",
      minihistory: "GanjaPaintballMinihistory",
      minihistory2: "GanjaPaintballMinihistory2",
      titleDescitemTop: "GanjaPaintballTitleDescitemTop",
      titleDescitemTopOpis: "GanjaPaintballTitleDescitemTopOpis",
    },
    // Attraction Goygol
    {
      img: GoyGolOffRoad,
      descImgMain: GoyGolOffRoadMain,
      DescFirstHeydar: GoyGolOffRoadDesc,
      id: 55,
      special: "Attractive",
      specialization: "Attractive",
      name: "GoygolOffRoadName",
      openClose: "GoygolOffRoadOpenClose",
      timeBuild: "GoygolOffRoadTimeBuild",
      adres: "GoygolOffRoadAdres",
      cost: "GoygolOffRoadCost",
      rooms: "GoygolOffRoadRooms",
      sayt: "GoygolOffRoadSayt",
      category: "Bakı",
      minihistory: "GoygolOffRoadMinihistory",
      minihistory2: "GoygolOffRoadMinihistory2",
      titleDescitemTop: "GoygolOffRoadTitleDescitemTop",
      titleDescitemTopOpis: "GoygolOffRoadTitleDescitemTopOpis",
    },
    // Attraction Lankaran
    {
      img: AquaParkNovyyLankaran,
      descImgMain: LankaranMain,
      DescFirstHeydar: LankaranDesc,
      id: 56,
      special: "Attractive",
      specialization: "Attractive",
      name: "LankaranAquaName",
      openClose: "LankaranAquaOpenClose",
      timeBuild: "LankaranAquaTimeBuild",
      adres: "LankaranAquaAdres",
      cost: "LankaranAquaCost",
      rooms: "LankaranAquaRooms",
      sayt: "LankaranAquaSayt",
      category: "Bakı",
      minihistory: "LankaranAquaMinihistory",
      minihistory2: "LankaranAquaMinihistory2",
      titleDescitemTop: "LankaranAquaTitleDescitemTop",
      titleDescitemTopOpis: "LankaranAquaTitleDescitemTopOpis",
    },
    // Nation
    // Nation Qabala
    {
      img: NohurLake,
      descImgMain: NohurLakeMain,
      DescFirstHeydar: NohurLakeDesc,
      id: 57,
      special: "nature",
      specialization: "nature",
      name: "NohurLakeName",
      openClose: "NohurLakeOpenClose",
      timeBuild: "NohurLakeTimeBuild",
      adres: "NohurLakeAdres",
      cost: "NohurLakeCost",
      rooms: "NohurLakeRooms",
      sayt: "NohurLakeSayt",
      category: "Bakı",
      minihistory: "NohurLakeMinihistory",
      minihistory2: "NohurLakeMinihistory2",
      titleDescitemTop: "NohurLakeTitleDescitemTop",
      titleDescitemTopOpis: "NohurLakeTitleDescitemTopOpis",
    },
    // Nation GoyGol
    {
      img: GoyGolLake,
      descImgMain: GoyGolMain,
      DescFirstHeydar: GoyGolDesc,
      id: 58,
      special: "nature",
      specialization: "nature",
      name: "GoyGolLakeName",
      openClose: "GoyGolLakeOpenClose",
      timeBuild: "GoyGolLakeTimeBuild",
      adres: "GoyGolLakeAdres",
      cost: "GoyGolLakeCost",
      rooms: "GoyGolLakeRooms",
      sayt: "GoyGolLakeSayt",
      category: "Bakı",
      minihistory: "GoyGolLakeMinihistory",
      minihistory2: "GoyGolLakeMinihistory2",
      titleDescitemTop: "GoyGolLakeTitleDescitemTop",
      titleDescitemTopOpis: "GoyGolLakeTitleDescitemTopOpis",
    },
    // Nature QAX
    {
      img: IlisuVilage,
      descImgMain: IlisuMain,
      DescFirstHeydar: IlisuDesc,
      id: 59,
      special: "nature",
      specialization: "nature",
      name: "IlisuVilageName",
      openClose: "IlisuVilageOpenClose",
      timeBuild: "IlisuVilageTimeBuild",
      adres: "IlisuVilageAdres",
      cost: "IlisuVilageCost",
      rooms: "IlisuVilageRooms",
      sayt: "IlisuVilageSayt",
      category: "Bakı",
      minihistory: "IlisuVilageMinihistory",
      minihistory2: "IlisuVilageMinihistory2",
      titleDescitemTop: "IlisuVilageTitleDescitemTop",
      titleDescitemTopOpis: "IlisuVilageTitleDescitemTopOpis",
    },
    // Nature Ismayilli
    {
      img: LahicNature,
      descImgMain: LahicMain,
      DescFirstHeydar: LahicDesc,
      id: 60,
      special: "nature",
      specialization: "nature",
      name: "Lahij Village (Lahıc)",
      openClose: "Круглосуточно",
      timeBuild: "Историческое поселение, основано более 1000 лет назад",
      adres: "İsmayıllı rayonu, Азербайджан",
      cost: "Бесплатно",
      rooms: "Каменные улицы, мастерские ремесленников, горные виды",
      sayt: "-",
      category: "Ismayilli",
      minihistory:
        "Лагич — это древнее горное село, расположенное в районе Исмаиллы Азербайджана. Его история насчитывает более тысячи лет и тесно связана с традиционными ремёслами и культурой региона. Село известно своими узкими мощёными улочками, каменными домами с резными деревянными дверями и атмосферой средневекового Кавказа.",
      minihistory2:
        "Лагич издревле славился кузнечным ремеслом и медным делом — мастера из Лагича изготавливают уникальные изделия из меди и латуни, которые ценятся далеко за пределами страны. Этот промысел передаётся из поколения в поколение, и сегодня Лагич считается центром ремесленной культуры Азербайджана.",
      titleDescitemTop: "Лагич — горное село мастеров",
      titleDescitemTopOpis:
        "Lahij — это уникальное горное село, которое словно застыло во времени. Его узкие мощёные улочки, выложенные камнем, ведут к старинным мастерским, где до сих пор живут традиции древних ремёсел. Здесь можно увидеть кузнецов за работой, мастерящих из меди и латуни удивительные изделия — от украшений до утвари, которые создают вручную с мастерством, передающимся из поколения в поколение. Горные пейзажи, окружающие Лахидж, дополняют ощущение уединённого уголка Кавказа, где природа и история слились воедино. Каждый дом и каменная стена хранят в себе многовековую историю этого места, а гостеприимство местных жителей делает визит ещё более тёплым и запоминающимся. Несмотря на развитие туризма, Лахидж сохранил аутентичность и дух прошлого, оставаясь живым музеем под открытым небом. Здесь можно не только прикоснуться к культуре и ремеслам, но и почувствовать душу древнего Кавказа, прогуливаясь по тем же тропинкам, которыми шагали поколения до тебя.",
    },
    // Nature Karabakh
    {
      img: KarabaxNature,
      descImgMain: KarabaxMain,
      DescFirstHeydar: KarabaxDesc,
      id: 61,
      special: "nature",
      specialization: "nature",
      name: "Karabakh Mountains (Şuşa və ətrafı)",
      openClose: "Круглосуточно",
      timeBuild: "Древние горные массивы",
      adres: "Şuşa və ətrafı, Азербайджан",
      cost: "Бесплатно",
      rooms: "Горные тропы, панорамные виды, исторические памятники",
      sayt: "-",
      category: "Qarabağ",
      minihistory:
        "Карабахские горы — это не только величественные пейзажи, но и место, пропитанное историей. Здесь издревле проходили караванные пути, соединяющие Восток и Запад. В этих горах располагались древние поселения и крепости, служившие опорными пунктами на стратегически важных высотах.",
      minihistory2:
        "Археологические находки свидетельствуют о том, что люди жили в этом регионе тысячи лет назад. Каменные башни, старинные храмы и крепостные стены до сих пор хранят следы прошедших эпох. Многие тропы Карабахских гор ведут к историческим памятникам, таким как руины средневековых городов, караван-сараев и оборонительных укреплений, которые когда-то защищали местных жителей от набегов.",
      titleDescitemTop: "Карабахские горы — красота и история в одном",
      titleDescitemTopOpis:
        "Это место для тех, кто любит природу, историю и активный отдых. Здесь величественные вершины соседствуют с древними крепостями, старинными селами и памятниками культуры. Горные тропы открывают виды на густые леса, прозрачные реки и альпийские луга. Весной склоны покрываются ковром из диких цветов, а осенью горы окрашиваются в золотые и багряные оттенки. Карабахские горы — это идеальное место для походов, фотоэкспедиций и знакомства с уникальным наследием Азербайджана, где каждая тропа хранит свою историю. Это место, где каждый поворот тропы открывает не только новые природные виды, но и страницы истории, которые можно почувствовать буквально под ногами.",
    },
    {
      img: LankaranNature,
      descImgMain: LankaranGizilMain,
      DescFirstHeydar: LankaranGizilDesc,
      id: 62,
      special: "nature",
      specialization: "nature",
      name: "Gizil Aghaj National Park (Gizil Aghaj Milli Parkı)",
      openClose: "Круглосуточно",
      timeBuild: "Основан в 1929 году",
      adres: "Lənkəran rayonu, Азербайджан",
      cost: "Вход бесплатный",
      rooms: "Болотные территории, пляжи, наблюдение за птицами",
      sayt: "-",
      category: "Lənkəran",
      minihistory:
        "Gizil Aghaj — заповедник с богатой флорой и фауной, важное место для миграции птиц. Здесь можно наблюдать за редкими видами птиц и наслаждаться морским воздухом. В прибрежных зонах можно встретить выхухоль, шакала, кабана и водяную крысу.",
      minihistory2:
        "Год основания: 1929 Заповедник был создан с целью сохранения водно-болотных угодий и редких видов птиц, которые используют эти территории для гнездования, зимовки и отдыха во время миграций. В советское время он входил в список особо охраняемых территорий союзного значения. В 1978 году к заповеднику был присоединён Гызылагачский залив Каспийского моря, что значительно расширило его площадь.",
      titleDescitemTop: "Gizil Aghaj — дом для птиц и природы",
      titleDescitemTopOpis:
        "Этот заповедник — одна из ключевых природных территорий Азербайджана с уникальной экосистемой. Гызылагачский государственный заповедник (Gizil Aghaj State Reserve) — один из старейших и крупнейших природных заповедников Азербайджана, расположенный на юго-востоке страны, в Лянкяранском районе, на побережье Каспийского моря. Он занимает обширную территорию, включающую болота, озёра, прибрежные леса и пастбища, и является важным пунктом на миграционном пути перелётных птиц.  В 2001 году часть территории получила статус национального парка (Gizil Aghaj National Park), чтобы привлечь внимание к экотуризму и охране природы. В водах заповедника встречаются каспийский сазан, кефаль, лещ, судак, а также осетровые. Озёра и заливы служат местом размножения многих рыб, что делает этот регион важным для рыболовства. На территории запрещена охота и рыбалка без разрешения. Для защиты экосистемы проводятся международные программы с WWF и BirdLife International. Заповедник включён в список Рамсарских угодий (всемирно значимых водно-болотных территорий).",
    },
    {
      img: YanardagNature,
      descImgMain: YanardagMainNature,
      DescFirstHeydar: YanardagDescNature,
      id: 63,
      special: "nature",
      specialization: "nature",
      name: "Yanar Dag (Янардаг)",
      openClose: "Ежедневно: 09:00–22:00",
      timeBuild: "Природное явление",
      adres: "село Мехмедли, Апшеронский район, Азербайджан.",
      cost: "Вход: 3 AZN",
      rooms: "Смотровые площадки, музей",
      sayt: "-",
      category: "Bakı",
      minihistory:
        "Янардаг — холм, на склоне которого из-под земли вырывается пламя. Огонь горит веками и не гаснет ни при дожде, ни при ветре. ",
      minihistory2:
        "В древности Янар Даг считался священным местом у зороастрийцев — приверженцев религии, где огонь был символом чистоты и вечности. Путешественники и торговцы на Великом шёлковом пути упоминали о «горящей горе Азербайджана» как о чуде природы. Считается, что именно такие огненные явления дали Азербайджану прозвище Страна огней (Odlar Yurdu).",
      titleDescitemTop: "Янардаг — горящая гора",
      titleDescitemTopOpis:
        "Yanar Dag — уникальное место, где природный газ горит прямо из-под земли, создавая мистическую атмосферу. Огонь горит здесь постоянно уже много десятилетий, и его невозможно потушить дождём или снегом. Местные легенды связывают Yanar Dağ с древними зороастрийскими ритуалами поклонения огню. Ученые предполагают, что горение началось много веков назад из-за выхода газа на поверхность, и огонь никогда не угасал. Пламя особенно красиво выглядит в темное время суток. Это одна из главных природных достопримечательностей Азербайджана, включённая в список охраняемых объектов. Рядом есть смотровая площадка и туристический центр с исторической информацией. Вечером или ночью, когда пламя видно наиболее ярко. Yanar Dağ находится на Апшеронском полуострове, примерно в 25 км от центра Баку. Это уникальное природное явление, где из трещин в земле непрерывно вырывается природный газ и горит открытым пламенем. Высота огненной стены достигает 3 метров, а длина — около 10 метров.",
    },
    {
      img: AfrudjaNature,
      descImgMain: AfrudjaMainNature,
      DescFirstHeydar: AfrudjaDescNature,
      id: 64,
      special: "nature",
      specialization: "nature",
      name: "Afurdja Waterfall (Afurdja şəlaləsi)",
      openClose: "Круглосуточно",
      timeBuild: "Природное образование",
      adres: "Quba rayonu, Азербайджан",
      cost: "Бесплатно",
      rooms: "Тропы, зоны отдыха, места для пикника",
      sayt: "-",
      category: "Quba",
      minihistory:
        "Афурджа — один из самых известных и высоких водопадов Азербайджана, расположенный в Кубинском районе, близ села Афурджа. Его высота достигает около 70 метров, что делает его самым высоким водопадом страны. Местность вокруг него входит в список особо охраняемых природных территорий Азербайджана.",
      minihistory2:
        "Исторически район Афурджи известен как часть древней Ширванской земли, которая в разные эпохи находилась под влиянием кавказских албан, Персидской империи и Ширваншахов. Село Афурджа упоминалось в документах ещё в XIX веке как место, окружённое густыми лесами и горными тропами, где останавливались караванные пути местного значения.",
      titleDescitemTop: "Afurdja — водопад в сердце природы",
      titleDescitemTopOpis:
        "Afurdja — это один из самых известных водопадов Азербайджана, расположенный недалеко от села Афурджа в Губинском районе. Он находится в живописном ущелье, окружённом густыми лесами и горами, и является природным памятником республиканского значения. Высота водопада составляет около 75 метров, что делает его одним из самых высоких в стране. Весной и в начале лета, когда тают горные снега и усиливается течение рек, поток особенно мощный, а в засушливый период он становится более спокойным. Это место притягивает как туристов, так и местных жителей благодаря своей красоте, свежему воздуху и возможности для активного отдыха — здесь можно устраивать походы, пикники и фотосессии. Осенью водопад особенно живописен на фоне золотых красок природы.",
    },
    {
      img: QusarSuniNature,
      descImgMain: QusarSuniMain,
      DescFirstHeydar: QusarSuinDesc,
      id: 65,
      special: "nature",
      specialization: "nature",
      name: "Водопад Сусин (Qusar, Laza)",
      openClose: "Круглосуточно, летом и зимой",
      timeBuild: "Природное образование",
      adres: "село Лаза, Гусарский район, Азербайджан",
      cost: "Бесплатно",
      rooms: "Смотровые площадки, тропы, места для пикника",
      sayt: "-",
      category: "Qusar",
      minihistory:
        "Водопад Сусин — одно из самых впечатляющих природных чудес Гусарского района. Территория Гусарского района и особенно село Лаза издавна было населено горскими племенами и кочевниками, которые использовали горные тропы для миграции и торговли. Водопад Сусин, как природный ориентир, играл важную роль в маршрутах этих племён.",
      minihistory2:
        "Зимой он замерзает, превращаясь в гигантскую ледяную стену, а летом окружён зелёными альпийскими лугами. Местные жители села Лаза и окрестных гор веками передают легенды о духах гор, которые, по поверью, охраняют водопад и окружающую природу. Считалось, что эти духи защищают землю от несчастий и наполняют воду в водопаде целительной силой.",
      titleDescitemTop: "Сусин — водопад двух стихий: лед и вода",
      titleDescitemTopOpis:
        "Водопад Сусин расположен в горной деревне Лаза, на высоте более 1300 метров над уровнем моря. Он известен своей сезонной красотой: зимой это настоящее царство льда, привлекающее альпинистов и фотографов, а летом — прохладный оазис среди гор, где шум воды смешивается с пением птиц. Вокруг водопада проходят туристические тропы, ведущие к другим природным достопримечательностям Лазы. Местные жители рассказывают легенды о духах гор, охраняющих этот водопад, а в солнечные дни у его подножия можно увидеть радугу в брызгах воды. В советское время природная красота Сусина привлекла внимание геологов, экологов и туристов. Водопад стал объектом научных исследований и включён в туристические маршруты, способствующие развитию регионального туризма.Развитие туризма: В последние десятилетия село Лаза и водопад Сусин стали популярным туристическим направлением, особенно для любителей экотуризма и активного отдыха. Местные власти и жители предпринимают усилия по сохранению природы и поддержанию экологического баланса.",
    },
    //

    //

    // {
    //   id: 119,
    //   name: "Girgir Waterfall",
    //   special: "nature",
    //   specialization: "waterfall",
    //   adres: "Ismayilli, Azerbaijan",
    //   openClose: "Круглосуточно",
    //   timeBuild: "Природное образование",
    //   cost: "Бесплатно",
    //   rooms: "Водопад, леса, горные тропы",
    //   sayt: "-",
    //   category: "Ismayilli",
    //   minihistory:
    //     "Girgir — мощный и красивый водопад в горах Исмаиллы, окружённый густыми лесами и скалами.",
    //   minihistory2:
    //     "Идеальное место для активного отдыха, фотографий и наслаждения природой.",
    // },
    {
      img: BeshbarmagNature,
      descImgMain: BeshbarmagMainNature,
      DescFirstHeydar: BeshbarmagDescNature,
      id: 66,
      special: "nature",
      specialization: "nature",
      name: "Beshbarmag Mountain",
      openClose: "Круглосуточно",
      timeBuild: "Древняя скала с легендами",
      adres: "Сальянский район, Азербайджан",
      cost: "Бесплатно",
      rooms: "Горная скала, туристические тропы",
      sayt: "-",
      category: "Bakı",
      minihistory:
        "Название «Бешбармаг» переводится с азербайджанского как «Пять пальцев». Гора получила такое имя из-за характерной формы вершины, которая напоминает руку с пятью пальцами, устремлённую вверх.Бешбармаг — это скалистая гора, расположенная в северо-восточной части Азербайджана, недалеко от города Каспийска и побережья Каспийского моря, в Сахтала-дере.",
      minihistory2:
        "Гора Бешбармаг издревле имела важное значение для местных племён и народов, живших на территории нынешнего Азербайджана и Кавказа. Её считали священным местом, объектом поклонения и почитания духов предков.",
      titleDescitemTop: "Beshbarmag — гора с пальцами истории",
      titleDescitemTopOpis:
        "Уникальная природная достопримечательность с богатой мифологией и потрясающими панорамами. В окрестностях Бешбармага были обнаружены древние захоронения, каменные изваяния и артефакты, свидетельствующие о том, что это место было центром религиозных обрядов и культовых практик в древности. Религиозное значение: В средние века гора стала объектом паломничества. На её склонах и у подножия сохранились остатки древних храмов и святынь, которые служили местом поклонения для различных конфессий. Природное богатство: Помимо культурного и исторического значения, гора Бешбармаг привлекает туристов своей уникальной природой, живописными пейзажами и возможностями для пеших прогулок и восхождений.Современное значение: Сегодня гора Бешбармаг — популярное туристическое место в Азербайджане. Она сочетает в себе природную красоту, культурное наследие и мифологическую атмосферу, привлекая путешественников и исследователей.",
    },
    {
      img: QusarLazaNature,
      descImgMain: QusarLazaMainNature,
      DescFirstHeydar: QusarLazaDescNature,
      id: 67,
      special: "nature",
      specialization: "nature",
      name: "Laza Waterfall",
      openClose: "Круглосуточно",
      timeBuild: "Природное образование",
      adres: "Гусарский район, Азербайджан",
      cost: "Бесплатно",
      rooms: "Каскадные водопады, горные тропы",
      sayt: "-",
      category: "Qusar",
      minihistory:
        "Лазинские водопады — одно из природных чудес Азербайджана, расположенное в Гусарском районе, в горах Большого Кавказа. Эти каскадные водопады веками служили источником вдохновения для местных жителей и путешественников благодаря своей красоте и силе природы.",
      minihistory2:
        "Исторически, район Лазы был населен с древних времен. Здесь жили различные горные племена, для которых водопады и горные реки имели не только практическое значение, но и духовное — вода считалась священной стихией, а места с сильной природной энергией часто обрастали легендами и мифами.",
      titleDescitemTop: "Laza — зимняя сказка в горах",
      titleDescitemTopOpis:
        "Сегодня Лазинские водопады — популярное место для эко-туризма и активного отдыха. Туристы приезжают сюда, чтобы насладиться живописными пейзажами, пройтись по горным тропам, ощутить силу воды и погрузиться в атмосферу спокойствия и первозданной природы. В зимние месяцы водопады превращаются в величественные ледяные образования, что привлекает альпинистов и туристов. Местные жители верят, что вокруг водопадов обитают духи гор, охраняющие природу и поддерживающие гармонию в этом краю.",
    },
    {
      img: MaralgolNature,
      descImgMain: MaralgolMainNature,
      DescFirstHeydar: MaralgolDescNature,
      id: 68,
      special: "nature",
      specialization: "nature",
      name: "Maralgol Lake",
      openClose: "Круглосуточно",
      timeBuild: "Природное образование",
      adres: "Рядом с Goygol, Азербайджан",
      cost: "Бесплатно",
      rooms: "Озеро, леса, горные ландшафты",
      sayt: "-",
      category: "Gəncə",
      minihistory:
        "Марлаголь — живописное высокогорное озеро, расположенное в Гусарском районе Азербайджана, в самом сердце Большого Кавказа. Это место привлекает туристов своей чистой, прозрачной водой и удивительной природной красотой.",
      minihistory2:
        "Исторически Марлаголь был важным объектом для местных племен и жителей горных селений, которые использовали озеро как источник пресной воды и место для рыбалки. Вокруг озера сохранились следы древних поселений, что говорит о его значении в жизни людей с давних времен. Легенды и предания связывают Марлаголь с мифами о духах гор и волшебных существах, охраняющих природные богатства региона. Озеро часто служило местом для ритуалов и обрядов, направленных на привлечение благополучия и защиты.",
      titleDescitemTop: "Maralgol — тихая красота Кавказа",
      titleDescitemTopOpis:
        "Марлаголь — это высокогорное озеро в Гусарском районе Азербайджана. Оно известно своей чистой водой и живописными окрестностями. Озеро окружено горами и лесами, что делает его отличным местом для отдыха, рыбалки и прогулок на природе. Туристы приезжают сюда, чтобы насладиться тишиной и красотой природы вдали от городской суеты. Место, где можно насладиться тишиной, чистым воздухом и живописными видами вдали от городского шума. Озеро расположено на высоте около 1900 метров над уровнем моря. Вода в озере холодная и кристально чистая, что создаёт уникальную экосистему.Вокруг озера можно встретить редкие виды растений и птиц. Место популярно у туристов, которые любят пешие походы и экотуризм. Вокруг озера оборудованы площадки для пикников и кемпинга. Летом здесь комфортно отдыхать благодаря прохладному горному воздуху, а зимой окрестности покрываются снегом, создавая сказочную атмосферу.",
    },
    {
      img: QabalaNature,
      descImgMain: QabalaYeddiMainNature,
      DescFirstHeydar: QabalaYeddiDescNature,
      id: 69,
      special: "nature",
      specialization: "nature",
      name: "Yeddi Gozel Waterfalls",
      openClose: "Круглосуточно",
      timeBuild: "Природное образование",
      adres: "Габала, Азербайджан",
      cost: "Бесплатно",
      rooms: "Семь каскадов, лесные тропы",
      sayt: "-",
      category: "Gabala",
      minihistory:
        "Yeddi Gözəl — это серия из семи живописных каскадных водопадов, расположенных в горах Габалы. Название переводится как 'Семь Красавиц', и связано с местными легендами о прекрасных девушках, которые по преданию жили в этих местах.",
      minihistory2:
        "Водопады окружены густыми лесами и горными тропами, что делает это место популярным среди туристов, любителей треккинга и фотолюбителей. Каждый из семи водопадов имеет свою уникальную красоту и атмосферу, а прогулка по маршруту позволяет насладиться природой и свежим горным воздухом. Особенно красиво здесь весной и летом, когда вода полноводна, а вокруг всё цветёт и зелено..",
      titleDescitemTop: "Yeddi Gozel — магия семи водопадов",
      titleDescitemTopOpis:
        "Каждый из семи водопадов имеет свою особенность и красоту, объединённые в единый природный ансамбль. Этот природный комплекс — идеальное место для тех, кто хочет уйти от городской суеты и погрузиться в атмосферу живой природы. Здесь можно устроить пикник, пройтись по горным тропам, сделать много красивых фотографий и просто насладиться звуками воды и леса. Yeddi Gözəl отлично подойдёт для активного отдыха и семейных прогулок, а благодаря разнообразию ландшафтов и пейзажей — каждый найдёт здесь что-то для себя. Это идеальное место для любителей активного отдыха и природы — пешие прогулки, фотосессии, пикники и просто созерцание прекрасных горных пейзажей. Весной и летом водопады особенно полноводны, а осенью их окружает золотая листва, создавая волшебную атмосферу. Местные экскурсии предлагают узнать больше об истории и культуре региона, а также услышать захватывающие рассказы о легендах Семь Красавиц.",
    },
    {
      img: QizilBashNature,
      descImgMain: QizilbashMainNature,
      DescFirstHeydar: QizalbashDescNature,
      id: 70,
      special: "nature",
      specialization: "nature",
      name: "Gizilbash Forest",
      adres: "Shamakhi, Azerbaijan",
      openClose: "Круглосуточно",
      timeBuild: "Природный лесной массив",
      cost: "Бесплатно",
      rooms: "Хвойные и лиственные леса, пешеходные маршруты",
      sayt: "-",
      category: "Şamaxı",
      minihistory:
        "Gizilbash — это название, которое давали воинам и сторонникам династии Сефевидов, носивших красные головные уборы ('гызыл' — красный, 'баш' — голова).",
      minihistory2:
        "Лес получил своё имя из-за того, что в этих местах в XVI–XVII веках часто располагались лагеря воинов-гызылбашей, когда они передвигались по Кавказу. Существует легенда, что часть войск Сефевидов скрывалась в этих лесах после сражений, а некоторые поселились здесь навсегда.",
      titleDescitemTop: "Gizilbash Forest — тишина и история в сердце природы",
      titleDescitemTopOpis:
        "Gizilbash Forest — это живописный горный лес в Шамахинском районе, сочетающий красоту природы и историческое наследие. Здесь растут вековые дубы, грабы и буки, а в тени леса прячутся небольшие ручьи и водопады. Лес особенно красив весной и осенью, когда краски природы создают сказочный пейзаж. Место идеально подходит для пеших прогулок, пикников и фотосессий. Своё название лес получил от воинов-гызылбашей, сторонников династии Сефевидов, которые в XVI–XVII веках останавливались здесь во время походов по Кавказу. Это не просто природный уголок — это живая история, окружённая тишиной и свежим воздухом.",
    },

    {
      img: TangiyatiNature,
      descImgMain: TangiyatiMainNature,
      DescFirstHeydar: TangiyatiDescNature,
      id: 71,
      special: "nature",
      specialization: "nature",
      name: "Tengyalti Waterfall",
      adres: "Lerik, Azerbaijan",
      openClose: "Круглосуточно",
      timeBuild: "Природное образование",
      cost: "Бесплатно",
      rooms: "Водопад, леса, горы",
      sayt: "-",
      category: "Lerik",
      minihistory:
        " Село Тенгялты известно с древних времён как часть горных маршрутов местных кочевников. По местной легенде, водопад считался 'местом очищения': перед важными событиями жители приходили сюда, чтобы умыться и 'смыть' тревоги.",
      minihistory2:
        "Считается, что вода водопада придаёт силы и здоровье. Есть романтическая история о влюблённой паре, которые встречались у водопада, несмотря на сопротивление семей. После их женитьбы водопад стали называть «местом верности».",
      titleDescitemTop: "Tengyalti Waterfall — жемчужина лесов Лерика",
      titleDescitemTopOpis:
        "Tengyalti Waterfall расположен в живописных горах Лерика, среди густых лесов и чистого горного воздуха. Вода стремительно падает с высоты, образуя прохладный туман, а вокруг слышны только звуки природы. Весной и летом водопад полноводен, окружён цветущей зеленью, а осенью — золотыми и багряными листьями. Здесь можно прогуляться по тропам, устроить пикник или просто насладиться тишиной и красотой дикой природы. Местные жители любят рассказывать легенды о древних путниках, которые находили здесь отдых и силу перед продолжением своего пути.",
    },

    //    {
    //   id: 124,
    //   name: "Girgir Mountain",
    //   special: "nature",
    //   specialization: "mountain",
    //   adres: "Ismayilli, Azerbaijan",
    //   openClose: "Круглосуточно",
    //   timeBuild: "Древние горы",
    //   cost: "Бесплатно",
    //   rooms: "Горные тропы, леса, виды",
    //   sayt: "-",
    //   category: "Ismayilli",
    //   minihistory:
    //     "Гора Girgir — часть Кавказского хребта, покрыта хвойными лесами, популярна среди туристов и альпинистов.",
    //   minihistory2:
    //     "Предлагает отличные маршруты для треккинга и живописные панорамные виды на окрестности.",
    // }, \\qazwz\qawqa\zw\wzqw

    // Park
    {
      img: HighPark,
      descImgMain: HighParkMain,
      DescFirstHeydar: HighParkFunikler,
      DescSecondImg: HighParkFunikler,
      id: 65,
      special: "Парки",
      specialization: "Парки",
      name: "Highland Park",
      openClose: "Круглосуточна",
      timeBuild: "построен с 1935 г., реконструирован в 2011–2013 гг.",
      adres: "Highland Park/Alley of Martyrs",
      cost: "1 AZN",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Bakı",
      minihistory:
        "Вот подробный обзор Highland Park (Нагорный парк / Dağüstü Park) и смотровой площадки — одного из самых впечатляющих и значимых мест в Баку:",
      minihistory2:
        "Он предлагает изумительные панорамные виды на Каспийское море, Пламенные башни, набережную Баку, Старый город (Ичери‑Шехер), дворец Ширваншахов и бухту",

      titleDescitemTop: "Нагорный парк — сердце Баку с видом в вечность",
      titleDescitemTopOpis:
        "Высоко над шумными улицами, где город сменяет суету на тишину, раскинулся Нагорный парк — живописное и символичное место, где история, природа и архитектура переплетаются в одной гармонии. Здесь дыхание Баку становится особенно лёгким, а взгляд — особенно дальним. Это не просто парк. Это — вид на душу города.Прогуливаясь по тенистым аллеям Нагорного парка, ты словно попадаешь в другой Баку — спокойный, созерцательный, наполненный светом и смыслом. Здесь растут стройные кипарисы, пальмы и ухоженные клумбы, поют птицы, шепчет ветер… . С каждым шагом ты поднимаешься выше — к самой вершине города, где тебя встречают лучшие панорамы столицы: сверкающий Каспий, Приморский бульвар, Пламенные башни, Старый город и бескрайнее небо.",
      titleDescitemBottom: "Бакинский фуникулёр — путь в небо над городом",
      titleDescitembottomOpis:
        "Представь: шумный Баку остаётся внизу, а ты плавно поднимаешься всё выше и выше, будто скользишь по невидимой нити в небеса. Перед тобой открываются завораживающие панорамы города, Каспий переливается золотом заката, а сердце замирает от красоты. Всё это — Бакинский фуникулёр, единственный в своём роде в Азербайджане и настоящий символ романтики, ностальгии и духа времени. Бакинский фуникулёр был открыт ещё в 1960 году и стал первым в Закавказье. С тех пор он не раз модернизировался, но сохранил свою душу — тот самый неспешный ритм, мягкое движение и завораживающее ощущение перехода из повседневности в волшебство. Во время подъёма кажется, что ты перемещаешься сквозь времена — от исторических улиц центра до мемориальной Аллеи Шехидов, туда, где воздух чище, а мысли светлее.",
    },
    {
      img: GoyGolLake,
      descImgMain: GoyGolMain,
      DescFirstHeydar: GoyGolDesc,
      id: 66,
      special: "Парки",
      specialization: "Парки",
      name: "Göygöl National Park (Göygöl Milli Parkı)",
      openClose: "Ежедневно: 09:00–18:00",
      timeBuild: "Основан в 2008 году",
      adres: "Gəncə yaxınlığında, Азербайджан",
      cost: "Вход: 2 AZN для взрослых, 1 AZN для детей",
      rooms: "Тропы для прогулок, смотровые площадки, зоны для пикника",
      sayt: "-",
      category: "Gəncə",
      minihistory:
        "Göygöl — горное озеро с кристально чистой водой, образованное в результате землетрясения в XVIII веке.",
      minihistory2:
        "Вода настолько прозрачная, что отражает весь горный пейзаж, а вокруг проложены тропы для прогулок.",
      titleDescitemTop: "Göygöl — жемчужина Кавказских гор",
      titleDescitemTopOpis:
        "Göygöl — это чистейшее озеро в национальном парке с хвойными лесами и живописными тропами. Идеальное место для пеших прогулок, фотосессий и отдыха на природе.",
    },
  ];

  const [season, setSeason] = useState([]);

  const addToDesc = (product) => {
    setSeason([{ ...product, postId: 1 }]);
  };

  const SeasonData = [
    {
      id: 1,
      img: GS,
      postId: 1,
      name: "Габала",
      title: "Чeм интересен путешествие в Габалу",
    },
    { id: 2, img: NS, postId: 1, name: "Набран" },
    { id: 3, img: SHS, postId: 1, name: "Шеки" },
    { id: 4, img: SHW, postId: 3, name: "Шахдаг" },
    { id: 5, img: TufWin, postId: 3, name: "Туфандаг" },
    { id: 6, img: HinWin, postId: 3, name: "Хыналыг" },
    { id: 7, img: SS, postId: 2, name: "Шеки" },
    { id: 8, img: SG, postId: 2, name: "Гах" },
    { id: 9, img: Ls, postId: 2, name: "Лерик" },
  ];

  const [language, setLanguage] = useState("az");
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <MyContext.Provider
      value={{
        handleLanguageChange,
        language,
        translations,
        punktMenu,
        museums,
        traveled,
        SeasonData,
        addToDesc,
        season,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext должен использоваться внутри MyProvider");
  }
  return context;
};

//
