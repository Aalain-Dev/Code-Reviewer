const { generateContent } = require("../services/ai.service");

const createresponse = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }
  try {
    const result = await generateContent(prompt);
    
    if (result){
    console.log(result);

      return res.status(200).json({ response: result });
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  createresponse,
};
