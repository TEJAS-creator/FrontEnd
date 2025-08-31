// AI Tools Data
const aiTools = [
    // Video Generation AI
    {
        id: 1,
        name: "Runway ML",
        category: "Video Generation",
        description: "AI-powered video editing and generation",
        url: "https://runwayml.com",
        isPopular: true,
        isNew: false,
        dateAdded: "2024-01-15"
    },
    {
        id: 2,
        name: "Synthesia",
        category: "Video Generation",
        description: "Create AI videos with virtual presenters",
        url: "https://synthesia.io",
        isPopular: true,
        isNew: false,
        dateAdded: "2024-01-10"
    },
    {
        id: 3,
        name: "Pika Labs",
        category: "Video Generation",
        description: "Text-to-video AI generation platform",
        url: "https://pika.art",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-01"
    },
    {
        id: 4,
        name: "Lumen5",
        category: "Video Generation",
        description: "AI video maker for marketing content",
        url: "https://lumen5.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-15"
    },
    {
        id: 5,
        name: "HeyGen",
        category: "Video Generation",
        description: "AI video generation with avatars",
        url: "https://heygen.com",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-15"
    },
    {
        id: 6,
        name: "InVideo",
        category: "Video Generation",
        description: "AI-powered video creation platform",
        url: "https://invideo.io",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-20"
    },

    // Image Generation AI
    {
        id: 7,
        name: "Midjourney",
        category: "Image Generation",
        description: "Advanced AI art and image creation",
        url: "https://midjourney.com",
        isPopular: true,
        isNew: false,
        dateAdded: "2024-01-05"
    },
    {
        id: 8,
        name: "DALL-E 3",
        category: "Image Generation",
        description: "OpenAI's text-to-image AI model",
        url: "https://openai.com/dall-e-2",
        isPopular: true,
        isNew: false,
        dateAdded: "2024-01-01"
    },
    {
        id: 9,
        name: "Stable Diffusion",
        category: "Image Generation",
        description: "Open-source image generation AI",
        url: "https://stability.ai",
        isPopular: true,
        isNew: false,
        dateAdded: "2024-01-08"
    },
    {
        id: 10,
        name: "Leonardo AI",
        category: "Image Generation",
        description: "Professional AI image generation",
        url: "https://leonardo.ai",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-02-20"
    },
    {
        id: 11,
        name: "Canva AI",
        category: "Image Generation",
        description: "AI image generator in Canva",
        url: "https://canva.com",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-10"
    },
    {
        id: 12,
        name: "Bing Image Creator",
        category: "Image Generation",
        description: "Microsoft's AI image generator",
        url: "https://bing.com/create",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-01"
    },

    // Conversational AI
    {
        id: 13,
        name: "ChatGPT",
        category: "Conversational AI",
        description: "Advanced AI chatbot by OpenAI",
        url: "https://chat.openai.com",
        isPopular: true,
        isNew: false,
        dateAdded: "2024-01-01"
    },
    {
        id: 14,
        name: "Gemini",
        category: "Conversational AI",
        description: "Google's advanced AI assistant",
        url: "https://gemini.google.com",
        isPopular: true,
        isNew: false,
        dateAdded: "2024-01-15"
    },
    {
        id: 15,
        name: "Claude",
        category: "Conversational AI",
        description: "Anthropic's AI assistant",
        url: "https://claude.ai",
        isPopular: true,
        isNew: false,
        dateAdded: "2024-01-12"
    },
    {
        id: 16,
        name: "DeepSeek",
        category: "Conversational AI",
        description: "Advanced AI chat and coding assistant",
        url: "https://deepseek.com",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-05"
    },
    {
        id: 17,
        name: "Grok",
        category: "Conversational AI",
        description: "xAI's conversational AI assistant",
        url: "https://grok.x.ai",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-01"
    },
    {
        id: 18,
        name: "Perplexity",
        category: "Conversational AI",
        description: "AI-powered search and chat",
        url: "https://perplexity.ai",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-02-25"
    },
    {
        id: 19,
        name: "NoteBookLM",
        category: "Conversational AI",
        description: "Google's AI notebook assistant",
        url: "https://notebooklm.google.com",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-12"
    },
    {
        id: 20,
        name: "Bard",
        category: "Conversational AI",
        description: "Google's AI chatbot assistant",
        url: "https://bard.google.com",
        isPopular: true,
        isNew: false,
        dateAdded: "2024-01-20"
    },
    {
        id: 21,
        name: "Pi",
        category: "Conversational AI",
        description: "Inflection's personal AI assistant",
        url: "https://pi.ai",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-10"
    },
    {
        id: 22,
        name: "Character.AI",
        category: "Conversational AI",
        description: "AI character chat platform",
        url: "https://character.ai",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-01-25"
    },

    // IDE / Coding AI
    {
        id: 23,
        name: "GitHub Copilot",
        category: "IDE / Coding",
        description: "AI pair programmer for developers",
        url: "https://github.com/features/copilot",
        isPopular: true,
        isNew: false,
        dateAdded: "2024-01-03"
    },
    {
        id: 24,
        name: "Cursor",
        category: "IDE / Coding",
        description: "AI-first code editor",
        url: "https://cursor.sh",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-05"
    },
    {
        id: 25,
        name: "LM Studio",
        category: "IDE / Coding",
        description: "Local AI model development platform",
        url: "https://lmstudio.ai",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-08"
    },
    {
        id: 26,
        name: "Warp",
        category: "IDE / Coding",
        description: "AI-powered terminal for developers",
        url: "https://warp.dev",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-10"
    },
    {
        id: 27,
        name: "Wind Surf",
        category: "IDE / Coding",
        description: "AI coding assistant and IDE",
        url: "https://windsurf.ai",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-12"
    },
    {
        id: 28,
        name: "Tabnine",
        category: "IDE / Coding",
        description: "AI code completion tool",
        url: "https://www.tabnine.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-10"
    },
    {
        id: 29,
        name: "Replit Ghost",
        category: "IDE / Coding",
        description: "AI-powered coding assistant",
        url: "https://replit.com",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-02-28"
    },
    {
        id: 30,
        name: "CodeWhisperer",
        category: "IDE / Coding",
        description: "Amazon's AI code generator",
        url: "https://aws.amazon.com/codewhisperer",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-15"
    },

    // App Builder AI
    {
        id: 31,
        name: "Bolt",
        category: "App Builder",
        description: "AI-powered app development platform",
        url: "https://bolt.com",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-15"
    },
    {
        id: 32,
        name: "Lovable",
        category: "App Builder",
        description: "AI app builder for no-code development",
        url: "https://lovable.ai",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-18"
    },
    {
        id: 33,
        name: "Supabase",
        category: "App Builder",
        description: "Open source Firebase alternative with AI",
        url: "https://supabase.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-20"
    },
    {
        id: 34,
        name: "Rocket.new",
        category: "App Builder",
        description: "AI-powered rapid app prototyping",
        url: "https://rocket.new",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-20"
    },
    {
        id: 35,
        name: "BuildMyAgent.io",
        category: "App Builder",
        description: "AI agent builder platform",
        url: "http://buildmyagent.io",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-22"
    },
    {
        id: 36,
        name: "Bubble",
        category: "App Builder",
        description: "No-code platform with AI features",
        url: "https://bubble.io",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-01-30"
    },

    // UI / UX AI
    {
        id: 37,
        name: "Stitch (Google)",
        category: "UI / UX",
        description: "Google's AI-powered design tool",
        url: "https://stitch.google.com",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-25"
    },
    {
        id: 38,
        name: "Builder.io",
        category: "UI / UX",
        description: "AI-powered visual development platform",
        url: "http://builder.io",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-28"
    },
    {
        id: 39,
        name: "Figma AI",
        category: "UI / UX",
        description: "AI features in Figma design tool",
        url: "https://figma.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-25"
    },
    {
        id: 40,
        name: "Uizard",
        category: "UI / UX",
        description: "AI-powered UI design platform",
        url: "https://uizard.io",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-28"
    },
    {
        id: 41,
        name: "Galileo AI",
        category: "UI / UX",
        description: "AI-powered UI design generation",
        url: "https://galileo.ai",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-30"
    },
    {
        id: 42,
        name: "V0",
        category: "UI / UX",
        description: "AI-powered design and prototyping",
        url: "https://v0.dev",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-04-01"
    },

    // Writing & Content AI
    {
        id: 43,
        name: "Jasper",
        category: "Writing & Content",
        description: "AI writing assistant for content",
        url: "https://jasper.ai",
        isPopular: true,
        isNew: false,
        dateAdded: "2024-01-10"
    },
    {
        id: 44,
        name: "Copy.ai",
        category: "Writing & Content",
        description: "AI copywriting and content creation",
        url: "https://copy.ai",
        isPopular: true,
        isNew: false,
        dateAdded: "2024-01-15"
    },
    {
        id: 45,
        name: "Grammarly",
        category: "Writing & Content",
        description: "AI writing assistant and grammar checker",
        url: "https://grammarly.com",
        isPopular: true,
        isNew: false,
        dateAdded: "2024-01-05"
    },
    {
        id: 46,
        name: "Writesonic",
        category: "Writing & Content",
        description: "AI-powered content generation",
        url: "https://writesonic.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-01"
    },
    {
        id: 47,
        name: "Sudowrite",
        category: "Writing & Content",
        description: "AI writing assistant for fiction",
        url: "https://sudowrite.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-05"
    },
    {
        id: 48,
        name: "HyperWrite",
        category: "Writing & Content",
        description: "AI writing assistant and editor",
        url: "https://hyperwrite.ai",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-10"
    },

    // Productivity AI
    {
        id: 49,
        name: "Notion AI",
        category: "Productivity",
        description: "AI-powered workspace and notes",
        url: "https://notion.so",
        isPopular: true,
        isNew: false,
        dateAdded: "2024-01-18"
    },
    {
        id: 50,
        name: "Tome",
        category: "Productivity",
        description: "AI-powered presentation creator",
        url: "https://tome.app",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-10"
    },
    {
        id: 51,
        name: "Beautiful.ai",
        category: "Productivity",
        description: "AI presentation design assistant",
        url: "https://beautiful.ai",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-05"
    },
    {
        id: 52,
        name: "Gamma",
        category: "Productivity",
        description: "AI presentation and document creator",
        url: "https://gamma.app",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-02-15"
    },
    {
        id: 53,
        name: "Otter.ai",
        category: "Productivity",
        description: "AI meeting transcription and notes",
        url: "https://otter.ai",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-20"
    },
    {
        id: 54,
        name: "Fireflies",
        category: "Productivity",
        description: "AI meeting assistant and recorder",
        url: "https://fireflies.ai",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-25"
    },

    // Research & Data AI
    {
        id: 55,
        name: "Elicit",
        category: "Research & Data",
        description: "AI research assistant for papers",
        url: "https://elicit.org",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-01"
    },
    {
        id: 56,
        name: "Consensus",
        category: "Research & Data",
        description: "AI-powered research search engine",
        url: "https://consensus.app",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-20"
    },
    {
        id: 57,
        name: "ChatPDF",
        category: "Research & Data",
        description: "AI chat with PDF documents",
        url: "https://chatpdf.com",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-05"
    },
    {
        id: 58,
        name: "Scholarcy",
        category: "Research & Data",
        description: "AI research paper summarizer",
        url: "https://scholarcy.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-01-25"
    },
    {
        id: 59,
        name: "Scite",
        category: "Research & Data",
        description: "AI-powered research assistant",
        url: "https://scite.ai",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-28"
    },
    {
        id: 60,
        name: "Research Rabbit",
        category: "Research & Data",
        description: "AI research discovery platform",
        url: "https://researchrabbit.ai",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-15"
    },

    // Audio & Music AI
    {
        id: 61,
        name: "Mubert",
        category: "Audio & Music",
        description: "AI music generation platform",
        url: "https://mubert.com",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-08"
    },
    {
        id: 62,
        name: "Descript",
        category: "Audio & Music",
        description: "AI audio and video editing",
        url: "https://www.descript.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-12"
    },
    {
        id: 63,
        name: "Suno AI",
        category: "Audio & Music",
        description: "AI music generation from text",
        url: "https://suno.ai",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-20"
    },
    {
        id: 64,
        name: "Udio",
        category: "Audio & Music",
        description: "AI-powered music creation platform",
        url: "https://udio.com",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-04-05"
    },
    {
        id: 65,
        name: "ElevenLabs",
        category: "Audio & Music",
        description: "AI voice generation and cloning",
        url: "https://elevenlabs.io",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-15"
    },
    {
        id: 66,
        name: "Riffusion",
        category: "Audio & Music",
        description: "Real-time AI music generation",
        url: "https://riffusion.com",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-25"
    },

    // Marketing & Sales AI
    {
        id: 67,
        name: "Jasper",
        category: "Marketing & Sales",
        description: "AI marketing content creation",
        url: "https://jasper.ai",
        isPopular: true,
        isNew: false,
        dateAdded: "2024-01-10"
    },
    {
        id: 68,
        name: "Copy.ai",
        category: "Marketing & Sales",
        description: "AI copywriting for marketing",
        url: "https://copy.ai",
        isPopular: true,
        isNew: false,
        dateAdded: "2024-01-15"
    },
    {
        id: 69,
        name: "Phrasee",
        category: "Marketing & Sales",
        description: "AI-powered marketing copy optimization",
        url: "https://phrasee.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-01"
    },
    {
        id: 70,
        name: "Persado",
        category: "Marketing & Sales",
        description: "AI marketing language optimization",
        url: "https://persado.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-05"
    },
    {
        id: 71,
        name: "Lately",
        category: "Marketing & Sales",
        description: "AI social media content generation",
        url: "https://lately.ai",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-10"
    },
    {
        id: 72,
        name: "Hootsuite Insights",
        category: "Marketing & Sales",
        description: "AI-powered social media analytics",
        url: "https://hootsuite.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-15"
    },

    // Education & Learning AI
    {
        id: 73,
        name: "Duolingo",
        category: "Education & Learning",
        description: "AI-powered language learning",
        url: "https://duolingo.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-01-20"
    },
    {
        id: 74,
        name: "Khan Academy",
        category: "Education & Learning",
        description: "AI-enhanced educational platform",
        url: "https://khanacademy.org",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-01-25"
    },
    {
        id: 75,
        name: "Coursera",
        category: "Education & Learning",
        description: "AI-powered online learning platform",
        url: "https://coursera.org",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-01"
    },
    {
        id: 76,
        name: "Quizlet",
        category: "Education & Learning",
        description: "AI-enhanced study tools",
        url: "https://quizlet.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-05"
    },
    {
        id: 77,
        name: "Grammarly",
        category: "Education & Learning",
        description: "AI writing and grammar assistance",
        url: "https://grammarly.com",
        isPopular: true,
        isNew: false,
        dateAdded: "2024-01-05"
    },
    {
        id: 78,
        name: "Photomath",
        category: "Education & Learning",
        description: "AI math problem solver",
        url: "https://photomath.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-10"
    },

    // Healthcare & Medical AI
    {
        id: 79,
        name: "Ada Health",
        category: "Healthcare & Medical",
        description: "AI-powered health assessment",
        url: "https://ada.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-01-30"
    },
    {
        id: 80,
        name: "Babylon Health",
        category: "Healthcare & Medical",
        description: "AI healthcare consultation platform",
        url: "https://babylonhealth.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-01"
    },
    {
        id: 81,
        name: "Zocdoc",
        category: "Healthcare & Medical",
        description: "AI-powered healthcare booking",
        url: "https://zocdoc.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-05"
    },
    {
        id: 82,
        name: "HealthTap",
        category: "Healthcare & Medical",
        description: "AI doctor consultation platform",
        url: "https://healthtap.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-10"
    },
    {
        id: 83,
        name: "K Health",
        category: "Healthcare & Medical",
        description: "AI-powered primary care",
        url: "https://khealth.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-15"
    },
    {
        id: 84,
        name: "Infermedica",
        category: "Healthcare & Medical",
        description: "AI medical diagnosis platform",
        url: "https://infermedica.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-20"
    },

    // Finance & Business AI
    {
        id: 85,
        name: "Plaid",
        category: "Finance & Business",
        description: "AI-powered financial data platform",
        url: "https://plaid.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-01-15"
    },
    {
        id: 86,
        name: "Stripe",
        category: "Finance & Business",
        description: "AI-enhanced payment processing",
        url: "https://stripe.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-01-20"
    },
    {
        id: 87,
        name: "QuickBooks",
        category: "Finance & Business",
        description: "AI-powered accounting software",
        url: "https://quickbooks.intuit.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-01-25"
    },
    {
        id: 88,
        name: "Xero",
        category: "Finance & Business",
        description: "AI-enhanced accounting platform",
        url: "https://xero.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-01"
    },
    {
        id: 89,
        name: "FreshBooks",
        category: "Finance & Business",
        description: "AI-powered invoicing and accounting",
        url: "https://freshbooks.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-05"
    },
    {
        id: 90,
        name: "Wave",
        category: "Finance & Business",
        description: "AI-enhanced financial management",
        url: "https://waveapps.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-10"
    },

    // Legal & Compliance AI
    {
        id: 91,
        name: "DoNotPay",
        category: "Legal & Compliance",
        description: "AI legal assistant and automation",
        url: "https://donotpay.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-01-30"
    },
    {
        id: 92,
        name: "Harvey",
        category: "Legal & Compliance",
        description: "AI legal research and analysis",
        url: "https://harvey.ai",
        isPopular: false,
        isNew: true,
        dateAdded: "2024-03-15"
    },
    {
        id: 93,
        name: "Casetext",
        category: "Legal & Compliance",
        description: "AI-powered legal research platform",
        url: "https://casetext.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-01"
    },
    {
        id: 94,
        name: "LexisNexis",
        category: "Legal & Compliance",
        description: "AI-enhanced legal research",
        url: "https://lexisnexis.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-05"
    },
    {
        id: 95,
        name: "Westlaw",
        category: "Legal & Compliance",
        description: "AI-powered legal research system",
        url: "https://westlaw.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-10"
    },
    {
        id: 96,
        name: "ContractPodAi",
        category: "Legal & Compliance",
        description: "AI contract analysis and management",
        url: "https://contractpodai.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-15"
    },

    // Customer Service AI
    {
        id: 97,
        name: "Intercom",
        category: "Customer Service",
        description: "AI-powered customer messaging platform",
        url: "https://intercom.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-01-20"
    },
    {
        id: 98,
        name: "Zendesk",
        category: "Customer Service",
        description: "AI-enhanced customer support platform",
        url: "https://zendesk.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-01-25"
    },
    {
        id: 99,
        name: "Freshdesk",
        category: "Customer Service",
        description: "AI-powered helpdesk software",
        url: "https://freshdesk.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-01"
    },
    {
        id: 100,
        name: "Help Scout",
        category: "Customer Service",
        description: "AI-enhanced customer support",
        url: "https://helpscout.com",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-05"
    },
    {
        id: 101,
        name: "Crisp",
        category: "Customer Service",
        description: "AI-powered customer chat platform",
        url: "https://crisp.chat",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-10"
    },
    {
        id: 102,
        name: "Tawk.to",
        category: "Customer Service",
        description: "AI-enhanced live chat platform",
        url: "https://tawk.to",
        isPopular: false,
        isNew: false,
        dateAdded: "2024-02-15"
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const allTools = document.getElementById('allTools');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const hamburgerOverlay = document.getElementById('hamburgerOverlay');
const closeMenu = document.getElementById('closeMenu');
const favoritesList = document.getElementById('favoritesList');
const themeToggle = document.getElementById('themeToggle');

// State
let currentTheme = localStorage.getItem('theme') || 'light';
let bookmarkedTools = JSON.parse(localStorage.getItem('bookmarkedTools')) || [];
let filteredTools = [...aiTools]; // Start with all tools

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    renderAllTools(); // Render all tools by default
    setupEventListeners();
});

