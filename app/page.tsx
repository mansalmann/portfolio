import Container from '@/components/ui/container';
import Grid from '@/components/ui/grid';
import { gridItems, layouts } from '@/config/grid';

export default function Home() {
    return (
        <>
            <Container as='header' className='flex items-center justify-between py-0'>
                <h1 className='hidden'>Salman Alfarisi</h1>
            </Container>
            <main className='py-8'>
                <Grid layouts={layouts}>
                    {gridItems.map((item) => (
                        <div key={item.i}>{<item.component />}</div>
                    ))}
                </Grid>
            </main>
        </>
    );
}
