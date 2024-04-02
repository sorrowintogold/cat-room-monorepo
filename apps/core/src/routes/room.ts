const express = require("express");
import { sleep } from "../common";
import { roomHdl } from "../server";
const router = express.Router();

router.get("/get", async (req, res) => {
  try {
    const rooms = Array.from(roomHdl.rooms, ([roomId, roomData]) => ({
      title: roomId,
      numCats: roomData.users.length,
    }));

    return res.send({ rooms });
  } catch (err) {
    console.error(err);
  }
});

export default router;
