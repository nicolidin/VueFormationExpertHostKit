import { axiosClient } from '@/api/axios';
import { fromStrapiTag, toStrapiTag } from '@/mapper/strapi/tags';
import type { TagType } from '@/types/Domain/TagType';
import type { StrapiTagReadDTO } from '@/types/Strapi/StrapiTagType';

export async function fetchTagsApi(): Promise<TagType[]> {
  const { data: res } = await axiosClient.get<{ data?: StrapiTagReadDTO[] }>(
    '/api/tags',
  );
  const list = res?.data ?? [];
  return Array.isArray(list) ? list.map(fromStrapiTag) : [];
}

export async function postTagApi(body: {
  title: string;
  color?: string;
}): Promise<TagType> {
  const { data: res } = await axiosClient.post<{ data: StrapiTagReadDTO }>(
    '/api/tags',
    toStrapiTag(body),
  );
  return fromStrapiTag(res.data);
}
