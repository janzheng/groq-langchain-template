# LangChain + Groq Starter Template

While you could use the Groq SDK directly, [LangChain](https://langchain.com) is a framework that makes it easy to build sophisticated applications with LLMs. Combined with [Groq](https://groq.com) API for fast inference speed, you can leverage LangChain components such as:

- **Chains:** Compose multiple operations into a single workflow, connecting LLM calls, prompts, and tools together seamlessly (e.g., prompt → LLM → output parser)
- **Prompt Templates:** Easily manage your prompts and templates with pre-built structures to consistently format queries that can be reused across different models
- **Memory:** Add state to your applications by storing and retrieving conversation history and context
- **Tools:** Extend your LLM applications with external capabilities like calculations, external APIs, or data retrievals
- **Agents:** Create autonomous systems that can decide which tools to use and how to approach complex tasks

This integration enables you to build sophisticated AI applications with:

- **Ultra-Fast Inference:** Leverage Groq's optimized hardware for sub-second response times
- **Structured Outputs:** Use LangChain's output parsers for guaranteed JSON responses
- **Advanced Prompt Engineering:** Build complex prompt templates and chains
- **Cross-Platform Support:** Available in both Python and JavaScript/TypeScript
- **Production-Ready:** Built with enterprise-grade reliability and scalability

This repository is a complete starter template for building AI applications with LangChain and Groq, featuring examples in both Python and JavaScript that demonstrate structured data extraction from natural language.

## Overview

This collection shows how to build production-ready AI applications using Groq API for ultra-fast language model inference and LangChain for advanced prompt engineering and output parsing. These are complete, working templates that you can fork, customize, and deploy.

The product information extraction example has been implemented across both Python and JavaScript, demonstrating how to parse unstructured product descriptions into structured JSON data with guaranteed output formats.

**What You'll Learn:**
By exploring these templates, you'll learn practical patterns for combining Groq's fast inference with LangChain's orchestration capabilities in both JavaScript and Python. Each example includes error handling, retry logic, and real-world use cases that you can adapt for your own applications.

### What This Template Includes

- **Product Information Extraction:** Parse unstructured product descriptions into structured JSON
- **Guaranteed JSON Output:** Use LangChain's output parsers to ensure consistent data formats
- **Dual Language Support:** Complete examples in both Python and JavaScript
- **Environment Configuration:** Proper setup for development and production
- **Best Practices:** Follow LangChain and Groq recommended patterns

**Key Features:**
- **Sub-second response times** with Groq's optimized inference
- **Structured data extraction** via LangChain's output parsers
- **Type-safe outputs** with Pydantic-style schemas
- **Production-ready** error handling and retries
- **Cross-platform compatibility** for diverse development environments

## Architecture

**Tech Stack:**
- **AI Framework:** LangChain for prompt engineering and output parsing
- **Language Models:** Groq API (Llama 3.3 70B Versatile)
- **Runtime:** Node.js with ES modules (JavaScript) / Python 3.9+ (Python)
- **Package Management:** npm/yarn (JavaScript) / uv (Python)

**AI Pipeline:**
- **Language Model:** Groq Llama 3.3 70B Versatile
- **Prompt Templates:** LangChain ChatPromptTemplate
- **Output Parsing:** JsonOutputParser with schema validation
- **Chain Architecture:** Prompt → LLM → Parser pipeline

## Quick Start

### Prerequisites
- **For JavaScript:** Node.js 18+ and npm/yarn
- **For Python:** Python 3.9+ and [uv](https://docs.astral.sh/uv/) package manager (recommended)
- **Groq API key:** [Get your free API key here](https://console.groq.com/keys)

### Setup

#### 1. Clone the repository
```bash
gh repo clone janzheng/groq-langchain-template
cd groq-langchain
```

#### 2. Get your Groq API key
1. Visit [Groq Console](https://console.groq.com)
2. Create a new API key
3. Copy the key for use in environment variables

### JavaScript Setup

1. **Navigate to JavaScript examples**
   ```bash
   cd groq-langchain/js-examples
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   # Create .env file with your API key
   echo "GROQ_API_KEY=your_groq_api_key_here" > .env
   ```

4. **Run the example**
   ```bash
   # Product Information Extraction
   node main.js
   ```

### Python Setup

1. **Navigate to Python examples**
   ```bash
   cd groq-langchain/py-examples
   ```

2. **Initialize and activate virtual environment with uv**
   ```bash
   # Initialize the project (if not already done)
   uv init
   
   # Create and activate virtual environment
   uv venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   
   # Install dependencies
   uv sync
   ```

3. **Configure environment variables**
   ```bash
   # Create .env file with your API key
   echo "GROQ_API_KEY=your_groq_api_key_here" > .env
   ```

4. **Run the example**
   ```bash
   uv run main.py
  
   ```

## Examples

The product information extraction example demonstrates:

- **Schema Validation:** Uses LangChain's JsonOutputParser for guaranteed JSON responses
- **Product Details:** Extracts name, price, and features from descriptions
- **Error Handling:** Includes retry logic and validation
- **Real-world Example:** Processes espresso machine descriptions

**JavaScript:** `js-examples/main.js` | **Python:** `py-examples/main.py`

## Example Output

Both Python and JavaScript examples will parse a product description and output structured JSON:

**Input:**
```
The Kees Van Der Westen Speedster is a high-end, single-group espresso machine known for its precision, performance, and industrial design...
```

**Output:**
```json
{
  "name": "Kees Van Der Westen Speedster",
  "price": 14499,
  "features": [
    "Single-group espresso machine",
    "Dual boilers for brewing and steaming",
    "PID temperature control",
    "Pre-infusion system",
    "Customizable aesthetics",
    "Thermal stability",
    "Lever operation system"
  ]
}
```

## Customization

This template is designed to be a foundation for you to build upon. Key areas for customization:

### JavaScript Customization
- **Model Selection:** Update Groq model configuration in `js-examples/main.js`
- **Output Schema:** Modify the JSON schema for your specific data structure
- **Prompt Templates:** Customize the system prompt for your use case
- **Error Handling:** Adjust retry logic and validation rules

### Python Customization
- **Model Configuration:** Change model settings in `py-examples/main.py`
- **Schema Definition:** Update the JSON schema for your data requirements
- **System Prompts:** Customize the agent's behavior and capabilities
- **Output Parsing:** Extend with more complex parsing logic

### Model Configuration
```python
# Python - Change model in py-examples/main.py
llm = ChatGroq(model_name="llama-3.1-8b-instant", temperature=0.5)
```

```javascript
// JavaScript - Change model in js-examples/main.js
const llm = new ChatGroq({
  model: "llama-3.1-8b-instant",
  temperature: 0.5,
});
```

### Output Schema
Modify the JSON schema in both examples to match your data structure:

```python
# Python
parser = JsonOutputParser(
    pydantic_object={
        "type": "object",
        "properties": {
            "custom_field": {"type": "string"},
            "another_field": {"type": "number"},
        },
    }
)
```

### Prompt Templates
Customize the system prompt for your specific use case:

```python
# Python
prompt = ChatPromptTemplate.from_messages([
    ("system", "Your custom system prompt here..."),
    ("user", "{input}"),
])
```

## Advanced Usage

### Error Handling
Both examples include retry logic and error handling:

```python
# Python - Configure retries
llm = ChatGroq(
    model_name="llama-3.3-70b-versatile",
    temperature=0.7,
    max_retries=3
)
```

### Custom Chains
Build more complex processing chains:

```python
# Python - Multi-step chain
chain = prompt | llm | parser | custom_processor
```

### Streaming Responses
For real-time applications, enable streaming:

```python
# Python - Streaming
for chunk in llm.stream("Your input here"):
    print(chunk.content, end="")
```

## API Keys Required

- **Groq API Key:** Used for LLM inference across all examples in both JavaScript and Python

## Files Structure

```
groq-langchain/
├── js-examples/             # JavaScript examples
│   ├── .env                 # Stores your Groq API key
│   ├── main.js              # Product information extraction
│   └── package.json         # JS dependencies
├── py-examples/             # Python examples
│   ├── .env                 # Stores your Groq API key
│   ├── main.py              # Product information extraction
│   ├── pyproject.toml       # Python dependencies
│   └── uv.lock              # Lock file for uv
└── README.md                # This file
```

## Troubleshooting

**Common Issues:**

1. **"Invalid API key"** - Check your Groq API key in the `.env` file
2. **"Module not found"** - Ensure dependencies are installed in the correct environment
3. **"JSON parsing error"** - Verify your output schema matches the expected format
4. **Rate limiting** - Groq has generous rate limits, but consider adding delays for high-volume usage

## Available Models

Groq offers several high-performance models you can use:
- `llama-3.3-70b-versatile`
- `llama-3.1-8b-instant`
- `meta-llama/llama-4-scout-17b-16e-instruct`
- `meta-llama/llama-4-maverick-17b-128e-instruct`
- [...and more](https://console.groq.com/docs/models)

## Next Steps

### For Developers
- **Create your free GroqCloud account:** Access API docs, the playground, and more resources via [Groq Console](https://console.groq.com)
- **Explore LangChain:** [LangChain Documentation](https://python.langchain.com/docs/get_started/introduction)
- **Build and customize:** Fork this repo and start customizing for your own application
- **Get support:** Connect with other developers building on Groq, chat with our team, and submit feature requests on our [Groq Developer Forum](https://community.groq.com)

### For Founders and Business Leaders
- **See capabilities:** These templates show AI that can handle business workloads with fast response times
- **Discuss your needs:** [Contact our team](https://groq.com/enterprise-access/) to explore how Groq can help your AI initiatives

## Resources

- **Groq Console:** [https://console.groq.com](https://console.groq.com)
- **LangChain Docs:** [https://langchain.com](https://langchain.com)
- **Groq Developer Forum:** [https://community.groq.com](https://community.groq.com)
- **API Documentation:** [https://console.groq.com/docs](https://console.groq.com/docs)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

Created by Jan Zheng using [LangChain](https://langchain.com) and [Groq](https://groq.com).

Template structure inspired by the Groq ecosystem of developer tools and examples.
