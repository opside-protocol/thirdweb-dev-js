import {
  ConfiguredWallet,
  ConnectUIProps,
  useConnect,
} from "@thirdweb-dev/react-core";
import { useEffect, useRef } from "react";

type HeadlessConnectUIProps = ConnectUIProps & {
  configuredWallet: ConfiguredWallet;
};

export const HeadlessConnectUI = ({
  close,
  show,
  done,
  configuredWallet,
}: HeadlessConnectUIProps) => {
  const connect = useConnect();
  const prompted = useRef(false);

  useEffect(() => {
    if (prompted.current) {
      return;
    }
    prompted.current = true;

    (async () => {
      try {
        close();
        await connect(configuredWallet);
        done();
      } catch (e) {
        close();
        console.error(e);
      }
    })();
  }, [configuredWallet, show, connect, close, done]);

  return null;
};