// Theme Management
function initializeTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
}

// Event Listeners
function setupEventListeners() {
    themeToggle.addEventListener('click', toggleTheme);
    searchInput.addEventListener('input', handleSearch);
    categoryFilter.addEventListener('change', handleFilter);
    sortFilter.addEventListener('change', handleFilter);

    // Hamburger menu events
    hamburgerMenu.addEventListener('click', openHamburgerMenu);
    closeMenu.addEventListener('click', closeHamburgerMenu);
    hamburgerOverlay.addEventListener('click', (e) => {
        if (e.target === hamburgerOverlay) {
            closeHamburgerMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && hamburgerOverlay.classList.contains('active')) {
            closeHamburgerMenu();
        }
    });
}

// Hamburger Menu Functions
function openHamburgerMenu() {
    console.log('Opening hamburger menu...');
    console.log('Hamburger overlay element:', hamburgerOverlay);
    console.log('Favorites list element:', favoritesList);

    // Check if elements exist
    if (!hamburgerOverlay) {
        console.error('Hamburger overlay not found!');
        return;
    }

    if (!favoritesList) {
        console.error('Favorites list not found!');
        return;
    }

    // Add active class
    hamburgerOverlay.classList.add('active');
    console.log('Added active class, classes now:', hamburgerOverlay.className);

    // Set body overflow
    document.body.style.overflow = 'hidden';

    // Ensure favorites are rendered
    renderFavorites();

    // Force a reflow to ensure CSS transitions work
    hamburgerOverlay.offsetHeight;

    console.log('Menu opened, favorites rendered');
    console.log('Final overlay classes:', hamburgerOverlay.className);
}

