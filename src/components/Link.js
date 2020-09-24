import React from 'react';


const Link = (props)  => {
    
        const onClick =(e) => {
            
            if (e.metaKey || e.ctrlKey) {
                return;
            }

        e.preventDefault(); //ngăn k cho load lại full page
        window.history.pushState({}, '', props.href) //code đổi url có sẵn trong browser
        
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

return <a className={props.className}
                href={props.href}
                onClick={onClick}>{props.children}</a>

};

export default Link;