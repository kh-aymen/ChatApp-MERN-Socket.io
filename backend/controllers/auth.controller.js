import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js"

export const signUp = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" })
    }

    const user = await User.findOne({ username })

    if (user) {
      return res.status(400).json({ error: "User name already exists" })
    }

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = new User({
      fullName,
      username,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    })

    if (newUser) {
      await newUser.save()
      // generate JWT token here
      generateTokenAndSetCookie(newUser._id, res)

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      })
    } else {
      res.status(400).json({ error: "Invalid user data" })
    }
  } catch (error) {
    console.log("🚀 ~ signUp ~ error:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}

export const logIn = async (req, res) => {
  try {
    const { username, password } = req.body

    const user = await User.findOne({ username })
    const isPasswordMatch = await bcrypt.compare(password, user?.password || "")

    if (!user || !isPasswordMatch) {
      return res.status(400).json({ error: "Invalid username or password" })
    }

    generateTokenAndSetCookie(user._id, res)

    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    })
  } catch (error) {
    console.log("🚀 ~ logIn ~ error:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}

export const logOut = (req, res) => {
  try {
    res.cookie("jwtCookie", "", { maxAge: 0 })
    res.status(200).json({ message: "Logged Out successfully" })
  } catch (error) {
    console.log("🚀 ~ logIn ~ error:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}
