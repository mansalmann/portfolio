import Anchor from '@/components/ui/anchor';
import Container from '@/components/ui/container';
import { CustomMDX } from '@/components/ui/mdx';
import { siteConfig } from '@/config/site';
import { getAllProjects } from '@/utils/mdx';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { FaArrowRight, FaX } from 'react-icons/fa6';

type Params = Promise<{ slug: string }>;

export const generateStaticParams = async () => getAllProjects().map((project) => ({ slug: project.slug }));

export const generateMetadata = async ({ params }: { params: Params }) => {
    const { slug } = await params;

    const project = getAllProjects().find((project) => project.slug === slug);
    if (!project) return;

    const { title, description } = project.metadata;

    return {
        title: `${title} Projects`,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            url: `${siteConfig.url}/projects/${project.slug}`,
            authors: 'Salman Alfarisi',
        },
        twitter: {
            title,
            description,
        },
        alternates: {
            canonical: `${siteConfig.url}/projects/${project.slug}`,
        },
    };
};

const ProjectPage = async ({ params }: { params: Params }) => {
    const { slug } = await params;

    const project = getAllProjects().find((project) => project.slug === slug);

    if (!project) notFound();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: project.metadata.title,
        description: project.metadata.description,
        author: [
            {
                '@type': 'Person',
                name: 'Salman',
                url: siteConfig.url,
            },
        ],
    };

    return (
        <>
            <Script
                id='json-ld'
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Container className='py-8'>
                <header className='flex items-center justify-center pb-10'>
                    <Anchor className='inline-flex hover:mb-6 hover:scale-125' href='/'>
                        <FaX />
                        <div className='sr-only'>Close</div>
                    </Anchor>
                </header>

                <h1 className='font-calistoga text-3xl flex justify-center leading-relaxed'>My Projects</h1>
                <div className='grid grid-cols-2 gap-10 pb-8 max-md:grid-cols-1'>
                    <div>
                        <h1 className='font-calistoga text-3xl leading-relaxed'>Sistem Kasir (Web and Mobile App)</h1>
                        <p className='text-xl font-medium leading-relaxed'>Point of Sales App with Laravel, Filament, and Flutter</p>
                        <div className='flex flex-wrap items-center gap-3 pt-4'>
                                <Anchor
                                    key='https://sistemkasir.mansalman.my.id'
                                    href='https://sistemkasir.mansalman.my.id'
                                    target='_blank'
                                    rel='noreferrer nofollow noopener'
                                    className='inline-flex px-5 py-3 text-sm'>
                                    Demo
                                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                                </Anchor>
                                <Anchor
                                    key='https://github.com/mansalmann/SistemKasirModern'
                                    href='https://github.com/mansalmann/SistemKasirModern'
                                    target='_blank'
                                    rel='noreferrer nofollow noopener'
                                    className='inline-flex px-5 py-3 text-sm'>
                                    Repo
                                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                                </Anchor>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-calistoga text-3xl leading-relaxed'>Web Sewa Kos-kosan</h1>
                        <p className='text-xl font-medium leading-relaxed'>Find and Booking Popular Kos in several city</p>
                        <div className='flex flex-wrap items-center gap-3 pt-4'>
                                <Anchor
                                    key='https://sewakos.mansalman.my.id'
                                    href='https://sewakos.mansalman.my.id'
                                    target='_blank'
                                    rel='noreferrer nofollow noopener'
                                    className='inline-flex px-5 py-3 text-sm'>
                                    Demo
                                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                                </Anchor>
                                <Anchor
                                    key='https://github.com/mansalmann/Booking-Kos-Laravel'
                                    href='https://github.com/mansalmann/Booking-Kos-Laravel'
                                    target='_blank'
                                    rel='noreferrer nofollow noopener'
                                    className='inline-flex px-5 py-3 text-sm'>
                                    Repo
                                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                                </Anchor>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-calistoga text-3xl leading-relaxed'>OnlineClothing (eCommerce)</h1>
                        <p className='text-xl font-medium leading-relaxed'>Find and buy your favourite clothes!</p>
                        <div className='flex flex-wrap items-center gap-3 pt-4'>
                                <Anchor
                                    key='https://ecommerce.mansalman.my.id'
                                    href='https://ecommerce.mansalman.my.id'
                                    target='_blank'
                                    rel='noreferrer nofollow noopener'
                                    className='inline-flex px-5 py-3 text-sm'>
                                    Demo
                                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                                </Anchor>
                                <Anchor
                                    key='https://github.com/mansalmann/eCommerce'
                                    href='https://github.com/mansalmann/eCommerce'
                                    target='_blank'
                                    rel='noreferrer nofollow noopener'
                                    className='inline-flex px-5 py-3 text-sm'>
                                    Repo
                                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                                </Anchor>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-calistoga text-3xl leading-relaxed'>Music App</h1>
                        <p className='text-xl font-medium leading-relaxed'>Play your songs online!</p>
                        <div className='flex flex-wrap items-center gap-3 pt-4'>
                                <Anchor
                                    key='https://musicapp.mansalman.my.id'
                                    href='https://musicapp.mansalman.my.id'
                                    target='_blank'
                                    rel='noreferrer nofollow noopener'
                                    className='inline-flex px-5 py-3 text-sm'>
                                    Music App Player
                                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                                </Anchor>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ProjectPage;
