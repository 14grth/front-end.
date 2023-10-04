

export let fullName = "John Doe";

export let numbers =  [1, 2, 3, 4, 5];

export let john = {
    fullName: "John Doe",
    age: 33,
    address: "Manado",
};

const hello = () => {
    console.log("Hello Module");
};

export { fullName, numbers as angka, john, hello};
export default hello;