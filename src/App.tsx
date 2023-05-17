import React from 'react';
import { RecoilRoot } from 'recoil';
import Calendar from './components/Calendar';


function App() {
 
  return (
    <RecoilRoot>
      <Calendar isOpen={false} onClose={function (): void {
        throw new Error('Function not implemented.');
      } } children={undefined} />
      
    </RecoilRoot>
    
  );
}


export default App;
