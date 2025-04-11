import OrderDetailClient from './OrderDetailClient'

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  return <OrderDetailClient orderId={params.id} />
}

export function generateStaticParams() {
  return [];
}