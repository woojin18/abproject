export const fetchHello = async () => {
    const response = await fetch('http://localhost:8080/api/hello');
    const data = await response.text();
    return data;
};
