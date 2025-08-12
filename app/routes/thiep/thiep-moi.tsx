import { generateMeta } from "~/src/helper/genarate-meta";
import { RootLayout } from "~/src/layouts/root-layout";
import ThiepCuoiDetail from "~/src/pages/thiep-cuoi-detail";

export default function ThiepMoi() {
  return (
    <RootLayout
      meta={generateMeta({
        title: "Thiệp Mời",
        description:
          "Tạo thiệp mời đám cưới đẹp và chuyên nghiệp. Thiết kế thiệp mời online với nhiều mẫu đẹp, tùy chỉnh thông tin và chia sẻ dễ dàng.",
      })}
    >
      <ThiepCuoiDetail />
    </RootLayout>
  );
}