function closeHamburgerMenu() {
    console.log('Closing hamburger menu...');
    hamburgerOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function renderFavorites() {
    console.log('Rendering favorites...');
    console.log('Bookmarked tools:', bookmarkedTools);
    console.log('Favorites list element:', favoritesList);

    if (!favoritesList) {
        console.error('Favorites list element not found!');
        return;
    }

    if (bookmarkedTools.length === 0) {
        favoritesList.innerHTML = `
            <div class="empty-favorites">
                <i class="fas fa-bookmark"></i>
                <p>No favorites yet</p>
                <small>Bookmark tools to see them here</small>
            </div>
        `;
        console.log('Rendered empty favorites state');
        return;
    }

    const favoriteTools = aiTools.filter(tool => bookmarkedTools.includes(tool.id));
    console.log('Favorite tools found:', favoriteTools);

    favoritesList.innerHTML = favoriteTools.map(tool => `
        <div class="favorite-item">
            <div>
                <div class="tool-name">${tool.name}</div>
                <div class="tool-category">${tool.category}</div>
            </div>
            <div class="favorite-actions">
                <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="favorite-link" title="Visit tool">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <button class="remove-favorite" onclick="removeFavorite(${tool.id})" title="Remove from favorites">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    `).join('');

    console.log('Rendered favorites list');
}

function removeFavorite(toolId) {
    const index = bookmarkedTools.indexOf(toolId);
    if (index > -1) {
        bookmarkedTools.splice(index, 1);
        localStorage.setItem('bookmarkedTools', JSON.stringify(bookmarkedTools));
        renderFavorites();

        // Re-render other sections to update bookmark states
        renderAllTools(); // Re-render all tools
    }
}

// Search and Filter Functions
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const sortBy = sortFilter.value;

    filteredTools = aiTools.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm) ||
            tool.description.toLowerCase().includes(searchTerm) ||
            tool.category.toLowerCase().includes(searchTerm);
        const matchesCategory = !category || tool.category === category;
        return matchesSearch && matchesCategory;
    });

    sortTools(filteredTools, sortBy);
    renderAllTools(); // Render all tools after filtering
}

