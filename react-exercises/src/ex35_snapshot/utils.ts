export const getDefaultPadding = () => {
    return 20;
}

export const getColorForType = (type: 'success' | 'error') => {
    switch(type) {
        case 'error': return 'red';
        case 'success': return 'green';
        default: return 'blue'
    }
}