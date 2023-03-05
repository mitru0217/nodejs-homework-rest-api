const fs = require("fs/promises");
const path = require("path");
const { User } = require("../../models/user");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  try {
    const { path: tempUpload, fileName } = req.file;
    const { _id } = req.user;
    const [extention] = fileName.split(".").reverse();
    const avatarName = `${_id}.${extention}`;
    const resultUpload = path.join(avatarsDir, avatarName);
    await fs.rename(tempUpload, resultUpload);
    const avatarUrl = path.join("avatars", resultUpload);
    await User.findByIdAndUpdate(_id, { avatarUrl });
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = { updateAvatar };
