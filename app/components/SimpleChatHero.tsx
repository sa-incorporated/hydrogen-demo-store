import {SimpleChatIcon} from './SimpleChatLogo';

const chatMessages = [
  {text: 'An item from my order was damaged!', size: 'sm', opacity: 50},
  {text: 'Do you have this in a red colour?', size: 'md', opacity: 75},
  {text: 'I need help tracking my package!', size: 'lg', opacity: 100},
  {text: 'What is your return policy?', size: 'xl', opacity: 100, featured: true},
  {text: 'Is this item in stock?', size: 'lg', opacity: 100},
  {text: 'Do you offer gift wrapping or gift receipts?', size: 'md', opacity: 75},
  {text: 'I never received my order confirmation.', size: 'sm', opacity: 50},
];

function ChatBubble({
  text,
  size,
  opacity,
  featured,
}: {
  text: string;
  size: string;
  opacity: number;
  featured?: boolean;
}) {
  const sizeClasses = {
    sm: 'text-xs py-1.5 px-3',
    md: 'text-sm py-2 px-4',
    lg: 'text-base py-2.5 px-5',
    xl: 'text-lg py-3 px-6',
  }[size];

  return (
    <div
      className={`flex items-center gap-3 ${
        opacity < 100 ? `opacity-${opacity}` : ''
      }`}
      style={{opacity: opacity / 100}}
    >
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 flex-shrink-0" />
      <div
        className={`${sizeClasses} rounded-2xl shadow-sm ${
          featured
            ? 'bg-white shadow-lg ring-1 ring-black/5 font-medium'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        {text}
      </div>
    </div>
  );
}

export function SimpleChatHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="absolute inset-0 backdrop-blur-[100px] bg-white/20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          <div className="space-y-8 lg:space-y-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-md text-sm font-medium">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Built for Shopify
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                Resolve customer
                <br />
                questions automatically
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 max-w-xl leading-relaxed">
                Simple Chat helps Shopify stores deliver fast, friendly customer
                support — without hiring more staff or learning complicated
                tools.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://apps.shopify.com/simple-chat"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-[1.02]"
                style={{
                  boxShadow:
                    '0 10px 28px rgba(0,0,0,0.32), inset 0 -3px 3px rgba(0,0,0,0.25), inset 0 3px 3px rgba(255,255,255,0.15)',
                }}
              >
                Install on Your Shopify Store
              </a>
            </div>

            <div className="pt-8 lg:pt-12 space-y-6">
              <p className="text-sm text-gray-500 text-center lg:text-left">
                Trusted by Shopify brands
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-60">
                <div className="text-xl font-serif font-medium text-gray-800">
                  waísa
                </div>
                <div className="text-sm font-medium tracking-wider text-gray-800 uppercase">
                  Ippodo Tea
                </div>
                <div className="text-sm font-medium text-gray-800">
                  The Natural
                  <br />
                  Parent
                </div>
              </div>

              <blockquote className="text-center lg:text-left max-w-lg">
                <p className="text-gray-600 italic text-sm lg:text-base">
                  "We finally stopped living in our inbox. Customers get answers
                  instantly and we barely have to touch support anymore."
                </p>
                <footer className="mt-2 text-sm text-gray-500">
                  — Dan Boychuk, Co-Founder
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute inset-0 flex flex-col justify-center space-y-4 pr-8">
              {chatMessages.slice(0, 3).map((msg, i) => (
                <div key={i} className="flex justify-end">
                  <ChatBubble {...msg} />
                </div>
              ))}
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full">
              <div className="flex justify-end items-center gap-3 pr-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 flex-shrink-0 shadow-lg" />
                <div className="bg-white rounded-2xl shadow-xl px-6 py-4 text-xl font-medium text-gray-900 ring-1 ring-black/5">
                  What is your return policy?
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 flex flex-col space-y-4 pr-8 pb-20">
              {chatMessages.slice(4).map((msg, i) => (
                <div key={i} className="flex justify-end">
                  <ChatBubble {...msg} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          <SimpleChatIcon className="w-12 h-12" />
          <div className="bg-white rounded-2xl px-4 py-2 shadow-sm text-sm text-gray-700">
            Click here to ask me a question.
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
          Customer support can become a bottleneck. Every day you get the same
          questions — and your time disappears answering them. Simple Chat
          answers customers automatically, instantly, using your store's info.
          No setup headaches. No scripts. Just fast, friendly support.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-20">
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Works with the tools you already use
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {['Shopify', 'Email', 'Slack', 'Gorgias'].map((tool) => (
              <div
                key={tool}
                className="w-32 h-32 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-600 font-medium"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function GettingStartedSection() {
  const steps = [
    {
      title: 'Build with your store data',
      description:
        'Your products, orders, shipping, and policies are understood automatically.',
    },
    {
      title: 'Set rules in plain English',
      description:
        'Tell Simple Chat how your support should work — no flows, no code.',
    },
    {
      title: 'Automate real support work',
      description:
        'Resolve questions, update orders, issue refunds, and escalate edge cases.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16">
          Getting started is simple
        </h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={i} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="h-64 bg-white rounded-xl shadow-sm border border-gray-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SimpleChatFooter() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <SimpleChatIcon className="w-12 h-12" />
            <span className="text-xl font-semibold">Simple Chat</span>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Simple Chat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
