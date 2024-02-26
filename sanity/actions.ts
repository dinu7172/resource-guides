import { groq } from 'next-sanity';
import { readClient } from './lib/client';
import { buildQuery } from './utils';


interface GetResourcesParams {
  
    query:string;
    category:string;
    page:string;
}
interface GetResourceById{
  id: string;
}
export const getResourceById = async (params:GetResourceById) => {
  const { id } = params;
  
  
  try {
    const res = await readClient.fetch(
      groq`*[_type == "resource" && _id == $id][0]{
        _id,
        title,
        downloadLink,
        views,
        "image": poster.asset->url,
        category
      }`,{id}
    );
      
    return res;
  } catch (error) {
    console.log(error);
    // return null; // Return null or handle error accordingly
  }
};

export const getResourcesPlaylist = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "resourcePlaylist"]{
        _id,
        title,
        resources[0...6]->{
          title,
          _id,
          downloadLink,
          "image": poster.asset->url,
          views,
          category
        }
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
}

export const getResources = async (params: GetResourcesParams) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: 'resource',
        query,
        category,
        page: parseInt(page),
      })}{
        title,
        _id,
        downloadLink,
        "image": poster.asset->url,
        views,
        slug,
        category,
        desc
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
}