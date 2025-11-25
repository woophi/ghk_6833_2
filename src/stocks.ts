import gazpImg from './assets-stocks/gazp.png';
import goldImg from './assets-stocks/gold.png';
import headImg from './assets-stocks/hh.png';
import lukolImg from './assets-stocks/lukol.png';
import mechelImg from './assets-stocks/mechel.png';
import neftImg from './assets-stocks/neft.png';
import nikelImg from './assets-stocks/nikel.png';
import novatekImg from './assets-stocks/novatek.png';
import rosneftImg from './assets-stocks/rosneft.png';
import sberImg from './assets-stocks/sber.png';
import tbankImg from './assets-stocks/tbank.png';
import vtbImg from './assets-stocks/vtb.png';
import x5Img from './assets-stocks/x5.png';
import yandexImg from './assets-stocks/yandex.png';

export const TICKER_TO_IMAGE: Record<string, string> = {
  GAZP: gazpImg,
  ROSN: rosneftImg,
  YDEX: yandexImg,
  SBER: sberImg,
  LKOH: lukolImg,
  T: tbankImg,
  PLZL: goldImg,
  TRNFP: neftImg,
  GMKN: nikelImg,
  MTLR: mechelImg,
  NVTK: novatekImg,
  VTBR: vtbImg,
  X5: x5Img,
  HEAD: headImg,
};
