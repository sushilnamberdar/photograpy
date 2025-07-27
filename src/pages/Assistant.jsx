import React, { useState, useRef, useEffect } from 'react';

const Assistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      content: "Hello! I'm your AI photography assistant, powered by ChatGPT. I'm here to help you with photography tips, techniques, and inspiration. What would you like to learn about today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedQuestions = [
    "What camera settings should I use for landscape photography?",
    "How do I capture the golden hour?",
    "What equipment do I need for wildlife photography?",
    "Tips for composition in nature photography",
    "How to photograph waterfalls?",
    "Best locations for nature photography"
  ];

  const generateResponse = (userMessage) => {
    const responses = {
      "camera settings": "For landscape photography, I recommend using a narrow aperture (f/8 to f/16) for maximum depth of field, low ISO (100-400) for minimal noise, and a tripod for sharp images. Consider using manual mode for full control.",
      "golden hour": "The golden hour occurs just after sunrise and before sunset. Use warm white balance, lower ISO settings, and consider using a tripod as light levels are lower. The soft, warm light creates beautiful, dramatic images.",
      "wildlife equipment": "For wildlife photography, you'll need a telephoto lens (300mm+), a sturdy tripod or monopod, fast shutter speeds (1/500s+), and patience. Consider camouflage clothing and learning animal behavior.",
      "composition": "Use the rule of thirds, leading lines, and natural frames. Look for patterns, textures, and interesting foreground elements. Don't forget to consider the background and how it complements your subject.",
      "waterfalls": "Use a slow shutter speed (1/4s to 2s) for silky water effects, a tripod is essential. Use a polarizing filter to reduce glare and enhance colors. Consider shooting in overcast conditions for even lighting.",
      "locations": "Some amazing locations include: National Parks (Yosemite, Yellowstone), coastal areas during sunrise/sunset, mountain ranges, and local nature reserves. Research the best times to visit for optimal lighting."
    };

    // Simple keyword matching for demo
    const lowerMessage = userMessage.toLowerCase();
    for (const [keyword, response] of Object.entries(responses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }

    return "That's a great question! I'd be happy to help you with photography techniques, equipment recommendations, or creative inspiration. Could you be more specific about what you'd like to learn?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'assistant',
        content: generateResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            AI Photography Assistant
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Your personal ChatGPT-powered guide for all things photography
          </p>
        </div>

        {/* Chat Container */}
        <div className="card h-[600px] flex flex-col">
          {/* Chat Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🤖</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Photography Assistant
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Powered by ChatGPT
                </p>
              </div>
              <div className="ml-auto">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-2 ${
                    message.type === 'user' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Quick questions:
            </p>
            <div className="flex flex-wrap gap-2">
              {predefinedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full transition-colors duration-200"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-4">
              <div className="flex-1">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about photography..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows={2}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  !inputMessage.trim() || isTyping
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105'
                }`}
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
              Expert Tips
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Get personalized advice on camera settings, composition, and techniques
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
              Learn & Grow
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Access educational content and improve your photography skills
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
              Creative Inspiration
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Discover new ideas and creative approaches to photography
            </p>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            💡 This is a demo interface. In a real implementation, this would connect to the OpenAI API for actual ChatGPT responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assistant; 