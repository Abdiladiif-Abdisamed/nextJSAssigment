// export default async function ProductsPage() {
//   const res = await fetch('https://dummyjson.com/products', {
//     // cache: 'force-cache',
//     cache: 'no-store',
//   });
//   const data = await res.json();
//   const timestamp = new Date().toLocaleTimeString();

//   return <p>🕒 Cached at: {timestamp}</p>;
// }


export default async function ProductsPage() {
  const res = await fetch('https://dummyjson.com/products', {
    next: { tags: ['products'] },
  });
  const data = await res.json();
  const timestamp = new Date().toLocaleTimeString();

  return <p>🕒 Tag Cached at: {timestamp}</p>;
}
