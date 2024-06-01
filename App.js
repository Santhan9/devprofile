import './App.css';
import { useState } from 'react';
import NavigationHeader from './components/NavigationHeader';
import PageContent from './components/Pagecontent';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <div className='container-fluid'>
      <div className='row'>
        <NavigationHeader>

        </NavigationHeader>

      </div>
      <div className='row'>
        <div className='col-3'>
          <Sidebar>

          </Sidebar>
        </div>
        <div className='col-8'>
          <PageContent>

          </PageContent>
        </div>

      </div>





    </div>
  );
}

export default App;
