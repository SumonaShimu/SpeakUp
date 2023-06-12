import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="bg-base-100 max-w-full max-h-screen text-center flex flex-col gap-4 py-10">
            <h1 className='font-bold text-9xl text-fuchsia-600'>404</h1>
            <div className="w-full mx-auto bg-white">
            <img src="https://raw.githubusercontent.com/SumonaShimu/Language-images/main/404.gif" className="w-full md:w-1/3 object-cover rounded-lg mx-auto" />
            </div>
            <h3 className="text-lg font-semibold">Awwww! Don`t Cry!</h3>
            <p>Its just a 404 error! </p>
            <Link to='/' className='btn bg-fuchsia-600 text-white w-3/4 md:w-1/3 mx-auto font-medium mb-5'>Lets go home</Link>
        </div>
    );
};

export default Error;