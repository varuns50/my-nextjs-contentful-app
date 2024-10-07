import { createClient, Entry, EntrySkeletonType } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

interface PageFields extends EntrySkeletonType {
  title: string;
  slug: string;
  content: string;
}

export const fetchContentBySlug = async (slug: string): Promise<Entry<PageFields> | null> => {
  const entries = await client.getEntries<PageFields>({
    content_type: 'pageLanding',
    'fields.slug': slug,
  });

  return entries.items.length > 0 ? entries.items[0] : null;
};

export interface ServiceFields {
  title: string;
  description: string;
  slug: string;
}

export const fetchServices = async (): Promise<EntrySkeletonType<ServiceFields>[]> => {
  const entries = await client.getEntries<EntrySkeletonType<ServiceFields>>({
    content_type: 'service',
  });

  return entries.items.map(item => ({
    ...item,
    fields: item.fields as ServiceFields,
    contentTypeId: item.sys.contentType.sys.id
  }));
};