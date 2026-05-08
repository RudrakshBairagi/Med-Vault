const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI('AIzaSyBT5K9zRbxYRvTnWI0CgJmmLQajfgE1Nq4');
async function list() {
  // In the newer SDKs, we might not have a direct list models function, but we can try to fetch a model info.
  // Wait, let's just make a REST call to check the models available.
}
