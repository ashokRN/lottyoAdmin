export const CAMEL_TO_WORD = (text) => {
     const str = text.replace(/([A-Z])/g, ' $1');
     return str.charAt(0).toUpperCase() + str.slice(1);
};
