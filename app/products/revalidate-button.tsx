'use client';

import { revalidateProducts } from '../actions/revalidate-product';

export default function RevalidateButton() {
  return <button onClick={() => revalidateProducts()}>🔄 Revalidate</button>;
}