function handleFilter() {
    handleSearch();
}

function sortTools(tools, sortBy) {
    switch (sortBy) {
        case 'popular':
            tools.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
            break;
        case 'newest':
            tools.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
            break;
        case 'name':
            tools.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            tools.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
    }
}

// Bookmark Functions
function toggleBookmark(toolId) {
    const index = bookmarkedTools.indexOf(toolId);
    if (index > -1) {
        bookmarkedTools.splice(index, 1);
    } else {
        bookmarkedTools.push(toolId);
    }
    localStorage.setItem('bookmarkedTools', JSON.stringify(bookmarkedTools));

    // Re-render to update bookmark states
    renderAllTools(); // Re-render all tools
    renderFavorites(); // Update favorites list
}

function isBookmarked(toolId) {
    return bookmarkedTools.includes(toolId);
}

// Render Functions
function renderAllTools() {
    allTools.innerHTML = filteredTools.map(tool => createToolCard(tool)).join('');
}

function renderPopularTools() {
    // This function is no longer needed but kept for compatibility
    console.log('Popular tools rendering disabled');
}

function renderNewTools() {
    // This function is no longer needed but kept for compatibility
    console.log('New tools rendering disabled');
}

function renderCategoryTools() {
    // This function is no longer needed but kept for compatibility
    console.log('Category tools rendering disabled');
}

