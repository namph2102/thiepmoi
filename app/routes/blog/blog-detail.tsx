import { RootLayout } from "~/src/layouts/root-layout";
import type { Route } from "./+types/blog-detail";
import { generateMeta } from "~/src/helper/genarate-meta";
export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Blog Detail",
    },
  ];
}
export default function BlogDetail() {
  const meta = generateMeta({
    title: "Thiệp Mời blog detail",
    description:
      "Tạo thiệp mời đám cưới đẹp và chuyên nghiệp. Thiết kế thiệp mời online với nhiều mẫu đẹp, tùy chỉnh thông tin và chia sẻ dễ dàng.",
  });
  return <RootLayout meta={meta}>blog detail</RootLayout>;
}
