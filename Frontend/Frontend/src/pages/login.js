// import React from 'react';

// function LoginPage() {
//   return (
//     <div className="bg-no-repeat bg-cover bg-center relative" style={{backgroundImage: "url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"}}>
   
//       <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
//         <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
//           <div className="self-start hidden lg:flex flex-col  text-black">
//             <img src="" className="mb-3"/>
//             <h1 className="mb-3 font-bold text-5xl">Welcome to Lifted App</h1>
// <p className="pr-3">Please enter your credentials to access your account. If you don't have an account yet, you can create one in just a few steps.</p>
// </div>
//         </div>
//         <div className="flex justify-center self-center  z-10">
//           <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
//             <div className="mb-4">
//               <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
//               <p className="text-gray-500">Please sign in with your Google account.</p>
//             </div>
//             <div className="flex justify-center">
//             <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-lg px-8 py-4 text-center flex items-center">
//             <svg className="w-6 h-6 mr-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
//             Sign in with Google
//           </button>
//           </div>
//             <div className="pt-5 text-center text-gray-400 text-xs">
//               <span>
//                 Copyright © 2021-2022
//                 <a href="https://codepen.io/uidesignhub" rel="" target="_blank" title="Ajimon" className="text-green hover:text-green-500 ">AJI</a></span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;
import React, { useState, useEffect } from "react";
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Add this line to get the navigate function

  const responseGoogle = (response) => {
    console.log(response);
    if (response?.tokenId) {
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: "your-client-id-here",
        scope: ""
      }).then(() => {
        const authInstance = gapi.auth2.getAuthInstance();
        if (authInstance.isSignedIn.get()) {
          setIsAuthenticated(true);
        }
      });
    };
    gapi.load('client:auth2', start);
  }, []);

  const handleGoButtonClick = () => {
    if (isAuthenticated) {
      navigate('/home'); // Navigate to the home page
    }
  };

  return (
    <div className="bg-no-repeat bg-cover bg-center relative" style={{backgroundImage: "url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"}}>
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
          <div className="self-start hidden lg:flex flex-col text-black">
            <img src="" alt="FitConnect Logo" className="mb-3"/>
            <h1 className="mb-3 font-bold text-5xl">Welcome to FitConnect</h1>
            <p className="pr-3">Please enter your credentials to access your account. If you don't have an account yet, you can create one in just a few steps.</p>
          </div>
        </div>
        <div className="flex justify-center self-center z-10">
          <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
              <p className="text-gray-500">Please sign in with your Google account.</p>
            </div>
            <div className="flex justify-center">
              <GoogleLogin 
                clientId="140961123644-7ovg640plco0g7o6ipbjg3qrr8012q1g.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-lg px-8 py-4 text-center flex items-center"
                render={renderProps => (
                  <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-lg px-8 py-4 text-center flex items-center">
                    <svg className="w-6 h-6 mr-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                      <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                    </svg>
                    Sign in with Google
                  </button>
                )}
              />
            </div>
            <br></br>
            <div className="flex justify-center">
      <button 
        onClick={handleGoButtonClick} // Add this line to handle button click
        className={`text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-lg px-8 py-4 flex items-center ${isAuthenticated ? '' : 'opacity-50 cursor-not-allowed'}`}
        disabled={!isAuthenticated}
      >
        Go
      </button>
    </div>

            <div className="pt-5 text-center text-gray-400 text-xs">
              <span>
                Copyright © 2023-2024
                <a href="https://codepen.io/uidesignhub" rel="noopener noreferrer" target="_blank" title="Ajimon" className="text-green hover:text-green-500 ">AJI</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
