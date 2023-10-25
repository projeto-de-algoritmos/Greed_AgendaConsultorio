// utils.js
export const getListaPacientes = () => {
    const listaPacientes = localStorage.getItem('listaPacientes');
    if (listaPacientes) {
        return JSON.parse(listaPacientes);
    }
    return [];
};

export const salvarListaPacientes = (novaListaPacientes) => {
    localStorage.setItem('listaPacientes', JSON.stringify(novaListaPacientes));
};
