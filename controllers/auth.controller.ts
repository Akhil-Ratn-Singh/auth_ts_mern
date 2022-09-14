import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/user.model";

export const register = async (req: Request, res: Response) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send("No user with this username");

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) return res.status(400).send("Incorrect Password");

    const { password, ...otherDetails } = user._doc;
    return res.status(200).json(otherDetails);
  } catch (error) {
    return res.status(400).json(error);
  }
};
