import { BodyNode, DomNode, el } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import AirdropContract from "./contracts/AirdropContract";
import FirstcomeAirdropContract from "./contracts/FirstcomeAirdropContract";
import InjeolmiContract from "./contracts/InjeolmiContract";
import InjeolmiPoolContract from "./contracts/InjeolmiPoolContract";
import InjeolmiPriceContract from "./contracts/InjeolmiPriceContract";
import Wallet from "./klaytn/Wallet";
import i18n from 'i18next';

import tranEn from './Locales/Files/en.json';
import tranKo from './Locales/Files/ko.json';

const resources = {
  en: { translation: tranEn },
  ko: { translation: tranKo },
}
const userLanguage = window.navigator.language;

// i18n.use(initReactI18next).init({
//   resources,
//   lng: localStorage.getItem('language') || userLanguage || 'en',
//   fallbackLng: 'en',
//   keySeparator: false,
//   interpolation: {
//     escapeValue: false
//   }
// })

export default i18n;

(async () => {
  let priceDisplay: DomNode;
  let airdropDisplay: DomNode;
  let firstcomeAirdropEvent: DomNode;
  let ijmPrice: BigNumber;

  let buyInput: DomNode<HTMLInputElement>;
  let buyResult: DomNode;

  let sellInput: DomNode<HTMLInputElement>;
  let sellResult: DomNode;

  let carousel: DomNode<HTMLImageElement>;
  let index = 0;

  BodyNode.append(
    /*** 타이틀 설명 , 프로젝트의 시작 *****/
    el("h1", "내사랑 치키니"),
    el(
      "p",
      "누구나 좋아하는 치키니. 노예로 끌려와 닭찌꺼기를 튀겨서 먹었다는 서민의 원조. 치키니는 누구나 좋아하는 코인입니다. 치킨은 항상 반반을 시키자. \n",
      el("a", "http://chickeness.com", {
        href: "http://chickeness.com",
        target: "_blank",
      }),
      ".\n치킨집 회원들은 \"치맥이\" "
    ),


    /*** 밈 컨셉 *****/
    el("h2", "치키니"),
    el("img.logo", { src: "/images/main_banner.png", height: "240" }),
    el(
      "p",
      '치키니는 모든이가 좋아합니다. 양념이 골고루 묻어나도록 도와주세요~  코인 피로에 너무 많이 지치신 여러분을 위해서 만들었습니다. 차라리 내가 튀긴다. '
    ),

    /*** 밈 알고리즘 *****/
    el("h3", "치키니가 배달되는 방법"),
    el(
      "p",
      "전송 시 8% 떼어냅니다 -> 7%는 치맥이들에게 골고루 나눠집니다, 1%는 치킨집에 팁으루 (팁은 이벤트, 에드, 기부, 개발팀 식량으로 쓰입니다 )"
    ),
    el(
      "p",
      "치키니는 클레이튼 밈 토큰입니다. 따라서 클레이튼 지갑",
      el("a", "카이카스 지갑", {
        href: "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi",
        target: "_blank",
      }),
      "이 필요합니다."
    ),
    el(
      ".links",
      el("a", "치키니 카이카스 지갑에 추가", {
        click: () =>
          Wallet.addToken(
            InjeolmiContract.address,
            "IJM",
            8,
            "https://raw.githubusercontent.com/ricecakemill/rcm-app/main/docs/images/injeolmi.png"
          ),
      }),
      // el("span.danger", "(클립은 영원히 지원 계획이 없습니다.)"),
      "\n",
      el(
        "a",
        "스마트 콘트랙트 주소: 0x9CFc059F64D664F92f3d0329844B8ccca4E5215B",
        {
          href: "https://scope.klaytn.com/token/0x9CFc059F64D664F92f3d0329844B8ccca4E5215B",
          target: "_blank",
        }
      ),
      "\n",
      // el("a", "소스 코드", {
      //   href: "https://github.com/ricecakemill/injeolmi",
      //   target: "_blank",
      // }),
      // "\n",
      el("a", "차트 보기", {
        href: "https://dexata.kr/?tokenA=0x9cfc059f64d664f92f3d0329844b8ccca4e5215b&tokenB=0x0000000000000000000000000000000000000000",
        target: "_blank",
      })
    ),

    /*** 밈 가격 에어드롭 *****/
    el(
      ".card",
      el("h5", "치키니 가격"),
      el("h6", (priceDisplay = el("span.price", "...")), " KLAY\n"),
      el("h5", "에어드롭 물량"),
      el("h6", (airdropDisplay = el("span.price", "...")), " CHK\n"),
      (firstcomeAirdropEvent = el(".event"))
    ),

    
    /*** 밈 거래 *****/
    el("h3", "클레이로 치키니 사기"),
    el("p", "치키니를 살때 양념소스때문에 8%를 적게 받습니다. 양념소스가 많이 쌓이면 치키니NFT를 살 수 있는 권한이 부여됩니다"),
    el(
      ".form",
      (buyInput = el(
        "input",
        { placeholder: "KLAY 수량" },
        {
          keyup: () => {
            const value = utils.parseEther(buyInput.domElement.value);
            buyResult
              .empty()
              .appendText(
                `대략 ${utils.formatEther(
                  value.mul(utils.parseEther("1")).div(ijmPrice).mul(9).div(10)
                )} CHK`
              );
          },
        }
      )),
      (buyResult = el(".result")),
      el("button", "사기", {
        click: async () => {
          await InjeolmiPoolContract.swapToIJM(
            utils.parseEther(buyInput.domElement.value)
          );
        },
      })
    ),

    el("h3", "치키니 클레이로 팔기"),
    el("p", "치키니가 이미 식어서 못먹기 때문에 8%를 적게 받습니다."),
    el(
      ".form",
      (sellInput = el(
        "input",
        { placeholder: "CHK 수량" },
        {
          keyup: () => {
            const value = utils.parseEther(sellInput.domElement.value);
            sellResult
              .empty()
              .appendText(
                `대략 ${utils.formatEther(
                  value.mul(ijmPrice).div(utils.parseEther("1")).mul(9).div(10)
                )} KLAY`
              );
          },
        }
      )),
      (sellResult = el(".result")),
      el("button", "팔기", {
        click: async () => {
          await InjeolmiPoolContract.swapToKlay(
            utils.parseUnits(sellInput.domElement.value, 8)
          );
        },
      })
    ),

    /*** 밈 컨텐츠 NFT *****/
    el("h2", "치키니 박물관"),
    el(
      "p",
      "치키니 코인 이야기의 자산들이 보관되어 있습니다.\n "
    ),
    el("a", "박물관 주소\nhttps://opensea.io/chickeny", { href: "https://opensea.io/chickeny", target: "_blank" }),

    el("h2", "CHICKENY NFT"),
    el(
      "p",
      "CHICKENY NFT(KIP-37) 는 총 1000개가 발행되었습니다. 순수 2차 창작물로 발행되며 만든 이들에게 발행된 NFT를 전량 전달합니다. CHICKENY NFT는 어디든 배포가능합니다."
    ),
    el(
      ".carousel-container",
      (carousel = el(
        ".carousel",
        el("img.art", { src: "/images/nft/nft.jpg" }),
        el("img.art", { src: "/images/nft/01.jpg" }),
        el("img.art", { src: "/images/nft/02.jpg" }),
        el("img.art", { src: "/images/nft/03.jpg" }),
        el("img.art", { src: "/images/nft/04.jpg" }),
        el("img.art", { src: "/images/nft/05.jpg" }),
        el("img.art", { src: "/images/nft/06.jpg" }),
        el("img.art", { src: "/images/nft/07.jpg" }),
        el("img.art", { src: "/images/nft/09.jpg" }),
        el("img.art", { src: "/images/nft/10.jpg" }),
        el("img.art", { src: "/images/nft/11.jpg" }),
        el("img.art", { src: "/images/nft/12.jpg" }),
        el("img.art", { src: "/images/nft/13.jpg" }),
        el("img.art", { src: "/images/nft/14.jpg" }),
        el("img.art", { src: "/images/nft/15.jpg" }),
        el("img.art", { src: "/images/nft/16.jpg" }),
        el("img.art", { src: "/images/nft/17.jpg" }),
        el("img.art", { src: "/images/nft/18.jpg" }),
        el("img.art", { src: "/images/nft/19.jpg" }),
        el("img.art", { src: "/images/nft/20.jpg" }),
        el("img.art", { src: "/images/nft/21.jpg" }),
        el("img.art", { src: "/images/nft/22.jpg" }),
        el("img.art", { src: "/images/nft/23.jpg" }),
        el("img.art", { src: "/images/nft/24.jpg" }),
        el("img.art", { src: "/images/nft/25.jpg" }),
        el("img.art", { src: "/images/nft/26.jpg" }),
        el("img.art", { src: "/images/nft/27.jpg" }),
        el("img.art", { src: "/images/nft/29.jpg" }),
        el("img.art", { src: "/images/nft/29.jpg" }),
        el("img.art", { src: "/images/nft/30.jpg" }),
        el("img.art", { src: "/images/nft/31.jpg" }),
        el("img.art", { src: "/images/nft/32.jpg" }),
        el("img.art", { src: "/images/nft/33.jpg" }),
        el("img.art", { src: "/images/nft/34.jpg" })
      ))
    ),
    el("button.prev", "< 이전", {
      click: () => {
        if (index === 0) return;
        index -= 1;
        carousel.style({
          transform: `translate3d(-${560 * index}px, 0, 0)`,
        });
      },
    }),
    el("button.next", "다음 >", {
      click: () => {
        if (index === 25) return;
        index += 1;
        carousel.style({
          transform: `translate3d(-${560 * index}px, 0, 0)`,
        });
      },
    }),

    
    /*** 밈 게임 *****/
    el("h2", "치키니 팬게임"),
    el("p", "치매기들이 만든 치키니 팬게임입니다."),
    el("img", { src: "/images/game/main.png", height: "300" }),
    el("a.game-link", "플래피 치키니", {
      href: "https://flappy-injeolmi.netlify.app/",
      target: "_blank",
    }),


    /*** 밈 커뮤니티 *****/
    el(
      "footer",
      el("a", "트위터", {
        href: "https://twitter.com/chickeny",
        target: "_blank",
      }),
      "\n",
      el("a", "오카방 (오픈 카카오톡 방)", {
        href: "https://open.kakao.com/o/g1nYzIHd",
        target: "_blank",
      }),
      "\n",
      el("img", { src: "/images/thankyou.gif", height: "107.5" })
    )
  );

  const refresh = async () => {
    ijmPrice = await InjeolmiPriceContract.price();
    priceDisplay.empty().appendText(utils.formatEther(ijmPrice));
    const airdropBalance = await InjeolmiContract.balanceOf(
      AirdropContract.address
    );
    airdropDisplay.empty().appendText(utils.formatUnits(airdropBalance, 8));

    // 이벤트 진행중?
    const owner = await Wallet.loadAddress();
    if (owner !== undefined) {
      const firstcomeAirdropBalance = await InjeolmiContract.balanceOf(
        FirstcomeAirdropContract.address
      );
      const airdropAmount = await FirstcomeAirdropContract.airdropAmount();
      if (firstcomeAirdropBalance.gte(airdropAmount)) {
        const season = await FirstcomeAirdropContract.season();
        const dropped = await FirstcomeAirdropContract.dropped(season, owner);
        if (dropped === true) {
          firstcomeAirdropEvent
            .empty()
            .appendText("선착순 반값 치키니 이벤트 참여 완료");
        } else {
          firstcomeAirdropEvent.empty().append(
            el("h5", "★☆ 선착순 반값 치키니 이벤트 진행중! ☆★"),
            el("a", "치키니 받기", {
              click: async () => {
                await FirstcomeAirdropContract.airdrop();
              },
            })
          );
        }
      }
    }
  };
  setInterval(() => refresh(), 2000);

  if ((await Wallet.connected()) !== true) {
    await Wallet.connect();
  }
})();
