// import { client } from '../lib/contentfulClient';
// import Products from '../components/Products';

// interface Product {
//   sys: { id: string };
//   fields: {
//     name: string;
//     price: number;
//     description: string;
//     image: {
//       fields: {
//         file: {
//           url: string;
//         };
//       };
//     };
//   };
// }

// export default async function ProductsPage() {
//   // Hämta vanliga produkter
//   const entries = await client.getEntries<any>({
//     content_type: 'product',
//   });

//   // Hämta söta produkter
//   const sweetEntries = await client.getEntries<any>({
//     content_type: 'sweetProduct',
//   });

//   const products = entries.items as unknown as Product[];
//   const sweetProducts = sweetEntries.items as unknown as Product[];

//   return (
//     <Products 
//       products={products} 
//       sweetProducts={sweetProducts} 
//     />
//   );
// }



// pages/products.tsx
import Products from '../components/Products';
import { client } from '../lib/contentfulClient';

export default function ProductsPage({ products, sweetProducts }: any) {
  return <Products products={products} sweetProducts={sweetProducts} />;
}

// Hämta data vid build-time (SSG)
export async function getStaticProps() {
  // Vanliga produkter
  const entries = await client.getEntries({ content_type: 'product' });

  // Sötare produkter
  const sweetEntries = await client.getEntries({ content_type: 'sweetProduct' });

  return {
    props: {
      products: entries.items,
      sweetProducts: sweetEntries.items,
    },
  };
}
