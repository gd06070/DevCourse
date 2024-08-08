import User from "../model/userModel.js"

export const create = async(req, res) => {
    try {
        const userData = new User(req.body);
        const {email} = userData;
        const userExist = await User.findOne({email})

        if (userExist) {
            return res.status(400).json({message:"이미 존재함"})
        }
        const saveUser = await userData.save();
        res.status(200).json(saveUser)
    } catch(e) {
        res.status(500).json({e:"연결X"})
    }
}

export const read = async(req, res) => {
    try{
        const users = await User.find();
        if(users.length === 0) {
            return res.status(404).json({message:"Not found"})
        }
        res.status(200).json(users)
    } catch(e) {
        res.status(500).json({e:"서버에러"})
    }
}

export const update = async(req, res) => {
    try{
        const id = req.params.id;
        const userExist = await User.findOne({_id:id});
        if (!userExist) {
            return res.status(404).json({message:"Not Found"})
        }
        const updateUser = await User.findByIdAndUpdate(id, req.body, {
            new: true,
        })
        res.status(200).json(updateUser);
    } catch(e) {
        res.status(500).json({e:"서버에러"})
    }
}

export const deleteUser = async(req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id:id})

        if (!userExist) {
            return res.status(404).json({message:"Not Found"})
        }
        await User.findByIdAndUpdate(id);
        res.status(200).json({message: "삭제완료"});
    } catch(e) {
        res.status(500).json({e:"서버에러"})
    }
}