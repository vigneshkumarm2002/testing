
import directus from 'lib/directus';
import { readItems } from '@directus/sdk';



async function getGlobals() {
  return directus.request(readItems('global'));
}

export default function Home({ global }) {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
      <div>
        <h1>{global[0].title}</h1>
      </div>
    </main>
  );
}

export async function getStaticProps() {
    const global = await getGlobals();
   console.log(global)

    return {
      props: {
        global,
      },
      revalidate:60
    };
 
}
