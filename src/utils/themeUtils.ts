
export const calculateNavbarHeight = () => {
    if (typeof getComputedStyle == "undefined") { return 0; } 
    const ifmNavbarHeight = getComputedStyle(document.documentElement)
        .getPropertyValue('--ifm-navbar-height');
    if (!ifmNavbarHeight) return 0;
    if (ifmNavbarHeight.includes('px')) return parseInt(ifmNavbarHeight.replace('px', ''));
    if (ifmNavbarHeight.includes('rem')) return Math.floor(parseInt(ifmNavbarHeight.replace('rem', '')) * parseFloat(getComputedStyle(document.documentElement).fontSize));
    
};