function createToolCard(tool) {
    const bookmarked = isBookmarked(tool.id);
    return `
        <div class="tool-card" data-tool-id="${tool.id}">
            <div class="tool-header">
                <div>
                    <div class="tool-name">${tool.name}</div>
                    <span class="tool-category">${tool.category}</span>
                </div>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-actions">
                <button class="bookmark-btn ${bookmarked ? 'bookmarked' : ''}" 
                        onclick="toggleBookmark(${tool.id})" 
                        title="${bookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}">
                    <i class="fas fa-${bookmarked ? 'bookmark' : 'bookmark'}"></i>
                </button>
                <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="tool-link">
                    Visit Tool <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    `;
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounce search for better performance
const debouncedSearch = debounce(handleSearch, 300);
searchInput.addEventListener('input', debouncedSearch);

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading states for better UX
function showLoading(container) {
    container.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
        </div>
    `;
}

// Add error handling
function showError(container, message) {
    container.innerHTML = `
        <div class="empty-state">
            <i class="fas fa-exclamation-triangle"></i>
            <p>${message}</p>
        </div>
    `;
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === '/' && e.ctrlKey) {
        e.preventDefault();
        searchInput.focus();
    }
});

// Add tooltip for keyboard shortcut
searchInput.setAttribute('title', 'Press Ctrl+/ to focus search');
