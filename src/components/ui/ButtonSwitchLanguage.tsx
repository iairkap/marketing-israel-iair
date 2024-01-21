import React, { useState, useEffect } from 'react';

const ButtonSwitchLanguage = () => {
    const languages = ['en', 'עי'];
    const [currentLanguage, setCurrentLanguage] = useState('en');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && languages.includes(savedLanguage)) {
            setCurrentLanguage(savedLanguage);
        }
    }, []);

    const switchLanguage = () => {
        const index = languages.indexOf(currentLanguage);
        const newLanguage = languages[(index + 1) % languages.length];
        setCurrentLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
        // Aquí puedes agregar el código para cambiar las traducciones basándote en newLanguage
    };

    return (
        <button onClick={switchLanguage}>
            {currentLanguage}
        </button>
    );
};

export default ButtonSwitchLanguage;