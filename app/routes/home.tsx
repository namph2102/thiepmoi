import HomePage from "~/src/pages/home/home-page";
import type { Route } from "./+types/home";
import { RootLayout } from "~/src/layouts/root-layout";
import { generateMeta } from "~/src/helper/genarate-meta";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Thiệp Mời" },

    {
      name: "keywords",
      content: "thiệp mời, thiệp mời đám cưới, thiệp mời đám cưới đẹp",
    },
  ];
}

export default function Home() {
  const fullpath = import.meta.env.VITE_HOSTNAME;
  const meta = generateMeta({
    title: "Thiệp Mời",
    description:
      "Tạo thiệp mời đám cưới đẹp và chuyên nghiệp. Thiết kế thiệp mời online với nhiều mẫu đẹp, tùy chỉnh thông tin và chia sẻ dễ dàng.",
    currentUrl: fullpath,
  });
  return (
    <RootLayout meta={meta}>
      <HomePage />
    </RootLayout>
  );
}
