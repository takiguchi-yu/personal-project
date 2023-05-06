import 'react-loading-skeleton/dist/skeleton.css';

import { format, parseISO } from "date-fns";
import { type NextPage } from "next";
import Image from 'next/image'
import Link from "next/link";
import { useState } from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { toast } from "react-toastify";
import Layout from "src/components/Layout";

import { type ProjectType } from '~/types/project';
import { api } from "~/utils/api";

const Home: NextPage = () => {

  const [isLoading, setIsLoading] = useState(true);

  const { data: projects } = api.project.getProjects.useQuery(
    { limit: 10, page: 1 },
    {
      cacheTime: 15 * (60 * 1000), // 15 mins
      onError(err) {
        toast(err.message, {
          position: "top-right",
          type: "error",
        });
      },
      onSuccess() {
        setIsLoading(false)
      },
      select: (data) => data.projects,
      staleTime: 10 * (60 * 1000), // 10 mins
    }
  );

  return (
    <Layout title="世の中の個人開発を紹介するメディア">
      <Hero />
      <section className="flex flex-col items-center justify-center">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl text-gray-800 capitalize lg:text-4xl dark:text-white">すべて表示</h1>
          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">

            {isLoading ? (
              <SkeletonProject />
            ) : (
              projects?.map((project: ProjectType) => (
                <div key={project.id} className="lg:flex">
                  <div className="relative w-full h-56 lg:w-64 shrink-0">
                    <Link href={project.url} target="_blank" rel="noopener noreferrer" className="">
                      <Image fill className="object-cover rounded-lg" src={project.thumbnail} alt={project.name} />
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between py-6 w-full lg:mx-6">
                    <Link href={project.url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white">{project.name}</Link>
                    <span className="text-sm text-gray-500 dark:text-gray-300">{format(parseISO(project.createdAt.toISOString()), "PPP")}</span>
                    <div className='flex justify-end gap-4 py-2'>
                      {project.qiita && <Link href={project.qiita} target="_blank" rel="noopener noreferrer">
                        <Image height={24} width={24} src='/logo-qiita.png' alt='Qiita logo' />
                      </Link>}
                      {project.zenn && <Link href={project.zenn} target="_blank" rel="noopener noreferrer">
                        <Image height={24} width={24} src='/logo-zenn.png' alt='Zenn logo' />
                      </Link>}
                    </div>
                  </div>
                </div>
              )))
            }

          </div>
        </div>
      </section >
    </Layout >
  );
};

const Hero = () => {
  return (
    <section className='relative mb-6 h-80 flex justify-center items-center bg-base-light border-t border-t-base-lighter'>
      <div className='absolute w-full h-full overflow-hidden'>
        <video
          className="absolute inset-0 min-w-full min-h-full object-cover opacity-30"
          muted
          loop
          autoPlay
          playsInline
        ><source
            src='/mixkit-hands-of-a-programmer-working-on-a-desk-41652-medium.mp4'
            type='video/mp4'
          />
        </video>
      </div>
      <div className='z-10 text-center px-8'>
        <div className='text-4xl font-medium dark:text-white'>
          世の中の個人開発を紹介するメディアです
        </div>
      </div>
    </section>
  )
}

const SkeletonProject = () => {
  const rows = Array(6)
    .fill(0)
    .map((item, index) => (
      <div key={index} className="lg:flex">
        <div className="relative w-full h-56 lg:w-64 shrink-0">
          <Skeleton height={224} />
        </div>
        <div className="flex flex-col justify-between py-6 lg:mx-6 lg:w-64">
          <Skeleton height={40} className='relative max-h-full' />
          <Skeleton height={10} />
        </div>
      </div>
    ));

  return (
    <SkeletonTheme baseColor='#d1d1d1' highlightColor='#ffffff'>
      {rows}
    </SkeletonTheme>
  );
};

export default Home;
