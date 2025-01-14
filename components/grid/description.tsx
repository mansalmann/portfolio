import profile from '@/public/images/profile.jpg';
import Image from 'next/image';
import Card from '../ui/card';

export default function Description() {
    return (
        <Card className='flex flex-col justify-center gap-4 p-8'>
            <div className='relative size-14 overflow-hidden rounded-full sm:size-16'>
                <Image
                    src={profile}
                    alt='Salman Alfarisi'
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    placeholder='blur'
                    priority
                />
            </div>
            <p className='leading-relaxed'>
                Hi, I&apos;m <span className='font-calistoga text-xl'>Salman</span>, a Web Developer from
                Yogyakarta, Indonesia.{' '}
                <span className='hidden md:inline'>I love building web application especially using JavaScript, PHP, Laravel, MySQL, and love learning new things.</span>
            </p>
        </Card>
    );
}
