const getUsers = () => {
    return fetch('http://135.181.30.244:27007/api/summaries/')
        .then(value => value.json())
};

export {getUsers};
