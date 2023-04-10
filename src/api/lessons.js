import lessonsData from "../../public/static/lessons.json";

export default function handler(req, res) {
  res.status(200).json(lessonsData);
}
