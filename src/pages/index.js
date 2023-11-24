
import directus from 'lib/directus';
import { readItems } from '@directus/sdk';



async function getGlobals() {
  return directus.request(readItems('Global'));
}

export default function Home({ global }) {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
      <div>
        <h1>{global.Title}</h1>
        <p>{global.Description}</p>
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
      revalidate: 10,
    };
 
}
