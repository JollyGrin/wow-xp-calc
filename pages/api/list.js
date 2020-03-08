import dungeons from './dungeons.json'

module.exports = async (req, res) => {
  res.status(200).json(dungeons)
}
