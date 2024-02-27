import React from 'react'
import SearchForm from '@/components/SearchForm'
import Filters from '@/components/Filters'
import { getResources, getResourcesPlaylist } from '@/sanity/actions'
import ResourceCard from '@/components/ResourceCard'
import Header from '@/components/Header'

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined }
}

const page = async ({ searchParams }: Props) => {
  console.log(searchParams.query)
  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1'
  })
  const resourcesPlaylist = await getResourcesPlaylist();

  console.log(resourcesPlaylist)
  // console.log(
  //   resources
  // )
  console.log(resources["53f2d394-7544-4f79-9fe8-725248ac4e1a"])
  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <div className='flex-center relative min-h-[274px] w-full rounded-xl bg-banner bg-cover bg-center text-center'>
          <h1 className='sm:heading1 heading2 
          mb-6 text-center text-white'>Resources Guides</h1>
        </div>
        <SearchForm />
      </section>
      <Filters />

      {(searchParams?.query || searchParams?.category) && (

        <section className="flex-center mt-6 w-full flex-col sm:mt-5">
          <Header
            query={searchParams?.query || ''}
            category={searchParams?.category || ''}
            
          />

          <div className="mt-12 flex w-full flex-wrap justify-center gap-4 sm:justify-start lg:gap-12">
            {resources?.length > 0 ? (
              resources.map((resource: any) => (
                <ResourceCard
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadLink={resource.downloadLink}
                  downloadNumber={resource.views}

                />
              ))
            ) : (
              <p className="body-regular text-white-400">
                No resources found
              </p>
            )}
          </div>
        </section>
      )}

      {resourcesPlaylist.map((item: any) => (
        <section key={item._id} className="flex-center mt-6 w-full flex-col sm:mt-20">
          <h1 className="heading3 self-start text-white-800">{item.title}</h1>
          <div className="mt-12 flex w-full flex-wrap justify-center gap-4 sm:justify-start lg:gap-12">
            {item.resources.map((resource: any) => (
              <ResourceCard
                key={resource._id}
                title={resource.title}
                id={resource._id}
                image={resource.image}
                downloadNumber={resource.views}
                downloadLink={resource.downloadLink}
              />
            ))}
          </div>
        </section>
      ))}

    </main>
  )
}

export default page