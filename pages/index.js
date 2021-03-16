import Head from 'next/head'
import { GET_MENUS } from '../src/queries/get-menus';
import client from "../src/apollo/client";
import { Layout } from '../src/components/layout';

export default function Home( { data  } ) {
  
  return (
    
    <div>
      <Layout data={data}>
          content
      </Layout>
    </div>
     
  )
}

export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: GET_MENUS,   
  });

  //console.warn('data', data);
  
  return {
    props: {
        data: {
          menus: {
            headerMenus: data?.headerMenus?.edges, 
            footerMenus: data?.footerMenus?.edges
          }
        }

    }, 
  }
}