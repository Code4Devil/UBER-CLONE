import { createContext, useState, useContext } from 'react';

export const CaptainDataContext = createContext();


const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null)
    const [isloading, setIsloading] = useState(false)
    const [error, setError] = useState(null)

    const updateCaptain = async (captaindata) => {
       setCaptain(captaindata);
    }

    const value = {
        captain,
        setCaptain,
        isloading,
        setIsloading,
        error,
        setError,
        updateCaptain
    }
      



    return (
        <div>
            <CaptainDataContext.Provider value={value}>
                {children}
            </CaptainDataContext.Provider>
        </div>
    );
};

export default CaptainContext;

