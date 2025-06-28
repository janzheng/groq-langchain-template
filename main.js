import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { JsonOutputParser } from "@langchain/core/output_parsers";
import dotenv from "dotenv";

dotenv.config();

// Initialize Groq LLM
const llm = new ChatGroq({
  model: "llama-3.3-70b-versatile",
  temperature: 0.7,
  maxTokens: undefined,
  maxRetries: 2,
});

// Define the expected JSON structure
const parser = new JsonOutputParser({
  pydanticObject: {
    type: "object",
    properties: {
      name: { type: "string" },
      price: { type: "number" },
      features: { type: "array", items: { type: "string" } },
    },
  },
});

// Create a simple prompt - escape the curly braces in the JSON example
const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `Extract product details into JSON with this structure:
{{
  "name": "product name here",
  "price": number_here_without_currency_symbol,
  "features": ["feature1", "feature2", "feature3"]
}}`,
  ],
  ["user", "{input}"],
]);

// Create the chain that guarantees JSON output
const chain = prompt.pipe(llm).pipe(parser);

async function parseProduct(description) {
  const result = await chain.invoke({ input: description });
  console.log(JSON.stringify(result, null, 2));
  return result;
}

// Example usage
const description = `The Kees Van Der Westen Speedster is a high-end, single-group espresso machine known for its precision, performance, 
and industrial design. Handcrafted in the Netherlands, it features dual boilers for brewing and steaming, PID temperature control for 
consistency, and a unique pre-infusion system to enhance flavor extraction. Designed for enthusiasts and professionals, it offers 
customizable aesthetics, exceptional thermal stability, and intuitive operation via a lever system. The pricing is approximatelyt $14,499 
depending on the retailer and customization options.`;

parseProduct(description);