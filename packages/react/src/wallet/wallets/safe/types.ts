import { WalletConfig } from "@thirdweb-dev/react-core";
import { SafeWallet } from "@thirdweb-dev/wallets";

export type SafeWalletConfigOptions = {
  personalWallets?: WalletConfig<any>[];
};

export type SafeWalletConfig = WalletConfig<SafeWallet>;
