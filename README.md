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

This application demonstrates how to build production-ready AI applications using Groq API for ultra-fast language model inference and LangChain for advanced prompt engineering and output parsing. Built as a complete, end-to-end template that you can fork, customize, and deploy.

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
- **Backend:** Python with LangChain + Groq
- **Frontend/Alternative:** JavaScript/TypeScript with LangChain + Groq
- **AI Infrastructure:** Groq API (Llama 3.3 70B Versatile)
- **Framework:** LangChain for prompt engineering and output parsing

**AI Pipeline:**
- **Language Model:** Groq Llama 3.3 70B Versatile
- **Prompt Templates:** LangChain ChatPromptTemplate
- **Output Parsing:** JsonOutputParser with schema validation
- **Chain Architecture:** Prompt → LLM → Parser pipeline

## Quick Start

### Prerequisites

- Python 3.9 or later (for Python example)
- Node.js 18+ and npm/yarn (for JavaScript example)
- Groq API key ([Get your free API key here](https://console.groq.com/keys))

### Setup

#### 1. Clone the repository
```bash
gh repo clone janzheng/groq-langchain-template
cd groq-templates/groq-langchain-template
```

#### 2. Get your Groq API key
1. Visit [Groq Console](https://console.groq.com)
2. Create a new API key
3. Copy the key for use in environment variables

### Python Installation

#### 1. Set up Python Environment

**Using uv (Recommended):**
```bash
# Initialize project
uv init

# Add dependencies
uv add langchain-groq python-dotenv

# Run the example
uv run main.py
```

**Using pip and venv:**
```bash
# Create virtual environment
python3 -m venv langchain-env

# Activate it
# On macOS/Linux:
source langchain-env/bin/activate
# On Windows:
langchain-env\Scripts\activate

# Install dependencies
pip install langchain-groq python-dotenv

# Run the example
python main.py
```

#### 2. Environment Variables

Create `.env` in the root directory:
```bash
GROQ_API_KEY=your-groq-api-key-here
```

#### 3. Run the Python Example

```bash
# With uv
uv run main.py

# With standard Python
python main.py
```

### JavaScript Installation

#### 1. Install Node.js Dependencies

**Using yarn (Recommended):**
```bash
# Install dependencies
yarn add @langchain/groq @langchain/core dotenv

# Run the example
node main.js
```

**Using npm:**
```bash
# Install dependencies
npm install @langchain/groq @langchain/core dotenv

# Run the example
node main.js
```

#### 2. Environment Variables

Create `.env` in the root directory (same as Python):
```bash
GROQ_API_KEY=your-groq-api-key-here
```

#### 3. Run the JavaScript Example

```bash
node main.js
```

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

### Model Configuration
```python
# Python - Change model in main.py
llm = ChatGroq(model_name="llama-3.1-8b-instant", temperature=0.5)
```

```javascript
// JavaScript - Change model in main.js
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

## Troubleshooting

**Common Issues:**

1. **"Invalid API key"** - Check your Groq API key in the `.env` file
2. **"Module not found"** - Ensure dependencies are installed in the correct environment
3. **"JSON parsing error"** - Verify your output schema matches the expected format
4. **Rate limiting** - Groq has generous rate limits, but consider adding delays for high-volume usage

## Available Models

Groq offers several high-performance models you can use:

- `llama-3.3-70b-versatile` - Best overall performance
- `llama-3.1-8b-instant` - Fastest responses
- `llama-3.1-70b-versatile` - High quality, versatile
- `mixtral-8x7b-32768` - Large context window

## Next Steps

### For Developers
- **Explore LangChain:** [LangChain Documentation](https://python.langchain.com/docs/get_started/introduction)
- **Groq Models:** [Available Models and Pricing](https://console.groq.com/docs/models)
- **Advanced Patterns:** Build multi-agent systems, RAG applications, and more
- **Production Deployment:** Scale your application with proper monitoring and error handling

### For Founders and Business Leaders
- **See enterprise capabilities:** This template showcases production-ready AI that can handle business workloads
- **Discuss Your needs:** [Contact Groq's team](https://groq.com/enterprise-access/) to explore enterprise solutions

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
