import { createContext, useContext, useState } from "react";
import { data, fundData, audioBooks } from "./components/DummyData/data";

const AppContext = createContext()



const AppProvider = ({ children }) => {
    const [books, setBooks] = useState(data)
    const [audioBook, setAudioBook] = useState(audioBooks)
    const [findedId, setFindedId] = useState('')

    return <AppContext.Provider value={{
        books,
        fundData,
        audioBook,
        findedId,
        setAudioBook
    }}>
        {children}
    </AppContext.Provider>
}

const GlobalContext = () => useContext(AppContext)

export { AppProvider, GlobalContext }
