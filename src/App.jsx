// import React from 'react'
// import Homecrud from './Components/Homecrud'
// import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
// import Createuser from "./Components/Createuser"
// import Users from "./Components/Users"
// import EditUsers from "./Components/EditUsers"


// const App = () => {
//   return (
//     <div>
//         <BrowserRouter>
//         <Homecrud/>
//         <Routes>
//             <Route element= {<Createuser/>} path='/' />
//             <Route element= {<Users/>} path='/users' />
//             <Route element= {<EditUsers/>} path='/EDIT/: user' />
//         </Routes>
//         </BrowserRouter>
//     </div>
//   )
// }
// export default App

// import React from 'react';
// import Homecrud from './Components/Homecrud';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Createuser from "./Components/Createuser";
// import Users from "./Components/Users";
// import EditUsers from "./Components/EditUsers";

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Homecrud />
//         <Routes>
//           <Route path="/" element={<Createuser />} />
//           <Route path="/users" element={<Users />} />
//           <Route path="/edit/:id" element={<EditUsers />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homecrud from './Components/Homecrud';
import Createuser from './Components/Createuser';
import Users from './Components/Users';
import EditUsers from './Components/EditUsers';

const App = () => {
  return (
    <Router>
      <div>
        <Homecrud />
        <Routes>
          <Route path="/" element={<Createuser />} />
          <Route path="/users" element={<Users />} />
          <Route path="/edit/:id" element={<EditUsers />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

