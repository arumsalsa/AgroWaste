import DetailPesananContent from "./DetailPesananContent";

export const metadata = {
  title: "Detail Pesanan | AgroWaste",
};

export default function DetailPesananPage({ params }: { params: { id: string } }) {
  return <DetailPesananContent id={params.id} />;
}
