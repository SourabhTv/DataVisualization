import React from 'react';
import GetAPIExample from './Component/API/Get/Get';
import Decryption from './Component/Authorization/Decryption';
import UserProfile from './Component/Authorization/UserProfile';
import RemoveLocalStorage from './Component/Authorization/RemoveLocalStorage';
import PostExampleComponent from './Component/API/Post/Post';
import PutExampleComponent from './Component/API/Put/Put';

function App() {
  return (
    <div className="App">
      <div>
        <GetAPIExample />
        <PostExampleComponent />
        <PutExampleComponent />
        <UserProfile />
        <Decryption />
        <RemoveLocalStorage />
      </div>
    </div>
  );
}

export default App;
