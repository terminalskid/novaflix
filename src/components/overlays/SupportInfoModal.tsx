import { useTranslation } from "react-i18next";

import { FancyModal } from "./Modal";
import { Button } from "../buttons/Button";
import { MwLink } from "../text/Link";

export function SupportInfoModal({ id }: { id: string }) {
  const { t } = useTranslation();

  return (
    <FancyModal id={id} title={t("home.support.title")} size="md">
      <div className="space-y-4">
        <p className="text-type-secondary">{t("home.support.explanation")}</p>
        <p className="text-type-secondary">
          {t("home.support.explanation2")}{" "}
          <MwLink url="https://discord.gg/7z6znYgrTG">
            {t("home.support.discord")}
          </MwLink>
        </p>

        <div className="space-y-3">
          <span className="text-center flex justify-center whitespace-nowrap items-center">
            <Button
              theme="purple"
              onClick={() =>
                window.open("https://rentry.co/nnqtas3e", "_blank")
              }
            >
              {t("home.support.donate")}
            </Button>
          </span>
        </div>

        <div className="text-xs text-type-dimmed text-center">
          {t("home.support.thankYou")}
        </div>

        {/* Donation Addresses */}
        <div className="text-type-secondary">
          <p>Bitcoin: bc1q6exg29wc579ken9hg90d3l5es9j89mv52tftss</p>
          <p>Litecoin: LaWQM2YU3oawaiYdRrYkUmHdh5G7VaZu3T</p>
          <p>Ethereum: 0x1382D736fe516559861d90d0d009D81bb5251e0B</p>
          <p>USDT (ETH): 0x1382D736fe516559861d90d0d009D81bb5251e0B</p>
          <p>Dogecoin: DPQNZu28DLPq4RkmNVpAEfYbGcjuwFsin3</p>
          <p>XRP: r4HnLKyXYA3GMMiTsqqifadsHpGuH6f8rt</p>
          <p>Solana: 6kpPGZpLzZHWGoMR5BTF8Zotgbh5cDZm93DiguJ7kAeb</p>
          <p>Shiba Inu (SHIB): 0x1382D736fe516559861d90d0d009D81bb5251e0B</p>
        </div>
      </div>
    </FancyModal>
  );
}
