import React from 'react';
import { RecoilRoot } from 'recoil';
import Calendar from './components/Calendar';


function App() {
 
  return (
    <RecoilRoot>
      <Calendar isOpen={true} onClose={function (): void {
        throw new Error('Function not implemented.');
      } } children={undefined} />
      test
    </RecoilRoot>
    
  );
}


export default App;
