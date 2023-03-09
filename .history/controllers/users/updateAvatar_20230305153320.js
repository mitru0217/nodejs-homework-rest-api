const fs = require("fs/promises");
const path = require("path");
const jimp = require("jimp");
const { User } = require("../../models/user");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id } = req.user;
  const avatarName = `${_id}.${originalname}`;
  const resultUpload = path.join(avatarsDir, avatarName);
  try {
    const img = await jimp.read(tempUpload);
    img
      .autocrop()
      .cover(
        250,
        250,
        jimp.HORIZONTAL_ALIGN_CENTER || jimp.VERTICAL_ALIGN_MIDDLE
      );
    await fs.rename(tempUpload, resultUpload);
    const avatarUrl = path.join("public", "avatars", avatarName);
    await User.findByIdAndUpdate(_id, { avatarUrl });
    res.json({
      avatarUrl,
    });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = updateAvatar;
