// import { createClient } from 'contentful';

// export const client = createClient({
//   space: 'xkseip459dlv',        
//   accessToken: 'XAafIi8zhXfBPV_b3iKdRNaqsEirxfFY6tbFLMOTBac', 
// });
// export const fetchEntries = async () => {
//   const entries = await client.getEntries({
//     content_type: 'place', 
//     order: ['fields.date'],
//   });

//   return entries.items.map((item: any) => ({
//     id: item.sys.id,
//     title: item.fields.title,
//     address: item.fields.address,
//     date: item.fields.date,
//     startdate: item.fields.startdate,
//     link: item.fields.link,
//     openingHours: item.fields.openingHours,
//   }));
// };

import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export const fetchEntries = async () => {
  const entries = await client.getEntries({
    content_type: 'place',
    order: ['fields.date'],
  });

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    title: item.fields.title,
    address: item.fields.address,
    date: item.fields.date,
    startdate: item.fields.startdate,
    link: item.fields.link,
    openingHours: item.fields.openingHours,
  }));
};
