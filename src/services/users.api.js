const getUsers = (page, limit) => {
    return fetch(`http://135.181.30.244:27007/api/summaries/?page=${page}`)
        .then(value => value.json())
};

export {getUsers};
