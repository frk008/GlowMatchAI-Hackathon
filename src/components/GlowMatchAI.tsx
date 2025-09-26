import React, { useState, useRef } from 'react';
import { Camera, Upload, Sparkles, Shield, Users, CheckCircle, ArrowRight, X, Star } from 'lucide-react';
import { skinConcerns, getPersonalizedRecommendations } from '../data/products';
import ProductRecommendations from './ProductRecommendations';

interface AnalysisResults {
  skinType: string;
  skinTone: string;
  overallScore: number;
  potential: number;
  jawline: number;
  skinQuality: number;
  cheekbones: number;
  recommendations: string[];
  concerns: string[];
}

const GlowMatchAI: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeOption, setActiveOption] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<AnalysisResults | null>(null);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCameraCapture = () => {
    setActiveOption('camera');
    setIsAnalyzing(true);
    // Simulate camera capture and analysis
    setTimeout(() => {
      simulateAnalysis();
    }, 3000);
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setSelectedImage(imageUrl);
        setActiveOption('upload');
        setIsAnalyzing(true);
        
        // Start analysis after showing preview
        setTimeout(() => {
          simulateAnalysis();
        }, 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateAnalysis = () => {
    // Simulate AI analysis with realistic results
    setTimeout(() => {
      const mockResults: AnalysisResults = {
        skinType: "Combination",
        skinTone: "Medium",
        overallScore: 78,
        potential: 85,
        jawline: 82,
        skinQuality: 74,
        cheekbones: 88,
        concerns: ['acne', 'dryness'],
        recommendations: [
          "Gentle exfoliating cleanser for T-zone",
          "Hydrating serum for dry areas",
          "Broad-spectrum SPF 30+ daily",
          "Retinol treatment 2-3x per week",
          "Vitamin C serum for morning routine"
        ]
      };
      
      setAnalysisResults(mockResults);
      setIsAnalyzing(false);
      setShowResults(true);
    }, 4000);
  };

  const resetAnalysis = () => {
    setSelectedImage(null);
    setShowResults(false);
    setAnalysisResults(null);
    setActiveOption(null);
    setIsAnalyzing(false);
  };

  const handleViewRecommendations = () => {
    setShowRecommendations(true);
  };

  const scrollToRecommendations = () => {
    const element = document.getElementById('product-recommendations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBackground = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  // Get personalized product recommendations
  const productCategories = analysisResults ? 
    getPersonalizedRecommendations(analysisResults.skinType, analysisResults.concerns) : [];

  if (showResults && analysisResults) {
    return (
      <div className="min-h-screen bg-white">
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Sparkles className="h-8 w-8 text-purple-600" />
                <h1 className="text-4xl font-bold text-gray-900">Analysis Complete</h1>
              </div>
              <p className="text-xl text-gray-600">Here are your personalized skincare insights</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image Preview */}
              <div className="relative">
                {selectedImage && (
                  <div className="relative">
                    <img
                      src={selectedImage}
                      alt="Analyzed face"
                      className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 border-2 border-purple-400 rounded-2xl animate-pulse"></div>
                    {/* Face detection overlay */}
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-green-400 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>

              {/* Results */}
              <div className="space-y-6">
                {/* Skin Analysis Summary */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Sparkles className="h-5 w-5 text-purple-600 mr-2" />
                    Skin Analysis Summary
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Skin Type</p>
                      <p className="text-lg font-bold text-purple-600">{analysisResults.skinType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Skin Tone</p>
                      <p className="text-lg font-bold text-purple-600">{analysisResults.skinTone}</p>
                    </div>
                  </div>
                  
                  {/* Key Concerns */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Key Concerns Identified</p>
                    <div className="flex flex-wrap gap-2">
                      {analysisResults.concerns.map((concernId) => {
                        const concern = skinConcerns.find(c => c.id === concernId);
                        return concern ? (
                          <div key={concernId} className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full border border-purple-200">
                            <span className="text-sm">{concern.icon}</span>
                            <span className="text-sm font-medium text-gray-700">{concern.name}</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
                {/* Skin Type */}

                {/* Scores Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl ${getScoreBackground(analysisResults.overallScore)}`}>
                    <h4 className="font-semibold text-gray-900 mb-1">Overall Score</h4>
                    <p className={`text-2xl font-bold ${getScoreColor(analysisResults.overallScore)}`}>
                      {analysisResults.overallScore}/100
                    </p>
                  </div>
                  
                  <div className={`p-4 rounded-xl ${getScoreBackground(analysisResults.potential)}`}>
                    <h4 className="font-semibold text-gray-900 mb-1">Potential</h4>
                    <p className={`text-2xl font-bold ${getScoreColor(analysisResults.potential)}`}>
                      {analysisResults.potential}/100
                    </p>
                  </div>
                  
                  <div className={`p-4 rounded-xl ${getScoreBackground(analysisResults.jawline)}`}>
                    <h4 className="font-semibold text-gray-900 mb-1">Jawline</h4>
                    <p className={`text-2xl font-bold ${getScoreColor(analysisResults.jawline)}`}>
                      {analysisResults.jawline}/100
                    </p>
                  </div>
                  
                  <div className={`p-4 rounded-xl ${getScoreBackground(analysisResults.skinQuality)}`}>
                    <h4 className="font-semibold text-gray-900 mb-1">Skin Quality</h4>
                    <p className={`text-2xl font-bold ${getScoreColor(analysisResults.skinQuality)}`}>
                      {analysisResults.skinQuality}/100
                    </p>
                  </div>
                  
                  <div className={`p-4 rounded-xl ${getScoreBackground(analysisResults.cheekbones)} col-span-2`}>
                    <h4 className="font-semibold text-gray-900 mb-1">Cheekbones</h4>
                    <p className={`text-2xl font-bold ${getScoreColor(analysisResults.cheekbones)}`}>
                      {analysisResults.cheekbones}/100
                    </p>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    Personalized Recommendations
                  </h4>
                  <ul className="space-y-3">
                    {analysisResults.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={resetAnalysis}
                    className="bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Analyze Another Photo
                  </button>
                  <button 
                    onClick={handleViewRecommendations}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center space-x-2"
                  >
                    <Star className="h-4 w-4" />
                    <span>View Shopping Recommendations</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Recommendations Section */}
        {showRecommendations && (
          <div id="product-recommendations">
            <ProductRecommendations 
              categories={productCategories}
              skinType={analysisResults.skinType}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Sparkles className="h-6 w-6 text-purple-600" />
                <span className="text-sm font-medium text-purple-600 uppercase tracking-wider">
                  Powered by AI
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
                GLOWMATCH AI
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-8">
                AI tells you what to buy based on your skin
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Get personalized skincare recommendations powered by advanced AI technology. 
                Our intelligent system analyzes your unique skin characteristics to suggest 
                the perfect products for your beauty journey.
              </p>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="bg-white p-3 rounded-full shadow-sm mb-3">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">50K+</span>
                  <span className="text-sm text-gray-600">Analyses Done</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white p-3 rounded-full shadow-sm mb-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">96%</span>
                  <span className="text-sm text-gray-600">Accuracy Rate</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white p-3 rounded-full shadow-sm mb-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">100%</span>
                  <span className="text-sm text-gray-600">Private & Secure</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3762011/pexels-photo-3762011.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AI facial recognition technology"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Get Started in Seconds
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your preferred method to begin your personalized skin analysis
            </p>
          </div>

          {isAnalyzing ? (
            <div className="max-w-2xl mx-auto">
              {selectedImage && (
                <div className="mb-8">
                  <div className="relative">
                    <img
                      src={selectedImage}
                      alt="Analyzing"
                      className="w-full h-[300px] object-cover rounded-2xl shadow-lg mx-auto"
                    />
                    {/* Face detection animation overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Scanning lines */}
                        <div className="absolute inset-0 border-2 border-green-400 rounded-full animate-ping"></div>
                        <div className="absolute inset-4 border-2 border-blue-400 rounded-full animate-pulse"></div>
                        <div className="absolute inset-8 border-2 border-purple-400 rounded-full animate-bounce"></div>
                        
                        {/* Center dot */}
                        <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Analysis points */}
                    <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              )}
              
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="animate-spin h-16 w-16 border-4 border-purple-200 border-t-purple-600 rounded-full mx-auto mb-6"></div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Analyzing Your Skin</h4>
                <p className="text-gray-600 mb-4">Our AI is processing your image to provide personalized recommendations...</p>
                
                {/* Progress indicators */}
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Face detection complete</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin h-4 w-4 border-2 border-purple-200 border-t-purple-600 rounded-full"></div>
                    <span>Analyzing skin texture...</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-400">
                    <div className="h-4 w-4 border-2 border-gray-200 rounded-full"></div>
                    <span>Generating recommendations...</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Camera Capture Option */}
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-full w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Camera className="h-12 w-12 text-white mx-auto" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Take a Picture</h4>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Use your device camera to capture a clear, well-lit photo of your face. 
                    Our AI will instantly analyze your skin and provide recommendations.
                  </p>
                  
                  <ul className="text-left space-y-2 mb-8 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Natural lighting works best
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Remove makeup for accurate analysis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Face camera directly
                    </li>
                  </ul>
                  
                  <button
                    onClick={handleCameraCapture}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Camera className="h-5 w-5" />
                    <span>Open Camera</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Upload Option */}
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-6 rounded-full w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Upload className="h-12 w-12 text-white mx-auto" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Upload Image</h4>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Select a photo from your device gallery. Perfect for analyzing 
                    existing photos or if you prefer not to use your camera.
                  </p>
                  
                  <ul className="text-left space-y-2 mb-8 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      JPG, PNG, HEIC supported
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      High resolution preferred
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Clear facial view required
                    </li>
                  </ul>
                  
                  <button
                    onClick={handleFileUpload}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Upload className="h-5 w-5" />
                    <span>Choose File</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  
                  {/* Hidden file input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Trust & Privacy Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Matters</h3>
            <p className="text-lg text-gray-600">
              We're committed to protecting your data and ensuring a safe, secure experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-sm">
                <Shield className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Secure Processing</h4>
              <p className="text-sm text-gray-600">All images are processed securely and deleted immediately after analysis.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-sm">
                <Users className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">No Data Storage</h4>
              <p className="text-sm text-gray-600">We don't store or share your photos. Your privacy is our priority.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-sm">
                <CheckCircle className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Backed</h4>
              <p className="text-sm text-gray-600">Our AI recommendations are developed with dermatologists and beauty experts.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlowMatchAI;