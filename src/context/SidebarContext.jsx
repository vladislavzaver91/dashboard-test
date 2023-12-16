import { createContext, useContext, useEffect, useState } from "react";

export const SidebarContext = createContext();

export const useSidebarMenu = () => {
    const value = useContext(SidebarContext);

    if (!value) {
        throw new Error('Context error')
    }

    return value;
};

export const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isOpen]);

    const value = { isOpen, setIsOpen };
    
    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    )
};