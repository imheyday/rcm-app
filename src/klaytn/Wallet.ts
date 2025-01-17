import { BigNumber } from "@ethersproject/bignumber";
import EventContainer from "eventcontainer";
import ExtWallet from "./ExtWallet";

class Wallet extends EventContainer {

    constructor() {
        super();
        this.checkConnected();
    }

    private async checkConnected() {
        if (await this.connected() === true) {
            this.fireEvent("connect");
        }
    }

    public async loadAddress(): Promise<string | undefined> {
        if (ExtWallet.installed === true) {
            return await ExtWallet.loadAddress();
        }
    }

    public async loadBalance(): Promise<BigNumber | undefined> {
        if (ExtWallet.installed === true) {
            return await ExtWallet.loadBalance();
        }
    }

    public async balanceOf(address: string): Promise<BigNumber | undefined> {
        if (ExtWallet.installed === true) {
            return await ExtWallet.balanceOf(address);
        }
    }

    public async connected() {
        return await this.loadAddress() !== undefined;
    }

    public async connect() {
        if (ExtWallet.installed === true) {
            return await ExtWallet.connect();
        } else {
            if (confirm("카이카스가 필요합니다. 카이카스를 설치하시겠습니까?")) {
                location.href = "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi";
            }
        }
    }

    public async addToken(
        address: string,
        symbol: string,
        decimals: number,
        image: string,
    ) {
        if (ExtWallet.installed === true) {
            ExtWallet.addToken(address, symbol, decimals, image);
        }
    }
}

export default new Wallet();
