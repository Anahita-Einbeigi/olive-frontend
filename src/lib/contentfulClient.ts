import { createClient } from 'contentful';
import { link } from 'fs';

export const client = createClient({
  space: 'xunff1ypk8ah',        
  accessToken: 'J3rK9U-GrDF3TH4KIDX9DjVEQ4AzN4Vp5NDWxyNiqUE', 
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
