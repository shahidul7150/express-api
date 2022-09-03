let users = [
    { id: 1, name: "Shahidul", gender: "male", contact: "01750432592", address: "Barisal", photoUrl: "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png" },
    { id: 2, name: "Riaz", gender: "male", contact: "0175042593", address: "Khulna", photoUrl: "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png" },
    { id: 3, name: "Nadia", gender: "female", contact: "01750221212121", address: "Tongi", photoUrl: "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png" },
]


module.exports.getAllUsers = (req, res, next) => {
    const { limit, page } = req.query;
    res.json(users.slice(0, limit))
};

module.exports.getRandomUser = (req, res, next) => {
    console.log("random")
    const randomusers = users[Math.round(Math.random() * users.length)]
    console.log(users[Math.round(Math.random() * users.length)])
    res.json(randomusers)

}
module.exports.saveUser = (req, res) => {
    console.log(req.params)
    // console.log(users)
    users.push(req.body)
    console.log(req.body)
    res.send(users)
}

module.exports.getsingleUser = (req, res) => {
    const { id } = req.params;
    console.log(id);
    const foundUser = users.find(user => user.id === Number(id))
    res.send(foundUser)
}

module.exports.updateUser = (req, res) => {
    // const newData=req.body;
    const { id } = req.params;
    const filter = { _id: id }
    const newData = users.find(user => user.id === Number(id));
    newData.id = id;
    newData.name = req.body.name;
    newData.gender = req.body.gender;
    newData.contact = req.body.contact;
    newData.address = req.body.address;
    newData.photoUrl = req.body.photoUrl;
    res.send(newData)
}
module.exports.deleteUser = (req, res) => {
    const { id } = req.params;
    const filter = { _id: id };
    users = users.filter(user => user.id !== Number(id));
    res.send(users)
}
