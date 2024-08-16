//prototype is a tecnique which throgh we can access other object data
// object.__proto__=object
const fruit={
    b:'babana',
    p:'papaya',
    o:'orange'
};
const family={
    a:'afser ali',
    s:'sokeen ali',
    n:'nafees ali'
};
//access fruit property in family 
family.__proto__=fruit;
console.log(family.b);