import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PromoBar from "./components/PromoBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const categories=['All', 'category1', 'category2', 'category3', 'category4', 'category5', 'category6']
const products=[
    {
      photos: [],
      name: 'product1',
      description: 'nothing now',
      price: '3',
      options:{

      },
      code: 'jjjb-jbbjr',
      reviews: ['good'],
      details: 'nvjnvnvvnvnvi'

    }, 
    {
      photos: [],
      name: 'product2',
      description: 'nothing now',
      price: '4',
      options:{

      },
      code: 'jjjb-jbbjr',
      reviews: ['not very good'],
      details: 'nvjnvnvvnvnvi'

    }, 
    {
      photos: [],
      name: 'product3',
      description: 'nothing now',
      price: '5',
      options:{

      },
      code: 'jjjb-jbbjr',
      reviews: ['bad'],
      details: 'nvjnvnvvnvnvi'

    }, 
    {
      photos: [],
      name: 'product4',
      description: 'nothing now',
      price: '2',
      options:{

      },
      code: 'jjjb-jbbjr',
      reviews: ['very bad'],
      details: 'nvjnvnvvnvnvi'

    }, 
    {
      photos: [],
      name: 'product5',
      description: 'nothing now',
      price: '10',
      options:{

      },
      code: 'jjjb-jbbjr',
      reviews: ['very good'],
      details: 'nvjnvnvvnvnvi'

    }
]


function App() {
    return (
      <>
        <Header />
        <PromoBar />
        <Navbar categories={categories}/>
        <Main products={products}/>
        <Footer />
      </>
    );
}

export default App;
