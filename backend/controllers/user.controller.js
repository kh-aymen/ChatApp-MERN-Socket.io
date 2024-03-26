import User from "../models/user.model.js"

export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password")

    res.status(200).json(filteredUsers)
  } catch (error) {
    console.log("🚀 ~ getUsersForSideBar ~ error:", error.message)
    res.status(400).json({ error })
  }
}
