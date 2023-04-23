# Weather AI

This is a Next.js project that fetches weather data from an API and connects that that to the OpenAI API to get a weather summary for the day.
This was made following the [Sonny Sangha](https://www.youtube.com/@SonnySangha/featured) [video](https://www.youtube.com/watch?v=DS5TZCn-pk8).

## Getting Started

To get started, you need to clone this repository and install the dependencies by running:

```bash
git clone https://github.com/MacroHEX/weather-ai.git
cd weather-ai
npm install
```

## Setting up Stepzen

Follow the quickstart guide at [StepZen](https://stepzen.com/docs/quick-start/install-and-setup)

Deploy it using:

```bash
stepzen start --dashboard=host
```

## Using the API Key

To use this project, you will need to obtain API keys from the [OpenAI](https://platform.openai.com/overview) website. Once you have the API key, rename the `.env.template` to `.env.local` and paste your keys into it:

```bash
OPENAI_API_KEY = your_openai_api_key
```

## Running the Project

To run the project, use the following command:

```bash
npm run dev
```
