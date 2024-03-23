import React from 'react';

function Footer() {
    return (
        <footer className="flex justify-center items-center p-4 text-small text-white/50 border-t border-white/5">
            <p>&copy; Evento {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;
